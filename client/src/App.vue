<template>
  <div id="app" class="container"> 
    <fiat-component :fiats ="fiats" :currentFiat="currentFiat" />
    <summary-component :total="total"/>
    <details-component :cryptos="cryptos"/>
    <footer class="text-center small">
      Data provided by <a href ="https://www.cryptocompare.com"  target="_blank">cryptocompare.com</a> and <a href ="https://free.currencyconverterapi.com/" target="_blank">free.currencyconverterapi.com</a>
    </footer>
  </div>
</template> 

<script>
import { mapGetters, mapActions } from 'vuex'
import FiatComponent from './components/Fiat'
import SummaryComponent from './components/Summary'
import DetailsComponent from './components/Details'
 
export default {
  components: {
    FiatComponent,
    SummaryComponent, 
    DetailsComponent
  },
  computed: mapGetters({
    fiats: 'getFiats',
    currentFiat: 'getCurrentFiat',
    total: 'getTotal',
    cryptos: 'getCryptos'
  }),
  methods: mapActions([
    'initialise',
    'updateCrypto',
    'updateFiat'
  ]),
  created () {
    this.$options.sockets.initialise = (data) => this.initialise(data)
    this.$options.sockets.crypto = (data) => this.updateCrypto(data)
    this.$options.sockets.fiat = (data) => this.updateFiat(data)
  }
}
</script>

<style>
html,
body {
    height: 100%;
}
.container {
    height: 100%;
    justify-content: center;
    align-items: center;
}
</style> 
