class PreappsController < ApplicationController
  def taskmanager
    @title = 'taskmanager'
  end

  def mail
    @title = 'Mails'
  end

  def contactus
    @title = 'Contact Us'
  end

  def chat
    @title = 'Chat'
  end

end
