import styled from 'styled-components';
import DrinksBlock from './DrinksBlock';
import MyInput from '../../../UI/MyInput/MyInput';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: max-content;
    grid-gap: 30px;
`

const DrinksBlocks = ({items, getOrder}) => {

    const [value, setValue] = useState('');

    

    const filteredDrinks = items.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase());
    })

    return ( 
        <>
            {(items.length > 10) 
             ? <MyInput
                placeholder='Search of drinks'
                type='text'
                onFilter={(e) => setValue(e)}
             /> 
             : false}
            <Blocks>
            {filteredDrinks.map((item, id) => {
                return (
                    <DrinksBlock
                        key={uuidv4()}
                        image={item.image}
                        id={uuidv4()}
                        name={item.name}
                        varients={item.varrients}
                        prices={item.prices}
                        getItem={getOrder}
                    />
                )
            })}
            </Blocks>
        </>
     );
}
 
export default DrinksBlocks;