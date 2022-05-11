import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {Routes,Route}  from "react-router-dom";
import CategoryPageDetails from './component/CategoryPageDetail';
import {Rules} from "../src/Pages/Rules"
import CategoryPage from "./Pages/CategoryPage"
import { Question } from './Pages/Question';
function App() {
  return (
    <div className="App">
      <div className="container-quiz">
        <h1>Quiz App</h1>
    </div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<CategoryPage/>}></Route>
        <Route path="/rules" element={<Rules/>} />
        <Route path="/question" element={<Question/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
