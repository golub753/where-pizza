import { useEffect } from 'react';
import { useState } from 'react';
import { Block, Wrapper, Img, BlockTitle, Info, InfoBlock, Preview, Right, Cost } from '../CartComponents';
import CartCost from '../CartCost/CartCost';

const CartBlock = ({img, name, price, varient, orders}) => {
    
    const [sum, setSum] = useState(null);
    const [number, setNumber] = useState(orders.length);

    useEffect(() => {
        let finalSum = 0;
        orders.forEach(item => finalSum += item.price);
        setSum(+finalSum.toFixed(2));
    }, [])

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