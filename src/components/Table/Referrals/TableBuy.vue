<template>
  <div>

    <div class="table">
      <div class="table-header">
        <p style="border-top-left-radius: 5px" @click="sortBy">{{$t('table.name')}} <SvgIcon name="50"/> </p>
        <p @click="sortBy">{{$t('table.code')}}  <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.buy')}} <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.earned')}} <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.source')}} <SvgIcon name="50"/></p>
        <p style="border-top-right-radius: 5px" @click="sortBy">{{$t('table.create')}} <SvgIcon name="50"/></p>
      </div>
      <TableBuyInner
        v-for="tableBuy in paginated"
        :key="tableBuy.id"
        :tableBuy_data="tableBuy"
      />
      <div class="table-header">
        <p style="border-bottom-left-radius: 5px" @click="sortBy">{{$t('table.name')}} <SvgIcon name="50"/> </p>
        <p @click="sortBy">{{$t('table.code')}}  <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.buy')}} <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.earned')}} <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.source')}} <SvgIcon name="50"/></p>
        <p style="border-bottom-right-radius: 5px" @click="sortBy">{{$t('table.create')}} <SvgIcon name="50"/></p>
      </div>
    </div>

    <div class="input-pagin">
      <input style="font-size: 14px; margin: 20px 0 20px 17px" type="text" class="input" :placeholder="$t('table.search')">
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
  import SvgIcon from "../../../elements/SvgIcon";
  import TableBuyInner from "./TableBuyInner";
  export default {
    name: "TableBuy",
    components: {TableBuyInner, SvgIcon},
    data () {
      return {
        tableBuy: [
          {
            name: "Name pay",
            code: "E79EOA4",
            buy: "8",
            earned: "0.003 BTC",
            source: "-",
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
        return Math.ceil(this.tableBuy.length / 3);
      },
      paginated() {
        let from = (this.pageNum - 1) * this.itemPage;
        let to = from + this.itemPage;
        return this.tableBuy.slice(from, to);
      },
    },
    methods: {
      pageClick(page) {
        this.pageNum = page;
      },
      btnNext() {
        if (this.pageNum < (Math.ceil(this.tableBuy.length / 3))) {
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
          this.tableBuy.sort((a, b) => a.name.localeCompare(b.name));
          this.switchName = false;
        } else if (this.switchName === false) {
          this.tableBuy.sort((a,b) => b.name.localeCompare(a.name));
          this.switchName = true;
        }
      },
      sortByCode() {
        this.tableBuy.sort((a,b) => a.code - b.code)
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
    padding-top: 20px

    &-header
      user-select: none
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
      flex-basis: 16.7%
      text-align: left
      cursor: pointer



</style>
