<template>
  <div class="bcg">
    <NavBar/>

    <div style="padding-bottom: 1000px">
      <label>English DatePicker :</label>


    </div>

    <ToolBar/>
  </div>
</template>
<script>
  import NavBar from "../../components/MyAdminPanel/NavBar";
  import ToolBar from "../../components/MyAdminPanel/ToolBar";
  export default {
    name: "History",
    components: {ToolBar, NavBar},
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

</style>
