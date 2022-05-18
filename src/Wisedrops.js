import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const quotes = require('./data/quotes.json');
// const quotes = require('./data/bushisms.json');

const MAX_LENGTH = quotes.length;
const ANIMATION_INTERVAL = 10;

const flickerAnimation = keyframes`
  0% { opacity: 0; }
  50%  { opacity:1; }
  100% { opacity: 0; }
`;

const Container = styled.div`
	display: flex;
  flex-direction: column;
  width: 300px;
  border: #000000 1px solid;
  margin: 20px;
  min-height: 250px;
`;

const Title = styled.div`
	height: 30px;
  font-size: 30px;
  background: blueviolet;
  color: antiquewhite;
  text-align: center;
  padding: 10px;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 220px;
  //border: red 1px solid;
  align-items: baseline;
`;

const Wrapper = styled.div`
  display: block;
  width: 100%;
  margin: auto;
  //border: blue 2px solid;
`;

const Wisdom = styled.div`
  font-size: 18px;
  margin: 20px 10px;
  opacity:1;
  animation: ${flickerAnimation} ${ANIMATION_INTERVAL}s infinite;
`;

const Author = styled.div`
  font-size: 14px;
  font-style: italic;
  margin: 0 10px 20px;
  text-align: left;
  opacity:1;
  animation: ${flickerAnimation} ${ANIMATION_INTERVAL}s infinite;
`;

export const Wisedrops = () => {
  const [index, setIndex] = useState(0);
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < MAX_LENGTH - 1) {
        setIndex(index => index + 1);
        setQuote(quotes[index + 1]);
      } else {
        setIndex(0);
        setQuote(quotes[0]);
      }
    }, 10 * 1000);

    return () => clearInterval(interval);
  });

  return (
      <Container>
        <Title>Wisedrops</Title>
        {/*<p>{index}</p>*/}
        <Panel>
          <Wrapper>
            <Wisdom>{ quote.wisdom }</Wisdom>
            <Author>{ quote.author }</Author>
          </Wrapper>
        </Panel>
      </Container>
  );
};
