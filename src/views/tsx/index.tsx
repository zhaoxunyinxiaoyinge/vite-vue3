import {ref} from "vue";
let flag=ref<boolean>(false)
const renderDom=()=>{
    return <div>
            <span v-show={flag.value}>中国人民解方军</span>
          </div>
}

export default renderDom;
