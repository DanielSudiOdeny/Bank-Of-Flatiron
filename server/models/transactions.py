from .config import db

class Transactions(db.Model):

    id = db.Column(db.Integer(), primary_key=True)
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    amount = db.Column(db.Integer(), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    category = db.Column(db.String(255), nullable=(False))




