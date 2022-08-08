<template>
  <v-container>
    <v-card-text class="p-1">
      <v-row>
        <v-col class="text-white">

          <h2>Hi, {{ user.first_name }}</h2>
        </v-col>
      </v-row>
      <hr class="m-2 white" />

      <v-row>
        <v-col cols="6"  >
          <v-row no-gutters>


            <v-col
              v-for="(val, key) in items"
              :key="key"
              class="text-center m-2"
              cols="3"
            >
              <v-card class="p-2">
                <v-card-actions>
                  <v-img
                    class="rounded"
                    contain
                    width="70"
                    height="60"
                    :src="val.image"
                  ></v-img>
                  <h1 style="font-size: 25px">
                    <b>{{ val.value }}</b>
                  </h1>
                </v-card-actions>
                <span style="font-size: 10px"
                  ><b>{{ val.text }}</b></span
                >
              </v-card>
            </v-col>


          </v-row>
        </v-col>
        <v-col cols="6"  >
          <v-container class="text-white" style="height: 400px">
            <div >
            <h6><b>Appointments</b></h6>
            <hr>
            <div v-if="appointments_data.length == 0" class="text-center">No Appointments found</div>




    <v-row v-else align="center">
    <v-item-group
      v-model="window"
      class="shrink mr-6"
      mandatory
      tag="v-flex"
    >
      <v-item
        v-for="(v,k) in appointments_data" :key="k"
        v-slot="{ active, toggle }"
      >
        <div>
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-col>
      <v-window
      v-model="window"
        class=" text-white"
        vertical
      >  {{ appointments_data }}
        <v-window-item
          v-for="(v,k) in appointments_data"
          :key="k"
        >

          <v-card class="p-2 " flat>
            <v-card-text>
              <v-row
                class="mb-4"
                align="center"
              >
                <v-avatar
                  color="grey"
                  class="mr-4" size="60"
                >


                <v-img v-if="v.pet.picture" :src="'https://walrus-app-tna7x.ondigitalocean.app/storage/files/vet/animal/'+v.pet.picture"></v-img>
                </v-avatar>
                <strong > <div class="text-h6">{{ v.pet.name  }}</div>
                  <small>{{ v.dated }}</small></strong>
              </v-row>

              <strong>{{ v.service }} </strong>
              <hr>
              <p>{{ v.remarks }} </p>


            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>




            </div>
            </v-container>
        </v-col>
      </v-row>

      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular
      ></v-overlay>
    </v-card-text>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  metaInfo() {
    return { title: "Dashboard" };
  },
  middleware: "auth",
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  data: () => ({
    window: 0,
    active: false,
    overlay: false,
    items: [],

    type: "month",
    employees: "",
    empl: "",
    types: ["month", "week", "day", "4day"],
    mode: "stack",
    modes: ["stack", "column"],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon, Wed, Fri", value: [1, 3, 5] },
    ],
    value: "",
    starts: "",
    ends: "",
    events: [],



    appointments_data: [],

    counts: [],

  }),
  mounted() {
    if (this.user) {
      this.getAppointments();
      this.getCounts();
    } else {
      this.$router.push({ name: "login" }).catch((errr) => {});
    }
  },


  methods: {
    getFormatDate(e, format) {
      const date = moment(e);
      return date.format(format);
    },
    getParamCalendar() {},


    async getAppointments() {
      await axios.get("/api/vet/dashboard/appointments").then((result) => {
        console.log(result.data)
        this.appointments_data = result.data
      });
    },
    async getCounts() {
      await axios.get("/api/vet/dashboard/counts").then((result) => {

        this.items = [

          { text: "My Pets", value: result.data.pets, image: "https://walrus-app-tna7x.ondigitalocean.app/img/Dashboard/aaaa.png" },
          { text: "My Animals", value:  result.data.animals, image: "https://walrus-app-tna7x.ondigitalocean.app/img/Dashboard/aaaaaa.png" },
          { text: "Appointments",
            value: result.data.appointments,
            image: "https://walrus-app-tna7x.ondigitalocean.app/img/Dashboard/aaaaa.png",
          },
          { text: "Orders", value:  result.data.orders, image: "https://walrus-app-tna7x.ondigitalocean.app/img/Dashboard/aaa.png" },

        ]
      });
    },



  },
};
</script>
