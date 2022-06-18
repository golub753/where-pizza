import styled from 'styled-components';

const Phone = styled.a`
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #191919;
    display: flex;
    align-items: center;
    grid-column-gap: 12px;
    margin-bottom: 20px;
`

const Icon = styled.img`
    width: 20px;
    height: 20px;
`

const FooterPhone = ({phone}) => {
    return ( 
        <Phone href={`tel:${phone}`}>
        <Icon src='https://golub753.github.io/where-pizza/images/icons/phone.svg' alt='phone'/>
        {phone}
        </Phone>
     );
}
 
export default FooterPhone;