<script>
import {mapState,useStore} from 'vuex'
export default{
    data(){
        return{
            store:useStore()
        }
    },
    computed:{
        ...mapState(['list'])
    },
    methods:{
        deleteData(index){
            this.store.commit('deleteData',index)
        }
    }
}
</script>

<template>
    <div class="value">
        <ul class="list"
        v-for="(data,index) in list" 
        :key="index">
        <li><b>{{ data }}</b></li>
        <li><button @click="deleteData(index)">delete</button></li>
        </ul>
    </div>
</template>
<style>
*{
    padding: 0;
    margin: 0;
    box-sizing:border-box ;
}
.value{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.list{
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    background-color: orange;
    padding: 10px 15px;
    border-radius: 5px;
}
li b{
    font-size: 1.1em;
    font-weight: 600;
    text-transform: capitalize;
    color: white;
}
li button{
    background-color: red;
    color: white;
    cursor: pointer;
    border: none;
    text-transform: capitalize;
    padding: 5px 8px;
}
li button:hover{
    opacity: .8;
}
</style>