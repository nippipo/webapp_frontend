<template>
<div>
  <ul>
      <li v-for="(product,i) in products" :key="i">
      <Edit :pdid="product.id" :pddescription="product.description" :pdname="product.productsName" :pdprice="product.price" :pdcount="product.stock" :pdimage="product.imageurl" />
      </li>
  </ul>
</div>
  
</template>

<script>
import Edit from '@/components/Edit.vue' 
export default {
  components: { Edit },
  name: "Profile",
  data: function(){
     return {
       products:[],
       claims: []
     }
  },
  mounted(){
    //id 1 
    const endpoint=  process.env.VUE_APP_BACKEND_BASE_URL `/api/product/${this.claims.email}/all`
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
    async setup(){
      if(this.$root.authenticated)
      this.claims = await this.$auth.getUser();
    }
  },
  components:{
    Edit
  }
};
  
</script>
