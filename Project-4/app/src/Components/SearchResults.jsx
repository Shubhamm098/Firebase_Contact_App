import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from '../App'
import { Button } from '../App'

const SearchResults = ({data}) => {
  return (
    <div>
      
      <FoodContainer>
        
         <FoodCards>{data?.map((food) => (<FoodCard key={food.name}>

         <div className="food_image">
            <img src={BASE_URL + food.image} alt="" />
         </div>
           <Cards>
         
            <h3>{food.name}</h3>
            <p>{food.text}</p>
         

         <Button>${food.price.toFixed(2)}</Button>
         </Cards>
         </FoodCard>))}</FoodCards>
         
      </FoodContainer>
    </div>
  )
}

export default SearchResults

const FoodContainer = styled.section`
position: relative;
min-height:calc(100vh - 180px);
background-image:url("/bg.png");
/* background-color:#f54343; */
`;
const FoodCards = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
padding-top:50px;
row-gap:32px;
column-gap:20px;
/* max-width:1200px; */
`;
const FoodCard = styled.div`
width: 340px;
height: 167px;
flex-shrink: 0;
display:flex;
gap:5px;

border-radius: 19.447px;
border: 0.659px solid #626262;
background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.184196472167969px);
`;

const Cards = styled.section`
margin-top:7px;
display:flex;
font-size:15px;
flex-direction:column;
gap:13px;
font-family: 'Poppins', sans-serif;
Button{
  width:70px;
  position:absolute;
  bottom:9px;
  right:9px;
}
`;

// const Margin = styled.section`
// max-width:1400px;
// display:flex;
// justify-content:center;
// align-items:center;`;
