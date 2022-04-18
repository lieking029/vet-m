<template>
  <div>
    <!-- form -->
    <v-form ref="mainForm" id="mainForm">
      <!---------------------------------------------------------------------- dialog -->
      <v-dialog v-model="dialog" max-width="500px">
        <!-- dialog body -->
        <v-card id="dialog" style="background-color: #dadcdc">
          <v-toolbar color="primary" dark>
            List
            <v-spacer></v-spacer>
            <v-icon class="float-right" text @click="dialog = false"
              >mdi-close
            </v-icon>
          </v-toolbar>
          <br />
          <!-- dialog content -->
          <v-card-text style="background-color: #dadcdc">
            <v-card class="p-2">
              <v-container>
                <v-row>
                  <v-col class="py-1" cols="12" xl="12" lg="12" sm="12" md="4">
                    <v-text-field
                      :rules="formRules"
                      outlined
                      dense
                      hide-details=""
                      v-model="form.group"
                      label=""
                    >
                      <template slot="label">
                        <div style="font-size: 14px; color: red">Group *</div>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col class="py-1" cols="12" xl="12" lg="12" sm="12" md="4">
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

                  <v-col class="py-1" cols="12" xl="12" lg="12" sm="12" md="4">
                    <v-textarea
                      v-model="form.description"
                      outlined
                      dense
                      hide-details=""
                      label="Description"
                      rows="3"
                    ></v-textarea>
                  </v-col>
                </v-row> </v-container
              ><v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#00794b"
                  depressed
                  style="text-transform: none"
                  dark
                  @click="store"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-card-text>
          <!-- dialog btn -->
        </v-card>
      </v-dialog>
    </v-form>

    <v-form ref="subForm" id="subForm">
      <!---------------------------------------------------------------------- sub category  -->
      <v-dialog v-model="sub_dialog" max-width="700px">
        <!-- dialog body -->
        <v-card id="dialog" style="background-color: #dadcdc">
          <v-toolbar color="primary" dark>
            Sub Category
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
                    <v-col class="py-1" cols="12">
                      <v-text-field
                        :rules="formRules"
                        dense
                        disabled
                        hide-details=""
                        v-model="sub_form.group_name"
                        label=""
                      >
                        <template slot="label">
                          <div style="font-size: 14px">Group</div>
                        </template>
                      </v-text-field>
                    </v-col>

                    <v-col class="py-1" cols="12" xl="12" lg="12">
                  
                        <v-text-field
                          :rules="formRules"
                          outlined
                          dense
                          hide-details=""
                          v-model="sub_form.name"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px; color: red">
                              Name *
                            </div>
                          </template>
                        </v-text-field>
     <v-card-actions>
       <v-spacer></v-spacer>
                        <v-btn
                          color="#00794b"
                          small
                          depressed
                          style="text-transform: none"
                          dark
                          @click="sub_store"
                        >
                          <div v-if="sub_form.id"><v-icon>mdi-content-save-all</v-icon> Update</div>
                          <div v-else><v-icon>mdi-content-save-settings</v-icon> Save</div>
                        </v-btn>
                        <v-btn
                          color="warning"
                          style="text-transform: none"
                          depressed
                          small
                           class="text-dark"
                          @click="
                            sub_getData();
                            sub_close();
                          "
                          ><v-icon>mdi-refresh</v-icon> Refresh / New</v-btn
                        >
                      </v-card-actions>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="">
                      <v-data-table
                        dense
                        height="200"
                        :loading="progressBar"
                        :headers="sub_headers"
                        :items="sub_data"
                      >      
                       <template v-slot:[`item.active`]="{ item }">
                            <v-switch  dense small hide-details=""
                            v-model="item.active"   @click="sub_ActiveItem(item,item.active)"
                              inset  class="m-0"
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
                            <small
                              ><v-icon size="15"> mdi-pencil </v-icon> Edit
                            </small>
                          </v-btn>
                      
                        </template>
                      </v-data-table>
                    </v-col>
                  </v-row>
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
      id="table"
      dense
              height="330"
      hide-default-footer
      :items-per-page="10"
      :loading="progressBar"
      :headers="headers"
      :items="data.data"
    >
      <template v-slot:top>
        <v-card-actions>  <v-btn
            color="#00794b"
            depressed
            style="text-transform: none"
            dark
            small
            @click="dialog = true"
          >
              Add new
          </v-btn>

  <v-btn
            color="#60829e"
            depressed
            style="text-transform: none"
            dark
            small
            @click="addRole"
          >
            <v-icon>mdi-settings</v-icon> Settings
          </v-btn>
          <v-spacer></v-spacer>

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

      <!-- loading  -->
      <v-progress-linear
        v-show="progressBar"
        slot="progress"
        color="green"
        indeterminate
      ></v-progress-linear>
      <!-- btn -->
      <template v-slot:[`item.id`]="{ item }">
        <v-btn
          class="px-1 btn-success text-white"
          text
          small
          @click="sub_addCategory(item)"
        >
          <small><v-icon size="15"> mdi-plus </v-icon> Sub List </small>
        </v-btn>

        <v-btn
          class="px-1 btn btn-primary text-white"
          text
          small
          @click="editItem(item)"
        >
          <small><v-icon size="15"> mdi-pencil </v-icon> Edit </small>
        </v-btn>
      </template>
    </v-data-table>
    <div class="pbutton text-center pt-7">
      <v-pagination
        v-model="page"
        :total-visible="10"
        :length="data.last_page"
        color="red darken-2"
      ></v-pagination>
    </div>

    <v-dialog v-model="dialogSettings" max-width="700px">
      <v-card id="dialog" style="background-color: #dadcdc">
        <v-toolbar color="primary" dark>
          Roles
          <v-spacer></v-spacer>
          <v-icon class="float-right" text @click="dialogSettings = false">mdi-close </v-icon>
        </v-toolbar> 
        <!-- dialog content --> 
          <v-card class="p-1">
            <rolespage v-if="refreshSettings" />
          </v-card> 
      </v-card>
    </v-dialog>
  </div>
