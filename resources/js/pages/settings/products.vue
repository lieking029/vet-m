<template>
  <div>
    <!-- form -->
    <v-form ref="mainForm" id="mainForm">
      <!---------------------------------------------------------------------- dialog -->
      <v-dialog v-model="dialog" max-width="800px">
        <!-- dialog body -->
        <v-card id="dialog" style="background-color: #dadcdc">
          <v-toolbar color="primary" dark>
            Product
            <v-spacer></v-spacer>
            <v-icon class="float-right" text @click="dialog = false"
              >mdi-close
            </v-icon>
          </v-toolbar>
          <br />
          <!-- dialog content -->
          <v-card-text style="background-color: #dadcdc">
            <v-card class="p-2">
              <v-container>
                <v-row>
                  <v-col class="py-1" cols="12" md="5">
                    <v-card width="250" height="250" class="p-2 m-2">
                      <v-img
                        width="230"
                        contain
                        height="230"
                        :src="
                          form.picture
                            ? '/storage/files/vet/products/' + form.picture
                            : '/img/settings/a1.jpg'
                        "
                      >
                      </v-img>
                      <v-card-actions>
                        <vue-dropzone
                          ref="myVueDropzonex"
                          class="dropzonexx"
                          id="training_fileuploadx"
                          v-on:vdropzone-success-multiple="uploadSuccessPicture"
                          v-on:vdropzone-queue-complete="
                            uploadQueCompletePicture
                          "
                          v-on:vdropzone-error="uploadErrorPicture"
                          :options="dropzoneOptionsPicture"
                        ></vue-dropzone>
                      </v-card-actions>
                      <br />
                    </v-card>
                  </v-col>

                  <v-col cols="12" md="7">
                    <v-row>
                      <v-col class="py-1" cols="12">
                        <v-text-field
                          :rules="formRules"
                          outlined
                          dense
                          hide-details=""
                          v-model="form.name"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px; color: red">
                              Product Name *
                            </div>
                          </template>
                        </v-text-field>
                      </v-col>  
                      <v-col class="py-1" cols="12">
                        <v-textarea
                          outlined
                          dense
                          rows="6"
                          hide-details=""
                          v-model="form.description"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px">
                              Product Description
                            </div>
                          </template>
                        </v-textarea>
                      </v-col>
                      <v-col class="py-1" cols="12">
                        <v-text-field
                          outlined
                          dense
                          hide-details=""
                          v-model="form.amount"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Product Price</div>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col class="py-1" cols="12">
                        <v-text-field
                          outlined
                          dense
                          hide-details=""
                          v-model="form.remarks"
                          label=""
                        >
                          <template slot="label">
                            <div style="font-size: 14px">Remarks</div>
                          </template>
                        </v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="#00794b"
                        depressed
                        style="text-transform: none"
                        dark
                        @click="store"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-col></v-row
                ></v-container
              >
            </v-card>
          </v-card-text>
          <!-- dialog btn -->
        </v-card>
      </v-dialog>
    </v-form>

    <!---------------------------------------------------------------------- datatable  -->
    <v-data-table
      id="table"
      dense
      height="330"
      hide-default-footer
      :items-per-page="10"
      :loading="progressBar"
      :headers="headers"
      :items="data.data"
    >
      <template v-slot:top>
        <v-card-actions>
          
          <v-btn
            color="#00794b"
            depressed
            style="text-transform: none"
            dark
            small
            @click="dialog = true"
          >
            Add New
          </v-btn>

          <v-spacer></v-spacer>
        
            <v-text-field
              v-model="search"
              small
              outlined
              dense
              hide-details=""
              label="Search"
              @keyup="getData"
            ></v-text-field> 

          <v-btn
            color="orange"
            style="text-transform: none"
            depressed
            small text
            dark
            @click="getData"
            ><v-icon>mdi-refresh</v-icon></v-btn
          >
        </v-card-actions>
      </template>

      <!-- loading  -->
      <v-progress-linear
        v-show="progressBar"
        slot="progress"
        color="green"
        indeterminate
      ></v-progress-linear>
      <!-- btn -->
      <template v-slot:[`item.id`]="{ item }">
        

        <v-btn
          class="px-1 btn btn-primary text-white"
          text
          small
          @click="editItem(item)"
        >
          <small><v-icon size="15"> mdi-pencil </v-icon> Edit </small>
        </v-btn>
      </template>
    </v-data-table>
    <div class="pbutton text-center pt-7">
      <v-pagination
        v-model="page"
        :total-visible="10"
        :length="data.last_page"
        color="red darken-2"
      ></v-pagination>
    </div>
  </div>
