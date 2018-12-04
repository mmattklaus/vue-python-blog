import {Users} from '../../db/Datastore'
import {decrypt} from "../encode/tokenizer";

function get(decryptedToken) {
    return new Promise((res, rej) => {
        Users.findOne({_id: decryptedToken}, (err, user) => {
            if (err || !user._id) rej({});
            res(user);
        });
    })
}

export default async function (Vue) {
    let auth = {};

    Vue.auth = {

        // set token
        setToken(token, expiration) {
            localStorage.setItem('authUser', token);
            localStorage.setItem('expiration', expiration);
        },

        // get token
        getToken: async function () {
            let authUser = localStorage.getItem('authUser');
            let expiration = localStorage.getItem('expiration');

            if (!authUser) return null;

            // if (Date.now() > parseInt(expiration)) {
            //     this.destroyToken();
            //     return null
            // }
            let decryptedToken = decrypt(authUser);
            let u = await get(decryptedToken);

            if (!decryptedToken) return null;
            if (u._id) {
                // this.destroyToken();
                return null;
            }
            auth = u;
            return authUser;
            /* Users.findOne({_id: decryptedToken}, (err, user) => {
                if (err || !user._id) return null;
                auth = user;
                return authUser;
            }); */
        },

        // destroy token
        destroyToken() {
            localStorage.removeItem('authUser');
            localStorage.removeItem('expiration');
        },

        //isAuthenticated
        auth() {
            return !!this.getToken()._id;
            // return !!auth._id; // (this.getToken())
        },

        /**
         * getAuthUser
         *   get auth user info
         * @return Object
         */
        user() {
            return auth
        }
    };

    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: () => {
                return Vue.auth
            }
        }
    });
};
