import "./style.scss"
import { SlClose } from "react-icons/sl";

const Menu = () => {

    const handleClick = () => {
        const menu = document.getElementById("menu")
        menu.style.display = "none"
    }
    return (
        <div className="menu" id="menu">
            <SlClose
                onClick={handleClick}
                style={{ position: "absolute", top: "10px", right: "10px", cursor: "pointer" }} />
            <div className="menu-item" onClick={handleClick}>
                <a href="#home">Home</a>
            </div>
            <div className="menu-item" onClick={handleClick}>
                <a href="#about">Sobre mim</a>
            </div>
            <div className="menu-item" onClick={handleClick}>
                <a href="#skills">Skills</a>
            </div>
            <div className="menu-item" onClick={handleClick}>
                <a href="#projects">Projetos</a>
            </div>
            <div className="menu-item" onClick={handleClick}>
                <a href="#contact">Contato</a>
            </div>
        </div>
    )
}

export default Menu