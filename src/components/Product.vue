<template>
<div class="card mb-3">
  <img :src="pdimage" class="card-img-top" alt="Image of this product">
  <div class="card-body">
    <h5 class="card-title"> {{pdname}} </h5>
    <p class="card-text"> {{pddescription}} </p>
    <p class="card-text">Cost: {{pdprice}} Euro </p>
    <p class="card-text"><small class="text-muted">{{pdstock}} left</small></p>
  </div>
</div>
</template>

<script>

export default {
  name: 'Product',
  data: function () {
    return {
      myProduct: {
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
    pdstock:Number,
    pdimage:String,
    pddescription:String
  }
}
</script>
<style>

.card {
  width : 400px;
  height: 400px;
  overflow: auto;
}

.card-body {
  max-width: 400px;
}

li{
  list-style-type: none;
  padding : 0;
  margin: 0px;
  max-width: 400px;
}

ul{
  display: flex;
  padding: 0;
  margin: 0;
  max-width: px;
  max-height: 100%;
  flex-wrap: wrap;
}


</style>