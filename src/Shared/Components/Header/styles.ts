import styled from 'styled-components'

export const Container = styled.div`
display: flex;
width: 100%;
height: 100px;
background-color: #FFFFFF;
justify-content: space-around;
align-items: center;
`

export const Logo = styled.span`
 font-size: 24px;
 font-weight: 500;
 color: #1E0E62;    
`
export const NavegationContainer = styled.div`
display: flex;
column-gap: 40px;

p {
    font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
color: #1E0E62;    
}
`
export const SingContainer = styled.div`
display: flex;
column-gap: 5px;
`

export const SignInButton = styled.button`
background-color: #fff;
border: none;
cursor: pointer;
font-weight: 500;
color: #1E0E62;
width: 100px;
height: 40px;
`

export const SignUpButton = styled.button`
background-color: #482BE7;
color: #fff;
width: 100px;
height: 40px;
border-radius: 50px;
border: none;
cursor: pointer;
font-weight: 500;
`