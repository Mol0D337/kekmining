<template>
  <div class="slider">
    <div class="title">
      What do people think of us?
    </div>

    <div class="inner">
      <div class="item" :style="{'margin-left': '-' + (34 * current) + '%'}">
        <SliderItem
          v-for="item in sliderItem"
          :key="item.id"
          :item_data="item"
        />
      </div>
    </div>

    <div class="w">
      <div class="prev" @click="prevSlide">
        <img src="../../assets/images/imgPage/r.png" alt="">
      </div>
      <div class="next" @click="nextSlide">
        <img src="../../assets/images/imgPage/l.png" alt="">
      </div>
    </div>

  </div>
</template>

<script>
  import SliderItem from "./SliderItem";
  export default {
    name: "Slider",
    data() {
      return {
        sliderItem: [
          {id: 1, img: "1.png", name: "James Newman", data: "27.07.20", text: 'Lorem ipsum dolor sit amet. Molestie et invidunt rebum facilisis erat sed. Suscipit nulla justo diam illum amet. Rebum consectetuer sed consequat invidunt labore duo.'},
          {id: 2, img: "1.png", name: "Irina Fox", data: "28.07.20", text: 'Lorem ipsum dolor sit amet. Molestie et invidunt rebum facilisis erat sed. Suscipit nulla justo diam illum amet. Rebum consectetuer sed consequat invidunt labore duo.'},
          {id: 3, img: "1.png", name: "Jon Black", data: "28.07.20", text: 'Lorem ipsum dolor sit amet. Molestie et invidunt rebum facilisis erat sed. Suscipit nulla justo diam illum amet. Rebum consectetuer sed consequat invidunt labore duo.'},
          {id: 4, img: "1.png", name: "Valera Ser", data: "29.07.20", text: 'Lorem ipsum dolor sit amet. Molestie et invidunt rebum facilisis erat sed. Suscipit nulla justo diam illum amet. Rebum consectetuer sed consequat invidunt labore duo.'},
          {id: 5, img: "1.png", name: "Pet Dash", data: "20.07.20", text: 'Lorem ipsum dolor sit amet. Molestie et invidunt rebum facilisis erat sed. Suscipit nulla justo diam illum amet. Rebum consectetuer sed consequat invidunt labore duo.'},
          {id: 6, img: "1.png", name: "Ashot Mashot", data: "01.08.20", text: 'Lorem ipsum dolor sit amet. Molestie et invidunt rebum facilisis erat sed. Suscipit nulla justo diam illum amet. Rebum consectetuer sed consequat invidunt labore duo.'},
          {id: 7, img: "1.png", name: "Al Elme", data: "03.09.20", text: 'Lorem ipsum dolor sit amet. Molestie et invidunt rebum facilisis erat sed. Suscipit nulla justo diam illum amet. Rebum consectetuer sed consequat invidunt labore duo.'},
        ],
        current: 0,
      }
    },
    methods: {
      prevSlide() {
        this.current--;
        if (this.current < 0) {
          this.current = this.sliderItem.length - 3;
        }
      },
      nextSlide() {
        if (this.current >= this.sliderItem.length - 3) {
          this.current = 0
        } else {
          this.current++
        }
      },
    },
    components: {SliderItem},
  }
</script>

<style scoped lang="sass">
  .title
    text-align: center
    padding-top: 70px
    margin-bottom: 50px
    +extraB
    color: #FFFFFF
    font-size: 30px

  .inner
    max-width: 1200px
    overflow: hidden

  .item
    display: inline-flex
    transition: all ease .5s

  img
    width: 50px
    height: 60px
    cursor: pointer
    margin: 0 20px

  .w
    display: flex
    justify-content: center
    align-items: center
    margin-top: 15px
</style>
