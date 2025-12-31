<p align="center">
  <img src="./web/src/assets/numida-logo.png" alt="Logo" width="200">
</p>

# Numida Full Stack Assessment Implementation (v2)

### second time is the chsrm :)

### TLDR: Watch the [demo here](https://drive.google.com/file/d/1ciIAoplWAX2VnSb50BoON4SnNm3T-pf3/view?usp=sharing) or try the app [here](https://numida-fse.vercel.app)

iPhone style UI full-stack loan management application for tracking loans, payments, and payment statuses. Built with React 19, TypeScript, and a Python Flask backend.


### [Watch Demo](https://drive.google.com/file/d/1ciIAoplWAX2VnSb50BoON4SnNm3T-pf3/view?usp=sharing) | [Try Live App](https://numida-fse.vercel.app)

---


## Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for build tooling
- **Apollo Client** for GraphQL data fetching
- **React Router v7** for navigation
- **Vitest** for testing

### Backend
- **Python 3.9+** with Flask
- **Graphene** for GraphQL API
- **SQLAlchemy** for ORM
- **Flask-RESTful** for REST endpoints
- **SQLite** for data storage
- **Docker** for containerization

---

## Project Structure

```
full-stack/
├── server/                    # Python Flask backend
│   ├── database/              # SQLAlchemy models & seeding
│   ├── graphql_api/           # GraphQL schema & resolvers
│   ├── rest_api/              # REST endpoints
│   └── tests/                 # Backend tests
│
└── web/                       # React frontend
    └── src/
        ├── __generated__/     # GraphQL codegen types
        ├── components/        # Shared components
        ├── features/
        │   ├── iphone/        # iPhone UI simulation
        │   └── numida/        # Loan management app
        ├── pages/             # Route pages
        └── shared/            # Reusable UI components
```

---

## Deployment

### Frontend (Vercel)
| | |
|---|---|
| **URL** | [https://numida-fse.vercel.app](https://numida-fse.vercel.app) |
| **Platform** | Vercel |
| **Deployment** | Automatic from `main` branch |

### Backend (Render)
| | |
|---|---|
| **GraphQL API** | [https://numida-fse.onrender.com/graphql](https://numida-fse.onrender.com/graphql) |
| **REST API** | [https://numida-fse.onrender.com](https://numida-fse.onrender.com) |
| **Platform** | Render |
| **Deployment** | Automatic from `main` branch |

> ⚠️ **Note**: Render spins down after 10 mins of inactivity. Initial load may take ~30 seconds while the service restarts.

---

## Features

### ✅ GraphQL Data Layer

Query loans with embedded payment data and computed fields:

```graphql
{
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
```

Query all payments separately:

```graphql
{
  payments {
    id
    dueDate
    paymentDate
    name
    principal
    interestRate
    status
  }
}
```

### ✅ REST API for Payments

Add a new payment to a loan:

```bash
POST /loans/<loan_id>/payments
Content-Type: application/json

{
  "due_date": "2025-03-15",
  "payment_date": "2025-03-20"  # optional - omit for unpaid
}
```

### ✅ Payment Status Categorization

Payments are automatically categorized based on payment timing:

| Status | Condition | Color |
|--------|-----------|-------|
| **On Time** | Paid within 5 days of due date | 🟢 Green |
| **Late** | Paid 6-30 days after due date | 🟠 Orange |
| **Defaulted** | Paid more than 30 days late | 🔴 Red |
| **Unpaid** | No payment date recorded | ⚪ Grey |

### ✅ iPhone-Style UI

- Custom iPhone simulator wrapper with realistic bezels
- Animated loading screen with progress bar
- Home screen with app icons
- Status bars (home & in-app)

### ✅ Loan Management Features

- **Loan List**: View all loans with principal amounts
- **Expandable Details**: Click to reveal repayment progress
- **Payment Transactions**: View all payments with status indicators
- **Add Payment Drawer**: Modal form with validation
- **Progress Tracking**: Visual progress bar for repayment
- **Overdue Indicators**: Days overdue shown for defaulted loans

### ✅ Refactored Loan Calculator

Clean, typed component with:
- Props-based interface
- Real-time interest calculations
- Separated utility functions for testability

---

## Local Development

### Prerequisites
- Node.js 18+
- Python 3.9+
- Docker (for backend)

### Backend Setup

```bash
cd server
docker compose up --build
```

Server runs at `http://localhost:2024`

GraphiQL available at `http://localhost:2024/graphql`

### Frontend Setup

```bash
cd web
npm install
npm run dev
```

App runs at `http://localhost:5173`

### Environment Variables (Frontend)

Create `.env` file in `/web`:

```env
VITE_API_URL=http://localhost:2024
```

---

## Testing

### Frontend Tests

```bash
cd web
npm run test
```

Tests include:
- Component tests (Button, ProgressBar, LoanItemTransaction)
- Hook tests (useLoadingProgress)
- Utility tests (loan calculator, validation)

### Backend Tests

```bash
cd server
pytest
```

Tests include:
- Loan amount calculation
- Payment status resolution logic

---

## API Reference

### GraphQL Endpoint: `/graphql`

#### Queries

| Query | Description |
|-------|-------------|
| `loans` | Get all loans with payments |
| `payments` | Get all loan payments |

#### Computed Fields on Loans

| Field | Description |
|-------|-------------|
| `amountPayable` | Principal + total interest |
| `monthlyPayment` | Amount payable ÷ number of payments |
| `unpaidBalance` | Remaining amount to be paid |

### REST Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/loans/<id>/payments` | Add payment to loan |

---

## Potential Improvements

### Security
- Add authentication & authorization
- Implement role-based access control

### Data Layer
- Migrate to PostgreSQL for production
- Add CRUD operations for loans
- Implement soft deletes

### User Experience
- Add search & filter for loans
- Smooth animations & transitions
- Internationalization (i18n)
- Accessibility improvements (a11y)

### Testing
- Increase coverage
- Add E2E tests with Playwright

---

## License

This project was created as part of a full-stack assessment.

---

<p align="center">
  <i>Built with ☕ and lots of fun</i>
</p>