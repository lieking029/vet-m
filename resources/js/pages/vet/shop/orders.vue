<template>
  <div> 
    
    <v-form ref="subForm" id="subForm">
      <!---------------------------------------------------------------------- sub category  -->
      <v-dialog v-model="dialog" width="1100">
        <!-- dialog body -->
        <v-card id="dialog" style="background-color: #dadcdc">
          <v-toolbar color="primary" dark>
              Order Details
            <v-spacer></v-spacer>
            <v-icon class="float-right" text @click="dialog = false"
              >mdi-close
            </v-icon>
          </v-toolbar>
          <!-- dialog content -->
          <v-card-text
            class="pt-2"
            style="overflow-y: auto; background-color: #dadcdc"
          >
            <v-card flat class="p-4">
              <span><b>Order #: {{ details_order_id }}</b></span><br>
              <span>{{ details_total }}</span>
              <hr>
              
    <v-data-table
      dense
      height="320" class="  table-striped thead-dark"
      :loading="progressBar" 
      :headers="details_header"
      :items="details_data"
    >
       
 
   
    </v-data-table>
     
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
          <h2>Orders</h2>
        </v-col>
      </v-row>
      <hr class="m-2 white" />

    <v-data-table
      dense
      height="420" class="border table-striped thead-dark"
      :loading="progressBar" 
      :headers="header"
      :items="data"
    >
          <template v-slot:top>
        <v-card-actions> 
 

          <v-spacer></v-spacer>
          
          <v-col class="py-0 pl-0" xl="6" lg="6" cols="12">
            <v-text-field
              v-model="search"
              small
              outlined 
              dense
              hide-details=""
            
            label="Search (Order #)"
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

      <template v-slot:[`item.id`]="{ item }">
        
        <v-btn
          color="success"
          small 
            style="text-transform: none;"
          @click="viewDetails(item)"
          ><v-icon size="13"> mdi-eye</v-icon> View 
        </v-btn>
        <v-btn
          color="danger"
          small
          dark 
            style="text-transform: none;"
          @click="sub_ActiveItem(item)"
          ><v-icon size="13">mdi-close-circle</v-icon> Cancel 
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
    dialog: false,
    header: [ 
      {   text: "Date", value: "created_at", sortable: false },
      {   text: "Order #", value: "transaction_code", sortable: false },
      {   text: "Amount", value: "amount", sortable: false },
      {   text: "User", value: "user_id.fullname", sortable: false },  
      { 
        text: "Action",
        value: "id",
        sortable: false,
      },
    ], 

    dialog: false,
    details_data: [],
    details_total: '',
    details_order_id: '',
    details_header: [ 
      {   text: "Product", value: "product.name", sortable: false },
      {   text: "Quantity", value: "quantity", sortable: false },
      {   text: "Amount per item", value: "amount", sortable: false },
      {   text: "Total Amount", value: "total_amount", sortable: false },  
       
    ], 


  }),

  // load
  mounted() {
    this.getData(); 
  },

  // functions
  methods: {
       
    async getData() {
      this.progressBar = true;
      await axios
        .get("/api/vet/sales/list")
        .then((result) => { 
          this.data = result.data;
          this.progressBar = false;
        });
    },

      async getDataDetails(val) {
      this.progressBar = true;
      await axios
        .get("/api/vet/sales/details/list",{params:{ id: val.id }})
        .then((result) => { 
          this.details_data = result.data.data;
          this.details_total = result.data.total;
          this.details_order_id = val.id
          this.progressBar = false;
        });
    },

    
    viewDetails(val){
      this.getDataDetails(val);
      this.dialog = true
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
            this.dialog = false;
          }
        });
      }
    },
    sub_editItem(item) {
        console.log(item)
      this.dialog = true;
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
      console.log(item);
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
          const { data } = await axios.post("/api/vet/animals/active", {
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
    dialog(val) {
      val || this.sub_close();
    },
  },
};
</script>
