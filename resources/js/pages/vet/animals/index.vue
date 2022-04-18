<template>
  <v-card-text>  
    <v-container>
       <v-row>
        <v-col class="text-white">
          <h2>My Animal/s daw</h2>
        </v-col>
      </v-row>
      <hr class="m-2 white" />
      <v-card> 
           <listpage />   
      </v-card>
      </v-container>
  </v-card-text>
</template>
 <style scoped>
.v-tab {
  height: 40px;
  width: 30[x];
}

.v-carousel-item {
  height: auto;
}
</style>
<script>
import listpage from "./list.vue";
import listgridpage from "./list_grid.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    listpage,
    listgridpage,
  },

  metaInfo() {
    return { title: "List" };
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