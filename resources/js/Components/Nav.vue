<template>
  <div>
    <v-navigation-drawer
      class="elevation-4"
      v-if="user"
      v-model="drawer" 
        expand-on-hover
      hide-overlay
      app 
      width="250"
      mobile-breakpoint="450"
      floating
    >
      <v-app-bar-nav-icon
        color="dark" class="mx-2"
        v-if="user"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon> 
      <hr class="mb-0" />

      <v-list nav expand>
        <v-list-item
          active-class="primary text-white"
          :to="{ name: 'home' }"
          style="text-decoration: none"
        >
          <v-list-item-action >
            <v-icon color="">mdi-home-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <small><b>DASHBOARD</b></small>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="user.permissionslist.includes('My Pets')"
         active-class="primary text-white"
          :to="{ name: 'pets' }"
          style="text-decoration: none"
        >
          <v-list-item-action>
            <v-icon>mdi-paw</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <small><b>MY PETS </b></small>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

           <v-list-item
          v-if="user.permissionslist.includes('My Farm')"
         active-class="primary text-white"
          :to="{ name: 'animals' }"
          style="text-decoration: none"
        >
          <v-list-item-action>
            <v-icon>mdi-paw</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <small><b>MY FARM ANIMALS </b></small>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>


           <v-list-item
          v-if="user.permissionslist.includes('Services')"
        active-class="primary text-white"
          :to="{ name: 'services' }"
          style="text-decoration: none"
        >
          <v-list-item-action >
            <v-icon>mdi-heart-pulse</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <small><b>SERVICES </b></small>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>


               <v-list-item
          v-if="user.permissionslist.includes('Appointment')"
        active-class="primary text-white"
          :to="{ name: 'appointments' }"
          style="text-decoration: none"
        >
          <v-list-item-action  >
            <v-icon>mdi-calendar-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <small><b>APPOINTMENT </b></small>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

 
 <v-list-group    no-action 
          v-if="user.permissionslist.includes('Shop')"
      >
        <template v-slot:activator>
          <v-list-item-title 
          style="text-decoration: none"  > <v-icon color="">mdi-basket</v-icon> <small style="margin-left: 25px;"> <b> SHOP</b></small></v-list-item-title>
        </template>


       <v-list-item 
            link
          active-class="primary text-white"
          :to="{ name: 'shop' }"
          style="text-decoration: none"
        >
          <v-list-item-action >
            <v-icon color="">mdi-basket</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <small><b>SUPPLIES</b></small>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        
       <v-list-item 
            link
          active-class="primary text-white"
          :to="{ name: 'order' }"
          style="text-decoration: none"
        >
          <v-list-item-action >
            <v-icon color="">mdi-shape-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <small><b>ORDERS</b></small>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        </v-list-group>

 

        <v-list-item
          v-if="user.permissionslist.includes('Settings')"
          active-class="primary text-white"
          :to="{ name: 'settings' }"
          style="text-decoration: none"
        >
          <v-list-item-action >
            <v-icon color="">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <small><b>SETTINGS</b></small>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-if="user.permissionslist.includes('Reports')"
          :to="{ name: 'reports' }"
          active-class="primary text-white"
         
          style="text-decoration: none"
        >
          <v-list-item-action >
            <v-icon color="">mdi-download</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <small><b>REPORTS</b></small>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          @click="logout"
          active-class="primary text-white"
          style="text-decoration: none"
        >
          <v-list-item-action>
            <v-icon color="">mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <small><b>LOGOUT</b></small>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      v-if="user"
      app
      elevate-on-scroll
      color="#107dac"
      fixed
        height="30"
      :clipped-left="true"
    >
      <v-app-bar-nav-icon
        color="white"
        v-if="user"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-toolbar-title
        class="mx-8"
        @click="$router.push({ name: 'home' }).catch((err) => {})"
      >
      
         <small class="text-white" v-if="!$vuetify.breakpoint.mobile" style="font-family: 'Lucida Console', 'Courier New', monospace;"><b> {{ appName }}</b></small>  
        
      </v-toolbar-title>

     

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark  
            text
            v-bind="attrs"
            v-on="on"
            style="text-transform: none"
            :small="$vuetify.breakpoint.smAndDown"
            color="white"
            class="px-2"
          >
            <v-icon>mdi-account-circle</v-icon>  
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list style="width: 200px" dense>
          <!-- account -->
          <v-list-item style="text-decoration: none" :to="{ name: 'profile' }">
            <v-list-item-title style="cursor: pointer">
              My Account</v-list-item-title
            >
          </v-list-item>
          <!-- Password -->
          <v-list-item
            :to="{ name: 'change-password' }"
            style="text-decoration: none"
          >
            <v-list-item-title style="cursor: pointer">
              Change Password</v-list-item-title
            >
          </v-list-item>
          <!-- Log Out -->
          <br />
          <v-list-item @click="logout" class="d-none border">
            <v-list-item-title style="cursor: pointer"
              ><v-icon size="25">mdi-logout</v-icon> Log Out
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  middleware: "auth",
  data: () => ({
    drawer: null,
    appName: window.config.appName,
    notif: 1,
  }),
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  methods: {
    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout");

      // Redirect to login.
      this.$router.push({ name: "login" });
    },
  },
};
</script>