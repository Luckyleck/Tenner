class Api::GigsController < ApplicationController

    before_action :set_gig, only: [:show, :update, :destroy]

    def index
        @gigs = Gig.all.map do |gig|
            gig.as_json(include: {
                reviews: {
                    only: [:id, :body, :gig_id, :reviewer_id],
                    include: {
                        reviewer: {
                            only: [:id, :username, :fname, :lname, :email]
                        }
                    }
                },
                seller: {
                    except: [:password_digest, :session_token]
                }
            })
        end
      
        render json: @gigs
    end

    def show
        render json: @gig, include: {
            reviews: {
                only: [:id, :body, :gig_id, :reviewer_id],
                include: {
                    reviewer: {
                        only: [:id, :username, :fname, :lname, :email]
                    }
                }
            },
            seller: {
                except: [:password_digest, :session_token]
            }
        },
        except: [:seller_id]
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
        @gigs = Gig.where("title ILIKE ? OR description ILIKE ?", "%#{params[:query]}%", "%#{params[:query]}%")
        render json: @gigs.to_json(include: {
            seller: {
                except: [:password_digest, :session_token]
            }
        })
    end

    private

    def set_gig
        @gig = Gig.find(params[:id])
    end

    def gig_params
        params.require(:gig).permit(:title, :description, :base_price, :seller_id, :image, :photos)
    end

end