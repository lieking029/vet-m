<template>
  <v-card-text>
    <v-card-actions>
     
         <h4 style="">
          <b style="color: #ff6f69">SUBJECT / CLASS</b>
        </h4>
      <v-spacer></v-spacer>
    </v-card-actions>
    <v-card>
      <v-tabs icons-and-text>
        <v-tab>
          <small>Subjects</small>
          <v-icon>mdi-flag</v-icon>
        </v-tab>
        <v-tab-item> <subjectpage /> </v-tab-item>

        <v-tab  > 
          <small>Class</small>
          <v-icon>mdi-book</v-icon>
        </v-tab>
        <v-tab-item> <classpage /> </v-tab-item>
 
      </v-tabs>
    </v-card>
  </v-card-text>
</template>
 
<script>
import subjectpage from "./subject.vue";
import classpage from "./class.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    subjectpage,
    classpage,
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