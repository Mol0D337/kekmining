<template>
  <div>
    <div class="all">
      <div class="wrapper">
        <div class="wrapper__header">
          <div class="header">
            <div class="logotype">
              <img src="../../assets/images/imgIcons/1.png" alt="">
            </div>
            <ul>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">POSSIBILITIES</a></li>
              <li><a href="#">PRICE</a></li>
              <li><a href="#">TESTIMONIALS</a></li>
              <li>
                <Registration/>
              </li>
              <li>
                <Login/>
              </li>
              <li><a href="#">EN</a></li>
            </ul>
          </div>
        </div>
        <div class="about">
          <div class="title">
            start mining production with industry leaders
          </div>
          <div class="title__sub">
            We make industrial mining accessible to all. You get access
            to the latest and most advanced technologies in the industry
            provided by the leading company.
          </div>
          <button class="btn btn-main">
            <span>Get started</span>
          </button>
        </div>
        <div class="scroll">
          <div class="scroll__text">
            scroll
          </div>
          <SvgIcon class="svg-icon-scroll" name="52"/>
        </div>
      </div>

      <div class="wrapper__possibilities">
        <div class="possibilities">
          <div class="possibilities__title">
            Three simple steps for startup of mining
          </div>
          <div class="svgs">
            <div class="svg">
              <img src="../../assets/images/imgIcons/14.png" alt="">
              <img src="../../assets/images/imgIcons/13.png" alt="">
              <img src="../../assets/images/imgIcons/12.png" alt="">
            </div>
          </div>
          <SvgIcon
            class="border"
            name="32"/>
          <div class="cycles">
            <div class="cycle">
              <div class="cycle__small"></div>
            </div>
            <div class="cycle">
              <div class="cycle__small"></div>
            </div>
            <div class="cycle">
              <div class="cycle__small"></div>
            </div>
          </div>
          <div class="sub-title">
            <div class="sub">Registration</div>
            <div class="sub">Choose a payment plan</div>
            <div class="sub">Get coins</div>
          </div>
        </div>

      </div>

      <div class="wrapper__video">
        <div class="video">
          <div class="possibilities__title">
            Video title
          </div>
          <iframe
            width="800" height="430"
            src="https://www.youtube-nocookie.com/embed/xhzNt4xUd24"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>

      <div class="bcg">
        <div class="wrapper__about">
          <div class="about">
            <div class="about__title">
              About us
            </div>
            <div class="about__subtitle">
              Why us?
            </div>
            <div class="about__text">
              Kekmining is a modern approach, the most innovative systems and the maximum ease of use.
              Now speaking about mining, you should not think about buying and setting up expensive
              equipment, it's enough to choose the necessary speed, to distribute assets and get the
              maximum income.
            </div>
          </div>
        </div>
        <div class="grid">
          <Product
            v-for="product in products"
            :key="product.article"
            :product_data="product"
          />
        </div>
      </div>

    </div>
  </div>


</template>

<script>
import Login from '../../components/Login/Login'
import Registration from "../../components/Login/Registration";
import SvgIcon from "../../elements/SvgIcon";
import Product from "../../components/Product/Product";
export default {
  name: 'MainPage',
  components: {
    Product,
    SvgIcon,
    Registration,
    Login
  },
  props: {},
  data () {
    return {
      products: [
        {
          image: "18.png",
          name: "Bitcoin",
          min: "500 Gh/s",
          pay: "0.0010000000 / 1 Gh/s / 1h",
          equipment: "SHA-256",
          price: "$250",
          article: "T1",
        },
        {
          image: "17.png",
          name: "Dash",
          min: "1150 Mh/s",
          pay: "0.0010000000 / 1 Mh/s / 1h",
          equipment: "X11 (DASH)",
          price: "$450",
          article: "T2",
          available: true
        },
        {
          image: "16.png",
          name: "Ethereum",
          min: "50 Mh/s",
          pay: "0.0010000000 / 1 Mh/s / 1h",
          equipment: "ETHASH",
          price: "$20",
          article: "T3",
          available: true
        },
        {
          image: "19.png",
          name: "Litecoin",
          min: "2500 Mh/s",
          pay: "0.0010000000 / 1 Mh/s / 1h",
          equipment: "Scrypt",
          price: "$2500",
          article: "T4",
          available: true
        },
        {
          image: "20.png",
          name: "Zcash",
          min: "1000 H/s",
          pay: "0.0010000000 / 1 H/s / 1h",
          equipment: "EQUEHASH (ZEC)",
          price: "$60",
          article: "T5",
          available: true
        },
        {
          image: "21.png",
          name: "Monero",
          min: "25 H/s",
          pay: "0.0000571667 / 1 H/s / 1h",
          equipment: "Cryptonight (XMR)",
          price: "$13",
          article: "T6",
          available: true
        },
      ]
    }
  }
}
</script>

<style scoped lang="sass">
  .grid
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-template-rows: 1fr 1fr
  .bcg
    background-image: url('../../assets/images/backgroundD/bcg.svg')
    background-position: 0 0
    background-repeat: no-repeat
    background-size: cover
    background-attachment: local

  .btn-main
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.25)

  .all
    width: 100vw
    height: 107vh
    background: url("../../assets/images/imgPage/111.png") no-repeat center center
    background-size: cover
    transition: background-position .5s ease-out

  .wrapper
    margin: 0 auto
    width: 1250px

  .wrapper__header
    margin: 0 auto
    width: 1250px

  .header
    padding-top: 15px
    display: flex
    align-items: center
    justify-content: space-between

    ul
      display: flex
      align-items: center
      li
        list-style: none
        margin-left: 30px

  ul li a
    text-decoration: none
    color: $color-white
    +reg
    font-size: $font-size--m

  .about
    margin-top: 180px
    width: 550px

    .title
      text-transform: uppercase
      color: $color-white
      +semiB
      font-size: 35px
      line-height: 1.6

      &__sub
        margin-top: 25px
        margin-bottom: 45px
        color: $color-white
        font-size: $font-size--ms
        +reg
        line-height: 1.6


  .scroll
    max-width: 20px
    max-height: 120px
    color: #797fbd
    margin-top: 120px
    +reg
    font-size: 12px

    &__text
      transform: rotate(-90deg)
      margin-bottom: 5px

  .svg-icon-scroll
    color: #797fbd
    width: 20px
    height: 60px

  .wrapper__possibilities
    margin: 0 auto
    width: 600px

  .possibilities
    margin-top: 300px
    text-align: center
    &__title
      text-align: center
      +extraB
      color: $color-black
      font-size: 30px

  .svg
    margin-top: 60px
    display: flex
    justify-content: space-between
    align-items: center

  .border
    width: 90%
    height: 40px
    text-align: center
    margin-top: 20px

  .cycles
    width: 90%
    display: flex
    justify-content: space-between
    align-content: center
    text-align: center
    margin: 0 auto
    transform: translateY(-40px)

  .cycle
    width: 30px
    height: 30px
    border-radius: 99px
    background: $color-white
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2)
    position: relative

    &__small
      display: flex
      justify-content: center
      position: absolute
      top: 24%
      left: 26%
      text-align: center
      width: 16px
      height: 16px
      border-radius: 99px
      background: black
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.6)

  .sub-title
    margin-top: -25px
    display: flex
    justify-content: space-between
    align-items: center
    +reg
    color: $color-black
    font-size: 16px

  .wrapper__video
    margin-top: 50px
    margin: 0 auto
    width: 800px

  .video
    margin-top: 80px

  iframe
    margin-top: 40px
    margin-bottom: 40px
</style>
