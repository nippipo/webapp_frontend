<template>
  <h1>
    {{ pdname }}
  </h1>
  <h2>
    {{ pdprice }}
  </h2>
  <br />
  <img alt="Image of this product" :src="[pdimage]" />
  <p>Number :{{ count }}</p>
  <button @click="countIncrease" >+</button>
   <button @click="countDecrease" >-</button>
  <button @click="buyProduct" id="add-button">Add to Cart</button>
</template>

<script>

export default {
  name: 'Product',
  data: function () {
    return {
      count: 0,
      myProduct: {
        count: this.count,
        pdname: this.pdname,
        pdprice: this.pdprice,
        pdimage: this.pdprice
      }
    }
  },
  props: {
    pdname: String,
    pdprice: Number,
    pdimage: String
  },
  methods: {
    countIncrease () {
      this.count += 1
    },
    countDecrease () {
      this.count -= 1
    },
    buyProduct() {
      if(this.count > 0) {this.$emit("product:order",this.myProduct)
      console.log(this.myProduct)
      }
      if(this.count <= 0)window.alert("cannot add to cart")
    }
  }
}
</script>
