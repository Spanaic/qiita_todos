class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email #jsonで返すカラム？
  has_many :todos #アソシエーション先のテーブル名
end

# serializerを組むことでコントローラ単位でjsonファイルをresする際のincludeの記述を省く事ができる？
