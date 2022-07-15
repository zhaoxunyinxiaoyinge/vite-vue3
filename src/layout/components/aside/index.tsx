import { defineComponent, ref, reactive, DefineComponent } from "vue";
import Sitem from "./sItem";
import {userstore} from "@/store/expmle"
import path from "path"; 
import Cookies from "js-cookie";
console.log(path)

export default defineComponent({
  setup() {
    interface List {
      path:string,
      children: Array<List>;
      meta: {
        title: string;
        hidden: Boolean;
      };
      component: DefineComponent;
      redirect: string;
    }

    let store=userstore();

    let currentRoute=ref(Cookies.get('current')||'/welcome');

    let routes = reactive([
      {
        path: "/",
        meta: {
          title: "首页",
          hidden: false,
        },
        component: defineAsyncComponent(() => import("@/layout/index.vue")),
        redirect: "/welcome",
        children: [
          {
            path: "/welcome",
            redirect: "",
            meta: {
              title: "主页",
              icon: "",
              hidden: false,
            },
            component: defineAsyncComponent(
              () => import("@/views/welcome/index.vue")
            ),
          },
          {
            path: "/other",
            redirect: "",
            meta: {
              title: "其他",
              icon: "",
              hidden: false,
            },
            component: defineAsyncComponent(
              () => import("@/views/welcome/index.vue")
            ),
          }, 
        ],
      },

      {
        path:"/stylems",
        meta:{
          title:'系统设置',
          hidden:false
        },
        component: defineAsyncComponent(() => import("@/layout/index.vue")),
        redirect: "/stylems/index",
        children:[
          {
            path:'index',
            meta:{
              title:"系统设置",
              hidden:false
            }
          }
        ]
      }
 
    ]);

    const getMenu = (list: Array<List>) => {
      return list.map((item) => {
        return <Sitem  basePath={item.path} item={item} ></Sitem>;
      });
    };

    const handleOpen = () => {};

    const handleClose = () => {};

    const rendDom = () => {
      return (
        <el-menu
          default-active={currentRoute}
          collapse={store.getCollapseValue}
          style={{width:store.getCollapseValue?'auto':'200px'}}
          open={handleOpen}
          close={handleClose}
          collapse-transition={true}
          router={true}
        >
          {getMenu(routes as any)}
        </el-menu>
      );
    };

    return rendDom;
  },
});
