<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Cart v-if="toggle" :products="products" @cart:change="OnRemoveEvent" />
    <ul>
      <li v-for=" product in products" :key="product.id">
        <product :pdid="product.id"  :pdname="product.productsName" :pdprice="product.price" :pdcount="product.stock" :pdimage="product.imageurl" :pddescription="product.description"/>
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
    toggle : false,
    products: [{id:1,productsName:'ala',price:23, stock:14,imageurl:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',description:"this is a dummy product"},
    {id:1,productsName:'Backpack',price:113, stock:2,imageurl:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',description:"this is a dummy product"},
    {id:1,productsName:'Same as followed',price:23, stock:14,imageurl:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',description:"this is a dummy product"},
    {id:1,productsName:'sth else',price:23, stock:14,imageurl:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',description:"this is a dummy product"},]
  }},
  methods:{
    OnProductOrderEvent(value){
      this.products.push(value)
    },
    OnRemoveEvent(value){
      this.products = value
    }
  },
  components: {
    HelloWorld,
    Product,
    Cart
  }
}
</script>
