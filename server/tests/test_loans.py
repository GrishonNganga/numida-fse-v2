import pytest
from datetime import date, timedelta


class MockLoan:
    def __init__(self, principal, interest_rate, payments):
        self.principal = principal
        self.interest_rate = interest_rate
        self.payments = payments


class MockPayment:
    def __init__(self, due_date, payment_date=None):
        self.due_date = due_date
        self.payment_date = payment_date


def calculate_amount_payable(loan):
    rate_decimal = float(loan.interest_rate) / 100
    total_interest = loan.principal * rate_decimal * len(loan.payments)
    return loan.principal + total_interest


def resolve_status(payment):
    if payment.payment_date is None:
        return 'Unpaid'
    
    days_late = (payment.payment_date - payment.due_date).days
    
    if days_late <= 5:
        return 'On Time'
    elif days_late <= 30:
        return 'Late'
    else:
        return 'Defaulted'


class TestCalculateAmountPayable:
    def test_calculates_with_interest(self):
        loan = MockLoan(principal=10000, interest_rate=10, payments=[1, 2, 3])
        result = calculate_amount_payable(loan)
        assert result == 13000

    def test_zero_interest_rate(self):
        loan = MockLoan(principal=5000, interest_rate=0, payments=[1, 2])
        result = calculate_amount_payable(loan)
        assert result == 5000

    def test_single_payment(self):
        loan = MockLoan(principal=1000, interest_rate=12, payments=[1])
        result = calculate_amount_payable(loan)
        assert result == 1120


class TestResolveStatus:
    def test_unpaid_when_no_payment_date(self):
        payment = MockPayment(due_date=date.today())
        assert resolve_status(payment) == 'Unpaid'

    def test_on_time_when_paid_on_due_date(self):
        due = date.today()
        payment = MockPayment(due_date=due, payment_date=due)
        assert resolve_status(payment) == 'On Time'

    def test_on_time_when_paid_within_5_days(self):
        due = date.today()
        payment = MockPayment(due_date=due, payment_date=due + timedelta(days=5))
        assert resolve_status(payment) == 'On Time'

    def test_late_when_paid_after_5_days(self):
        due = date.today()
        payment = MockPayment(due_date=due, payment_date=due + timedelta(days=10))
        assert resolve_status(payment) == 'Late'

    def test_late_when_paid_at_30_days(self):
        due = date.today()
        payment = MockPayment(due_date=due, payment_date=due + timedelta(days=30))
        assert resolve_status(payment) == 'Late'

    def test_defaulted_when_paid_after_30_days(self):
        due = date.today()
        payment = MockPayment(due_date=due, payment_date=due + timedelta(days=31))
        assert resolve_status(payment) == 'Defaulted'

    def test_on_time_when_paid_early(self):
        due = date.today()
        payment = MockPayment(due_date=due, payment_date=due - timedelta(days=5))
        assert resolve_status(payment) == 'On Time'

