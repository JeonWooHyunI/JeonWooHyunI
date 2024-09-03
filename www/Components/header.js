export class Header extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <header>
                <h2>JeonWooHyun<font color="red">I</font></h2>
                <nav class="nav-menu">
                    <a href="./index.php">Home</a>
                    <a href="./services.php">Services</a>
                    <a href="./blog.php">Contact</a>
                    <button class="login-btn" >Login</button>
                    <button class="register-btn">Register</button>
                    <!--<button class="mypage-btn">Login</button>-->
                    <!--<button class="logout-btn">Register</button>-->
                </nav>
            </header>
        `;
    }
}

//<HEADER></HEADER>
customElements.define('common-header', Header);
