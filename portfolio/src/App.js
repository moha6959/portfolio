import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="app" className="App">
        <Header></Header>
        <Body></Body>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Footer></Footer>
    </div>
  );
}

export default App;