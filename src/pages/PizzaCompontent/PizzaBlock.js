import styled from 'styled-components';

const Block = styled.div`
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Img = styled.img`
    width: 80%;
    height: fit-content;
`

const PizzaBlock = ({img, name}) => {
    return ( 
        <Block>
            <Img src={img} alt={name}/>
        </Block>
     );
}
 
export default PizzaBlock;