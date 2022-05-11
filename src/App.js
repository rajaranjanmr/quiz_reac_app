import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import CategoryPageDetails from "./component/CategoryPageDetail";
import { Rules } from "../src/Pages/Rules";
import CategoryPage from "./Pages/CategoryPage";
import { Question } from "./Pages/Question";
import { Results } from "./Pages/Results";
import { Footer } from "./component/Footer";
import { Navigation } from "./component/Navigation";
function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryPage />}></Route>
        <Route path="/rules" element={<Rules />} />
        <Route path="/question" element={<Question />}></Route>
        <Route path="/results" element={<Results />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
