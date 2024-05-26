import { useEffect } from "react";
import "../../styles/textStyle.css";
import { useState } from "react";
import "./style.scss"

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

  return (
    <div
      id="header"
      className="mainContainerHeader"
      style={{
        transform: scrollParaBaixo ? "translateY(-400%)" : "translateY(0%)",
      }}
    >
      <div className="containerName text">
        Warllei Martins
      </div>
      <ul>
        <li >
          <a href="#home" className="text">
            Início
          </a>
        </li>
        <li>
          <a href="#about" className="text">
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
  );
};

export default Header;
