<template>
  <div style="min-width: 280px">
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
          >Close</v-btn
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

    <v-container v-if="token == ''">
      <v-row no-gutters>
        <v-col cols="12" class="pa-2">
          <v-card width="400" flat    class="pa-2 mx-auto">
            <v-card-text>
              <v-card flat>
                <v-row>
                  <v-col class="text-center">
                    <h4>Change Password</h4>
                  </v-col>
                </v-row>
                <br />
                <v-form ref="form">
                  <v-text-field
                    :rules="rules.passwordRules"
                    :append-icon="!value1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value1 = !value1)"
                    :type="!value1 ? 'password' : 'text'"
                    label="New Password"
                    v-model="form.password"
                  ></v-text-field>
                  <v-text-field
                    :rules="rules.passwordRules"
                    :append-icon="!value ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="() => (value = !value)"
                    :type="!value ? 'password' : 'text'"
                    label="Confirm Password"
                    v-model="form.confirmation"
                  ></v-text-field>

                  <v-btn
                    class="text-white mt-2"
                    color="primary"
                    block
                    @click="change"
                    >Save</v-btn
                  >
                </v-form>
              </v-card>
            </v-card-text>
          </v-card>
        </v-col>

      
      </v-row>
    </v-container>
  </div>
</template>
<script>
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

  methods: {
    async change() {
      if (this.$refs.form.validate()) {
        // Submit the form.
        Swal.fire({
          title: "Do you want to save this changes?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#00794b",
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Confirm",
        }).then((result) => {
          if (result.value) {
            axios.post("/api/changepassword", this.form).then((result) => {
              this.snackbar = {
                active: true,
                iconText: "check",
                iconColor: "success",
                message: "Successfully saved.",
              };
              this.$refs.form.reset();
            });
          }
        });
      }
    },
  },
};
</script>