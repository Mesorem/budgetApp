defmodule Interface.FeedChannel do
  use Phoenix.Channel

  def join("feed:" <> feed_id, _message, socket) do
    {:ok, socket}
  end
end
