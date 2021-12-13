<template>
  <div class="product">
    <div>
      <div>
        {{ name }}
      </div>

      <div>
        {{ price }}
      </div>
    </div>

    <div class="image-editbutton-container">
      <img alt="Image of this product" :src="[pdimage]" />
      <button @click="edit" id="edit">Edit</button>
    </div>

    <div class="toggleEditBox" v-if="toggle">
      <label for="name">Change the product's name</label>
      <input v-model="name" type="text" id="name" name="name" />
      <label for="price">Change the product's price</label>
      <input v-model="price" type="text" id="price" name="price" />
    </div>

  </div>
  <button @click="submitChange" type="submit" id="sell-button">Confirm</button>
</template>

<script>
export default {
  name: "ProductAdminsView",
  data: function(){
    return {
      name: this.pdname,
      price: this.pdprice,
      toggle: false,
    };
  },
  props: {pdname:String,
          pdprice:Number,
          pdcount:Number,
          pdimage:String},
  methods: {
    edit() {
      this.toggle = !this.toggle;
    },
    
  }
};
</script>
