import React from 'react'
import { Container, LogoPage, StartedButton, Started, Learn, ContentContainer, ContentBox, Terms } from './styles'
import PhotoPage from "C:/Users/igorn/Documents/landing-page/src/Asset/Image/Photo Page.png"

export const About: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <LogoPage>
          <h1>Great tool to boost your startup </h1>
          <span>We made it so beutiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection!</span>
        </LogoPage>
        <ContentBox>
          <StartedButton>
          <Started>Get Started</Started>
          <Learn>Learn More</Learn>
        </StartedButton>
        <Terms>By signing up, you agree to the terms of Service</Terms>
        </ContentBox>
        
      </ContentContainer>
      <img src={PhotoPage} alt="Photo" />

    </Container>
  )
} 