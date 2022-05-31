import { Container } from "../components/Container";
import Warning from './Warning/Warning';

const Drinks = ({items}) => {
    return ( 
        <div className="Drinks">
            <Container>
                {items ? items : <Warning/>}
            </Container>
        </div>
     );
}
 
export default Drinks;