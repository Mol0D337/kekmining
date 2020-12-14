<template>
  <div class="bcg">

    <div class="">
      <BankCard
        :form-data="formData"
        @input-card-number="updateCardNumber"
        @input-card-name="updateCardName"
        @input-card-month="updateCardMonth"
        @input-card-year="updateCardYear"
        @input-card-cvv="updateCardCvv"
      />
    </div>
  </div>

</template>

<script>

  import BankCard from "../../components/Product/BankCard";
  import SvgIcon from "../../elements/SvgIcon";
  export default {
    name: "BuyCard",
    components: {SvgIcon, BankCard},
    data () {
      return {
        formData: {
          cardName: '',
          cardNumber: '',
          cardMonth: '',
          cardYear: '',
          cardCvv: ''
        }
      }
    },
    methods: {
      updateCardNumber (val) {
      },
      updateCardName (val) {
      },
      updateCardMonth (val) {
      },
      updateCardYear (val) {
      },
      updateCardCvv (val) {
      }
    },
  }

</script>

<style scoped lang="sass">

  .bcg
    background: #f6f6ff
    width: 100%
    height: 100%




</style>
