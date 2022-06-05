import { Container } from "../components/Container";
import Warning from './Warning/Warning';

const Combo = ({items}) => {
    return ( 
        <div className="Combo">
            <Container>
                {items ? items : <Warning/>}
            </Container>
        </div>
     );
}
 
export default Combo;