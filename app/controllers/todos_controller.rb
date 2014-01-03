class TodosController < ApplicationController
	respond_to :json

	def index
		respond_with Todo.all
	end

	def show
    respond_with Todo.find(params[:id])
	end

  def create
    respond_with Todo.create(todos_params)
  end

  def update
    @todo = Todo.find(params[:id])
    respond_with @todo.update_attributes!(todos_params)
  end

  def destroy
    respond_with Todo.destroy(params[:id])
  end


	private

	def todos_params
		params.require(:todo).permit(:task, :complete)
	end
end
