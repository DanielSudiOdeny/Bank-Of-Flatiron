from .config import db, SerializerMixin, check_password_hash, generate_password_hash
from sqlalchemy.ext.hybrid import hybrid_property
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    _password_hash = db.Column(db.String(255))

    serialize_rules = ('-transactions.user,')

    transactions = db.relationship('Transactions', backref='user')

    @hybrid_property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        self._password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self._password_hash, password)


    def __repr__(self):
        return f'<User {self.username}, ID: {self.id}>'

    


    