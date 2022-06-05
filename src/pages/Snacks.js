import { Container } from "../components/Container";
import Warning from './Warning/Warning';
import SnackBlocks from "./SnacksComponent/SnackBlocks";

const Snacks = ({items}) => {
    return ( 
        <div className="Snacks">
            <Container>
            {(items) ? <SnackBlocks items={items}/> : <p>Loading</p>}
            </Container>
        </div>
     );
}
 
export default Snacks;