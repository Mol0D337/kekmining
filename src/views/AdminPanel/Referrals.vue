<template>
  <div class="bcg">
    <NavBar/>

    <div class="wrapper__content">
      <div class="text"><b>Referrals</b></div>
      <DropDown
        :title="$t('any.codes')"
        :initial-value="true"
      >
        <button style="margin: 20px 0 20px 17px" class="btn btn-table-1">
          <span>Добавить новый код</span>
        </button>
        <Table/>



        <input style="margin: 20px 0 20px 17px" type="text" class="input" placeholder="Поиск">
      </DropDown>

    </div>


    <ToolBar/>
  </div>
</template>

<script>
  import NavBar from "../../components/MyAdminPanel/NavBar";
  import ToolBar from "../../components/MyAdminPanel/ToolBar";
  import Table from "../../components/Table/Table";
  import DropDown from "../../components/DropDown/DropDown";
  export default {
    name: "Referrals",
    components: {DropDown, Table, ToolBar, NavBar}
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
