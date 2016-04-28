var Vue = require('vue')
// var alert = require('vue-strap/src/Alert.vue')
var App = require('./app.vue')

var Alert = require('./alert.vue')

// var alert = require('vue-strap').alert;
// var alert = require('vue-strap/src/alert');

//https://github.com/yuche/vue-strap/issues/16#issuecomment-149401358

// var $ = require('jquery')
// require('bootstrap')


new Vue({
  el: 'body',
  components: {
    app: App,
    myalert: Alert
  }
})
