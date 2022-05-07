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
                  console.log("its response",response.data.trivia_categories)
                  dispatch({type: "GET_CATEGORY_LIST",
                  payload: response.data.trivia_categories,})
            }
            catch(err){
                console.log(err)
            }

        }
        getCategories()
    },[]);
    console.log("its dispatch data",state)

    return(
        <>
        
        <div className="categories">
            {
                (state?.categories) ?
           state.categories.map((x)=> <Category value={x}/>):console.log("ites empty")
            }
            
            {/* <div class="category cat-two">
                <div class="category-content">States Based</div>
                <a class="button-category" href="quizcat.html">Let's Begin</a>

            </div>
            <div class="category cat-three">
                <div class="category-content">Programming based</div>
                <a class="button-category" href="quizcat.html">Let's Begin</a>

            </div>
            <div class="category cat-four">
                <div class="category-content cat5">Politics Based</div>
                <a class="button-category" href="quizcat.html">Let's Begin</a>

            </div> */}
        </div>
        </>
    )
}
export default Home;