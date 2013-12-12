class LandingController < ApplicationController

  skip_before_filter :require_logged_in
  before_filter :require_logged_out

  def show
    render :show
  end
end
