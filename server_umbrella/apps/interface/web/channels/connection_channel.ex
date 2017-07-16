defmodule Interface.ConnectionChannel do
  use Phoenix.Channel
  require Logger

  def join("connection:tests", _message, socket) do
    {:ok, socket}
  end

  def handle_in("connectionTestPush", _, socket) do
    push(socket, "connectionReceived", %{data: "Connection has been succesful"})
    {:noreply, socket}
  end

  def handle_in("connectionTestReply", _, socket) do
    {:reply, {:ok, %{data: "Connection has been succesful"}}, socket}
  end

  def handle_in("getBudget", %{"data" => id}, socket) do
    Logger.info( "Requested a budged with: id->#{id}" )
    Logger.info( "Getting budget from store with id: #{id}..." )
    data = Budget.get(id)
    Logger.info( "Obtained" )
    Logger.info( "Extracted budget:" )
    IO.inspect ( data )
    {:reply, { :ok, %{data: data} }, socket}
  end
end
