import styled from 'styled-components'


export const Button = styled.button`
    border:none;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0, .15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    width: 12em;
    display: inline-block;
    
    text-align:center;
    font-family: 'Wes FY', sans-serif;
    padding: 15px 1rem;
    background-color: ${({ theme }) => theme.background.button};
    color: ${({theme}) => theme.colors.button};


    &:hover {
        opacity:0.9;
        transform: scale(.98);
    }

`

export default Button