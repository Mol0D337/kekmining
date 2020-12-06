<template>
  <div class="bcg">
    <NavBar/>
    <ToolBar/>
    <div class="text" style="margin: 0 auto; width: 1250px"><b>Купить хэшрейт</b></div>
    <Products style="margin: 0 auto; width: 1250px; padding-bottom: 100px"/>
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

  .text
    padding: 30px 0 10px 20px
    +reg
    font-size: 34px




</style>
