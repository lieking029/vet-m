<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col md="5" class="m-auto">
          <v-card width="500" class="m-auto" flat>
            <v-card-text>
              <v-card flat> 
              
                <v-row>
                  <v-col class="text-center">
                    <h4>New Password</h4>
                  </v-col>
                </v-row>
 
 
                <form @submit.prevent="send" @keydown="form.onKeydown($event)">
                  <!-- Email -->
                  <div class="row">
                    <div class="col-md-10 mx-auto">
                      <v-text-field
                        dense
                        readonly
                        disabled
                        outlined
                        hide-details=""
                        label="Email"
                        v-model="form.email"
                        :class="{ 'is-invalid': form.errors.has('email') }"
                      >
                      </v-text-field>

                      <has-error :form="form" field="email" />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-10 mx-auto">
                      <v-text-field
                        dense
                        outlined
                          :append-icon="!value1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value1 = !value1)"
                    :type="!value1 ? 'password' : 'text'"
                        hide-details=""
                        label="New Password"
                        v-model="form.password"
                        :class="{ 'is-invalid': form.errors.has('password') }"
                      >
                      </v-text-field>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-10 mx-auto">
                      <v-text-field
                        dense
                        outlined  :append-icon="!value ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value = !value)"
                    :type="!value ? 'password' : 'text'"
                        hide-details=""
                        label="Confirm Password"
                        v-model="form.password_confirmation"
                        :class="{
                          'is-invalid': form.errors.has(
                            'password_confirmation'
                          ),
                        }"
                      >
                      </v-text-field>
                    </div>
                  </div>
                  <!-- Submit Button --> 
                </form>
              </v-card>
              <hr>

                  <v-card-actions>
                    <v-btn
                    text 
                      color="info"
                      :to="{ name: 'login' }"
                      small
                    >
                      Login
                    </v-btn>
 
                    <v-spacer></v-spacer>
                    <v-btn
                      :loading="form.busy"       class="info"
                      @click="reset" 
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container> <v-snackbar top  style="top: 70%;"  v-model="snackbar.status" :color="snackbar.color+' lighten-2'" class="text-center text-dark"  >{{ snackbar.message }}</v-snackbar>

  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";
export default {
  middleware: "guest",

  metaInfo() {
    return { title: "Reset Password" };
  },

  data: () => ({
    value1: false,
    value: false,
    snackbar: { status: false, message: '', color: ''}, 
    form: new Form({ 
      email: "",
      password: "",
      password_confirmation: "",
    }),
  }),

  created() {
    this.getEmail();
  },

  methods: {
    async getEmail() {
      console.log(this.$route.query.ref);
      await axios
        .get("/api/password/param", {
          params: { ref: this.$route.query.ref },
        })
        .then((result) => { 
          this.form.email = result.data;
        });
    },

    async reset() {
       
      if(this.form.password != this.form.password_confirmation){
            this.snackbar.status = true
            this.snackbar.color = 'danger'
            this.snackbar.message = 'Password didn`t match, Please try again.'
            return;
      }
      if(!this.form.password && !this.form.password_confirmation){
            this.snackbar.status = true
            this.snackbar.color = 'danger'
            this.snackbar.message = 'Please input password.'
            return;
      }

      const { data } = await this.form.post("/api/password/reset",this.form);
     
      if(data){
         this.snackbar.status = true
            this.snackbar.color = 'primary'
            this.snackbar.message = 'Password has been successfully reset, you can now login your new password.'

            setTimeout( window.location  = "/login", 3000);
           
       
      }else{   this.snackbar.status = true
            this.snackbar.color = 'danger'
            this.snackbar.message = '   Invalid password, Please try again.'
      
      } 

    },
  },
};
</script>
