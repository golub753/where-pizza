import { Container } from "../components/Container";
import PizzaBlocks from "./PizzaCompontent/PizzaBlocks";

const Pizza = ({items}) => {
    return ( 
        <div className="Pizza">
            <Container>
                {items && <PizzaBlocks items={items}/>}
            </Container>
        </div>
     );
}
 
export default Pizza;