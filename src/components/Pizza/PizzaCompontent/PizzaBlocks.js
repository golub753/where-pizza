import styled from 'styled-components';
import PizzaBlock from './PizzaBlock';
import MyInput from '../../../UI/MyInput/MyInput';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: max-content;
    grid-gap: 30px;
`

const PizzaBlocks = ({items, getOrder}) => {

    const [value, setValue] = useState('');

    

    const filteredPizza = items.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase());
    })

    return ( 
        <>
            {(items.length > 10) 
             ? <MyInput
                placeholder='Search of pizza'
                type='text'
                onFilter={(e) => setValue(e)}
             /> 
             : false}
            <Blocks>
            {filteredPizza.map((item, id) => {
                return (
                    <PizzaBlock
                        key={uuidv4()}
                        image={item.image}
                        name={item.name}
                        varients={item.varients}
                        prices={item.prices}
                        newItem={item.new}
                        hot={item.hot}
                        category={item.category}
                        getItem={getOrder}
                    />
                )
            })}
            </Blocks>
        </>
     );
}
 
export default PizzaBlocks;