import { gql } from "@apollo/client";

export const GET_LOANS = gql`
    query GET_LOANS {
        loans {
            id
            name
            principal
            interestRate
                amountPayable
                monthlyPayment
                unpaidBalance
            payments {
                id
                dueDate
                paymentDate
                status
            }
        }
    }
`;