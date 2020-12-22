<template>

  <div class="table">
    <div class="table-body">
      <div class="tb table-body-name">{{referral_data.name}}</div>
      <div class="tb table-body-code">{{referral_data.code}}</div>
      <div class="tb table-body-watch">{{referral_data.watch}}</div>
      <div class="tb table-body-reg">{{referral_data.reg}}</div>
      <div class="tb table-body-buy">{{referral_data.buy}}</div>
      <div class="tb table-body-percent">{{ lol() }}%</div>
      <div class="tb table-body-earned">{{referral_data.earned}}</div>
      <div class="tb table-body-create">{{referral_data.create}}</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "TableRef",
    props: {
      referral_data: {
        type: Object,
        default: () => {
          return {}
        }
      },
    },
    methods: {
      lol() {
        return Math.ceil( (this.referral_data.buy / this.referral_data.reg) * 100 );
      },
    },
  }
</script>

<style scoped lang="sass">
  .tb
    flex-basis: 12.5%
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
