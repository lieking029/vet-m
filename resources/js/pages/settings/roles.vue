<template>

<div class="p-1"> 
 
 <v-form ref="form" id="form">
    <v-expansion-panels 
       accordion
       mandatory
       v-model="panel"
         
           > 
             <!-------------------------------dropdown lists --> 
            <v-expansion-panel   v-for="(val,key) in dropdowns.loop_group" :key="key" >
              <v-expansion-panel-header 
                class="border-bottom "
                @click="getGeneralList(val); dropdowns.form.group = val"
                >{{ val }}</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <v-card-actions class="bgcolor" >
                  <v-spacer></v-spacer>
                  <v-btn
                    color="#00794b"
                    depressed
                    style="text-transform: none"
                    dark
                    small
                    @click="dropdowns.dialog = true; clearGeneral();"
                  >
                    Add New  {{ val }}
                  </v-btn>
                  <v-btn
                    color="warning"
                    style="text-transform: none"
                    depressed
                    small 
                    @click="getGeneralList(val)"
                    >Refresh</v-btn
                  >
                </v-card-actions>

                <v-data-table  dense 
                  :items-per-page="10"
                  :loading="dropdowns.progressBar"
                  :headers="dropdowns.headers"
                  height="300"
                  :items="dropdowns.data"
                >
                  <v-progress-linear
                    v-show="dropdowns.progressBar"
                    slot="progress"
                    color="green"
                    indeterminate
                  ></v-progress-linear>

                  <template v-slot:[`item.id`]="{ item }">
                    <v-hover v-slot="{ hover }">
                      <v-btn
                        class="px-1"
                        :class="
                          hover
                            ? 'btn btn-primary text-white'
                            : 'btn btn-link text-primary'
                        "
                        text
                        small
                        @click="editItemGeneral(item)"
                      >
                       <small>  <v-icon size="20"> mdi-pencil </v-icon>  </small>
                      </v-btn>
                    </v-hover>
                  </template>
                </v-data-table>
              <!---------------------------------------------------------------------- dialog ng role  -->
              <v-dialog v-model="dropdowns.dialog" max-width="500px">
              <v-card style="background-color: #f2f3f0">
                <v-toolbar class="info">
                  <h4 class="text-white">List setup</h4>
                  <v-spacer></v-spacer>
                  <v-icon @click="dropdowns.dialog = false" color="white">mdi-close</v-icon>
                </v-toolbar> 
                    <v-card flat>
          
                      <v-container >
                        <v-row>
                          <v-col   cols="12" xl="12" lg="12" sm="12" md="4"> 
                            <v-text-field outlined dense :rules="resources.formRules" v-model="dropdowns.form.name" label="">
                              <template slot="label"> 
                              Name  <abbr class="text-danger">* </abbr> 
                              </template>
                            </v-text-field>
                            <v-text-field outlined dense  v-model="dropdowns.form.description" label="">
                              <template slot="label">
                              Description 
                              </template>
                            </v-text-field>
                      
                                <v-text-field outlined :rules="resources.formRules" dense disabled v-model="dropdowns.form.group" label="">
                              <template slot="label" >
                                  Group <abbr class="text-danger">* </abbr> 
                              </template>
                            </v-text-field>
                          </v-col>
                        </v-row>
                        <v-divider class="m-0" />
                      </v-container>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="#00794b"
                          style="text-transform: none"
                          depressed
                          dark
                          @click="storeGeneral(val)"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>  
              </v-card>
              </v-dialog> 

              </v-expansion-panel-content>
            </v-expansion-panel>

            <!-------------------------------role -->
            <v-expansion-panel  >
              <v-expansion-panel-header
                class="border-bottom "
                @click="getRoles"
                >Roles</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <v-card-actions >
                  <v-spacer></v-spacer>
                  <v-btn
                    color="#00794b"
                    depressed
                    style="text-transform: none"
                    dark
                    small
                    @click="addRole"
                  >
                    Add New
                  </v-btn>
                  <v-btn
                    color="#00794b"
                    style="text-transform: none"
                    depressed
                    small
                    dark
                    @click="getRoles"
                    >Refresh</v-btn
                  >
                </v-card-actions>

                <v-data-table 
                  dense 
                  :items-per-page="5"
                  :loading="resources.progressBar"
                  :headers="roles.headers"
                  :items="roles.data"
                >
                  <v-progress-linear
                    v-show="resources.progressBar"
                    slot="progress"
                    color="green"
                    indeterminate
                  ></v-progress-linear> 
                  
                  <template v-slot:[`item.name`]="{ item }">
                  {{item.name}} <br>
                        <small> {{item.description}}  </small>  
                  </template>

                  <template v-slot:[`item.id`]="{ item }">
                    <v-hover v-slot="{ hover }">
                      <v-btn
                        class="px-1"
                        :class="
                          hover
                            ? 'btn btn-primary text-white'
                            : 'btn btn-link text-primary'
                        "
                        text
                        small
                        @click="editItemRoles(item)"
                      >
                        <v-icon size="20"> mdi-pencil </v-icon>
                        <small>  </small>
                      </v-btn>
                    </v-hover>

                    <v-hover v-slot="{ hover }">
                      <v-btn
                        class="px-1"
                        :class="
                          hover
                            ? 'btn btn-info text-white'
                            : 'btn btn-link text-info'
                        "
                        text
                        small
                        @click="addPermission(item)"
                      >
                        <v-icon size="20"> mdi-plus </v-icon>
                        <small>   </small>
                      </v-btn>
                    </v-hover>
                  </template>
                </v-data-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-------------------------------permission --> 
            <v-expansion-panel   >
              <v-expansion-panel-header  
                class="border-bottom "
                @click="getPermissions"
                >Permission list</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <v-card-actions class="bgcolor" >
                  <v-spacer></v-spacer>
                  <v-btn
                    color="#00794b"
                    depressed
                    style="text-transform: none"
                    dark
                    small
                    @click="permissions.dialog = true"
                  >
                    Add New
                  </v-btn>
                  <v-btn
                    color="#00794b"
                    style="text-transform: none"
                    depressed
                    small
                    dark
                    @click="getPermissions"
                    >Refresh</v-btn
                  >
                </v-card-actions>

                <v-data-table  dense 
                  :items-per-page="10"
                  :loading="resources.progressBar"
                  :headers="permissions.headers"
                  :items="permissions.data"
                >
                  <v-progress-linear
                    v-show="resources.progressBar"
                    slot="progress"
                    color="green"
                    indeterminate
                  ></v-progress-linear>

                  <template v-slot:[`item.id`]="{ item }">
                    <v-hover v-slot="{ hover }">
                      <v-btn
                        class="px-1"
                        :class="
                          hover
                            ? 'btn btn-primary text-white'
                            : 'btn btn-link text-primary'
                        "
                        text
                        small
                        @click="editItemPermissions(item)"
                      >
                       <small>  <v-icon size="20"> mdi-pencil </v-icon>   </small>
                      </v-btn>
                    </v-hover>
                  </template>
                </v-data-table>
              </v-expansion-panel-content>
            </v-expansion-panel>
         
            <v-expansion-panel  >
              <v-expansion-panel-header >
                Create Seeder from existing table and values
              </v-expansion-panel-header>
              <v-expansion-panel-content class="p-4">
            
                    <v-text-field
                      class="" hide-details="" outlined dense
                      v-model="seederTablename"
                      label="Table name"
                    ></v-text-field>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="#00794b"
                        small
                        depressed
                        dark
                        @click="getSeeder"
                      >
                        Extract
                      </v-btn>
                    </v-card-actions>
                    <v-textarea
                      outlined hide-details="" dense
                      v-model="seederColumns" 
                      rows="3"
                    ></v-textarea> 
              </v-expansion-panel-content>
            </v-expansion-panel> 
    </v-expansion-panels> 
 </v-form>
 
 <v-form ref="mainForm" id="mainForm">
      <!---------------------------------------------------------------------- dialog ng role  -->
      <v-dialog v-model="roles.dialog" max-width="450px" 
        transition="dialog-bottom-transition">
          <v-toolbar color="primary" dark class="p-1" height="40">
          <h5>Role</h5>
          <v-spacer></v-spacer>
          <v-icon class="float-right" text @click="roles.dialog = false"
            >mdi-close
          </v-icon>
        </v-toolbar>
        <v-card id="dialog" flat  > 
          <v-card-text class="bgcolor"> 
              <v-container  >
                <v-row>
                  <v-col cols="12" xl="12" lg="12" sm="12" md="4"> 
                    <v-text-field v-model="roles.role.name" outlined dense hide-details="" label="">
                      <template slot="label">
                        <div style="font-size: 14px; color: red">
                          Role Name *
                        </div>
                      </template>
                    </v-text-field>
                  </v-col>
                   <v-col cols="12">
                    <v-textarea rows="3" outlined dense hide-details="" v-model="roles.role.description" label="">
                      <template slot="label">
                        <div style="font-size: 14px">  Description</div>
                      </template>
                    </v-textarea>
                  </v-col>
                </v-row>
                <v-divider class="m-0" />
              </v-container>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#00794b"
                  style="text-transform: none"
                  depressed
                  dark
                  @click="storeRolesConfirmation"
                >
                  Save
                </v-btn>
              </v-card-actions> 
          </v-card-text>
        </v-card>
      </v-dialog>
      <!---------------------------------------------------------------------- dialog ng permission  -->
      <v-dialog v-model="permissions.dialog" max-width="450px" 
        transition="dialog-bottom-transition">
          <v-toolbar color="primary" dark class="p-1" height="40">
          <h5> Permission</h5>
          <v-spacer></v-spacer>
          <v-icon class="float-right" text @click="permissions.dialog = false"
            >mdi-close
          </v-icon>
        </v-toolbar>
        <v-card id="dialog" flat >  
          <v-card-text class="bgcolor"> 
              <v-container  >
                <v-row>
                  <v-col   class="d-none"  cols="12"  >
                    <v-text-field
                    outlined dense hide-details=""
                      v-model="permissions.permission.id"
                      label=""
                    
                    >
                    </v-text-field>
                  </v-col>
                      <v-col   cols="12">
                    <v-text-field outlined dense hide-details=""
                      v-model="permissions.permission.name"
                      label=""
                    >
                      <template slot="label">
                        <div style="font-size: 14px; color: red">
                          Permission Name *
                        </div>
                      </template>
                    </v-text-field>
                  </v-col>
                      <v-col   cols="12">
                    <v-textarea outlined dense hide-details=""
                      v-model="permissions.permission.description"
                      label="" rows="3"
                    >
                      <template slot="label">
                        <div style="font-size: 14px">
                            Description
                        </div>
                      </template>
                    </v-textarea>
                  </v-col>
                </v-row> 
              </v-container> 
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#00794b"
                  style="text-transform: none"
                  depressed small
                  dark
                  @click="storePermissionsConfirmation"
                >
                  Save
                </v-btn>
              </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
      <!---------------------------------------------------------------------- add permission to role -->
      <v-dialog v-model="new_permission.dialog" max-width="500px"  
        transition="dialog-bottom-transition">
           <v-toolbar color="primary" dark>
          <h5>Role Permissions </h5>
          <v-spacer></v-spacer>
          <v-icon class="float-right" text @click="new_permission.dialog  = false"
            >mdi-close
          </v-icon>
        </v-toolbar>
        <v-card id="dialog" class="bgcolor pt-4">  
          <v-card-text class="bgcolor">
            <v-card flat>
              <v-data-table
                dense height="300" 
                class="px-4"
                v-model="new_permission.selected"
                :items-per-page="10"  fixed-header
                :loading="resources.progressBar"
                :headers="new_permission.headers"
                :items="permissions.data"
                show-select
              >
                <v-progress-linear
                  v-show="resources.progressBar"
                  slot="progress"
                  color="green"
                  indeterminate
                ></v-progress-linear>
              </v-data-table>

            </v-card>
            
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#00794b"
                  style="text-transform: none"
                  depressed small
                  dark
                  @click="storeAddPermissionsConfirmation"
                >
                  Save
                </v-btn>
              </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>

 </v-form>


