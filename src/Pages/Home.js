import Category from "../component/Category";
import "./home.css";
import {useEffect} from "react"
import { useQuiz } from "../context/quiz-context";
import axios from "axios";
function Home(){
    const {state,dispatch} = useQuiz();
    useEffect(()=>{
        async function getCategories(){
            try{
                const response = await axios({
                    method: "GET",
                    url: "https://opentdb.com/api_category.php",
                  });
                  dispatch({type: "GET_CATEGORY_LIST",
                  payload: response.data.trivia_categories,})
            }
            catch(err){
                console.log(err)
            }

        }
        getCategories()
    },[]);

    return(
        <>
        
        <div className="categories">
            {
                (state?.categories) ?
           state.categories.map((x)=> <Category value={x}/>):console.log("ites empty")
            }
            
        </div>
        </>
    )
}
export default Home;