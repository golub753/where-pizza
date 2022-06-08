import { Container } from "../components/Container";
import SushiBlocks from "./SushiComponent/SushiBlocks";
import Loader from '../UI/Loader';
import { useEffect, useState } from "react";

const Sushi = ({sushi}) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData(sushi)
        }, 300);
    }, [])

    return ( 
        <div className="Sushi">
            <Container>
                {(data) ? <SushiBlocks items={data}/> : <Loader/>}
            </Container>
        </div>
     );
}
 
export default Sushi;