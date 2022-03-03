import React from 'react'
import { Container,
  Logo,
  NavegationContainer,
  SingContainer,
  SignInButton,
  SignUpButton } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo>Startup 3</Logo>
      <NavegationContainer>
        <p>Home</p>
        <p>Features</p>
        <p>Blog</p>
        <p>Shop</p>
      </NavegationContainer>
      <SingContainer>
        <SignInButton>Sign In</SignInButton>
        <SignUpButton>Sign Up</SignUpButton>
      </SingContainer>
    </Container>
  )
}