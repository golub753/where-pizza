import { useState } from 'react';
import {Button, Bag, Info, Num, Rub} from '../HeaderComponents/HeaderComponents';

const ButtonBug = ({price}) => {

    return ( 
        <Button to='/cart'>
            <Bag src="./images/icons/bag.svg" alt="bag"/>
            <Info>
                <Num>{price.toFixed(2)}</Num>
                <Rub>BYN</Rub>
            </Info>
        </Button>
     );
}
 
export default ButtonBug;