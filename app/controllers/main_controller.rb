class MainController < ApplicationController
  
  def index
  	Todo.all
  end

  def show
  	find
  end

  def create
  	Todo.create(todo_params)
  end

  def update
  	find
  	@todo.update_attributes!(todo_params)
  end

  def destroy
  	Todo.destroy(params[:id])
  end

  private

  def todo_params
  	params.require(:todo).permit(:task, :complete)
  end

  def find
  	@todo = Todo.find(params[:id])
  end
end
