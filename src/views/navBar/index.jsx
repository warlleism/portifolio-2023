import { useEffect } from "react";
import "../../styles/textStyle.css";
import { useState } from "react";
import "./style.scss"
import { SlMenu } from "react-icons/sl";

const Header = () => {

  const [scrollParaBaixo, setScrollParaBaixo] = useState(false);

  useEffect(() => {

    function handleScroll() {
      const scrollAtual = window.pageYOffset;
      const scrollAnterior = scrollRef.current || 0;

      if (scrollAtual > scrollAnterior) {
        setScrollParaBaixo(true);
      } else {
        setScrollParaBaixo(false);
      }
      scrollRef.current = scrollAtual;
    }

    const scrollRef = { current: window.pageYOffset };

    window.addEventListener("scroll", () => {
      handleScroll();
      const header = document.getElementById("header");
      const width = window.scrollY;
      const black =
        width >= 500
          ? (header.style.background = "#00000085")
          : (header.style.background = "transparent");
      return [handleScroll, black];
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const menu = document.getElementById("menu")
    menu.style.display = "flex"
  }

  return (
    <div style={{ margin: '0 auto', display: "flex", justifyContent: "center" }}>
      <div
        id="header"
        className="mainContainerHeader"
        style={{
          transform: scrollParaBaixo ? "translateY(-400%)" : "translateY(0%)",
        }}
      >
        <div className="header-container-name-list" >
          <div className="containerName text">
            <div> Warllei Martins</div>
            <SlMenu
              size={30}
              onClick={handleClick}
              className="menuIcon" id="menuIcon" />
          </div>
          <ul>
            <li >
              <a href="#home" className="text">
                Início
              </a>
            </li>
            <li>
              <a href="#about" id="aboutLink" className="text">
                Sobre
              </a>
            </li>
            <li>
              <a href="#skills" className="text">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contacts" className="text">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
