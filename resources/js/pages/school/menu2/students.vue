<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      height="385"
      :loading="progressBar"
      dense
      :search="search"
      :footer-props="{
        'items-per-page-options': [10, 25, 50, 100, -1],
      }"
    >
      <v-progress-linear
        v-show="progressBar"
        slot="progress"
        color="green"
        indeterminate
      ></v-progress-linear>

      <template v-slot:top>
        <v-card-actions>
          <v-text-field
            v-model="search"
            small
            outlined
            dense
            hide-details=""
            label="Search"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>

          <v-btn
            dark
            small
            color="#00794b"
            style="text-transform: none"
            @click="addUser"
            ><v-icon>mdi-plus</v-icon> Add new Student</v-btn
          >
          <v-btn
            small
            color="orange"
            style="text-transform: none"
            dark
            @click="list"
            ><v-icon>mdi-refresh</v-icon></v-btn
          >
        </v-card-actions>
      </template>

      <template v-slot:[`item.active`]="{ item }">
        <v-switch
          dense color="success"
          small
          hide-details=""
          v-model="item.active"
          @click="deleteItem(item)"
          inset
          class=" m-0"
          :value="1"
        />
      </template>
      <template v-slot:[`item.id`]="{ item }">
        <v-hover v-slot="{ hover }">
          <v-btn
            class="px-1"
            :class="
              hover ? 'btn btn-dark text-white' : 'btn  btn-info text-white '
            "
            text
            small
            @click="editItem(item)"
          >
            <small>
              <v-icon size="15"> mdi-pencil </v-icon>
            </small>
          </v-btn>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-btn
            class="px-1"
            :class="
              hover ? 'btn btn-dark text-white' : 'btn  btn-warning  text-dark '
            "
            text
            small
            @click="editItem(item)"
          >
            <small>
              <v-icon size="15"> mdi-apps </v-icon>
            </small>
          </v-btn>
        </v-hover>
      </template>
    </v-data-table>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="900"
      transition="dialog-bottom-transition"
    >
      <v-card color="warning">
        <v-toolbar class="warning p-1" height="40">
          <h4 class="text-white">Student Information</h4>
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false" color="white">mdi-close</v-icon>
        </v-toolbar>

        <v-form ref="form">
          <v-card flat class="p-4">
            <v-row>
              <v-col cols="12" lg="3">
                <v-card width="150" height="150" class="p-2 m-2">
                  <v-img width="130" height="130" src="https://walrus-app-tna7x.ondigitalocean.app/img/Dashboard/logo.png"> </v-img
                ></v-card>
              </v-col>
              <v-col cols="12" lg="9">
                <v-row>
                  <v-col cols="12" lg="4">
                    <v-text-field
                      v-model="form.nick_name"
                      dense
                      small
                      hide-details="auto"
                      ><template slot="label">
                        Nick Name
                      </template></v-text-field
                    >
                  </v-col>
                  <v-col cols="12" lg="4">
                    <v-select
                      :rules="formRules"
                      v-model="form.active"
                      dense
                      small
                      hide-details=""
                      :items="list_user_status"
                      item-text="name"
                      item-value="id"
                    >
                      <template slot="label">
                        Status <abbr class="text-danger">* </abbr>
                      </template>
                    </v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" lg="4">
                    <v-text-field
                      v-model="form.first_name"
                      :rules="formRules"
                      dense
                      small
                      hide-details="auto"
                      ><template slot="label">
                        First Name <abbr class="text-danger">* </abbr>
                      </template></v-text-field
                    >
                  </v-col>
                  <v-col cols="12" lg="4">
                    <v-text-field
                      v-model="form.middle_name"
                      dense
                      clearable
                      hide-details="auto"
                      ><template slot="label"> Middle Name </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" lg="4">
                    <v-text-field
                      v-model="form.last_name"
                      placeholder="Last Name"
                      :rules="formRules"
                      dense
                      clearable
                      hide-details="auto"
                      flat
                      ><template slot="label">
                        Last Name <abbr class="text-danger">* </abbr>
                      </template>
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" xl="4">
                    <v-text-field
                      v-model="form.email"
                      :rules="emailRules"
                      dense
                      hide-details="auto"
                    >
                      <template slot="label">
                        Email Address <abbr class="text-danger">* </abbr>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" xl="4">
                    <v-text-field
                      v-model="form.contact"
                      dense
                      hide-details="auto"
                    >
                      <template slot="label"> Contact # </template>
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" class="pull-right">
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        class="info"
                        style="text-transform: none"
                        @click="save"
                        ><v-icon>mdi-content-save-all</v-icon> Save</v-btn
                      >
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <hr class="m-1" />

            <v-row>
              <v-col>
                <v-tabs icons-and-text>
                  <v-tab>
                    <small>Handled Subjects</small>
                    <v-icon>mdi-flag</v-icon>
                  </v-tab>
                  <v-tab-item>

                      <v-data-table
                        fixed-header
                        :headers="header1"
                        :items="data1"
                        dense
                        :items-per-page="5"
                        height="155"
                      >
                      </v-data-table>
                  </v-tab-item>
                  <v-tab>
                    <small>Teachers</small>
                    <v-icon>mdi-contacts</v-icon>
                  </v-tab>
                  <v-tab-item>   <v-data-table
                        fixed-header
                        :headers="header1"
                        :items="data1"
                        dense
                        :items-per-page="5"
                        height="155"
                      >
                      </v-data-table> </v-tab-item>

                </v-tabs>
              </v-col>
            </v-row>
          </v-card>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Swal from "sweetalert2";
