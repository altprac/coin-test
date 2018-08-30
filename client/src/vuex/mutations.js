import * as types from './mutation_types'

export default{
  [types.INITIALISE] (state, data) {
    state.fiats = {...state.fiats, ...data.fiats}
    if (!state.cryptos.length) {
      for (const coin in data.cryptos) {
        state.cryptos.push({name: coin, value: data.cryptos[coin], volume: 0})
      }
    } else {
      // data already initialised so just update
      for (const coin in data.cryptos) {
        updateCrypto(state.cryptos, coin, data.cryptos[coin])
      }
    }
  },
  [types.SET_FIAT] (state, data) {
    state.currentFiat = data
  },
  [types.UPDATE_CRYPTO] (state, data) {
    updateCrypto(state.cryptos, data[0], data[1])
  },
  [types.UPDATE_FIAT] (state, data) {
    state.fiats = {...state.fiats, ...data}
  }
}
const updateCrypto = (cryptos, key, value) => {
  const val = cryptos.find(e => e.name === key)
  if (val) {
    val.value = value
  }
}
