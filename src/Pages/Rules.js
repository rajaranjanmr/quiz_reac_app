import "./home.css";
import { Link } from "react-router-dom";
function Rules() {
  return (
    <div className="rules">
      <div className="rule-head">Rules to be considered</div>
      <div className="rules-contents">
        <ul className="rules-items">
          <li>Each question is MCQ based</li>
          <li>
            Each question contains four options but only one is correct answer
          </li>
          <li>For every correct question you will be awarded with 10 marks</li>
          <li>
            For every incorrect questions you will be awarded with -3 marks
          </li>
          <li>There is negative marking</li>
          <li>for every wrong answer you will have penalty of 3 marks</li>
          <li>There will be total 5 questions</li>
          <li>once submitted answer it can't be re-attempt</li>
          <li>Final result you will get at the end of the quiz</li>
          <li>There will be total 5 questions</li>
          <li>once submitted answer it can't be re-attempt</li>
          <li>Final result you will get at the end of the quiz</li>
        </ul>
      </div>
      <div className="controller">
        <div className="back-rule">
          <Link to="/category">Back</Link>
        </div>
        <div className="front-rule">
          <Link to="/question">Continue</Link>
        </div>
      </div>
    </div>
  );
}
export { Rules };
