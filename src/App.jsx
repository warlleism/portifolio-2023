import "./App.css";
import About from "./views/about";
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
    </div>
  );
}

export default App;
