import { Container } from "../components/Container";
import SnackBlocks from "../components/Snacks/SnacksComponent/SnackBlocks";
import Loader from '../UI/Loader';
import { useSelector } from 'react-redux/es/exports';

const Snacks = () => {

    const snacks = useSelector(state => state.snacks.snacks)

    return ( 
        <div className="Snacks">
            <Container>
            {(snacks) ? <SnackBlocks items={snacks}/> : <Loader/>}
            </Container>
        </div>
     );
}
 
export default Snacks;