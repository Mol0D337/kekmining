<template>
  <div class="bcg">
    <NavBar/>

    <div class="wrapper__help">

      <div class="text"><b>{{$t('any.help')}}</b></div>

      <div class="wrapper__help-grid">
        <div class="wrapper__help-grid-l">
          <DropDown
            :title="$t('questions.question1')"
          >
            <div class="padding">{{$t('answers.answer1')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question2')"
          >
            <div class="padding">{{$t('answers.answer2')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question3')"
          >
            <div class="padding">{{$t('answers.answer1')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question4')"
          >
            <div class="padding">{{$t('answers.answer2')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question5')"
          >
            <div class="padding">{{$t('answers.answer1')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question6')"
          >
            <div class="padding">{{$t('answers.answer2')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question7')"
          >
            <div class="padding">{{$t('answers.answer1')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question8')"
          >
            <div class="padding">{{$t('answers.answer2')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question9')"
          >
            <div class="padding">{{$t('answers.answer1')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question10')"
          >
            <div class="padding">{{$t('answers.answer2')}}</div>
          </DropDown>
        </div>
        <div class="wrapper__help-grid-l">
          <DropDown
            :title="$t('questions.question11')"
          >
            <div class="padding">{{$t('answers.answer1')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question12')"
          >
            <div class="padding">{{$t('answers.answer2')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question13')"
          >
            <div class="padding">{{$t('answers.answer1')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question14')"
          >
            <div class="padding">{{$t('answers.answer2')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question15')"
          >
            <div class="padding">{{$t('answers.answer1')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question16')"
          >
            <div class="padding">{{$t('answers.answer2')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question17')"
          >
            <div class="padding">{{$t('answers.answer1')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question18')"
          >
            <div class="padding">{{$t('answers.answer2')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question19')"
          >
            <div class="padding">{{$t('answers.answer1')}}</div>
          </DropDown>
          <DropDown
            :title="$t('questions.question20')"
          >
            <div class="padding">{{$t('answers.answer2')}}</div>
          </DropDown>
        </div>
      </div>

    </div>

    <ToolBar/>
  </div>
</template>

<script>
  import NavBar from "../../components/MyAdminPanel/NavBar";
  import ToolBar from "../../components/MyAdminPanel/ToolBar";
  import DropDown from "../../components/DropDown/DropDown";
  export default {
    name: "Help",
    components: {DropDown, ToolBar, NavBar},
  }
</script>

<style scoped lang="sass">
  .padding
    padding: 15px

  .bcg
    background: $color-grey

  .wrapper__help
    margin: 0 auto
    width: 1250px
    padding: 30px 0 80px 0

    &-grid
      display: grid
      grid-template-columns: 1fr 1fr

      &-l
        line-height: 1.5
        width: 100%
        height: 100%

  .text
    padding: 0 0 40px 20px
    +reg
    font-size: 34px

</style>
