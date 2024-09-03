export class Login extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div id="modal" style="display: none;">
            
            </div>
        `;
    }
}

//<HEADER></HEADER>
customElements.define('login-modal', Login);
