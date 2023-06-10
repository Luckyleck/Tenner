class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + ['password']

    def index

        @users = User.all
        render json: { users: @users }

    end

    def show

        @user = User.find(params[:id])
        render json: @user, include: :gigs
        
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

        if @user.update(user_params)
            render :show
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end
  
    private
  
    def user_params
        params.require(:user).permit(:email, :username, :password, :fname, :lname)
    end
end