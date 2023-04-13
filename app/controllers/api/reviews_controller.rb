class Api::ReviewsController < ApplicationController
    skip_before_action :verify_authenticity_token

    before_action :set_review, only: [:show, :update, :destroy]
  
    def index
        @reviews = Review.all
        render json: @reviews
    end

    def show
        render json: @review, include: [:reviewer, :gig]
    end
  
    def create
        @review = Review.new(review_params)
  
        if @review.save
            render json: { status: 'success', review: @review }
        else
            render json: { success: false }
        end
    end

    def update
        if @review.update(review_params)
            render json: { status: 'success', review: @review }
        else
            render json: { success: false }
        end
    end
    
    def destroy
        @review.destroy
        render json: { status: 'destroyed!'}
    end
  
    private

    def set_review
        @review = Review.find(params[:id])
    end
  
    def review_params
        params.require(:review).permit(:body, :reviewer_id, :gig_id)
    end
end