import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 60px;
`

export const LogoPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
row-gap: 32px;
width: 600px;
word-wrap: break-word;
text-align: left;


h1 {
font-style: normal;
font-weight: 650;
font-size: 45px;
line-height: 60px;
text-align: center;
letter-spacing: -1px;
color: #1E0E62;
margin: 0%;
}


span {
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 32px;
text-align: center;
color: rgba(21, 20, 57, 0.4);
}

button {
border: 1px solid #E93A7D;
border-radius: 50px;
background-color:#E93A7D;
cursor: pointer;
width: 268px;
height: 60px;
font-style: normal;
font-weight: 200px;
font-size: 20px;
line-height: 26px;
color: #FFFFFF;
}
`
export const Footer = styled.div`
display: flex;
column-gap: 250px;
position: fixed;
bottom: 30px;
width: 1000px;



div{
 display: flex;
align-items: center;
flex-direction: column;
row-gap: 10px;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
text-align: center;
color: rgba(21, 20, 57, 0.4);
word-wrap: break-word;
}
`
 