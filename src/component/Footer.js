import {Link} from "react-router-dom";
function Footer(){
    return(
        <div className="footer">
        <div className="footer-nav">
            <ul className="footer-links">
                <div className="footer-nav-items">
                    <li className="footer-nav-link"><Link to="#"><i class="fab fa-github"></i></Link></li>
                </div>
                <div className="footer-nav-items">
                    <li className="footer-nav-link"><Link to="#"><i class="fab fa-twitter"></i></Link></li>
                </div>
                <div className="footer-nav-items">
                    <li className="footer-nav-link"><Link to="#"><i class="fab fa-linkedin"></i></Link></li>
                </div>
                
            </ul>
        </div>
        <div className="footer-content">All Rights Reserved</div>
        <div className="footer-content-love">Made with <span class="heart">&hearts;</span> by Raja Ranjan</div>

    </div>
    
    )

}
export {Footer}