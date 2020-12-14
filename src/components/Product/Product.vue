<template>
  <div class="product">
    <div class="img">
      <img :src=" require('../../assets/images/imgIcons/' + product_data.image) " alt="">
    </div>
    <div class="product__title"><b>{{product_data.name}}</b></div>
    <div class="product__min">{{$t('product.min')}} <b>{{product_data.min}} {{product_data.minText}}</b></div>
    <div class="product__pay">{{$t('product.pay')}} <br/><b>{{product_data.pay}}</b></div>
    <div class="product__equipment">{{$t('product.equipment')}} <b>{{product_data.equipment}}</b></div>


    <div class="kek">
      <div class="lol" :style="{'left': + (24 * inputNum) + 'px'}">{{product_data.min * (inputNum)}} {{product_data.minText}}</div>
      <input style="width: 300px;"
             type="range" min="1" max="10" step="1" v-model="inputNum">
    </div>


    <div class="product__price"><b>${{product_data.price * product_data.min * (inputNum)}}</b></div>


    <router-link
      :to="{name: 'BuyCard'}"
    >
      <button class="btn btn-card">
        <span>{{$t('product.button')}}</span>
      </button>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: "Product",
    data() {
      return {
        inputNum: 1,
      }
    },
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
  .lol
    width: 100px
    position: relative
    left: 0
    top: 35px

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
