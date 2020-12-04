<template>
  <div>
    <div id="nav" class="navigation"
         :class="openToolBar ? 'active' : ''"
    >
      <div class="navigation__inner" >
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </div>
    </div>
    <button id="show" @click="openToolBar = !openToolBar">Toggle Menu</button>
  </div>

</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        openToolBar: false,
      }
    }
  }
</script>

<style scoped lang="sass">

  #show
    background-color: #7c7fe0
    border: 0
    color: #fff
    padding: 10px 20px
    text-transform: uppercase
    cursor: pointer
    outline: none
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

  .navigation
    position: fixed
    width: 300px
    height: 100%
    top: 0
    overflow-y: auto
    overflow-x: hidden
    opacity: 0
    visibility: hidden
    z-index: 99
    transition-delay: 300ms

    &.active
      opacity: 1
      visibility: visible
      transition-delay: 0s
      .navigation__inner
        background-color: #7c7fe0
        transform: translate(0, 0)
        transition: transform 300*1ms linear, background-color 0s linear (300*2-1)*1ms
        &:after
          width: 300%
          animation: elastic (300/2)*1ms ease (300+0.5)*1ms both

  .navigation__inner
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    overflow: hidden
    z-index: 999999

    @if (left == left)
      transform: translate(-100%, 0)

    transition: transform 300*1ms linear, background-color 0s linear 300*1ms
    &:after
      content: ''
      position: absolute
      width: 0
      height: 100%
      top: 0

      @if (left == left)
        right: 0

      background-color: #7c7fe0
      border-radius: 50%
      z-index: -1
      transition: all 300*1ms linear


  @keyframes elastic
    0%
      border-radius: 50%

    45%
      border-radius: 0

    65%

      @if (left == left)
        border-top-right-radius: 40px 50%
        border-bottom-right-radius: 40px 50%

    80%
      border-radius: 0

    90%

      @if (left == left)
        border-top-right-radius: 20px 50%
        border-bottom-right-radius: 20px 50%


    100%
      border-radius: 0


</style>
