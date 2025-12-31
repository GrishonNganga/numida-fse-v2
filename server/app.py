from flask import Flask
from flask_graphql import GraphQLView
from flask_cors import CORS
from database import setup_database
from graphql_api import schema
from rest_api import rest_api

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

app.add_url_rule(
    "/graphql", view_func=GraphQLView.as_view("graphql", schema=schema, graphiql=True)
)
app.register_blueprint(rest_api, url_prefix="/api")

@app.route("/")
def home():
    return "Welcome to the Loan Application API"

import os

if __name__ == "__main__":
    setup_database(app)
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
