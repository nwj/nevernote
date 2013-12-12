class ApplicationController < ActionController::Base
  include SessionsHelper

  before_filter :require_logged_in

  protect_from_forgery
end
