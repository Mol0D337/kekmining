import firebase from 'firebase/app'
import image from "vuetify/lib/components/VBanner/VBanner";
import {UploadTaskSnapshot as fileData} from "firebase";

export default {
    actions: {
        async reset2({dispatch, commit}, payload) {
          const { email } = payload;
          const actionCodeSettings = {
            url: 'http://localhost:8080/reset/password',
          };
          try {
            await firebase.auth().sendSignInLinkToEmail( email, actionCodeSettings )
              .then(() => {
                window.localStorage.setItem('emailForSignIn', email);
                console.log('12341234')
              })
          } catch (e) {
            throw e
          }
        },

        async reset({dispatch, commit}, payload) {
          const { email } = payload;
          try {
            await firebase.auth().sendPasswordResetEmail(email).then(() => {
              console.log('12341234')
            })
          } catch (e) {
            throw e
          }
        },

        async login({dispatch, commit}, payload) {
            const { email, password } = payload;
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                throw e
            }
        },
        async register({ dispatch }, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword( email, password,);
                const uid = await dispatch('getuid');
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name,
                    email,
                    password,
                });
            } catch (e) {
                throw e
            }
        },
        getuid() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null
        },
        async logout({commit}) {
            await firebase.auth().signOut();
            commit('clearInfo')
        },

        async updateCategory1({ dispatch, rootState}) {
          const uid = await dispatch('getuid');
          const editAll = {
            name: rootState.info.name,
            surname: rootState.info.surname,
            birth: rootState.info.birth,
            companyCode: rootState.info.companyCode,
            inn: rootState.info.inn,
            address1: rootState.info.address1,
            address2: rootState.info.address2,
            city: rootState.info.city,
            region: rootState.info.region,
            country: rootState.info.country,
            postCode: rootState.info.postCode,

          };
          await firebase.database().ref(`/users/${uid}/info`).update(editAll)
        },


        async updateCategory2({ dispatch, rootState}) {
          const uid = await dispatch('getuid');
          const editEmail = {
            email: rootState.info.email
          };
          await firebase.database().ref(`/users/${uid}/info`).update(editEmail)
        },
        async updateCategory3({ dispatch, rootState}) {
          const uid = await dispatch('getuid');
          const editPassword = {
            password: rootState.info.password
          };
          await firebase.database().ref(`/users/${uid}/info`).update(editPassword)
        },


        async updateCategory4({ dispatch, rootState}) {
          const uid = await dispatch('getuid');
          const editBtc = {
            btc: rootState.info.btc
          };
          await firebase.database().ref(`/users/${uid}/info`).update(editBtc)
        },
        async updateCategory5({ dispatch, rootState}) {
          const uid = await dispatch('getuid');
          const editEtn = {
            eth: rootState.info.eth
          };
          await firebase.database().ref(`/users/${uid}/info`).update(editEtn)
        },
        async updateCategory6({ dispatch, rootState}) {
          const uid = await dispatch('getuid');
          const editDash = {
            dash: rootState.info.dash
          };
          await firebase.database().ref(`/users/${uid}/info`).update(editDash)
        },

        async updateCategory7({ dispatch, rootState}) {
          const uid = await dispatch('getuid');
          const editZec = {
            zec: rootState.info.zec
          };
          await firebase.database().ref(`/users/${uid}/info`).update(editZec)
        },

        async updateCategory8({ dispatch, rootState}) {
          const uid = await dispatch('getuid');
          const imageExt = image.name.slice(image.name.lastIndexOf('.'));
          const editImage = {
            image: rootState.info.image
          };
          await firebase.database().ref(`/users/${uid}/info`).update(editImage);
        },

        async fetchCategories({ dispatch}) {
            try {
                const uid = await dispatch('getuid');
                const categories = (await firebase.database().ref(`/users/${uid}`).once('value')).val() || {};
                return Object.keys(categories).map(key => ({...categories[key]}))
            } catch (e) {
                throw e
            }
        }
    }
}



