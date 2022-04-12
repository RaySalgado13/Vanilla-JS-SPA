import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Yout title here 2")
    }

    async getHtml(){
        //Every <a> tag must contain data-link attribute//
        return `
            <h1> Your html here 2 </h1>
            <a href="/" data-link> Go to previous page </a>
        `
    }

    async renderData(){
        //All your business logic here//
    }

}