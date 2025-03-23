import { LightningElement } from 'lwc';

export default class ParentHookLwc extends LightningElement {
    displayChild = false;

    constructor(){
        super();
        console.log('Constructor from Parent');
    }
    connectedCallback(){
        console.log('connectedCallback from Parent');
    }

    renderedCallback(){
        console.log('renderedCallback from Parent');
    }

    disconnectedCallback(){
        console.log('disconnectedCallback from Parent');
    }
    errorCallback(error,stack){
        console.log('errorCallback from Parent');
    }

    changeHandler(event){
        this.displayChild = event.target.checked;
    }
}