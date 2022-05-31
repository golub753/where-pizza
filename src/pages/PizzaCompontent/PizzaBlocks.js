import styled from 'styled-components';
import PizzaBlock from './PizzaBlock';

const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 480px;
    grid-gap: 30px;
`

const PizzaBlocks = ({items}) => {
    return ( 
        <Blocks>
            {items.map((item, id) => {
                return (
                    <PizzaBlock
                        key={id}
                        img={item.image}
                        name={item.name}
                    />
                )
            })}
        </Blocks>
     );
}
 
export default PizzaBlocks;