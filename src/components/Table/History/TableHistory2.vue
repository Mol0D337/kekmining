<template>
    <div class="table-body">
      <div class="tb table-body-name">{{historyBuy_data.name}}</div>
      <div class="tb table-body-code">{{historyBuy_data.product}}</div>
      <div class="tb table-body-watch">{{historyBuy_data.quantity}}</div>
      <div class="tb table-body-reg">{{historyBuy_data.total}}</div>
      <div class="tb table-body-buy">{{historyBuy_data.payment}}</div>
      <div class="tb table-body-earned">{{historyBuy_data.time}}</div>
      <div class="tb table-body-create">{{historyBuy_data.status}}</div>
    </div>
</template>

<script>
  export default {
    name: "TableHistory2",
    props: {
      historyBuy_data: {
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
    flex-basis: 14.5%
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
