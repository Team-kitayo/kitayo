class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  def notifier
    $name
    @property
    @color
    @current = Time.now.to_i
    @massage = {
      "link_names": "1",
      "attachments": [
        {
        "title": "@#{$name}",
        "text": "\"#{@property}\" is coming",
        "color": "##{@color}",
        "ts": @current
        }
      ]
    }
    # notifier = Slack::Notifier.new('https://hooks.slack.com/services/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')
  end
end
