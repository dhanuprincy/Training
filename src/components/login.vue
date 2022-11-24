<template>
    <div id="Login">
<h1>LOGIN</h1>
       <input id="box" type="text" name="username" v-model="input.username" placeholder="Enter the username "/><br>
       <input id="box" type="password" name="password"  v-model="input.password" placeholder="Enter the Password"/><br><br>
       <button id="submit" type="button" v-on:click="register()">Login</button>
<div v-if="role == 'ADMIN'">
	<h1>Hello Welcome Admin</h1>
  </div>
<div v-if="role == 'HR'">
	<h1>Hello Welcome HR</h1>
  </div>
<div v-if="role == 'USER'">
	<h1>Hello Welcome USER</h1>
  </div>
</div>
</template>

<script>
export default ({
    data(){
        return {
        input:{
                username: "",
                password: "",  
                role:""         
            },

    users:[{ 
        username: "admin",
        password: "admin",
        role: "ADMIN"
    },
    
     {  
        username: "user1",
        password: "user1",
        role: "USER"
    },
    {
        username: "user2",
        password: "user2",
        role: "USER"
    },
    {
        username: "hr",
        password: "hr",
        role: "HR"
    }]
}
        },
    
methods: {
    register: function() {  
        let isUserFound = false;
for(let i =0; i<=this.users.length; i++)
{
    if(this.users[i].username == this.input.username && this.users[i].password == this.input.password )
    {
        isUserFound = true;
        this.role = this.users[i].role;
        alert("User Found!");			
          break;
    }
}
           if(!isUserFound)
    {
		alert("User not Found!");
	}
}


    },
})
</script>
<style scoped>

h1{
  font-family: "Times New Roman", Times, serif;
}
#Login {
  background: #3d97e06e;
  width: 400px;
  height: 550px;
  margin: 120px auto;
  margin-left:350px;
  padding: 80px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#box {

  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin-top: 30px ;
  padding: 20px 45px;
}
#submit {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 60%;
  border: 0;
  margin-top:40px;
  padding: 15px;
  color: #000000;
  font-size: 14px;
  cursor: pointer;
}
</style>




