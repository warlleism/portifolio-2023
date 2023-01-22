import React from "react";
import './style.scss'
import MyPdf from "../image/icons/curriculo-dev-2023.pdf"

const Footer = () => {

    return (
        <div className="main-footer">
            <a href="https://github.com/warlleism" target="_blank">
                <img src={require('../image/icons/github-icon.png')} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/warllei-martins-823510153/" target="_blank">
                <img src={require('../image/icons/linkedin-icon.png')} alt="" />
            </a>
            <a href="https://www.instagram.com/warlleimartinsdev/" target="_blank">
                <img src={require('../image/icons/instagram-icon.png')} alt="" />
            </a>
            <a href="mailto:warlleimartinsdev@outlook.com" target="_blank" >
                <img src={require('../image/icons/email-icon.png')} alt="" style={{ borderRadius: "20%" }} />
            </a>
            <a href={MyPdf} download="Currículo-dev" >
                <img src={require('../image/icons/curriculo-icon.png')} alt="" style={{ borderRadius: "20%" }} />
            </a>
        </div>
    )
}

export default Footer;