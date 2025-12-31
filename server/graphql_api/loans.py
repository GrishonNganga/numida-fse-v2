from graphene import ObjectType, String, Int, Float, List, Date
from sqlalchemy.orm import selectinload
from database.models import Loan, LoanPayment
from graphql_api.helpers import has_selected_field


def calculate_amount_payable(loan):
    rate_decimal = float(loan.interest_rate) / 100
    total_interest = loan.principal * rate_decimal * len(loan.payments)
    return loan.principal + total_interest


class LoanPaymentType(ObjectType):
    id = Int()
    due_date = Date()
    payment_date = Date()
    name = String()
    interest_rate = Float()
    principal = Int()
    status = String()

    def resolve_name(self, info):
        return self.loan.name

    def resolve_interest_rate(self, info):
        return self.loan.interest_rate

    def resolve_principal(self, info):
        return self.loan.principal

    def resolve_status(self, info):
        if self.payment_date is None:
            return 'Unpaid'
        
        days_late = (self.payment_date - self.due_date).days
        
        if days_late <= 5:
            return 'On Time'
        elif days_late <= 30:
            return 'Late'
        else:
            return 'Defaulted'

class ExistingLoans(ObjectType):
    id = Int()
    name = String()
    interest_rate = Float()
    principal = Int()
    amount_payable = Int()
    monthly_payment = Int()
    unpaid_balance = Int()
    payments = List(LoanPaymentType)

    def resolve_amount_payable(self, info):
        return calculate_amount_payable(self)

    def resolve_monthly_payment(self, info):
        return format(calculate_amount_payable(self) / len(self.payments), '.2f')

    def resolve_unpaid_balance(self, info):
        number_of_payments_paid = sum(1 for payment in self.payments if payment.payment_date is not None)
        monthly_payment = calculate_amount_payable(self) / len(self.payments)
        return calculate_amount_payable(self) - (number_of_payments_paid * monthly_payment)

class LoansQuery(ObjectType):
    loans = List(ExistingLoans)
    payments = List(LoanPaymentType)

    def resolve_loans(self, info):
        query = Loan.query
        if has_selected_field(info, 'payments'):
            query = query.options(selectinload(Loan.payments))

        return query.all()

    def resolve_payments(self, info):
        return LoanPayment.query.all()
