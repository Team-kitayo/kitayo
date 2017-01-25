class PagesController < ApplicationController
  def page1
    $name = "channel"
  end

  def visit
  end

  def others
    @property = "Others"
    @color = "FFD742"
    notifier.ping @massage
    @hide_flg = true
  end

  def inter
    @property = "Interviewer"
    @color = "FF2020"
    notifier.ping @massage
    @hide_flg = true
  end

  def appointment
  end

  def noAppointment
    @property = "Non-appointment"
    @color = "06A4E4"
    notifier.ping @massage
    @hide_flg = true
  end

  def call
    $name = "#{params[:n]}"
    @property = "Appointment"
    @color = "00AA06"
    notifier.ping @massage
    @hide_flg = true
  end
end
