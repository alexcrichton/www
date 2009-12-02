# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_alex_web_session',
  :secret      => '12d87d4f7d5794db2a2d8ce84993d3e46cd4ace1f6b840b3bce3517396991633b557ffe21e2bbbcae747335a35d00a9c1fab6acaf83bda177bbf7ed0d0fd544b'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
