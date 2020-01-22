class V1::UsersController < ApplicationController
    def index
        if params[:uid]
            current_user = user.find_by(uid: params[:uid])
            # emailではなく、uidを格納するカラムを設けて、axiosでuid検索をしに行く
            render json: current_user
            # NOTE:ここのレスポンスはtodoと違って頻繁に確認にしに行くのかもしれない。だからstatus codeがない？
        else
            users = User.all
            render json: users
        end
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user, status: :create
        else
            render json: user.errors, status: :unprocessable_entity
            # createアクションはerrorハンドリングが必要になるので、status codeもエラーを想定する
        end
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :uid)
    end
end
