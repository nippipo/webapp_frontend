<template>
  <h1>
    {{ pdname }}
  </h1>
  <h2>
    {{ pdprice }}
  </h2>
  <br />
  <img alt="Image of this product" :src="pdimage" />
  <p>Number :{{ myProduct.count }}</p>
  <button @click="countIncrease" >+</button>
   <button @click="countDecrease" >-</button>
  <button @click="buyProduct" id="add-button">Add to Cart</button>
</template>

<script>

export default {
  name: 'Product',
  data: function () {
    return {
      myProduct: {
        count: 0,
        pdname: this.pdname,
        pdprice: this.pdprice,
        pdimage: this.pdimage
      }
    }
  },
  props: {
    count: Number,
    pdname: String,
    pdprice: Number,
    pdimage: String
  },
  methods: {
    countIncrease () {
      this.myProduct.count += 1
    },
    countDecrease () {
      this.myProduct.count -= 1
    },
    buyProduct() {
      if(this.myProduct.count > 0) {this.$emit("product:order",this.myProduct)}
      if(this.myProduct.count <= 0)window.alert("cannot add to cart")
    }
  }
}
</script>