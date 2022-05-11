import { ResultComponent } from "../component/ResultComponent";
import { useQuiz } from "../context/quiz-context";
import { useNavigate } from "react-router-dom";
import "../Pages/result.css";
function Results() {
  const { state, dispatch } = useQuiz();
  const navigate = useNavigate();
  let count = 0;
  let correctMarks = 10;
  let incorrectMarks = 3;
  let totalMarks = 0;
  let maximumMarks = state.questions?.length * correctMarks;
  function checkScore() {
    for (let i = 0; i < state.answer.length; i++) {
      if (state?.answer[i] === state?.questions[i].correct_answer) count++;
      totalMarks =
        correctMarks * count -
        (state.questions.length - count) * incorrectMarks;
    }
  }
  checkScore();
  function clickHandler() {
    dispatch({ type: "CLEAR", payload: "" });

    navigate("/");
  }
  return (
    <div className="result-main-header">
      <div className="result-heading">Result</div>
      <div className="result-header">
        <div className="score">
          Score : {}
          {totalMarks}
        </div>
        <div className="total-score">
          Total Marks : {}
          {maximumMarks}
        </div>
        <div className="number-question">
          Total No. Of Question : {}
          {state.questions.length}
        </div>
        <div className="each-question-correct-marks">
          Each Question Carry : {}
          {correctMarks}
        </div>
        <div className="each-question-incorrect-marks">
          Each Question Carry Negative Marks : {}
          {incorrectMarks}
        </div>
        <div className="correctly-answered">
          Correctly Answered : {}
          {count}
        </div>
        <div className="incorrectly-answered">
          Incorrectly Answered : {}
          {state.questions.length - count}
        </div>
      </div>
      <div className="result-question-list">
        {state.questions.map((x) => (
          <ResultComponent value={x} />
        ))}
      </div>

      <button className="button-category" onClick={() => clickHandler()}>
        Play Again
      </button>
    </div>
  );
}
export { Results };
