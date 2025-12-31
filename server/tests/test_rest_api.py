import pytest
from datetime import datetime

def parse_date(date_string):
    return datetime.strptime(date_string, "%Y-%m-%d").date()


class TestDateParsing:
    def test_parses_valid_date(self):
        result = parse_date("2024-01-15")
        assert result.year == 2024
        assert result.month == 1
        assert result.day == 15

    def test_parses_end_of_month(self):
        result = parse_date("2024-12-31")
        assert result.year == 2024
        assert result.month == 12
        assert result.day == 31

    def test_parses_leap_year(self):
        result = parse_date("2024-02-29")
        assert result.month == 2
        assert result.day == 29

    def test_invalid_format_raises_error(self):
        with pytest.raises(ValueError):
            parse_date("15-01-2024")

    def test_invalid_date_raises_error(self):
        with pytest.raises(ValueError):
            parse_date("2024-02-30")

