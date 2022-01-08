<template>
<div class="container cart">
<ul class="cart">
    <li class="cart border border-1" v-for="(product,i) in products" :key="i">
        <div class="name">{{product.productsName}}</div>
        <div class="price">{{product.price}}</div>
        <!-- <div class="number"> {{product.count}} </div> -->
        <button @click="removeProduct(i)" class="remove" > Remove </button>
    </li>
</ul>


<button class="buyButton" v-if="products.length!==0" @click="buy">Buy</button></div>

</template>
<script>

export default {
  name: 'Cart',
  data: function(){
      return {
          //from data this.something is referring to props
          //from out of data if this.nameInsideOfData referring to that object in data 
          //even if props variable and data variable have the same name
          myProducts: this.products
      }
  },
  props:{
      products: Array
      //prop is read-only
  } ,
  methods:{
      remove(index){
          this.myProducts.splice(index, 1)
      },
      removeProduct(index){
          this.remove(index)
          this.$emit("cart:change", this.myProducts)
          console.log(this.myProducts)
      }
    }
}
</script>
<style>
li.cart{
    width: 100%
}
.buyButton {
    max-width:70px;
    padding: 0px 12px 0px 12px;
    margin: 0px
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
ul.cart {
  padding: 0px;
  display: flex;
  justify-content: center;
  align-content: stretch
}

</style>