<template>
      
          <div id="nav">
          <nav class="container navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Logo Here</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-nav mr-auto">
                    <router-link to="/" class="nav-item nav-link">Home</router-link>
                    <router-link to="/About" class="nav-item nav-link">About</router-link>
                    <router-link to="/Careers" class="nav-link">Careers</router-link>
                    <router-link to="/Contact" class="nav-link">Contact</router-link>
                </div>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
         </div>
        
       
</template>
<script>
import LoginModal from './LoginModal.vue';



export default ({
    name: 'Bar',
    components: {
   
    LoginModal
},
   method: {

   }   
})
</script>