<template>
<div id="" class="">
    <b-navbar toggleable="lg" class="nav-sty fixed-top"  style="background: rgb(157,154,168);
    background: linear-gradient(90deg, rgba(157,154,168,1) 0%, rgba(218,218,223,1) 0%, rgba(246,233,233,1) 20%, rgba(0,212,255,1) 24%, rgba(1,1,6,1) 90%);">
        
        <b-container fluid>
            <b-nav>
                <img src="https://examsdaily.in/wp-content/uploads/2020/12/examsdaily-new-png-png.png" alt="" style="width:200px;" />
            </b-nav>
            <b-navbar-nav id="navbrand" href="#" class="mx-2 ms-auto">
                <b-nav>
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-nav class="" justified right>
                        <b-collapse id="nav-collapse" is-nav>
                            <b-nav-item href="#1"><i class="h4 mb-2 bi bi-house-door-fill" style="color:beige"></i><br> Home</b-nav-item>
                            <b-nav-item typle="link" href="https://tamil.examsdaily.in/"><i class="h4 mb-2 bi bi-browser-chrome" style="color:beige"></i><br>Website</b-nav-item>

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
                                        <i class="h4 bi bi-person-circle " style="color:beige"></i><br>Profile
                                    </template>
                                    <b-dropdown-item href="#">
                                    
                                        <!-- <b-button v-b-modal.modal-1></b-button> -->

                                        <b-button  v-b-modal.modal-center>Account</b-button></b-dropdown-item>


                                    <b-dropdown-item href="#">Log Out</b-dropdown-item>

                                    <b-modal id="modal-center" size="lg" hide-footer style="height:50px">
                                       <LoginModal    />
                                     
                                    </b-modal>

                                </b-dropdown>
                            </div>
                            <b-navbar-nav class="py-2">
                                <!-- <b-nav-form> -->

                                <b-input type="text" size="md" class="text-black m-1" placeholder="Search" aria-label="Search"></b-input>
                                <b-btn inline="transparent" size="md" class="text-white m-1 " variant="link" toggle-class="text-decoration-none" no-caret type="submit"><i class="bi bi-search "></i></b-btn>
                                <!-- rounded-circle bg-danger  -->
                                <!-- </b-nav-form> -->
                            </b-navbar-nav>
                        </b-collapse>

                    </b-nav>
                </b-nav>
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
.nav-bk{
 
    background: #40E0D0;
     
    background: -webkit-linear-gradient(to right, #FF0080, #FF8C00, #40E0D0);
     
    background: linear-gradient(to right, #FF0080, #FF8C00, #40E0D0);
     
    }
    </style>
