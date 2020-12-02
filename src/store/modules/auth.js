import firebase from 'firebase/app'

export default {
    actions: {
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
            const uid = await dispatch('getuid')
            const editName = {
                name: rootState.info.name
            }
            await firebase.database().ref(`/users/${uid}/info`).update(editName)
        },


        async updateCategory2({ dispatch, rootState}) {
            const uid = await dispatch('getuid')
            const editEmail = {
                email: rootState.info.email
            }
            await firebase.database().ref(`/users/${uid}/info`).update(editEmail)
        },


        async updateCategory3({ dispatch, rootState}) {
            const uid = await dispatch('getuid');
            const editPassword = {
                password: rootState.info.password
            };
            await firebase.database().ref(`/users/${uid}/info`).update(editPassword)
        },


        // async updateCategoryLOL({ dispatch, rootState}, {payload}) {
        //     const {email = null, password = null, nickname = null } = payload;
        //     const uid = await dispatch('getuid')
        //     const data = {};
        //     if (email) data.email = email;
        //     if (password) data.password = password;
        //     if (nickname) data.nickname = nickname;
        //
        //     const res = await firebase.database().ref(`/users/${uid}/info`).update(data);
        //
        //     commit('SET_USER', res.data);
        // },

        async fetchCategories({ dispatch}) {
            try {
                const uid = await dispatch('getuid')
                const categories = (await firebase.database().ref(`/users/${uid}`).once('value')).val() || {}
                return Object.keys(categories).map(key => ({...categories[key]}))
            } catch (e) {
                throw e
            }
        }
    }
}



