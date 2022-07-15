import { router } from "@/router/router";
import Cookies from "js-cookie";
import NProgress from "nprogress"
import "nprogress/nprogress.css";
import {userstore} from "@/store/expmle";


const whileName:Array<string>=['/login','/404'];
const store=userstore();
router.beforeEach((to: any,from: any,next: any)=>{
    NProgress.start();
    let token=Cookies.get("token")||store.token;
    if(token){
        if(to.path=='/login'){
            next()
        }else{
            // 这里需要根据token 获取用户请求
        }
    }else{
        let isWhite=whileName.includes(to.path);
        if(isWhite){
            next();
        }else{
            next({
                path:'/login',
                query:{
                    redirect:to.path
                }
            })    
        }
    }
})


router.afterEach((to,form,next)=>{
    NProgress.end();
})