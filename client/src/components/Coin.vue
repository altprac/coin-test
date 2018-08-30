<template>
  <div class="row">
     <div class ="col">{{coin.name}}</div>
     <div class ="col"><input id="name"  type="number" v-model="coin.volume" min="0"></div>
     <div class ="col">{{getCoinTotal(coin.name)}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['coin'],
  computed: mapGetters([
    'getCoinTotal'
  ])
}
</script>

<style>
</style>
