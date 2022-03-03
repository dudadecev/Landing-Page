import React from 'react'
import { SingContainer } from '../../Shared/Components/Header/styles'
import { Container, StartedButton, TextBox } from './styles'
import MacbookPro from 'C:/Users/igorn/Documents/landing-page/src/Asset/Image/Macbook Pro.png'

export const Home: React.FC = () => {
  return (
    <Container>
      <h1>A high-quality solution startup website quickly
      </h1>
      <SingContainer>
        <StartedButton>Get Started</StartedButton>
      </SingContainer>
      <img src={MacbookPro} alt="Mac" />
      <TextBox>
        <span>Startup Framework works on devices supporting Retina Display. Feel the clarity in each pixel.</span>
        <span>There are a lot of different components that will help you create the perfect look and feel for your startup.</span>
        <span>You can easily combine components in a variety ways for different design projects. It’s easy!</span>
      </TextBox>
    </Container>
  )
}