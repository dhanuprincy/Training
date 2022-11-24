<template>
    <div v-if="post != null">
        <h1>{{post.title}}</h1>
        <h3>{{post.body}}</h3>
    </div>
    </template>
    <script>
    export default {
        props:{
            postId: String
        },
        async mounted(){
            await fetch('https://jsonplaceholder.typicode.com/posts/'+this.postId)
            .then(response => response.json())
            .then(json => this.post = json)
            console.log(this.post);
        },    
        data(){
            return {
                post: null
            }
        }
    }
    </script>