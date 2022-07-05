import { defineStore } from "pinia";
import names from "./store.name";

export const  userstore=defineStore(names.USER,{
    state(){
        return {
            isCollapse:<Boolean>(false)
        }
    },

    getters:{
        getCollapseValue():Boolean{
            return this.isCollapse
        }
    },

    actions:{
       setCollapseValue(val:Boolean){
            this.isCollapse=val;
       }
    }

})