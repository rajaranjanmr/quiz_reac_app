import navimage from "../assets/logo.png";
import { useEffect } from "react";
import "../Pages/clhome.css";
import "../component/navigation.css";
import { NavLink } from "react-router-dom";
import { useQuiz } from "../context/quiz-context";
function Navigation() {
  const { state, dispatch } = useQuiz();
  function clickHandler() {
    dispatch({ type: "CLEAR", payload: "" });
  }
  return (
    <div className="top-section">
      <div className="container-logo">
        <div className="logo">
          <img src={navimage} alt="logo" />{" "}
        </div>
      </div>

      <div className="navbar-items">
        <ul className="navbar-item">
          <li>
            <input type="text" placeholder="Search.." />
          </li>
          <li>
            <NavLink to="/" onClick={() => clickHandler()}>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
export { Navigation };
