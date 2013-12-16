class TodosController < ApplicationController
	
	def index
		@todos = Todo.all
		render json: @todos
	end

	def show
		@todo = Todo.find(params[:id])
		render json: @todo
	end

	def create
		@todo = Todo.create(todos_params)
		render json: @todo
	end

  def update
    @todo = Todo.find(params[:id])
    render @todo.update_attributes!(todos_params)
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy(todos_params)
  end

	private

	def todos_params
		params.require(:todo).permit(:task, :complete)
	end
end
