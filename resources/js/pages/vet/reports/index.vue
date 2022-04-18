<template>
  <v-card-text>
      <v-container>
     <v-row>
        <v-col class="text-white">
          <h2>Reports</h2>
        </v-col>
      </v-row>
      <hr class="m-2 white" />
    <v-card class="p-2 transparent" flat>
      <v-row>
        <v-col sm="2" cols="6" v-for="(a, i) in btns" :key="i">
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
                <v-img height="100" contain :src="a.img"></v-img>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>
    </v-container>

    <v-snackbar
      :vertical="$vuetify.breakpoint.xsOnly"
      min-width="auto"
      v-model="snackbar.active"
      timeout="2500"
      class="text-center pb-0"
      :left="$vuetify.breakpoint.smAndUp"
    >
      <span
        ><v-icon :color="snackbar.iconColor">{{
          `mdi-${snackbar.iconText}`
        }}</v-icon></span
      >
      {{ snackbar.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          :small="$vuetify.breakpoint.smAndDown"
          v-bind="attrs"
          color="primary"
          text
          @click="snackbar.active = false"
          >Close</v-btn
        >
      </template>
    </v-snackbar>
    <iframe id="print1" class="d-none" :src="print" frameborder="0"></iframe>

    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card color="#f8f8fa">
        <v-toolbar class="info">
          <h4 class="text-white">Report Parameter</h4>
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false" color="white">mdi-close</v-icon>
        </v-toolbar>
        <br />
        <v-card-text>
          <v-row> 
            <v-col class="p-1" cols="12" xl="12" >
              <v-select
                v-model="param.year"
                dense
                outlined
                small
                hide-details=""
                :items="list_year"
                item-text="name"
                item-value="id"
              >
                <template slot="label"> Year </template>
              </v-select>
            </v-col>
            <v-col class="p-1" cols="12" xl="12" v-if="param.val == 1 " >
              <v-select
                v-model="param.status"
                dense
                outlined
                small
                hide-details=""
                :items="list_status"
                item-text="name"
                item-value="id"
              >
                <template slot="label">   Status </template>
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card-actions>
                <v-btn class="danger" dark @click="exporting('pdf')">PDF</v-btn>
                <v-btn class="success" @click="exporting('excel')">Excel</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card-text>
</template> 

<script>
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
    print: '',
    list_year: [],
    list_status: [], 
    list_active: [
      { name: "All", id: "" },
      { name: "Active", id: "1" },
      { name: "Inactive", id: "0" },
    ],
    param: { row: "", type: "", year: "",course: "", active: "", status: "", val: 0 },
    snackbar: {
      active: false,
      message: "",
    },
    btns: [
      { name: "Orders", img: "/img/reports/a1.png", route: "a", param1: 0 },
      { name: "Pets", img: "/img/reports/a2.png", route: "b", param1: 0 },
      { name: "Animals", img: "/img/reports/a5.png", route: "c", param1: 0 },
      { name: "Appointments", img: "/img/reports/a3.png", route: "d", param1: 0 }, 
      { name: "Clients", img: "/img/reports/a4.png", route: "e", param1: 0 },
    ],
  }),
  created() {
    if (this.user) {
    } else {
      this.$router.push({ name: "login" }).catch((errr) => {});
    }
  },
  methods: {
    chooseParameter(row) {

      this.param.row = row; 
      switch (row) {
        case "a":
        case "b":
        case "c": 
        case "d": 
        case "e": 
          this.getYearType();
          this.getStatusType(); 
           this.param.val = 0;
        break; 
        default: this.param.val = 1; break;
      } 
      this.dialog = true;
    },

    
    async getYearType() {
      this.list_year.push({ name: "All",id:'' });
      await axios
        .get("/api/vet/reports/year/list")
        .then((result) => {
          for (var key in result.data) {
            
            this.list_year.push({
              name: result.data[key].year, 
              id: result.data[key].year, 
            });
          }
        });
    },
    async getStatusType() {
      this.list_status.push({ name: "All", id: "" });
      await axios
        .get("/api/vet/reports/status/list" )
        .then((result) => {
          for (var key in result.data) { 
            this.list_status.push({
              name: result.data[key].name,
              id: result.data[key].id,
            });
          }
        });
    },

    async exporting(type) {
      this.param.type = type;  
          if (type == "pdf") {
            await axios({
              url: "/api/vet/reports/export",
              method: "GET",
              responseType: "blob",
              params: this.param,
            }).then((response) => {
            //   console.log(response.data);
            //   return
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
            });
          } else {
            await axios
              .get("/api/vet/reports/export", {
                method: "GET",
                responseType: "arraybuffer",
                params: this.param,
              })
              .then((res) => { 
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