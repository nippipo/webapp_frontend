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
      <button type="button" id="sell-button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Confirm</button>
      </form>
    </div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {{modalBody}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="submitChange" onclick="/browseadd" type="button" class="btn btn-primary" >Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
 
</template>

<script>
export default {
  name: "ProductAdminsView",
  data: function(){
    return {
      productIdBackend: 0,
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
    userId: Number,
    //equal to 0 is post, equal to 1 is put
    postOrPut: Number,
    modalTitle: String,
    modalBody: String,
    pdid: Number,
    pdname: String,
    pdprice: Number,
    pdstock: Number,
    pdimage: String, 
    pddescription: String, 
    },
  methods: {
    edit() {
      this.toggle = !this.toggle;
    },
    async submitChange(){
      if(this.postOrPut == 0) {
      const product = {
        productsName: this.name,
        price : this.price,
        image : this.image,
        stock : this.stock,
        description : this.description
      }
      //create product
      var endpoint1=  process.env.VUE_APP_BACKEND_BASE_URL + `/api/product`
      var requestOptions1 = {
      method: 'POST',
      redirect: 'follow',
      headers: {
          'Content-type' : 'application/json'
        },
      body:JSON.stringify(product)
    }
      await fetch(endpoint1, requestOptions1)
      .then(res => res.json())
      .then(result => {this.productIdBackend = result.id})
      .catch(error => console.log('error',error))

      var endpoint = process.env.VUE_APP_BACKEND_BASE_URL + `/api/product/${this.productIdBackend}/${this.userId}`
      var requestOptions= {
        method: 'PUT',
        redirect: 'follow'
      }
      await fetch(endpoint, requestOptions)
      .catch(error => console.error('error', error))
      }
     
      //update product
      else {endpoint= process.env.VUE_APP_BACKEND_BASE_URL + `/api/product/${this.id}/?productsName=${this.name}&price=${this.price}&description=${this.description}&stock=${this.stock}`
      requestOptions = {
      method: 'PUT',
      redirect: 'follow'}
      fetch(endpoint, requestOptions)
      .catch(error => console.log('error',error))
      }
      
    
    },
  }
};
</script>
