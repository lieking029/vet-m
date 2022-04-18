<template>
  <div>
    <v-form ref="subForm" id="subForm">
      <!---------------------------------------------------------------------- sub category  -->
      <v-dialog v-model="sub_dialog" width="900">
        <!-- dialog body -->
        <v-card id="dialog" style="background-color: #dadcdc">
          <v-toolbar color="primary" dark>
            {{ formTitle }} Appointment details
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
            <v-card flat class="p-2">
              <v-row no-gutters> 
                <v-col cols="12" sm="6" v-if="form.types == '1'"> 
                  <v-card class="p-4" >
                    <v-row>
                      <v-col class="p-2 m-0" cols="12" lg="4">
                        <v-card height="100%" width="100%" class="p-2">
                          <v-img
                            contain
                            :src="
                              form.picture
                                ? '/storage/files/vet/pets/picture/' + form.picture
                                : '/img/pets/a1.jpg'
                            "
                          >
                          </v-img>
                        </v-card>
                      </v-col>
                      <v-col cols="12" lg="8">
                        <v-row>
                          <v-col class="py-1" cols="12" lg="12">
                            <v-text-field
                              hide-details=""
                              disabled
                              v-model="form.breed"
                              label=""
                            >
                              <template slot="label">
                                <div style="font-size: 14px">Breed</div>
                              </template>
                            </v-text-field>
                          </v-col>
                          <v-col class="py-1" cols="12" lg="12">
                            <v-text-field
                              :rules="formRules"
                              v-model="form.gender"
                              hide-details=""
                              disabled
                            >
                              <template slot="label"> Gender </template>
                            </v-text-field>
                          </v-col>
                          <v-col class="py-1" cols="12" lg="12">
                            <v-text-field
                              :rules="formRules"
                              v-model="form.birth_date"
                              hide-details=""
                              disabled
                            >
                              <template slot="label">
                                <div style="font-size: 14px">Birthdate</div>
                              </template>
                            </v-text-field>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col class="py-1" cols="12" lg="12">
                        <v-text-field
                          disabled
                          hide-details=""
                          v-model="form.owner"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Owner Name</div>
                          </template>
                        </v-text-field>
                      </v-col>

                      <v-col class="py-1" cols="12" lg="6">
                        <v-text-field
                          hide-details=""
                          disabled
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
                          disabled
                          v-model="form.phone"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Phone #</div>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col class="py-1" cols="12" lg="12">
                        <v-text-field
                          hide-details=""
                          disabled
                          v-model="form.address"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Address</div>
                          </template>
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6" v-else>
                <v-card class="p-4" >
                    <v-row> 
                      <v-col cols="12" lg="12">
                        <v-row>
                          <v-col class="py-1" cols="12" lg="12">
                            <v-text-field
                              hide-details=""
                              disabled
                              v-model="form.type"
                              label=""
                            >
                              <template slot="label">
                                <div style="font-size: 14px">Type</div>
                              </template>
                            </v-text-field>
                          </v-col>
                          <v-col class="py-1" cols="12" lg="8">
                            <v-text-field
                              :rules="formRules"
                              v-model="form.specific_type"
                              hide-details=""
                              disabled
                            >
                              <template slot="label"> Specific Type </template>
                            </v-text-field>
                          </v-col>
                             <v-col class="py-1" cols="12" lg="4">
                            <v-text-field
                              :rules="formRules"
                              v-model="form.count"
                              hide-details=""
                              disabled
                            >
                              <template slot="label"> Count </template>
                            </v-text-field>
                          </v-col>
                            <v-col class="py-1" cols="12" lg="12">
                            <v-text-field
                              :rules="formRules"
                              v-model="form.farm_name"
                              hide-details=""
                              disabled
                            >
                              <template slot="label">
                                <div style="font-size: 14px">Farm Name </div>
                              </template>
                            </v-text-field>
                          </v-col>
                          <v-col class="py-1" cols="12" lg="12">
                            <v-text-field
                              :rules="formRules"
                              v-model="form.description"
                              hide-details=""
                              disabled
                            >
                              <template slot="label">
                                <div style="font-size: 14px">Description </div>
                              </template>
                            </v-text-field>
                          </v-col>
                          
                        </v-row>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col class="py-1" cols="12" lg="12">
                        <v-text-field
                          disabled
                          hide-details=""
                          v-model="form.owner"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Owner Name</div>
                          </template>
                        </v-text-field>
                      </v-col>

                      <v-col class="py-1" cols="12" lg="6">
                        <v-text-field
                          hide-details=""
                          disabled
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
                          disabled
                          v-model="form.phone"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Phone #</div>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col class="py-1" cols="12" lg="12">
                        <v-text-field
                          hide-details=""
                          disabled
                          v-model="form.address"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Address</div>
                          </template>
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-card>


                </v-col> 

                <v-col cols="12" lg="6">
                  <v-card-text>
                    <v-row>
                       <v-col class="py-1" cols="12" lg="12">
                        <v-select
                          :rules="formRules"
                          v-model="form.types" outlined dense
                          hide-details=""
                          :items="list_type"
                          @change="getAnimals"
                          item-text="name" 
                          item-value="id" 
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Type
                            <abbr class="text-danger">* </abbr></div>
                          </template>
                        </v-select>
                      </v-col>
                      <v-col class="py-1" cols="12" lg="12">
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
                              v-model="form.dated"
                              dense outlined
                              :rules="formRules"
                              hide-details=""
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            >
                              <template slot="label">
                                <div style="font-size: 14px">
                                  Appointment Date
                                <abbr class="text-danger">* </abbr>
                                </div>
                              </template>
                            </v-text-field>
                          </template>
                          <v-date-picker
                            v-model="form.dated"
                            no-title
                            scrollable
                          >
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false">
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.menu.save(form.dated)"
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col class="py-1" cols="12" lg="12"  >
                        <v-autocomplete
                          :rules="formRules"
                          v-model="form.pet_id" outlined dense
                          hide-details=""
                          :items="list_petname"
                          @change="getAnimalDetails"
                          item-text="name"
                          return-object
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Pet / Animal
                            <abbr class="text-danger">* </abbr></div>
                          </template>
                        </v-autocomplete>
                      </v-col>
                      
                      <v-col class="py-1" cols="12" lg="12">
                        <v-autocomplete
                          :rules="formRules"
                          v-model="form.service_id" outlined
                          hide-details="" dense
                          @change="getServiceDetails"
                          :items="list_services"
                          item-text="name"
                          item-value="id"
                        >
                          <template slot="label">
                            <div style="font-size: 14px;">Service 
                            <abbr class="text-danger">* </abbr></div>
                          </template>
                        </v-autocomplete>
                      </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="py-1" cols="12" lg="12">
                        <v-textarea
                          hide-details="" rows="3"
                            outlined dense
                          v-model="form.remarks"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Reason / Description </div>
                          </template>
                        </v-textarea>
                      </v-col>
                    </v-row>
                    <v-row >
                      <v-col >
                          <v-row no-gutters>
                          <v-col cols="6">Service Descriptions:</v-col>
                          <v-col cols="6" v-if="form.amount"
                            > 
                              {{
                                form.descriptions
                                
                              }}</v-col
                          >
                        </v-row>
                        <v-row no-gutters>
                          <v-col cols="6">Service Fee:</v-col>
                          <v-col cols="6" v-if="form.amount"
                            >Php
                              {{
                                form.amount
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                              }}</v-col
                          >
                        </v-row>
                           
                      </v-col>
                    </v-row>
                  </v-card-text>
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
                <div v-if="form.id" >
                  <v-icon>mdi-content-save-all</v-icon> Update Appointment
                </div>
                <div v-else>
                  <v-icon>mdi-content-save-settings</v-icon> Save Appointment
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

  <v-card-text>  
    <v-container>
           <v-row>
        <v-col class="text-white">
          <h2>Appointments</h2>
        </v-col>
      </v-row>
      <hr class="m-2 white" />
      <v-data-table
        dense
        height="420"
        class="border table-striped thead-dark"
        :loading="progressBar"
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
              <v-icon>mdi-plus</v-icon> New Appointment
            </v-btn>

            <v-spacer></v-spacer>
 
            <v-btn
              color="orange"
              style="text-transform: none"
              depressed
              small
              text
              dark
              @click="getData"
              ><v-icon>mdi-refresh</v-icon></v-btn
            >
          </v-card-actions>
        </template>
 


            <template v-slot:[`item.service`]="{ item }">
        {{item.service.name }}<br>
        <small>{{ item.service.handle_by }}</small>
        </template>

        <template v-slot:[`item.owner`]="{ item }">
          <small>
          
            Owner: {{ item.details.owner }}<br />
            Address: {{ item.details.address }} <br />
            Phone #: {{ item.details.phone }} / {{ item.details.email }}</small
          >
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
            color="danger"
            small
            dark 
            @click="sub_ActiveItem(item)"
          >
            Cancel
          </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </v-card-text>
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
    search: "",
    menu: false,
    list_petname: [],
    list_services: [],
    list_type: [{name: 'My Pets', id: 1},{name: 'My Farm Animals', id: 2}],
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
      { width: "5%", text: "Name", value: "details.name", sortable: false },
      { width: "20%", text: "Service", value: "service", sortable: false },
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
      pet_id: "",
      service_id: "",
      amount: "",
      type: "",

      breed: "",
      gender: "",
      birth_date: "",
      owner: "",
      email: "",
      phone: "",
      address: "",
      picture: "",
      remarks: "",

      specific_type: "",
      description: "",
      count: "",
      farm_name: "",

      types: 1,
      descriptions: "",
    },
  }),

  // load
  mounted() {
    this.getData();
    this.getAnimals();
    this.getServiceList(); 
  },

  // functions
  methods: {

 


    // main
    async getData() {
      this.progressBar = true;
      await axios
        .get("/api/vet/appointment/list", {
          params: {
            search: this.search,
          },
        })
        .then((result) => { 
          
          this.data = result.data ; 
          this.progressBar = false;
        });
    },

    async getAnimals() { 
      var url = '';
      if(this.form.types == 1){
        url = "/api/vet/appointment/pet/list";
      }else{
        url = "/api/vet/appointment/animal/list";
      }
      await axios
        .get(url)
        .then((result) => {   
          this.list_petname = result.data; 
        });
    },
   

    getAnimalDetails(val) {  
      if(this.form.types == 1){ 
        console.log(this.list_petname[this.list_petname.indexOf(val) ])
        this.form.breed = this.list_petname[this.list_petname.indexOf(val) ].breed;
        this.form.gender = this.list_petname[this.list_petname.indexOf(val) ].gender;
        this.form.birth_date = this.list_petname[this.list_petname.indexOf(val) ].birth_date;
        this.form.owner = this.list_petname[this.list_petname.indexOf(val) ].owner;
        this.form.email = this.list_petname[this.list_petname.indexOf(val) ].email;
        this.form.phone = this.list_petname[this.list_petname.indexOf(val) ].phone;
        this.form.address = this.list_petname[this.list_petname.indexOf(val) ].address;
        this.form.picture = this.list_petname[this.list_petname.indexOf(val) ].picture;
      }
      else{
          this.form.type = this.list_petname[this.list_petname.indexOf(val) ].type;
        this.form.specific_type = this.list_petname[this.list_petname.indexOf(val) ].specific_type;
        this.form.description = this.list_petname[this.list_petname.indexOf(val) ].description;
        this.form.farm_name = this.list_petname[this.list_petname.indexOf(val) ].farm_name;
        this.form.count = this.list_petname[this.list_petname.indexOf(val) ].count;
        this.form.owner = this.list_petname[this.list_petname.indexOf(val) ].owner;
        this.form.email = this.list_petname[this.list_petname.indexOf(val) ].email;
        this.form.phone = this.list_petname[this.list_petname.indexOf(val) ].phone;
        this.form.address = this.list_petname[this.list_petname.indexOf(val) ].address; 
  
      }
    }, 
    async getServiceList() { 
      await axios.get("/api/vet/appointment/service/list").then((result) => {
        this.list_services = result.data; 
      });
    }, 
    getServiceDetails(val) {
      this.form.amount = this.list_services[val-1].amount;
      this.form.descriptions = this.list_services[val-1].description;
    },

    async store() {
      if (this.$refs.subForm.validate()) {
        await Swal.fire({
          title:
            "Do you want to " +
            (this.editedIndex == -1 ? "save" : "update") +
            " appointment?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#00794b",
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            const { data } = await axios.post(
              "/api/vet/appointment/save",
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

      if(item.type == 1){
        this.form = {
        id: item.id,
        types: item.type,
        pet_id: item.details,
        service_id: item.service.id,
        amount:  item.amount,
        dated:  item.dated,

        breed: item.details.breed,
        gender: item.details.gender,
        birth_date: item.details.birth_date,
        owner: item.details.owner,
        email: item.details.email,
        phone: item.details.phone,
        address: item.details.address,
        picture: item.details.picture,
        remarks: item.remarks,
      }; 
      }else{
          this.form = {
        id: item.id,
        types: item.type,
        pet_id: item.details ,
        service_id: item.service.id,
        amount:  item.amount,
        dated:  item.dated,
        remarks: item.remarks,
        count:  item.details.count,
        description: item.details.description,
        farm_name: item.details.farm_name,
        type: item.details.types.name, 
        specific_type: item.details.specific_type, 

  
        owner: item.details.owner,
        email: item.details.email,
        phone: item.details.phone,
        address: item.details.address,  
      }; 
      }
  
        this.getAnimals()
  
        console.log(item)
       
       
    },
    async sub_ActiveItem(item) { 
      await Swal.fire({
        title: "Do you want to cancel your appointment?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#00794b",
        cancelButtonColor: "#CC0022",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const { data } = await axios.post("/api/vet/appointment/cancel", {
            id: item.id, 
          });
          return data;
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            icon: "success",
            title: "The appointment has been successfully cancelled." ,
            html: "",
          });
        }
        this.getData();
      });
    },
    sub_close() {
      this.form = {
      id: "",
      pet_id: "",
      service_id: "",

      breed: "",
      gender: "",
      birth_date: "",
      owner: "",
      email: "",
      phone: "",
      address: "",
      picture: "",
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
  },
};
</script>
