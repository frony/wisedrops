import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const quotes = require('./data/quotes.json');

const ANIMATION_INTERVAL = 10;

const flickerAnimation = keyframes`
  0% { opacity: 0; }
  50%  { opacity:1; }
  100% { opacity: 0; }
`;

const Container = styled.div`
	display: block;
  width: 300px;
  border: #000000 1px solid;
  margin: 20px;
  min-height: 250px;
`;

const Title = styled.div`
	height: 30px;
  font-size: 20px;
  background: blueviolet;
  color: antiquewhite;
  text-align: center;
  padding: 10px;
`;

const Wisdom = styled.div`
  font-size: 16px;
  margin: 20px 10px;
  opacity:1;
  animation: ${flickerAnimation} ${ANIMATION_INTERVAL}s infinite;
`;

const Author = styled.div`
  font-size: 12px;
  font-style: italic;
  margin: 0 10px 20px;
  text-align: left;
  opacity:1;
  animation: ${flickerAnimation} ${ANIMATION_INTERVAL}s infinite;
`;

// const Panel = styled.div`
//   display: inline-block;
//   vertical-align: middle;
//   border: red 1px solid;
// `;

const AnimateFlicker = styled.div`
  opacity:1;
  animation: ${flickerAnimation} ${ANIMATION_INTERVAL}s infinite;
`;

export const Wisedrops = () => {
  const [index, setIndex] = useState(0);
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    setIndex(0);
    setQuote(quotes[0]);
  }, []);

  setInterval(() => {
    let newIndex;
    const maxLength = quotes.length - 1;
    if (index < maxLength) {
      newIndex = index + 1;
    } else {
      newIndex = 0;
    }
    setIndex(newIndex);
    setQuote(quotes[newIndex]);
  }, ANIMATION_INTERVAL * 1000);
  return (
      <Container>
        <Title>Wisedrops</Title>
        {/*<AnimateFlicker>{index}</AnimateFlicker>*/}
        {/*<Panel>*/}
          <Wisdom>{ quote.wisdom }</Wisdom>
          <Author>{ quote.author }</Author>
        {/*</Panel>*/}
      </Container>
  );
};
