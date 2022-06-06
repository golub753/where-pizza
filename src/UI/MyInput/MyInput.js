import styled from 'styled-components';

const Input = styled.input`
    display: block;
    outline: none;
    width: 450px;
    height: 60px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #191919;
    margin: 0 auto 25px;
    padding-left: 25px;
    background: transparent;
    border: 1px solid #FF7010;
    border-radius: 5px;
    &:placeholder {
        color: #191919;
    }
`

const MyInput = ({placeholder, type, onFilter, value}) => {
    return ( 
        <Input 
        placeholder={placeholder}
        type={type}
        defaultValue={value}
        autoComplete="off" 
        onChange={(e) => onFilter(e.target.value)}
    />
     );
}
 
export default MyInput;