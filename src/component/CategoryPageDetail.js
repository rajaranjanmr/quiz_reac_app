import {Link} from "react-router-dom";
import "../Pages/home.css"
function CategoryPageDetails(){
    return(
        <>
        <div className="category-ques">
                <div className="category-content ">Calculation in maths</div>
                <Link className="button-category" to="/rules">play now</Link>
            </div>
        </>
    )
}
export default CategoryPageDetails