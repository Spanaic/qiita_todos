class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :username
  #外部キーとして受け取っているのはuser_idだけなので、jsonファイルにusernameを持たせるために定義しなくてはならない
  belongs_to :username

  def username
    object.user.name
  end
  # NOTE:serializerの使い方について一度勉強する。
end

