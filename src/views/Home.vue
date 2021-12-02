<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Product :pdname="name" :pdprice="price" @product:order="OnProductOrderEvent" />
    <Product pdname="minh" pdprice="12" @product:order="OnProductOrderEvent" />
    <Cart :products="products"/>
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
    price: 12,
    products: []
  }},
  methods:{
    OnProductOrderEvent(value){
      this.products.push(value)
    }
  },
  components: {
    HelloWorld,
    Product,
    Cart
  }
}
</script>
