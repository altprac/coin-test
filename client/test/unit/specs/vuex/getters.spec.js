import getters from '@/vuex/getters'

describe('getters.js', () => {
  let state = {
    currentFiat: 'USD',
    fiats: {USD: 1, GBP: 0.8, CNY: 10, EUR: 0.9},
    cryptos: [{name: 'BTC', value: 100, volume: 10}, {name: 'ETH', value: 1, volume: 2}]
  }

  describe('getFiats', () => {
    it('should return all fiats', () => {
      expect(getters.getFiats(state)).toEqual({USD: 1, GBP: 0.8, CNY: 10, EUR: 0.9})
    })
  })
  describe('getCurrentFiat', () => {
    it('should return current fiat', () => {
      expect(getters.getCurrentFiat(state)).toEqual('USD')
    })
  })
  describe('getCryptos', () => {
    it('should return all cryptos', () => {
      expect(getters.getCryptos(state)).toEqual([{name: 'BTC', value: 100, volume: 10}, {name: 'ETH', value: 1, volume: 2}])
    })
  })
  describe('getTotal', () => {
    it('should return the total', () => {
      expect(getters.getTotal(state, getters)).toEqual('$1002.00')
    })
  })
  describe('getCoinTotal', () => {
    it('should return a subtotal', () => {
      expect(getters.getCoinTotal(state)('BTC')).toEqual('$1000.00')
      state.currentFiat = 'GBP'
      expect(getters.getCoinTotal(state)('BTC')).toEqual('£800.00')
      state.currentFiat = 'CNY'
      expect(getters.getCoinTotal(state)('BTC')).toEqual('¥10000.00')
      state.currentFiat = 'EUR'
      expect(getters.getCoinTotal(state)('BTC')).toEqual('€900.00')
      state.currentFiat = 'AUD'
      expect(getters.getCoinTotal(state)('BTC')).toEqual('$0.00')
    })
  })
})
