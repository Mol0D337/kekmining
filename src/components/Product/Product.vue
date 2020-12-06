<template>
  <div class="product">
    <div class="img">
      <img :src=" require('../../assets/images/imgIcons/' + product_data.image) " alt="">
    </div>
    <div class="product__title"><b>{{product_data.name}}</b></div>
    <div class="product__min">Minimal hashrate: <b>{{product_data.min}}</b></div>
    <div class="product__pay">Payment for maintenance: <br/><b>{{product_data.pay}}</b></div>
    <div class="product__equipment">Equipment: <b>{{product_data.equipment}}</b></div>


    <input type="range" min="0" max="100" step="1" value="0">

    <div class="product__price"><b>{{product_data.price}}</b></div>
    <button class="btn btn-card">
      <span>Get started</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: "Product",
    data() {
      return {
        inputNum: 10,
      }
    },
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
    margin: 20px
    text-align: center
    background: $color-white
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05)
    +reg
    font-size: 18px
    line-height: 1.5

    &:hover
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.15)
    &__title
      font-size: 23px
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
      font-size: 23px

  .btn
    margin-bottom: 20px

  .img
    width: 100%
    height: 120px
    padding-top: 40px
    padding-bottom: 20px


  input
    margin: 40px 0 40px


</style>
