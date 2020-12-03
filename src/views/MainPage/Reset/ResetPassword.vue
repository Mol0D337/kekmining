<template>
  <div class="bcg">
    <div class="reset">

      <div class="modal__top">
        <img src="../../../assets/images/backgroundM/5.svg" alt="">
        <div class="modal__title">Востановление пароля</div>
      </div>

      <form action="" @submit.prevent="passwordHandler">
        <div class="fix__name" >
          <input type="password" v-model="password" placeholder="Введите Новый Пароль">
          <button class="btn__fix" >Изменить Пароль</button>
        </div>
      </form>

      <div class="nickname"
           v-for="c of categories"
      >
        {{c}}
      </div>

    </div>
  </div>

</template>

<script>

  export default {
    name: "Reset",
    data: () => ({
      categories: [],
    }),
    async mounted() {
      this.categories = await this.$store.dispatch('fetchCategories');

      if (!Object.keys(this.$store.getters.info).length) {
        await this.$store.dispatch('fetchInfo')
      }
    },
    methods: {
      async passwordHandler() {
        const password = {password: this.password};
        await this.$store.dispatch('updateCategory3', password);
        alert('3')
      },
    },
    computed: {
      password: {
        get () {
          return this.$store.getters.getPassword;
        },
        set (value) {
          this.$store.commit('SET_PASSWORD', value);
        }
      },
    }
  }
</script>

<style scoped lang="sass">
  .link
    display: flex
    justify-content: center
    align-items: center
    padding-bottom: 15px
    +extraB
    font-size: 14px

    &__left
      color: #8b19aa
      cursor: pointer
    &__right
      color: #8b19aa
      cursor: pointer


  .btn__wrapper
    display: flex
    justify-content: center
    margin-top: 20px
    padding-bottom: 25px

  form
    margin: 0 auto
    width: 320px

  .inputs
    width: 100%

    div
      +reg
      font-size: 12px
      color: $color-black
      margin-bottom: 8px
      padding-left: 3px

    .input
      width: 100%
      margin-bottom: 10px
      +reg
      font-size: 14px

  .typo__p
    padding-bottom: 25px
    text-align: center
    +extraB
    font-size: 16px
    color: $color-massage-blue

  .bcg
    display: flex
    justify-content: center
    align-items: center
    width: 100vw
    height: 100vh
    background: repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)

  .modal
    background: $color-white
    &__top
      position: relative
    &__top img
      width: 100%

    &__title
      +reg
      color: $color-white
      font-size: 26px
      display: flex
      justify-content: center
      align-items: center
      position: absolute
      top: 35px
      left: 22%


  .reset
    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)
    background: $color-white
    width: 480px
    margin: 0 auto

</style>
