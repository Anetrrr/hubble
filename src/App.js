import { ThemeProvider } from 'styled-components'
import { Header }from './components/Header'
import { Body } from './components/Body'
import {Container} from './components/styles/Container.styled'
import {Flex} from './components/styles/Flex.styled'
import GlobalStyles from './components/styles/Global'

const theme = {
  colors: {
    header: '#f9f9',
    body: '#fff',
    footer: '#003333',
    button: '#fff'
  },
  mobile: '768px',
  background:{
    button: '#3c4196'
  },
  width: {
    button: '3em'
  }
}
function App() {
  return (
    <ThemeProvider theme = {theme}>
    <>
    <GlobalStyles />
    <Header/>
    <Container>
      
      
    </Container>
    <Body/>
    </>
    </ThemeProvider>
  );
}

export default App;
