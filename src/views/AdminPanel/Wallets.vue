<template>
  <div class="bcg">
    <NavBar/>

    <div class="wrapper__content">
      <div class="text"><b>{{$t('any.wallets')}}</b></div>
      <DropDown
        :title="$t('any.myWalletsInner')"
        :initial-value="true"
      >
        <WrapperTable/>
      </DropDown>
      <DropDown
        style="padding-bottom: 100px"
        :title="$t('any.myWalletsWrapper')"
        :initial-value="true"
      >
        <TableWallets/>
      </DropDown>
    </div>

    <ToolBar/>
  </div>
</template>

<script>
  import NavBar from "../../components/MyAdminPanel/NavBar";
  import ToolBar from "../../components/MyAdminPanel/ToolBar";
  import DropDown from "../../components/DropDown/DropDown";
  import TableWallets from "../../components/Table/Wallets/TableWallets";
  import WrapperTable from "../../components/Table/Wallets/WrapperTable";
  export default {
    name: "Wallets",
    components: {WrapperTable, TableWallets, DropDown, ToolBar, NavBar}
  }
</script>

<style scoped lang="sass">
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
