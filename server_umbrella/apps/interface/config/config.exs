# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :interface, Interface.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "03N9H8X9AR3H7iylrtmXjpMIxSC05DypHGyYiJlw0ggoNQEB/LB7i0xfPbJ8+rM3",
  render_errors: [view: Interface.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Interface.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