import axios from "axios";
export default {
  metaInfo() {
    return { title: "Manage Students" };
  },
  middleware: "auth",
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  data: () => ({
    data: [],
    checkifnew: false,
    progressBar: false,
    search: "",
    rowsPerPageItems: [10, 25, 50, 100],
    headers: [
      {
        class: "border ",
        text: "Fullname",
        value: "fullname",
      },
            {
        class: "border ",
        text: "Year",
        value: "year",
      }, {
        class: "border ",
        text: "Section",
        value: "section",
      },
      { width: 10, class: "border ", text: "Status", value: "active" },
      { width: 150, class: "border ", text: "Action", value: "id" },
    ],
    dialog: false,
    formRules: [(v) => !!v || "This is required"],
    emailRules: [
      (v) =>
        v.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) || "Invalid Email address",
    ],
    form: {
      id: "",
      nick_name: "",
      first_name: "",
      last_name: "",
      middle_name: "",
      contact: "",
      email: "",
      active: "",

      course: [],
      year: [],
      id_number: [],
      picture: "",
    },
    list_user_type: [],
    list_user_status: [
      { name: "Active", id: "1" },
      { name: "Inactive", id: "0" },
    ],
    data1: [],
    header1: [
      { width: 160, class: "border", text: "Year", value: "year" },
      { width: 250, class: "border", text: "Course", value: "course" },
      { class: "border", text: "Subject", value: "name" },
      { class: "border", text: "Description", value: "description" },
      { width: 10, class: "border", text: "Unit", value: "unit" },
      { width: 10, class: "border", text: "Status", value: "active" },
      {
        width: 10,
        class: "border",
        text: "Action",
        value: "id",
        sortable: false,
      },
    ],

    //roles
    dialogSettings: false,
    refreshSettings: true,
  }),
  created() {
    if (this.user) {
      this.list();
    } else {
      this.$router.push({ name: "login" }).catch((errr) => {});
    }
  },
  methods: {
    addUser() {
      this.clearForm();
      this.checkifnew = true;
      this.dialog = true;
    },

    async list() {
      this.progressBar = true;
      await axios
        .get("/api/account/list", { params: { type: 3 } })
        .then((result) => {
          this.data = result.data;
          this.progressBar = false;
        });
    },

    async deleteItem(row) {
      await Swal.fire({
        title: "Do you want to delete this account?",
        html: "",
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "#CC0022",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const { data } = await axios.post("/api/user/active", row);
          return data;
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            type: "success",
            title:
              "The user has been successfully " +
              (row.active == 0 ? "active" : "inactive") +
              ".",
          });
          this.dialog = false;
        }
          this.list();
      });
    },

    async save() {
      if (this.$refs.form.validate()) {
        await Swal.fire({
          title:
            "Do you want to " +
            (this.form.id ? "update" : "save") +
            " this user?",
          text: "",
          icon: "question",
          showCancelButton: true,
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            const { data } = await axios.post("/api/user/save", this.form);
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          console.log(result);
          if (result.value) {
            if (result.value == 1) {
              Swal.fire({
                title: "The email has been already used by other user.",
                html: "",
                icon: "warning",
              });
              return false;
            }
            this.list();
            Swal.fire({
              icon: "success",
              title:
                "The request has been successfully " +
                (this.form.id ? "update" : "save") +
                ".",
            });
            this.dialog = false;
          }
        });
      }
    },
    editItem(row) {
      this.form.id = row.id;
      this.form.nick_name = row.nick_name;
      this.form.first_name = row.first_name;
      this.form.last_name = row.last_name;
      this.form.middle_name = row.middle_name;
      this.form.user_type = row.roles[0].name;
      this.form.contact = row.contact;
      this.form.active = row.active.toString();
      this.form.email = row.email;
      this.dialog = true;
    },

    clearForm() {
      for (var key in this.form) {
        this.form[key] = "";
      }

      this.checkifnew = false;
    },

    addRole(row) {
      this.dialogSettings = true;
      // Remove my-component from the DOM
      this.refreshSettings = false;
      this.$nextTick(() => {
        // Add the component back in
        this.refreshSettings = true;
      });
    },
  },
};
</script>
