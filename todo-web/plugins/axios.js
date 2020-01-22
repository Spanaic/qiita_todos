import axios from "axios";

export default axios.create({
    baseURL: process.env.API_ENDPOINT
    // 環境変数にURLを設定しておくことで、envの値を変更するだけで本番環境と開発環境を切り替える事ができる
})