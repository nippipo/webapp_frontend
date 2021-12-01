
<template>
    <product v-for="product in productst" :key="product.pdname" :pdname="product.pdname" :pdprice="product.pdprice" :pdimage="product.pdimage" />
</template>
<script>
import Product from '@/components/Product.vue'
export default {
  name: 'Cart',
  data: function () {
    return {
      productst: [
        { pdname: 'ala', pdprice: 12.2 },
        { pdname: 'mih', pdprice: 3 }
      // eslint-disable-next-line indent
      ]
    }
  },
  components: {Product}
}
</script>
