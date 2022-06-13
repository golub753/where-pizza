import styled from 'styled-components';

const Block = styled.div`
    width: 95px;
    height: 36px;
    background: #FFEEE2;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`

const Button = styled.button`
    color: #FF7010;
    background: #ff70101a;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 26px;
    font-size: 29px;
`

const Cost = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FF7010;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CartCost = ({number, increment, decrement}) => {
    return ( 
        <Block>
            <Button onClick={() => decrement()}>-</Button>
            <Cost>{number}</Cost>
            <Button onClick={() => increment()}>+</Button>
        </Block>
     );
}
 
export default CartCost;