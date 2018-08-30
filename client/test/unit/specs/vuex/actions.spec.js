import { INITIALISE, SET_FIAT, UPDATE_CRYPTO, UPDATE_FIAT } from '@/vuex/mutation_types'
import actions from '@/vuex/actions'

const commit = (type, data) => ({type, data})

describe('actions.js', () => {
  it('should test that commit is called with correct parameters', () => {
    expect(actions.initialise({commit}, {crypto: {}, fiat: {}})).toEqual({type: INITIALISE, data: {crypto: {}, fiat: {}}})
    expect(actions.updateCrypto({commit}, ['BTC', 120])).toEqual({type: UPDATE_CRYPTO, data: ['BTC', 120]})
    expect(actions.updateFiat({commit}, {'AUD': 1.3})).toEqual({type: UPDATE_FIAT, data: {'AUD': 1.3}})
    expect(actions.setFiat({commit}, {target: {value: 'AUD'}})).toEqual({type: SET_FIAT, data: 'AUD'})
  })
})
