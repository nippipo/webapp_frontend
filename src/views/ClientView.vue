<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Product :pdname="name" :pdprice="price"/>
    <Cart />
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
    name:"la",
    price: 12
  }},
  components: {
    HelloWorld,
    Product,
    Cart
  }
}
</script>
