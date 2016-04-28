<style>
  .alert-icon-float-left {
    font-size:32px;float:left;margin-right:5px;
  }
</style>


<template>
  <div class="bs-docs-section" id="alert">
    <h1 class="page-header">
      <a href="#alert" class="anchor">Hello World</a>
    </h1>
    <div class="bs-example" >
      <button class="btn btn-success btn-lg" @click="showRight = !showRight">Right</button>
      <button class="btn btn-danger btn-lg" @click="showTop = !showTop">Top</button>
      <button class="btn btn-default btn-lg"  @click="showRight = !showRight">Right</button>
      <button class="btn btn-default btn-lg"  @click="showTop = !showTop">Top</button>


      <alert
        :show.sync="showRight"
        :duration="3000"
        type="success"
        width="400px"
        placement="top-right"
        dismissable
      >
        <span class="icon-ok-circled alert-icon-float-left"></span>
        <strong>Well Done!</strong>
        <p>You successfully read this important alert message.</p>
      </alert>


      <alert
        :show.sync="showTop"
        :duration="3000"
        type="danger"
        width="400px"
        placement="top"
        dismissable>
        <span class="icon-info-circled alert-icon-float-left"></span>
        <strong>Heads up!</strong>
        <p>This alert needs your attention.</p>
      </alert>

    </div>

</template>

<script>
  alert = require('vue-strap/src/Alert.vue')
  export default {
    data() {
      return {
        showRight: false,
        showTop: false
      }
    },
    components: {
      alert,
    }
  }
</script>