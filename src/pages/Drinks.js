import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import Loader from '../UI/Loader';
import DrinksBlocks from "../components/Drinks/DrinksComponent/DrinksBlocks";

const Drinks = ({drinks, getDrinks}) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData(drinks)
        }, 300);
    }, [])

    return ( 
        <div className="Drinks">
            <Container>
                {(data) ? <DrinksBlocks items={data} getOrder={getDrinks}/> : <Loader/>}
            </Container>
        </div>
     );
}
 
export default Drinks;