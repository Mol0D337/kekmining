<template>
  <div class="wrapper">
    <Tool-bar/>

    <div class="nav__bar">
      <div class="sel" >
        <SvgIcon style="width: 35px; height: 35px" name="37"/>
        <div class="local">
          <div class="nav__bar-text" style="border-right: 2px solid black; padding-right: 10px"
               @click="setLocale('ru')"
          ><b>RU</b></div>
          <div class="nav__bar-text" @click="setLocale('en')"><b>EN</b></div>
        </div>
      </div>

      <SvgIcon style="width: 35px; height: 35px; " name="36"/>
      <div @click.prevent="logout" class="nav__bar-text"><b>{{$t('any.logout')}}</b></div>
    </div>

  </div>
</template>

<script>
  import SvgIcon from "../../elements/SvgIcon";
  import ToolBar from "./ToolBar";
  export default {
    name: "NavBar",
    components: {ToolBar, SvgIcon},
    data() {
      return {

      }
    },
    methods: {
      async logout() {
        await this.$store.dispatch('logout');
        localStorage.setItem('userAuth', 'no');
        this.$router.push('/');
      },
      setLocale(locale) {
        import(`../../locales/${locale}.json`).then((msgs) => {
          this.$i18n.setLocaleMessage(locale, msgs);
          this.$i18n.locale = locale;
        })
      },
    },
  }
</script>

<style scoped lang="sass">
  .wrapper
    user-select: none
    display: flex
    align-items: center
    justify-content: space-between
    padding: 5px 50px 0 10px

  .nav
    cursor: pointer
    +reg
    font-size: 15px

  .local
    display: flex
    justify-content: space-between
    align-items: center

  .nav__bar
    display: flex
    align-items: center

    &-text
      cursor: pointer
      margin-right: 10px
      +reg
      font-size: 15px

  .nav:hover
      background: rgba(255, 255, 255, 0.1)
      border-right: 1px solid #4bb5c5

  .sel
    align-items: center
    display: flex
    position: relative
    cursor: pointer


  .column
    justify-content: center
    text-align: center
    display: flex
    flex-direction: column
    position: absolute
    top: 30px
    right: 20px
    border: 1px solid $color-input-grey
    border-radius: 4px
    width: 45px


</style>
