import {Link,useNavigate} from "react-router-dom";
import { useQuiz } from "../context/quiz-context";
import {useEffect,useState} from "react";
import {axios} from "axios"
import "../Pages/home.css";
function Category(props){
    const {state,dispatch} = useQuiz();
    const navigate = useNavigate()
    
const [cat,setCat] = useState(false)
    function clickHandler(){
        console.log("inside function")
        dispatch({type:"SET_CATEGORY",payload:props.value.name})
        // setCat(true)
        navigate("/category")
        console.log("its category now",state)

    }
    console.log("its category nows",state)

    const categoryData=[{name:"Science"},{name:"Entertainment"}]
    

    return(<>
    <div className="category" >
                <div className="category-content">{props.value.name}</div>
                <button className="button-category" onClick={()=>clickHandler()}>Let's Begin</button>
                {console.log(state)}
            </div>
    </>)
}
export default Category