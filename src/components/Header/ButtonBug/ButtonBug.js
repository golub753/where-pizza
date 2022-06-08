import { useState } from 'react';
import {Button, Bag, Info, Num, Rub} from '../HeaderComponents/HeaderComponents';

const ButtonBug = () => {
    const [sum, setSum] = useState(0);

    return ( 
        <Button to='/cart'>
            <Bag src="/images/icons/bag.svg" alt="bag"/>
            <Info>
                <Num>{sum}</Num>
                <Rub>BYN</Rub>
            </Info>
        </Button>
     );
}
 
export default ButtonBug;