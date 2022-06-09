import CategoryPageDetails from "../component/CategoryPageDetail"
import "../Pages/home.css"
import {useLocation} from "react-router-dom"
import {useEffect} from "react"
import axios from "axios"
import { useQuiz } from "../context/quiz-context"
function CategoryPage(){
    const {state,dispatch}= useQuiz()
    useEffect(()=>{
        async function getCategories(){
            try{
                const response = await axios({
                    method: "GET",
                    url: "https://opentdb.com/api_category.php",
                  });
                  console.log("its response",response)
                  dispatch({type: "GET_CATEGORY_LIST",
                  payload: response.data.trivia_categories,})
            }
            catch(err){
                console.log(err)
            }

        }
        getCategories()
    },[]);
    const filteredData = state.categories.filter(x=>x.name.includes(state.category))
    const location = useLocation();
    return(
        <>
        
        <div className="categories">
           { filteredData?.map((x)=><CategoryPageDetails value={x}/>)}
        </div>
        </>
    )
}
export default CategoryPage