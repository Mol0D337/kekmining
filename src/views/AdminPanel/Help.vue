<template>
  <div class="bcg">
    <NavBar/>
    <ToolBar/>
  </div>
</template>

<script>
  import NavBar from "../../components/MyAdminPanel/NavBar";
  import ToolBar from "../../components/MyAdminPanel/ToolBar";
  export default {
    name: "Help",
    components: {ToolBar, NavBar}
  }
</script>

<style scoped lang="sass">
  .bcg
    background: $color-grey

</style>
