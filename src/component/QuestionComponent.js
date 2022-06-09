import { useQuiz } from "../context/quiz-context";
import "../Pages/home.css";
import { useNavigate } from "react-router-dom";
function QuestionComponent(props) {
  const { state, dispatch } = useQuiz();
  function handleOnChange(event) {
    dispatch({ type: "SET_SUBMIT", payload: event.target.innerText });
  }
  const { index } = props;
  const navigate = useNavigate();
  function onClickHandler(index) {
    if (index === 4) {
      return navigate("/results");
    }
    dispatch({ type: "SET_INDEX", payload: state.index + 1 });
  }

  return (
    <div className="quiz-container" id="quiz">
      <div className="quiz-header">
        <h2 id="question">{props.value.question}</h2>
        <ul className="quiz-options">
          <li>
            <input type="radio" name="answer" id="a" className="answer" />
            <label htmlFor="a" id="a_text" onClick={handleOnChange}>
              {props.value.correct_answer}
            </label>
          </li>

          <li>
            <input type="radio" name="answer" id="b" className="answer" />
            <label htmlFor="b" id="b_text" onClick={handleOnChange}>
              {props.value.incorrect_answers[0]}
            </label>
          </li>

          <li>
            <input type="radio" name="answer" id="c" className="answer" />
            <label htmlFor="c" id="c_text" onClick={handleOnChange}>
              {props.value.incorrect_answers[1]}
            </label>
          </li>

          <li>
            <input type="radio" name="answer" id="d" className="answer" />
            <label htmlFor="d" id="d_text" onClick={handleOnChange}>
              {props.value.incorrect_answers[2]}
            </label>
          </li>
        </ul>
      </div>

      <button
        onClick={() => {
          onClickHandler(index);
        }}
      >
        Submit
      </button>
    </div>
  );
}
export { QuestionComponent };
