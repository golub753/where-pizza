import styled from 'styled-components';
import SushiBlock from './SushiBlock';

const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 480px;
    grid-gap: 30px;
`

const SushiBlocks = ({items}) => {
    return ( 
        <Blocks>
            {items.map((item, id) => {
                return(
                    <SushiBlock
                        key={id}
                        img={item.image}
                        name={item.name}
                        newItem={item.new}
                        price={item.price}
                    />
                )
            })}
        </Blocks>
     );
}
 
export default SushiBlocks;