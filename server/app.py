from flask import Flask
from flask_graphql import GraphQLView
from routes import *
from schema import schema

app = Flask(__name__)

app.register_blueprint(routes)

app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))
# app.add_url_rule('/graphql/batch', view_func=GraphQLView.as_view('graphql', schema=schema, batch=True))

if __name__ == '__main__':
  app.run(debug=True)