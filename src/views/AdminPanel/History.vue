<template>
  <div class="bcg">
    <NavBar/>

    <div class="wrapper__content">
      <div class="text"><b>{{$t('any.referrals')}}</b></div>

      <DropDown
        :title="$t('any.codes')"
        :initial-value="true"
      >
        <button style="margin: 20px 0 20px 17px" class="btn btn-table-1">
          <span>{{$t('table.addNewCode')}}</span>
        </button>

        <Table/>


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
    name: "History",
    components: {DropDown, ToolBar, NavBar},
    data() {
      return {
        date: ''
      };
    },
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
