<template>
  <div>
    <DropDown
      :title="$t('table.allBuy')"
    >
      <div class="text__info"><b>31 / 9</b></div>
      <div class="text__info">Конверсия 36%</div>
      <div class="text__info">Сумарная прибыль: 0.015 BTC</div>
    </DropDown>
  </div>
</template>

<script>
  import DropDown from "../DropDown/DropDown";
  export default {
    name: "AllBuy",
    components: {DropDown},
  }
</script>

<style scoped lang="sass">
  .text__info
    padding: 12px
    +reg
    font-size: 15px

</style>
