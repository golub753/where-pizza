import CartBlock from "../CartBlock/CartBlock";

const CartBlocks = ({orders, originalOrders}) => {
    return ( 
        <>
            {(orders.map((item, id) => {
                const thisItem = originalOrders.filter(order => order.id === item.id);
                return (
                    <CartBlock
                        key={id}
                        item={item}
                        img={item.image}
                        name={item.name}
                        price={item.price}
                        varient={(item.varient) ? item.varient : false}
                        orders={thisItem}
                    />
                )
            }))}
        </>
     );
}
 
export default CartBlocks;