<template>
  <div class="bcg">
    <NavBar/>

    <div class="wrapper__content">

      <div class="text"><b>{{$t('any.personalOffice')}}</b></div>

      <div class="office__wrapper">
        <div class="office__btn">
          <div class="office__btn-text">
            SHA - 256
            <svg-icon name="35" style="width: 32px; height: 32px; margin-left: 5px"/>
          </div>
          <div class="btn-lol">
            <button class="btn btn-table-1" style="margin-right: 10px">
              <span>Вывод</span>
            </button>
            <button class="btn btn-table-2">
              <span>Реинвестировать</span>
            </button>
          </div>
        </div>
        <div class="office__bottom">
          <div class="office__info">
            <div class="office__info-items">
              <div class="office__info-item">
                <div class="office__info-item-cycle"></div>
                <div class="office__info-item-num">0,03589639 BTC</div>
                <div class="office__info-item-content">Your BTC balance</div>
              </div>
              <div class="office__info-item">
                <div class="office__info-item-cycle"></div>
                <div class="office__info-item-num">0,00012164 BTC</div>
                <div class="office__info-item-content">Последняя SHA-256 Выплата</div>
              </div>
              <div class="office__info-item">
                <div class="pure__cycle"></div>
                <div class="office__info-item-num">0,00002164 BTC</div>
                <div class="office__info-item-content">Последняя Scrupt Выплата</div>
              </div>
            </div>
          </div>
          <div class="random">
            <trend-chart :datasets="datasets"
                         :width="850"
                         :grid="grid" :labels="labels"
                         :min="0" :interactive="true"
                         @mouse-move="onMouseMove"
                         class="random-chart">
            </trend-chart>
          </div>
        </div>
      </div>


      <div class="all__wrapper">
        <div class="donut__wrapper">
          <img src="../../assets/images/imgPage/ra.png" alt="">
          <vc-donut
            style="padding: 20px 0"
             foreground="#e6e6e6"
            :size="200" unit="px" :thickness="27"
            :sections="sections" :total="100"
          >
            <div class="donut__num"><b>28</b></div>
            <div class="donut__text">Общий хешрейт</div>
          </vc-donut>
        </div>
        <div class="pure__wrapper">
          <div class="pure__text">
            <div class="pure__cycle"></div>
            <div class="pure__content">Доходность за 1Gh/s</div>
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
            :width="350"
            :height="190"
            style="margin-left: 13px"
          />
        </div>
        <div class="income__wrapper">
          <div class="pure__text">
            <div class="income__cycle"></div>
            <div class="pure__content">Прогноз доходности</div>
          </div>
          <div class="income__items">
            <div class="income__item">
              <div class="income__item-cycle" style=" background-color: #c75650">1д</div>
              <div class="income__item-text">0,00384822 BTC = 52.74 USD</div>
            </div>
            <div class="income__item">
              <div class="income__item-cycle" style=" background-color: #4bb5c5">1н</div>
              <div class="income__item-text">0,02693756 BTC = 369.17 USD</div>
            </div>
            <div class="income__item">
              <div class="income__item-cycle" style=" background-color: #2b3384">1м</div>
              <div class="income__item-text">0,11544668 BTC = 1,582.16 USD</div>
            </div>
            <div class="income__item">
              <div class="income__item-cycle" style=" background-color: #8b1cb0">6м</div>
              <div class="income__item-text">0,69268010 BTC = 9,492.95 USD</div>
            </div>
            <div class="income__item">
              <div class="income__item-cycle" style=" background-color: #359c09">1г</div>
              <div class="income__item-text">1,40460131 BTC = 19.249 USD</div>
            </div>
          </div>
        </div>
      </div>





    </div>

    <ToolBar/>
  </div>
</template>

<script>
  import TrendChart from "vue-trend-chart";
  import PureVueChart from 'pure-vue-chart'
  import NavBar from "../../components/MyAdminPanel/NavBar";
  import ToolBar from "../../components/MyAdminPanel/ToolBar";
  import SvgIcon from "../../elements/SvgIcon";
  export default {
    name: "PersonalOffice",
    components: {SvgIcon, ToolBar, NavBar, PureVueChart, TrendChart},
    data() {
      return {
        sections: [
          { value: 54, color: '#359c09' }
        ],
        datasets: [
          {
            data: [70, 100, 400, 180, 100, 300, 500, 320, 450, 110, 80, 265, 300, 350],
            smooth: true,
            showPoints: true,
            className: "curve1",
          },
        ],
        grid: {
          verticalLines: true,
          horizontalLines: true
        },
        labels: {
          xLabels: ["24.04", "25.04", "26.04", "27.04", "28.04", "29.04", "30.04", "01.05", "02.05", "03.05", "04.05", "05.05", "06.05", "07.05"],
          yLabels: 5,
          yLabelsTextFormatter: val => Math.round(val * 100) / 100
        },
        tooltipData: null,
        popper: null,
        popperIsActive: false
      };
    },
    methods: {
      onMouseMove(params) {
        this.popperIsActive = !!params;
        this.tooltipData = params || null;
      }
    },
  }
</script>

<style scoped lang="sass">
  .office__info-items
    margin-top: 20px
    margin-left: 20px
    +reg

  .office__info-item
    margin-bottom: 15px

    &-cycle
      background-color: #2b3384
      width: 10px
      height: 10px
      border-radius: 99px
      float: left
      margin-top: 2px
      margin-right: 7px

    &-content
      margin-top: 5px
      font-size: 13px
      margin-left: 18px

  .office__wrapper
    background-color: #FFFFFF
    padding: 15px
    margin-bottom: 20px

  .office__btn
    +reg
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 10px

    &-text
      display: flex
      align-items: center


  .office__bottom
    display: flex
    justify-content: space-between
    align-items: flex-start

  .random
    +reg


  .bcg
    background: $color-grey

  .wrapper__content
    padding: 0 20px
    margin: 0 auto
    width: 1250px

  .text
    padding: 30px 0 10px 0
    +reg
    font-size: 34px

  .random
    height: 320px
    font-size: 12px
    +reg


  .donut__wrapper
    margin-bottom: 100px
    padding: 5px
    background-color: #FFFFFF
    position: relative

    img
      position: absolute
      right: 5px

  .donut__num
    +reg
    font-size: 52px

  .donut__text
    +reg
    font-size: 12px


  .pure__wrapper
    margin-left: 20px
    margin-bottom: 100px
    padding: 10px
    background-color: #FFFFFF

  .pure__text
    +reg
    font-size: 16px
    margin-bottom: 15px

  .pure__cycle
    background-color: #359c09
    width: 10px
    height: 10px
    border-radius: 99px
    float: left
    margin-top: 2px
    margin-right: 7px

  .income__cycle
    background-color: #f59640
    width: 10px
    height: 10px
    border-radius: 99px
    float: left
    margin-top: 2px
    margin-right: 7px

  .income__wrapper
    margin-left: 20px
    background-color: #FFFFFF
    margin-bottom: 100px
    padding: 10px

  .income__item
    margin-left: 12px
    display: flex
    align-items: center
    margin-bottom: 10px

  .income__item-cycle
    display: flex
    justify-content: center
    align-items: center
    margin-right: 10px
    +reg
    font-size: 14px
    color: #FFFFFF
    width: 40px
    height: 26px
    border-radius: 20px

  .income__item-text
    +reg
    font-size: 14px

  .all__wrapper
    display: grid
    grid-template-columns: 30% 35% 35%


</style>
