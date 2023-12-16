
from app import db, app, Transactions
from datetime import datetime

seed_data = [
    {
        "id": 2,
        "date": "2019-12-01",
        "description": "South by Southwest Quinoa Bowl at Fresh & Co",
        "category": "Food",
        "amount": -10.55
    },
    {
        "id": 3,
        "date": "2019-12-02",
        "description": "South by Southwest Quinoa Bowl at Fresh & Co",
        "category": "Food",
        "amount": -10.55
    },
    {
        "id": 4,
        "date": "2019-12-04",
        "description": "Sunglasses, Urban Outfitters",
        "category": "Fashion",
        "amount": -24.99
    },
    {
        "id": 5,
        "date": "2019-12-06",
        "description": "Venmo, Alice Pays you for Burrito",
        "category": "Food",
        "amount": 8.75
    },
    {
        "id": 6,
        "date": "2019-12-06",
        "description": "Chipotle",
        "category": "Food",
        "amount": -17.59
    },
    {
        "id": 7,
        "date": "2019-12-07",
        "description": "Birthday Check from Grandma",
        "category": "Gift",
        "amount": 50
    },
    {
        "id": 8,
        "date": "2019-12-09",
        "description": "Lyft Ride",
        "category": "Transportation",
        "amount": -13.25
    },
    {
        "id": 9,
        "date": "2019-12-11",
        "description": "Paycheck from Bob's Burgers",
        "category": "Income",
        "amount": 1000
    },
    {
        "id": 10,
        "date": "2019-12-16",
        "description": "Tickets, Flatiron Multiplex Cinemas",
        "category": "Entertainment",
        "amount": -24
    },
    {
        "id": 11,
        "date": "2019-12-16",
        "description": "MTA Vending Machine: MetroCard",
        "category": "Transportation",
        "amount": -116.39
    },
    {
        "id": 12,
        "date": "2019-12-17",
        "description": "Venmo, Pay Roommate for Rent",
        "category": "Housing",
        "amount": -975
    },
    {
        "id": 13,
        "date": "2022-07-09",
        "description": "Office lunch",
        "category": "Food",
        "amount": 2000
    },
    {
        "id": 14,
        "date": "2022-07-09",
        "description": "Office lunch Wednesday",
        "category": "Food",
        "amount": 3000
    },
    {
        "id": 15,
        "date": "2023-08-10",
        "description": "Movies",
        "category": "Entertainment",
        "amount": 3
    }]
   
def _parse_date(date_str):
    # Add your date parsing logic here
    return datetime.strptime(date_str, "%Y-%m-%d")

def seed_transactions():
    with app.app_context():
        for data in seed_data:
            transaction = Transactions(
                id=data["id"],
                date=_parse_date(data["date"]),
                description=data["description"],
                category=data["category"],
                amount=data["amount"]
            )
            db.session.add(transaction)

        db.session.commit()


if __name__ == "__main__":
    seed_transactions()