</template>
 
 
<style>
.dropzonexx {
  position: absolute;
  top: 260px;
  margin: 0px !important;
  padding: 0px !important;
  height: 40px;
  width: 101%;
  left: -2px;
  min-height: 0px !important;
}
</style>

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
    page: 1,
    search: "", 
    editedIndex: -1,
    formRules: [(v) => !!v || "This is required"],
    dialog: false,
    dialogDelete: false,
    progressBar: true,
    deleteid: "",
    data: [],
    headers: [
      { class: "border", text: "Product name", value: "name" },
      { class: "border", text: "Product description", value: "description" },
      { class: "border", text: "Product price", value: "amount" },
      { class: "border", text: "Action", value: "id", sortable: false },
    ],
    form: {
      picture: "",
      name: "",
      description: "",
      category: "",
      amount: "",
      remarks: "",
      id: "",
    },
    dropzoneOptionsPicture: {
      url: "/api/vet/products/picture",
      maxFilesize: 25,
      uploadMultiple: true,
      thumbnailWidth: 400,
      addRemoveLinks: true,
      headers: { "My-Awesome-Header": "header value" },
      dictDefaultMessage:
        "<div style='border: dashed 1px orange;   margin-top: -25px; padding: 5px; font-size: 15px;'> <span style='font-size: 25px; padding-left: 20px; color: blue;' class='mdi mdi-camera'></span> Upload </div> ",
    },
  }),

  // load
  mounted() {  
    this.getData();

  },

  // functions
  methods: {
    uploadSuccessPicture: function (file, result) {
      this.form.picture = result;
    },
    uploadQueCompletePicture: function (file) {
      this.$refs.myVueDropzonex.removeAllFiles(file);
    },
    uploadErrorPicture: function (file, result) {
      this.$refs.myVueDropzonex.removeAllFiles(file);
      Swal.fire({
        type: "warning",
        title: "Uploading Failed.",
        html: result,
      });
    },
 

    async getData() {
      this.progressBar = true;
      await axios
        .get("/api/vet/products/list", {
          params: {
            page: this.page,
            search: this.search, 
          },
        })
        .then((result) => {
          console.log(result.data)
          this.data = result.data.data;
          this.progressBar = false;
        });
    },
   
    async store() {
      if (this.$refs.mainForm.validate()) {
        await Swal.fire({
          title:
            "Do you want to " +
            (this.editedIndex > -1 ? "save" : "update") +
            " this product?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#00794b",
          cancelButtonColor: "#CC0022",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showLoaderOnConfirm: true,
          preConfirm: async () => { 
            const { data } = await axios.post(
              "/api/vet/products/save",
              this.form
            );
            return data;
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result.value) {
            this.getData()
            this.close();
            Swal.fire({
              icon: "success",
              title:
                "The product has been successfully " +
                (this.editedIndex > -1 ? "updated" : "saved"),
              html: "",
            });
          }
        });
      }
    },

    editItem(item) { 
      this.editedIndex = this.data.data.indexOf(item);
      for (var key in item) {
        this.form[key] = item[key];
      }
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      for (var key in this.form) {
        this.form[key] = "";
      }
      this.editedIndex = -1;
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
    dialog(val) {
      val || this.close();
    },

    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
};
</script>
