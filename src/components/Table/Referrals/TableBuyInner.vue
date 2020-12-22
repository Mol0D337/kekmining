<template>
    <div class="table-body">
      <div class="tb table-body-name">{{tableBuy_data.name}}</div>
      <div class="tb table-body-code">{{tableBuy_data.code}}</div>
      <div class="tb table-body-buy">{{tableBuy_data.buy}}</div>
      <div class="tb table-body-earned">{{tableBuy_data.earned}}</div>
      <div class="tb table-body-earned">{{tableBuy_data.source}}</div>
      <div class="tb table-body-create">{{tableBuy_data.create}}</div>
    </div>
</template>

<script>
  export default {
    name: "TableBuyInner",
    props: {
      tableBuy_data: {
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
    flex-basis: 16.7%
    text-align: left
    +reg
    font-size: 14px
    padding: 15px 0 15px 10px
    border: 0.2px solid $color-tab-grey

  .table-body
    display: flex
    justify-content: space-around

</style>
