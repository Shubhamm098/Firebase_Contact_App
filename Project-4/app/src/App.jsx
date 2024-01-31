import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchResults from './Components/SearchResults';
// import SearchResults from './src/Components/SearchResults';


export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [selectedbtn,setSelectedbtn] = useState("all");

  const [filteredData, setfilteredData] = useState(null);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchFooddata = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      setfilteredData(json)
      setData(json);
      setLoading(false);
    } catch (error) {
      setError('Unable to fetch data');
      setLoading(false); // Make sure to set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchFooddata();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  const searchFood = (e) =>{
     const searchValue = e.target.value;
    //  console.log(searchValue)

    if(searchValue == ""){
      setfilteredData(null);
    }

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()))
    setfilteredData(filter);
  }
  // {
  //   "name": "Boilded Egg",
  //   "price": 10,
  //   "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //   "image": "/images/egg.png",
  //   "type": "breakfast"
  //   },

  const filterfood = (type) => {
    if(type == "all"){
      setfilteredData(data);
      setSelectedbtn("all");
      return;
    }

    const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase()));
    setfilteredData(filter);
    setSelectedbtn(type);





  }

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
   <>
    <Container>
      <TopContainer>
      <div className="logo">
        <img src="Foody Zone.svg" alt="" />
      </div>

      <div className="search">
        <input onChange={searchFood} placeholder='Search Food' type="text" />
      </div>
      
    </TopContainer>

    <FilterContainer>
     <Button onClick={() => filterfood("all")}>ALL</Button>
     <Button onClick={() => filterfood("breakfast")}>BREAKFAST</Button>
     <Button onClick={() => filterfood("lunch")}>LUNCH</Button>
     <Button onClick={() => filterfood("dinner")}>DINNER</Button>
    </FilterContainer>

    </Container>

<SearchResults data={filteredData}/>
   </>
  );
};

export default App;

export const Container = styled.div`
background-color: #914bc6;
/* max-width:1200px; */
margin:0 auto;

`;
const TopContainer = styled.section`
display:flex;
min-height:140px;
justify-content: space-between;
align-items:center;
padding-left:56px;
padding-right:56px;

.search{
  input{
    background-color:white;
    border: 1px solid red;
    color:white;
    border-radius:6px;
    height:40px;
    font-size:16px;
    color:black;
    border: none;
    outline:none;
    padding:0 10px;
    
  }
}`;

const FilterContainer = styled.section`
justify-content:center;
margin: auto;
display:flex;

`;

 export const Button = styled.button`
border-radius: 5px;
background: #4fbb39;
padding:6px 12px;
outline: none;
border:none;
margin-left:5px;
color:white;
margin-bottom:1%;
cursor: pointer;
&:hover{
  background-color:#1a750e;
}
`;


