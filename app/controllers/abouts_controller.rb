class AboutsController < ApplicationController
  skip_before_filter :require_logged_in

  def show
    render :show
  end
end
