/*
FOR ALL YOUR PAGES:
import Component from './your_js_component.js'
*/

//Template example:
import Page1 from "./page1.js"
import Page2 from "./page2.js"

const navigateTo = url => {
    history.pushState(null,null,url)
    router()
}

//Your routes here
const router = async () => {
    const routes = [
        /* Template example:
        {
            path: "/your_path",
            view: Component
        },
        */

        {
            path: "/",
            view: Page1
        },
        {
            path: "/page2",
            view: Page2
        },
    ]
    
    //-----------SPA Computing. Do not change-----------//

    //Test each router for potential match
    const potentialMatches = routes.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view()

    document.querySelector("#app").innerHTML = await view.getHtml()
    document.body.onload = await view.renderData()
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", evt => {
        if(evt.target.matches("[data-link]")){
            evt.preventDefault();
            navigateTo(evt.target.href)
        }
    })
    router()
})
 //-----------SPA Computing. Do not change-----------//