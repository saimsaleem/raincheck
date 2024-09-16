import './App.css';
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import {Landing} from './Pages/Landing'
import { Homepage } from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Landing/>}/>
          <Route path="/home" element = {<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
