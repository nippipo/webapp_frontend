<template>
<div class="card mb-3">
  <img :src="pdimage" class="card-img-top" alt="Image of this product">
  <div class="card-body">
    <h5 class="card-title"> {{pdname}} </h5>
    <p class="card-text"> {{pddescription}} </p>
    <p class="card-text">Cost: {{pdprice}} Euro </p>
    <p class="card-text"><small class="text-muted">{{pdcount}} left</small></p>
  </div>
</div>
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
        pdimage: this.pdimage,
        pddescription: this.pddescription
      }
    }
  },
  props: {
    pdid: Number,
    pdname:String,
    pdprice:Number,
    pdcount:Number,
    pdimage:String,
    pddescription:String
  }
}
</script>
