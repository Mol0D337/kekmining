<template>
  <div>

    <div class="table">
      <div class="table-header">
        <p style="border-top-left-radius: 5px" @click="sortBy"># <SvgIcon name="50"/> </p>
        <p @click="sortBy">{{$t('table.type')}}  <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.sum')}} <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.start')}} <SvgIcon name="50"/></p>
        <p style="border-top-right-radius: 5px" @click="sortBy">{{$t('table.finish')}} <SvgIcon name="50"/></p>
      </div>
      <TableHistory1
        v-for="historyOne in paginated"
        :key="historyOne.id"
        :historyOne_data="historyOne"
      />
      <div class="table-header">
        <p style="border-bottom-left-radius: 5px" @click="sortBy"># <SvgIcon name="50"/> </p>
        <p @click="sortBy">{{$t('table.type')}}  <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.sum')}} <SvgIcon name="50"/></p>
        <p @click="sortBy">{{$t('table.start')}} <SvgIcon name="50"/></p>
        <p style="border-bottom-right-radius: 5px" @click="sortBy">{{$t('table.finish')}} <SvgIcon name="50"/></p>
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
  import TableHistory1 from "./TableHistory1";
  import SvgIcon from "../../../elements/SvgIcon";
  export default {
    name: "TableH1",
    components: {SvgIcon, TableHistory1,},
    data () {
      return {
        historyOne: [
          {
            name: "3095935",
            type: "SHA-256",
            sum: "2000",
            start: "05.10.2020",
            finish: "05.11.2020",
          },
        ],
        pageNum: 1,
        itemPage: 3,
        switchName: false,
      }
    },
    computed: {
      pages() {
        return Math.ceil(this.historyOne.length / 3);
      },
      paginated() {
        let from = (this.pageNum - 1) * this.itemPage;
        let to = from + this.itemPage;
        return this.historyOne.slice(from, to);
      },
    },
    methods: {
      pageClick(page) {
        this.pageNum = page;
      },
      btnNext() {
        if (this.pageNum < (Math.ceil(this.historyOne.length / 3))) {
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
          this.historyOne.sort((a, b) => a.name.localeCompare(b.name));
          this.switchName = false;
        } else if (this.switchName === false) {
          this.historyOne.sort((a,b) => b.name.localeCompare(a.name));
          this.switchName = true;
        }
      },
      sortByCode() {
        this.historyOne.sort((a,b) => a.code - b.code)
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
      flex-basis: 20%
      text-align: left
      cursor: pointer



</style>
