import {Link} from "react-router-dom";
import "../Pages/home.css";
function Category(props){
    return(<>
    <div className="category">
                <div className="category-content">{props.value.name}</div>
                <Link className="button-category" to="/category">Let's Begin</Link>
            </div>
    </>)
}
export default Category