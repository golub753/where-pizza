import { useState } from 'react';
import styled from 'styled-components';
import '../../styles/style.css';

const Main = styled.div`
    max-width: 850px;
    margin: 60px auto;
`

const Title = styled.div`
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #191919;
    margin-bottom: 16px;
`

const Btn = styled.button`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FF7010;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin: 0
`


const Description = () => {
    const [btnText, setBtnText] = useState('Show all');

    const clicked = (e) => {
        (e.target.textContent === 'Show all') ? setBtnText('Hide') : setBtnText('Show all');
    }
    return ( 
        <Main>
            <Title>Pizza delivery in Gomel</Title>
            <div className={(btnText === 'Show all') ? 'text hidden' : 'text'}>
            <p>
            Did you want something delicious and satisfying? The desire is simple and understandable, only everything is wrong in the refrigerator, and it's too lazy to go to the store. Is everything gone? No. It's very easy to order cheap pizza in Moscow! A superhero is rushing to your aid – Domino's Pizza! Like any superhero, Domino's Pizza has its own superpowers: delicious taste of products made from selected ingredients; a wide range, including legendary, branded and classic types, for vegetarians and experimentalists; fast and free pizza delivery within 30 minutes so that a delicious and flavorful dish does not have time to cool down. 
            </p>
            <p>
                <strong>
                How to order 
                </strong>
            </p>
            <p>
            Pizza delivery from Domino's is when you don't need to go anywhere or call, because there is Internet. Ordering pizza at home in Moscow has never been so easy! To order pizza online, you need to: choose the option you like and the number of servings; put what you want in the "Basket"; do not go far, as delicious pizza to order with delivery is already rushing to you from the nearest Domino's pizzeria. And don't forget to pay for the order to the courier!
            </p>
            </div>
            <Btn onClick={(e) => clicked(e)}>{btnText}</Btn>
        </Main>
     );
}
 
export default Description;