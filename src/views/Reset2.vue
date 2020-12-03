<template>
  <div class="bcg">
    <div class="reset">

      <div class="modal__top">
        <img src="../assets/images/backgroundM/5.svg" alt="">
        <div class="modal__title">Востановление пароля</div>
      </div>

      <form @submit.prevent="submit">
        <div class="inputs" :class="{ 'form-group--error': $v.email.$error }">
          <div>Электронный адрес:</div>
          <input class="input" type="text"
                 v-model.trim="$v.email.$model"
          >
        </div>
        <div class="btn__wrapper">
          <button type="submit" class="btn btn-main" :disabled="submitStatus === 'PENDING'">
            <span>Отправить</span>
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

    </div>
  </div>

</template>

<script>
  import { required, minLength, email, maxLength} from 'vuelidate/lib/validators'
  export default {
    name: "Reset",
    data() {
      return {
        email: '',
        submitStatus: null,
      }
    },
    validations: {
      email: {
        email,
        required,
        minLength: minLength(4),
        maxLength: maxLength(254),
      },
    },
    methods: {
      async submit() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          const formData = {
            email: this.email,
          };
          try {
            await this.$store.dispatch('reset2', formData);
            // this.$router.push('/');
          } catch (e) {
          }
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
