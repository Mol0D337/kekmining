<template>
    <div class="table-body">
      <div class="tb table-body-name">{{historyOne_data.name}}</div>
      <div class="tb table-body-code">{{historyOne_data.type}}</div>
      <div class="tb table-body-watch">{{historyOne_data.sum}}</div>
      <div class="tb table-body-reg">{{historyOne_data.start}}</div>
      <div class="tb table-body-buy">{{historyOne_data.finish}}</div>
    </div>
</template>

<script>
  export default {
    name: "TableHistory1",
    props: {
      historyOne_data: {
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
