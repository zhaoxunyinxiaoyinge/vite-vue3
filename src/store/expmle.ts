import { extend } from "lodash";
import { defineStore } from "pinia";
import {ref} from "vue"
import names from "./store.name";

export interface  RouteList{ 
        title:string,
        path:string
}

export const  userstore=defineStore(names.USER,{
    state(){
        return {
            isCollapse:<Boolean>(false),
            routeList:<Array<RouteList>>[],
            token:<string>(''),
            lang:<string>('en')
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
       },

        setRouteList(val:RouteList):void{
            let index=this.routeList.findIndex(item=>item.path==val.path);
            if(index==-1){
                if(this.routeList.length>10){
                    this.routeList.shift();
                }
                 this.routeList.push(val);
            }
       },

       deleteRouteItem(val:RouteList){
        let index=this.routeList.findIndex(item=>item.path!=val.path);
        if(index!==-1){
            this.routeList.splice(index,1);
        }
       },

       setCurrentLang(){
         this.lang=this.lang=="zh-cn"?'en':'zh-cn';
       }
    }

})