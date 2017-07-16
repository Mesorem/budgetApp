defmodule Interface.BudgetChannel do
  use Phoenix.Channel

  def join("budget:join", _message, socket) do
    {:ok, socket}
  end


  def handle_in("getAll", _, socket) do
    {:reply, {:ok, %{data: Budget.get_all()}}, socket}
  end

  def handle_in("get", %{id: id}, socket) do
    push(socket, "get", Budget.get(id))
    {:noreply, socket}
  end

  def handle_in("update", %{budget: new_budget}, socket) do
    push(socket, "update", Budget.update(new_budget))
    {:noreply, socket}
  end

  def handle_in("delete", %{id: id}, socket) do
     push(socket, "delete", Budget.delete(id))
     {:noreply, socket}
  end

  def handle_in("create", %{budget: new_budget}, socket) do
    push(socket, "create", Budget.create(new_budget))
    {:noreply, socket}
  end

end
