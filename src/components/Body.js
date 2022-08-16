import React from 'react'
import {Image }from './styles/Body.styled'
import {Flex} from './styles/Flex.styled'
import { Container } from './styles/Body.styled'
import {Button} from './styles/Button.styled'
import ban from '../images/sleepbed.jpeg'

export const Body = () => {
  return (
    <div>
        <Container>
            Nigeria welcomes Emma. We'll sleep easy now!
        </Container>
       <Flex>
        
          <div>
            <h1>Re-engineering the science of sleep.</h1>
            <p>
              <span>Emma</span> re-imagines the way we sleep. With technology and great products, sleeping has never been healthier, fun and something to look forward to.
            </p>
            <Button>
              Get Started for Free
            </Button>
          </div>
          <div><Image src={ban} /></div>
        </Flex>

    </div>
  )
}

export default Body