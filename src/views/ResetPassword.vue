<template>
  <div class="bcg">
    <div class="reset">

      <div class="modal__top">
        <img src="../assets/images/backgroundM/5.svg" alt="">
        <div class="modal__title">Востановление пароля</div>
      </div>

      <form @submit.prevent="submit">

        <div class="inputs" :class="{ 'form-group--error': $v.password.$error }">
          <div>Пароль:</div>
          <input class="input" type="password"
                 v-model.trim="$v.password.$model"
          >
        </div>

        <div class="inputs" :class="{ 'form-group--error': $v.repeatPassword.$error }">
          <div>Повторите пароль:</div>
          <input class="input" type="password"
                 v-model.trim="$v.repeatPassword.$model"
          >
        </div>

        <div class="btn__wrapper">
          <button type="submit" class="btn btn-main" :disabled="submitStatus === 'PENDING'">
            <span>Изменить</span>
          </button>
        </div>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Что то пошло не так((</p>

        <div class="link">
          <router-link
            :to="{ name: 'MainPage' }"
            tag="div"
            class="link__right"
          >
            На главную
          </router-link>
        </div>
      </form>

      <div class="nickname"
           v-for="c of categories"
      >
        {{c.email}}
      </div>

    </div>
  </div>

</template>

<script>
  import { required, minLength, maxLength, sameAs} from 'vuelidate/lib/validators'
  export default {
    name: "Reset",
    data: () => ({
      categories: [],
      password: '',
      repeatPassword: '',
      submitStatus: null,
    }),
    async mounted() {
      this.categories = await this.$store.dispatch('fetchCategories')
    },
    validations: {
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(15),
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    },
    methods: {
      async submit() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          try {
            const password = {password: this.password};
            await this.$store.dispatch('updateCategory3', password);
            this.$router.push('/');
          } catch (e) {
          }
        }
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
