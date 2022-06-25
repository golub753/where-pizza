import styled from 'styled-components';
import SnackBlock from './SnackBlock';
import MyInput from '../../../UI/MyInput/MyInput';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: max-content;
    grid-gap: 30px;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`

const SnackBlocks = ({items}) => {

    const [value, setValue] = useState('');

    

    const filteredSnacks = items.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase());
    })

    return ( 
        <>
            {(items.length > 10) 
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
                        key={uuidv4()}
                        id={id}
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