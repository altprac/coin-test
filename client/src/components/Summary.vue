<template>
   <div class="row">
     <div class="col text-center">
      <h1>{{total}}</h1>
      Your current balance
      <h1>{{process.env.MAINTENANCE}}</h1>
      </div>
  </div>
</template>

<script>
export default {
  props: ['total']
}
</script>

<style>
</style>
