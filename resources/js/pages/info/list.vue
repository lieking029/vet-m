<template>
  <v-card-text>
    <v-row>
      <v-col>
        <h6 style="">
          <b style="color: #019267">SEARCH / UPDATE</b>
        </h6>
      </v-col>
    </v-row>
    <hr class="m-1" />
    <v-data-table fixed-header
      :headers="headers"
      :items="table.data" dense
      hide-default-footer :items-per-page="10"
      height="525"
      :loading="progressBar" >



      <v-progress-linear
        v-show="progressBar"
        slot="progress"
        color="green"
        indeterminate
      ></v-progress-linear>

      <template v-slot:top>
        <v-card-actions class="p-1">
          <v-row>
            <v-col cols="12" md="5">
              <v-autocomplete
                v-model="banner"
                dense
                outlined
                :return-object="false"
                multiple
                clearable
                small-chips
                @change="list"
                hide-details=""
                :items="list_banner"
                item-text="name"
                item-value="id"
              >
                <template slot="label"> Banner Program </template>
              </v-autocomplete>
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field
                v-model="search" 
                dense
                @keyup="list"
                outlined
                hide-details=""
              >
                <template slot="label">
                  Search (<small>Title, Agency or Coordinator</small>)
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                v-model="active"
                dense
                class="px-1"
                outlined
                small
                @change="list"
                hide-details=""
                :items="list_active"
                item-text="name"
                item-value="id"
              >
                <template slot="label"> Status </template>
              </v-select>
            </v-col>
          </v-row>

          <v-btn
            small
            color="orange"
            style="text-transform: none"
            dark text
            @click="list"
            ><v-icon>mdi-refresh</v-icon></v-btn
          >
        </v-card-actions>
      </template>
      
      <template v-slot:[`item.id`]="{ item }">
        <v-row>
          <v-col cols="9">
            <b> Reference #: </b> {{ item.reference }} <br /> 
            <b> Program: </b>{{ item.programs.name }} <br />
            <b> Title: </b> {{ item.title }}
          </v-col>
          <v-col cols="3" class="border-left">
            <br>
            <b> Date Received: </b>{{ getFormatDate(item.date, "MM/DD/YYYY") }}
            <br />
            <b> Status: </b> <v-chip color="secondary" class="text-dark" small>{{ item.statuses.name }}</v-chip>
            <br />
            <b> Budget: </b>{{ item.budget }} <br />
            <b> Agency: </b>{{ item.agency }} <br />
          </v-col>
        </v-row>
      </template>
      <template v-slot:[`item.reference`]="{ item }">
        <v-hover v-slot="{ hover }">
          <v-btn
            v-if="item.active == 1"
            class="px-1"
            :class="
              hover ? 'btn btn-dark text-white' : 'btn  btn-info text-white '
            " block
            text
            small
            @click="editItem(item)"
          >
            <small> <v-icon size="15"> mdi-pencil </v-icon> Edit/View </small>
          </v-btn>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-btn
            v-if="item.active == 1" block
            class="px-1"
            :class=" 
              hover ? 'btn btn-dark text-white' : 'btn  btn-danger text-white '
            "
            text
            small
            @click="deleteItem(item, 0)"
          >
            <small> <v-icon size="15"> mdi-delete </v-icon> Delete </small>
          </v-btn>
          <v-btn
            v-else
            class="px-1"
            :class="
              hover ? 'btn btn-dark text-white' : 'btn  btn-success text-white '
            "
            text
            small
            @click="deleteItem(item, 1)"
          >
            <small>
              <v-icon size="15"> mdi-keyboard-return </v-icon> Re-Active
            </small>
          </v-btn>
        </v-hover>
      </template> 
    </v-data-table>
    <div class=" text-center"> 
      <v-pagination
        v-model="page" 
        :total-visible="10"
        :length="table.last_page"
        color="red darken-2"
      ></v-pagination>
    </div> 
  </v-card-text>
</template>
 
 

<script>
import Swal from "sweetalert2";
import axios from "axios";
export default {
  middleware: "auth",
  data: () => ({
    table: [],
    page: 1,
    checkifnew: false,
    progressBar: false,
    search: "",
    rowsPerPageItems: [10, 25, 50, 100],
    headers: [
      {
        width: "1100px",
        class: "border ",
        text: "Description",
        value: "id",
        sortable: false,
      },
      {
          width: "5px",
        class: "border ",
        text: "Action",
        value: "reference",
        sortable: false,
      },
    ],
    list_banner: [],
    list_active: [
      { name: "Active", id: "1" },
      { name: "Inactive", id: "0" },
    ],
    banner: [],
    active: "",
  }),
  created() {
    this.getDropdown();
  },
  watch: {
    page(val) {
      this.page = val;
      this.list();
    },
  },
  methods: {
    async getDropdown() {
      await axios.get("/api/info/dropdowns").then((result) => { 
        this.list_banner = result.data.banner;
        this.banner = [];
        this.active = "1";
        this.list();
      });
    },
    async list() {
      this.progressBar = true; 
      await axios
        .get("/api/info/list", {
          params: { banner: this.banner, page: this.page, active: this.active, search: this.search },
        })
        .then((result) => {  
          this.table = result.data;
        });
          this.progressBar = false;
    },

    getFormatDate(e, format) {
      const date = moment(e);
      return date.format(format);
    },

    async deleteItem(row, status) {
      await Swal.fire({
        title:
          "Do you want to " +
          (status == 0 ? "delete" : "re-active") +
          " this information?",
        html: "",
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "#CC0022",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const { data } = await axios.post("/api/info/delete", row);
          return data;
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.value) {
          this.list();
          Swal.fire({
            type: "success",
            title:
              "The information has been successfully " +
              (status == 0 ? "deleted" : "returned to active") +
              ".",
          });
          this.dialog = false;
        }
      });
    },

    editItem(row) {
      this.$router.push({
        name: "info-edit",
        query: { p: row.hashed_id },
      });
    },

    async save() {
      if (this.$refs.form.validate()) {
        await Swal.fire({
          title:
            "Do you want to " +
            (this.form.id ? "update" : "save") +
            " this information?",
          text: "",
          icon: "question",
          showCancelButton: true,
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            const { data } = await axios.post("/api/info/save", this.form);
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          console.log(result);
          if (result.value) {
            this.list();
            Swal.fire({
              icon: "success",
              title:
                "The information has been successfully " +
                (this.form.id ? "update" : "save") +
                ".",
            });
            this.dialog = false;
          }
        });
      }
    },
  },
};
</script>