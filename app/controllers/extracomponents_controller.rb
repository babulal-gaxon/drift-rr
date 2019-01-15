class ExtracomponentsController < ApplicationController
	
  def summernote_editor
    @title = 'SummerNote Editor'
  end

  def code_editor
    @title = 'Code Editor'
  end

  def date_time_picker
    @title = 'Date Time Picker'
  end

  def color_picker
    @title = 'Color Picker'
  end

  def sweet_alerts
    @title = 'Sweet Alerts'
  end
  
  def notifications
    @title = 'Notifications'
  end
  
  def drag_drop
    @title = 'Drag And Drop'
  end

end
