<template>
  <div>
    <div class="opacity"></div>
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

    </div>
  </div>


</template>

<script>
import Login from '../../components/Login/Login'
import Registration from "../../components/Login/Registration";
import SvgIcon from "../../elements/SvgIcon";
export default {
  name: 'MainPage',
  components: {
    SvgIcon,
    Registration,
    Login
  },
}
</script>

<style scoped lang="sass">
  .btn-main
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.25)

  .all
    margin-bottom: 1000px

    width: 100vw
    height: 100vh
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
    margin-top: 235px
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


</style>
