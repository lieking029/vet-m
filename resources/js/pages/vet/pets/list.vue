<template>
  <div>

    <v-form ref="subForm" id="subForm">
      <!---------------------------------------------------------------------- sub category  -->
      <v-dialog v-model="sub_dialog" fullscreen>
        <!-- dialog body -->
        <v-card id="dialog" style="background-color: #dadcdc">
          <v-toolbar color="primary" dark>
            {{ formTitle }} Pet
            <v-spacer></v-spacer>
            <v-icon class="float-right" text @click="sub_dialog = false"
              >mdi-close
            </v-icon>
          </v-toolbar>
          <!-- dialog content -->
          <v-card-text
            class="pt-2"
            style="overflow-y: auto; background-color: #dadcdc"
          >
            <v-card flat class="p-4">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card class="p-4">
                    <v-row>
                      <span><b>My Information</b></span>
                      <v-spacer></v-spacer>
                      <v-col cols="4">
                        <v-select
                          :rules="formRules"
                          v-model="form.active"
                          dense
                          small
                          hide-details=""
                          :items="list_status"
                          item-text="name"
                          item-value="value"
                        >
                          <template slot="label">
                            Status <abbr class="text-danger">* </abbr>
                          </template>
                        </v-select>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" lg="4">
                        <v-card width="200" height="200" class="p-2 m-2">
                          <v-img
                            width="190"
                            contain
                            height="190"
                            :src="
                              form.picture
                                ? '../../../../../public/storage/files/vet/pets/picture/' + form.picture
                                    : 'https://provincial-veterinary-clinic.herokuapp.com/img/Pets/a1.jpg'
                            "
                          >
                          </v-img>
                            <v-card-actions>
                              <vue-dropzone
                                ref="myVueDropzonex"
                                class="dropzonexx"
                                id="training_fileuploadx"
                                v-on:vdropzone-success-multiple="
                                  uploadSuccessPicture
                                "
                                v-on:vdropzone-queue-complete="
                                  uploadQueCompletePicture
                                "
                                v-on:vdropzone-error="uploadErrorPicture"
                                :options="dropzoneOptionsPicture"
                              ></vue-dropzone>
                            </v-card-actions>
                            <br>
                        </v-card>
                      </v-col>
                      <v-col cols="12" lg="8">
                        <v-row>
                          <v-col class="py-1" cols="12" lg="12">
                            <v-text-field
                              :rules="formRules"
                              hide-details=""
                              v-model="form.name"
                              label=""
                            >
                              <template slot="label">
                                <div style="font-size: 14px; color: red">
                                  My Name *
                                </div>
                              </template>
                            </v-text-field>
                          </v-col>
                          <v-col class="py-1" cols="12" lg="8">
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
                          <v-col class="py-1" cols="12" lg="4">
                            <v-text-field
                              disabled
                              hide-details=""
                              v-model="age"
                              label=""
                            >
                              <template slot="label">
                                <div style="font-size: 14px">Age</div>
                              </template>
                            </v-text-field>
                          </v-col>
                          <v-col class="py-1" cols="12" lg="8">
                            <v-text-field
                              hide-details=""
                              v-model="form.breed"
                              label=""
                            >
                              <template slot="label">
                                <div style="font-size: 14px">Breed</div>
                              </template>
                            </v-text-field>
                          </v-col>
                          <v-col class="py-1" cols="12" lg="4">
                            <v-select
                              :rules="formRules"
                              v-model="form.gender"
                              hide-details=""
                              :items="list_gender"
                              item-text="name"
                              item-value="value"
                            >
                              <template slot="label">
                                Gender <abbr class="text-danger">* </abbr>
                              </template>
                            </v-select>
                          </v-col>
                          <v-col class="py-1" cols="12" lg="6">
                            <v-text-field
                              hide-details=""
                              v-model="form.color"
                              label=""
                            >
                              <template slot="label">
                                <div style="font-size: 14px">Color</div>
                              </template>
                            </v-text-field>
                          </v-col>
                          <v-col class="py-1" cols="12" lg="6">
                            <v-text-field
                              hide-details=""
                              v-model="form.weight"
                              label=""
                            >
                              <template slot="label">
                                <div style="font-size: 14px">Weight</div>
                              </template>
                            </v-text-field>
                          </v-col>
                          <v-col class="py-1" cols="12" lg="12">
                            <v-text-field
                              hide-details=""
                              v-model="form.microchip"
                              label=""
                            >
                              <template slot="label">
                                <div style="font-size: 14px">
                                  Microchip Number
                                </div>
                              </template>
                            </v-text-field>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                    <hr />
                    <span><b>My Owner details</b></span>
                    <v-row>
                      <v-col class="py-1" cols="12" lg="6">
                        <v-text-field
                          :rules="formRules"
                          hide-details=""
                          v-model="form.owner"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px; color: red">
                              Owner Name *
                            </div>
                          </template>
                        </v-text-field>
                      </v-col>

                      <v-col class="py-1" cols="12" lg="6">
                        <v-text-field
                          hide-details=""
                          v-model="form.email"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Email</div>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col class="py-1" cols="12" lg="6">
                        <v-text-field
                          hide-details=""
                          v-model="form.phone"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Phone #</div>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col class="py-1" cols="12" lg="12">
                        <v-textarea
                          rows="2"
                          hide-details=""
                          v-model="form.address"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Address</div>
                          </template>
                        </v-textarea>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-expansion-panels v-model="panel" multiple>
                    <v-expansion-panel>
                      <v-expansion-panel-header
                        ><b>My Parents</b></v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-row>
                          <v-col class="py-1" cols="12" lg="6">
                            <v-text-field
                              hide-details=""
                              v-model="form.mother"
                              label=""
                            >
                              <template slot="label">
                                <div style="font-size: 14px">Mother Name</div>
                              </template>
                            </v-text-field>
                          </v-col>
                          <v-col class="py-1" cols="12" lg="6">
                            <v-text-field
                              hide-details=""
                              v-model="form.mother_breed"
                              label=""
                            >
                              <template slot="label">
                                <div style="font-size: 14px">Breed</div>
                              </template>
                            </v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col class="py-1" cols="12" lg="6">
                            <v-text-field
                              hide-details=""
                              v-model="form.father"
                              label=""
                            >
                              <template slot="label">
                                <div style="font-size: 14px">Father Name</div>
                              </template>
                            </v-text-field>
                          </v-col>
                          <v-col class="py-1" cols="12" lg="6">
                            <v-text-field
                              hide-details=""
                              v-model="form.father_breed"
                              label=""
                            >
                              <template slot="label">
                                <div style="font-size: 14px">Breed</div>
                              </template>
                            </v-text-field>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                      <v-expansion-panel-header
                        ><b>My Allergies</b></v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-btn
                          @click="AddField(allergies.length)"
                          color="primary"
                          x-small
                          ><v-icon>mdi-plus</v-icon> Add
                        </v-btn>
                        <v-card
                          class="pt-4"
                          flat
                          height="130"
                          style="overflow-y: auto; overflow-x: hidden"
                        >
                          <v-row v-for="(val, key) in allergies" :key="key">
                            <v-col cols="11" class="py-1">
                              <v-card-actions class="p-0">
                                <v-textarea
                                  rows="1"
                                  v-model="form.allergies[key]"
                                  dense
                                  outlined
                                  hide-details=""
                                >
                                  <template slot="label">
                                    {{ key + 1 }}.Allergy
                                  </template>
                                </v-textarea>
                                <v-btn
                                  text
                                  small
                                  color="danger"
                                  @click="RemoveField(key)"
                                  ><v-icon>mdi-delete</v-icon></v-btn
                                >
                              </v-card-actions>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                      <v-expansion-panel-header
                        ><b>My Veterinarians</b></v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-btn
                          @click="AddFieldVet(veterinarians.length)"
                          color="primary"
                          x-small
                          ><v-icon>mdi-plus</v-icon> Add
                        </v-btn>
                        <v-card
                          class="pt-4"
                          flat
                          height="130"
                          style="overflow-y: auto; overflow-x: hidden"
                        >
                          <v-row v-for="(val, key) in veterinarians" :key="key">
                            <v-col cols="11" class="py-1">
                              <v-card-actions class="p-0">
                                <v-textarea
                                  rows="1"
                                  v-model="form.veterinarians[key]"
                                  dense
                                  outlined
                                  hide-details=""
                                >
                                  <template slot="label">
                                    {{ key + 1 }}. Veterinarian
                                  </template>
                                </v-textarea>
                                <v-btn
                                  text
                                  small
                                  color="danger"
                                  @click="RemoveFieldVet(key)"
                                  ><v-icon>mdi-delete</v-icon></v-btn
                                >
                              </v-card-actions>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                      <v-expansion-panel-header
                        ><b
                          >My Documents / Attachments
                        </b></v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-row>
                          <v-col class="py-1" cols="12" xl="12" lg="12">
                            <vue-dropzone
                              ref="myVueDropzone"
                              class="dropzonexz"
                              id="training_fileupload"
                              v-on:vdropzone-success-multiple="uploadSuccess"
                              v-on:vdropzone-queue-complete="uploadQueComplete"
                              v-on:vdropzone-error="uploadError"
                              :options="dropzoneOptions"
                            ></vue-dropzone>

                            <v-text-field
                              style="display: none"
                              v-model="form.attachment"
                              label="Document"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row>
                          <v-col
                            cols="12"
                            style="overflow-y: auto; max-height: 200px"
                          >
                            <v-simple-table dense>
                              <thead>
                                <tr>
                                  <th>File/s</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody v-if="form.attachment.length > 0">
                                <tr
                                  v-for="(val, key) in form.attachment"
                                  :key="key"
                                >
                                  <td>
                                    <a
                                      :href="'/storage/files/pets/attachment/' + val"
                                      download
                                    >
                                      {{ val.split("~")[0] }}
                                    </a>
                                  </td>
                                  <td>
                                    <v-btn
                                      class="px-1"
                                      @click="itemDelete(val)"
                                      :class="
                                        hover
                                          ? 'btn btn-dark text-white'
                                          : 'btn  btn-danger text-white '
                                      "
                                      text
                                      small
                                    >
                                      <small>
                                        <v-icon size="15"> mdi-delete </v-icon>
                                      </small>
                                    </v-btn>
                                  </td>
                                </tr>
                              </tbody>
                              <tbody v-else>
                                <tr>
                                  <td colspan="3" class="text-center">
                                    No Attachment found
                                  </td>
                                </tr>
                              </tbody>
                            </v-simple-table>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>

                    <v-expansion-panel>
                      <v-expansion-panel-header
                        ><b>Remarks</b></v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-btn
                          @click="AddFieldRemarks(remarks.length)"
                          color="primary"
                          x-small
                          ><v-icon>mdi-plus</v-icon> Add
                        </v-btn>
                        <v-card
                          class="p-4"
                          flat
                          style="overflow-y: auto; overflow-x: hidden"
                        >
                          <v-row v-for="(val, key) in remarks" :key="key">
                            <v-col cols="11" class="py-1">
                              <v-card-actions class="p-0">
                                <v-textarea
                                  rows="3"
                                  v-model="form.remarks[key]"
                                  dense
                                  outlined
                                  hide-details=""
                                >
                                  <template slot="label">
                                    {{ key + 1 }}.Remarks
                                  </template>
                                </v-textarea>
                                <v-btn
                                  text
                                  small
                                  color="danger"
                                  @click="RemoveFieldRemarks(key)"
                                  ><v-icon>mdi-delete</v-icon></v-btn
                                >
                              </v-card-actions>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#00794b"
                  depressed
                  style="text-transform: none"
                  dark
                  @click="store"
                >
                  <div v-if="form.id">
                    <v-icon>mdi-content-save-all</v-icon> Update
                  </div>
                  <div v-else>
                    <v-icon>mdi-content-save-settings</v-icon> Save
                  </div>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-card-text>
          <!-- dialog btn -->
        </v-card>
      </v-dialog>
    </v-form>

    <!---------------------------------------------------------------------- datatable  -->



    <v-data-table
      dense
      height="365" class="border table-striped thead-dark"
      :loading="progressBar"  fixed-header
      :headers="header"
      :items="data"
    >
      <template v-slot:top>
        <v-card-actions>

          <v-btn
            color="#00794b"
            depressed
            style="text-transform: none"
            dark
            @click="sub_dialog = true"
          >
            <v-icon>mdi-plus</v-icon> New Pet
          </v-btn>

          <v-spacer></v-spacer>

          <v-col class="py-0 pl-0" xl="6" lg="6" cols="12">
            <v-text-field
              v-model="search"
              small
              outlined
              dense
              hide-details=""

            label="Search (Name, Breed or Owner)"
              @keyup="getData"
            ></v-text-field>
          </v-col>
          <v-btn
            color="orange"
            style="text-transform: none"
            depressed
            small text
            dark
            @click="getData"
            ><v-icon>mdi-refresh</v-icon></v-btn
          >
        </v-card-actions>
      </template>

      <template v-slot:[`item.picture`]="{ item }">
        <v-img
          contain
          width="70"
          height="70"
          :src="'/storage/files/vet/pets/picture/' + item.picture"
        ></v-img>
      </template>

       <template v-slot:[`item.owner`]="{ item }">
     <small>  Owner: {{ item.owner }}<br> Address: {{ item.address }} <br> Phone #: {{ item.phone }} /   {{ item.email }}</small>
      </template>

      <template v-slot:[`item.id`]="{ item }">
        <v-btn
          class="px-1 btn btn-primary text-white"
          text
          small
          @click="sub_editItem(item)"
        >
          <small><v-icon size="15"> mdi-pencil </v-icon> Edit / View </small>
        </v-btn>

        <v-btn
          color="success"
          small
          dark
          v-if="item.active == 2"
          @click="sub_ActiveItem(item)"
          ><v-icon>mdi-checkbox-marked-outline</v-icon>
        </v-btn>
        <v-btn
          color="danger"
          small
          dark
          v-if="item.active == 1"
          @click="sub_ActiveItem(item)"
          ><v-icon>mdi-close-circle</v-icon>
        </v-btn>
      </template>


    </v-data-table>
  </div>
