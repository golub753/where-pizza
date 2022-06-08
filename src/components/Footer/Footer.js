import { Container } from '../Container';
import { FooterWrap, Home, Logo, Text, Wrapper, Title, Block, SocialLinks } from './FooterComponents/FooterComponents';
import FooterPhone from './FooterPhone/FooterPhone';
import FooterAddress from './FooterAddress/FooterAddress'
import FooterLink from './FooterLink/FooterLink';


const Footer = () => {
    return ( 
        <FooterWrap>
            <Container>
                <Wrapper>
                    <Home href='/'>
                        <Logo src='./images/icons/logo.svg'/>
                        <Text>Where Pizza</Text>
                    </Home>
                    <Block>
                        <Title>
                            Contacts
                        </Title>
                        <FooterPhone
                            phone='+7 (926) 223-10-11'
                        />
                        <FooterAddress
                            address='Москва, ул. Юных Ленинцев, д.99'
                        />
                        <SocialLinks>
                            <FooterLink
                                link='#'
                                text='Facebok'
                                icon='./images/icons/facebook.svg'
                            />
                            <FooterLink
                                link='#'
                                text='Instagram'
                                icon='./images/icons/instagram.svg'
                            />
                        </SocialLinks>
                    </Block>
                </Wrapper>
            </Container>
        </FooterWrap>
     );
}
 
export default Footer;