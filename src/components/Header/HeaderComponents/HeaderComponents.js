import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    background: #FFFFFF;
    padding: 12px 0;
    box-shadow: 0 0 1px #000000;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Home = styled(Link)`
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

export const Button = styled(Link)`
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
    text-decoration: none;
    @media (max-width: 768px) {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10;
        padding: 0;
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 2px 8px rgba(25, 25, 25, 0.2);
        border-radius: 50%;
    }
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
    @media (max-width: 768px) {
        display: none;
    }
`

export const Count = styled.div`
    padding: 2px 6px;
    display: none;
    background: #FFFFFF;
    border: 1px solid #FF7010;
    position: absolute;
    bottom: 38px;
    left: 38px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    align-items: center;
    justify-content: center;
    color: #FF7010;
    border-radius: 50%;
    @media (max-width: 768px) {
        display: flex;
    }
`

export const Num = styled.span``;
export const Rub = styled.span``;