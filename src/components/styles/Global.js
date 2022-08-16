import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url(//db.onlinewebfonts.com/c/d26c286f6ceed9aef70182f2c1e7401c?family=Wes+FY);

    *{
        box-sizing:border-box;
        margin: 0;
    }
    body {
        background: ${({theme}) => theme};
        color: hsl(192, 100%, 9%);
        font-family: 'Wes FY', sans-serif;
        font-size: 1.15rem;
    }
    p {
        opacity: 0.6;
        line-height: 1.5;
    }
    img {
        max-width: 100%;
    }
    button {
        background-color: ${({theme}) => theme};
        color: ${({theme}) => theme};

    }
`
export default GlobalStyles