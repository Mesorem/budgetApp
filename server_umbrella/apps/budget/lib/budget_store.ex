defmodule Budget.BudgetStore do
  require Logger
  import RethinkDB.Query, except: [delete: 2]

  @budget_tb "budgets"

  def get_all() do
    table(@budget_tb)
    |> Budget.Database.run()
  end

  def get(id) do
    table(@budget_tb)
    |> get(id)
    |> Budget.Database.run()
  end

  def create(budget) do
    table(@budget_tb)
    |> insert(budget, %{return_changes: true})
    |> Database.run
  end

  def delete(id) do
    table(@budget_tb)
    |> get(id)
    |> RethinkDB.Query.delete()
    |> Budget.Database.run()
  end

  def update(id, new_budget) do
    table(@budget_tb)
    |> get(id)
    |> update(new_budget, %{return_changes: true})
    |> Budget.Database.run()
  end

end
