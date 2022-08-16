import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    align-items: center;
    /* margin-left: 3rem; */
    margin-top: 0rem;
    padding: 0rem 0rem 1rem 0;
    max-width: 100vw;
    
    font-family: inherit;


    
    & > descent-override,
    & > ul {
        flex: 1;
    }
    h1, p, button {
         margin-left: 3rem; 
         padding-bottom: .6rem;
         
    }
h1{
    font-size: 3rem;
}

    span{
        border-bottom: solid 2px orange;
    }

button{
    margin-top: 2rem;
    font-size: 1.2rem;
    font-family: inherit;
    text-align: center;
    padding: .9em;
}

img{

    width:100%;

}
@media screen {
    

`

export default Flex