from flask import jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models.config import db
from models.transactions import Transactions
from models.user import User
from flask import Flask


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

api = Api(app)
db.init_app(app)

class TransactionsResource(Resource):
    def get(self):

        transactions = Transactions.query.all()

      
        transactions_list = [
            {
                'id': transaction.id,
                'description': transaction.description,
                'amount': transaction.amount,
                'date': transaction.date.strftime('%Y-%m-%d %H:%M:%S'),
                'category': transaction.category
            }
            for transaction in transactions
        ]

      
        return jsonify(transactions_list)

api.add_resource(TransactionsResource, '/transactions')
if __name__ == '__main__':
    app.run(port=5555)