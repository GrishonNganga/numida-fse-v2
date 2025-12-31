from graphql_api.loans import LoansQuery
from graphene import Schema

schema = Schema(query=LoansQuery)