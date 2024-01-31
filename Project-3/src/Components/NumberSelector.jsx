import { useState } from "react"
import styled from "styled-components"


const NumberSelector = ({ SelectedNumber,setSelectedNumber}) => {
    const ArrNum = [1,2,3,4,5,6]
    


  return (
    <NumberSelectorContainer>
    <div className="flex">
      {ArrNum.map((value,i)=>(
         <Box
         isSelected = {value == SelectedNumber}
         key={i}
         onClick={() => setSelectedNumber(value)}
         >{value}</Box>
      ))} 
     </div>
     <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

const NumberSelectorContainer = styled.div`
.flex{
   display:flex;
   gap:24px;
   justify-content:center;
}
p{
    font-size:24px;
    font-weight:700;
}
place-items:center;
display:flex;
flex-direction:column;
gap:14px;
`;

export default NumberSelector

const Box = styled.div`
height:72px;
width:72px;
border:1px solid black;
display:grid;
place-items:center;
font-size:29px;
font-weight:700px;
background-color:${(props)=> props.isSelected ? "Black":"white"};
color:${(props) => props.isSelected ? "white":"black"};

`;