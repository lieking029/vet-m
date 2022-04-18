<template>
  <v-card-text> 
      <v-row>
        <v-col   cols="12" lg="6">
         <h4 style="">
          <b style="color: #019267">REPORTS</b>
        </h4>
        </v-col>
        <v-spacer></v-spacer> 
      </v-row>
      <hr class="m-1"/>
    <!-- <v-card class="p-2">
      <v-row>
        <v-col xl="3" cols="6" v-for="(a, i) in btns" :key="i">
          <v-hover v-slot="{ hover }">
            <v-card
              outlined
              class="p-2"
              @click="chooseParameter(a.route)"
              :color="hover ? '#eeeeee' : ''"
              style="text-decoration: none"
            >
              <v-card-title class="m-0 p-0 pb-0 justify-center">
                <small>{{ a.name }}</small>
              </v-card-title>
              <v-card-text
                class="m-0 p-0 pt-0 justify-center text-center text-caption"
                :class="hover ? 'text-white' : ''"
              >
                <v-img height="200" :src="'/img/' + a.img + '.png'"></v-img>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card> -->
    <v-row>
      <v-col cols="12" lg="3">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col class="py-1" cols="12">
              <span><b>Parameters</b></span>
                <v-autocomplete
                  v-model="year"
                  dense
                  outlined multiple
                  small :return-object="false"
                  hide-details=""
                  :items="list_year" @change="getList"
                  item-text="name"   
                clearable
                small-chips 
                item-value="id"
                >
                  <template slot="label"> Year </template>
                </v-autocomplete></v-col
              >
              <v-col class="py-1" cols="12">
                <v-autocomplete
                  v-model="quarter"
                  dense :return-object="false"
                  outlined multiple
                  hide-details="" @change="getList"
                  :items="list_quarter"
                  item-text="name"
                  item-value="name"
                >
                  <template slot="label"> Quarter </template>
                </v-autocomplete></v-col
              >
              <v-col class="py-1" cols="12">
                <v-autocomplete
                  v-model="agency"
                  dense  :return-object="false"
                  outlined
                  small multiple @change="getList"
                  hide-details=""
                  :items="list_agency"
                  item-text="name" 
                >
                  <template slot="label"> Agency </template>
                </v-autocomplete></v-col
              >
            </v-row>
            <hr>
            <v-row style="height: 340px; overflow-y: auto;">
              <v-col
                class="py-1"
                cols="12"
                v-for="(key, val) in list_banner"
                :key="val"
              >
                <v-btn block :color="params.banner == key.id ?'primary':'success'" @click="getList(key)">{{
                  key.name  
                }}</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="9">
        <v-card-actions>
          <v-text-field v-model="params.title" dense outlined hide-details="">
            <template slot="label"> Report Title </template>
          </v-text-field>
          <v-spacer></v-spacer>
          <v-btn class="red" dark small @click="exporting('pdf')"><v-icon>mdi-file-pdf</v-icon> PDF</v-btn>
          <v-btn class="green" dark small @click="exporting('excel')"><v-icon>mdi-file-excel</v-icon> Excel</v-btn>
        </v-card-actions>
        <v-data-table
          :headers="headers" 
          :items="data" dense 
          height="385"
          :loading="progressBar"
          :footer-props="{
            'items-per-page-options': [10, 25, 50, 100, -1],
          }"
        >
        </v-data-table>
      </v-col>
    </v-row>

    <v-snackbar
      :vertical="$vuetify.breakpoint.xsOnly"
      min-width="auto"
      v-model="snackbar.active"
      timeout="2500"
      class="text-center " style="margin-top: 15%;"
      :top="$vuetify.breakpoint.smAndUp"
    >
      <span
        ><v-icon :color="snackbar.iconColor">{{
          `mdi-${snackbar.iconText}`
        }}</v-icon></span
      >
      {{ snackbar.message }}
     
    </v-snackbar>

    <iframe id="print1" class="d-none" :src="print" frameborder="0"></iframe>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular
    ></v-overlay>
  </v-card-text>
