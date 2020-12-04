<template>
  <div class="bcg">
    <NavBar/>
    <ToolBar/>
    <Products style="margin: 0 auto; width: 1250px"/>
  </div>
</template>

<script>
  import NavBar from "../../components/MyAdminPanel/NavBar";
  import ToolBar from "../../components/MyAdminPanel/ToolBar";
  import Products from "../../components/Product/Products";
  export default {
    name: "BuyHash",
    components: {Products, ToolBar, NavBar}
  }
</script>

<style scoped lang="sass">
  .bcg
    background: $color-grey

</style>
