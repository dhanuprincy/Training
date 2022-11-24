<template>
    
</template>
<script>
export default {
    data() {
        return {
        }
    },
    /*
    async mounted(){
        console.log("Mounted");
        await this.methodOne()
        .then(data =>{
            this.display("Method One");
        });
        await this.methodTwo().then(data =>{
            this.display("Method Two");
        });
    },
    methods: {
        methodOne: function(){
            return new Promise(resolve => setTimeout(resolve, 2000));           
        },
        methodTwo: function(){            
            return new Promise(resolve => setTimeout(resolve, 1000));                      
        },
        display: function(message){
            console.log(message);
        }
    }
    */
   mounted(){
       /*
       this.longTaskOne()
       .then(data => {
           console.log("Task Completed Successfully Then 1");
       })
       .then(data => {
           console.log("Task Completed Successfully Then 2");
       })
       .then(data => {
           console.log("Task Completed Successfully Then 3");
       })              
       .catch(data => {
           console.log("Tasking completion Unsuccessfull")
       });
       console.log("Moving to next line");
       console.log("Moving to next line");
       console.log("Moving to next line");
       console.log("Moving to next line");
       console.log("Moving to next line");
       */
      this.callApi()
      .then(res =>{
          console.log("Call Success", res);          
      })
      .catch(err =>{
          console.log("Call Unsuccessfull", err);
      });
   },
   methods: {
        longTaskOne: function(){
        //    let fun = () => { console.log("Hi I m Lamda!");}
        //     let fun = () => {
        //         console.log("Hi I m Lamda!");
        //     };
        //      let fun = (data) => {
        //          console.log("Hi I m Lamda", data);
        //         };        
        // let fun = data => console.log('Hi I m Lamda!', data);
        // fun("Helllo World");
        console.log("Starting Long Task");
        return new Promise((resolve,reject)=>{
            setTimeout(resolve, 3000); // Lengthier Process
        });
       },
       callApi: function() {
        //    let data = fetch('https://yesno.wtf/api');
        //    console.log(data);
        return new Promise((resolve,reject)=>{
            fetch('https://yesno.wtf/api')
            .then(ok => {
                resolve(ok);
            })
            .catch(err => {
                reject(err);
            });
        });        
            
       },
        // display: function(message){
        //     console.log(message);
        // }  
   }
   /*
    function_name(){}
    (){}
    () => { definition }
   */
}
</script>