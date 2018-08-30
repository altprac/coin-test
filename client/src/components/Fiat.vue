<template>
   <div class="row">
     <div class="col text-right">
      <select v-model="selectedItem" @change="update">
      <option v-for="(value, key) in fiats" :value="key" :key="key">
        {{ key}}
      </option>
    </select>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['fiats', 'currentFiat'],
  data () {
    return {
      selectedItem: this.currentFiat
    }
  },
  methods: mapActions({
    update: 'setFiat'
  })
}
</script>

<style>
</style>
