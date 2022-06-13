import { useEffect } from 'react';
import { useState } from 'react';
import { Block, Wrapper, Img, BlockTitle, Info, InfoBlock, Preview, Right, Cost } from '../CartComponents';
import CartCost from '../CartCost/CartCost';

const CartBlock = ({img, name, price, varient}) => {
    
    const [sum, setSum] = useState(null);
    const [number, setNumber] = useState(1);
    const [decr, setDecr] = useState(2);
    const [cost, setCost] = useState(null);

    useEffect(() => {
        setSum(price);
        setCost(price)
    }, [])

    const increment = () => {
        const newNumber = number + 1;
        const newDecr = decr + 1;
        setNumber(newNumber);
        setDecr(newDecr);
        setSum(+parseInt((cost * decr) * 100) / 100);
    }

    const decrement = () => {
        const newNumber = number - 1;
        const newDecr = decr - 1;
        setNumber(newNumber);
        setDecr(newDecr);
        setSum(+(sum - cost).toFixed(2));
    }

    return ( 
        <Block>
            <Wrapper>
                <Preview>
                    <Img src={img} alt={name}/>
                    <InfoBlock>
                        <BlockTitle>{name}</BlockTitle>
                        <Info>{varient}</Info> 
                    </InfoBlock>
                </Preview>
                <Right>
                    <CartCost 
                        number={number}
                        increment={increment}
                        decrement={decrement}
                    />
                    <Cost>
                        {sum} BYN
                    </Cost>
                </Right>
            </Wrapper>
        </Block>
     );
}
 
export default CartBlock;