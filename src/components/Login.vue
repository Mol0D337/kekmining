<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-dialog
    v-model="dialog"
    persistent
    max-width="480px"
    :class="dialog ? 'kek' : ''"
    @keydown.esc="closeModal"
    @click:outside="closeModal"
  >
    <template v-slot:activator="{ on }">
      <button class="btn btn-l"

              @click="dialog = true"
      >
        <span>entry</span>
      </button>
    </template>

    <form class="modal" @submit.prevent="submit">

      <div class="modal__wrapper"  >
        <div class="modal__top">
          <img src="../assets/images/backgroundM/5.svg" alt="">
          <div class="modal__title">Вход для Учасников</div>

          <div class="clear" @click="closeModal">&times;</div>

        </div>
        <div class="modal__bottom">
          <div class="modal__bottom-wrapper">

            <div class="inputs" :class="{ 'form-group--error': $v.email.$error }">
              <div>Электронный адрес:</div>
              <input class="input" type="text"
                     placeholder="UserEmail@kekmining.com"
                     v-model.trim="$v.email.$model"
              >
            </div>

            <div class="inputs" :class="{ 'form-group--error': $v.password.$error }">
              <div>Пароль:</div>
              <input class="input" type="password" placeholder="Password"
                     v-model.trim="$v.password.$model"
              >
            </div>

            <div class="btn__wrapper">
              <button class="btn btn-main" type="submit" :disabled="submitStatus === 'PENDING'">
                <span>Войти</span>
              </button>
            </div>

            <p class="typo__p" v-if="submitStatus === 'ERROR'">Неверный логин или пароль.</p>

            <div class="link">
              <router-link
                :to="{ name: 'Reset' }"
                tag="div"
                class="link__right"
              >
                Забыли пароль?
              </router-link>
            </div>
          </div>
        </div>

      </div>

    </form>
  </v-dialog>
</template>

<script>
  import { required, minLength, email, maxLength } from 'vuelidate/lib/validators'
  import Registration from "./Registration";
  import ClickOutside  from 'vue-click-outside'
  import { mapGetters } from 'vuex';

  export default {
    name: 'Login',
    computed: {
      ...mapGetters([
        'getModal',
        'getModalType',
        'getCancelHandler',
        'getAgreeHandler'
      ])
    },
    components: { Registration},
    data() {
      return {
        opened: false,
        dialog: false,
        email: '',
        password: '',
        submitStatus: null,
      }
    },
    validations: {
      email: {
        email,
        required,
        minLength: minLength(4)},
        maxLength: maxLength(254),
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(15),
      }
    },
    methods: {
      closeModal() {
        this.dialog = false
      },
      async submit() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          const formData = {
            email: this.email,
            password: this.password
          };
          try {
            await this.$store.dispatch('login', formData);
            this.$router.push('/set');
            localStorage.setItem('userAuth', 'yes');
          } catch (e) {}
        }
      },

    },
    directives: {
      ClickOutside
    },
  }
</script>

<style scoped lang="sass">
  .kek
    background: rgba(0, 0, 0, 0.5)
    height: 100vh
    width: 100%
    position: fixed
    top: 0
    left: 0
    &::v-deep
      .v-dialog
        border-radius: 0px !important

  .typo__p
    padding-bottom: 25px
    text-align: center
    +extraB
    font-size: 16px
    color: $color-massage-blue

  .btn-main
    width: 240px

  v-dialog
    border-radius: 0px
  .v-dialog__container
    display: block

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
      left: 25%

    &__bottom
      width: 320px
      margin: 0 auto

  .clear
    display: flex
    justify-content: center
    align-items: center
    color: $color-white
    font-size: 40px
    cursor: pointer
    position: absolute
    top: 5px
    right: 5px
    width: 40px
    height: 40px

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

  .btn__wrapper
    display: flex
    justify-content: center
    margin-top: 25px
    margin-bottom: 25px

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

</style>
