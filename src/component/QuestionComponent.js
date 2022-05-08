import { useQuiz } from "../context/quiz-context"
import "../Pages/home.css"
function QuestionComponent(){
    const {state,dispatch} = useQuiz();
    return(
        <div className="quiz-container" id="quiz">
        <div className="quiz-header">
          <h2 id="question">Question Text</h2>
          <ul className="quiz-options">
            <li>
              <input type="radio" name="answer" id="a" className="answer" />
              <label htmlFor="a" id="a_text">Answer</label>
            </li>
    
            <li>
              <input type="radio" name="answer" id="b" className="answer" />
              <label htmlFor="b" id="b_text">Answer</label>
            </li>
    
            <li>
              <input type="radio" name="answer" id="c" className="answer" />
              <label htmlFor="c" id="c_text">Answer</label>
            </li>
    
            <li>
              <input type="radio" name="answer" id="d" className="answer"/>
              <label htmlFor="d" id="d_text">Answer</label>
            </li>
    
          </ul>
        </div>
    
        <button id="submit">Submit</button>
    {console.log(state)}
    
      </div>
    )
}
export {QuestionComponent}