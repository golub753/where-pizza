import styled from 'styled-components';
import {Button, Cost, CostPrice, Price, Rouble, Img, MyImg} from '../../Pizza/PizzaCompontent/PizzaBlock';
import { useDispatch } from 'react-redux/es/exports';
import { addOrderAction } from '../../../store/orderReducer';
import { addCashAction } from '../../../store/cashReducer';

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
const SushiName = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #191919;
    margin-bottom: 12px;
`

const SushiInfo = styled.div`
    padding: 0 20px 20px;
`
const SushiBlock = ({image, name, newItem, price, id}) => {
    const dispatch = useDispatch();

    const addOrder = (item) => {
        dispatch(addOrderAction(item))
        dispatch(addCashAction(item.price))
    }

    return ( 
        <Block>
            <Img src={image} alt={name}/>
            <SushiInfo>
                <SushiName>
                    {name}
                </SushiName>
                {(newItem) ? <MyImg src='./images/image/new.png'/> : false}
                <Cost>
                    <Button onClick={() => addOrder({id, initialPrice: price, image, name, price, newItem, counter: 1})}>Choose</Button>
                    <CostPrice>
                        <Price>
                            {price}
                        </Price>
                        <Rouble>
                            BYN
                        </Rouble>
                    </CostPrice>
                </Cost>
            </SushiInfo>
        </Block>
     );
}
 
export default SushiBlock;