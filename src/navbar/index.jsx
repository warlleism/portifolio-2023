import React from "react";
import { useState } from "react";
import './style.scss'

const Navbar = () => {

    const [count, setCount] = useState(0)

    const showHiddenContent = () => {

        const content = document.querySelector('.main-navbar');
        const contentIcons = document.querySelector('.icons-nav');

        if (count <= 0) {
            setCount(count + 1)
            content.style.height = '100vh';
            content.style.borderRadius = '0'
            contentIcons.style.display = 'flex';
            setTimeout(() => {
                contentIcons.style.opacity = '1'
            }, 800)
        } else {
            content.style.height = '70px';
            content.style.borderBottomLeftRadius = '60%'
            contentIcons.style.opacity = '0'
            setTimeout(() => {
                contentIcons.style.display = 'none';
            }, 1000)
            setCount(count - 1)
        }
    }

    return (
        <div className="main-navbar">
            <div className="line-bars" onClick={() => showHiddenContent()}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="icons-nav">
                <a href="https://github.com/warlleism" target="_blank">
                    <img src={require('../image/icons/github-icon.png')} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/warllei-martins-823510153/" target="_blank">
                    <img src={require('../image/icons/linkedin-icon.png')} alt="" />
                </a>
                <a href="https://www.instagram.com/warlleimartinsdev/" target="_blank">
                    <img src={require('../image/icons/instagram-icon.png')} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Navbar;