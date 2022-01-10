<template>
  <div>
    <ul id="ulInProfile">
      <li class="liInProfile border border-2" v-for="(product, i) in products" :key="i">
        <Edit
          :userId ="user.id"
          :modalBody="modalBody"
          modalTitle="Edit"
          :postOrPut="postOrPut"
          :pdid="product.id"
          :pddescription="product.description"
          :pdname="product.productsName"
          :pdprice="product.price"
          :pdcount="product.stock"
          :pdimage="product.image"
        />
 
        <button
          id="deleteButton"
          type="button"
          class="btn btn-danger"
          @click="deleteProduct(product)"
        >
          <i class="bi bi-x"></i> Delete product
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import Edit from "@/components/Edit.vue";
export default {
  components: { Edit },
  name: "Profile",
  data: function () {
    return {
      user: '',
      modalBody: "Are you sure?",
      postOrPut: 1,
      products: [],
      claims: "",
    };
  },
  async mounted() {
    await this.setup();
    await this.userExistedHandler();
    await this.getUserProducts();
  },
  async activated(){
    await this.setup();
    await this.getUserProducts();
  },
  methods: {
    async setup() {
      if (this.$root.authenticated) this.claims = await this.$auth.getUser();
    },
    addNewUser() {
      const user = {
        username: this.claims.name,
        email: this.claims.email,
      };
      let endpoint = process.env.VUE_APP_BACKEND_BASE_URL + `/api/user`;
      let requestOptions = {
        method: "POST",
        redirect: "follow",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      };
      fetch(endpoint, requestOptions)
        .then((res) => res.json())
        .then((data) => (this.user = data))
        .catch((error) => console.error("Error", error));
      console.log("was in new user here");
      console.log(this.user)
    },

    userExistedHandler() {
      var endpoint =
        process.env.VUE_APP_BACKEND_BASE_URL +
        `/api/user/mail/${this.claims.email}`;
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(endpoint, requestOptions)
        .then((res) => res.json())
        .then((jsonbody) => (this.message = jsonbody.message))
        .catch((error) => {
          this.addNewUser();
          window.alert("id not found");
        });
      console.log("was in user existed handler");
    },
    getUserProducts() {
      const endpoint =
        process.env.VUE_APP_BACKEND_BASE_URL +
        `/api/product/${this.claims.email}/all`;
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(endpoint, requestOptions)
        .then((res) => res.json())
        .then((result) =>
          result.forEach((item) => {
            this.products.push(item);
          })
        )
        .catch((error) => console.log("error", error));
    },
    deleteProduct(item) {
      var endpoint =
        process.env.VUE_APP_BACKEND_BASE_URL + `/api/product/${item.id}`;
      var requestOptions = {
        method: "DELETE",
        redirect: "follow",
        
      };
      fetch(endpoint, requestOptions)
        .then((res) => res.json())
        .catch((error) => console.error("Error", error));
      console.log("in delete");
      window.location.reload()
    },
  },
  components: {
    Edit,
  },
};
</script>
<style>
#ulInProfile {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

li.liInProfile {
  width: 500px !important;
  list-style-type: none;
  padding: 20px;
  margin: 20px;
  background-color:rgb(226, 226, 226);
}

.carousel-indicators {
  flex-wrap: wrap;
}

#deleteButton{
  margin-top: 5px
}
</style>
