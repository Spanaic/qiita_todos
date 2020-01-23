import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "@/plugins/firebase"

Vue.use(Vuex)

const store = () => { //定数storeの中にVuex.Storeインスタンスを戻り値として返す
    return new Vuex.Store({
        // インスタンス内にstate,mutations,actionsを定義して、モジュール毎に一つのファイルで一括管理する
        state: {
            currentUser: {},
            loading: false,
            notification: {
                status: false, //trueにした時にメッセージを表示
                message: ""
            }
        },
        mutations: {
            setUser(state, payload) {
                state.currentUser = payload
            },
            setLoading(state, payload) {
                state.loading = payload
            },
            setNotice(state, payload) {
                state.notification = payload
            }
        },
        actions: {
            login({ commit }, payload) {
                firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(() => {
                    commit("setNotice", {
                        status: true,
                        message: "ログインしました"
                    });
                    setTimeout(() => {
                        commit("setNotice", {});
                    }, 2000);
                    this.$router.push("/")
                }).catch(err => {
                    console.log(err);
                    this.err = (code => {
                        switch (code) {
                            case "auth/user-not-found":
                                return "メールアドレスが間違っています"
                            case "auth/wrong-password":
                                return "※パスワードが正しくありません"
                            default:
                                return "※メールアドレスとパスワードをご確認ください"
                        }
                    })(err.code);
                })
            },
            logout() {
                firebase.auth().signOut().then(() => {
                    commit("setUser", {});
                    this.$router.push("/login")
                }).catch(err => {
                    console.log(err);
                })
            },

        }
    })
}

export default store

