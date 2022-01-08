<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    <button id="showCartButton" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-cart"></i> Cart</button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel"><i class="bi bi-cart"></i> Cart</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <Cart v-model:products="productsInCart" @cart:change="OnRemoveEvent" />
    </div>
    </div>
    <ul class="product">
      <li class="product" v-for=" product in products" :key="product.id">
        <product :pdid="product.id"  :pdname="product.productsName" :pdprice="product.price" :pdstock="product.stock" :pdimage="product.image" :pddescription="product.description"/>
          <button type="button" class="putInCart btn btn-primary" @click="OnProductOrderEvent(product)" > Add in Cart </button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Product from '@/components/Product.vue'
import Cart from '@/components/Cart.vue'


export default {
  name: 'Home',
  data:function(){ return {
    products: [],
    productsInCart: []}},
  methods:{
    OnProductOrderEvent(value){
      this.productsInCart.push(value)
    },
    OnRemoveEvent(value){
      this.productsInCart = value
    }
    },
  components: {
    HelloWorld,
    Product,
    Cart
  },
  mounted(){
    const requestOptions= {
      method: 'GET',
      redirect: 'follow'
    }

    fetch( process.env.VUE_APP_BACKEND_BASE_URL +'/api/product/all',requestOptions)
    .then(response => response.json())
    .then(result  => result.forEach(item => {
      this.products.push(item)
    }))
    .catch(error => console.log('error',error))
  }
}
</script>

<style>
#showCartButton{
  position: fixed;
  z-index: 1000;
  left : 0px;
  top: 0px;
}

li.product {
  list-style-type: none;
  margin-bottom: 50px;
  max-width: 400px;
}

ul.product{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  max-width: px;
  max-height: 100%;
  flex-wrap: wrap;
}

</style>