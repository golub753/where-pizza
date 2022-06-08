import { Container } from "../components/Container";
import PizzaBlocks from "./PizzaCompontent/PizzaBlocks";
import Loader from '../UI/Loader';
import { useEffect, useState } from "react";

const Pizza = ({pizza}) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData(pizza)
        }, 300);
    }, [])

    return ( 
        <div className="Pizza">
            <Container>
                {(data) ? <PizzaBlocks items={data}/> : <Loader/>}
            </Container>
        </div>
     );
}
 
export default Pizza;