<template>
  <v-card-text>
  
    <v-container>
           <v-row>
        <v-col class="text-white">
          <h2>Settings</h2>
        </v-col>
      </v-row>
      <hr class="m-2 white" />
      <v-tabs icons-and-text>
        <v-tab  > 
          <small>Services</small>
          <v-icon>mdi-heart-pulse</v-icon>
        </v-tab>
        <v-tab-item> <servicespage /> </v-tab-item>
 
       <v-tab>
          <small>Products</small>
          <v-icon>mdi-medical-bag</v-icon>
        </v-tab>
        <v-tab-item> <productspage /> </v-tab-item>

      <v-tab>
          <small>Appointments</small>
          <v-icon>mdi-playlist-check</v-icon>
        </v-tab>
        <v-tab-item> <appointmentsspage /> </v-tab-item>
   <v-tab>
          <small>Orders</small>
          <v-icon>mdi-basket</v-icon>
        </v-tab>
        <v-tab-item> <ordersspage /> </v-tab-item>

      <v-tab>
          <small>Users</small>
          <v-icon>mdi-account-plus</v-icon>
        </v-tab>
        <v-tab-item> <userspage /> </v-tab-item>


        <v-tab>
          <small>Other List</small>
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-tab>
        <v-tab-item> <categorypage /> </v-tab-item>

      
 

      </v-tabs>
    </v-container>
  </v-card-text>
</template>
 
<script>
import categorypage from "./category.vue";
import servicespage from "./services.vue";
import productspage from "./products.vue";
import userspage from "./users.vue";
import appointmentsspage from "./appointments.vue";
import ordersspage from "./orders.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    categorypage,
    servicespage,productspage,userspage,appointmentsspage,ordersspage
  },

  metaInfo() {
    return { title: "Manage Modules" };
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  created() {
    if (this.user) { 
    } else {
      this.$router.push({ name: "login" }).catch((errr) => {});
    }
  },
};
</script>