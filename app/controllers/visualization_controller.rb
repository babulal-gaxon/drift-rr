class VisualizationController < ApplicationController
  def chartjs
    @title = 'Chart Js'
  end

  def am_charts
    @title = 'AM Charts'
  end

  def simple_map
    @title = 'Simple Map'
  end

  def events_map
    @title = 'Events Map'
  end

  def markers_map
    @title = 'Markers Map'
  end

  def geo_location_map
    @title = 'Geo Location Map'
  end

  def geo_coding_map
    @title = 'Geo Coding Map'
  end

  def overlay
    @title = 'Overlay'
  end

  def overlay_polylines
    @title = 'Overlay Polylines'
  end

  def overlay_polygons
    @title = 'Overlay Polygons'
  end

  def geo_json_polygons
    @title = 'Geo JSON Polygons'
  end

  def map_routes
    @title = 'Map Routes'
  end

  def advance_routes
    @title = 'Advance Routes'
  end

  def data_maps
    @title = 'Data Maps'
  end

  def am_maps
    @title = 'AM Maps'
  end

end
