<template>
  <div class="product">
    <div>
      <div>
        {{ name }}
      </div>
      <div>
        {{ description }}
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
      <form >
      <label for="name">Change the product's name</label>
      <input v-model="name" type="text" id="name" name="name" />
      <label for="price">Change the product's price</label>
      <input v-model="price" type="number" step="0.01" id="price" name="price" required/>
      <label for="description">Change the product's description</label>
      <input v-model="description" type="text" id="description" name="description" />
      <label for="stock">Change the product's stock number</label>
      <input v-model="stock" type="number" id="stock" name="stock" required/>
      <button @click="submitChange" type="submit" id="sell-button">Confirm</button>
      </form>
    </div>
 
  </div>
 
</template>

<script>
export default {
  name: "ProductAdminsView",
  data: function(){
    return {
      id: this.pdid,
      name: this.pdname,
      price: this.pdprice,
      stock: this.pdstock,
      image: this.pdimage,
      description: this.pddescription,
      toggle: false,
    };
  },
  props: {
    pdid: Number,
    pdname:String,
    pdprice:Number,
    pdstock:Number,
    pdimage:String,
    pddescription:String
    },
  methods: {
    edit() {
      this.toggle = !this.toggle;
    },
    submitChange(){
    const endpoint= `http://localhost:8080/api/product/${this.id}/?productsName=${this.name}&price=${this.price}&description=${this.description}`
    const requestOptions = {
      method: 'PATCH',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
    .catch(error => console.log('error',error))
    }
  }
};
</script>
