import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background: #FFFFFF;
    padding: 12px 0;
    box-shadow: 0 0 5px #000000;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Home = styled.a`
    display: flex;
    align-items: center;
    grid-column-gap: 12px;
    text-decoration: none;
`

export const Logo = styled.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
`

export const Text = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #191919;
`

export const Button = styled.button`
    background: #FF7010;
    border-radius: 4px;
    width: fit-content;
    height: 40px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: sapce-between;
    grid-column-gap: 8px;
    outline: none;
    border: none;
    cursor: pointer;
`

export const Bag = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
`

export const Num = styled.span``;
export const Rub = styled.span``;