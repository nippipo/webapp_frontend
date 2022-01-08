<template>
  <div>
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
      <button class="btn btn-light" @click="edit" id="edit"><i class="bi bi-pencil-square"></i>  Edit</button>
    </div>

    <div class="toggleEditBox" v-if="toggle">
      <form class="needs-validation" novalidate>
        <div class="mb-3"> 
          <label for="name">Change the product's name</label>
          <input v-model="name" type="text" id="name" name="name" required/>
            <div class="invalid-feedback">
            Please choose a name for this product.
            </div>
        </div>
      <div class="mb-3">
      <label for="price">Change the product's price</label>
      <input v-model="price" type="number" step="0.01" id="price" name="price" required/>
            <div class="invalid-feedback">
            Product has to have a price before being saved.
            </div>
      </div>
      <div class="mb-3">
        <label for="description">Change the product's description</label>
      <input v-model="description" type="text" id="description" name="description" />
      </div>
      <div class="mb-3">
        <label for="stock">Change the product's stock number</label>
      <input v-model="stock" type="number" id="stock" name="stock" required/>
            <div class="invalid-feedback">
            Please specify how many items of this product type you can offer.
            </div>
      </div>
      
      <button type="button" id="sell-button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Confirm</button>
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
        <button @click="submitChange" type="submit" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </form>
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
      const valid = this.validate()
      await console.log("validation", valid)
      //const valid = true
      if(this.postOrPut == 0 && valid) {
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
      await console.log("created", valid)
      }
     
      //update product
      else if(this.postOrPut == 0 && valid){endpoint= process.env.VUE_APP_BACKEND_BASE_URL + `/api/product/${this.id}/?productsName=${this.name}&price=${this.price}&description=${this.description}&stock=${this.stock}`
      requestOptions = {
      method: 'PATCH',
      redirect: 'follow'}
      await fetch(endpoint, requestOptions)
      .catch(error => console.log('error',error))
      await console.log("edited", valid)
      }
     
    
    },
    validate(){
      let valid = true 
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          valid = false 
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
    return valid
    }
  }
};
</script>
<style>
#edit{
  position: relative;
  max-width: 100px;
  padding: 5px 15px 5px 12px;
  margin: 10px;
}

.image-editbutton-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>