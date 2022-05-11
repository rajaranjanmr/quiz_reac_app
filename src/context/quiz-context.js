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
        case "SET_INDEX":
            return {...state,index:payload}
        case "SET_SUBMIT":
            return {...state,answer:[...state.answer, payload]}
        case "CLEAR":
            return {categories:[],category:"",subcategory:"",questions:[],index:0,answer:[],
        }
        default:
            return state;
    }

}
function QuizcontextProvider({children}){
    const [state,dispatch] = useReducer(quizReducer,{
        categories:[],category:"",subcategory:"",questions:[],index:0,answer:[],
    })
    return(
    
    <QuizContext.Provider value={{state,dispatch}}>
        {children}
    </QuizContext.Provider>
    )

}
const useQuiz = ()=>useContext(QuizContext);
export {QuizcontextProvider,useQuiz}