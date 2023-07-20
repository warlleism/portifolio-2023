import "./App.css";
import About from "./views/about";
import Home from "./views/home";
import Skills from "./views/skills";

function App() {
  return (
    <div style={{ background: "#040405" }}>
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
