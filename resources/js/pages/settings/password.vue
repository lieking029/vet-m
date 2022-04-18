<template>
  <v-card-text style="min-width: 280px">
    <!-- Snackbar -->
    <v-snackbar
      :vertical="$vuetify.breakpoint.xsOnly"
      min-width="auto"
      v-model="snackbar.active"
      timeout="2500"
    >
      <span
        ><v-icon :color="snackbar.iconColor">{{
          `mdi-${snackbar.iconText}`
        }}</v-icon></span
      >
      {{ snackbar.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          :small="$vuetify.breakpoint.smAndDown"
          v-bind="attrs"
          color="primary"
          text
          @click="snackbar.active = false"
          >x</v-btn
        >
      </template>
    </v-snackbar>

    <v-snackbar
      :vertical="$vuetify.breakpoint.xsOnly"
      min-width="auto"
      v-model="snackbar2.active"
      timeout="10000"
    >
      <span
        ><v-icon :color="snackbar2.iconColor">{{
          `mdi-${snackbar2.iconText}`
        }}</v-icon></span
      >
      {{ snackbar2.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          :small="$vuetify.breakpoint.smAndDown"
          v-bind="attrs"
          color="primary"
          text
          @click="action(snackbar2.type)"
          >Yes</v-btn
        >

        <v-btn
          :small="$vuetify.breakpoint.smAndDown"
          v-bind="attrs"
          color="primary"
          text
          @click="snackbar2.active = false"
          >Cancel</v-btn
        >
      </template>
    </v-snackbar>
   <v-card-actions> 
         <h4 style="">
          <b style="color: #019267">Change Password</b>
        </h4>
      <v-spacer></v-spacer> 
    </v-card-actions> 
    <v-container v-if="token == ''">
      <v-row no-gutters>
        <v-col cols="12" class="pa-2">
          <v-card width="400" flat    class="pa-2 mx-auto">
            <v-card-text>
              <v-card flat>  
                <v-form ref="form">
                  <v-row>
                    <v-col class="py-1" cols="12">
                      <v-text-field disabled
                         dense outlined hide-details="" 
                        label="Email"
                        v-model="user.email"
                      ></v-text-field> 
                    </v-col>
                    <v-col class="py-1" cols="12">
                       <v-text-field
                    :rules="rules.passwordRules" dense outlined hide-details=""
                    :append-icon="!value1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value1 = !value1)"
                    :type="!value1 ? 'password' : 'text'"
                    label="New Password"
                    v-model="form.password"
                  ></v-text-field>
                    </v-col>
                    <v-col class="py-1" cols="12">
                       <v-text-field
                    :rules="rules.passwordRules" dense outlined hide-details=""
                    :append-icon="!value ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value = !value)"
                    :type="!value ? 'password' : 'text'"
                    label="Confirm Password"
                    v-model="form.confirmation"
                  ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
<v-btn
                    class="text-white mt-2"
                    color="primary"
                    block
                    @click="change"
                    >Save Password</v-btn
                  >
                    </v-col>
                  </v-row> 
                  
                </v-form>
              </v-card>
            </v-card-text>
          </v-card>
        </v-col>

      
      </v-row>
    </v-container>
  </v-card-text>
</template>
<script>
import { mapGetters } from "vuex";
import Form from "vform";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  middleware: "auth",
  data: () => ({
    snackbar: {
      active: false,
      message: "",
    },
    snackbar2: {
      active: false,
      message: "",
    },
    token: "",
    value: null,
    value1: null,
    rules: {
      passwordRules: [
        (v) => !!v || "This is required",
        (v) => (v && v.length <= 10) || "Password must be 10 characters",
      ],
    },
    form: new Form({
      password: "",
      confirm: "",
    }),
    remember: false,
  }),

  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  methods: {
    async change() {
      if (this.$refs.form.validate()) {
        // Submit the form.
        Swal.fire({
          title: "Do you want to save this changes?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#22bb33",
          cancelButtonColor: "#bb2124",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.value) {
            axios.post("/api/password/change", this.form).then((result) => {
           
 
            Swal.fire({
              icon: "success",
              title:
                "The password has been successfully saved.",
            });

            });
          }
        });
      }
    },
  },
};
</script>