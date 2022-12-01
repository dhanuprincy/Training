<template>
<div>

   <div  v-if="form1">
    
    <b-modal id="modal-center" size="lg" hide-footer style="height:50px"></b-modal>

<h4 v-if="update">You are ready to editing your details here!</h4>
       <h1 v-if="submit" class="mb-3">REGISTERATION FORM</h1>
   
       <br>
       <h5 v-if="submit" class="mb-3">Login Your Account</h5>
   
       <input type="text" class="form-control" name="Username" v-model="input.Username" placeholder="Enter the username "> <br>
       <input type="mail" class="form-control" name="Email" v-model="input.Email" placeholder="Enter the mail id"><br>
       <input type="number" class="form-control" name="Mobile.No" v-model="input.MobileNo" placeholder="Enter your mobile number"><br>
       <input type="password" class="form-control" name="Password" v-model="input.Password" placeholder="Enter the Password "><br>
       <input v-if="pwdHide"  class="form-control" type="password" name="Confirm Password" v-model="input.ConfirmPassword" placeholder="Confirm password "><br><br>
       <a class="d-flex align-items-center justify-content-center pb-4" href="#!" style="color:blue">Forgot password?</a>
       <!-- <b-button @click="save()">Save</b-button> -->
       <div class="text-center">
           <b-button v-if="submit" pill style="padding:10px 60px; border-radius: 26px;" type="submit" v-on:click="login()">Submit</b-button><br>
           <a class="d-flex align-items-center justify-content-center pb-4" href="#!" style="color:white">Forgot password?</a>
           <b-button v-if="update"  pill style="padding:10px 60px; border-radius: 26px;" type="button" @click="final()">Update</b-button>

       </div>
       
   </div >
   <!-- <b-modal v-if="form2"  id="modalForm2" hide-footer style="height:50px"> -->
    <div v-if="form2">
        <b-table striped hover :items="users" :fields="fields">
            <template v-slot:cell(actions)="data" >
                <b-button size="sm" @click="edit(data.item)" class="mr-1" variant="warning">
                    Edit
                   </b-button>
            </template>
            
        </b-table>
     
      <b-button  id="submit" type="button" @click="add()">ADD</b-button>
      

    </div>
    

    <!-- <template #modal-footer="{ login }">

                  <b-button class="btn btn-secondary w-100 p-2 d-flex align-items-center justify-content-center" style="padding:10px 60px; border-radius: 26px; " type="submit" v-on:click="login()">
                   Submit
                  </b-button>

                  </template> -->
                  
                 
                    <!-- <b-button  v-if="update"  pill style="padding:10px 60px; border-radius: 26px;" type="button" @click="final()">Update</b-button> -->
                            
                            <!-- <template #cell(actions)="row">
                                <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                                  Info modal
                                </b-button> -->
            
                            <!-- <b-td><b-button size="sm" @click="edit(value)" class="mr-2">
                               
                              </b-button></b-td> -->
                                <!-- <button id="submit" type="button" @click="edit(value)">Edit</button></td> -->
                                
            
                           
                        <br>
                      
                        <!-- <b-button id="submit" type="button" @click="add()">ADD</b-button> -->
            
                      
                     
                  
                  
                 <!-- </b-modal>
                -->
    
</div>
</template>

<script>
import Swal from 'sweetalert2';

