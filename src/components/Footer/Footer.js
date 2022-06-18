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
                        <Logo src='https://golub753.github.io/where-pizza/images/icons/logo.svg'/>
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
                            address='Partizansky Ave. 19, Minsk'
                        />
                        <SocialLinks>
                            <FooterLink
                                link='#'
                                text='Facebok'
                                icon='https://golub753.github.io/where-pizza/images/icons/facebook.svg'
                            />
                            <FooterLink
                                link='#'
                                text='Instagram'
                                icon='https://golub753.github.io/where-pizza/images/icons/instagram.svg'
                            />
                        </SocialLinks>
                    </Block>
                </Wrapper>
            </Container>
        </FooterWrap>
     );
}
 
export default Footer;