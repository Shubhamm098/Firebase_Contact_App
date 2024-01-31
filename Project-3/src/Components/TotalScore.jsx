import styled from "styled-components"

const TotalScore = ({score}) => {
  return (
    <Stored>
    <div>
      <h1>8</h1>
      <p>TOTAL SCORE</p>
    </div>
   </Stored>
  )
}

export default TotalScore

const Stored = styled.div`
text-align:center;
max-width:200px;
h1{
    font-size:100px;
    line-height:100px;
}
p{
    font-size:24px;
    font-weight:500px;
}
`;