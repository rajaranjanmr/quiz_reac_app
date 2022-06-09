import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/quiz-context";
import "../Pages/home.css";
function Category(props) {
  const { state, dispatch } = useQuiz();
  const navigate = useNavigate();
  function clickHandler() {
    dispatch({ type: "SET_CATEGORY", payload: props.value.name });
    navigate("/category");
  }

  return (
    <>
      <div className="category">
        <div className="category-content">{props.value.name}</div>
        <button className="button-category" onClick={() => clickHandler()}>
          Let's Begin
        </button>
      </div>
    </>
  );
}
export default Category;
