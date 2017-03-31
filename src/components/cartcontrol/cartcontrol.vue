<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <span class="icon-remove_circle_outline inner"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart() {
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
      },
      decreaseCart() {
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size 0
    .cart-decrease
      transition all .4s linear
      display inline-block
      padding 6px
      .inner
        line-height 24px
        font-size 24px
        color rgb(0, 160, 220)
        transition all .4s linear
      &.move-enter-active, &.move-leave-active
        opacity 1
        transform translate3D(0, 0, 0)
        .inner
          display inline-block
          transform rotate(0)
      &.move-enter, &.move-leave-active
        transform translate3D(24px, 0, 0)
        opacity 0
        .inner
          transform rotate(180deg)
    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147, 153, 159)
    .cart-add
      display inline-block
      line-height 24px
      font-size 24px
      padding 6px
      color rgb(0, 160, 220)
</style>
