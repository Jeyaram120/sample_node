import './App.css';
import Greeting from './funct/greet';
import Counter from './funct/count';
import Timer from './funct/uE'


function App() {
  return (
    <div className="App">
      
        <a
          className="App-link"
          href=""
          rel="noopener noreferrer"
        >
          <Greeting name="Jeyaram R" />
          <Greeting name="Dhinish R" />
        </a>
        <Counter />
        <Timer />
    </div>
  );
}

export default App;
