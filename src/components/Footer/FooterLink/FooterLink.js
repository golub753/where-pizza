import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #191919;
    display: flex;
    align-items: center;
    grid-column-gap: 12px;
`

const Icon = styled.img`
    width: 20px;
    height: 20px;
`

const FooterLink = ({icon, link, text}) => {
    return ( 
        <Link href={link}>
            <Icon
                src={icon}
                alt={text}
            />
            {text}
        </Link>
     );
}
 
export default FooterLink;