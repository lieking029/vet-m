<template>
  <div>
    <v-app-bar
      fixed
      elevate-on-scroll
      color="#107dac"
      height="70"
      :clipped-left="true"
    >
      <v-container>
        <v-card-text  >
          <v-toolbar-title
        @click="$router.push({ name: 'main' }).catch((err) => {})">
          <v-row no-gutters>
            <v-col cols="2">
              <v-card-actions>
              <v-img
                contain
                width="5"
                height="60"
                src="https://provincial-veterinary-clinic.herokuapp.com/img/Dashboard/logo.png"
              >
              </v-img
            > <v-img
                contain
                width="5"
                height="50"
                src="https://provincial-veterinary-clinic.herokuapp.com/img/Dashboard/logo1.png"
              >
              </v-img
            ></v-card-actions></v-col>
            <v-col cols="10">
              <v-row no-gutters>
                <v-col class="mt-1 pt-1" cols="12">
                  <h5 class="text-white  ">
                    <b>{{ appName }}</b>
                  </h5></v-col
                >
                <v-col cols="12">
                  <small class="text-white caption">
                    1035-B Bauan - Batangas Provincial Rd, Batangas, Philippines | (043)
                    740-8538</small
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          </v-toolbar-title>
        </v-card-text>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  middleware: "guest",
  data: () => ({
    appName: window.config.appName,
  }),
  computed: {},
  methods: {},
};
</script>