</template>  

<script>
import Swal from "sweetalert2";
import { mapGetters } from "vuex";
import axios from "axios";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
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
    dialog: false,
    progressBar: false,
    overlay: false,
    data: [],
    headers: [
      {
        class: "border",
        text: "Title",  
        value: "title",
      },
      {
        class: "border",
        text: "Agency", class: "border ",
        value: "agency",
      },
      {
        class: "border",
        align: "right",
        text: "Amount",
        value: "amount",
      },
      {
        class: "border",
        text: "Status",
        value: "status",
      },
    ],
    dialog: false,
    print: "",
    list_year: [],
    list_quarter: [],
    list_agency: [],
    list_banner: [],
    year: [], 
    quarter: [],
    agency: [],
    params: {
      banner: "",
      year: [],
      quarter: [],
      agency: [],
      export: "",
      title: "",
    },
    snackbar: {
      active: false,
      message: "",
    },
  }),
  created() {
    if (this.user) {
      this.getBanner();
    } else {
      this.$router.push({ name: "login" }).catch((errr) => {});
    }
  },
  methods: {
   
    async getBanner() {
      this.overlay = true; 
        this.list_banner.push({name:'All', id:""})
      await axios.get("/api/info/report/dropdowns").then((result) => {
       
        for (var key in result.data.banner) {
          this.list_banner.push({
            name: result.data.banner[key].name,
            id: result.data.banner[key].id,
          });
        }

        for (var key in result.data.year) {
          this.list_year.push({
            name: result.data.year[key].year, 
          });
        }

        for (var key in result.data.quarter) {
          this.list_quarter.push({
            name: result.data.quarter[key].name,
            id: result.data.quarter[key].id,
          });
        }

        for (var key in result.data.agency) {
          this.list_agency.push({
            name: result.data.agency[key].agency,  
          });
        }
      });

      this.params.year = "";
      this.params.quarter = "";
      this.params.agency = "";
      this.overlay = false;
    },

    async getList(val) {
      this.overlay = true;
      if(val){
      this.params.banner = val.id; 
      }else{  
        this.params.banner = '';
      }
      this.params.export = "";
      this.params.year = this.year;
      this.params.quarter = this.quarter;
      this.params.agency = this.agency; 
      await axios
        .get("/api/info/report/list", { params: this.params })
        .then((result) => { 
          console.log(result.data)
          this.data = result.data;
        });
      this.overlay = false;
    },

    async exporting(type) {
     

      if (type == "pdf") {
        this.params.export = "pdf";
        await axios({
          url: "/api/info/report/list",
          method: "GET",
          responseType: "blob",
          params: this.params,
        }).then((response) => { 
          if (response.data.size > 0) {
            let blob = new Blob([response.data], {
              type: "application/pdf",
            });
            this.print = window.URL.createObjectURL(blob);
            this.snackbar = {
              active: true,
              iconText: "information",
              iconColor: "primary",
              message: "Printing... Please wait.",
            };
            setTimeout(function () {
              document.getElementById("print1").contentWindow.print();
            }, 3000);
          } else {
            this.snackbar = {
              active: true,
              iconText: "alert-box",
              iconColor: "warning",
              message: "Nothing to print.",
            };
          }
        }).catch(res=>{});
      } else {
        this.params.export = "excel";
        await axios
          .get("/api/info/report/list", {
            method: "GET",
            responseType: "arraybuffer",
            params: this.params,
          })
          .then((res) => {  
          // console.log(res.data)
          //   return
            let blob = new Blob([res.data], {
              type: "application/excel",
            });
            let link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "data.xls";
            link.click();
            this.snackbar = {
              active: true,
              iconText: "check",
              iconColor: "success",
              message: "Successfully exported.",
            };
          });
      }
    },
  },
};
</script>