</template>
 

<script>
import axios from "axios";
import Swal from "sweetalert2";
import rolespage from "../settings/roles.vue";
export default {
  // declarations
  components: {
    rolespage,
  },
  data: () => ({
    page: 1,
    search: "",
    group: "",
    list_groups: [],

    editedIndex: -1,
    formRules: [(v) => !!v || "This is required"],
    dialog: false,
    dialogDelete: false,
    progressBar: true,
    deleteid: "",
    data: [],
    headers: [
      { class: "border", text: "Name", value: "name" },
      { class: "border", text: "Group", value: "group" },
      { class: "border", text: "Action", value: "id", sortable: false },
    ],
    form: {
      name: "",
      description: "",
      group: "",
      main: "1",
      active: 1,
      id: "",
    },

    // sub category
    sub_data: [],
    sub_dialog: false,
    sub_headers: [
      { class: "border", text: "Name", value: "name" },
      { width: 10, class: "border", text: "Status", value: "active" },
      { width: 10, class: "border", text: "Action", value: "id", sortable: false },
    ],
    sub_form: {
      name: "",
      group: "",
      group_name: "",
      description: "",
      main: "0",
      id: "",
    },

    // roles

    dialogSettings: false,
    refreshSettings: false,
  }),

  // load
  mounted() {
    this.getGroupList();
    this.group = "All";
    this.getData();
  },

  // functions
  methods: {
    // main
    async getGroupList() {
      this.list_groups.push({ name: "All", id: "All" });
      await axios.get("/api/settings/general/group/list").then((result) => {
        for (var key in result.data) {
          this.list_groups.push({
            name: result.data[key].group,
            id: result.data[key].group,
          });
        }
      });
    },
    async getData() {
      this.progressBar = true;
      await axios
        .get("/api/settings/general/list", {
          params: {
            page: this.page,
            search: this.search,
            group: this.group,
          },
        })
        .then((result) => {
          this.data = result.data;
          this.progressBar = false;
        });
    },
    async store() {
      if (this.$refs.mainForm.validate()) {
        await Swal.fire({
          title:
            "Do you want to " +
            (this.editedIndex > -1 ? "save" : "update") +
            " this category?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#00794b",
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            this.form.main = 1;
            const { data } = await axios.post(
              "/api/settings/general/store",
              this.form
            );
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result.value) {
            if (this.editedIndex > -1) {
              console.log(result.value);
              Object.assign(this.data.data[this.editedIndex], result.value);
            } else {
              this.data.data.push(result.value);
            }
            this.getGroupList();
            this.close();
            Swal.fire({
              icon: "success",
              title:
                "The category has been successfully " +
                (this.editedIndex > -1 ? "updated" : "saved"),
              html: "",
            });
          }
        });
      }
    },
    editItem(item) {
      this.editedIndex = this.data.data.indexOf(item);
      for (var key in item) {
        this.form[key] = item[key];
      }
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      for (var key in this.form) {
        this.form[key] = "";
      }
      this.editedIndex = -1;
    },

    // sub
    sub_addCategory(item) {
      this.sub_close();
      this.sub_dialog = true;
      this.sub_form.group = item.id;
      this.sub_form.group_name = item.name;
      this.sub_form.description = item.group;
      this.sub_getData();
    },
    async sub_getData() {
      this.progressBar = true;
      await axios
        .get("/api/settings/general/sub/list", {
          params: {
            group: this.sub_form.group,
          },
        })
        .then((result) => {
          this.sub_data = result.data;
          this.progressBar = false;
        });
    },
    async sub_store() {
      if (this.$refs.subForm.validate()) {
        await Swal.fire({
          title:
            "Do you want to " +
            (this.editedIndex > -1 ? "save" : "update") +
            " this sub category?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#00794b",
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            this.sub_form.main = 0;
            const { data } = await axios.post(
              "/api/settings/general/store",
              this.sub_form
            );
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result.value) {
            if (this.editedIndex > -1) {
              Object.assign(this.sub_data[this.editedIndex], result.value);
            } else {
              this.sub_data.push(result.value);
            }
            this.sub_close();
            Swal.fire({
              icon: "success",
              title:
                "The category has been successfully " +
                (this.editedIndex > -1 ? "updated" : "saved"),
              html: "",
            });
          }
        });
      }
    },
    sub_editItem(item) {
      this.editedIndex = this.sub_data.indexOf(item);
      for (var key in item) {
        this.sub_form[key] = item[key];
      }
      this.sub_dialog = true;
    }, 
    async sub_ActiveItem(item,status){ 
        await Swal.fire({
          title:
            "Do you want to " +
            (this.status == 1 ? "Inactive " : "Active ") +
            item.name +"?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#00794b",
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            this.sub_form.main = 0;
            const { data } = await axios.post(
              "/api/settings/general/active",
               item
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
                (this.editedIndex > -1 ? "updated" : "saved"),
              html: "",
            });
          }
            this.sub_getData()
        }); 
    },
    sub_close() {
      this.sub_form.name = "";
      this.sub_form.id = "";
      this.editedIndex = -1;
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
    dialog(val) {
      val || this.close();
    },

    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
};
</script>
