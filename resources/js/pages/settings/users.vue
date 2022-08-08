<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      height="343"
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
           <v-btn
            dark
            small
            color="#00794b"
            style="text-transform: none"
            @click="addUser"
            > Add new </v-btn
          >
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            small
            outlined
            dense
            hide-details=""
            label="Search"
          ></v-text-field>


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

      <template v-slot:[`item.active`]="{ item }">

        <v-switch
          dense
          color="success"
          small
          hide-details=""
          v-model="item.active"
          @click="deleteItem(item)"
          inset
          class="m-0"
          :value="1"
        />
      </template>
       <template v-slot:[`item.type`]="{ item }">
        <div v-if="item.type == 2">Admin</div>
        <div v-else>Client</div>
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
      </template>
    </v-data-table>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="700"
      transition="dialog-bottom-transition"
    >
      <v-card color="warning">
        <v-toolbar class="warning p-1" height="40">
          <h4 class="text-white">Users Information</h4>
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false" color="white">mdi-close</v-icon>
        </v-toolbar>

        <v-form ref="form">
          <v-card flat class="p-4">
            <v-row>
              <v-col cols="12" lg="4">
                <v-card width="200" height="200" class="p-2 m-2">
                  <v-img
                    width="190"
                    height="190"
                    :src="(form.picture? 'https://walrus-app-tna7x.ondigitalocean.app/storage/files/vet/user/'+form.picture :'https://provincial-veterinary-clinic.herokuapp.com/img/profile.png')"
                  >
                  </v-img><v-card-actions>
                    <vue-dropzone
                      ref="myVueDropzone"
                      class="dropzonex"
                      id="training_fileupload"
                      v-on:vdropzone-success-multiple="uploadSuccess"
                      v-on:vdropzone-queue-complete="uploadQueComplete"
                      v-on:vdropzone-error="uploadError"
                      :options="dropzoneOptions"
                    ></vue-dropzone>
                  </v-card-actions>
                 <v-text-field
                      v-model="form.picture"
                      dense   class="d-none"
                      small
                      hide-details="auto"
                      ><template slot="label">
                        Picture
                      </template></v-text-field
                    >
                </v-card>
              </v-col>
              <v-col cols="12" lg="8">
                <v-row>
                   <v-col cols="12" lg="6">
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

                  <v-col cols="12" lg="6">
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
                   <v-col cols="12" lg="12">
                         <v-menu
                              ref="menu"
                              v-model="menu"
                              :close-on-content-click="false"
                              :return-value.sync="form.birth_date"
                              transition="scale-transition"
                              offset-y
                              min-width="auto"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="form.birth_date"
                                  :rules="formRules"
                                  hide-details=""
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                >
                                  <template slot="label">
                                    Birthday <abbr class="text-danger">* </abbr>
                                  </template>
                                </v-text-field>
                              </template>
                              <v-date-picker
                                v-model="form.birth_date"
                                no-title
                                scrollable
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="menu = false"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="
                                    $refs.menu.save(form.birth_date);
                                    getAge();
                                  "
                                >
                                  OK
                                </v-btn>
                              </v-date-picker>
                            </v-menu>
                   </v-col>
                     <v-col cols="12" lg="12">
                    <v-text-field
                      v-model="form.address"
                      :rules="formRules"
                      dense
                      hide-details="auto"
                    >
                      <template slot="label">
                          Address <abbr class="text-danger">* </abbr>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" lg="12">
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

                  <v-col cols="12" lg="12">
                    <v-text-field
                      v-model="form.contact_no"
                      dense
                      hide-details="auto"
                    >
                      <template slot="label"> Contact # </template>
                    </v-text-field>
                  </v-col>
                    <v-col cols="12" lg="6">
                    <v-select
                      :rules="formRules"
                      v-model="form.type"
                      dense
                      small
                      hide-details=""
                      :items="list_user_type"
                      item-text="name"
                      item-value="id"
                    >
                      <template slot="label">
                        Type <abbr class="text-danger">* </abbr>
                      </template>
                    </v-select>
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

          </v-card>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
