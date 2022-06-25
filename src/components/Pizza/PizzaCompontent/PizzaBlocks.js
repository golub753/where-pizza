import styled from 'styled-components';
import PizzaBlock from './PizzaBlock';
import MyInput from '../../../UI/MyInput/MyInput';
import { useState } from 'react';

export const Blocks = styled.div`
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

const PizzaBlocks = ({items}) => {

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
                        key={id}
                        id={id}
                        image={item.image}
                        name={item.name}
                        varients={item.varients}
                        prices={item.prices}
                        newItem={item.new}
                        hot={item.hot}
                        category={item.category}
                    />
                )
            })}
            </Blocks>
        </>
     );
}
 
export default PizzaBlocks;