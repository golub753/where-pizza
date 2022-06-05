import { Container } from "../components/Container";
import PizzaBlocks from "./PizzaCompontent/PizzaBlocks";
import GetData from '../API/GetData';
import { useEffect, useState } from "react";
import Loader from '../UI/Loader';

const Pizza = () => {

    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        const res = new GetData();
        setTimeout(() => {
            res.getPizza('/pizza.json')
            .then(data => setPizza(data))
            .catch(err => console.error(err))
        },300)
    }, [])

    return ( 
        <div className="Pizza">
            <Container>
                {(pizza) ? <PizzaBlocks items={pizza}/> : <Loader/>}
            </Container>
        </div>
     );
}
 
export default Pizza;