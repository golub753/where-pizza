import styled from 'styled-components';

export const FooterWrap = styled.footer`
    padding: 32px 0;
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 251px 300px;
    justify-content: space-between;
`

export const Home = styled.a`
    display: flex;
    align-items: center;
    grid-column-gap: 15px;
    text-decoration: none;
`

export const Logo = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
`

export const Text = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #191919;
`

export const Title = styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #191919;
    margin-bottom: 22px;
`

export const Block = styled.div`
    display: flex;
    flex-direction: column;
`

export const SocialLinks = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 25px;
`