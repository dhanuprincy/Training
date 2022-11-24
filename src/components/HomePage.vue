<template>
    <div >
        <div class="bgimg">
            
        </div>
        
        
            <!-- <button type="button"> Model</button> -->
      
    
    </div>
        <!-- <div v-if="back == true">
            <button type="button" value="back" @click="back=!back" />
        </div>
        <div v-if="back == false">
            <body>
    
            <table class="scrolldown">
                <tr v-for="(value, key) in posts" v-bind:key="key">
                    
                    <td @click="showPost(value.id)"> {{value.id}} </td>
                    <td> {{value.title}} </td>
                </tr>
            </table>
        </body>
        </div>
        <div v-if="back == true">
            <post :postId="postId"/>
        
        </div> -->

    
</template>
<script>
import post from './post.vue'

export default {
    components: {
        post
    },
    async mounted(){
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.posts = json)
        console.log(this.posts);
    },
    data(){
        return {
            posts: null,
            back: false,
            postId: 0,
        }
    },
    methods:{
        showPost: function(id){
            console.log('Id is ', id);
            this.postId = id;
            this.back = true;
        }
    }   
}
</script>
<style scoped>
  

  .bgimg {
   
    background-image: url('mypic.jpg');
    height:100px;
    width:20px;
    background-repeat: no-repeat;
    
  }
    
.bgimg button {
    background-color: #242724; 
    border: none;
    color: rgb(224, 212, 212);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    font-size: 30px;
    margin: 0;
    cursor: pointer;

 
   
  }
  
table {
    display: inline-block;
    height: 400px;
    overflow: auto;
    border-collapse: collapse;
  }  

  th {
    background-color: #1976D2;
    color: #fff;
  }
  
  th,
  td {
    padding: 1em .5em;
  }
  tr {
    color: #212121;
  }
  
  tr:nth-child(odd) {
    background-color: #BBDEFB;
  }
</style>