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
        <v-card-text >
          <v-toolbar-title 
        @click="$router.push({ name: 'main' }).catch((err) => {})">
          <v-row no-gutters>
            <v-col cols="1">
              <v-img 
                contain
                width="60"
                height="60"
                src="/img/dashboard/logo.png"
              >
              </v-img
            ></v-col>
            <v-col cols="10">
              <v-row no-gutters>
                <v-col cols="12">
                  <h4 class="text-white  ">
                    <b>{{ appName }}</b>
                  </h4></v-col
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