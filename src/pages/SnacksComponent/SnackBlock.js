import { useState } from 'react';
import styled from 'styled-components';
import {Img, TextInfo, Varients, MyImg, Button, Cost, CostPrice, Price, Rouble} from '../PizzaCompontent/PizzaBlock';
import SnackVarient from './SnackVarient';

const Block = styled.div`
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .3s;
    &:hover {
        box-shadow: 8px 8px 7px #F0F0F0;
    }
`
const SnackName = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #191919;
    margin-bottom: 12px;
`

const SnackInfo = styled.div`
    padding: 0 20px 20px;
`

const SnackBlock = ({name, varients, prices, hot, image}) => {

    
    const [price, setPrice] = useState(prices[0]['standart']);

    const changePrice = (e) => {
        setPrice(prices[0][[e.target.placeholder]])
    }
    return ( 
        <Block>
            <Img src={image} alt={name}/>
            <SnackInfo>
                <SnackName>{name}</SnackName>
                <Varients>
                    {varients.map((item, id) => {
                        return (
                            <SnackVarient
                                key={id}
                                name={item}
                                place={name}
                                onChange={(item) => changePrice(item)}
                            />
                        )
                    })}
                </Varients>
                {(hot) ? <MyImg src='/images/image/hot.png'/> : false}
                <Cost>
                    <Button>Choose</Button>
                    <CostPrice>
                        <Price>
                            {price}
                        </Price>
                        <Rouble>
                            BYN
                        </Rouble>
                    </CostPrice>
                </Cost>
            </SnackInfo>
        </Block>
     );
}
 
export default SnackBlock;