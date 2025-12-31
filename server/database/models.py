from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey
from database import db
from sqlalchemy.orm import relationship

class Loan(db.Model):
    __tablename__ = 'loans'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    interest_rate = Column(Float, nullable=False)
    principal = Column(Integer, nullable=False)
    payments = relationship('LoanPayment', back_populates='loan')

class LoanPayment(db.Model):
    __tablename__ = 'loan_payments'
    id = Column(Integer, primary_key=True)
    loan_id = Column(Integer, ForeignKey('loans.id'), nullable=False)
    due_date = Column(Date, nullable=False)
    payment_date = Column(Date, nullable=True)
    loan = relationship('Loan', back_populates='payments')