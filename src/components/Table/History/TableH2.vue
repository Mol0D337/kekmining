<template>
  <div>

    <div class="table">
      <div class="table-header">
        <p style="border-top-left-radius: 5px" @click="sortBy"># <SvgIcon name="50"/> </p>
        <p @click="sortBy">{{$t('table.product')}}  <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.quantity')}} <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.total')}} <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.payment')}} <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.time')}} <SvgIcon name="50"/></p>
        <p style="border-top-right-radius: 5px" @click="sortBy">{{$t('table.status')}} <SvgIcon name="50"/></p>
      </div>
      <TableHistory2
        v-for="historyBuy in paginated"
        :key="historyBuy.id"
        :historyBuy_data="historyBuy"
      />
      <div class="table-header">
        <p style="border-bottom-left-radius: 5px" @click="sortBy"># <SvgIcon name="50"/> </p>
        <p @click="sortBy">{{$t('table.product')}}  <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.quantity')}} <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.total')}} <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.payment')}} <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.time')}} <SvgIcon name="50"/></p>
        <p style="border-bottom-right-radius: 5px" @click="sortBy">{{$t('table.status')}} <SvgIcon name="50"/></p>
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
  import TableHistory2 from "./TableHistory2";
  import SvgIcon from "../../../elements/SvgIcon";
  export default {
    name: "TableH2",
    components: {SvgIcon, TableHistory2},
    data () {
      return {
        historyBuy: [
          {
            name: "403152",
            product: "SHA-256",
            quantity: "14 Th/s",
            total: "2.100.00 USD",
            payment: "Payeer transfer",
            time: "02.11.2020",
            status: "Yes",
          },
          {
            name: "3689780",
            product: "SHA-256",
            quantity: "1 Th/s",
            total: "100.00 USD",
            payment: "Payeer transfer",
            time: "03.11.2020",
            status: "ok",
          },
          {
            name: "3095935",
            product: "SHA-256",
            quantity: "2 Th/s",
            total: "400.00 USD",
            payment: "LPB transfer",
            time: "08.11.2020",
            status: "No",
          },
          {
            name: "403152",
            product: "SHA-256",
            quantity: "14 Th/s",
            total: "2.100.00 USD",
            payment: "Payeer transfer",
            time: "09.11.2020",
            status: "Error",
          },
        ],
        pageNum: 1,
        itemPage: 3,
        switchName: false,
      }
    },
    computed: {
      pages() {
        return Math.ceil(this.historyBuy.length / 3);
      },
      paginated() {
        let from = (this.pageNum - 1) * this.itemPage;
        let to = from + this.itemPage;
        return this.historyBuy.slice(from, to);
      },
    },
    methods: {
      pageClick(page) {
        this.pageNum = page;
      },
      btnNext() {
        if (this.pageNum < (Math.ceil(this.historyBuy.length / 3))) {
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
          this.historyBuy.sort((a, b) => a.name.localeCompare(b.name));
          this.switchName = false;
        } else if (this.switchName === false) {
          this.historyBuy.sort((a,b) => b.name.localeCompare(a.name));
          this.switchName = true;
        }
      },
      sortByCode() {
        this.historyBuy.sort((a,b) => a.code - b.code)
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
    padding-top: 20px
    max-width: 1180px
    margin: 0 auto

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
      flex-basis: 14.5%
      text-align: left
      cursor: pointer



</style>
