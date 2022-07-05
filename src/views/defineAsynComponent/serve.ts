
type list={
    name:string,
    age:number
}

const axios=()=>new Promise((resolve)=>{
     setTimeout(() => {
        resolve([{name:'xiaomei',age:20}])   
     }, 2000);
})


export default axios