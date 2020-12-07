<template>
  <div class="bcg">
    <NavBar/>

    <div class="wrapper__help">

      <DropDown
        title="Коды"
      >
        <div>124124124</div>
      </DropDown>

    </div>

    <ToolBar/>
  </div>
</template>

<script>
  import NavBar from "../../components/MyAdminPanel/NavBar";
  import ToolBar from "../../components/MyAdminPanel/ToolBar";
  import DropDown from "../../components/DropDown/DropDown";
  export default {
    name: "Help",
    components: {DropDown, ToolBar, NavBar},
  }
</script>

<style scoped lang="sass">
  .bcg
    background: $color-grey

  .wrapper__help
    width: 1210px
    margin: 0 auto

</style>
