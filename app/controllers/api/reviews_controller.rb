class Api::ReviewsController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def index
        reviews = current_user.reviews
        render json: { reviews: reviews }
    end
  
    def create
        review = Review.new(review_params)
  
        if review.save
            render json: { status: 'success', review: review }
        else
            render json: { success: false }
        end
    end
  
    private
  
    def review_params
        params.require(:review).permit!
    end
end