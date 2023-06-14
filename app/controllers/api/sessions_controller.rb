class Api::SessionsController < ApplicationController
    def show
        if current_user
            @user = current_user
            render 'api/users/show'
            # render json: { user: current_user }
        else
            render json: { user: nil }
        end
    end
  

    # def create
    #     @user = User.find_by_credentials(params[:credential], params[:password])
    
    #     if @user
    #       login!(@user)
    #       render 'api/users/show'
    #     else
    #       render json: { errors: ['Invalid. Please check username/email and password'] }, status: :unauthorized
    #     end
    # end

    def create
        @user = User.find_by_credentials(params[:credential], params[:password])

        if @user
            login!(@user)
            render json: @user.as_json(methods: [:photo_url], except: [:password_digest, :session_token])
        else
            render json: { errors: ['Invalid. Please check username/email and password'] }, status: :unauthorized
        end
    end

  
    def destroy
        logout!
        render json: { message: 'success' }
    end
end