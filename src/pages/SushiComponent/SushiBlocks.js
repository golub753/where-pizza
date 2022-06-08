import styled from 'styled-components';
import SushiBlock from './SushiBlock';
import MyInput from '../../UI/MyInput/MyInput';
import { useState } from 'react';

const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: max-content;
    grid-gap: 30px;
`

const SushiBlocks = ({items}) => {

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
                        key={id}
                        img={item.image}
                        name={item.name}
                        newItem={item.new}
                        price={item.price}
                    />
                )
            })}
        </Blocks>
        </>
     );
}
 
export default SushiBlocks;