import {cars} from "./cars.data.js";
import CarItem from "./car-item/CarItem.jsx";


const Home = () => {

    return (
        <div>
            <h1>Car catalog</h1>
            <div>
                {cars.length ? cars.map((car) => (

                    //пробегаем по всем мащинам в базе (по cars)
                    <CarItem value={car} key={car.id}/>
                ))
                :
                    (
                    <h1>Машин нет</h1>
                    )
                }
            </div>
        </div>
    );
};

export default Home;