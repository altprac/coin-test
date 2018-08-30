import mutations from '@/vuex/mutations'
import {INITIALISE, SET_FIAT, UPDATE_CRYPTO, UPDATE_FIAT} from '@/vuex/mutation_types'

describe('mutations.js', () => {
  let state = {
    currentFiat: 'USD',
    fiats: {USD: 1},
    cryptos: []
  }
  describe('INITIALISE', () => {
    it('should populate fiats and cryptos', () => {
      mutations[INITIALISE](state, {cryptos: {BTC: 110, ETH: 1}, fiats: {AUD: 1.2, GDP: 0.9}})
      expect(state.fiats).toEqual({USD: 1, AUD: 1.2, GDP: 0.9})
      expect(state.cryptos).toEqual([{name: 'BTC', value: 110, volume: 0}, {name: 'ETH', value: 1, volume: 0}])
    })
    it('should update fiats and cryptos', () => {
      mutations[INITIALISE](state, {cryptos: {BTC: 100, ETH: 1}, fiats: {AUD: 1.2, GDP: 0.8}})
      expect(state.fiats).toEqual({USD: 1, AUD: 1.2, GDP: 0.8})
      expect(state.cryptos).toEqual([{name: 'BTC', value: 100, volume: 0}, {name: 'ETH', value: 1, volume: 0}])
    })
  })
  describe('SET_FIAT', () => {
    it('should change current fiat', () => {
      mutations[SET_FIAT](state, 'AUD')
      expect(state.currentFiat).toEqual('AUD')
    })
  })
  describe('UPDATE_CRYPTO', () => {
    it('should update crypto', () => {
      mutations[UPDATE_CRYPTO](state, ['BTC', 120])
      expect(state.cryptos).toEqual([{name: 'BTC', value: 120, volume: 0}, {name: 'ETH', value: 1, volume: 0}])
    })
    it('should do nothing', () => {
      mutations[UPDATE_CRYPTO](state, ['BTx', 120])
      expect(state.cryptos).toEqual([{name: 'BTC', value: 120, volume: 0}, {name: 'ETH', value: 1, volume: 0}])
    })
  })
  describe('UPDATE_FIAT', () => {
    it('should update fiat', () => {
      mutations[UPDATE_FIAT](state, {'AUD': 1.3})
      expect(state.fiats).toEqual({USD: 1, AUD: 1.3, GDP: 0.8})
    })
  })
})
