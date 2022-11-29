<template>
<div id="" class="">
    <b-navbar toggleable="lg" class="nav-sty fixed-top"  style="background: rgb(217,212,72);
    background: linear-gradient(90deg, rgba(217,212,72,1) 8%, rgba(134,134,128,1) 62%); ">
        
        <b-container fluid>
            <b-nav>
                <b-img src="../static/ed.jpg" alt="" style="width:50px;"></b-img>
            </b-nav>
            
            <b-navbar-nav id="navbrand" href="#" class="">
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                        <b-collapse id="nav-collapse" is-nav>
                            
                            
                      <i class="h3 mb-2 bi bi-house-door-fill"></i><router-link to="/RegForm" class=" nav-item nav-link" >Home</router-link>
                      <i class="h3 mb-2 bi bi-info-circle"></i> <b-link href="https://tamil.examsdaily.in/" class="nav-item nav-link">About</b-link>
                      <i class="h3 mb-2 bi bi-hourglass-split"></i> <router-link to="/Careers" class="nav-link">Careers</router-link>
                      <i class="h3 mb-2 bi bi-telephone"></i> <router-link to="/Contact" class="nav-link">Contact</router-link>
                      <b-navbar-nav class="py-2">
                        <!-- <b-nav-form> -->

                        <b-input type="text" size="md" class="text-black" placeholder="Search" aria-label="Search"></b-input>
                        <b-btn inline="transparent" size="md" class="text-white m-1 " variant="link" toggle-class="text-decoration-none" no-caret type="submit"><i class="bi bi-search "></i></b-btn>
                        <!-- rounded-circle bg-danger  -->
                        <!-- </b-nav-form> -->
                    </b-navbar-nav>
              
                            <!-- <div>
                                <b-dropdown text="Profile">
                                    <template #button-content>
                                        <i class="h4 bi bi-person-circle "></i> <br>Profile
                                      </template>
                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                    <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                  </b-dropdown>  

                              </div> -->
                            <div>
                                <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
                                    <template #button-content>
                                        <i class="h1 bi bi-person-fill" style="color:yellow"></i><br>
                                    </template>
                                    <b-dropdown-item href="#">
                                    
                                        <!-- <b-button v-b-modal.modal-1></b-button> -->

                                        <b-button  v-b-modal.modal-center>Account</b-button></b-dropdown-item>


                                    <b-dropdown-item href="#">Log Out</b-dropdown-item>

                                    <b-modal id="modal-center" size="lg" hide-footer style="height:50px">
                                       <LoginModal />
                                     
                                    </b-modal>

                                </b-dropdown>
                            </div>
                           
            </b-collapse>
            </b-navbar-nav>
        </b-container>

    </b-navbar>

    


</div>


</template>


<script>
import LoginModal from './LoginModal.vue';



export default ({
    name: 'Navbar',
    components: {
   
    LoginModal
},
   method: {

   }   
})
</script>

<style>
.nav-link {
    margin-right: 150px;
}
    </style>
