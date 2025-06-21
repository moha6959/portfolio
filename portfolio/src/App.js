import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import About from './components/About';

const App = () => {
  return (
    <div id="app" className="App">
        <Header></Header>
        <Body></Body>
        <About></About>
    </div>
  );
}

export default App;