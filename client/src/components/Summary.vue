<template>
   <div class="row">
     <div class="col text-center">
      <h1>XX {{process.env.MAINTENANCE}} XX</h1>
      Your current balance
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
