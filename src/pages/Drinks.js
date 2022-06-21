import { Container } from "../components/Container";
import Loader from '../UI/Loader';
import DrinksBlocks from "../components/Drinks/DrinksComponent/DrinksBlocks";
import { useSelector } from 'react-redux/es/exports';

const Drinks = () => {

    const drinks = useSelector(state => state.drinks.drinks)

    return ( 
        <div className="Drinks">
            <Container>
                {(drinks) ? <DrinksBlocks items={drinks}/> : <Loader/>}
            </Container>
        </div>
     );
}
 
export default Drinks;