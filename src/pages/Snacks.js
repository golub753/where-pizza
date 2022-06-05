import { Container } from "../components/Container";
import SnackBlocks from "./SnacksComponent/SnackBlocks";
import GetData from '../API/GetData';
import { useEffect, useState } from "react";
import Loader from '../UI/Loader';

const Snacks = () => {

    const [snacks, setSnacks] = useState(null);

    useEffect(() => {
        const res = new GetData();
        setTimeout(() => {
            res.getPizza('/snacks.json')
            .then(data => setSnacks(data))
            .catch(err => console.error(err))
        },300)
    }, []);

    return ( 
        <div className="Snacks">
            <Container>
            {(snacks) ? <SnackBlocks items={snacks}/> : <Loader/>}
            </Container>
        </div>
     );
}
 
export default Snacks;