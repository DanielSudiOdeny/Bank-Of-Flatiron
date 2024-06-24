from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from werkzeug.security import check_password_hash, generate_password_hash

db = SQLAlchemy()