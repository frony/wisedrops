import { useState, useEffect } from 'react';
const quotes = require('./data/quotes.json');

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
  }, 2000);
  return (
    <>
      <h1>Wisedrops</h1>
      <p>{index}</p>
      <p>{ quote.wisdom }</p>
      <p>{ quote.author }</p>
    </>
  );
};
