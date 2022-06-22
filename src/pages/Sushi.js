import { Container } from "../components/Container";
import SushiBlocks from "../components/Sushi/SushiComponent/SushiBlocks";
import Loader from '../UI/Loader';
import { useSelector } from 'react-redux/es/exports';

const Sushi = () => {

    const sushi = useSelector(state => state.sushi.sushi)

    return ( 
        <div className="Sushi">
            <Container>
                {(sushi) ? <SushiBlocks items={sushi}/> : <Loader/>}
            </Container>
        </div>
     );
}
 
export default Sushi;