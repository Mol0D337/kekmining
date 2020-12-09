<template>
  <div class="bcg">
    <loader class="loader" v-if="loading"/>

    <div v-else>
      <NavBar/>

      <div class="wrapper__content">
        <div class="text"><b>{{$t('any.settings')}}</b></div>

        <div class="grid__dropdown">
          <DropDown
            :title="$t('any.profile')"
            :initial-value="true"
          >
            <div class="wrapper__profile">

              <div class="profile__email">
                <form action="" @submit.prevent="emailHandler">
                  <div class="inputs" >
                    <div>{{$t('any.email')}}</div>
                    <input class="input"
                           type="email"
                           style="background-color: #ebebfa"
                           v-for="c of categories"
                           :placeholder="c.email"
                           v-model="email"
                           minlength="6"
                           maxlength="254"
                    >
                    <button class="btn btn-table-1">
                      <span>{{$t('any.save')}}</span>
                    </button>
                  </div>
                </form>
                <form action="" @submit.prevent="passwordHandler">
                  <div class="inputs" >
                    <div>{{$t('any.password')}}</div>
                    <input class="input"
                           style="background-color: #ebebfa"
                           type="password"
                           :placeholder="$t('any.password')"
                           v-model="password"
                           minlength="6"
                           maxlength="15"
                    >
                    <button class="btn btn-table-1">
                      <span>{{$t('any.save')}}</span>
                    </button>
                  </div>
                </form>

                <form action="" @submit.prevent="imageHandler">
                  <div class="inputs">
                    <div>{{$t('any.avatar')}}</div>
                    <div class="avatar__text"
                         @click="triggerUpload"
                         style="color: #2b3282; font-size: 14px; cursor: pointer; margin-top: 10px">
                      {{$t('any.avatarText')}}
                    </div>
                    <input
                      ref="fileInput"
                      type="file"
                      style="display: none"
                      accept="image/*"
                      @change="onFileChange"
                    >
                    <div>
                      <img :src="imageSrc" v-model="image" alt="" v-if="imageSrc" style="width: 120px; height: 120px">
                    </div>
                    <button class="btn btn-table-1">
                      <span>{{$t('any.save')}}</span>
                    </button>
                  </div>
                </form>

                <form action="" @submit.prevent="btcHandler">
                  <div class="inputs">
                    <div>{{$t('any.btc')}}</div>
                    <input type="text" class="input" v-for="c of categories" :placeholder="c.btc" v-model="btc">
                    <div class="alert"
                         style="font-size: 14px"
                    >{{$t('any.alert')}}</div>
                    <div class="inputs__bottom">
                      <button class="btn btn-table-1">
                        <span>{{$t('any.save')}}</span>
                      </button>
                      <a class="link__a"
                         href="https://bitcoin.org"
                         target="_blank"
                      >
                        {{$t('any.bitcoin')}}
                      </a>
                    </div>


                  </div>
                </form>
                <form action="" @submit.prevent="ethHandler">
                  <div class="inputs">
                    <div>{{$t('any.eth')}}</div>
                    <input type="text" class="input" v-for="c of categories" :placeholder="c.eth" v-model="eth">
                    <div class="alert"
                         style="font-size: 14px"
                    >{{$t('any.alert')}}</div>
                    <div class="inputs__bottom">
                      <button class="btn btn-table-1">
                        <span>{{$t('any.save')}}</span>
                      </button>
                      <a class="link__a"
                         href="https://ethereum.org"
                         target="_blank"
                      >
                        {{$t('any.ethereum')}}
                      </a>
                    </div>


                  </div>
                </form>
                <form action="" @submit.prevent="dashHandler">
                  <div class="inputs">
                    <div>{{$t('any.dash')}}</div>
                    <input type="text" class="input" v-for="c of categories" :placeholder="c.dash" v-model="dash">
                    <div class="alert"
                         style="font-size: 14px"
                    >{{$t('any.alert')}}</div>
                    <div class="inputs__bottom">
                      <button class="btn btn-table-1">
                        <span>{{$t('any.save')}}</span>
                      </button>
                      <a class="link__a"
                         href="https://www.dash.org"
                         target="_blank"
                      >
                        {{$t('any.dashW')}}
                      </a>
                    </div>


                  </div>
                </form>
                <form action="" @submit.prevent="zecHandler">
                  <div class="inputs">
                    <div>{{$t('any.zec')}}</div>
                    <input type="text" class="input" v-for="c of categories" :placeholder="c.zec" v-model="zec">
                    <div class="alert"
                         style="font-size: 14px"
                    >{{$t('any.alert')}}</div>
                    <div class="inputs__bottom">
                      <button class="btn btn-table-1">
                        <span>{{$t('any.save')}}</span>
                      </button>
                      <a class="link__a"
                         href="https://z.cash"
                         target="_blank"
                      >
                        {{$t('any.zcash')}}
                      </a>
                    </div>


                  </div>
                </form>
              </div>

            </div>
          </DropDown>


          <DropDown
            :title="$t('any.data')"
            :initial-value="true"
          >
            <div class="wrapper__data">
              <div class="wrapper__data-grid">
                <div class="wrapper__data-grid-l">
                  <div style="margin-top: -30px;">{{$t('any.name')}}</div>
                  <div>{{$t('any.surname')}}</div>
                  <div>{{$t('any.birth')}}</div>
                  <div>{{$t('any.company')}}</div>
                  <div>{{$t('any.companyCode')}}</div>
                  <div>{{$t('any.inn')}}</div>
                  <div>{{$t('any.address1')}}</div>
                  <div>{{$t('any.address2')}}</div>
                  <div>{{$t('any.city')}}</div>
                  <div>{{$t('any.region')}}</div>
                  <div>{{$t('any.country')}}</div>
                  <div>{{$t('any.postCode')}}</div>
                </div>
                <div class="wrapper__data-grid-r">
                  <form action="" @submit.prevent="allHandler">
                    <input class="input" type="text" v-for="c of categories" :placeholder="c.name" v-model="name">
                    <input class="input" type="text" v-for="c of categories" :placeholder="c.surname" v-model="surname">
                    <vue-englishdatepicker class="input" v-for="c of categories" :placeholder="c.birth" v-model="birth"/>
                    <input class="input" type="text" v-for="c of categories" :placeholder="c.company" v-model="company">
                    <input class="input" type="text" v-for="c of categories" :placeholder="c.companyCode" v-model="companyCode">
                    <input class="input" type="text" v-for="c of categories" :placeholder="c.inn" v-model="inn">
                    <input class="input" type="text" v-for="c of categories" :placeholder="c.address1" v-model="address1">
                    <input class="input" type="text" v-for="c of categories" :placeholder="c.address2" v-model="address2">
                    <input class="input" type="text" v-for="c of categories" :placeholder="c.city" v-model="city">
                    <input class="input" type="text" v-for="c of categories" :placeholder="c.region" v-model="region">
                    <input class="input" type="text" v-for="c of categories" :placeholder="c.country" v-model="country">
                    <input class="input" type="text" v-for="c of categories" :placeholder="c.postCode" v-model="postCode">
                    <button class="btn btn-table-1">
                      <span>{{$t('any.save')}}</span>
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </DropDown>
        </div>

      </div>

      <ToolBar/>
    </div>

  </div>
