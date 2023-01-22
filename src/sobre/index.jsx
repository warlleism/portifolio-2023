import React from "react";
import './style.scss'

const Sobre = () => {

    const scrollScreen = () => {
        window.scrollTo( 0, 920 );
    }

    return (
        <div className="main-sobre">
            <div>SOBRE MIM</div>
            <div>Olá! meu nome é Warllei Martins, tenho 26 anos e sou do Espirito Santo. Curso Análise e Desenvolvimento de Sistemas pela "Universidade Vila Velha". Sou um desenvolvedor apaixonado pela programação e com grandes ambições dentro do mercado de ti. com profundo interesse em conhecer, aprender e me desenvolver, venho me dedicado ao mundo da técnologia desde janeiro de 2021.</div>
            <span class="material-symbols-outlined" onClick={() => scrollScreen()}>
                arrow_downward
            </span>
        </div>
    )
}

export default Sobre;