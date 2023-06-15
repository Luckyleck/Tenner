class MultiLineFormatter < Logger::Formatter
  def call(severity, timestamp, _progname, msg)
    "#{severity}: #{msg}\n"
  end

  def tagged(*tags)
    yield self
  end

  def clear_tags!

  end
end

Rails.logger.formatter = MultiLineFormatter.new