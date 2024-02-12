<script>
import {useStore} from 'vuex'
export default{
    data(){
        return{
            data:'',
            store:useStore()
        }
    },
    methods:{
        addTodo(data){
            this.store.dispatch('asyncPushData',data)
        }
    }
}
</script>
<template>
    <div class="content">
        <input type="text" placeholder="masukkan todo" v-model="data">
        <button @click="addTodo(data)">add</button>
    </div>
</template>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing:border-box ;
}
.content{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
}
input{
    width: 65%;
    padding: 6px 10px;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
}
button{
    background-color: red;
    color: white;
    cursor: pointer;
    border: none;
    text-transform: capitalize;
    padding: 5px 8px;
}
bottom:hover{
    opacity: .8;
}
</style>