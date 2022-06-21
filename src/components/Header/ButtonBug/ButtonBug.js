import { useState } from 'react';
import {Button, Bag, Info, Num, Rub} from '../HeaderComponents/HeaderComponents';
import { useSelector } from 'react-redux/es/exports';

const ButtonBug = () => {
    const cash = useSelector(state => state.cash.cash);

    return ( 
        <Button to='/cart'>
            <Bag src="./images/icons/bag.svg" alt="bag"/>
            <Info>
                <Num>{(cash <= 0) ? 0 : +cash.toFixed(2)}</Num>
                <Rub>BYN</Rub>
            </Info>
        </Button>
     );
}
 
export default ButtonBug;