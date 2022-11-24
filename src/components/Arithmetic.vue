<template>
   <div>
    <div>
   
        <input type="number" class="box1" v-model="value1"/>
        <input type="number" class="box2" v-model="value2"/>
       <div>
        <button type="button" class="submit" value="+" v-on:click="result('add')">ADD</button>  <br/>
            <button type="button" class="submit" value="-" v-on:click="result('sub')">SUB</button><br/>
            <button type="button" class="submit" value="*" v-on:click="result('mul')">MUL</button><br/>
            <button type="button" class="submit" value="/" v-on:click="result('div')">DIV</button><br/>
      
        </div>
    
  </div>
  
  <pre><div>The sum of addition is  {{add}}</div>
  <div>The sum of subtraction is  {{sub}}</div>
  <div>The sum of multiplication is  {{mul}}</div>
  <div>The sum of division is  {{div}}</div></pre>

   </div>
  </template>
  <script>
  
  export default ({
   data() {
   return {
    value1: 0,
    value2: 0, 
    add:0,
    sub:0,
    mul:0,
    div:0

   }
    
   },
methods: {
    result:function(n) {

if(n == "add")
        {
            this.add= this.value1 + this.value2
            console.log(this.add);
            alert("The sum of addition is" + this.add);

        }
else if (n == "sub")
        {
            this.sub= this.value1 - this.value2
            console.log(this.sub);
            alert("The sum of subtraction is" + this.sub);

        }   
else if (n == "mul")
        {
            this.mul= this.value1 * this.value2
            console.log(this.mul);
            alert("The sum of multipication is" + this.mul);

        }   
else if(n == "div")
        {
            this.div= this.value1 / this.value2
            console.log(this.div);
            alert("The sum of division is" + this.div);

       }   

       }
}

      /*  {
         this.add= this.value1 + this.value2
         alert("The sum of addition is" + this.add);
        }
    {
        this.sub= this.value1 - this.value2
         alert("The sum of subtraction is" + this.sub);
    }
        { 
            this.mul= this.value1 * this.value2
         alert("The sum of multiplication is" + this.mul);     
           }
    {
        this.div= this.value1 / this.value2
         alert("The sum of division is" + this.div);    
        }*/
  
  });
  </script>
  <style scoped>
  .submit
  {
  background-color: green;
  border: none;
  color: white;
  padding: 10px 32px;
  text-align: center;
  font-size: 16px;
  margin-top: 30px;
  cursor: pointer;
  }
  .box1{
    
  width: 50%;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
    }
  .box2{
   
  width: 50%;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  }
 
  </style>
