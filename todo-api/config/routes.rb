Rails.application.routes.draw do
  # 今回はapi側のバリデーションを省略
  namespace :v1 do
    resources :todos, only: [:create, :destroy]
    # :todosはコントローラのシンボル、　only:はキー、[]はvalue、:createなどのアクションはシンボル
    resources :users, only: [:index, :create]
  end
end
