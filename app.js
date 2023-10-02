import Store from "./services/store.js";
import API from "./services/api.js";
import Router from "./services/Router.js";
import {MenuPage} from "./components/MenuPage.js";
import {ProductItem} from "./components/ProductItem.js";

// window.addEventListener("DOMContentLoaded",()=>{
//     let nav=document.querySelector("nav");
//     console.log(nav);
//     nav.innerHTML=`
//         <h2>Hello dom</h2>
//         <p>This is html within js string</p>
//     `
// })

// const $=()=>document.querySelector.call(this,arguments)
// HTMLElement.prototype.on=(a,b,c)=>this.addEventListener(a,b,c)

//in js if type is not module you are going to have conflicts each variable will be global by default


window.app={};
app.store=Store;
app.router=Router;


window.addEventListener("DOMContentLoaded",async ()=>{
    app.store.menu=await API.fetchMenu();
    app.router.init()
})