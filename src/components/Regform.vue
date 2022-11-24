<template>
    
<header>
  
        <Navbar /> 
        <RegHome />
   
       
        <!-- <b-nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: transparent;">
            <a class="navbar-brand" href="#">
                <img src="https://examsdaily.in/wp-content/uploads/2020/12/examsdaily-new-png-png.png" alt="logo" style="width:200px;">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <b-nav class="collapse navbar-collapse" id="navbarNavAltMarkup" align="right">
              <b-nav class="navbar-nav">                
                <a class="nav-item nav-link scrollto active" href="#" style="font-size:20px;"><i class="bi bi-house-door-fill"></i> Home</a>
               
                <a class="nav-item nav-link scrollto" href="#" style="font-size:20px;"><i class="bi bi-telephone-fill"></i> Contact</a>
                <a class="nav-item nav-link " href="#" style="font-size:20px;"> About us</a>
                
                <a class="nav-item nav-link" href="#" style="font-size:20px;"> <i class="bi bi-person-circle"></i> Profile</a>
                <b-nav-item-dropdown> 
                <b-dropdown-item href="#">My Account</b-dropdown-item>
                <b-dropdown-item href="#">Log out</b-dropdown-item>
            </b-nav-item-dropdown>
              </b-nav>
            </b-nav>
          </b-nav> -->
        <!-- <div>
            <b-button v-b-toggle.my-collapse>Toggle Collapse</b-button>
            <b-collapse id="my-collapse">
                <b-card title="Collapsible card">
                  Hello world!
                </b-card>
              </b-collapse>
        </div> -->
         <!-- <div class="p-6 text-center bg-image" style="
          background-image: url('../static/computer.jpg'); background-repeat: no-repeat; background-size:100% 100%;">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.6); padding:80px;">
                <form>
                    

                    <div class="text-white">
                        <h4 v-if="update">You are ready to editing your details here!</h4>
                        <h1 v-if="submit" class="mb-3">REGISTERATION FORM </h1>
                        <br>
                        <h4 v-if="submit" class="mb-3">Login Your Account</h4>

                        <input type="text" class="form-control" name="Username" v-model="input.Username" placeholder="Enter the username " required> <br>
                        <input type="mail" class="form-control" name="Email" v-model="input.Email" placeholder="Enter the mail id" required><br>
                        <input type="number" class="form-control" name="Mobile.No" v-model="input.MobileNo" placeholder="Enter your mobile number" required><br>
                        <input type="password" class="form-control" name="Password" v-model="input.Password" placeholder="Enter the Password " required><br>
                        <input v-if="pwdHide" class="form-control" type="password" name="Confirm Password" v-model="input.ConfirmPassword" placeholder="Confirm password " required><br><br>

                        <div class="text-center pt-1 mb-5 pb-1" v-if="submit">
                            <b-button class="btn btn-secondary" style="padding:10px 60px; border-radius: 26px;" type="submit" v-on:click="login()">Submit</b-button><br>
                            <a class="d-flex align-items-center justify-content-center pb-4" href="#!" style="color:white">Forgot password?</a>
                        </div>

                        <button v-if="update" class="btn btn-secondary" style="padding:10px 60px; border-radius: 26px;" type="button" @click="final()">Update</button>
                        <button id="submit" type="button" @click="showSW2()">Sweet alert</button>
                    </div>
                </form>
            </div>
        </div> -->
   

 

    <!-- <div v-if="form2" id="table">
      
        <table>
            <tr>
                <td>Serial.No</td>
                <td>Username</td>
                <td>Email</td>
                <td>MobileNo</td>
                <td>Password</td>
                <td v-if="tableHide">ConfirmPassword</td>

            </tr>

            <tr v-for="(value,index,key) in users" v-bind:key="key">
                <td>{{ index + 1 }}</td>
                <td>{{ value.username }}</td>
                <td>{{ value.email }}</td>
                <td>{{ value.mobile }}</td>
                <td>{{ value.password }}</td>
                <td v-if="tableHide">{{ value.cpassword }}</td>

                <td><button id="submit" type="button" @click="edit(value)">Edit</button></td>

            </tr>
            <br>
            <button id="submit" type="button" @click="add()">ADD</button>

        </table>
</div> -->

</header>
</template>

