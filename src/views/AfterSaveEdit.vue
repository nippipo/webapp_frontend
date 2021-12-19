<template>
  <ul>
      <li v-for="(product,i) in products" :key="i">
      <Edit :pdid="product.id" :pddescription="product.description" :pdname="product.productsName" :pdprice="product.price" :pdcount="product.stock" :pdimage="product.imageurl" />
      </li>
  </ul>
</template>

<script>
import Edit from '@/components/Edit.vue' 
export default {
  components: { Edit },
  name: "AfterSaveEdit",
  data: function(){
     return {products:[]}
  },
  mounted(){
    //id 1 
    const endpoint= 'http://localhost:8080/api/user/1/all'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
    .then(res => res.json())
    .then(result => result.forEach(item => {
      this.products.push(item)
    }))
    .catch(error => console.log('error', error))
  },
  methods: {

  },
  components:{
    Edit
  }
};
  
</script>
