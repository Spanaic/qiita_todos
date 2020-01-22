import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => { //定数storeの中にVuex.Storeインスタンスを戻り値として返す
    return new Vuex.Store({
        // インスタンス内にstate,mutations,actionsを定義して、モジュール毎に一つのファイルで一括管理する
        state: {
            currentUser: null,
        },
        mutations: {
            setUser(state, payload) {
                state.currentUser = payload
            }
        },
        actions: {

        }
    })
}

export default store

