<template>
  <v-form ref="form">
    <v-card-text>
      <v-row>
        <v-col>
          <h4 style="">
            <b style="color: #019267">ADD NEW</b>
          </h4>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <hr class="m-1"/>
      <v-container>
        <v-card flat class="transparent">
          <v-card flat class="p-4" style="">
            <v-row>
              <v-col class="py-1 px-1" cols="12" lg="12">
                <v-card-text>
                  <v-row>
                    <v-col class="py-1" cols="12" lg="3">
                      <v-text-field
                        v-model="form.reference"
                        readonly
                        disabled
                        dense
                        outlined
                        hide-details=""
                      >
                        <template slot="label"> Reference #. </template>
                      </v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="py-1" cols="12" lg="2">
                      <v-select
                        :rules="formRules"
                        v-model="form.quarter"
                        dense
                        outlined
                        small
                        hide-details=""
                        :items="list_quarter"
                        item-text="name"
                        item-value="name"
                      >
                        <template slot="label">
                          Quarter <abbr class="text-danger">* </abbr>
                        </template>
                      </v-select>
                    </v-col>
                    <v-col class="py-1" cols="12" lg="2">
                      <v-text-field
                        v-model="form.year"
                        :rules="formRules"
                        dense
                        outlined
                        hide-details=""
                      >
                        <template slot="label">
                          Year
                          <abbr class="text-danger">* </abbr></template
                        >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="py-1 d-none" cols="12" lg="2">
                      <v-text-field
                        v-model="form.id"
                        readonly
                        disabled
                        dense
                        outlined
                        hide-details=""
                      >
                        <template slot="label"> ID No. </template>
                      </v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="py-1" cols="12" lg="4">
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="form.date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="form.date"
                            dense
                            :rules="formRules"
                            outlined
                            hide-details=""
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          >
                            <template slot="label">
                              Date Received <abbr class="text-danger">* </abbr>
                            </template>
                          </v-text-field>
                        </template>
                        <v-date-picker v-model="form.date" no-title scrollable>
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="menu = false">
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(form.date)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="py-1" cols="8">
                      <v-select
                        :rules="formRules"
                        v-model="form.program"
                        dense
                        outlined
                        small
                        hide-details=""
                        :items="list_banner"
                        item-text="name"
                        item-value="id"
                      >
                        <template slot="label">
                          Program <abbr class="text-danger">* </abbr>
                        </template>
                      </v-select>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="py-1" cols="4">
                      <v-select
                        :rules="formRules"
                        v-model="form.project"
                        dense
                        outlined
                        small
                        hide-details=""
                        :items="list_project"
                        item-text="name"
                        item-value="id"
                      >
                        <template slot="label">
                          Project Type <abbr class="text-danger">* </abbr>
                        </template>
                      </v-select>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="py-1" cols="12" lg="8">
                      <v-text-field
                        v-model="form.title"
                        :rules="formRules"
                        dense
                        small
                        outlined
                        hide-details=""
                        ><template slot="label">
                          Title <abbr class="text-danger">* </abbr>
                        </template></v-text-field
                      >
                    </v-col>
                    <v-col class="py-1" cols="12" lg="4">
                      <v-text-field
                        v-model="form.agency"
                        :rules="formRules"
                        dense
                        outlined
                        hide-details=""
                        ><template slot="label">
                          Agency <abbr class="text-danger">* </abbr></template
                        >
                      </v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="py-1" cols="12">
                      <v-textarea
                        v-model="form.general_objectives"
                        :rules="formRules"
                        dense
                        rows="3"
                        outlined
                        hide-details=""
                        flat
                        ><template slot="label">
                          General Objectives <abbr class="text-danger">* </abbr>
                        </template>
                      </v-textarea>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="py-1" cols="12">
                      <v-textarea
                        v-model="form.specific_objectives"
                        :rules="formRules"
                        dense
                        rows="3"
                        outlined
                        hide-details=""
                        flat
                        ><template slot="label">
                          Specific Objectives
                          <abbr class="text-danger">* </abbr>
                        </template>
                      </v-textarea>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="py-1" cols="12">
                      <v-textarea
                        v-model="form.brief_description"
                        dense
                        rows="3"
                        outlined
                        hide-details=""
                        flat
                        ><template slot="label">
                          Brief Description of the Techonology
                        </template>
                      </v-textarea>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="py-1" cols="12">
                      <v-textarea
                        v-model="form.expected_output"
                        dense
                        rows="3"
                        outlined
                        hide-details=""
                        flat
                        ><template slot="label"> Expected Output </template>
                      </v-textarea>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" lg="6">
                      <v-row>
                        <v-col class="py-1">
                          <v-textarea
                            v-model="form.project_sites"
                            dense
                            rows="2"
                            outlined
                            hide-details=""
                            flat
                            ><template slot="label"> Project Sites </template>
                          </v-textarea>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="py-1">
                          <v-textarea
                            v-model="form.farmer_benificiaries"
                            dense
                            rows="3"
                            outlined
                            hide-details=""
                            flat
                            ><template slot="label">
                              Farmer Beneficiaries
                            </template>
                          </v-textarea>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col class="py-1">
                          <v-select
                            :rules="formRules"
                            v-model="form.type_r4d"
                            dense
                            outlined
                            small
                            hide-details=""
                            :items="list_r4d"
                            item-text="name"
                            item-value="id"
                          >
                            <template slot="label">
                              Type of R4D <abbr class="text-danger">* </abbr>
                            </template>
                          </v-select>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col class="py-1">
                          <v-textarea
                            v-model="form.rde_agenda"
                            dense
                            rows="3"
                            outlined
                            hide-details=""
                            flat
                            ><template slot="label"> RDE Agenda </template>
                          </v-textarea>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="py-1">
                          <v-text-field
                            v-model="form.coordinator"
                            :rules="formRules"
                            dense
                            outlined
                            hide-details=""
                          >
                            <template slot="label">
                              Coordinator
                              <abbr class="text-danger">* </abbr></template
                            >
                          </v-text-field>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <v-row>
                        <v-col class="py-1" cols="12">
                          <v-text-field
                            v-model="form.budget"
                            :rules="rulesNumber"
                            dense
                            outlined
                            hide-details=""
                          >
                            <template slot="label">
                              Budget
                              <abbr class="text-danger">* </abbr></template
                            >
                          </v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="py-1" cols="12">
                          <v-text-field
                            v-model="form.duration"
                            dense
                            outlined
                            hide-details=""
                          >
                            <template slot="label"> Duration </template>
                          </v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="py-1" cols="12">
                          <v-select
                            :rules="formRules"
                            v-model="form.status"
                            dense
                            outlined
                            small
                            hide-details=""
                            :items="list_status"
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
                        <v-col class="py-1" cols="12">
                          <v-textarea
                            v-model="form.findings"
                            :rules="formRules"
                            dense
                            rows="7"
                            outlined
                            hide-details=""
                          >
                            <template slot="label">
                              Findings
                              <abbr class="text-danger">* </abbr></template
                            >
                          </v-textarea>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      ><v-btn @click="dialog = true" color="primary" x-small
                        ><v-icon>mdi-plus</v-icon> Add field</v-btn
                      ></v-col
                    >
                  </v-row> 
                  <v-row   v-for="(val,key) in multifield" :key="key"> 
                    <v-col   class="py-1 d-none">
                      <v-text-field  
                        v-model="form.multifield_name[key]" 
                        dense 
                        hide-details=""
                      > 
                         <template slot="label">
                            Field Name
                           </template>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" class="py-1">
                      <v-card-actions class="p-0">
                        <v-textarea    rows="1"
                          v-model="form.multifield_value[key]"  
                          dense
                          outlined
                          hide-details=""
                        >
                          <template slot="label">
                            {{ form.multifield_name[key] }}
                            </template
                          >
                        </v-textarea>
                        <v-btn text small color="danger" @click="RemoveField(key)"
                          ><v-icon>mdi-delete</v-icon></v-btn
                        >
                      </v-card-actions>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
            </v-row>
            <hr />
            <v-row>
              <v-col class="py-1 px-1" cols="12" lg="12">
                <v-card flat min-height="143">
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <v-select
                          v-model="attachment_type"
                          dense
                          outlined
                          small
                          hide-details=""
                          :items="list_attachment_type"
                          item-text="name"
                          item-value="name"
                        >
                          <template slot="label"> Attachment Type </template>
                        </v-select>
                        <br />
                        <vue-dropzone
                          ref="myVueDropzone"
                          class="dropzonex"
                          id="training_fileupload"
                          v-on:vdropzone-sending="sendingEvent"
                          v-on:vdropzone-success-multiple="uploadSuccess"
                          v-on:vdropzone-queue-complete="uploadQueComplete"
                          v-on:vdropzone-error="uploadError"
                          :options="dropzoneOptions"
                        ></vue-dropzone>
                        <v-spacer></v-spacer>

                        <v-text-field
                          style="display: none"
                          v-model="form.attachment"
                          label="Document"
                        ></v-text-field>

                        <v-text-field
                          style="display: none"
                          v-model="form.attachment_type"
                          label="Document"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <hr class="m-1" />
                    <v-row>
                      <v-col
                        cols="12"
                        style="overflow-y: auto; max-height: 300px"
                      >
                        <v-simple-table dense>
                          <thead>
                            <tr>
                              <th>Type</th>
                              <th>File/s</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody v-if="form.attachment.length > 0">
                            <tr
                              v-for="(val, key) in form.attachment"
                              :key="key"
                            >
                              <td>{{ form.attachment_type[key] }}</td>
                              <td>
                                <a
                                  :href="'/storage/files/info/' + val"
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
                                No Attachment yet
                              </td>
                            </tr>
                          </tbody>
                        </v-simple-table>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <hr class="m-2" />
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="primary" large @click="save">SAVE</v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-card>
      </v-container>
    </v-card-text>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular
    ></v-overlay>

  

    <v-dialog v-model="dialog" max-width="400px">
      <v-card id="dialog" style="background-color: #dadcdc">
        <v-toolbar color="primary" dark>
         Add Field
          <v-spacer></v-spacer>
          <v-icon class="float-right" text @click="dialog = false">mdi-close </v-icon>
        </v-toolbar> 
        <!-- dialog content --> 
          <v-card class="p-4">
                <v-text-field
                        v-model="form.multifield_name[multifield.length]" 
                        dense 
                        hide-details=""
                      > 
                         <template slot="label">
                            Field Name
                           </template>
                      </v-text-field>
                 <v-card-actions>
                   <v-spacer></v-spacer> <v-btn class="pull-right" @click="AddField(multifield.length)" color="primary"  small
                        ><v-icon>mdi-plus</v-icon> Add</v-btn
                      >
                 </v-card-actions>
                     
          </v-card> 
      </v-card>
    </v-dialog>

  </v-form>


