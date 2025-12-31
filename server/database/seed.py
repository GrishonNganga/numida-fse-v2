from database import db
from database.models import Loan, LoanPayment
import datetime

def seed_database():
    
    if Loan.query.first() is not None:
        return
    
    loans = [
        Loan(id=1, name="Tom's Loan", interest_rate=5.0, principal=10000),
        Loan(id=2, name="Chris Wailaka", interest_rate=3.5, principal=500000),
        Loan(id=3, name="NP Mobile Money", interest_rate=4.5, principal=30000),
        Loan(id=4, name="Esther's Autoparts", interest_rate=1.5, principal=40000),
    ]
    
    loan_payments = [
        LoanPayment(id=1, loan_id=1, due_date=datetime.date(2024, 3, 1), payment_date=datetime.date(2024, 3, 4)),
        LoanPayment(id=5, loan_id=1, due_date=datetime.date(2024, 4, 1), payment_date=datetime.date(2024, 3, 4)),
        LoanPayment(id=6, loan_id=1, due_date=datetime.date(2024, 5, 1), payment_date=datetime.date(2024, 3, 4)),
        LoanPayment(id=7, loan_id=1, due_date=datetime.date(2024, 6, 1), payment_date=datetime.date(2024, 3, 4)),
        LoanPayment(id=8, loan_id=1, due_date=datetime.date(2024, 7, 1)),
        LoanPayment(id=2, loan_id=2, due_date=datetime.date(2024, 3, 1), payment_date=datetime.date(2024, 3, 15)),
        LoanPayment(id=3, loan_id=3, due_date=datetime.date(2024, 3, 1), payment_date=datetime.date(2024, 4, 5)),
        LoanPayment(id=4, loan_id=4, due_date=datetime.date(2024, 3, 1), payment_date=datetime.date(2024, 5, 5)),
    ]
    
    db.session.add_all(loans)
    db.session.add_all(loan_payments)
    db.session.commit()