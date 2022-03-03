import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
row-gap: 50px;
h1{
    font-style: normal;
font-weight: 600;
font-size: 58px;
line-height: 70px;
text-align: center;
letter-spacing: -1px;
color: #1E0E62;
margin: 0;
word-wrap: break-word;
width: 840px;
}
`

export const StartedButton = styled.button`
border: none;
cursor: pointer;
font-weight: 400;
border-radius: 50px;
background-color: #25DAC4;
width: 170px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
`

export const TextBox = styled.div`
display: flex;
column-gap: 80px;

span {
    font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
text-align: center;
color: rgba(21, 20, 57, 0.4);
word-wrap: break-word;
width: 315px;
}
`
