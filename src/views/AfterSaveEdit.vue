<template>
  <ul>
      <li v-for="product in products" :key="product.id">
      <Edit :submitChange="editProduct" :pdid="product.id"  :pdname="product.productsName" :pdprice="product.price" :pdcount="product.stock" :pdimage="product.imageurl" />
      </li>
  </ul>
</template>

<script>
import Edit from '@/components/Edit.vue' 
export default {
  components: { Edit },
  name: "AfterSaveEdit",
  data: function(){
     return {products:[
      {id:1,productsName:'ala',price:23, stock:14,imageurl:'',description:"this is a dummy product"}
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
