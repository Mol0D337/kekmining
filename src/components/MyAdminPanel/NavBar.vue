<template>
  <div class="wrapper">
    <Tool-bar/>

    <div class="nav__bar">
      <SvgIcon style="width: 35px; height: 35px" name="37"/>
      <div class="nav__bar-text"><b>RU</b></div>
      <SvgIcon style="cursor: pointer" name="48"/>
      <SvgIcon style="width: 35px; height: 35px; " name="36"/>
      <div @click.prevent="logout" class="nav__bar-text"><b>Выйти</b></div>
    </div>

  </div>
</template>

<script>
  import SvgIcon from "../../elements/SvgIcon";
  import ToolBar from "./ToolBar";
  export default {
    name: "NavBar",
    components: {ToolBar, SvgIcon},
    methods: {
      async logout() {
        await this.$store.dispatch('logout');
        localStorage.setItem('userAuth', 'no');
        this.$router.push('/');
      }
    },
  }
</script>

<style scoped lang="sass">
  .wrapper
    user-select: none
    display: flex
    align-items: center
    justify-content: space-between
    padding: 5px 60px 0 10px

  .nav__bar
    display: flex
    align-items: center

    &-text
      cursor: pointer
      +reg
      font-size: 15px
</style>
