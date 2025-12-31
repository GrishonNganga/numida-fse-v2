from flask import Blueprint, request, jsonify
from database import db
from database.models import LoanPayment
from datetime import datetime

rest_api = Blueprint('rest_api', __name__)

@rest_api.route("/loans/<int:loan_id>/payments", methods=["POST"])
def add_loan_payment(loan_id):
    data = request.get_json()
    
    due_date = datetime.strptime(data["due_date"], "%Y-%m-%d").date()
    payment_date = None
    if data.get("payment_date"):
        payment_date = datetime.strptime(data["payment_date"], "%Y-%m-%d").date()
    
    payment = LoanPayment(
        loan_id=loan_id,
        due_date=due_date,
        payment_date=payment_date
    )
    
    db.session.add(payment)
    db.session.commit()
    
    return jsonify({
        "id": payment.id,
        "loan_id": payment.loan_id,
        "due_date": payment.due_date.isoformat(),
        "payment_date": payment.payment_date.isoformat() if payment.payment_date else None
    }), 201

