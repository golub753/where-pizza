import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";

export const MenuWrap = styled.div`
    padding: 30px 0;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-row-gap: 8px;
    text-decoration: none;
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 12px;
    width: 135px;
    height: 104px;
    color: #191919;
    transition: .3s;
    &.active {
        box-shadow: 0 0 5px #000000;
  }
`

export const Img = styled.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
`

export const Text = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: inherit;
`