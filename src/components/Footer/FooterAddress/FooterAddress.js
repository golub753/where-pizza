import styled from 'styled-components';

const Address = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #191919;
    display: flex;
    align-items: center;
    grid-column-gap: 15px;
    margin-bottom: 20px;
`

const Icon = styled.img`
    width: 14px;
    height: 20px;
`

const FooterAddress = ({address}) => {
    return ( 
        <Address>
            <Icon src='https://golub753.github.io/where-pizza/images/icons/pin.svg' alt='pin'/>
            {address}
        </Address>
     );
}
 
export default FooterAddress;