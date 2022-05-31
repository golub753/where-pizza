import styled from 'styled-components';

const Warn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 50%;
    margin: 0 auto;
    padding: 60px 0;
    font-size: 40px;
`

const Warning = () => {
    return ( 
        <Warn>
            The page is under construction, it will be finished very soon, I wish you a good day :)
        </Warn>
     );
}
 
export default Warning;