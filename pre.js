console.log('env',process.env.VUE_APP_ENABLE_MAINTENANCE);
console.log('prehook', process.env.WEBHOOK_TITLE);
if(process.env.WEBHOOK_TITLE ==='Maintenance'){
  process.env.VUE_APP_ENABLE_MAINTENANCE = true
}
console.log('env',process.env.VUE_APP_ENABLE_MAINTENANCE);
