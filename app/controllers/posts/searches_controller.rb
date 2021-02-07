class Posts::SearchesController < ApplicationController
	def index
		# ↓曖昧検索
    @posts = Post.where('title LIKE(?)', "%#{params[:title]}%")
    # byebug
    respond_to do |format|
      format.html { redirect_to :root }
      # ↓検索結果のデータをレスポンスするコード
      format.json { render json: @posts }
    end
  end
end
