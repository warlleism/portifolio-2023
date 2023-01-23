import Main from './main/index';
import './global/style.css'
import Header from './header';
import Sobre from './sobre';
import Navbar from './navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Sobre />
      <Main />
    </div>
  );
}

export default App;
