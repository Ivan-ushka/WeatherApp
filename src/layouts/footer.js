import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/footer.css"

function Footer(props) {
    return (
        <div className="footer">
            <div className="social">
                <a href="/"><i className="fab fa-instagram"/></a>
                <a href="/"><i className="fab fa-snapchat"/></a>
                <a href="/"><i className="fab fa-twitter"/></a>
                <a href="/"><i className="fab fa-facebook-f"/></a>
            </div>
            <ul className="list">
                <li><a href="/">Login</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Features</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Sign in</a></li>
            </ul>
            <p className="copyright">Created by Ivan Levchuk 2023</p>
        </div>
    );
}

export default Footer;