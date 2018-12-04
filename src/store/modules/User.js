import {Users} from "../../db/Datastore";
import {decrypt} from "../../packages/encode/tokenizer";

const state = {
    auth: false,
    token: null,
    user: {},
    users: []
};

const mutations = {
    SET_TOKEN(state, data) {
        state.user = data.user;
        state.token = data.token;
        state.auth = true;
    },
    SET_USERS(state, users) {
        state.users = users
    },
    SET_USER(state, user) {
        state.auth = user
    },
    CLEAR_TOKEN(state) {
        state.user = {};
        state.token = null;
        state.auth = false;
    }
};

const getters = {
    auth (state) {
        return state.user && state.user._id
    }
};

const actions = {
    fetchUsers({commit}) {
        Users.find({}, (err, users) => {
            if (err) throw err;
            commit('SET_USERS', users);
        });
    },
    findUser ({commit}, query = {}) {
        return new Promise((res, rej) => {
            Users.find(query, (err, users) => {
                if (err) {
                    console.log(err);
                    rej(err);
                }
                res(users);
            });
        });

    },
    findOneUser ({commit}, query = {}) {
        // let q = {};
        // q[query.key] = query.value;
        return new Promise((res, rej) => {
            Users.findOne(query, (err, users) => {
                if (err) {
                    console.log(err);
                    rej(err);
                }
                res(users);
            });
        });

    },
    findUserById ({commit}, _id) {
        return new Promise((res, rej) => {
            Users.findOne({_id}, (err, user) => {
                if (err) {
                    console.log(err);
                    rej(err);
                }
                res(user);
            });
        });

    },
    async setToken({commit, dispatch}, payload) {
        localStorage.setItem('authUser', payload.token);
        localStorage.setItem('expiration', payload.expiration);
        let user = await dispatch('findUserById', decrypt(payload.token));
        commit('SET_TOKEN', {token: payload.token, user})
    },
    async checkToken ({commit, dispatch}) {
        let token = localStorage.getItem('authUser');
        // let expiration = localStorage.getItem('expiration');

        if (!token) return null;

        // if (Date.now() > parseInt(expiration)) {
        //     this.destroyToken();
        //     return null
        // }
        let decryptedToken = decrypt(token);
        if (!decryptedToken) return null;
        let user = await dispatch('findUserById', decryptedToken);
        if (user && user._id ) {
            commit('SET_TOKEN', {token, user});
            return user;
            // console.log(user);
        } else commit('CLEAR_TOKEN');
    },
    logout({commit}) {
        localStorage.removeItem('authUser');
        localStorage.removeItem('expiration');
        commit('CLEAR_TOKEN')
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}
