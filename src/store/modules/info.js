import firebase from 'firebase/app'

export default {
    state: {
        info: {},
        name: '',
        email: '',
        password: ''
    },
    mutations: {
        setInfo(state, info) {
            state.info = info
        },
        clearInfo(state) {
            state.info = {}
        },
        SET_EMAIL (state, email) {
            state.email = email;
        },
        SET_PASSWORD (state, password) {
            state.password = password;
        },
        SET_BTC (state, btc) {
          state.btc = btc;
        },
        SET_ETH (state, eth) {
          state.eth = eth;
        },
        SET_DASH (state, dash) {
          state.dash = dash;
        },
        SET_ZEC (state, zec) {
          state.zec = zec;
        },
        SET_IMAGE (state, image) {
          state.image = image;
        },
        SET_NAME (state, name) {
          state.name = name;
        },
        SET_SURNAME (state, surname) {
          state.surname = surname;
        },
        SET_BIRTH (state, birth) {
          state.birth = birth;
        },
        SET_COMPANY (state, company) {
          state.company = company;
        },
        SET_COMPANYCODE (state, companyCode) {
          state.companyCode = companyCode;
        },
        SET_INN (state, inn) {
          state.inn = inn;
        },
        SET_ADDRESS1 (state, address1) {
          state.address1 = address1;
        },
        SET_ADDRESS2 (state, address2) {
          state.address2 = address2;
        },
        SET_CITY (state, city) {
          state.city = city;
        },
        SET_REGION(state, region) {
          state.region = region;
        },
        SET_COUNTRY (state, country) {
          state.country = country;
        },
        SET_POSTCODE (state, postCode) {
          state.postCode = postCode;
        },
    },
    actions: {
        async fetchInfo({dispatch, commit}) {
            try {
                const uid = await dispatch('getuid');
                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
                commit('setInfo', info)
            } catch (e) {}
        }
    },
    getters: {
      info: s=> s.info,
      getEmail: s => s.email,
      getPassword: s => s.password,
      getBtc: s => s.btc,
      getEth: s => s.eth,
      getDash: s => s.dash,
      getZec: s => s.zec,
      getImage: s => s.image,
      getName: s => s.name,
      getSurName: s => s.surname,
      getBirth: s => s.birth,
      getCompany: s => s.company,
      getCompanyCode: s => s.companyCode,
      getInn: s => s.inn,
      getAddress1: s => s.address1,
      getAddress2: s => s.address2,
      getCity: s => s.city,
      getRegion: s => s.region,
      getCountry: s => s.country,
      getPostCode: s => s.postCode,

    }
}
