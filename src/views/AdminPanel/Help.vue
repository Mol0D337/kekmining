<template>
  <div class="bcg">
    <NavBar/>

    <div class="wrapper__help">

      <DropDown
      :title="$t('any.codes')"
      :initial-value="true"
    >
      <div>{{$t('form.hello')}}</div>
    </DropDown>

      <DropDown
        :title="$t('any.codes')"
      >
        <div>12414124</div>
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
