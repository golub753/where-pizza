import { Container } from "../components/Container";
import SushiBlocks from "../components/Sushi/SushiComponent/SushiBlocks";
import Loader from '../UI/Loader';
import { useEffect, useState } from "react";

const Sushi = ({sushi, getSushi}) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData(sushi)
        }, 300);
    }, [])

    return ( 
        <div className="Sushi">
            <Container>
                {(data) ? <SushiBlocks items={data} getOrder={getSushi}/> : <Loader/>}
            </Container>
        </div>
     );
}
 
export default Sushi;