
<template>
<ul>
    <li v-for="(product,i) in products" :key="i" :pdname="product.pdname" :pdprice="product.pdprice" :pdimage="product.pdimage">
        <product :pdname="product.pdname" :pdprice="product.pdprice" :pdimage="product.pdimage" />
        <div class="number"> {{ product.count }} </div>
        <button class="remove"> Remove </button>
    </li>
</ul>
</template>
<script>
import Product from '@/components/Product.vue'
export default {
  name: 'Cart',
  data: function(){
      return {
          products: this.products
      }
  },
  props:{
      products: Array
  } ,
  methods:{
      removeProduct(){
          //this.products.
          this.$emit("cart:chage", this.products)
          }

  },
  components: {Product}
}
</script>
