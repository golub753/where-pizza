import { Container } from "../components/Container";
import SushiBlocks from "./SushiComponent/SushiBlocks";

const Sushi = ({items}) => {
    return ( 
        <div className="Sushi">
            <Container>
                {items && <SushiBlocks items={items}/>}
            </Container>
        </div>
     );
}
 
export default Sushi;