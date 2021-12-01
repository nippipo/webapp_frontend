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
  <button id="add-button">Add to Cart</button>
</template>

<script>

export default {
  name: 'Product',
  data: function () {
    return {
      count: 0
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
    }
  }
}
</script>
