<template>
  <ul>
      <li v-for="product in products" :key="product.id"></li>
      <edit :submitChange="sellProduct" :pdid="product.id" :pdname="product.productsName" :pdprice="product.price" :pdimage="product.imageurl" :pdcount="product.stock"/>
  </ul>
</template>

<script>
import Edit from '@/components/Edit.vue' 
export default {
  components: { Edit },
  name: "UserView",
  data: () => {
    return {products}
  },
  created(){

  },
  methods: {
      sellProduct(){

    }
  },
  components:{
    Edit
  }
}
</script>
