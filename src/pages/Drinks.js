import { Container } from "../components/Container";
import { useState, useEffect } from "react";
import GetData from '../API/GetData';
import Loader from '../UI/Loader';
import DrinksBlocks from "./DrinksComponent/DrinksBlocks";

const Drinks = () => {

    const [drinks, setDrinks] = useState(null);

    useEffect(() => {
        const res = new GetData();
        setTimeout(() => {
            res.getPizza('/drinks.json')
            .then(data => setDrinks(data))
            .catch(err => console.error(err))
        },300)
    }, [])

    return ( 
        <div className="Drinks">
            <Container>
                {(drinks) ? <DrinksBlocks items={drinks}/> : <Loader/>}
            </Container>
        </div>
     );
}
 
export default Drinks;