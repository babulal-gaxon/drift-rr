class PreappsController < ApplicationController
  def taskmanager
    @title = 'Task Manager'
  end

  def taskmanager_inner
    @title = 'Task Manager Inner'
  end

  def mail
    @title = 'Mails'
  end

  def mail_detail
    @title = 'Mail Details'
  end

  def contactus
    @title = 'Contact Us'
  end

  def chat
    @title = 'Chat'
  end

  def chat_start
    @title = 'Chat Start'
  end

end
