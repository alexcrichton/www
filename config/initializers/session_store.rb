# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_alex_web_session',
  :secret      => 'ce4098e43cc4333c3c51b91adffcedc17316f8fe490805efba9993e2269b7746ccc35a2555acf1ebf65ec7933ebb2fbf86b8a43de23f1a91f2f80c96a44a1f18'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
