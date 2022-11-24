<template>
    <div>
        <button @click="increment" class="f1">count is:{{count}} </button>
    </div>


</template>

<script> 
export default ({  
    data() {
        return{
        count:'0'
        } 
    },
method: {
    increment:function(){
        this.count++
    }
},
mount(){
    console.log(this.count)
}

})
</script>
<style scoped>
.f1{
    border:5px;
    color:blue;

}
</style>