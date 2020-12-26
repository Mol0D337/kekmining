<template>
  <div class="bcg">
    <NavBar/>

    <div class="wrapper__content">
      <div class="text"><b>{{$t('any.transactions')}}</b></div>

      <DropDown
        :title="$t('table.trans')"
        :initial-value="true"
      >
        <TableH2/>
      </DropDown>
      <DropDown
        :title="$t('table.out')"
        :initial-value="true"
      >
        <TableT1/>
      </DropDown>

      <DropDown
        style="padding-bottom: 100px; margin-bottom: 0;"
        :title="$t('table.contracts')"
        :initial-value="true"
      >
        <TableH1/>
      </DropDown>

    </div>

    <ToolBar/>
  </div>
</template>

<script>
  import NavBar from "../../components/MyAdminPanel/NavBar";
  import ToolBar from "../../components/MyAdminPanel/ToolBar";
  import DropDown from "../../components/DropDown/DropDown";
  import TableH1 from "../../assets/images/imgPage/TableH1";
  import TableT1 from "../../components/Table/Transactions/TableT1";
  import TableH2 from "../../components/Table/History/TableH2";
  export default {
    name: "Transactions",
    components: {TableH2, TableT1, TableH1, DropDown, ToolBar, NavBar}
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
