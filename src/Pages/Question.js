import { QuestionComponent } from "../component/QuestionComponent"
import { useQuiz } from "../context/quiz-context"
import {useEffect} from "react"
import axios from "axios"
import "./home.css"
function Question(){
    const {state,dispatch} = useQuiz();
useEffect(()=>{
    async function getQuestions(){
        const urlSet = "https://opentdb.com/api.php?amount=10&category="+state.subcategory
        console.log("its urel",urlSet)
        try{
            const response = await axios({
                method:"GET",
                url: urlSet
            });
            console.log("its response",response)
                  dispatch({type: "SET_QUESTIONS",
                  payload: response.data.results,})
        }
        catch(err){
            console.log(err)
        }
    }
    getQuestions()
},[])
    return(
        <div className="question-container">
            {console.log(state)}
        <QuestionComponent/>
    
      </div>
    )
}
export {Question}