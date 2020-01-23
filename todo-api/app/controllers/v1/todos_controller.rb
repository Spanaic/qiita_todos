class V1::TodosController < ApplicationController
    def create
        todo = Todo.new(todo_params)
        if todo.save
            render json: todo
            #  status: :create
        else
            render json: todo.errors, status: :unprocessable_entity
            # 422 処理出来ないエンティティ。WebDAVの拡張ステータスコード
        end
    end

    def destroy
        todo = Todo.find(params[:id])
        if todo.destroy
            render json: todo
        end
        # NOTE:destroyしたあとのresは必要なのか質問する。
    end

    private
    def todo_params
        params.require(:todo).permit(:title, :user_id)
    end
end
