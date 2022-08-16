import { StyledHeader, Nav, Logo, Image} from './styles/Header.styled'
import Button from './styles/Button.styled'

import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import logo from '../images/Logo_Emma_Orange_RGB_small@2x.webp';
// import banner from '../images/sleep.svg';
 export const Header = () => {
  return (
    <StyledHeader>
    <Container>
      <Nav>
        <Logo src={logo}  />
        <div>
        <Button>Emma Gallery</Button>
        </div>
        </Nav>

        </Container>
        
        </StyledHeader>
    
  )
}
