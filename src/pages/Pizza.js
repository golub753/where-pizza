import { Container } from "../components/Container";
import PizzaBlocks from "../components/Pizza/PizzaCompontent/PizzaBlocks";
import Loader from '../UI/Loader';
import { useSelector } from 'react-redux/es/exports';

const Pizza = () => {

    const pizza = useSelector(state => state.pizza.pizza)

    return ( 
        <div className="Pizza">
            <Container>
                {(pizza) ? <PizzaBlocks items={pizza}/> : <Loader/>}
            </Container>
        </div>
     );
}
 
export default Pizza;