<template>
  <div class="table-body">
    <div class="tb table-body-name">{{out_data.id}}</div>
    <div class="tb table-body-code">{{out_data.time}}</div>
    <div class="tb table-body-watch">{{out_data.sum}}</div>
    <div class="tb table-body-reg">{{out_data.status}}</div>
    <div class="tb table-body-buy">{{out_data.txId}}</div>
    <div class="tb table-body-earned">{{out_data.alt}}</div>
  </div>
</template>

<script>
  export default {
    name: "TableTransactions1",
    props: {
      out_data: {
        type: Object,
        default: () => {
          return {}
        }
      },
    },
  }
</script>

<style scoped lang="sass">
  .tb
    flex-basis: 20%
    text-align: left
    +reg
    font-size: 14px
    padding: 15px 0 15px 10px
    border: 0.2px solid $color-tab-grey

  .table

    &-body
      display: flex
      justify-content: space-around

</style>
