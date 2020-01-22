class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :uid #jsonで返すカラム？
  # NOTE: :uidが追加されてなかったので、axiosで叩いた時に検索出来なかった。
  has_many :todos #アソシエーション先のテーブル名
end

# serializerを組むことでコントローラ単位でjsonファイルをresする際のincludeの記述を省く事ができる？
