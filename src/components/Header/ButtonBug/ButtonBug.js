import {Button, Bag, Info, Num, Rub} from '../HeaderComponents/HeaderComponents';

const ButtonBug = () => {
    return ( 
        <Button>
            <Bag src="/images/icons/bag.svg" alt="bag"/>
            <Info>
                <Num>0</Num>
                <Rub>Br</Rub>
            </Info>
        </Button>
     );
}
 
export default ButtonBug;