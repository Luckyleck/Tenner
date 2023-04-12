class Api::GigsController < ApplicationController

    before_action :set_gig, only: [:show, :update, :destroy]

    def index
        @gigs = Gig.all
        render json: @gigs
    end

    def show
        render json: @gig.as_json(include: :reviews)
    end

    def create
        @gig = current_user.gigs.new(gig_params)

        if @gig.save
            render json: @gig, status: :created
        else
            render json: @gig.errors, status: :unprocessable_entity
        end
    end

    def update
        if @gig.update(gig_params)
            render json: @gig
        else
            render json: @gig.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @gig.destroy
    end

    private

    def set_gig
        @gig = Gig.find(params[:id])
    end

    def gig_params
        params.require(:gig).permit(:title, :description, :base_price, :seller_id)
    end

end