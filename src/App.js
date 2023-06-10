import './App.css';
import TopNav from "./components/TopNav/TopNav";
import CatNav from "./components/CatNav/index";
import MainComponent from './components/MainComponent';
function App() {
  return (
    <div className="App">
     <TopNav />
     <CatNav />
     <MainComponent />
    </div>
  );
}

export default App;
