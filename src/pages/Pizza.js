import { Container } from "../components/Container";
import PizzaBlocks from "./PizzaCompontent/PizzaBlocks";

const Pizza = ({items}) => {
    return ( 
        <div className="Pizza">
            <Container>
                {(items) ? <PizzaBlocks items={items}/> : <p>Loading</p>}
            </Container>
        </div>
     );
}
 
export default Pizza;