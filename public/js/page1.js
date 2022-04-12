import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Yout title here")
    }

    async getHtml(){
        //Every <a> tag must contain data-link attribute as in the example below//
        return `
            <h1> Your html here </h1>
            <a href="/page2" data-link> Go to next Page </a>
        `
    }

    async renderData(){
        //All your business logic here//
    }

}