import { useState } from 'react';
import styled from 'styled-components';
import PizzaVarient from './PizzaVarient';

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

const Img = styled.img`
    display: block;
    width: 80%;
    height: fit-content;
    margin: 0 auto 16px;
`

const PizzaName = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #191919;
    margin-bottom: 12px;
`

const PizzaInfo = styled.div`
    padding: 0 20px 20px;
`

const TextInfo = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #191919;
    margin-bottom: 12px;
`

const Varients = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 10px;
    margin-bottom: 16px;
`

const MyImg = styled.img`
    width: 32px;
    height: 32px;
    object-fit: contain;
    position: absolute;
    top: 20px;
    right: 23px;
`

const Vegan = styled.img`
    width: 32px;
    height: 32px;
    object-fit: contain;
    position: absolute;
    top: 20px;
`

const Button = styled.button`
    background: #FF7010;
    border-radius: 6px;
    width: 131px;
    height: 48px;
    cursor: pointer;
    outlone: none;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Cost = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CostPrice = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 5px;
`

const Price = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FF7010;
`

const Rouble = styled.span`
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FF7010;
`

const PizzaBlock = ({img, name, varients, prices, newItem, hot, category}) => {

    const [price, setPrice] = useState(prices[0]['25cm']);

    const changePrice = (e) => {
        setPrice(prices[0][[e.target.placeholder]])
    }

    return ( 
        <Block>
            <Img src={img} alt={name}/>
            <PizzaInfo>
                <PizzaName>{name}</PizzaName>
                <TextInfo>Size:</TextInfo>
                <Varients>
                    {varients.map((item, id) => {
                        return (
                            <PizzaVarient
                                key={id}
                                name={item}
                                place={name}
                                onChange={(item) => changePrice(item)}
                            />
                        )
                    })}
                </Varients>
                {(newItem) ? <MyImg src='/images/image/new.png'/> : false}
                {(hot) ? <MyImg src='/images/image/hot.png'/> : false}
                {(category === 'veg') ? <Vegan src='/images/image/vegan.png'/> : <Vegan src='/images/image/nonvegan.png'/>}
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
            </PizzaInfo>
        </Block>
     );
}
 
export default PizzaBlock;