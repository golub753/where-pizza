import { Container } from "../components/Container";

const Cart = ({orders}) => {
    return ( 
        <div className="Cart">
            <Container>
                {(orders) ? 'true' : <p>Please, give products for order</p>}
            </Container>
        </div>
     );
}
 
export default Cart;