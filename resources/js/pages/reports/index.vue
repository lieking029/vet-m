<template>
  <v-card-text>
    <v-card-actions>
      <h4><b>Reports</b></h4>
      <v-spacer></v-spacer>
    </v-card-actions>
    <v-card class="p-2">
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
                <v-img height="200" :src="'https://provincial-veterinary-clinic.herokuapp.com/img/' + a.img + '.png'"></v-img>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>

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
            <v-col class="p-1 d-none" cols="12" xl="12">
              <v-select
                v-model="param.active"
                dense
                outlined
                small
                hide-details=""
                :items="list_active"
                item-text="name"
                item-value="id"
              >
                <template slot="label"> Status </template>
              </v-select>
            </v-col>
            <v-col class="p-1" cols="12" xl="12" v-if="param.val != 1 " >
              <v-select
                v-model="param.course"
                dense
                outlined
                small
                hide-details=""
                :items="list_course"
                item-text="name"
                item-value="id"
              >
                <template slot="label"> Course </template>
              </v-select>
            </v-col>
            <v-col class="p-1" cols="12" xl="12" v-if="param.val != 1 " >
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
            <v-col class="p-1" cols="12" xl="12" v-if="param.val != 1 " >
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
                <template slot="label"> Student Status </template>
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
    list_course: [],
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
      { name: "Student List", img: "report_students", route: "a" },
      { name: "Student w/ sanctions List", img: "report_sanctions", route: "b", },
      { name: "Lost ID List", img: "report_lossids", route: "c" },
      // { name: "Users List", img: "report_users", route: "d", },
      { name: "Announcement List", img: "report_announcements", route: "e", },
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
          this.getCourseType();
          this.getYearType();
          this.getStatusType();
           this.param.val = 0;
        break;
        default: this.param.val = 1; break;
      }
      this.dialog = true;
    },

    async getCourseType() {
      this.list_course.push({ name: "All", id: "" });
      await axios
        .get("/api/course/list", { params: { group: "Course" } })
        .then((result) => {
          for (var key in result.data) {
            this.list_course.push({
              name: result.data[key].name,
              id: result.data[key].id,
            });
          }
        });
    },
    async getYearType() {
      this.list_year.push({ name: "All", id: "" });
      await axios
        .get("/api/year/list", { params: { group: "Year" } })
        .then((result) => {
          for (var key in result.data) {
            this.list_year.push({
              name: result.data[key].name,
              id: result.data[key].id,
            });
          }
        });
    },
    async getStatusType() {
      this.list_status.push({ name: "All", id: "" });
      await axios
        .get("/api/status/list", { params: { group: "Student Status" } })
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
              url: "/api/report/export",
              method: "GET",
              responseType: "blob",
              params: this.param,
            }).then((response) => {
              // console.log(response.data);
              // return
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
              .get("/api/report/export", {
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
