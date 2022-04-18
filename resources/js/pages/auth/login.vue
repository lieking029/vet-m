<template>
  <div>  
    <guestnav />  
    <v-img height="760" src="/img/register/a9.jpg">

    <v-overlay :value="overlay">
      <v-progress-circular
        size="55"
        color="blue darken-2"
        indeterminate
      ></v-progress-circular>
    </v-overlay>   
    <br>
    <br>
    <br>
     
    <v-card-text class=""> 
      <v-container>
        <template v-if="token == ''">
          <v-row>
            <v-col xl="12" cols="12"> 
              <v-card flat class="transparent  ml-auto text-white  " width="400">
                <v-card width="400"   class="  mx-auto p-4">
               
                  <v-form
                    ref="form"
                    @submit.prevent="login" @keydown="form.onKeydown($event)"
                  >
                    <v-row>
                      <v-col cols="12">
                        <h6>
                          <v-icon>mdi-sing-in</v-icon> Sign-in   <br /> 
                        </h6>
                        <div class="text-muted"></div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="12" class="py-1">
                        <v-text-field
                          :rules="rules.formRules"
                          label="Email"
                          hide-details="auto"
                          dense outlined
                          persistent-placeholder
                          v-model="form.email"
                          :error-messages="
                            form.errors.has('email')
                              ? form.errors.errors.email[0]
                              : ''
                          "
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="12" class="py-1">
                        <v-text-field
                          label="Password"
                          small outlined
                          hide-details="auto"
                          :rules="rules.passwordRules"
                          dense
                          v-model="form.password"
                          :error-messages="
                            form.errors.has('password')
                              ? form.errors.errors.password[0]
                              : ''
                          "
                          :append-icon="!value ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="() => (value = !value)"
                          :type="!value ? 'password' : 'text'"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row> 
                      <v-col class="py-1" cols="12">
                        <v-card-actions>
                               <v-btn
                          depressed
                          small
                          text
                          :loading="form.busy" 
                          color="primary"
                        :to="{ name: 'email-password' }"
                          style="text-transform: none"
                          >Forgot Password?</v-btn
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                          dark  small
                          depressed type="submit"
                                  class="info"
                          :loading="form.busy" 
                          style="text-transform: none"
                          >Ok</v-btn
                        >
                        </v-card-actions>
                      </v-col> 
                      <v-col class="py-1  " cols="12">
                        Need an Account? 
                         <v-btn
                             text
                           
                           
                          color="primary " 
                            :to="{ name: 'register' }"
                          style="text-transform: none"
                          >Sign-up</v-btn
                        >
                        
                      </v-col>
                       
                    </v-row>
                    <hr>
                    
                      <span>Visit us on</span>
                    <v-row>
                      <v-col>
                        <a  href="https://www.facebook.com/">
                        <v-icon size="40" color="blue">mdi-facebook-box</v-icon> 

                        </a>
                      </v-col>
                    </v-row>
                  </v-form>
               
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </template>
        
           </v-container
      >
        
    </v-card-text>

    </v-img>
    <v-snackbar
        bottom  style="bottom: 10%;"
        width="500"  
      v-model="snackbar.status"
      min-width="auto" 
      :color="snackbar.color"
      class="text-center"
      :vertical="$vuetify.breakpoint.xsOnly"
      timeout="4500"
      ><span
        ><v-icon :color="snackbar.iconColor">{{
          `mdi-${snackbar.iconText}`
        }}</v-icon></span
      >{{ snackbar.message
      }}<template v-slot:action="{ attrs }">
        <v-btn
          :small="$vuetify.breakpoint.smAndDown"
          v-bind="attrs"
          color="white"
          text
          @click="snackbar.status = false"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </template></v-snackbar
    >
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios"; 
import guestnav from "../../Components/Nav_guest.vue";
export default {
  middleware: "guest", 
    components: {
    guestnav,
  },
  metaInfo() {
    return { title: "Login" };
  },
  data: () => ({
    user: true,
    drawer: null,
    appName: window.config.appName,
    notif: 1,
    overlay: false,
    snackbar: { status: false, message: "", color: '' },
    token: "",
    value: false,
    rules: {
      formRules: [
        (v) => !!v || "This is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "This is required",
        (v) => (v && v.length <= 10) || "Password must be 10 characters",
      ],
    },
    form: new Form({
      email: "",
      password: "",
    }),
    remember: false,
  }),

  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        this.overlay = true;
        // Submit the form.
        await axios
          .post("/api/login", this.form)
          .then((result) => {
            // Save the token.
            this.user = false;
            this.$store
              .dispatch("auth/saveToken", {
                token: result.data.token,
                remember: this.remember,
              })
              .then((res) => {
                this.snackbar.status = true;
                this.snackbar.iconText = "check";
                this.snackbar.iconColor = "white";
                this.snackbar.color = "success";
                this.snackbar.message = " Welcome to "+ window.config.appName;
                this.$store.dispatch("auth/fetchUser");
               this.$router.push({ name: "home" }).catch((errr) => {});  
                

              });
          })
          .catch((result) => {
            this.overlay = false;
            this.snackbar.status = true;
            this.snackbar.iconText = "alert";
                this.snackbar.color = "danger";
            this.snackbar.iconColor = "white";
            this.snackbar.message = " Invalid Email / Password, Please try again.";
          });
      }
    },
  },
};
</script>