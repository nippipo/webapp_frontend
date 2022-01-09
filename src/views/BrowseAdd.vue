<template>
  <div v-if="notChosen" class="container">
    <div
      id="carouselExampleCaptions"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
        <ul class="carousel-indicators">
            <li><button type="button" data-bs-slide-to="0" data-bs-target="#carouselExampleCaptions" class="active"
              aria-current="true"
              aria-label="0"></button></li>
          <li v-for="product in apiProducts" :key="product.id">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              :data-bs-slide-to="product.id"
              class="active"
              aria-current="true"
              :aria-label="product.id"
            ></button>
          </li>
        </ul>
     
      <div class="carousel-inner">
        <ul id="ulInCarousel">
          <li class="carousel-item active">
            <div>
              <img src="https://thumbs.dreamstime.com/z/ufo-aliens-doodles-collection-hand-drawn-s-planets-spacecrafts-132769389.jpg" class="d-block w-100" alt="image" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Start swiping to see more products</h5>
                <p>
                  Choose product you wanna sell 
                </p>
              </div>
            </div>
          </li>
          <li
            v-for="product in apiProducts"
            :key="product.id"
            class="carousel-item"
          >
            <div>
              <button @click="onSellThisOne(product.id)" type="button" class="btn btn-primary btn-lg">Sell this one</button>
              <img :src="product.image" class="d-block w-100" alt="image" />
              <div class="carousel-caption d-none d-md-block">
                <h5>{{ product.title }}</h5>
                <p>
                  {{ product.price }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <Edit
  :userId="userId"
  :modalTitle="modalTitle" :modalBody="modalBody"  v-if="!notChosen" 
  :postOrPut="postOrPut"
  :pdname="chosenProduct.title"
  :pdprice="chosenProduct.price"
  :pdimage="chosenProduct.image"
  :pddescription="chosenProduct.description"  
  ></Edit>

</template>
<script>
import Edit from '@/components/Edit.vue'
export default {
  name: "BrowseAdd",
  data: function () {
    return {
      claims: [],
      userId: '',
      postOrPut : 0,
      apiProducts: [],
      notChosen: true,
      chosenProduct: '',
      modalTitle: "Sell product",
      modalBody: "Are you sure you wanna sell this product?"
    };
  },
  methods: {
    async authCheck(){
      if(this.$root.authenticated)
      this.claims = await this.$auth.getUser();
    },
    
    setup() {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((result) => (this.apiProducts = result));
    },
    onSellThisOne(index){
        this.notChosen = false
        this.chosenProduct = this.apiProducts[index-1]
        console.log(index)
        console.log(this.chosenProduct)
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
        .then((data) => (this.userId= data.id))
        .catch((error) => console.error("Error", error));
      console.log("was in new user here");
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
        .then((jsonbody) => (this.userId = jsonbody.id))
        .catch((error) => {
          this.addNewUser();
          window.alert("id not found");
        });
      console.log("was in user existed handler");
    },
  },
  async mounted() {
    await this.authCheck();
    await this.setup();
    await this.userExistedHandler();
  },
  components: {
      Edit
  }
}
</script>

<style>
.carousel.slide {
  background-image: black;
  max-height:700px;
  max-width: 450px ;
  padding: 0;
}
.container {
  justify-content: center;
  display: flex;
  max-height: 700px;
}

.carousel-inner {
    max-height : 700px;
    max-width: 450px;
}

#carouselExampleCaptions {
  max-width: 100%;
  max-height: 100%;
  margin: 0;
}
.carousel-caption.d-none.d-md-block {
    color:coral;
}
img{
   max-height: 700px;
   max-width : 450px
}

#ulInCarousel{
    padding: 30px
}
</style>
