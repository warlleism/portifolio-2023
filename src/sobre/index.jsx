import React from "react";
import './style.scss'
import MyPdf from "../image/icons/curriculo-dev-2023.pdf"


const Sobre = () => {

    const scrollScreen = () => {
        window.scrollTo(0, 920);
    }

    return (
        <div className="main-sobre">

            <div className="container-info-sobre">

                <div className="container-name">
                    <div className="desenho-foto">
                        <img src={require('../image/icons/desenho.jpg')} alt="" />
                    </div>
                    <div className="name">
                        <div>
                            MEU NOME
                        </div>
                        <div>
                            WARLLEI S. MARTINS
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="sobre-mim">
                        <div>SOBRE MIM</div>
                        <div>Olá! meu nome é Warllei Martins, tenho 26 anos e sou do Espirito Santo. Curso Análise e Desenvolvimento de Sistemas pela "Universidade Vila Velha". Sou um desenvolvedor apaixonado pela programação e com grandes ambições dentro do mercado de ti. com profundo interesse em conhecer, aprender e me desenvolver, venho me dedicado ao mundo da tecnologia desde janeiro de 2021.</div>
                    </div>
                </div>


                <div className="container-contact-skill">


                    <div className="container-contact">
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

                    <div className="container-skills">
                        <div className="content-skill">
                            <img src={require('../image/icons/html.png')} alt="" />
                            <div>HTML</div>
                        </div>
                        <div className="content-skill">
                            <img src={require('../image/icons/css.png')} alt="" />
                            <div>CSS</div>
                        </div>
                        <div className="content-skill">
                            <img src={require('../image/icons/js.png')} alt="" />
                            <div>JavaScript</div>
                        </div>
                        <div className="content-skill">
                            <img src={require('../image/icons/node-js.png')} alt="" />
                            <div>Node</div>
                        </div>
                        <div className="content-skill">
                            <img src={require('../image/icons/sass.png')} alt="" />
                            <div>Sass</div>
                        </div>
                        <div className="content-skill">
                            <img src={require('../image/icons/science.png')} alt="" />
                            <div>React</div>
                        </div>
                        <div className="content-skill">
                            <img src={require('../image/icons/github.png')} alt="" />
                            <div>Github</div>
                        </div>
                        <div className="content-skill">
                            <img src={require('../image/icons/figma.png')} alt="" />
                            <div>Figma</div>
                        </div>
                        <div className="content-skill">
                            <img src={require('../image/icons/mysql-icon.png')} alt="" />
                            <div>MySql</div>
                        </div>
                    </div>

                </div>
            </div>

            <span class="material-symbols-outlined" style={{ color: "#F2BD0C" }} onClick={() => scrollScreen()}>
                arrow_downward
            </span>
        </div>
    )
}

export default Sobre;