<script>
import Navbar from './Navbar.vue'
import Swal from 'sweetalert2';
import RegHome from './RegHome.vue'
export default ({
    components: {
        Navbar,
        RegHome,
       
    },
    // data() {
    //     return {
    //         form1: true,
    //         form2: false,
    //         submit: true,
    //         update: false,
    //         pwdHide: true,
    //         tableHide: true,
    //         input: {
    //             Username: "",
    //             Email: "",
    //             MobileNo: "",
    //             Password: "",
    //             ConfirmPassword: "",
    //             editIndex: 0,

    //         },
    //         users: [],

    //     }
    // },
})

    // methods: {
    //     showAlert() {
    //   // Use sweetalert2
    //   this.$swal('Hello Vue world!!!');
    // // },        
    //     showSW2() {
    //         Swal.fire(
    //             'Good job!',
    //             'You clicked the button!',
    //             'success'
    //         )
    //     },
/*login: function () {

            if (this.input.Username == '') {

                // alert("Please enter your username.");
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Oops...',
                //     text: 'Please enter your username!',
                // })

            } else if (!(/^[A-Za-z]+$/.test(this.input.Username))) {

                alert('User name field required only alphabet characters');

            } else if (this.input.Email == '') {

                alert("Please enter your e-mail id!.");

            } else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.input.Email))) {

                alert("Invalid email");

            } else if (this.input.MobileNo == "" || this.input.MobileNo.length < 10 || this.input.MobileNo.length > 10) {

                alert("Please enter valid phone number.");

            } else if (this.input.Password == "") {

                alert("Please enter your password");

            } else if (this.input.Password.length < 8 || this.input.Password.length > 8) {

                alert("Password should be in 8 character");

            } else if (this.input.ConfirmPassword == "") {

                alert("Enter confirm password");

            } else if (this.input.Password != this.input.ConfirmPassword) {

                alert("Password not Matched");

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
                        alert("Thank You for Login! Successfully Registered! ");
                        console.log("Data==========", this.users);
                        this.form1 = false;
                        this.form2 = true;

                    } else if (isEmailFound == true) {

                        alert("The specified email id is aleady exist");

                    } else {

                        alert("The specified mobile number is aleady exist");

                    }
                } else {
                    console.log("Else User length ======", this.users.length);
                    alert("Thank You for Login! Successfully Registered! ");

                    let userIndex = this.users.length + 1;

                    console.log("==============UserIndex===========", userIndex);

                    this.users.push({
                        username: this.input.Username,
                        email: this.input.Email,
                        mobile: this.input.MobileNo,
                        password: this.input.Password,
                        cpassword: this.input.ConfirmPassword,
                        editindex: this.users.length + 1

                    });
                    console.log("Data==========", this.users);
                    this.form1 = false;
                    this.form2 = true;

                }

            }

        },*/

//         add: function () {
//             this.form2 = false;
//             this.form1 = true;
//             this.submit = true;
//             this.update = false;
//             this.pwdHide = true;
//             this.tableHide = true;

//             this.input.Username = "";
//             this.input.Email = "";
//             this.input.Password = "";
//             this.input.MobileNo = "";
//             this.input.ConfirmPassword = "";
//             this.input.editIndex = "";

//         },
//         edit: function (user) {
//             this.submit = false;
//             this.update = true;
//             this.form1 = true;
//             this.form2 = false;
//             this.pwdHide = false;

//             this.input.Username = user.username;
//             this.input.Email = user.email;
//             this.input.MobileNo = user.mobile;
//             this.input.Password = user.password;
//             this.input.ConfirmPassword = user.cpassword;
//             this.input.editIndex = user.editindex;

//         },

//         final() {
//             console.log("=======Users===========", this.users);
//             console.log("========Input =============", this.input);
//             this.users.forEach(e => {
//                 console.log("==========Input Index ============", this.input.editIndex);
//                 if (e.editindex == this.input.editIndex) {
//                     console.log("===========index====", e.editindex)
//                     e.username = this.input.Username;
//                     console.log("===========o====", e.username)

//                     e.email = this.input.Email;
//                     e.mobile = this.input.MobileNo;
//                     e.password = this.input.Password;

//                 }

//             });

//             this.tableHide = false;
//             this.form1 = false;
//             this.form2 = true;
//         }
//     }
// })
// </script>

<style scoped>
.form-control {
    width: 30%;
}

input[type="text"],
[type="password"],
[type="mail"],
[type="number"],
[type="submit"] {
    position: relative;
    display: block;
    margin: 0 auto;
    padding: 8px 2px
}
</style> -->
