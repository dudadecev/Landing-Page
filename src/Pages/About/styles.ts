import styled from 'styled-components'

export const Container = styled.div`
display: flex;
column-gap: 325px;
align-items: center;
justify-content: center;
width: 100%;
`
export const LogoPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
row-gap: 23px;
width: 568px;
word-wrap: break-word;
text-align: left;

h1{
font-style: normal;
font-weight: bold;
font-size: 58px;
line-height: 70px;
letter-spacing: -1px;
color: #1E0E62;
margin: 0;
}

span{
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
color: rgba(21, 20, 57, 0.4);
}
`

export const StartedButton = styled.div`
display: flex;
column-gap: 10px;
`

export const Started = styled.button`
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
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
`

export const Learn = styled.button`
border: 1px solid #c3c3c3;
cursor: pointer;
font-weight: 400;
border-radius: 50px;
background-color: #fff;
width: 170px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
color: #1E0E62;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
`

export const ContentContainer = styled.div`
display: flex;
flex-direction: column;
row-gap: 90px;
`

export const Terms = styled.span`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: rgba(21, 20, 57, 0.4);

`

export const ContentBox = styled.div`
display: flex;
flex-direction: column;
align-self: flex-start;
row-gap: 20px;
`