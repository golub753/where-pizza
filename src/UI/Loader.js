import styled from 'styled-components';

const Load = styled.div`
    width: 130px;
    height: 130px;
    border: 4px dashed #FF7010;
    border-radius: 50%;
    margin: 0 auto;
    animation: 3s linear 0s normal none infinite running rot;
    @keyframes rot {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
    @-webkit-keyframes rot {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`

const Loader = () => {
    return ( 
        <Load/>
     );
}
 
export default Loader;