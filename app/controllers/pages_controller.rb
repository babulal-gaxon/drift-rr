class PagesController < ApplicationController
  def wall
    @title = 'Wall Page'
  end

  def profile
    @title = 'Profile - Pages'
  end

  def login
    @title = 'Login Page'
  end

  def signup
    @title = 'Signup Page'
  end

  def forgot_password
    @title = 'Forgot Password Page'
  end

  def lock_screen
    @title = 'Lock Screen Page'
  end

  def blank
    @title = 'Blank Page'
  end

  def search
    @title = 'Search Page'
  end

  def error_404
    @title = 'Error 404 Page'
  end

  def error_500
    @title = 'Error 500 Page'
  end

end
