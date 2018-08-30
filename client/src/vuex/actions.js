import { INITIALISE, SET_FIAT, UPDATE_CRYPTO, UPDATE_FIAT } from './mutation_types'

export default {
  initialise: ({ commit }, data) => commit(INITIALISE, data),
  updateCrypto: ({ commit }, data) => commit(UPDATE_CRYPTO, data),
  updateFiat: ({ commit }, data) => commit(UPDATE_FIAT, data),
  setFiat: ({ commit }, data) => commit(SET_FIAT, data.target.value)
}
