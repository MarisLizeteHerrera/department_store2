class Api::ReviewsController < ApplicationController
  before_action :set_item
  before_action :set_review, only: [:update, :destroy]

  def index
    render json: @item.reviews
  end

  private
  def set_item
    @item = Item.find(params[:item_id])
  end
  
  def set_review
    @review = Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:title, :body, :rating, :author)
  end
end
