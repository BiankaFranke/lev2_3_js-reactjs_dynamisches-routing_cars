import { Link } from "react-router-dom";

// Import CSS
import "./AutomobilCard.css";

const AutomobilCard = (props) => {
    return ( 
        <div className="AutoCard">
            <div className="grid-item">
                <h3 className="Brand">{props.brand}</h3>
                <Link to={`/${props.id}`}>Read more</Link>
            </div>
        </div>
     );
}
 
export default AutomobilCard;