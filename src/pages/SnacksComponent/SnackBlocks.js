import styled from 'styled-components';
import SnackBlock from './SnackBlock';
import MyInput from '../../UI/MyInput/MyInput';
import { useState } from 'react';

const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: max-content;
    grid-gap: 30px;
`

const SnackBlocks = ({items}) => {

    const [value, setValue] = useState('');

    

    const filteredSnacks = items.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase());
    })

    return ( 
        <>
            {(items) 
            ? <MyInput
               placeholder='Search of snacks'
               type='text'
               onFilter={(e) => setValue(e)}
            /> 
            : false}
        <Blocks>
            {filteredSnacks.map((item, id) => {
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
        </>
     );
}
 
export default SnackBlocks;