</div>


</template>

  
<script>
import { mapGetters } from "vuex";
import axios from "axios"; 
import Swal from "sweetalert2"; 
export default {
  // declarations
  middleware: "auth",
  computed: {
    ...mapGetters({
            user: 'auth/user', 
            selected: 'accounts/row'
        }), 
    formTitle() {
      return this.resources.editedIndex === -1 ? "ADD NEW " : "UPDATE ";
    }, 
  }, 
  metaInfo() {
    return { title: "Roles and Permission" };
  },
  data: () => ({ 
    panel: [0],
    resources: {
      formRules: [(v) => !!v || "This is required"],
      progressBar: false,
      editedIndex: -1, 
    },
    data: "",
    progressBar: false,
    seeder_data: '',
    seeder_name: '',
    isSelecting: "",
    date: new Date().toISOString().substr(0, 10),
    menu: false,
     
    

    // --------------------------------------------------role
    roles: {
      dialog: false,
      headers: [
        { class: "border", text: "Role name", align: "start", value: "name" }, 
        { width: '150', class: "border", text: "Action", value: "id" },
      ],
      data: [],
      role: { name: "", id: "" },
    },
    // --------------------------------------------------permission
    permissions: {
      dialog: false,
      headers: [
        {
          class: "border",
          text: "Permission name",
          align: "start",
          value: "name",
        }, 
        {  width: '100', class: "border", text: "Action", value: "id" },
      ],
      data: [],
      permission: { name: "", description: "", id: "" },
    },
    // --------------------------------------------------user role
    user_roles: {
      data: [], 
      dialog: false,
      listuserstatus: [{'name':'Active','id':'1'},
                       {'name':'Inactive','id':'0'}],
      listuserroles: [],
      headers: [
        {
          class: "border",
          text: "Employee",
          align: "start",
          value: "name",
        },
        { class: "border", text: "Current Role/s", value: "roles.name" },
        { class: "border", text: "Action", value: "id" },
      ],
      form: { name: "", email: "", password:'', status:'', roles:[], id: "" },

    },

    // --------------------------------------------------set a role permissions
    new_permission: {
      dialog: false,
      selected: [],
      headers: [
        { class: "border", text: "Permission", align: "start", value: "name" }, 
      ],
      rolename: "",
    },
    // --------------------------------------------------set user role
    new_role: {
      dialog: false,
      selected: [],
      username: "",
      userid: "",
      data: [],
      headers: [
        { class: "border", text: "Role", align: "start", value: "name" }, 
      ],
    },
   
    //---------------------------------------------------general lists
    dropdowns :{
        progressBar: false, 
        dialog: false,
        headers: [
          { class: "border", text: "Name", align: "start", value: "name" }, 
          // { class: "border", text: "Group", value: "group" },
          { class: "border", text: "Action", value: "id" },
        ],
        data: [],
        form: { name: "",description: "", group: "",   id: "" },
        list_groups: [], 
        loop_group: [],
    },


   
    //---------------------------------------------------seeds
    seederTablename: "",
    seederColumns: "",
  }),

  // load
  created() { 
    this.getRoles();
    this.getGeneralList();
    // if(!this.user.permissionslist.includes("Enable - Manage Accounts")){
    //    this.$router.push({ name: 'not-found' }); 
    // }else{
      // this.getUserRoles();
    //   if(!this.user.permissionslist.includes("Enable - System Setup")){ 
   
    //   }else{
    //     this.panel=[1]
    //   }
    // }  
  },

  // functions
  methods: {
  
    addRole(){
      for (var key in this.roles.role) {
        this.roles.role[key] = '';  
      }  
      this.roles.dialog = true
    },
    // role
    async getRoles() {
      let self = this;
      self.resources.progressBar = true;
      self.roles.data = [];
      await axios
        .get("/api/settings/roles/list")
        .then((result) => {
          self.roles.data = result.data.data;
          self.user_roles.listuserroles = result.data.data 
          self.resources.progressBar = false;
        })
        .catch((result) => {
          Swal.fire({
            type: "warning",
            title: "Error handle,Please contact Digitech in this issue!",
            html: "Error Code: GRL-0",
          });
        });
    },
    // store validation
    storeRolesConfirmation() {
      Swal.fire({
        title: "Do you want to save this changes?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00794b",
        cancelButtonColor: "#CC0022",
        confirmButtonText: "Confirm",
      }).then((result) => {  
        if (result.value) {  
          this.storeRoles();
        }
      });
    },
    // save roles
    async storeRoles() {
      await axios
        .post("/api/settings/roles/store", this.roles.role)
        .then((result) => {
          if (this.resources.editedIndex > -1) {
            Object.assign(
              this.roles.data[this.resources.editedIndex],
              result.data
            );
          } else {
            this.roles.data.push(result.data);
          }
          Swal.fire({
            type: "success",
            title: "Successfully Saved!",
            html: "",
          });
        })
        .catch((result) => {
          Swal.fire({
            type: "warning",
            title: "Error handle,Please contact Digitech in this issue!",
            html: "Error Code: GRL-1",
          });
        });
      this.close();
    },
    // edit
    editItemRoles(item) {
      this.resources.editedIndex = this.roles.data.indexOf(item);
      this.roles.role.name = item.name;
      this.roles.role.description = item.description;
      this.roles.role.id = item.id;
      this.roles.dialog = true;
    },


    // permission
    async getPermissions() {
      let self = this;
      self.resources.progressBar = true;
      self.permissions.data = [];
      await axios
        .get("/api/settings/permissions/list")
        .then((result) => { 
          self.permissions.data = result.data.data;
          self.resources.progressBar = false;
        })
        .catch((result) => {
          Swal.fire({
            type: "warning",
            title: "Error handle,Please contact Digitech in this issue!",
            html: "Error Code: GRL-3",
          });
        });
    },
    // store validation
    storePermissionsConfirmation() {
        Swal.fire({
                title: "Do you want to save this changes?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#00794b",
                cancelButtonColor: "#CC0022",
                confirmButtonText: "Confirm",
              }).then((result) => {
                if (result.value) {
                  this.storePermissions();
                }
              });  
    },
    // save roles
    async storePermissions() {
      await axios
        .post("/api/settings/permissions/store", this.permissions.permission)
        .then((result) => {
          if (this.resources.editedIndex > -1) {
            Object.assign(
              this.permissions.data[this.resources.editedIndex],
              result.data
            );
          } else {
            this.permissions.data.push(result.data);
          }
          Swal.fire({
            type: "success",
            title: "Successfully Saved!",
            html: "",
          });
        })
        .catch((result) => {
          Swal.fire({
            type: "warning",
            title: "Error handle,Please contact Digitech in this issue!",
            html: "Error Code: GRL-4",
          });
        });
      this.close();
    },
    // edit
    editItemPermissions(item) { 
      this.resources.editedIndex = this.permissions.data.indexOf(item);
      this.permissions.permission.name = item.name;
      this.permissions.permission.description = item.description;
      this.permissions.permission.id = item.id;
      this.permissions.dialog = true;
    }, 
    
    // add role permission
    async getRolePermissions(item) {
      let self = this;
      self.resources.progressBar = true;
     self.permissions.data = [];
      await axios
        .get("/api/settings/permissions/list", { params: { role: item } })
        .then((result) => { 
         self.permissions.data = result.data.data;
          self.new_permission.selected = result.data.selected;
          self.resources.progressBar = false;
        })
        .catch((result) => {
          Swal.fire({
            type: "warning",
            title: "Error handle,Please contact Digitech in this issue!",
            html: "Error Code: GRL-3",
          });
        });
    },
    addPermission(item) {
      this.new_permission.dialog = true;
      this.new_permission.rolename = item.name;
      this.getRolePermissions(item.name);
    },
    // store validation
    storeAddPermissionsConfirmation() {
      Swal.fire({
        title: "Add all selected permission?",
        html: "This permission/s will apply to all users with the same roles, Permission/s will apply after refreshing the page.",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00794b",
        cancelButtonColor: "#CC0022",
        confirmButtonText: "Confirm",
      }).then((result) => {
        if (result.value) {
          this.storeAddPermissions();
        }
      });
    },
    // save role permission
    async storeAddPermissions() {
      await axios
        .post("/api/settings/role/permission/store", {
          selected: this.new_permission.selected,
          role: this.new_permission.rolename,
        })
        .then((result) => { 
          Swal.fire({
            type: "success",
            title: "Successfully!",
            html: "",
          });
          this.getRoles();
        })
        .catch((result) => {
          Swal.fire({
            type: "warning",
            title: "Error handle,Please contact Digitech in this issue!",
            html: "Error Code: GRL-4",
          });
        });
      this.close();
    },
 
    // close
    close() {
      this.roles.dialog = false;
      this.permissions.dialog = false;
      (this.resources.editedIndex = -1),
        this.$nextTick(() => {
          this.roles.role = { name: "", id: "" };
          this.permissions.permission = { name: "", id: "" };
        });
    },
    
// user role
    async getUserRoles() {
      let self = this;
      self.resources.progressBar = true;
      this.user_roles.data = [];
      await axios
        .get("/api/settings/user/role/list")
        .then((result) => {  
          this.user_roles.data = result.data;
          self.resources.progressBar = false;
        })
        .catch((result) => {
          Swal.fire({
            type: "warning",
            title: "Error handle,Please contact Digitech in this issue!",
            html: "Error Code: GRL-0",
          });
        });
    },  
    addItemUser(){
      this.getUserRoles();
      for (var key in this.user_roles.form) {
        this.user_roles.form[key] = '';
        if(key == 'roles'){ 
           this.user_roles.form.roles  = '' ;
        } 
      } 
      this.user_roles.dialog = true
    },
    // edit
    editItemUser(item) { 
      this.getRoles();
      this.resources.editedIndex = this.roles.data.indexOf(item);  
      for (var key in item) {
        this.user_roles.form[key] = item[key];  
          //  this.user_roles.form.roles  = item.roles  ; 
      } 
      this.user_roles.dialog = true;
    }, 
  
  //general lists 
    async getGeneralList(val){ 
      this.dropdowns.progressBar = true
      await axios
        .get("/api/settings/general/list",{params:{group: val}})
        .then((result) => {  
          console.log(result)
          if(val){
            this.dropdowns.data = result.data;  
          }else{
            this.dropdowns.loop_group = [...new Set(result.data.map(item => item.group))]; 
          } 
           this.dropdowns.progressBar = false
        })
    },

   // save general
    async storeGeneral(val) {
      if (this.$refs.form.validate()) { 
        await Swal.fire({
          title:
            "Do you want to " +
            (this.dropdowns.form.id ? "update" : "save") +
            " this data?",
          type: "question",
          showCancelButton: true,
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            const { data } = await axios.post("/api/settings/general/store", this.dropdowns.form);
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result.value) {
            this.getGeneralList(val);
            this.clearGeneral();
            Swal.fire({
              type: "success",
              title:
                "The data has been successfully " +
                (this.dropdowns.form.id ? "update" : "save") +
                ".",
            });
            this.dropdowns.dialog = false;
          }
        });
      }
    }, 

   editItemGeneral(item) {   
      for (var key in item) {
        this.dropdowns.form[key] = item[key];    
      } 
      this.dropdowns.dialog = true;
    }, 
    clearGeneral(){
      for (var key in this.form) {
        this.form[key] = '';    
      } 
    },


       // fetch general lists group via freefield_2
    async getSeeder() {
      const { data } = await axios.get("/api/general/seeder", {
        params: { id: this.seederTablename },
      }); 
      this.seederColumns = data;
    },
 
  }, 
   
};
</script>
