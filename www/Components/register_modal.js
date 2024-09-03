export class Register extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div id="modal" style="display: none;">
            
            </div>
        `;
    }
}

//<HEADER></HEADER>
customElements.define('register-modal', Register);
