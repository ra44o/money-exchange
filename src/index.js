module.exports = function makeExchange(currency) {
  let nominals = ['H', 'Q', 'D', 'N', 'P'];
  let coins = [50, 25, 10, 5, 1];
  let exchanged = {};

  for(let i = 0; i < coins.length; i++) {
    if(currency == 0 || currency < 0) {
      return exchanged;
    }
    else if(currency > 10000) {
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else if (currency / coins[i] >= 1) {
      let remainder = Math.floor(currency / coins[i]);
      currency = currency - remainder * coins[i];
      exchanged[nominals[i]] = remainder;
    }
    else continue;
  }
  return exchanged;
}
