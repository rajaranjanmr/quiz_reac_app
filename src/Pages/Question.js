import { QuestionComponent } from "../component/QuestionComponent";
import { useQuiz } from "../context/quiz-context";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./home.css";
function Question() {
  const { state, dispatch } = useQuiz();
  useEffect(() => {
    async function getQuestions() {
      const urlSet =
        "https://opentdb.com/api.php?amount=5&category=" +
        state.subcategory +
        "&type=multiple";
      try {
        const response = await axios({
          method: "GET",
          url: urlSet,
        });
        console.log("its response", response);
        dispatch({ type: "SET_QUESTIONS", payload: response.data.results });
      } catch (err) {
        console.log(err);
      }
    }
    getQuestions();
  }, []);
  return (
    <div className="question-container">
      {state.questions.map((x, index) => {
        return index === state.index && state.index < 5 ? (
          <QuestionComponent value={x} index={index} />
        ) : (
          ""
        );
      })}
    </div>
  );
}
export { Question };
