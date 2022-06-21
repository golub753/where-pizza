import { Container } from "../components/Container";
import styled from 'styled-components';
import { Title} from "../components/Cart/CartComponents/CartComponents";
import CartBlocks from "../components/Cart/CartComponents/CartBlocks/CartBlocks";
import { useSelector } from "react-redux/es/exports";

const Text = styled.p`
    width: fit-content;
    margin: 100px auto;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #191919;
`

const Cart = () => {
    const orders = useSelector(state => state.orders.orders);
    return ( 
        <div className="Cart">
            <Container>
                {(orders.length > 0) ? 
                    <>
                        <Title>Your order</Title>
                        <CartBlocks
                            orders={orders}
                        />
                    </>
                 : <Text>Please, give products for order</Text>}
            </Container>
        </div>
     );
}
 
export default Cart;