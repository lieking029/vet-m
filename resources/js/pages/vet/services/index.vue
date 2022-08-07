<template>
  <div>
    <v-container>
    <v-card-text>
       <v-row>
        <v-col class="text-white">
          <h2>Services</h2>
        </v-col>
      </v-row>
      <hr class="m-2 white" />
      <v-card class="mb-2">

           <v-card-actions >
                <v-autocomplete
            v-model="search"  dense
            hide-details=""
            :items="list_services"
            @change="getData(); page = 1"
            item-text="name"
            item-value="name"
          >
            <template slot="label"> Services </template>
                </v-autocomplete>
                <v-spacer></v-spacer>
                  <v-pagination
                  v-model="page"
                  :total-visible="6"
                  :length="data.last_page"
                  color="red darken-2"
                ></v-pagination>
              </v-card-actions>
      </v-card>

        <v-row>
          <v-col v-for="(vals, keys) in data.data" :key="keys" cols="12" sm="4">
            <v-card >
              <v-row no-gutters>
                <v-col cols="12" sm="12">
                  <v-img
                    :src="`https://provincial-veterinary-clinic.herokuapp.com/storage/files/vet/services/` + vals.picture"
                    height="200px"
                  >
                    <span
                      class="text-h5 white--text pl-4 pt-4 d-inline-block"
                    ></span>
                  </v-img>
                </v-col>
                <v-col cols="12" sm="12" v-if="vals.amount">
                  <v-card flat class="p-2">  <h5>
                    <strong class="header text-dark">{{ vals.name }}</strong>
                  </h5>
                 {{ vals.description }} <br>

                Fee: {{ vals.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                  </v-card>
                  <hr class="m-1" />
                </v-col>
              </v-row>

              <v-card-actions class="white">
                <v-spacer></v-spacer>
                <v-btn depressed text color="info" small :to="{ name: 'appointments'}"
                  >Apply for appointment</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-card-text>
    </v-container>
  </div>
</template>



<script>
import axios from "axios";
import Swal from "sweetalert2";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  // declarations
  data: () => ({
    data: [],
    search: "All",
    page: 1,
    list_services: [],
    active: false,
  }),

  // load
  mounted() {
    this.getData();
  },

  // functions
  methods: {
    // main
    async getData() {
      this.progressBar = true;
      await axios
        .get("/api/vet/services/list", {
          params: {
            page: this.page,
            search: this.search,
          },
        })
        .then((result) => {
          this.data = result.data.data;
          this.progressBar = false;
          this.list_services = result.data.services
          this.list_services.unshift({name: 'All'})
        });
    },

    async store() {
      if (this.$refs.subForm.validate()) {
        await Swal.fire({
          title:
            "Do you want to " +
            (this.editedIndex == -1 ? "save" : "update") +
            "   pet informations?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#00794b",
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            const { data } = await axios.post(
              "/api/vet/animals/save",
              this.form
            );
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          console.log(result);
          if (result.value) {
            this.getData();
            this.sub_close();
            Swal.fire({
              icon: "success",
              title:
                "The subject has been successfully " +
                (this.editedIndex > -1 ? "updated" : "saved"),
              html: "",
            });
            this.sub_dialog = false;
          }
        });
      }
    },
  },
  //new of update title
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add new " : "Update ";
    },
  },
  // on changes
  watch: {
    page(val) {
      this.page = val;
      this.getData();
    },
    data() {
      this.progressBar = false;
    },
    sub_dialog(val) {
      val || this.sub_close();
    },
  },
};
</script>
