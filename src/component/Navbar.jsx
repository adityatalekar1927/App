import "./../styles/Navbar.css";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="fail">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>

            <div className="coin">
                <div className="contac">
                    <i class="fa-solid fa-phone"></i>
                    <p> +91 9105868788</p>
                </div>
                <div className="message">
                    <i class="fa-solid fa-envelope"></i>
                    <p>info@baapcompany.com</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
