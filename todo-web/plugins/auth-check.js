import firebase from "@/plugins/firebase";
import axios from "@/plugins/axios";

const authCheck = ({ store, redirect }) => {
    firebase.auth().onAuthStateChanged(async user => {
        console.log("user.uid", user.uid)
        if (user) {
            const { data } = await axios.get(`/v1/users?uid=${user.uid}`)
            // indexから直接検索して一致するデータを一撃で引っ張り出す。
            console.log("data", data)
            store.commit("setUser", data)
        } else {
            store.commit("setUser", null)
        }
    })
}

export default authCheck