export default function ({
    store,
    redirect,
    route,

}) {
    store.watch(
        state => state.currentUser, //この書き方は一体...?
        (newUser, oldUser) => { //state.currentUser(引数1, 引数2) => functionとしての値
            if (!newUser) {
                switch (route.name) { //なぜroute.nameを評価基準に？ => pageの名前
                    case "index":
                        redirect("/login")
                    case "mypage":
                        redirect("/login")
                    default:
                        return;
                    // configで毎回読み込ませて、switch命令の中のページをリダイレクトさせる。
                }
            }
        }
    )
}