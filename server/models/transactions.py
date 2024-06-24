from .config import db, SerializerMixin, check_password_hash, generate_password_hash

class Transactions(db.Model, SerializerMixin):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer(), primary_key=True)
    description = db.Column(db.String(255), nullable=False)
    amount = db.Column(db.Integer(), nullable=False)
    date = db.Column(db.DateTime(), server_default=db.func.now())
    merchant = db.Column(db.String(255), nullable=True)
    category = db.Column(db.String(255), nullable=False)

    serialize_rules = ('-user.transactions',)

    user_id = db.Column(db.Integer(), db.ForeignKey('users.id'), nullable=False)

    def __repr__(self):
        return f'User()'




