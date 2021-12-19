<template>
  <ul>
      <li v-for="(product,i) in products" :key="i">
      <Edit @product:edited="editProduct($event, i)" :pdid="product.id" :pddescription="product.description" :pdname="product.productsName" :pdprice="product.price" :pdcount="product.stock" :pdimage="product.imageurl" />
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
      {id:1 ,productsName:'ala',price:23, stock:14,imageurl:'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',description:"this is a dummy product to be saved in DB"}
    ]}
  },
  created(){

  },
  methods: {
    editProduct(value, index){
      //this is for patching request not POST 
      this.products.splice(index, 1)
    }
  },
  components:{
    Edit
  }
};
  
</script>
