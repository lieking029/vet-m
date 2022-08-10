<template>
  <div>
     <guestnav />
    <v-img height="780" src="https://provincial-veterinary-clinic-po9ld.ondigitalocean.app/img/register/a9.jpg">
      <br /><br /><br />
          <v-card-text class="">
    <v-container>
      <v-row >
            <v-col lg="12" cols="12">
          <v-card class="ml-auto text-white skewed" width="400">
            <v-card width="470" flat class="transparent mx-auto p-4">

              <v-row>
                <v-col class="text-center">
                  <h4>Reset Password</h4>
                </v-col>
              </v-row>

              <v-alert v-model="success">
                <div class="alert alert-success" role="alert">
                  Reset password has been successfully sent.
                </div></v-alert
              >

              <v-alert v-model="failed">
                <div class="alert alert-danger" role="alert">
                  Email not found, Please try again.
                </div></v-alert
              >
              <form @submit.prevent="send" @keydown="form.onKeydown($event)">
                <!-- Email -->
                <v-row>
                  <v-col>
                    <v-text-field
                      dense
                      outlined
                      hide-details=""
                      label="Email"
                      v-model="form.email"
                      :class="{ 'is-invalid': form.errors.has('email') }"
                    >
                    </v-text-field>
                    <has-error :form="form" field="email"
                  /></v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-btn
                      block small style="text-transform: none;"
                      :loading="form.busy"       class="info"
                      @click="send"
                    >
                      Send reset link
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn
                      depressed
                      small
                      text
                      color="primary"
                      :to="{ name: 'login' }"
                      style="text-decoration: none"
                      >Back to login</v-btn
                    >
                  </v-col>
                </v-row>
              </form>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
          </v-card-text>
    </v-img>
  </div>
</template>

<script>
import Form from "vform";
import guestnav from "../../Components/Nav_guest.vue";

export default {
  middleware: "guest",
  components: {
    guestnav,
  },
  metaInfo() {
    return { title: "Reset Password" };
  },

  data: () => ({
    success: false,
    failed: false,
    form: new Form({
      email: "",
      token: "",
    }),
  }),

  methods: {
    async send() {
      const { data } = await this.form.post("/api/password/send");
      if (data) {
        this.failed = false;
        this.success = true;
        this.form.reset();
      } else {
        this.failed = true;
        this.success = false;
      }
    },
  },
};
</script>
