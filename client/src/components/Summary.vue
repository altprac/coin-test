<template>
   <div class="row">
     <div class="col text-center">
      <h1>{{total}}</h1>
      Your current balance {{VUE_APP_ENABLE_MAINTENANCE}}
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
