import { Container } from "../components/Container";
import Warning from './Warning/Warning';

const Snacks = ({items}) => {
    return ( 
        <div className="Snacks">
            <Container>
                {items ? items : <Warning/>}
            </Container>
        </div>
     );
}
 
export default Snacks;