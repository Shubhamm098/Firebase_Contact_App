import React from 'react'
import { useState } from 'react'
import styled from 'styled-components';
const RollDice = ({currentDice,setcurrentDice}) => {
  
  

  return (
    <Rolly>
    <div className='dice'
    onClick={()=>RollDice()}
    >
      <img src={`/images/dice_5.png`} alt="Dice_1" />
    </div>
    <p>Click on dice to roll</p>
    </Rolly>
  );
};

   
 

  

export default RollDice

const Rolly = styled.div`
display:flex;
align-items:center;
margin-top:5%;
flex-direction:column;

.dice{
   cursor: pointer;
}

p{
  font-size:24px;
  font-weight:500;
}

`;

