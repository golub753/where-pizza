import {Button, Bag, Info, Num, Rub, Count} from '../HeaderComponents/HeaderComponents';
import { useSelector } from 'react-redux/es/exports';

const ButtonBug = () => {
    const cash = useSelector(state => state.cash.cash);
    const orders = useSelector(state => state.orders.orders);

    const ordersLength = orders.reduce((sum, item) => {
        return sum + item.counter;
    },0)

    return ( 
        <Button to='/cart'>
            <Bag src="https://golub753.github.io/where-pizza/images/icons/bag.svg" alt="bag"/>
            <Info>
                <Num>{(cash <= 0) ? 0 : +cash.toFixed(2)}</Num>
                <Rub>BYN</Rub>
            </Info>
            <Count>{ordersLength}</Count>
        </Button>
     );
}
 
export default ButtonBug;