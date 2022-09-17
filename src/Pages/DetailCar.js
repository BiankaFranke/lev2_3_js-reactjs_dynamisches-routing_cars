import { useParams } from "react-router-dom";

// Import Data
import cars from "../Components/cars";

const DetailCar = () => {
    let params = useParams();
    console.log(params.id);
    let car = cars[params.id-1];
    return (
        <div className="DataCars">
        <h2>{car.CarMake}</h2>
        <h2>{car.carModel}</h2>
        <h2>{car.CarYear}</h2>
      </div>
    );
}
 
export default DetailCar;