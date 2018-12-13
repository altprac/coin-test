<template>
  <div>
    <ul>
      <div class="row">
        <div class ="col">Coin {{process.env.MAINTENANCE}} XX</div>
        <div class ="col">Amount</div>
        <div class ="col">Total</div>
      </div>
      <coin-component v-for="coin in cryptos" :coin="coin" :key="coin.name"></coin-component>
    </ul>
  </div>
</template>

<script>
import CoinComponent from './Coin'
export default {
  props: ['cryptos'],
  components: {
    CoinComponent
  }
}
</script>

<style>
</style>
