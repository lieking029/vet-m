<template>
  <v-card-text>   
   <v-card-actions> 
         <h4 style="">
          <b style="color: #019267">MY ACCOUNT</b>
        </h4>
      <v-spacer></v-spacer> 
    </v-card-actions> 
          <v-form ref="form">
          <v-card  flat width="600" class="p-4 mx-auto">  
            <v-row>
              <v-col cols="12" xl="4">
                <v-text-field
                  v-model="form.nick_name"
                  dense
                  small
                  outlined
                  hide-details="auto"
                  ><template slot="label"> Nick Name </template></v-text-field
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" xl="4">
                <v-text-field
                  v-model="form.first_name"
                  :rules="formRules"
                  dense
                  small
                  outlined
                  hide-details="auto"
                  ><template slot="label">
                    First Name <abbr class="text-danger">* </abbr>
                  </template></v-text-field
                >
              </v-col>
              <v-col cols="12" xl="4">
                <v-text-field
                  v-model="form.middle_name"
                  dense
                  clearable
                  outlined
                  hide-details="auto"
                  ><template slot="label"> Middle Name </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" xl="4">
                <v-text-field
                  v-model="form.last_name"
                  placeholder="Last Name"
                  :rules="formRules"
                  dense
                  clearable
                  outlined
                  hide-details="auto"
                  flat
                  ><template slot="label">
                    Last Name <abbr class="text-danger">* </abbr>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" xl="4">
                <v-text-field
                  v-model="form.email"
                  :rules="emailRules"
                  dense
                  outlined
                  hide-details="auto"
                >
                  <template slot="label">
                    Email Address <abbr class="text-danger">* </abbr>
                  </template>
                </v-text-field> 
              </v-col>
                 <v-col cols="12" xl="4">
                <v-text-field
                  v-model="form.contact" 
                  dense
                  outlined
                  hide-details="auto"
                >
                  <template slot="label">
                    Contact # 
                  </template>
                </v-text-field> 
              </v-col>
            </v-row>
            <hr class="m-2" />
            <v-row>
              <v-col>
                <v-card-actions> 
                  <v-spacer></v-spacer>
                  
                  <v-btn class="info" small @click="save"  >Save</v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
          </v-form>
        </v-card-text>
       
</template>
<style>
.v-data-table-header {
  background-color: #008cff;
  max-height: 40px;
}
.v-data-table-header span {
  color: #fff;
}
</style>

<script>
import { mapGetters } from "vuex";
import Swal from "sweetalert2"; 
import axios from "axios";
export default {
  metaInfo() {
    return { title: "Account" };
  }, 
  middleware: "auth",
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  data: () => ({ 
    formRules: [(v) => !!v || "This is required"],
    emailRules: [
      (v) =>
        v.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) || "Invalid Email address",
    ],
    form: {
      id: "",
      first_name: "",
      last_name: "",
      middle_name: "",  
      nick_name: "",
      contact: '', 
      email: "",
      status: 1,
    }, 
  }),
  created() {
    if (this.user) {
        this.form.id = this.user.id
        this.form.first_name = this.user.first_name
        this.form.last_name = this.user.last_name
        this.form.middle_name = this.user.middle_name
        this.form.contact = this.user.contact
        this.form.nick_name = this.user.nick_name
        this.form.email = this.user.email
        this.form.status = 1; 
    } else {
      this.$router.push({ name: "login" }).catch((errr) => {});
    }
  },
  methods: {
     

    async save() {
      if (this.$refs.form.validate()) {
        await Swal.fire({
          title:
            "Do you want to " +
            (this.form.id ? "update" : "save") +
            " this user?",
          icon: "question",
          showCancelButton: true,
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            const { data } = await axios.post("/api/user/save", this.form);
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {  
         
            Swal.fire({
              icon: "success",
              title:
                "The request has been successfully " +
                (this.form.id ? "update" : "save") +
                ".",
            });
            this.dialog = false; 
        });
      }
    }, 

    editItem(row) {
      console.log(row)
      this.getUserType();
      this.form.id = row.id;
      this.form.nick_name = row.nick_name;
      this.form.first_name = row.first_name;
      this.form.last_name = row.last_name;
      this.form.middle_name = row.middle_name;
      this.form.roles = row.user_type;
      this.form.contact = row.contact;
      this.form.status = row.status_id.toString();
      this.form.email = row.email;
      this.dialog = true;
    },

    clearForm() {
      for (var key in this.form) {
        this.form[key] = "";
      }
      
      this.checkifnew  =false;
    },
 
  },
};
</script>