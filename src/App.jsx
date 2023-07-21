import "./App.css";
import About from "./views/about";
import Footer from "./views/footer";
import Home from "./views/home";
import Projects from "./views/projetcs";
import Skills from "./views/skills";

function App() {
  return (
    <div style={{ background: "#040405" }}>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
