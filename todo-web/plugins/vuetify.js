import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)
// NOTE:　なぜVuetifyにプラグインを用意してmaterial-designのiconをexportしているのか？
export default new Vuetify({
    icons: {
        iconfont: 'md',
    }
    // プラグインを用意して、初回に一度読み込ませることで、毎コンポーネント毎にインポートしなくてもiconが使えるようになる。
})