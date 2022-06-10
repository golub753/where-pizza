import { Container } from "../components/Container";
import styled from 'styled-components';
import { Title} from "./CartComponents/CartComponents";
import CartBlocks from "./CartComponents/CartBlocks/CartBlocks";

const Text = styled.p`
    width: fit-content;
    margin: 100px auto;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #191919;
`

const Cart = ({orders}) => {
    return ( 
        <div className="Cart">
            <Container>
                {(orders.length) ? 
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