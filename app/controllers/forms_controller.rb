class FormsController < ApplicationController
  def basic_form
    @title = 'Basic Form'
  end

  def file_upload
    @title = 'File Upload'
  end

end
