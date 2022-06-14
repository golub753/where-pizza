import CartBlock from "../CartBlock/CartBlock";

const CartBlocks = ({orders, increment}) => {
    return ( 
        <>
            {(orders.map((item, id) => {
                return (
                    <CartBlock
                        key={id}
                        item={item.item}
                        img={item.item.image}
                        name={item.item.name}
                        price={item.item.price}
                        varient={(item.item.varient) ? item.item.varient : false}
                        counter={item.counter}
                        increment={() => increment(item.item)}
                    />
                )
            }))}
        </>
     );
}
 
export default CartBlocks;