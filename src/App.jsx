import "./App.css";
import About from "./views/about";
import Footer from "./views/footer";
import Home from "./views/home";
import Projects from "./views/projetcs";
import Skills from "./views/skills";
import Contacts from "./views/contact";
import { useEffect } from "react";
import axios from "axios";
import ArrowUp from "./component/arrowUp";
import { useInView } from 'react-intersection-observer';
import Spinner from "./views/contact/component/spinner";
import { BarLoader } from "react-spinners";

function SectionWrapper({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`fade-in ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

function App() {

  const enviarEmail = async () => {
    const dados = {
      remetente: 'warllei.s.martins@hotmail.com',
      assunto: 'Portifólio',
      descricao: 'PARABÉNS! alguém entrou no seu portifólio.'
    };

    try {
      const response = await axios.post('https://send-email-python.vercel.app/enviar-email', dados);
      localStorage.setItem('emailEnviado', 'true');
    } catch (error) {
      console.error('Erro ao enviar a requisição:', error);
    }
  };

  useEffect(() => {
    const emailEnviado = localStorage.getItem('emailEnviado');
    if (!emailEnviado) {
      enviarEmail();
    }

    const background = document.getElementsByClassName('background-fade')[0];
    setTimeout(() => {
      background.classList.add('remove-background-fade');
    }, 2000);

  }, []);

  return (
    <div style={{ background: "#040405", position: 'relative' }}>
      <div className="background-fade">
        <BarLoader
          color={'#4D0188'}
          loading={true}
          size={230}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <Home />
      <SectionWrapper><About /></SectionWrapper>
      <SectionWrapper><Skills /></SectionWrapper>
      <SectionWrapper><Projects /></SectionWrapper>
      <SectionWrapper><Contacts /></SectionWrapper>
      <Footer />
      <ArrowUp />
    </div>
  );
}

export default App;
