export class Footer extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <footer>
            <nav>
                <a href="./index.html">Home</a>|
                <a href="./services.html">Services</a>|
                <a href="./contact.html">Contact</a>
            </nav>
            <p>Copyright &copy; 2024 <a href="">JeonWooHyun.</a> All rights reserved.</p>
        </footer>
        `;
    }
}

customElements.define('common-footer', Footer);
