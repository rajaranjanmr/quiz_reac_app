import Category from "../component/Category";
import "./home.css";
import {useEffect} from "react"
import { useQuiz } from "../context/quiz-context";
import axios from "axios";
function Home(){
    const {state,dispatch} = useQuiz();
    const categoryData=[{name:"Science"},{name:"Entertainment"}]
    
    const filteredData = state.categories.filter(x=>x.name.includes("Science"))
    console.log("filtered data",filteredData)

    return(
        <>
        
        <div className="categories">
            
           { categoryData.map(x=>  <Category key={x.name} value={x}/>)}
            
        </div>
        </>
    )
}
export default Home;