</template>

<script>
  import NavBar from "../../components/MyAdminPanel/NavBar";
  import ToolBar from "../../components/MyAdminPanel/ToolBar";
  import DropDown from "../../components/DropDown/DropDown";
  export default {
    name: "Settings",
    components: {DropDown, ToolBar, NavBar},
    data: () => ({
      loading: true,
      categories: [],
      image: null,
      imageSrc: '',
    }),
    async mounted() {
      this.categories = await this.$store.dispatch('fetchCategories');

      if (!Object.keys(this.$store.getters.info).length) {
        await this.$store.dispatch('fetchInfo')
      }
      this.loading = false
    },
    methods: {
      triggerUpload() {
        this.$refs.fileInput.click()
      },
      onFileChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
          this.imageSrc = reader.result
        };
        reader.readAsDataURL(file);
        this.image = file;
      },

      async allHandler() {
        const all = {
          name: this.name,
          surname: this.surname,
          birth: this.birth,
          company: this.company,
          companyCode: this.companyCode,
          inn: this.inn,
          address1: this.address1,
          address2: this.address2,
          city: this.city,
          region: this.region,
          country: this.country,
          postCode: this.postCode
        };
        await this.$store.dispatch('updateCategory1', all);
      },

      async emailHandler() {
        const email = {email: this.email};
        await this.$store.dispatch('updateCategory2', email);
      },
      async passwordHandler() {
        const password = {password: this.password};
        await this.$store.dispatch('updateCategory3', password);
      },

      async btcHandler() {
        const btc = {btc: this.btc};
        await this.$store.dispatch('updateCategory4', btc);
      },
      async ethHandler() {
        const eth = {eth: this.eth};
        await this.$store.dispatch('updateCategory5', eth);
      },
      async dashHandler() {
        const dash = {dash: this.dash};
        await this.$store.dispatch('updateCategory6', dash);
      },
      async zecHandler() {
        const zec = {zec: this.zec};
        await this.$store.dispatch('updateCategory7', zec);
      },

      async imageHandler() {
        const image = {image: this.image};
        await this.$store.dispatch('updateCategory8', image);
      },

    },
    computed: {
      name: {
        get () {
          return this.$store.getters.getName;
        },
        set (value) {
          this.$store.commit('SET_NAME', value);
        }
      },
      surname: {
        get () {
          return this.$store.getters.getSurName;
        },
        set (value) {
          this.$store.commit('SET_SURNAME', value);
        }
      },
      birth: {
        get () {
          return this.$store.getters.getBirth;
        },
        set (value) {
          this.$store.commit('SET_BIRTH', value);
        }
      },
      company: {
        get () {
          return this.$store.getters.getCompany;
        },
        set (value) {
          this.$store.commit('SET_COMPANY', value);
        }
      },
      companyCode: {
        get () {
          return this.$store.getters.getCompanyCode;
        },
        set (value) {
          this.$store.commit('SET_COMPANYCODE', value);
        }
      },
      inn: {
        get () {
          return this.$store.getters.getInn;
        },
        set (value) {
          this.$store.commit('SET_INN', value);
        }
      },
      address1: {
        get () {
          return this.$store.getters.getAddress1;
        },
        set (value) {
          this.$store.commit('SET_ADDRESS1', value);
        }
      },
      address2: {
        get () {
          return this.$store.getters.getAddress2;
        },
        set (value) {
          this.$store.commit('SET_ADDRESS2', value);
        }
      },
      city: {
        get () {
          return this.$store.getters.getCity;
        },
        set (value) {
          this.$store.commit('SET_CITY', value);
        }
      },
      region: {
        get () {
          return this.$store.getters.getRegion;
        },
        set (value) {
          this.$store.commit('SET_REGION', value);
        }
      },
      country: {
        get () {
          return this.$store.getters.getCountry;
        },
        set (value) {
          this.$store.commit('SET_COUNTRY', value);
        }
      },
      postCode: {
        get () {
          return this.$store.getters.getPostCode;
        },
        set (value) {
          this.$store.commit('SET_POSTCODE', value);
        }
      },




      email: {
        get () {
          return this.$store.getters.getEmail;
        },
        set (value) {
          this.$store.commit('SET_EMAIL', value);
        }
      },
      password: {
        get () {
          return this.$store.getters.getPassword;
        },
        set (value) {
          this.$store.commit('SET_PASSWORD', value);
        }
      },

      btc: {
        get () {
          return this.$store.getters.getBtc;
        },
        set (value) {
          this.$store.commit('SET_BTC', value);
        }
      },
      eth: {
        get () {
          return this.$store.getters.getEth;
        },
        set (value) {
          this.$store.commit('SET_ETH', value);
        }
      },
      dash: {
        get () {
          return this.$store.getters.getDash;
        },
        set (value) {
          this.$store.commit('SET_DASH', value);
        }
      },
      zec: {
        get () {
          return this.$store.getters.getZec;
        },
        set (value) {
          this.$store.commit('SET_ZEC', value);
        }
      },

      image: {
        get () {
          return this.$store.getters.getImage;
        },
        set (value) {
          this.$store.commit('SET_IMAGE', value);
        }
      },
    },
  }
</script>

<style scoped lang="sass">
  .wrapper__data-grid
    padding: 15px
    display: grid
    grid-template-columns: 25% 75%

    &-l
      margin-right: 10px
      display: flex
      flex-direction: column
      align-items: flex-end
      justify-content: center
      +reg
      font-size: 14px

      div
        margin: 14px 0

    &-r
      margin-left: 10px


  .input__avatar
    margin-bottom: 10px

  .link__a
    font-size: 14px
    margin-left: 25px
    color: $color-massage-blue
    text-decoration: none

  .loader
    display: flex
    justify-content: center
    align-items: center
    width: 100vw
    height: 100vh

  .grid__dropdown
    display: grid
    grid-template-columns: 1fr 1fr
  .bcg
    background: $color-grey

  .wrapper__content
    margin: 0 auto
    width: 1250px
    padding: 30px 0 100px 0

  .text
    padding: 0 0 40px 20px
    +reg
    font-size: 34px

  .inputs
    width: 100%
    border-bottom: 2px solid #f6f6ff
    padding: 15px

    div
      +reg
      font-size: 16px
      color: $color-black
      margin-bottom: 8px
      padding-left: 3px

  .input
    width: 100%
    margin-bottom: 10px
    +reg
    font-size: 14px

</style>
