<template>
  <div class="product">
    <img src="../../assets/images/imgIcons/18.png" alt="">
    <div class="product__title"><b>Bitcoin</b></div>
    <div class="product__min">Minimal hashrate: <b>500 Gh/s</b></div>
    <div class="product__pay">Payment for maintenance: <br/><b>0.0010000000 / 1 Gh/s / 1h</b></div>
    <div class="product__equipment">Equipment: <b>SHA-256</b></div>
    <input type="range" min="0" max="100" step="1" value="0">
    <div class="product__price"><b>$250</b></div>
    <button class="btn btn-card">
      <span>Get started</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: "Product",
    components: {},
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      },
    },
  }
</script>

<style scoped lang="sass">
  .product
    margin: 30px
    text-align: center
    background: $color-white
    width: 300px
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05)
    +reg
    font-size: 15px
    line-height: 1.5

    &:hover
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.1)
    img
      margin-top: 15px
      margin-bottom: 10px
    &__title
      font-size: 20px
    &__min
      margin-top: 10px
      margin-bottom: 10px
    &__pay
      margin-top: 10px
      margin-bottom: 10px
    &__equipment
      margin-bottom: 30px
    &__price
      margin-top: 20px
      margin-bottom: 15px
      font-size: 20px

  .btn
    margin-bottom: 20px
</style>
