import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {Routes,Route}  from "react-router-dom";
import CategoryPageDetails from './component/CategoryPageDetail';
import {Rules} from "../src/Pages/Rules"
function App() {
  return (
    <div className="App">
      <div className="container-quiz">
        <h1>Quiz App</h1>
    </div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<CategoryPageDetails/>}></Route>
        <Route path="/rules" element={<Rules/>} />
      </Routes>
      
    </div>
  );
}

export default App;
