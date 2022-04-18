<template>
  <div>
    <v-form ref="subForm" id="subForm">
      <!---------------------------------------------------------------------- sub category  -->
      <v-dialog v-model="sub_dialog" max-width="700px">
        <!-- dialog body -->
        <v-card id="dialog" style="background-color: #dadcdc">
          <v-toolbar color="primary" dark>
            {{ formTitle }} Subject
            <v-spacer></v-spacer>
            <v-icon class="float-right" text @click="sub_dialog = false"
              >mdi-close
            </v-icon>
          </v-toolbar>
          <br />
          <!-- dialog content -->
          <v-card-text style="background-color: #dadcdc">
            <v-card class="p-4">
              <v-row>
                <v-col cols="12">
                  <v-row>
                    <v-col class="py-1" cols="12"  lg="4">
                      <v-select
                        :rules="formRules"
                        outlined
                        dense
                        :items="list_status"
                        hide-details=""
                        v-model="form.active"
                        item-text="name"
                        item-value="value"
                        label=""
                      >
                        <template slot="label">
                          <div style="font-size: 14px; color: red">
                            Status *
                          </div>
                        </template>
                      </v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                         <v-col class="py-1" cols="12"  lg="6">
                      <v-autocomplete
                        v-model="form.year"
                        dense
                        outlined
                        :return-object="false"
                        :rules="formRules"
                        multiple
                        clearable
                        small-chips
                        hide-details=""
                        :items="list_year"
                        item-text="name"
                        item-value="id"
                      >
                        <template slot="label">
                          <div style="font-size: 14px; color: red">
                            Year *
                          </div></template
                        >
                      </v-autocomplete>
                    </v-col>
                    <v-col class="py-1" cols="12"  lg="12">
                      <v-autocomplete
                        v-model="form.course"
                        dense
                        outlined
                        :return-object="false"
                        :rules="formRules"
                        multiple
                        clearable
                        small-chips
                        hide-details=""
                        :items="list_course"
                        item-text="name"
                        item-value="id"
                      >
                        <template slot="label">
                          <div style="font-size: 14px; color: red">
                            Course *
                          </div></template
                        >
                      </v-autocomplete>
                    </v-col>    
                    <v-col class="py-1" cols="12"  lg="12">
                      <v-text-field
                        :rules="formRules"
                        outlined
                        dense
                        hide-details=""
                        v-model="form.name"
                        label=""
                      >
                        <template slot="label">
                          <div style="font-size: 14px; color: red">Name *</div>
                        </template>
                      </v-text-field>
                    </v-col>
                    <v-col class="py-1" cols="12" xl="12" lg="12">
                      <v-textarea 
                        outlined
                        rows="2"
                        dense
                        hide-details=""
                        v-model="form.description"
                        label=""
                      >
                        <template slot="label">
                          <div style="font-size: 14px; ">
                            Description  
                          </div>
                        </template>
                      </v-textarea>
                    </v-col>
                           <v-col class="py-1" cols="12"  lg="4">
                      <v-text-field
                        :rules="formRulesNumber"
                        outlined type="number"
                        dense
                        hide-details="auto"
                        v-model="form.unit"
                        label=""
                      >
                        <template slot="label">
                          <div style="font-size: 14px; color: red">Unit *</div>
                        </template>
                      </v-text-field>
                    </v-col>
               
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
                      style="overflow-y: auto; max-height: 300px"
                    >
                      <v-simple-table dense>
                        <thead>
                          <tr>
                            <th>File/s</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody v-if="form.attachment.length > 0">
                          <tr v-for="(val, key) in form.attachment" :key="key">
                            <td>
                              <a
                                :href="'/storage/files/school/' + val"
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
                </v-col>
              </v-row>
              <hr />
              <v-row>
                <v-col>
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
                </v-col>
              </v-row>
            </v-card>
          </v-card-text>
          <!-- dialog btn -->
        </v-card>
      </v-dialog>
    </v-form>

    <!---------------------------------------------------------------------- datatable  -->

    <v-data-table
      dense
      height="330"
      :loading="progressBar"
      :headers="header"
      :items="data"
    >
      <template v-slot:top>
        <v-card-actions>
          <v-col class="py-0 pl-0" xl="4" lg="4" cols="12">
            <v-text-field
              v-model="search"
              small
              outlined
              dense
              hide-details=""
              label="Search"
              @keyup="getData"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>

          <v-btn
            color="#00794b"
            depressed
            style="text-transform: none"
            dark
            small
            @click="sub_dialog = true"
          >
            <v-icon>mdi-plus</v-icon> Add new
          </v-btn>

          <v-btn
            color="orange"
            style="text-transform: none"
            depressed
            small
            dark
            @click="getData"
            ><v-icon>mdi-refresh</v-icon></v-btn
          >
        </v-card-actions>
      </template>

      <template v-slot:[`item.active`]="{ item }">
        <v-switch
          dense
          small
          hide-details=""
          v-model="item.active"
          @click="sub_ActiveItem(item)"
          inset
          class="m-0"
          :value="1"
        ></v-switch>
      </template>
      <template v-slot:[`item.id`]="{ item }">
        <v-btn
          class="px-1 btn btn-primary text-white"
          text
          small
          @click="sub_editItem(item)"
        >
          <small><v-icon size="15"> mdi-pencil </v-icon> Edit </small>
        </v-btn>
      </template>

      <template v-slot:[`item.year`]="{ item }">
        <v-row no-gutters>
          <v-col v-for="(val, key) in item.year" :key="key" cols="6" class="m-0"
            ><v-icon size="10" color="success">mdi-checkbox-blank-circle</v-icon
            ><small> {{ val.name }} </small></v-col
          >
        </v-row>
      </template>

      <template v-slot:[`item.course`]="{ item }">
        <div v-for="(val, key) in item.course" :key="key">
          <div v-if="item.course.length - 1 > 1">
            <small v-if="key + 1 <= 2">
              <v-icon size="10" color="dark">mdi-checkbox-blank-circle</v-icon>
              {{ val.name }}
            </small>
            <small v-if="key + 1 == 2"
              ><br />
              <v-icon   size="10" color="dark"
                >mdi-plus</v-icon
              >
              more
            </small>
          </div>
          <div v-else>
            <small>
              <v-icon size="10" color="dark">mdi-checkbox-blank-circle</v-icon>
              {{ val.name }}
            </small>
          </div>
        </div>
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
.dz-message {
  padding: 0px !important;
  margin-bottom: 2px !important;
  margin-left: 2px !important;
  text-align: left !important;
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
    hover: false,
    search: "",
    group: "",
    list_course: [],
    list_year: [],
    list_status: [
      { name: "Active", value: "1" },
      { name: "Inactive", value: "0" },
    ],
    editedIndex: -1,
    formRules: [(v) => !!v || "This is required"],  
    formRulesNumber: [
      (v) => {
        if (!isNaN(parseFloat(v)) && v >= 0 && v <= 30)
          return true;
        return "Input number only";
      },
    ],
    progressBar: true,
    data: [],

    // sub category
    sub_dialog: false,
    header: [
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
    form: {
      year: "",
      name: "",
      description: "",
      active: "",
      unit: "",
      attachment: [],
      course: [],
      id: "",
    },

    dropzoneOptions: {
      url: "/api/school/subject/attachment",
      maxFilesize: 25,
      uploadMultiple: true,
      thumbnailWidth: 400,
      addRemoveLinks: true,
      headers: { "My-Awesome-Header": "header value" },
      dictDefaultMessage:
        "<div style='border: dashed 1px blue;  margin-top: -25px; padding: 5px; font-size: 15px;'> <span style='font-size: 25px; color: blue;' class='mdi mdi-upload'></span> Click or Drag files </div> ",
    },
  }),

  // load
  mounted() {
    this.getData();
    this.getDropdown();
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

    // main
    async getData() {
      this.progressBar = true;
      await axios
        .get("/api/school/subject/list", {
          params: {
            search: this.search,
          },
        })
        .then((result) => { 
          this.data = result.data;
          this.progressBar = false;
        });
    },
    async getDropdown() {
      await axios.get("/api/school/subject/dropdowns").then((result) => {
        this.list_course = result.data.course;
        this.list_year = result.data.year;
      });
    },

    async store() {
      if (this.$refs.subForm.validate()) {
        await Swal.fire({
          title:
            "Do you want to " +
            (this.editedIndex == -1 ? "save" : "update") +
            " this subject?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#00794b",
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            const { data } = await axios.post("/api/school/subject/save", this.form);
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
    sub_editItem(item) {
      this.sub_dialog = true;
      this.editedIndex = this.data.indexOf(item);
        var tempitem = item;
      for (var key in tempitem) {
        this.form[key] = tempitem[key];
        
          if(key == 'active'){ 
                this.form[key] =  tempitem[key].toString();
          }
         
         if(key == 'year'){
            for (var key1 in  tempitem[key]) { 
                this.form[key] =  tempitem['year_id'] ;
            }
         }
          if(key == 'course'){
            for (var key1 in  tempitem[key]) {   
                this.form[key] =  tempitem['course_id'] ;
            }
         }
      }
    },
    async sub_ActiveItem(item) {
       
      await Swal.fire({
        title:
          "Do you want to " +
          (item.active != 1 ? "Inactive " : "Active ") +
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
          const { data } = await axios.post(
            "/api/school/subject/active",
            {id: item.id, active: item.active??0}
          );
          return data;
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            icon: "success",
            title:
              "The category has been successfully " +
              (item.active != 1 ? "Inactive" : "Active"),
            html: "",
          });
        }
        this.getData();
      });
    },
    sub_close() {
      this.form = {
        year: "",
        name: "",
        description: "",
        active: "1",
        attachment: [],
        course: [],
        id: "",
      };
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

    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
};
</script>
