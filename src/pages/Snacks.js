import { Container } from "../components/Container";
import SnackBlocks from "./SnacksComponent/SnackBlocks";
import Loader from '../UI/Loader';
import { useEffect, useState } from "react";

const Snacks = ({snacks, getSnacks}) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData(snacks)
        }, 300);
    }, [])

    return ( 
        <div className="Snacks">
            <Container>
            {(data) ? <SnackBlocks items={data} getOrder={getSnacks}/> : <Loader/>}
            </Container>
        </div>
     );
}
 
export default Snacks;