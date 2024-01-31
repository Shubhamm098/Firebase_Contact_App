import React from 'react'
import styled from 'styled-components'

const Startgame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src="/images/dices.png" alt="" />
      </div>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button
        onClick={toggle}
        >PLAY NOW</Button>
      </div>
    </Container>
  )
}

export default Startgame

const Container = styled.div`
max-width: 1180px;
display:flex;
margin:0 auto;
height: 100vh;
align-items: center;

.content{
    display:flex;
    flex-direction:column;
    justify-content:right;
    
    h1{
        font-size:96px;
        white-space:nowrap;
    }
}

`;

const Button = styled.button`
display: flex;
max-width: 220px;
padding: 10px 18px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
font-size: 16px;
border-radius: 5px;
background: #000;
color:white;
border:none;
border: 1px solid transparent;
cursor: pointer;
transition:0.3s ease-in;

&:hover{
    background-color: #ffffff;
    border: 1px solid black;
    color: black;
    transition:0.3s ease-in;
    
}

`;
