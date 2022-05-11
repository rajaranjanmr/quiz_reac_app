import {Link,useNavigate,useState} from "react-router-dom";
import { useQuiz } from "../context/quiz-context";

import "../Pages/home.css"
function CategoryPageDetails(props){
    const {state,dispatch} = useQuiz();
    const navigate = useNavigate()
        function clickHandler(){
        dispatch({type:"SET_SUB_CATEGORY",payload:props.value.id+""})
        navigate("/rules")
    }
    return(
        <>
        <div className="category">
                <div className="category-content ">{props.value.name}</div>
                <button className="button-category" onClick={()=>clickHandler()}>play now</button>
            </div>

        </>
    )
}
export default CategoryPageDetails