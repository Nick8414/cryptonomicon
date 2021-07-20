//const API_KEY = '...';

//TODO: refactor to use url searchparams
export const loadTicker = (tickerName) =>
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD`
  ).then((f) => f.json())
