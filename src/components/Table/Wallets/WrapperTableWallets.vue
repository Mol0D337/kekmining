<template>
  <div class="table">
    <div class="table-body">
      <div class="tb table-body-name">{{innerWallets_data.name}}</div>
      <div class="tb table-body-earned">{{innerWallets_data.earned}}</div>
      <div class="tb table-body-create">
        <button class="btn btn-table-1" style="margin-right: 10px">
          <span>Button 1</span>
        </button>
        <button class="btn btn-table-2">
          <span>Button 1</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WrapperTableWallets",
    props: {
      innerWallets_data: {
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
    flex-basis: 34%
    text-align: left
    +reg
    font-size: 14px
    padding: 15px 0 15px 10px
    border: 0.2px solid $color-tab-grey

  .table

    &-body
      display: flex
      justify-content: space-around

  .table-body-create
    padding: 7px 0 7px 10px

</style>
