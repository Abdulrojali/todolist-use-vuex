import {createStore} from 'vuex'

const store=createStore({
    state(){
        return{
            list:['makan','minum','membaca']
        }
    },
    getters:{

    },
    mutations:{
        pushData:(state,data)=>{
            state.list.push(data)
        },
        deleteData:(state,index)=>{
            state.list.splice(index,1)
        }
    },
    actions:{
        asyncPushData:(context,data)=>{
            setTimeout(() => {
                context.commit('pushData',data)
            }, 150);
        }
    }
})

export default store