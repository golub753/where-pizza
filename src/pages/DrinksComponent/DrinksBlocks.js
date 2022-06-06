import styled from 'styled-components';
import DrinksBlock from './DrinksBlock';
import MyInput from '../../UI/MyInput/MyInput';
import { useState } from 'react';

const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: max-content;
    grid-gap: 30px;
`

const DrinksBlocks = ({items}) => {

    const [value, setValue] = useState('');

    

    const filteredDrinks = items.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase());
    })

    return ( 
        <>
            {(items.length > 6) 
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
                        key={id}
                        img={item.image}
                        name={item.name}
                        varients={item.varrients}
                        prices={item.prices}
                    />
                )
            })}
            </Blocks>
        </>
     );
}
 
export default DrinksBlocks;