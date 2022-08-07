<template>
  <v-row no-gutters>
    <guestnav />

    <v-col style="top: 50px" cols="12">
      <v-img
        :aspect-ratio="5 / 1"
        style="padding-top: 30px"
        class="p-4"
        src="https://provincial-veterinary-clinic.herokuapp.com/img/Register/a10.jpg"
      >
        <v-card-text class="text-white">
          <v-row>
            <v-col cols="12" sm="6">
              <v-card-text style="height: 620px">
                <br /><br /><br />
                <hr />
                <h3>
                  Welcome! <br />
                  Book your appointment online. Get consultation today!
                </h3>

                <v-card-actions>
                  <v-btn
                    color="info"
                    @click="$router.push({ name: 'login' }).catch((err) => {})"
                    large
                    >Book Appointment now
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card-text>

        <br />
        <br />
      </v-img>
    </v-col>
    <v-col cols="12">
      <v-card height="400" class="p-2">
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" sm="8">
              <h3><b>We are devoted to your pet’s whole well-being!</b></h3>
              <h4 class="caption">
                Committed to providing the very best veterinary care for the
                pets
              </h4>
              <br />

              <v-row>
                <v-col class="text-center" cols="12" sm="4">
                  <v-avatar size="100" color="orange" class="elevation-1"
                    ><v-icon size="50">mdi-home</v-icon></v-avatar
                  ><br />
                  NATURAL & HOLISTIC CARE
                </v-col>
                <v-col class="text-center" cols="12" sm="4">
                  <v-avatar size="100" color="red" class="elevation-1"
                    ><v-icon size="50">mdi-heart</v-icon></v-avatar
                  ><br />
                  WE'RE HERE FOR YOU
                </v-col>
                <v-col class="text-center" cols="12" sm="4">
                  <v-avatar size="100" color="info" class="elevation-1"
                    ><v-icon size="50">mdi-cellphone</v-icon></v-avatar
                  ><br />
                  PET CARE AT YOUR FINGERTIPS
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="4">
              <v-img
                class="border-left"
                width="400"
                height="400"
                contain
                src="/img/register/a3.png"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-img contain src="/img/register/a7.jpg">
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" sm="6">
                <v-card class="p-4">
                  <v-carousel
    hide-delimiter-background
    show-arrows-on-hover height="250">
                    <v-carousel-item>
                      <v-sheet color="white">
                        <v-row align="center" justify="center">
                          <v-col class="text-dark">
                            <h3 class="text-center" style="font-size: 30px">
                              Mission
                            </h3>
                            <h6 style="font-size: 20px; text-indent: 40px;">
                              Batangas Province is committed to establish and
                              achieve dynamic, effective and transparent
                              governance, intensify social services, upgrade the
                              quality of education, construct state of the art
                              infrastructure, promote agro-tourism industry,
                              advocate a conducive environment for investments
                              through synergistic approach with the highest
                              degree of integrity
                            </h6>
                          </v-col>
                        </v-row>
                      </v-sheet>
                    </v-carousel-item>

                    <v-carousel-item>
                      <v-sheet color="white">
                        <v-row align="center" justify="center">
                          <v-col class="text-dark">
                            <h3 class="text-center" style="font-size: 30px">
                              Vission
                            </h3>
                            <h6 style="font-size: 20px; text-indent: 40px;">
                              Batangas Province: a world-class destination
                              with ecologically balanced and sustainable
                              development and state-of-the-art infrastructure
                              and home of God-loving and family centered people
                              governed by dedicated and professional
                              political leadership committed to one vision and
                              shared responsibilities geared toward better quality
                              lif for Batangueños
                            </h6>
                          </v-col>
                        </v-row>
                      </v-sheet>
                    </v-carousel-item>
                  </v-carousel> <v-img
                              height="400"
                              src="/img/register/a4.png"
                            ></v-img>
                </v-card>
              </v-col>
            </v-row>
            <v-img
              style="
                margin-left: 200px;
                z-index: -1;
                top: 60px;
                position: absolute;
              "
              src="/img/register/a6.png"
            ></v-img>
          </v-container>
        </v-img>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card-text>
        <v-row no-gutters>
          <v-col cols="12" sm="4">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="100%"
                  height="400"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=1035-B%20Bauan%20-%20Batangas%20Provincial%20Rd,%20Batangas&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </v-col>
          <v-col class="text-center mt-12" cols="12" sm="4">
            <h4 style="top: 400px">Visit Us</h4>
            <v-card-text class="text-left mx-4">
              <v-row>
                <v-col cols="12">
                  <v-icon>mdi-google-maps</v-icon> 1035-B Bauan - Batangas
                  Provincial Rd, Batangas
                </v-col>
                <v-col cols="12">
                  <v-icon>mdi-phone-in-talk</v-icon> (043) 740-8538
                </v-col>
                <v-col cols="12">
                  <v-icon>mdi-email</v-icon> test@email.com
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
          <v-col class="text-center mt-12" cols="12" sm="4">
            <v-col>
              <v-container>
                <v-img contain width="400" src="/img/register/a11.png"></v-img>
              </v-container>
            </v-col>
          </v-col>
        </v-row>
      </v-card-text>
    </v-col>
  </v-row>
</template>
<script>
import guestnav from "../Components/Nav_guest.vue";
export default {
  metaInfo() {
    return { title: "home" };
  },
  data: () => ({
    appName: window.config.appName,
  }),
  components: {
    guestnav,
  },
  middleware: "guest",
};
</script>
