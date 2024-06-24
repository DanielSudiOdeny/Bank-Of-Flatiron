import random
from app import db, app
from models.transactions import Transactions
from models.user import User
from faker import Faker

fake = Faker()

# Example seed data without dates to test auto-generation
seed_data = [
    {
        "description": "South by Southwest Quinoa Bowl at Fresh & Co",
        "category": "Food",
        "amount": -10.55,
        "merchant": "Fresh & Co"
    },
    {
        "description": "Sunglasses, Urban Outfitters",
        "category": "Fashion",
        "amount": -24.99,
        "merchant": "Urban Outfitters"
    },
    {
        "description": "Venmo, Alice Pays you for Burrito",
        "category": "Food",
        "amount": 8.75,
        "merchant": ""
    },
    {
        "description": "Chipotle",
        "category": "Food",
        "amount": -17.59, 
        "merchant": ""
    },
    {
        "description": "Birthday Check from Grandma",
        "category": "Gift",
        "amount": 50,
        "merchant": ""
    }
]

def seed_transactions():
    with app.app_context():

         # Seed users
        print("Generating Users...👥")
        users = []
        for _ in range(5):
            user = User(username=fake.user_name(), email=fake.email(), password_hash=fake.password())
            db.session.add(user)
            users.append(user)

        db.session.commit()
        print("Users generated :D")
        # Seed transactions
        print("Generating Transactions...💲")
        for data in seed_data:
            transaction = Transactions(
                description=data["description"],
                category=data["category"],
                amount=data["amount"],
                merchant=data["merchant"],
                user_id=random.choice(users).id
            )
            db.session.add(transaction)
        

        # Generate additional transactions using Faker
        db.session.commit()
        print("Transactions generated :D")
        
       
        print("Seeding done🚀")

if __name__ == "__main__":
    seed_transactions()
