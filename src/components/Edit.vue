<template>
  <div class="product">
    <div>
      <div>
        {{ pdname }}
      </div>

      <div>
        {{ pdprice }}
      </div>
    </div>

    <div class="image-editbutton-container">
      <img alt="Image of this product" :src="[pdimage]" />
      <button @click="edit" id="edit">Edit</button>
    </div>

    <div class="toggleEditBox" v-if="toggle">
      <label for="name">Change the product's name</label>
      <input v-model="pdname" type="text" id="name" name="name" />
      <label for="price">Change the product's price</label>
      <input v-model="pdprice" type="text" id="price" name="price" />
    </div>

  </div>
  <button @click="submitChange" type="submit" id="sell-button">Confirm</button>
</template>

<script>
export default {
  name: "ProductAdminsView",
  data: () => {
    return {
      pdname: this.name,
      pdprice: this.pdprice,
      toggle: false,
    };
  },
  props: {
    submitChange : Function,
    //pdid: Number,
    pdname: String,
    pdprice: Number,
    pdcount: Number,
    pdimage: String
  },
  methods: {
    edit() {
      this.toggle = !this.toggle;
    },
    
  }
};
</script>
