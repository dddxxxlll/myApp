<template lang="html">
  <div class="food" v-show="showDetail">

  </div>
</template>

<script>
  export default {
    props: {
      food: Object
    },
    data() {
      return {
        showDetail: false
      }
    },
    methods: {
      addCart(event) {
        if (!event._constructed) {
          return
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .food
    position fixed
    left 0
    top 0
    right 0
    bottom 48px
    width 100%
    background white
    z-index 30
</style>
