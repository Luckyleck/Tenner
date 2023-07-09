class Api::GigsController < ApplicationController

    before_action :set_gig, only: [:show, :update, :destroy]

    def index
        @gigs = Gig.all.map { |gig| format_gig_json(gig) }
  
        render json: @gigs
    end

    def show
        render json: format_gig_json(@gig, include_reviews: true)
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

    def search
        query = params[:query]
        @gigs = Gig.where("title ILIKE ? OR description ILIKE ?", "%#{query}%", "%#{query}%")
        render json: {
            gigs: @gigs.as_json(include: {
                seller: {
                    except: [:password_digest, :session_token]
                }
            }),
            query: query
        }
    end

    private

    def set_gig
        @gig = Gig.find(params[:id])
    end

    def gig_params
        params.require(:gig).permit(:title, :description, :base_price, :seller_id, images: [])
    end

    # def format_gig_json(gig, include_reviews: false)
    #     puts "include_reviews: #{include_reviews}"
    #     gig.as_json(
    #         include: {

    #             include_reviews ? {
    #                 only: [:id, :body, :gig_id, :reviewer_id],
    #                 include: {
    #                     reviewer: {
    #                         only: [:id, :username, :fname, :lname, :email]
    #                     }
    #                 }
    #             } : nil,

    #             # reviews: include_reviews ? {
    #             #     only: [:id, :body, :gig_id, :reviewer_id],
    #             #     include: {
    #             #         reviewer: {
    #             #             only: [:id, :username, :fname, :lname, :email]
    #             #         }
    #             #     }
    #             # } : nil,

    #             seller: {
    #                 except: [:password_digest, :session_token]
    #             }

    #         },
    #         methods: [:image_urls],
    #         except: [:seller_id]
    #     )
    # end

    def format_gig_json(gig, include_reviews: false)
        associations = {
            seller: {
                except: [:password_digest, :session_token]
            }
        }

        if include_reviews
            associations[:reviews] = {
                only: [:id, :body, :gig_id, :reviewer_id],
                include: {
                    reviewer: {
                        only: [:id, :username, :fname, :lname, :email]
                    }
                }
            }
        end

        gig.as_json(
            include: associations,
                methods: [:image_urls],
                except: [:seller_id]
        )
    end

end