import { Container } from "../components/Container";
import SushiBlocks from "./SushiComponent/SushiBlocks";
import GetData from '../API/GetData';
import { useEffect, useState } from "react";
import Loader from '../UI/Loader';

const Sushi = () => {

    const [sushi, setSushi] = useState(null);

    useEffect(() => {
        const res = new GetData();
        setTimeout(() => {
            res.getPizza('/sushi.json')
            .then(data => setSushi(data))
            .catch(err => console.error(err))
        },300)
    }, []);

    return ( 
        <div className="Sushi">
            <Container>
                {(sushi) ? <SushiBlocks items={sushi}/> : <Loader/>}
            </Container>
        </div>
     );
}
 
export default Sushi;