import CategoryPageDetails from "../component/CategoryPageDetail"
import "../Pages/home.css"
function CategoryPage(){
    return(
        <>
        
        <div className="categories">
            <CategoryPageDetails/>
            {/* <div className="category cat-one">
                <div className="category-content ">Calculation in maths</div>
                <a className="button-category" href="rule.html">play now</a>
            </div> */}
            {/* <div class="category cat-two">
                <div class="category-content">States pops</div>
                <a class="button-category" href="rule.html">play now</a>

            </div>
            <div class="category cat-three">
                <div class="category-content">Programming knowledge</div>
                <a class="button-category" href="rule.html">play now</a>

            </div>
            <div class="category cat-four">
                <div class="category-content cat5">Politics hist</div>
                <a class="button-category" href="rule.html">play now</a>

            </div> */}
        </div>
        </>
    )
}
export default CategoryPage