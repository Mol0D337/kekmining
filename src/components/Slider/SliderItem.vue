<template>
  <div class="card">
    <div class="card__top">
      <img :src=" require('../../assets/images/imgPage/1.png') " alt="">
      <div class="name">{{item_data.name}}</div>
      <div class="data">{{item_data.data}}</div>
    </div>
    <div class="card__bottom">
      <div class="text">
        <i>
          {{item_data.text}}
        </i>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "SliderItem",
    props: {
      item_data: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="sass">
  .card
    margin: 0 15px
    width: 375px
    height: 200px
    border-radius: 4px
    background: #FFFFFF
    padding: 20px
    +reg
    font-size: 17px

    &__top
      display: flex
      align-items: center

      img
        width: 50px
        height: 50px
        border-radius: 99px

    &__bottom
      margin-top: 15px
      font-size: 15px
      line-height: 1.6

  .name
    margin-left: 15px

  .data
    margin-left: 20px
    color: $color-input-text
    font-size: 15px
</style>
