import { menuItemProps } from "element-plus";
import {
  defineComponent,
  ref,
  render,
  reactive,
  DefineComponent,
  PropType,
} from "vue";
import {userstore} from "@/store/expmle"

import path from "path";
import { RouteRecordRaw, useRouter } from "vue-router";
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

const SitemBar = defineComponent({
  name: "sitem",
  props: {
    item: {
      type: Object as PropType<List>,
      required: true,
    },
    basePath:{
      type:String,
      default:''
    }
  },
  setup(props, { slots }) {

    let onlyOneChild=reactive<any>([])

    const handleOpen = () => {};

    const handleClose = () => {};

    let store=userstore();

    const  hasOnyChild=(children:Array<List> = [], parent:any)=>{
      children = children ? children : [];
      let onlyChild = children.filter((item) => {
        if (item.meta.hidden) {
          return false;
        } else {
          onlyOneChild = item;
          return true;
        }
      });

      if (onlyChild.length == 1) {
        return true;
      }

      if (onlyChild.length == 0) {
        onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    };

   let  resovlePath=(val:string)=>{
      return path.resolve(props.basePath,val)
    }

    let  slot={
      title: () => {
        return <div>
            <el-icon><dataAnalysis/></el-icon>
            <span style={{   marginLeft:store.isCollapse?'0px':'auto',width:store.isCollapse?'0px':'auto', display:store.isCollapse?'none':'inline-block',}}>{props.item.meta.title}</span>
          </div>
      }
    }

    const getSubMenu=()=>{
      if(hasOnyChild(props.item.children,props.item)&& (!onlyOneChild.children || onlyOneChild.noShowingChildren)){
        return <el-menu-item index={resovlePath(onlyOneChild.path)}>
                <el-icon>
                  <setting />
                </el-icon>
                <span>{props.item.meta.title}</span>
              </el-menu-item>
        }else{
        return <el-sub-menu v-slots={slot} index={resovlePath(props.item.path)}>
              {
                props.item.children&& props.item.children.map(sitem=>{
                return <SitemBar basePath={resovlePath(sitem.path)} item={sitem}></SitemBar> 
                })
            }
           </el-sub-menu>
        }

    }

    const rendDom = () => {
      return (
        <>
          {
            getSubMenu()
          }
        </>
      );
    };

    return rendDom;
  },
});

export default SitemBar;
