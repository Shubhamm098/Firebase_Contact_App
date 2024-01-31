import styled from "styled-components";
import Startgame from "./Components/Startgame";
import { useState } from "react";
import Gameplay from "./Components/Gameplay";
const Button = styled.button`
background-color : black;
color: white;
padding : 10px;
 `;
function App() {

  const [isGameStarted,setisGameStarted] = useState(false);
  const toggleGamePlay = () =>{
    setisGameStarted((prev) => !prev );
  }
  return(
  <>
     {

    isGameStarted ? <Gameplay/>:<Startgame
    toggle = {toggleGamePlay}
    />

     }
     
  </>
  )
}

export default App;
