import CartBlock from "../CartBlock/CartBlock";

const CartBlocks = ({orders}) => {
    return ( 
        <>
            {(orders.map((item, id) => {
                return (
                    <CartBlock
                        key={id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        varient={(item.varient) ? item.varient : false}
                    />
                )
            }))}
        </>
     );
}
 
export default CartBlocks;