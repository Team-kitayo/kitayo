class PagesController < ApplicationController
  def page1
  end

  def visit
  end

  def others
    # Slack.chat_postMessage text: "------------------------------\n\n\n\n\n \"Others\" is coming \n\n\n\n\n ------------------------------", username: "Kitayo_Notifier", channel: "#kitayo"
    notifier = Slack::Notifier.new('https://hooks.slack.com/services/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')
    notifier.ping('others')
    @hide_flg = true
  end

  def inter
   Slack.chat_postMessage text: "------------------------------\n\n\n\n\n \"Interviewer\" is coming \n\n\n\n\n ------------------------------", username: "Kitayo_Notifier", channel: "#kitayo"
   @hide_flg = true
  end

  def appointment
  end

  def noAppointment
   Slack.chat_postMessage text: "------------------------------\n\n\n\n\n \"Non-appointment\" is coming \n\n\n\n\n ------------------------------", username: "Kitayo_Notifier", channel: "#kitayo"
   @hide_flg = true
  end

  def call
   @hide_flg = true
   @name = params[:name]
   Slack.chat_postMessage text: "------------------------------\n\n\n\n\n @#{@name} \n \"appointment\" is coming \n\n\n\n\n ------------------------------", username: "Kitayo_Notifier", channel: "#kitayo"
  end
end
