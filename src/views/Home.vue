<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Cart v-if="toggle" v-model:products="productsInCart" @cart:change="OnRemoveEvent" />
    <button type="button" @click="OnOpenCart" >{{cartState}}</button>
    <ul>
      <li v-for=" product in products" :key="product.id">
        <product :pdid="product.id"  :pdname="product.productsName" :pdprice="product.price" :pdstock="product.stock" :pdimage="product.imageurl" :pddescription="product.description"/>
        <button type="button" id="putInCart" @click="OnProductOrderEvent(product)" > Add in Cart </button>
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
    toggle: false, 
    cartState: "Open Cart",
    products: [],
    productsInCart: []}},
  methods:{
    OnProductOrderEvent(value){
      this.productsInCart.push(value)
    },
    OnRemoveEvent(value){
      this.productsInCart = value
    },
    OnOpenCart(){
      this.toggle = !this.toggle
      if(this.toggle === true){
        this.cartState = "Close Cart"}
      if(this.toggle === false) this.cartState = "Open Cart"
      }},
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
