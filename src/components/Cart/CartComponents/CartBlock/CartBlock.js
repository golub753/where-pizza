import { useEffect } from 'react';
import { useState } from 'react';
import { Block, Wrapper, Img, BlockTitle, Info, InfoBlock, Preview, Right, Cost } from '../CartComponents';
import CartCost from '../CartCost/CartCost';

const CartBlock = ({img, name, price, varient}) => {
    
    const [sum, setSum] = useState(null);
    const [number, setNumber] = useState(1);

    useEffect(() => {
        setSum(price);
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