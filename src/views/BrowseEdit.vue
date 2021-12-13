<template>
  <ul>
      <li v-for="product in products" :key="product.id">
      <Edit :submitChange="sellProduct" :pdid="product.id" :pdname="product.productsName" :pdprice="product.price" :pdimage="product.imageurl" :pdcount="product.stock"/>
      </li>
  </ul>
</template>

<script>
import Edit from '@/components/Edit.vue' 
export default {
  components: { Edit },
  name: "BrowseEdit",
  data: function(){
      return {

      }
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
