defmodule Interface.PageControllerTest do
  use Interface.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "Welcome to Phoenix!"
  end

  test "budget connection" do
    assert Budget.hello() == :world 
  end
end
