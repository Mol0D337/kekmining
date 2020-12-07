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
          <SvgIcon style="width: 20px; height: 60px;" class="svg-icon-scroll" name="52"/>
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
          <div class="iframe">
            <img src="../../assets/images/backgroundD/video.png" alt="">
          </div>
        </div>
      </div>

      <div class="bcg">
        <div class="wrapper__product">
          <div class="possibilities__title">
            What is the price of our capacities?
          </div>
          <Products/>
        </div>

        <div class="wrapper__about">
          <div class="about-us">
            <div class="about-us__title">
              About us
            </div>
            <div class="flex">
              <div class="flex__text">
                <div class="about-us__subtitle">
                  Why us?
                </div>
                <div class="about-us__text">
                  Kekmining is a modern approach, the most innovative systems and the maximum ease of use.
                  Now speaking about mining, you should not think about buying and setting up expensive
                  equipment, it's enough to choose the necessary speed, to distribute assets and get the
                  maximum income.
                </div>
              </div>
              <div class="flex__img">
                <img class="flex__img-big" src="../../assets/images/imgPage/333.jpg" alt="">

                <img class="flex__img-small" src="../../assets/images/imgPage/222.jpg" alt="">

              </div>
            </div>

          </div>
        </div>

        <div class="wrapper__adv">
          <div class="adv">
            <div class="possibilities__title">
              Our advantages
            </div>
            <div class="adv__icons">
              <img src="../../assets/images/imgIcons/22.png" alt="">
              <img src="../../assets/images/imgIcons/23.png" alt="">
              <img src="../../assets/images/imgIcons/24.png" alt="">
              <img src="../../assets/images/imgIcons/25.png" alt="">
              <img src="../../assets/images/imgIcons/26.png" alt="">
            </div>
            <div class="adv__texts">
              <div class="adv__text">Instant connection</div>
              <div class="adv__text">Uninterrupted operation</div>
              <div class="adv__text">Fixed commission</div>
              <div class="adv__text">Best statistical base</div>
              <div class="adv__text">Instant withdrawal</div>
            </div>
            <div class="wb">
              <button class="btn btn-main">
                <span>Get started</span>
              </button>
            </div>
          </div>
        </div>

        <div class="wrapper__figures">
          <div class="figures">
            <div class="possibilities__title">
              Figures and Facts
            </div>

            <div class="figures__img">

              <div class="l">
                <div class="figures__img-left">
                  <img class="qq" src="../../assets/images/imgIcons/234234234.png" alt="">
                </div>

                <div class="figures__text">
                  <div class="figures__text-left">
                    Since 2014, our company has been continuously growing and
                    bringing constant income to customers.
                  </div>
                  <div class="figures__text-left">
                    In 2014 it was a small unit in Kiev, now we are aimed
                    at the whole world!
                  </div>
                </div>
              </div>


              <div class="r">

                <div class="figures__img-right">
                  <img src="../../assets/images/imgIcons/4.png" alt="">
                </div>
                <div class="figures__text">
                  <div class="figures__text-left">
                    Reputation above all
                  </div>
                  <div class="figures__text-left">
                    We adhere to an open policy of work. Honesty, dignity, an agreement
                    without subtext. No hidden commissions and compensation.
                    The withdrawal is at any time.
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div class="wrapper__s">
          <div class="wrapper__slider">
            <Slider/>
          </div>
        </div>

        <div class="wrapper__f">
          <div class="wrapper__footer">
            <div class="footer__top">
              <ul class="ul">
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">POSSIBILITIES</a></li>
                <li><a href="#">PRICE</a></li>
                <li><a href="#">TESTIMONIALS</a></li>
                <li><a href="#">ENTER</a></li>
                <li><a href="#">REGISTRATION</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          All rigths reserved &copy; Kekmining 2020
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
import Products from "../../components/Product/Products";
import Slider from "../../components/Slider/Slider";
export default {
  name: 'MainPage',
  components: {
    Slider,
    Products,
    Product,
    SvgIcon,
    Registration,
    Login,
  },


}
</script>

<style scoped lang="sass">

  .svg-icon
    width: 20px
    height: 60px
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
      padding-bottom: 15px
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

  .iframe
    margin-top: 40px
    margin-bottom: 40px
    img
      width: 800px

  .wrapper__product
    padding-top: 200px
    margin: 0 auto
    width: 1250px

  .wrapper__about
    margin: 0 auto
    width: 1250px

  .about-us
    margin-top: 250px

    &__title
      text-align: center
      margin-bottom: 70px
      +extraB
      font-weight: normal
      color: $color-white
      font-size: 30px

    &__subtitle
      color: $color-white
      font-size: 20px
      margin-bottom: 15px
      +reg
      line-height: 1.6
    &__text
      color: $color-white
      font-size: 15px
      +reg
      line-height: 1.6

  .flex
    display: flex

    &__text
      width: 550px
      margin-top: 100px


  .flex__img
    margin-left: 190px

    &-big
      width: 600px
    &-small
      width: 500px
      transform: translate3d(235px, -235px, 0)

  .wrapper__adv
    margin: 0 auto
    width: 1250px

  .adv
    margin-top: 70px

    &__icons
      margin: 0 auto
      width: 93%
      margin-top: 60px
      display: flex
      justify-content: space-between
      text-align: center

    &__texts
      margin-top: 35px
      +reg
      font-size: 18px
      display: flex
      justify-content: space-between
      text-align: center

  .wb
    text-align: center
    margin-top: 70px

  .wrapper__figures
    margin: 0 auto
    width: 1250px

  .figures
    margin-top: 210px

    &__img
      display: grid
      grid-template-columns: 1fr 1fr
      margin: 60px

      &-left
        display: flex
        justify-content: flex-start
        align-items: center
        margin-bottom: 20px

      &-right
        margin-bottom: 20px

    &__text
      +reg
      font-size: 15px
      line-height: 1.5
      margin-bottom: 15px

      &-left
        margin-bottom: 15px

  .qq
    width: 90%
    padding-top: 20px
    padding-bottom: 20px

  .l
    margin-right: 100px

  .r
    margin-left: 100px

  .wrapper__f
    background: linear-gradient(to left, #424265, #495190)
    height: 55px
    display: flex
    align-items: center

  .wrapper__footer
    margin: 0 auto
    width: 1250px
    display: flex
    align-items: center
    justify-content: center


  .footer__top
    display: flex
    justify-content: space-between

  .ul
    display: flex
    align-items: center
    list-style: none

    li
      margin-left: 50px

  .svg-icon
    width: 30px
    height: 30px
  .svg
    color: #FFFFFF

  .footer__bottom
    height: 55px
    background: $color-black
    color: $color-white
    text-align: center
    +reg
    font-size: 15px
    display: flex
    justify-content: center
    align-items: center

  .wrapper__s
    background: linear-gradient(to left, #1c2351, #2a3382)
    height: 450px

  .wrapper__slider
    margin: 0 auto
    width: 1200px



</style>
