import { useState } from 'react';
import {Button, Bag, Info, Num, Rub} from '../HeaderComponents/HeaderComponents';

const ButtonBug = ({price}) => {

    return ( 
        <Button to='/cart'>
            <Bag src="https://golub753.github.io/where-pizza/images/icons/bag.svg" alt="bag"/>
            <Info>
                <Num>{(price <= 0) ? 0 : +price.toFixed(2)}</Num>
                <Rub>BYN</Rub>
            </Info>
        </Button>
     );
}
 
export default ButtonBug;