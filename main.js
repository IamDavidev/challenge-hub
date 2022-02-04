// create user whit class
class  extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
}

static get styles(){
    return /*css*/`
        :host{

    }
    `;
}

connectedCallback(){
     this.render();
}

render(){
    this.shadowRoot.innerHTML =/*html*/`
        <style>${.styles}</style>
 <div class=''>
     <div class=''></div>
        <slot></slot>
</div>
    `;
}
}
customElements.define('',);