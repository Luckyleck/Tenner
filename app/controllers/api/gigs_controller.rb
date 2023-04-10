class Api::GigsController < ApplicationController

    def index

        @gigs = Gig.all
        render json: { gigs: @gigs }

    end





end