<style>
.dropzonex {
  position: absolute;
  top: 160px;
  margin: 0px !important;
  padding: 0px !important;
  height: 40px;
  width: 90%;
  min-height: 0px !important;
}
.dz-message {
  padding: 0px !important;
  margin-bottom: 2px !important;
  margin-left: 2px !important;
  text-align: left !important;
}
</style>
<script>
import { mapGetters } from "vuex";
import Swal from "sweetalert2";
import axios from "axios";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  metaInfo() {
    return { title: "Manage Students" };
  },

  components: {
    vueDropzone: vue2Dropzone,
  },
  middleware: "auth",
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  data: () => ({
    data: [],
    menu: false,
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
        text: "Email",
        value: "email",
      },
      {
        class: "border ",
        text: "Contact #",
        value: "contact_no",
      },
      {
        class: "border ",
        text: "User Type",
        value: "type",
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
      contact_no: "",
      address: "",
      birth_date: "",
      picture: "",

      email: "",
      active: "",
      type: "",

    },
    list_user_type: [{
      name: 'Admin', id: "2"
    },
    {
      name: 'Client', id: "1"
    }],
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
    dropzoneOptions: {
      url: "/api/account/attachment",
      maxFilesize: 25,
      uploadMultiple: true,
      thumbnailWidth: 400,
      addRemoveLinks: true,
      headers: { "My-Awesome-Header": "header value" },
      dictDefaultMessage:
        "<div style=' margin-top: -35px; padding: 5px; font-size: 15px;'> <span style='font-size: 20px; color: blue;' class='mdi mdi-camera'></span> Upload </div> ",
    },
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
    uploadSuccess: function (file, result) {
        this.form.picture =  result  ;
    },
    uploadQueComplete: function (file) {
      this.$refs.myVueDropzone.removeAllFiles(file);
    },
    uploadError: function (file, result) {
      this.$refs.myVueDropzone.removeAllFiles(file);
      Swal.fire({
        type: "warning",
        title: "Uploading Failed.",
        html: result,
      });
    },
    removeThisFile: function (file) {
      try {
        this.$refs.myVueDropzone.removeAllFiles(file);
      } catch (error) {}
    },
    deletefile(key) {
      try {
        this.$refs.myVueDropzone.removeAllFiles(true);
      } catch (error) {}
      this.form.picture.splice(key, 1);
    },

    addUser() {
      this.clearForm();
      this.checkifnew = true;
      this.dialog = true;
    },

    async list() {
      this.progressBar = true;
      await axios
        .get("/api/account/list" )
        .then((result) => {
          this.data = result.data;
          this.progressBar = false;
        });
    },

    async deleteItem(row) {
      await Swal.fire({
        title: "Do you want to "+
              (row.active == 0 ? "enable" : "disable") +" this account?",
        html: "",
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "#CC0022",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const { data } = await axios.post("/api/account/active", row);
          return data;
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        console.log(result.value)
        if (result.value) {
          Swal.fire({
            type: "success",
            title:
              "The user has been successfully " +
              (row.active == 0 ? "enabled" : "disabled") +
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
            const { data } = await axios.post("/api/account/save", this.form);
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result.value) {
            console.log(result.value)
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
      console.log(row)
      this.form.id = row.id;
      this.form.picture = row.picture;
      this.form.nick_name = row.nick_name;
      this.form.first_name = row.first_name;
      this.form.last_name = row.last_name;
      this.form.middle_name = row.middle_name;
      this.form.contact_no = row.contact_no;
      this.form.address = row.address;
      this.form.birth_date = row.birth_date;
      this.form.active = row.active.toString();
      this.form.type = row.type.toString();
      this.form.email = row.email;
      this.dialog = true;
    },

    clearForm() {
      for (var key in this.form) {
        if(key != 'type'){
        this.form[key] = "";

        }
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
