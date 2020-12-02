<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-layout row justify-center>
    <v-dialog
      v-model="dialog2"
      persistent
      max-width="480px"
    >
      <template v-slot:activator="{ on2 }">
        <button
          class="btn btn-r"
          v-on="on2"
          @click="dialog2 = true"
        >
          <span>registration</span>
        </button>
      </template>

      <form class="modal" @submit.prevent="submit">
        <div class="modal__wrapper">

          <div class="modal__top">
            <img src="../assets/images/backgroundM/5.svg" alt="">
            <div class="modal__title">Регистрация учасников</div>

            <div class="clear" @click="closeModal2">&times;</div>

          </div>

          <div class="modal__bottom">
            <div class="modal__bottom-wrapper">

              <div class="inputs" :class="{ 'form-group--error': $v.name.$error }">
                <div>Имя:</div>
                <input class="input" type="text" v-model.trim="$v.name.$model">
              </div>

              <div class="inputs" :class="{ 'form-group--error': $v.email.$error }">
                <div>Электронный адрес:</div>
                <input class="input" type="text"
                       v-model.trim="$v.email.$model"
                >
              </div>

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
                <button class="btn btn-main" type="submit" :disabled="submitStatus === 'PENDING'">
                  <span>Зарегистрироваться</span>
                </button>
              </div>

              <p class="typo__p" v-if="submitStatus === 'ERROR'">Что то пошло не так((</p>

            </div>
          </div>
        </div>
      </form>
    </v-dialog>
  </v-layout>
</template>

<script>
  import { required, minLength, email, sameAs, maxLength} from 'vuelidate/lib/validators'
  export default {
    name: 'Registration',
    data() {
      return {
        dialog2: false,
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        submitStatus: null,
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(50),
      },
      email: {
        email,
        required,
        minLength: minLength(4),
        maxLength: maxLength(254),
      },
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
      closeModal2() {
        this.dialog2 = false;
      },
      async submit() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          const formData = {
            name: this.name,
            email: this.email,
            password: this.password
          };
          try {
            await this.$store.dispatch('register', formData);
            this.$router.push('/set');
            localStorage.setItem('userAuth', 'yes');
          } catch (e) {
          }
        }
      },
    }
  }
</script>

<style scoped lang="sass">
    .typo__p
      padding-bottom: 25px
      text-align: center
      +extraB
      font-size: 16px
      color: $color-massage-blue

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
        left: 22%

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
      padding-bottom: 25px

    .btn-main
      width: 240px

</style>
