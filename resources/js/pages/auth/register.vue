<template>
  <div>
    <guestnav />
    <v-img height="700" src="/img/register/a9.jpg">
      <br /><br /><br />
      <v-form ref="form">
        <v-row no-gutters>
          <v-col md="6" class="ml-auto">
            <v-container>
              <v-card class="text-white skewed mx-auto p-4">
                <v-card flat class="transparent">
                  <v-row>
                    <v-col class="text-left">
                      <h4>Register</h4>
                    </v-col>
                  </v-row>
                  <hr />
                  <v-row>
                    <v-col class="p-1" cols="12" xl="4" lg="4">
                      <v-text-field
                        v-model="form.Nick_name"
                        dense
                        small
                        outlined
                        hide-details="auto"
                        ><template slot="label">
                          <div style="font-size: 14px">Nick Name</div>
                        </template></v-text-field
                      >
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="p-1" cols="12" xl="4" lg="4">
                      <v-text-field
                        v-model="form.last_name"
                        placeholder="Last Name"
                        dense
                        :rules="formRules"
                        outlined
                        hide-details="auto"
                        ><template slot="label">
                          <div style="font-size: 14px">
                            Last Name <abbr class="text-danger">* </abbr>
                          </div>
                        </template>
                      </v-text-field>
                    </v-col>
                    <v-col class="p-1" cols="12" xl="4" lg="4">
                      <v-text-field
                        v-model="form.first_name"
                        :rules="formRules"
                        dense
                        small
                        outlined
                        hide-details="auto"
                        ><template slot="label">
                          <div style="font-size: 14px">
                            First Name <abbr class="text-danger">* </abbr>
                          </div>
                        </template></v-text-field
                      >
                    </v-col>
                    <v-col class="p-1" cols="12" xl="4" lg="4">
                      <v-text-field
                        v-model="form.middle_name"
                        dense
                        clearable
                        outlined
                        hide-details="auto"
                        flat
                        ><template slot="label">
                          <div style="font-size: 14px">Middle Name</div>
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <hr />
                  <v-row>
                    <span>Account Information</span>
                  </v-row>

                  <v-row>
                    <v-col class="p-1" xl="6" lg="6" cols="12">
                      <v-text-field
                        v-model="form.email"
                        :rules="emailRules"
                        dense
                        outlined
                        hide-details="auto"
                        flat
                        ><template slot="label">
                          <div style="font-size: 14px">
                            Email Address <abbr class="text-danger">* </abbr>
                          </div>
                        </template></v-text-field
                      >
                    </v-col>
                    <v-col class="p-1" xl="6" lg="6" cols="12">
                      <v-text-field
                        v-model="form.contact"
                        dense
                        outlined
                        hide-details="auto"
                        flat
                        ><template slot="label">
                          <div style="font-size: 14px">Contact #</div>
                        </template></v-text-field
                      >
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="p-1" xl="6" lg="6" cols="12">
                      <v-text-field
                        v-model="form.password"
                        dense
                        :rules="[min8]"
                        loading
                        counter
                        outlined
                        hide-details="auto"
                        :append-icon="!value ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="() => (value = !value)"
                        :type="!value ? 'password' : 'text'"
                        flat
                        ><template slot="label">
                          <div style="font-size: 14px">
                            Password <abbr class="text-danger">* </abbr>
                          </div>
                        </template>

                        <template v-slot:progress>
                          <v-progress-linear
                            :value="progress1"
                            :color="color1"
                            absolute
                            height="7"
                          ></v-progress-linear>
                        </template>
                      </v-text-field>
                    </v-col>
                    <v-col class="p-1" xl="6" lg="6" cols="12">
                      <v-text-field
                        v-model="form.re_password"
                        :rules="[min8, matchingPasswords]"
                        dense
                        loading
                        counter
                        outlined
                        :append-icon="!value1 ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="() => (value1 = !value1)"
                        :type="!value1 ? 'password' : 'text'"
                        hide-details="auto"
                        flat
                        ><template slot="label">
                          <div style="font-size: 14px">
                            Re-input Password
                            <abbr class="text-danger">* </abbr>
                          </div>
                        </template>
                        <template v-slot:progress>
                          <v-progress-linear
                            :value="progress2"
                            :color="color2"
                            absolute
                            height="7"
                          ></v-progress-linear>
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <hr />
                  <v-row>
                    <v-col cols="12">
                      <v-row>
                        <v-spacer></v-spacer>
                        <v-btn
                          class="info"
                          @click="register"
                          small
                          :loading="loads"
                          >Register</v-btn
                        >
                        <v-spacer></v-spacer
                      ></v-row>
                      <br />
                      I Already have account
                      <v-btn small text color="info" :to="{ name: 'login' }"
                        >Sign in</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-card>
              </v-card>
            </v-container>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-spacer></v-spacer>
            </v-card-actions>
          </v-col> </v-row
      ></v-form>
    </v-img>
  </div>
</template> 
<script>
import axios from "axios";
import Swal from "sweetalert2";
import guestnav from "../../Components/Nav_guest.vue";
export default {
  middleware: "guest",

  components: {
    guestnav,
  },
  metaInfo() {
    return { title: "Register" };
  },
  computed: {
    progress1() {
      return Math.min(100, this.form.password.length * 10);
    },
    progress2() {
      return Math.min(100, this.form.re_password.length * 10);
    },
    color1() {
      return ["error", "warning", "success"][Math.floor(this.progress1 / 40)];
    },
    color2() {
      return ["error", "warning", "success"][Math.floor(this.progress2 / 40)];
    },
  },
  data: () => ({
    formRules: [(v) => !!v || "This is required"],
    value: false,
    value1: false,
    loads: false,
    emailRules: [
      (v) =>
        v.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) || "Invalid Email address",
    ],
    form: {
      first_name: "",
      last_name: "",
      middle_name: "",
      email: "",
      password: "",
      re_password: "",
      contact: "",
    },
  }),

  methods: {
    min8: function (value) {
      if (value.length >= 8) {
        return true;
      } else {
        return "Password should have more than 8 characters.";
      }
    },
    matchingPasswords: function () {
      if (this.form.password === this.form.re_password) {
        return true;
      } else {
        return "Passwords does not match.";
      }
    },

    async register() {
      if (this.$refs.form.validate()) {
        this.loads = true;
        axios.post("/api/register", this.form).then((result) => {
          if (result.data) {
            Swal.fire({
              icon: "success",
              title: "You have successfully registered an account!",
              html: "",
            }).then((res) => {
              this.$router.push({
                name: "login",
              });
            });
          } else {
            Swal.fire({
              type: "warning",
              title: result.data,
            });
          }
          this.loads = false;
        });
      }
    },
  },
};
</script>
