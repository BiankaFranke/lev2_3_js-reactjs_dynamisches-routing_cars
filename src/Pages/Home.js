import AutomobilCard from "../Components/AutomobilCard";

// Import Data
import cars from "../Components/cars";

// Import CSS
import './Home.css';

const Home = () => {
    return ( 
        <div className="grid">
            {cars.map((cars, index) => (
            <AutomobilCard
                key={"Car" + index}
                brand={cars.CarMake}
                id={cars.id}
                />)
            )}
        </div>
     );
}
 
export default Home;