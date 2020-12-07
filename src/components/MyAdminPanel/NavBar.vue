<template>
  <div class="wrapper">
    <Tool-bar/>

    <div class="nav__bar">
      <div class="sel" @click="selectLang = !selectLang">
        <SvgIcon style="width: 35px; height: 35px" name="37"/>
        <div class="nav__bar-text"><b>{{selected}}</b></div>
        <div class="column"
          v-if="selectLang"
        >
          <div class="nav"
               v-for="element in lang"
               :key="element.value"
               @click="selectOption(element)"
          >
            <b>{{element.name}}</b>
          </div>
        </div>
        <SvgIcon style="cursor: pointer" name="48"/>
      </div>

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
    data() {
      return {
        selectLang: false,
        selected: 'Язык',
        lang: [
          {name: 'RU'},
          {name: 'UK'},
          {name: 'IT'},
          {name: 'EN'},
        ]
      }
    },
    methods: {
      async logout() {
        await this.$store.dispatch('logout');
        localStorage.setItem('userAuth', 'no');
        this.$router.push('/');
      },
      selectOption(element) {
        this.selected = element.name;
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
    padding: 5px 60px 0 10px

  .nav
    cursor: pointer
    +reg
    font-size: 15px

  .nav__bar
    display: flex
    align-items: center

    &-text
      cursor: pointer
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
