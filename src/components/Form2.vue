<template>

        <div>  
 <!-- <h4>You are ready to editing your details here!</h4> -->
    <!-- <h1 v-if="submit" class="mb-3">REGISTERATION FORM</h1> -->

    <br>
    <!-- <h5 v-if="submit" class="mb-3">Login Your Account</h5> -->
    <!-- <b-button  v-if="update"  pill style="padding:10px 60px; border-radius: 26px;" type="button" @click="final()">Update</b-button> -->

            <b-table>
                <th>
                    <td>Serial.No</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>MobileNo</td>
                    <td>Password</td>
                    <td v-if="tableHide">ConfirmPassword</td>
    
                </th>
    
                <th v-for="(value,index,key) in users" v-bind:key="key">
                    <td>{{ index + 1 }}</td>
                    <td>{{ value.username }}</td>
                    <td>{{ value.email }}</td>
                    <td>{{ value.mobile }}</td>
                    <td>{{ value.password }}</td>
                    <td v-if="tableHide">{{ value.cpassword }}</td>
    
                    <td><b-button  id="submit"  pill style="padding:10px 60px; border-radius: 26px;" type="button" @click="edit(value)">Edit</b-button>
</td>                
</th>
                <br>
                <button id="submit" type="button" @click="add()">ADD</button>
    
            </b-table>
    </div>
    
  
</template>
<script>
export default  ({
    name: 'Form2',
components:{

},
data() {
        return {
            update: false,
            pwdHide: false,
            tableHide: false,
            input: {
                Username: "",
                Email: "",
                MobileNo: "",
                Password: "",
                ConfirmPassword: "",
                editIndex: 0,

            },
            users: [],

        }
    },
    // methods: {

    //     add: function () {
    //         this.form2 = false;
    //         this.form1 = true;
    //         this.submit = true;
    //         this.update = false;
    //         this.pwdHide = true;
    //         this.tableHide = true;

    //         this.input.Username = "";
    //         this.input.Email = "";
    //         this.input.Password = "";
    //         this.input.MobileNo = "";
    //         this.input.ConfirmPassword = "";
    //         this.input.editIndex = "";

    //     },
    //     edit: function (user) {
    //         this.submit = false;
    //         this.update = true;
    //         this.form1 = true;
    //         this.form2 = false;
    //         this.pwdHide = false;

    //         this.input.Username = user.username;
    //         this.input.Email = user.email;
    //         this.input.MobileNo = user.mobile;
    //         this.input.Password = user.password;
    //         this.input.ConfirmPassword = user.cpassword;
    //         this.input.editIndex = user.editindex;

    //     },

    //     final() {
    //         console.log("=======Users===========", this.users);
    //         console.log("========Input =============", this.input);
    //         this.users.forEach(e => {
    //             console.log("==========Input Index ============", this.input.editIndex);
    //             if (e.editindex == this.input.editIndex) {
    //                 console.log("===========index====", e.editindex)
    //                 e.username = this.input.Username;
    //                 console.log("===========o====", e.username)

    //                 e.email = this.input.Email;
    //                 e.mobile = this.input.MobileNo;
    //                 e.password = this.input.Password;

    //             }

    //         });

    //         this.tableHide = false;
    //         this.form1 = false;
    //         this.form2 = true;
    //     }
    // }
})
</script>