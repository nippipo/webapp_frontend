<template>
  <ul>
      <li v-for="product in products" :key="product.id"></li>
      <edit :submitChange="editProduct" :pdname="product.productsName" :pdprice="product.price" :pdcount="product.stock" :pdimage="product.imageurl" />
  </ul>
</template>

<script>
import Edit from '@/components/Edit.vue' 
export default {
  components: { Edit },
  name: "AfterSaveEdit",
  data: () => {
    return {
      products:[
      {id:1,productsName:'ala',price:23, stock:14,imageurl:''}
    ]}
  },
  created(){

  },
  methods: {
    editProduct(){

    }
  },
  components:{
    Edit
  }
};
  
</script>
