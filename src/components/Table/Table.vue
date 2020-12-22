<template>
  <div>

    <div class="table">
      <div class="table-header">
        <p style="border-top-left-radius: 5px" @click="sortBy">Имя <SvgIcon name="50"/> </p>
        <p @click="sortBy">Код  <SvgIcon name="50"/></p>
        <p @click="sortBy">Посещения <SvgIcon name="50"/></p>
        <p @click="sortBy">Регестрации <SvgIcon name="50"/></p>
        <p @click="sortBy">Покупки <SvgIcon name="50"/></p>
        <p @click="sortBy">Конверсия <SvgIcon name="50"/></p>
        <p @click="sortBy">Зароботок <SvgIcon name="50"/></p>
        <p style="border-top-right-radius: 5px" @click="sortBy">Создано <SvgIcon name="50"/></p>
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

    <div class="input-pagin">
      <input style="margin: 20px 0 20px 17px" type="text" class="input" placeholder="Поиск">
      <div class="pagination">
        <div class="btn-prev" @click="btnPrev">
          <
        </div>
        <div class="page"
             v-for="page in pages"
             :key="page.id"
             @click="pageClick(page)"
             :class="{'page__selected': page === pageNum}"
        >
          {{page}}
        </div>
        <div class="btn-next" @click="btnNext">
          >
        </div>
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
            watch: "1",
            reg: "2",
            buy: "1",
            percent: "20%",
            earned: "0.001 BTC",
            create: "2020-05-03"
          },
          {
            name: "b",
            code: "E77EOA4",
            watch: "2",
            reg: "2",
            buy: "2",
            percent: "22%",
            earned: "0.006 BTC",
            create: "2020-05-12"
          },
          {
            name: "c",
            code: "T70EOA4",
            watch: "3",
            reg: "2",
            buy: "0",
            percent: "29%",
            earned: "0.007 BTC",
            create: "2020-01-20"
          },
          {
            name: "a",
            code: "E79EOA4",
            watch: "1",
            reg: "2",
            buy: "1",
            percent: "20%",
            earned: "0.001 BTC",
            create: "2020-05-03"
          },
          {
            name: "b",
            code: "E77EOA4",
            watch: "2",
            reg: "2",
            buy: "2",
            percent: "22%",
            earned: "0.006 BTC",
            create: "2020-05-12"
          },
          {
            name: "c",
            code: "T70EOA4",
            watch: "3",
            reg: "2",
            buy: "0",
            percent: "29%",
            earned: "0.007 BTC",
            create: "2020-01-20"
          },
          {
            name: "d",
            code: "R79EOA4",
            watch: "4",
            reg: "2",
            buy: "1",
            percent: "25%",
            earned: "0.003 BTC",
            create: "2020-05-04"
          },
          {
            name: "e",
            code: "M49EOA4",
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
        ],
        pageNum: 1,
        itemPage: 3,
        switchName: false,
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
      btnNext() {
        if (this.pageNum < (Math.ceil(this.referrals.length / 3))) {
          this.pageNum++;
        }
      },
      btnPrev() {
        if (this.pageNum > 1) {
          this.pageNum--;
        } else if (this.pageNum <= 1) {
          this.pageNum = 1;
        }
      },
      sortBy() {
        if (this.switchName === true) {
          this.referrals.sort((a, b) => a.name.localeCompare(b.name));
          this.switchName = false;
        } else if (this.switchName === false) {
          this.referrals.sort((a,b) => b.name.localeCompare(a.name));
          this.switchName = true;
        }
      },
      sortByCode() {
        this.referrals.sort((a,b) => a.code - b.code)
      },
    }
  }
</script>

<style scoped lang="sass">
  .input-pagin
    padding-right: 10px
    display: flex
    justify-content: space-between
    align-items: center

  .page__selected
    background-color: #f6f6ff

  .pagination
    user-select: none
    display: flex
    flex-wrap: wrap
    justify-content: center

  .page, .btn-prev, .btn-next
    margin: 0 2px
    padding: 8px 12px
    border: 1px solid #e7e7e7
    +reg
    color: $color-input-text
    font-size: 14px
    border-radius: 99px
    cursor: pointer

  .page:hover
    background-color: #f6f6ff

  .btn-prev:hover, .btn-next:hover
    border: 1px solid #4bb5c5
    color: #4bb5c5


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
