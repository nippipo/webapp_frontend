<template>
  <ul>
      <li v-for="product in products" :key="product.productsName"></li>
      <product :count="product.stock" :pgname="product.productsName" :pgprice="product.price" :pgimage="product.imageurl" /> 
  </ul>
</template>

<script>
import Product from '@/components/Product.vue' 
import Product from '../components/Product.vue';
export default {
  name: "UserView",
};
    Product
</script>
