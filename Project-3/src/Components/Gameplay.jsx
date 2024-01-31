import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RollDice from './RollDice';

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [SelectedNumber, setSelectedNumber] = useState(0);
  const [currentDice, setcurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleRollDice = () => {
    const random = generateRandomNumber(1, 7);
    setcurrentDice((prev) => random);

    if (SelectedNumber === random) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  return (
    <>
      <MainContent>
        <TotalScore score={score} />
        <NumberSelector
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </MainContent>

      <RollDice currentDice={currentDice} RollDice={handleRollDice} />
    </>
  );
};

export default Gameplay;

const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2% 2%;
`;