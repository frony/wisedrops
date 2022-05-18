import { useState, useEffect } from 'react';
import styled from 'styled-components';

const quotes = require('./data/quotes.json');

const Container = styled.div`
	display: block;
  width: 300px;
  border: #000000 1px solid;
  margin: 20px;
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
  margin: 20px 10px
`;

const Author = styled.div`
  font-size: 12px;
  font-style: italic;
  margin: 0 10px 20px;
  //padding-top: 10px;
  text-align: left;
  //border-top: 1px solid #282c34;
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
  }, 5000);
  return (
      <Container>
        <Title>Wisedrops</Title>
        {/*<p>{index}</p>*/}
        <Wisdom>{ quote.wisdom }</Wisdom>
        <Author>{ quote.author }</Author>
      </Container>
  );
};
