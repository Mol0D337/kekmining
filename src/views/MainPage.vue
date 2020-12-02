<template>
  <div>
    <div class="opacity"></div>
    <div class="all">
      <div class="wrapper">
        <div class="wrapper__header">
          <div class="header">
            <div class="logotype">
              <img src="../assets/images/imgIcons/1.png" alt="">
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
      </div>
    </div>
  </div>


</template>

<script>
import Login from '../components/Login'
import Registration from "../components/Registration";
export default {
  name: 'MainPage',
  components: {
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
    background: url("../assets/images/imgPage/111.png") no-repeat center center
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

</style>
