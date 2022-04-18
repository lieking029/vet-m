<template>
  <v-card-text>
    <v-card-actions>
     
         <h4 style="">
          <b style="color: #ff6f69">MANAGE ACCOUNTS</b>
        </h4>
      <v-spacer></v-spacer>
    </v-card-actions>
    <v-card>
      <v-tabs icons-and-text>
        <v-tab>
          <small>Teachers</small>
          <v-icon>mdi-folder-account</v-icon>
        </v-tab>
        <v-tab-item> <teacherspage /> </v-tab-item>

        <v-tab  > 
          <small>Students</small>
          <v-icon>mdi-face-profile</v-icon>
        </v-tab>
        <v-tab-item> <studentspage /> </v-tab-item>
 
      </v-tabs>
    </v-card>
  </v-card-text>
</template>
 
<script>
import teacherspage from "../../settings/users.vue";
import studentspage from "./students.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    teacherspage,
    studentspage,
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