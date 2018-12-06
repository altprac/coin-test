export default {
  getFiats: state => state.fiats,
  getCurrentFiat: state => state.currentFiat,
  getCryptos: state => state.cryptos,
  getCoinTotal: state => key => getSymbol(state.currentFiat) + getSubTotal(state, key).toFixed(2),
  getTotal: (state, getters) => getSymbol(state.currentFiat) + state.cryptos.reduce((t, e) => t + getSubTotal(state, e.name) * 1, 0).toFixed(2)
}
const getSubTotal = (state, key) => {
  const {value = 0, volume = 0} = state.cryptos.find(e => e.name === key)
  return (value * volume * state.fiats[state.currentFiat]) || 0
}

const getSymbol = fiat => {
  switch (fiat) {
    case 'GBP':
      return '£'
    case 'CNY':
      return '¥'
    case 'EUR':
      return '€'
    default:
      return '$'
  }
}
