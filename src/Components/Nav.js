import { Link } from "react-router-dom";

// Import CSS
import './Nav.css';

const Nav = () => {
    return ( 
        <div className="Navigation">
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
}
 
export default Nav;