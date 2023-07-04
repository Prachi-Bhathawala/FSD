
import './App.css';
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
  <Route exact path="/" element={ <Home/>}/>
  <Route exact path="/About" element={ <About/>}/>
  <Route exact path="/contact" element={ <Contact/>}/>
  </Routes>
   </BrowserRouter>
       
        {/* Hello World  */}
       
        
       
      
    </div>
  );
}

export default App;
