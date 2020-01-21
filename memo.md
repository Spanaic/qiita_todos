# active_model_serializer

1. serializerを組むことでコントローラ単位でjsonファイルをresする際のincludeの記述を省く事ができる？

```rb
class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email #jsonで返すカラム？
  has_many :todos #アソシエーション先のテーブル名
end
```

```rb
class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :username
  #外部キーとして受け取っているのはuser_idだけなので、jsonファイルにusernameを持たせるために定義しなくてはならない
  belongs_to :username

  def username
    object.user.name
  end
end
```

# serializerを用いたjsonの返し方

1. ローカル変数todoをjsonとして返す。
2. `status: create`はresponseのstatus code
3. エラーハンドリング時もjsonでresponsを返す
    1. `.errors`でエラー内容をresに返す。
    2. status:もrubyのエラーの記述を返している。
    [unprocessable_entityについて](https://qiita.com/icb54615/items/d6a1b504c4d1a5288d73)

```rb
    def create
        todo = Todo.new(todo_params)
        if todo.save
            render json: todo, status: create
        else
            render json: todo.errors, status: :unprocessable_entity
            # 422 処理出来ないエンティティ。WebDAVの拡張ステータスコード
        end
    end
```

# material-design-iconのためにvuetifyプラグインを準備する理由

[material-design公式](https://www.npmjs.com/package/vue-material-design-icons)

```js
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
```