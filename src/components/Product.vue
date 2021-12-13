<template>
  <h1>
    {{ pdname }}
  </h1>
  <h2>
    {{ pdprice }}
  </h2>
  <br />
  <img alt="Image of this product" :src="[pdimage]" />
  <h2>Stock :{{count}}</h2>
</template>

<script>

export default {
  name: 'Product',
  props: {
    count: Number,
    pdname: String,
    pdprice: Number,
    pdimage: String
  }
}
</script>
