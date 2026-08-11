import logo from './logo.svg';
import Header from './all/Header/Header';
import Main from './all/main/Main';
import Nav from "./all/nav/Nav"
import Skills from './all/skills/Skills';
import Footer from './all/footer/Footer';
import './App.css';
import "./i18n"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Nav/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
