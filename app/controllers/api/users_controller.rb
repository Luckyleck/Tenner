class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + ['password']

    def index

        @users = User.all
        render json: { users: @users }

    end

    def show
        @user = User.find(params[:id])

        render json: @user,
            include: {
                gigs: {
                    include: {
                        seller: { except: [:password_digest, :session_token] },
                        reviews: {
                            include: {
                                reviewer: { except: [:password_digest, :session_token] }
                            }
                        }
                    },
                    methods: [:image_urls]
                },
                photo: {}
            },
            except: [:password_digest, :session_token]
    end
    
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)

            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        
        @user = current_user

        if user_params[:photo]
            @user.photo.attach(user_params[:photo])
        end

        if @user.update(user_params.except(:photo))
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end
  
    private
  
    def user_params
        params.require(:user).permit(:email, :username, :password, :fname, :lname, :photo)
    end

end