<template>
  <div>
    <v-container>
    <v-card-text>
       <v-row>
        <v-col class="text-white">
          <h2>Supplies</h2>
        </v-col>
      </v-row>
      <hr class="m-2 white" />
      <v-card height="60">
        <v-card-actions>
          <v-select
            v-model="category"
            dense
            small
            hide-details=""
            :items="list_category"
            @change="getData(); page = 1"
            item-text="category"
            item-value="category"
          >
            <template slot="label"> Category </template>
          </v-select>
          <v-spacer></v-spacer>
          <v-col class="py-0 pl-0" xl="6" lg="6" cols="12">
            <v-text-field
              v-model="search"
              small
              outlined
              dense
              hide-details=""
              label="Search (Name)"
              @keyup="getData(); page = 1"
            ></v-text-field>
          </v-col>

          <v-btn
            v-if="cart.count > 0"
            rounded color="blue"
            class="ma-2"
            @click="showCart = true"
          >
            <v-badge color="red" :content="cart.count">
              <v-icon color="white">mdi-cart</v-icon>
            </v-badge>
          </v-btn>
          <v-btn @click="showCart = true" v-else rounded class="ma-2">
            <v-icon color="white">mdi-cart</v-icon>
          </v-btn>

          <v-dialog
            transition="dialog-bottom-transition"
            class="ml-auto"
            v-model="showCart"
            width="500"
          >
            <!-- dialog body -->
            <v-card id="dialog" style="background-color: #dadcdc">
              <v-toolbar color="primary" dark>
                Add to cart
                <v-spacer></v-spacer>
                <v-icon class="float-right" text @click="showCart = false"
                  >mdi-close
                </v-icon>
              </v-toolbar>
              <v-overlay :value="overlay" style="z-index: 999999999999">
                <v-progress-circular
                  indeterminate
                  size="64"
                ></v-progress-circular>
              </v-overlay>
              <v-list class="p-4" color="#cdf2f7">
                <h5><b>My Cart</b></h5>
                <small v-if="cart.amount">
                  No of Items: {{ cart.count }}<br />
                  Total Amount:
                  {{
                    cart.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                </small>
                <div
                  style="
                    background-color: #9fb9bd;
                    height: 350px;
                    overflow-y: auto;
                  "
                >
                  <v-list-item
                    class="px-1"
                    v-for="(item, i) in cart.data"
                    :key="i"
                  >
                    <v-avatar color="warning" class="text-white" size="16">
                      {{ i + 1 }}</v-avatar
                    >
                    <v-list-item-title>
                      <v-card height="90" class="m-1 p-1">
                        <v-row>
                          <v-col cols="5">
                            <v-img
                              :src="
                                `https://walrus-app-tna7x.ondigitalocean.app/storage/files/vet/products/` + item.picture
                              "
                            ></v-img
                          ></v-col>
                          <v-col cols="7">
                            <tr>
                              <td style="width: 100%">
                                <small>
                                  <b>{{ item.name }} </b><br />
                                  PHP
                                  {{
                                    item.amount
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                  }}
                                  <br />
                                  <v-card-actions class="p-0 m-0">
                                    Quantity:
                                    <v-text-field
                                      style="width: 110px"
                                      hide-details=""
                                      dense
                                      outlined
                                      v-model="item.quantity"
                                      @keyup="itemChange(item)"
                                    >
                                      <v-icon
                                        slot="append"
                                        @click="itemChange(item, '+')"
                                        color="red"
                                      >
                                        mdi-plus
                                      </v-icon>
                                      <v-icon
                                        @click="itemChange(item, '-')"
                                        slot="append"
                                        color="green"
                                      >
                                        mdi-minus
                                      </v-icon>
                                      <v-icon>mdi-minus</v-icon>
                                    </v-text-field>
                                  </v-card-actions>
                                </small>
                              </td>
                            </tr>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-list-item-title>
                    <v-icon
                      @click="deleteCart(item)"
                      class="pull-right"
                      color="danger"
                      >mdi-delete</v-icon
                    >
                  </v-list-item>
                </div>
                <v-card-actions>
                  <v-btn x-small @click="removeAll" color="dark"
                    >Remove all</v-btn
                  >
                  <v-spacer></v-spacer>
                  <v-btn @click="checkOut" color="success">Check out</v-btn>
                </v-card-actions>
              </v-list>
            </v-card>
          </v-dialog>

        </v-card-actions>
      </v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
               <v-pagination
                  v-model="page"
                  :total-visible="8"
                  :length="data.last_page"
                  color="red darken-2"
                ></v-pagination>
        </v-card-actions>
        <v-row>
          <v-col v-for="(vals, keys) in data.data" :key="keys" cols="12" sm="3">
            <v-card @click="addcart(vals)">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-img
                    :src="`https://walrus-app-tna7x.ondigitalocean.app/storage/files/vet/products/` + vals.picture"
                    height="270px"
                  >
                    <span
                      class="text-h5 white--text pl-4 pt-4 d-inline-block"
                    ></span>
                  </v-img>
                  <h6>
                    <p class="header text-dark p-2">{{ vals.name }}</p>
                  </h6>
                  <hr class="m-1" />
                </v-col>
              </v-row>

              <v-card-actions class="white">
                <v-spacer></v-spacer>
                PHP
                {{
                  vals.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-card-text>
</v-container>
    <v-dialog v-model="dialog_cart" width="600">
      <!-- dialog body -->
      <v-card id="dialog" style="background-color: #dadcdc">
        <v-toolbar color="primary" dark>
          Add to cart
          <v-spacer></v-spacer>
          <v-icon class="float-right" text @click="dialog_cart = false"
            >mdi-close
          </v-icon>
        </v-toolbar>
        <!-- dialog content -->
        <v-card-text
          class="pt-2"
          style="overflow-y: auto; background-color: #dadcdc"
        >
          <v-form ref="addcartform">
            <v-card flat class="p-4">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-img
                    height="270px"
                    :src="'https://walrus-app-tna7x.ondigitalocean.app/storage/files/vet/products/' + form_cart.picture"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="6">
                  <strong>{{ form_cart.name }}</strong
                  ><br />
                  <small>{{ form_cart.description }}</small>
                  <hr />
                  <v-row>
                    <v-col cols="12">Category: {{ form_cart.category }}</v-col>
                    <v-col cols="12"
                      >Amount:
                      {{
                        form_cart.amount
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }}
                      <v-text-field
                        class="d-none"
                        v-model="form_cart.amount"
                      ></v-text-field
                    ></v-col>
                    <v-col cols="6"
                      >Quantity:
                      <v-text-field v-model="form_cart.quantity">
                        <v-icon
                          slot="append"
                          @click="form_cart.quantity = form_cart.quantity + 1"
                          color="red"
                        >
                          mdi-plus
                        </v-icon>
                        <v-icon
                          @click="form_cart.quantity = form_cart.quantity - 1"
                          slot="prepend"
                          color="green"
                        >
                          mdi-minus
                        </v-icon>
                      </v-text-field></v-col
                    >
                  </v-row>

                  <v-card-actions class="white">
                    <v-spacer></v-spacer>
                    <v-btn
                      block
                      @click="addtocart()"
                      depressed
                      color="warning"
                      small
                    >
                      Add to cart
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>



<script>
import axios from "axios";
import Swal from "sweetalert2";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  // declarations
  data: () => ({
    overlay: false,
    data: [],
    page: 1,
    hover: false,
    list_category: [],
    category: "",
    search: "",
    active: false,
    showCart: false,

    dialog_cart: false,
    form_cart: {
      name: "",
      description: "",
      product_id: "",
      quantity: 0,
      category: "",
      picture: "",
      amount: "",
      id: "",
    },

    form_cart_delete: {
      id: "",
    },

    cart: [],
    count: "0",
  }),

  // load
  mounted() {
    this.getCategory();
    this.getData();
    this.getCart();
  },

  // functions
  methods: {
    // main
    async getData() {
      this.progressBar = true;
      await axios
        .get("/api/vet/products/list", {
          params: {
            page: this.page,
            search: this.search,
            category: this.category,
          },
        })
        .then((result) => {
          console.log(result.data)
          this.data = result.data.data;
        });
      this.progressBar = false;
    },
    async getCart() {
      await axios.get("/api/vet/shop/cart/list").then((result) => {
        this.cart = result.data;
      });
    },
    async getCategory() {
      await axios.get("/api/vet/products/category").then((result) => {
        this.list_category = result.data;
          this.list_category.unshift({ category: 'All'})
      });
    },
    async itemChange(val, type) {
      if (type == "-") {
        this.overlay = true;
        if (val.quantity > 1) {
          val.quantity--;
        } else {
          this.deleteCart(val);
        }
      } else if (type == "+") {
        this.overlay = true;
        val.quantity++;
      } else {
      }

      val.type = type;
      await axios.post("/api/vet/shop/cart/change", val).then((result) => {
        this.getCart();
        this.overlay = false;
      });
    },

    async deleteCart(val) {
      await Swal.fire({
        title: "Do you want to delete " + val.name + " from your cart?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#00794b",
        cancelButtonColor: "#CC0022",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const { data } = await axios.post("/api/vet/shop/cart/delete", val);
          return data;
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        this.dialog_cart = false;
        this.getCart();
        if (result.value) {
          Swal.fire({
            icon: "success",
            title: "The " + val.name + "  has been successfully deleted",
            html: "",
          });
        }
      });
    },
    async checkOut(val) {
      await Swal.fire({
        title: "Do you want to check out your cart?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#00794b",
        cancelButtonColor: "#CC0022",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const { data } = await axios.post("/api/vet/shop/cart/checkout", val);
          return data;
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        this.getCart();
        if (result.value) {
          Swal.fire({
            icon: "success",
            title: "The check out has been proccessed",
            html: "",
          });
        }
      });
    },

    addcart(val) {
      this.form_cart.name = val.name;
      this.form_cart.description = val.description;
      this.form_cart.category = val.category;
      this.form_cart.amount = val.amount;
      this.form_cart.picture = val.picture;
      this.form_cart.product_id = val.id;
      this.dialog_cart = true;
    },
    async addtocart() {
      if (this.$refs.addcartform.validate()) {
        if (this.form_cart.quantity < 1) {
          Swal.fire({
            icon: "warning",
            title: "Please Input quantity.",
            html: "",
          });
          return;
        }

        this.form_cart.quantity = parseInt(this.form_cart.quantity);

        await Swal.fire({
          title: "Do you want to add " + this.form_cart.name + " to your cart?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#00794b",
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            const { data } = await axios.post(
              "/api/vet/shop/cart/save",
              this.form_cart
            );
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result.value) {
            this.getCart();
            Swal.fire({
              icon: "success",
              title: "The item has been successfully added to your cart",
              html: "",
            });
            this.dialog_cart = false;
            this.form_cart.quantity = 0;
          }
        });
      }
    },
    async removeAll() {
      await Swal.fire({
        title: "Do you want to remove all items from your cart?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#00794b",
        cancelButtonColor: "#CC0022",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const { data } = await axios.post("/api/vet/shop/cart/remove");
          return data;
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        this.getCart();
        if (result.value) {
          Swal.fire({
            icon: "success",
            title: "The items has been successfully removed",
            html: "",
          });
        }
      });
    },
    async store() {
      if (this.$refs.subForm.validate()) {
        await Swal.fire({
          title:
            "Do you want to " +
            (this.editedIndex == -1 ? "save" : "update") +
            "   pet informations?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#00794b",
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => {
            const { data } = await axios.post(
              "/api/vet/animals/save",
              this.form
            );
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          console.log(result);
          if (result.value) {
            this.getData();
            this.sub_close();
            Swal.fire({
              icon: "success",
              title:
                "The subject has been successfully " +
                (this.editedIndex > -1 ? "updated" : "saved"),
              html: "",
            });
            this.sub_dialog = false;
          }
        });
      }
    },
  },
  //new of update title
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add new " : "Update ";
    },
  },
  // on changes
  watch: {
    page(val) {
      this.page = val;
      this.getData();
    },
    data() {
      this.progressBar = false;
    },
    sub_dialog(val) {
      val || this.sub_close();
    },
  },
};
</script>
