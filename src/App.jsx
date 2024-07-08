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
  }, []);

  return (
    <div style={{ background: "#040405" }}>
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
