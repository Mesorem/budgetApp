defmodule Budget do
  @moduledoc """
  Documentation for Budget.
  """

  def get_all() do
    {:ok, budgets} = Budget.BudgetStore.get_all()
    |> IO.inspect
    budgets.data
  end

  def get(id) do
    {:ok, budget} = Budget.BudgetStore.get(id)
    |> IO.inspect
    budget.data
  end

  def create(budget) do
    Budget.BudgetStore.create(budget.id, budget.data)
    |> IO.inspect
  end

  def delete(id) do
    Budget.BudgetStore.delete(id)
    |> IO.inspect
  end

  def update(budget) do
    Budget.BudgetStore.update(budget.id, budget)
    |> IO.inspect
  end

end
