<template>
  <div class="bcg">
    <NavBar/>

    <div class="wrapper__content">
      <div class="text"><b>{{$t('any.personalOffice')}}</b></div>

      <div style="background-color: #FFFFFF; height: 200px; width: 500px">
        <vc-donut
          background="white" foreground="#e6e6e6"
          :size="200" unit="px" :thickness="27"
          :sections="sections" :total="100"
        >
          <div class="donut__num">28</div>
          <div class="donut__text">Общий хешрейт</div>
        </vc-donut>
      </div>

      <pure-vue-chart
        :points="[
        {label: '24.04', value: 0.7},
        {label: '25.04', value: 1.0},
        {label: '26.04', value: 0.9},
        {label: '27.04', value: 1.1},
        {label: '28.04', value: 1.3},
        {label: '29.04', value: 1.5},
        {label: '30.04', value: 1.0},
        ]"
        :show-y-axis="true"
        :show-x-axis="true"
        :width="300"
        :height="200"
        style="color: red"
      />



    </div>

    <ToolBar/>
  </div>
</template>

<script>
  import PureVueChart from 'pure-vue-chart'
  import NavBar from "../../components/MyAdminPanel/NavBar";
  import ToolBar from "../../components/MyAdminPanel/ToolBar";
  export default {
    name: "PersonalOffice",
    components: {ToolBar, NavBar, PureVueChart},
    data() {
      return {
        sections: [
          { value: 54, color: '#359c09' }
        ]
      };
    }
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
