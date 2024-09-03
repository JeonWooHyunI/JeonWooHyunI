export class Footer extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <footer>
            <nav>
                <a href="./index.php">Home</a>|
                <a href="./services.php">Services</a>|
                <a href="./blog.php">Contact</a>
            </nav>
            <p>Copyright &copy; 2024 <a href="">JeonWooHyun.</a> All rights reserved.</p>
        </footer>
        `;
    }
}

customElements.define('common-footer', Footer);