</template>

<style>
.dropzonexz {
  margin: 0px !important;
  padding: 0px !important;
  height: 50px;
  width: 100%;
  min-height: 0px !important;
}
.dropzonexx {
  position: absolute;
  top: 200px;
  margin: 0px !important;
  padding: 0px !important;
  height: 40px;
  width: 101%;
  left: -2px;
  min-height: 0px !important;
}
</style>


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
    page: 1,
    panel: [0, 3],
    menu: false,
    hover: false,
    search: "",
    group: "",
    allergies: [{}],
    veterinarians: [{}],
    remarks: [{}],
    age: "",
    list_status: [
      { name: "Active", value: 1 },
      { name: "Inactive", value: 2 },
    ],
    list_gender: [
      { name: "Male", value: "Male" },
      { name: "Female", value: "Female" },
    ],
    editedIndex: -1,
    formRules: [(v) => !!v || "This is required"],
    formRulesNumber: [
      (v) => {
        if (!isNaN(parseFloat(v)) && v >= 0 && v <= 30) return true;
        return "Input number only";
      },
    ],
    progressBar: false,
    data: [],

    // sub category
    sub_dialog: false,
    header: [
      { width: "5%", text: "Image", value: "picture", sortable: false },
      { width: "10%", text: "Breed", value: "breed", sortable: false },
      { width: "10%", text: "Name", value: "name", sortable: false },
      { width: "55%", text: "Owner", value: "owner", sortable: false },

      {
        width: "25%",
        text: "Action",
        value: "id",
        sortable: false,
      },
    ],
    form: {
      id: "",
      name: "",
      birth_date: "",
      breed: "",
      gender: "",
      color: "",
      picture: "",
      microchip: "",
      weight: "",
      mother: "",
      mother_breed: "",
      father: "",
      father_breed: "",
      owner: "",
      phone: "",
      email: "",
      address: "",
      allergies: [],
      veterinarians: [],
      attachment: [],
      remarks: [],
      active: 1,
    },

    dropzoneOptions: {
      url: "/api/vet/pets/attachment",
      maxFilesize: 25,
      uploadMultiple: true,
      thumbnailWidth: 400,
      addRemoveLinks: true,
      headers: { "My-Awesome-Header": "header value" },
      dictDefaultMessage:
        "<div style='border: dashed 1px orange;  margin-top: -25px; padding: 5px; font-size: 15px;'> <span style='font-size: 25px; color: blue;' class='mdi mdi-upload'></span> Click or Drag files </div> ",
    },
    dropzoneOptionsPicture: {
      url: "/api/vet/pets/picture",
      maxFilesize: 25,
      uploadMultiple: true,
      thumbnailWidth: 400,
      addRemoveLinks: true,
      headers: { "My-Awesome-Header": "header value" },
      dictDefaultMessage:
        "<div style='border: dashed 1px orange;   margin-top: -25px; padding: 5px; font-size: 15px;'> <span style='font-size: 25px; padding-left: 20px; color: blue;' class='mdi mdi-camera'></span> Upload </div> ",
    },
  }),

  // load
  mounted() {
    this.getData();
    // this.getDropdown();
  },

  // functions
  methods: {
    uploadSuccess: function (file, result) {
      for (var key in result["file"]) {
        this.form.attachment.push(result["file"][key].imagename);
      }
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
      this.form.attachment.splice(key, 1);
    },

    getAge() {
      var ageDifMs = Date.now() - new Date(this.form.birth_date).getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    },
    itemDelete(val) {
      this.editedIndex = this.form.attachment.indexOf(val);
      Swal.fire({
        title: "Do you want to delete this attachment?",
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "#CC0022",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          this.form.attachment.splice(this.editedIndex, 1);

          Swal.fire({
            icon: "success",
            title: "The attachment has been successfully deleted.",
            html: 'Press "Save" button to commit changes.',
          });
        }
      });
    },
    uploadSuccessPicture: function (file, result) {
      this.form.picture = result;
    },
    uploadQueCompletePicture: function (file) {
      this.$refs.myVueDropzonex.removeAllFiles(file);
    },
    uploadErrorPicture: function (file, result) {
      this.$refs.myVueDropzonex.removeAllFiles(file);
      Swal.fire({
        type: "warning",
        title: "Uploading Failed.",
        html: result,
      });
    },

    AddField(id) {
      this.allergies.push({});
    },
    RemoveField(event) {
      this.allergies.splice(event, 1);
      this.form.allergies.splice(event, 1);
    },

    AddFieldRemarks(id) {
      this.remarks.push({});
    },
    RemoveFieldRemarks(event) {
      this.remarks.splice(event, 1);
      this.form.remarks.splice(event, 1);
    },

    AddFieldVet(id) {
      this.veterinarians.push({});
    },
    RemoveFieldVet(event) {
      this.veterinarians.splice(event, 1);
      this.form.veterinarians.splice(event, 1);
    },

    // List
    async getData() {
      this.progressBar = true;
      await axios.get("/api/vet/pets/list", {
          params: {search: this.search},
        }).then((result) => { this.data = result.data;
        }).catch(except=>{});
        this.progressBar = false;
    },
    // Save / Update
    async store() {
      if (this.$refs.subForm.validate()) {
        await Swal.fire({
          title: "Do you want to " +
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
              "/api/vet/pets/save",
              this.form
            );
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result.value) {
            this.getData();
            this.sub_close();
            Swal.fire({
              icon: "success",
              title:
                "The pet information has been successfully " +
                (this.editedIndex > -1 ? "updated" : "saved"),
              html: "",
            });
            this.sub_dialog = false;
          }
        });
      }
    },
    sub_editItem(item) {
      this.sub_dialog = true;
      this.editedIndex = this.data.indexOf(item);
      this.allergies = [];
      this.veterinarians = [];
      this.attachment = [];
      this.remarks = [];
      this.form = item;
      for (var key in item) {
        if (key == "active") {
          this.form[key] = parseInt(item[key]);
        }
        if (key == "veterinarians") {
          for (var key1 in item[key]) {
            this.form[key][key1] = item[key][key1];
          }
          for (let index = 0; index < this.form[key].length; index++) {
            this.AddFieldVet();
          }
        }
        if (key == "remarks") {
          for (var key1 in item[key]) {
            this.form[key][key1] = item[key][key1];
          }
          for (let index = 0; index < this.form[key].length; index++) {
            this.AddFieldRemarks();
          }
        }
        if (key == "allergies") {
          for (var key1 in item[key]) {
            this.form[key][key1] = item[key][key1];
          }
          for (let index = 0; index < this.form[key].length; index++) {
            this.AddField();
          }
        }
      }
      this.getAge();
    },
    async sub_ActiveItem(item) {
      await Swal.fire({
        title:
          "Do you want to " +
          (item.active == 1 ? "Inactive " : "Active ") +
          item.name +
          "?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#00794b",
        cancelButtonColor: "#CC0022",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const { data } = await axios.post("/api/vet/pets/active", {
            id: item.id,
            active: item.active == 1 ? 2 : 1,
          });
          return data;
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            icon: "success",
            title:
              "The " +
              item.name +
              " has been successfully " +
              (item.active == 1 ? "Inactive" : "Active"),
            html: "",
          });
        }
        this.getData();
      });
    },
    sub_close() {
      this.form = {
        id: "",
        name: "",
        birth_date: "",
        breed: "",
        gender: "",
        color: "",
        picture: "",
        microchip: "",
        weight: "",
        mother: "",
        mother_breed: "",
        father: "",
        father_breed: "",
        owner: "",
        phone: "",
        email: "",
        address: "",
        allergies: [],
        veterinarians: [],
        attachment: [],
        remarks: [],
        active: 1,
      };
      this.allergies = [];
      this.veterinarians = [];
      this.attachment = [];
      this.remarks = [];
    },

    // roles
    addRole() {
      this.dialogSettings = true;
      // Remove my-component from the DOM
      this.refreshSettings = false;
      this.$nextTick(() => {
        // Add the component back in
        this.refreshSettings = true;
      });
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
