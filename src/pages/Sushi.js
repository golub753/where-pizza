import { Container } from "../components/Container";
import Warning from './Warning/Warning';

const Sushi = ({items}) => {
    return ( 
        <div className="Sushi">
            <Container>
                {items ? items : <Warning/>}
            </Container>
        </div>
     );
}
 
export default Sushi;