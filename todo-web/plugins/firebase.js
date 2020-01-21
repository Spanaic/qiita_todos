import firebase from "firebase"
// import firebase from "firebase/app"
import "firebase/auth"

console.log("firebase.apikey", process.env.API_KEY); //OK


const fbConfig = {
    apiKey: process.env.API_KEY,//dotenvのapiKeyは取れるのに、exportしてもfirebaseに反映されない
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_SENDER_ID
};

// 定数fbConfigに構成ファイルを代入する。dotenvで隠す。

firebase.initializeApp(fbConfig)
// firebase.initializeAppはfirebaseのメソッド

export default firebase;