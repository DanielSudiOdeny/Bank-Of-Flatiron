from .config import db

class Transactions(db.Model):

    id = db.Column(db.Integer(), primary_key=True)
    description = db.Column(db.String(255), nullable=False)
    amount = db.Column(db.Integer(), nullable=False)
    date = db.Column(db.DateTime, server_default=db.func.now())
    category = db.Column(db.String(255), nullable=(False))




