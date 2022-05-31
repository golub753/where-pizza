import { Container } from "../components/Container";
import Warning from './Warning/Warning';

const Desserts = ({items}) => {
    return ( 
        <div className="Desserts">
            <Container>
                {items ? items : <Warning/>}
            </Container>
        </div>
     );
}
 
export default Desserts;