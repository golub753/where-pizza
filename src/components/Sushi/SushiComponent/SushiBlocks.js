import styled from 'styled-components';
import SushiBlock from './SushiBlock';
import MyInput from '../../../UI/MyInput/MyInput';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: max-content;
    grid-gap: 30px;
`

const SushiBlocks = ({items, getOrder}) => {

    const [value, setValue] = useState('');

    

    const filteredSushi = items.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase());
    })

    return ( 
        <>
            {(items.length > 10) 
            ? <MyInput
               placeholder='Search of sushi'
               type='text'
               onFilter={(e) => setValue(e)}
            /> 
            : false}
        <Blocks>
            {filteredSushi.map((item, id) => {
                return(
                    <SushiBlock
                        key={uuidv4()}
                        img={item.image}
                        name={item.name}
                        newItem={item.new}
                        price={item.price}
                        getItem={() => getOrder(item)}
                    />
                )
            })}
        </Blocks>
        </>
     );
}
 
export default SushiBlocks;