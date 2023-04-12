class Api::ReviewsController < ApplicationController
    skip_before_action :verify_authenticity_token

    before_action :set_review, only: [:show]
  
    def index
        @reviews = Review.all
        render json: @reviews
    end

    def show
        render json: @review
    end
  
    def create
        @review = Review.new(review_params)
  
        if review.save
            render json: { status: 'success', review: review }
        else
            render json: { success: false }
        end
    end
  
    private

    def set_review
        @review = Review.find(params[:id])
    end
  
    def review_params
        params.require(:review).permit!
    end
end