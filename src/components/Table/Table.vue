<template>
  <div>

    <div class="table">
      <div class="table-header">
        <p style="border-top-left-radius: 5px" @click="sortByName">Имя <SvgIcon name="50"/> </p>
        <p @click="sortByCode">Код  <SvgIcon name="50"/></p>
        <p>Посещения <SvgIcon name="50"/></p>
        <p>Регестрации <SvgIcon name="50"/></p>
        <p>Покупки <SvgIcon name="50"/></p>
        <p>Конверсия <SvgIcon name="50"/></p>
        <p>Зароботок <SvgIcon name="50"/></p>
        <p style="border-top-right-radius: 5px">Создано <SvgIcon name="50"/></p>
      </div>
      <TableRef
        v-for="referral in pagineted"
        :key="referral.id"
        :referral_data="referral"
      />
      <div class="table-header">
        <p style="border-bottom-left-radius: 5px">Имя <SvgIcon name="50"/> </p>
        <p>Код  <SvgIcon name="50"/></p>
        <p>Посещения <SvgIcon name="50"/></p>
        <p>Регестрации <SvgIcon name="50"/></p>
        <p>Покупки <SvgIcon name="50"/></p>
        <p>Конверсия <SvgIcon name="50"/></p>
        <p>Зароботок <SvgIcon name="50"/></p>
        <p style="border-bottom-right-radius: 5px">Создано  <SvgIcon name="50"/></p>
      </div>
    </div>

    <div class="pagination">
      <div class="page"
           v-for="page in pages"
           :key="page.id"
           @click="pageClick(page)"
           :class="{'page__selected': page === pageNum}"
      >
        {{page}}
      </div>
    </div>

  </div>
</template>

<script>
  import TableRef from "./TableRef";

  import SvgIcon from "../../elements/SvgIcon";
  export default {
    name: "Table",
    components: {SvgIcon, TableRef},
    data () {
      return {
        referrals: [
          {
            name: "a",
            code: "E79EOA4",
            watch: "5",
            reg: "2",
            buy: "1",
            percent: "25%",
            earned: "0.003 BTC",
            create: "2020-05-04"
          },
          {
            name: "b",
            code: "E79EOA4",
            watch: "5",
            reg: "2",
            buy: "1",
            percent: "25%",
            earned: "0.003 BTC",
            create: "2020-05-04"
          },
          {
            name: "c",
            code: "E79EOA4",
            watch: "5",
            reg: "2",
            buy: "1",
            percent: "25%",
            earned: "0.003 BTC",
            create: "2020-05-04"
          },
          {
            name: "d",
            code: "E79EOA4",
            watch: "5",
            reg: "2",
            buy: "1",
            percent: "25%",
            earned: "0.003 BTC",
            create: "2020-05-04"
          },
          {
            name: "e",
            code: "E79EOA4",
            watch: "5",
            reg: "2",
            buy: "1",
            percent: "25%",
            earned: "0.003 BTC",
            create: "2020-05-04"
          },
          {
            name: "f",
            code: "E79EOA4",
            watch: "5",
            reg: "2",
            buy: "1",
            percent: "25%",
            earned: "0.003 BTC",
            create: "2020-05-04"
          },
        ],
        pageNum: 1,
        itemPage: 3,
      }
    },
    computed: {
      pages() {
        return Math.ceil(this.referrals.length / 3);
      },
      pagineted() {
        let from = (this.pageNum - 1) * this.itemPage;
        let to = from + this.itemPage;
        return this.referrals.slice(from, to);
      },
    },
    methods: {
      pageClick(page) {
        this.pageNum = page;
      },
      sortByName() {
        this.referrals.sort((a,b) => a.name.localeCompare(b.name))
      },
      sortByCode() {
        this.referrals.sort((a,b) => a.code - b.code)
      },
    }
  }
</script>

<style scoped lang="sass">
  .page__selected
    background-color: #f6f6ff

  .pagination
    display: flex
    flex-wrap: wrap
    justify-content: center

  .page
    padding: 8px
    border: 1px solid #e7e7e7
    +reg
    color: $color-input-text
    font-size: 14px
    border-radius: 99px
    cursor: pointer

  .page:hover
    background-color: #f6f6ff

  .table
    max-width: 1180px
    margin: 0 auto

    &-header
      display: flex
      justify-content: space-around

    &-header p
      background-color: $color-tab-grey
      color: $color-input-text
      +reg
      font-size: 14px
      padding: 7px 0 7px 10px
      display: flex
      align-items: center
      flex-basis: 12.5%
      text-align: left
      cursor: pointer



</style>
