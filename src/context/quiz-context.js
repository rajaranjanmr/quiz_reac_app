import {useReducer,useContext,createContext} from "react";
const QuizContext = createContext();
function quizReducer(state,{type,payload}){
    switch(type){
        case "GET_CATEGORY_LIST":
            return {...state,categories:payload,};
        default:
            return state;
    }

}
function QuizcontextProvider({children}){
    const [state,dispatch] = useReducer(quizReducer,{
        categories:[],
    })
    return(
    
    <QuizContext.Provider value={{state,dispatch}}>
        {children}
    </QuizContext.Provider>
    )

}
const useQuiz = ()=>useContext(QuizContext);
export {QuizcontextProvider,useQuiz}