export default ({

    name: 'LoginModal',
    components: {
        
    },
    data() {
        return {
            form1: true,
            form2: false,
            submit: true,
            update: false,
            pwdHide: true,
          
            input: {
                Username: "",
                Email: "",
                MobileNo: "",
                Password: "",
                ConfirmPassword: "",
                editIndex: "",
               

            },
            users: [],
            fields: 
            [
            {
                key:'username',
                label:'Username'
            },
            {
                key:'email',
                label:'Email'
            },
            {
                key:'mobile',
                label:'Mobile'
            },
              {
                key:'password',
                label:'Password'
            },
            {
                key:'cpassword',
                label:'Cpassword'
            },
            {
                key:'editindex',
                label:'editIndex'
            },
            {
                key:'actions',
                label:'Actions'
            }
            ],

        }
    },

    methods: {

        login: function () {
            console.log("login");
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showErrorButton: false,
                showConfirmButton: false,
                timer: 3000,
                customClass: {
                    popup: 'colored-toast'
                },
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }

            })
            if (this.input.Username == '') {

                // alert("Please enter your username.");

                Toast.fire({
                    icon: 'warning',
                    title: 'Please enter your username'

                })

            } else if (!(/^[A-Za-z]+$/.test(this.input.Username))) {

                //alert('User name field required only alphabet characters');
                Toast.fire({
                    icon: 'error',
                    title: 'User name field required only alphabet characters',
                })

            } else if (this.input.Email == '') {

                //alert("Please enter your e-mail id!.");
                Toast.fire({
                    icon: 'warning',
                    title: 'Please enter your e-mail id!',
                })

            } else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.input.Email))) {

                //alert("Invalid email");
                Toast.fire({
                    icon: 'error',
                    title: 'Invalid email',
                })

            } else if (this.input.MobileNo == "" || this.input.MobileNo.length < 10 || this.input.MobileNo.length > 10) {

                // alert("Please enter valid phone number.");
                Toast.fire({
                    icon: 'error',
                    title: 'Please enter valid phone number.',
                })

            } else if (this.input.Password == "") {

                //  alert("Please enter your password");
                Toast.fire({
                    icon: 'warning',
                    title: 'Please enter your password',
                })

            } else if (this.input.Password.length < 8 || this.input.Password.length > 8) {

                // alert("Password should be in 8 character");

                Toast.fire({
                    icon: 'info',
                    title: 'Password should be in 8 character',
                })

            } else if (this.input.ConfirmPassword == "") {

                // alert("Re-Enter your password");
                Toast.fire({
                    icon: 'warning',
                    title: 'Re-Enter your password',
                })

            } else if (this.input.Password != this.input.ConfirmPassword) {

                // alert("Password not Matched");
                Toast.fire({
                    icon: 'error',
                    title: 'Password not Matched',
                })

            } else {
                console.log("Users Length ------------", this.users.length);
                if (this.users.length != 0) {
                    let isEmailFound = false;
                    let isMobileFound = false;
                    for (let i = 0; i < this.users.length; i++) {
                        console.log("===for===", this.users[i])

                        if (this.users[i].email == this.input.Email) {
                            isEmailFound = true;

                        }

                        if (this.users[i].mobile == this.input.MobileNo) {
                            isMobileFound = true;

                        }

                    }
                    if (isEmailFound == false && isMobileFound == false) {

                        this.users.push({
                            username: this.input.Username,
                            email: this.input.Email,
                            mobile: this.input.MobileNo,
                            password: this.input.Password,
                            cpassword: this.input.ConfirmPassword,
                            editindex: this.users.length + 1,

                        });
                        // alert("Thank You for Login! Successfully Registered! ");
                        Swal.fire({
                        icon: 'success',
                        title: 'Thank You for Login! Successfully Registered! '
                    })
                        console.log("Data==========", this.users);
                        this.form1 = false;
                        this.form2 = true;

                    } else if (isEmailFound == true) {

                        // alert("The specified email id is aleady exist");

                        // Swal.fire({
                        //     icon: 'error',
                        //     title: 'Oops...',
                        //     text: 'The specified email id is aleady exist',
                        // })
                        Toast.fire({
                            icon: 'warning',
                            title: 'The specified email id is aleady exist',
                        })

                    } else {

                        //  alert("The specified mobile number is aleady exist");

                        // Swal.fire({
                        //     icon: 'error',
                        //     title: 'Oops...',
                        //     text: 'The specified mobile number is aleady exist',
                        // })
                        Toast.fire({
                            icon: 'warning',
                            title: 'The specified mobile number is aleady exist',
                        })

                    }
                } else {
                    console.log("Else User length ======", this.users.length);
                    // alert("Thank You for Login! Successfully Registered! ");
                    
                    console.log("form2======================",this.form2);
                    this.users.push({
                        username: this.input.Username,
                        email: this.input.Email,
                        mobile: this.input.MobileNo,
                        password: this.input.Password,
                        cpassword: this.input.ConfirmPassword,
                        editindex: this.users.length + 1

                    });
                    Swal.fire({
                        icon: 'success',
                        title: 'Thank You for Login! Successfully Registered! '
                    })
                    let userIndex = this.users.length + 1;
                    this.form1 = false;
                    this.form2 =true;
                  
                    console.log("==============UserIndex===========", userIndex);

                    
                    console.log("Data==========", this.users);
                   
                    

                }

            }

        },
        
        
        
        add: function () {
            this.form2 = false;
            this.form1 = true;
            this.submit = true;
            this.update = false;
            this.pwdHide = true;

            this.input.Username = "";
            this.input.Email = "";
            this.input.Password = "";
            this.input.MobileNo = "";
            this.input.ConfirmPassword = "";
            this.input.editIndex = "";

        },
        edit: function (user) {
            this.submit = false;
            this.update = true;
            this.form1 = true;
            this.form2 = false;
            this.pwdHide = false;
          
            this.input.Username = user.username;
            this.input.Email = user.email;
            this.input.MobileNo = user.mobile;
            this.input.Password = user.password;
            this.input.ConfirmPassword = user.cpassword;
            this.input.editIndex = user.editindex;

        },

        final() {
            console.log("=======Users===========", this.users);
            console.log("========Input =============", this.input);
            this.users.forEach(e => {
                console.log("==========Input Index ============", this.input.editIndex);
                if (e.editindex == this.input.editIndex) {
                    console.log("===========index====", e.editindex)
                    e.username = this.input.Username;
                    console.log("===========o====", e.username)

                    e.email = this.input.Email;
                    e.mobile = this.input.MobileNo;
                    e.password = this.input.Password; 
             
                } 
                Swal.fire({
                        icon: 'success',
                        title: 'Done'
                    })

            });

          
            this.form1 = false;
            this.form2 = true;

        }
    }
})
</script>