</template>
 
<style>
.dropzonex {
  margin: 0px !important;
  height: 110px;
  width: 100%;
  min-height: 0px !important;
}
.dz-message {
  margin-top: -20px !important;
  padding: 10px !important;
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
    return { title: "Add new" };
  },
  components: {
    vueDropzone: vue2Dropzone,
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },

  data: () => ({
    progressBar: false, 
    menu: false,
    overlay: false,
    hover: false,
    multifield:[],
    
    dialog: false,

    formRules: [(v) => !!v || "This is required"],
    rulesNumber: [
      (v) => {
        if (!isNaN(parseFloat(v)) && v >= 1 && v <= 100000000000000)
          return true;
        return "Input amount in numeric format w/o (,. or PHP)";
      },
    ],
    form: {
      id: "",
      date: "",
      reference: "",
      program: "",
      title: "",
      agency: "",
      project: "",

      general_objectives: "",
      specific_objectives: "",
      brief_description: "",
      expected_output: "",
      project_sites: "",
      type_r4d: "",
      rde_agenda: "",
      budget: "",
      status: "",
      findings: "",
      quarter: "",
      year: "",duration: '',
      coordinator: "",
      attachment: [],
      attachment_type: [],
      multifield_name:[], 
      multifield_value:[], 
    },
    formReset: {
      id: "",
      date: "",
      reference: "",
      program: "",
      title: "",
      agency: "",
      project: "",

      general_objectives: "",
      specific_objectives: "",
      brief_description: "",
      expected_output: "",
      project_sites: "",
      type_r4d: "",
      rde_agenda: "",
      budget: "",
      status: "",
      findings: "",
      quarter: "",
      year: "",duration: '',
      coordinator: "",
      attachment: [],
      attachment_type: [],
    },
    list_quarter: [],
    list_banner: [],
    list_project: [],
    list_status: [],
    list_r4d: [],
    list_attachment_type: [],
    attachment_type: "",

    dropzoneOptions: {
      url: "/api/info/attachment",
      maxFilesize: 25,
      uploadMultiple: true,
      thumbnailWidth: 400,
      addRemoveLinks: true,
      headers: { "My-Awesome-Header": "header value" },
      dictDefaultMessage:
        "<div style='border: dashed 1px blue; padding: 25px; font-size: 15px;'> <span style='font-size: 25px; color: blue;' class='mdi mdi-upload'></span> Click or Drag files </div> ",
    },
  }),

  methods: {
    sendingEvent(file, xhr, formData) {
      formData.append("type", this.attachment_type);
    },
    uploadSuccess: function (file, result) {
      this.form.attachment_type.push(result["name"]);
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
    getFormatDate(e, format) {
      const date = moment(e);
      return date.format(format);
    },

    async getDropdowns() {
      await axios.get("/api/info/dropdowns").then((result) => {
        this.list_quarter = result.data.quarter;
        this.list_banner = result.data.banner;
        this.list_project = result.data.project;
        this.list_status = result.data.status;
        this.list_r4d = result.data.r4d;
        this.list_attachment_type = result.data.attachment;
        this.attachment_type = result.data.attachment[0].name;
      });
      this.get();
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
          if (result.value) {
            Swal.fire({
              icon: "success",
              title:
                "The information has been successfully " +
                (this.form.id ? "update" : "save") +
                ".",
            }); 
            
            
            this.form.reference = result.value.reference
            this.form.id = result.value.id
          }
        });
      }
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
          this.form.attachment_type.splice(this.editedIndex, 1);

          Swal.fire({
            icon: "success",
            title: "The attachment has been successfully deleted.",
            html: 'Press "Save" button to commit changes.',
          });
        }
      });
    },

   
    AddField(id) { 
      if (!this.form.multifield_name[id]) {
        Swal.fire({
          icon: "warning",
          title: "Field Label is required",
          html: "",
        });
      } else {
        this.multifield.push({});
        this.dialog = false;
      }
    },
    RemoveField(event)  {    
      this.multifield.splice(event, 1);
      this.form.multifield_name.splice(event, 1);
      this.form.multifield_value.splice(event, 1); 
    },


    async get() {
      if (this.$route.query.p) {
        this.overlay = true;
        await axios
          .get("/api/info/specific", { params: { p: this.$route.query.p } })
          .then((result) => {
            this.form = result.data;
            if (result.data.attachment) {
              this.form.attachment = JSON.parse(result.data.attachment);
              this.form.attachment_type = JSON.parse(
                result.data.attachment_type
              );
            }
            if (result.data.date) {
              this.form.date = this.getFormatDate(
                result.data.date,
                "YYYY-MM-DD"
              );
            }

            if (result.data.program) {
              this.form.program = parseInt(result.data.program);
            }

            if (result.data.project) {
              this.form.project = parseInt(result.data.project);
            }

            if (result.data.type_r4d) {
              this.form.type_r4d = parseInt(result.data.type_r4d);
            }
            if (result.data.status) {
              this.form.status = parseInt(result.data.status);
            }
          });
        this.overlay = false;
      }
    },
  },

  created() {
    if (this.user) {
      this.getDropdowns();
    } else {
      this.$router.push({ name: "login" }).catch((errr) => {});
    }
  },
};
</script>