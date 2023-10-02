const Router={
    init:()=>{
        document.querySelectorAll("a.navlink").forEach((a)=>{
            a.addEventListener("click",e=>{
                e.preventDefault();
                const url=e.target.getAttribute("href");
                Router.go(url);
            })
        });
        window.addEventListener("popstate",event=>{
            Router.go(event.state.route,false);
        })

        Router.go(location.pathname)
    },
    go:(route,addToHistory=true)=>{
        if(addToHistory){
            history.pushState({route},null,route);
        }
        let pageElement=null;
        console.log(route);
        switch (route){
            case "/":
                pageElement=document.createElement("menu-page");
                break;
            case "/order":
                pageElement=document.createElement("order-page");
                break;
            default:
                if(route.startsWith("/product/")){
                    pageElement=document.createElement("details-page");
                    const paramId=route.substring(route.lastIndexOf("-")+1);
                    pageElement.dataset.id=paramId;
                }
        }
        if(pageElement) {
            const cache = document.querySelector("main")
            cache.innerHTML = "";
            cache.appendChild(pageElement);
            window.scrollX=0;
            window.scrollY=0;
        }
    }
}

export default Router;