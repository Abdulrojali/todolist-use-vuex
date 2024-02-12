<script>
import outputtodoVue from './components/outputtodo.vue';
import addTodo from './components/addtodo.vue'
export default{
    components:{
        outputtodoVue,
        addTodo
    }
}
</script>

<template>
    <div class="container">
        <h1>todolist</h1>
        <addTodo></addTodo>
        <outputtodoVue></outputtodoVue>
    </div>
</template>


<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing:border-box ;
}
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    background-color: gray;
}
h1{
    font-size: 2.1em;
    font-weight: 800;
    text-transform: capitalize;
}
</style>