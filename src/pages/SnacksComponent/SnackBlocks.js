import styled from 'styled-components';
import SnackBlock from './SnackBlock';

const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: max-content;
    grid-gap: 30px;
`

const SnackBlocks = ({items}) => {
    return ( 
        <Blocks>
            {items.map((item, id) => {
                return (
                    <SnackBlock
                        key={id}
                        name={item.name}
                        varients={item.varients}
                        prices={item.prices}
                        hot={item.hot}
                        image={item.image}
                    />
                )
            })}
        </Blocks>
     );
}
 
export default SnackBlocks;