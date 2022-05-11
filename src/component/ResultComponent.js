import { useQuiz } from "../context/quiz-context";
import "../Pages/result.css";

function ResultComponent(props) {
  const { state, dispatch } = useQuiz();
  console.log(state);
  return (
    <>
      <ul className="correct-answer-list">
        <li className="answer-list-item">
          <div className="correct-question">
            <span className="question-print ">Question : {}</span>{" "}
            {props.value.question}
          </div>
          <div className="correct-answer">
            <span className="question-print ">Answer : {}</span>{" "}
            {props?.value?.correct_answer}
          </div>
        </li>
      </ul>
    </>
  );
}
export { ResultComponent };
