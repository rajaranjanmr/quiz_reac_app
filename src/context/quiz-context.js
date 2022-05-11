import {useReducer,useContext,createContext} from "react";
const QuizContext = createContext();
function quizReducer(state,{type,payload}){
    switch(type){
        case "GET_CATEGORY_LIST":
            return {...state,categories:payload,};
        case "SET_CATEGORY":
            console.log("debug",payload)
            return {...state,category:payload,};
        case "SET_SUB_CATEGORY":
            return {...state,subcategory:payload}
        case "SET_QUESTIONS":
            return {...state,questions:payload}
        default:
            return state;
    }

}
function QuizcontextProvider({children}){
    const [state,dispatch] = useReducer(quizReducer,{
        categories:[],category:"",subcategory:"",questions:[],
    })
    return(
    
    <QuizContext.Provider value={{state,dispatch}}>
        {children}
    </QuizContext.Provider>
    )

}
const useQuiz = ()=>useContext(QuizContext);
export {QuizcontextProvider,useQuiz}