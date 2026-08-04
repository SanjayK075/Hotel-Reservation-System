# Hotel Reservation System

A full-stack hotel reservation platform supporting user registration, room browsing, booking, and cancellation — built end to end with a RESTful FastAPI backend and a normalised PostgreSQL schema.

## Features

- User registration and authentication
- Room browsing and availability search
- Booking creation and cancellation
- RESTful API backend with clear resource boundaries (users, rooms, bookings)
- Containerised with Docker for reproducible local deployment

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite) |
| Backend | FastAPI (Python) |
| Database | PostgreSQL |
| Deployment | Docker |

## Architecture

```
Client (React/Vite)
        │
        ▼
FastAPI backend  ──►  PostgreSQL
   (REST API)          (users, rooms, bookings)
```

## Getting started

```bash
# clone
git clone https://github.com/SanjayK075/<repo-name>.git
cd <repo-name>

# backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# frontend
cd frontend
npm install
npm run dev

# or, with Docker
docker compose up --build
```

## Database schema (high level)

- **users** — account details, auth credentials
- **rooms** — room type, rate, availability
- **bookings** — links a user to a room for a date range, tracks status (booked/cancelled)

## Screenshots
<img width="1401" height="871" alt="image" src="https://github.com/user-attachments/assets/b53b828b-b07e-4767-adfa-749ac4ce9a61" />
<img width="1539" height="905" alt="image" src="https://github.com/user-attachments/assets/3e9aef1f-04e8-4cb6-8d20-e65762da7d88" />
<img width="1415" height="797" alt="image" src="https://github.com/user-attachments/assets/62905e1b-4779-4b6f-ba87-be171fd5de13" />
<img width="1413" height="645" alt="image" src="https://github.com/user-attachments/assets/475f78e6-964a-475e-a45c-d7e1edd827e3" />
<img width="1342" height="869" alt="image" src="https://github.com/user-attachments/assets/e16fb961-d206-4ee6-875b-7888a748e80e" />


## What I'd improve next

- Polish the UI/UX — current styling is functional but not refined; plan to rework layout, spacing, and visual hierarchy using a component library (e.g. Tailwind or shadcn/ui)
- Add form validation and error states on the booking flow (currently minimal feedback on invalid input)
- Add an admin dashboard for managing rooms and viewing bookings, instead of direct DB access
- Add automated tests for the booking API (currently untested)
## License

MIT
