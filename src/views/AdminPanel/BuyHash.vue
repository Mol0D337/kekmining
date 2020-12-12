<template>
  <div class="bcg">
    <loader class="loader" v-if="loading"/>

    <div v-else>
      <NavBar/>

      <div class="wrapper__content">
        <div class="text"><b>{{$t('any.buyHash')}}</b></div>

        <Products style="padding-bottom: 100px"/>
      </div>

      <ToolBar/>
    </div>

  </div>
</template>

<script>
  import NavBar from "../../components/MyAdminPanel/NavBar";
  import ToolBar from "../../components/MyAdminPanel/ToolBar";
  import Products from "../../components/Product/Products";
  export default {
    name: "BuyHash",
    components: {Products, ToolBar, NavBar},
    data: () => ({
      loading: true,
    }),
    mounted() {
      this.loading = false
    }
  }
</script>

<style scoped lang="sass">
  .loader
    display: flex
    justify-content: center
    align-items: center
    width: 100vw
    height: 100vh

  .bcg
    background: $color-grey

  .wrapper__content
    margin: 0 auto
    width: 1250px

  .text
    padding: 30px 0 10px 20px
    +reg
    font-size: 34px




</style>
