<template>

  <div class="drop__down">
    <div class="drop__down-top" @click="openDropDown = !openDropDown">
      <div class="drop__down-title" ><b>{{title}}</b></div>

      <svg-icon :name="openDropDown ? '101' : '48'"/>
    </div>
    <div class="drop__down-bottom" v-show="openDropDown">
      <slot class="slot"></slot>
    </div>
  </div>

</template>

<script>
  import SvgIcon from "../../elements/SvgIcon";
  export default {
    name: "DropDown",
    components: {SvgIcon},
    props: {
      title: {
        type: String,
        default: '',
      },
      initialValue: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {
        openDropDown: false,
      }
    },

    created () {
      this.openDropDown = this.initialValue;
    }
  }
</script>

<style scoped lang="sass">
  .drop__down
    margin-bottom: 20px

  .drop__down-top
    user-select: none
    cursor: pointer
    display: flex
    justify-content: space-between
    align-items: center
    +semiB
    font-size: 20px
    background-color: #FFFFFF
    padding: 15px 15px
    margin-right: 20px
    margin-left: 20px

  .drop__down-bottom
    margin-top: 2px
    +semiB
    background-color: #FFFFFF
    font-size: 16px
    margin-right: 20px
    margin-left: 20px

</style>
