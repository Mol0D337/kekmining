<template>
  <div class="inner">
    <div class="navigation" :class="openToolBar ? 'active' : ''">
      <div class="navigation__inner">
        <div class="logo">
          <SvgIcon name="1"/>
        </div>
        <div class="avatar">
          <img src="../../assets/images/imgPage/avatar.png" alt="">
        </div>
        <div class="email"
             v-for="c of categories"
        >
          {{c.email}}
        </div>
        <div>
          <router-link
            tag="div"
            class="link"
            :to="{ name: 'BuyHash' }"
          >
            Купить хэшрейт
          </router-link>
          <router-link
            tag="div"
            class="link"
            :to="{ name: 'PersonalOffice' }"
          >
            Личный кабинет
          </router-link>
          <router-link
            tag="div"
            class="link"
            :to="{ name: 'Referrals' }"
          >
            Рефералы
          </router-link>
          <router-link
            tag="div"
            class="link"
            :to="{ name: 'History' }"
          >
            История
          </router-link>
          <router-link
            tag="div"
            class="link"
            :to="{ name: 'Wallets' }"
          >
            Кошельки
          </router-link>
          <router-link
            tag="div"
            class="link"
            :to="{ name: 'Transactions' }"
          >
            Транзакции
          </router-link>
          <router-link
            tag="div"
            class="link"
            :to="{ name: 'Settings' }"
          >
            Настройки
          </router-link>
          <router-link
            tag="div"
            class="link"
            :to="{ name: 'Help' }"
          >
            Помощь
          </router-link>
        </div>
      </div>
    </div>
    <button id="show" @click="openToolBar = !openToolBar" :class="openToolBar ? 'active' : ''">
      <SvgIcon style="width: 35px; height: 35px" name="31"/>
    </button>
  </div>
</template>

<script>
  import SvgIcon from "../../elements/SvgIcon";
  export default {
    components: {SvgIcon},
    data: () => ({
      categories: [],
      openToolBar: false,
    }),
    async mounted() {
      this.categories = await this.$store.dispatch('fetchCategories')
    },
  }
</script>

<style scoped lang="sass">

  #show
    border: 0
    outline: none
    cursor: pointer
    position: absolute
    top: 5px
    left: 5px
    transition-delay: 0s
    transition: all 300*1ms linear

    &.active
      border: 0
      outline: none
      cursor: pointer
      position: absolute
      top: 5px
      left: 300px
      transition-delay: 0s
      transition: all 300*1ms linear

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
        background: linear-gradient(to right top, #1b2048, #272e74, #2b3384)
        transform: translate(0, 0)
        transition: transform 300*1ms linear, background-color 0s linear (300*2-1)*1ms
        &:after
          width: 300%


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

      background: linear-gradient(to right top, #1b2048, #272e74, #2b3384)
      z-index: -1
      transition: all 300*1ms linear

</style>
