<template>
<ul class="nav nav-pills justify-content-end">
  <li class="nav-item">
  <router-link class="nav-link" to="/">Home</router-link>
  </li>
  
  <li class="nav-item">
  <router-link class="nav-link" to="/about">About</router-link>
  </li>

  <li v-if="!authenticated" class="nav-item">
  <router-link class="nav-link" to="/login">Login</router-link>
  </li>

  <li v-if="authenticated" class="nav-item">
   <a  @click="logout()" class="nav-link">Logout</a>
  </li>
    
  <li  v-if="authenticated" class="nav-item dropdown" >
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Profile</a>
      <ul class="dropdown-menu">
      <li><router-link class="dropdown-item" to="/profile">Browse all products and edit them</router-link></li>
      <li><router-link class="dropdown-item" to="/browseadd">Add new product</router-link></li>
    </ul>
  </li>
</ul>
<router-view :key="$route.fullPath"></router-view>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>

<script>
export default {
  name: 'app',
  data: function () {
    return { authenticated: false,
    claims:'',
    message: ''}
  },
  async created () {
    await this.isAuthenticated()
    await this.$auth.authStateManager.subscribe(this.isAuthenticated) 
   },
  
    
  
  watch: {
    // Everytime the route changes, check for auth status
    '$route': 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    async logout () {
      await this.$auth.signOut()
    }
  }
}
//{if(json.message === 'mail not found') this.addNewUser }
</script>