# Savings Management System 🏦

A full‑stack platform for managing savings efficiently with separate applications for customers and administrators.

---

## 📁 Project Structure

```
savings-management-system/
├── client-app/              # Customer-facing application
│   ├── backend/            # Client API server
│   └── frontend/           # Client React app
├── admin-app/              # Admin management application
│   ├── backend/            # Admin API server
│   └── frontend/           # Admin React app
└── README.md
```

---

## 🚀 Quick Start

### ✅ Prerequisites

- Node.js (v16+ recommended)
- PostgreSQL Database
- npm or yarn installed

---

## 🔧 Installation Guide

### 1️⃣ Client Application

#### 📌 Backend Setup
```bash
cd client-app/backend
npm install
cp .env.example .env
# Update .env with your PostgreSQL config (DB_NAME, USER, PASSWORD, etc.)
npm run dev
```

#### 🎨 Frontend Setup
```bash
cd client-app/frontend
npm install
cp .env.example .env
# Update .env if needed (e.g., API base URL)
npm start
```

---

### 2️⃣ Admin Application

#### ⚙️ Backend Setup
```bash
cd admin-app/backend
npm install
cp .env.example .env
# Update .env with your PostgreSQL config
npm run dev
```

#### 🖥️ Frontend Setup
```bash
cd admin-app/frontend
npm install
cp .env.example .env
npm start
```

---

## 🔐 Environment Variables

Each `.env` file must include the following:

```
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=savings_db
JWT_SECRET=your_secret_key
```

---

## 🏁 Running All Services Together

You’ll run each server independently on different terminals:

| App | Type | Command |
|------|------|---------|
| Client | Backend | `cd client-app/backend && npm run dev` |
| Client | Frontend | `cd client-app/frontend && npm start` |
| Admin | Backend | `cd admin-app/backend && npm run dev` |
| Admin | Frontend | `cd admin-app/frontend && npm start` |

---

## 🎯 Features

✅ Secure Authentication  
✅ Role‑Based Access  
✅ Savings Tracking  
✅ Admin Dashboard & Reports  
✅ Modern UI with React  

---

## 📌 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js |
| Backend | Node.js + Express |
| Database | PostgreSQL |
| Auth | JWT |

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you’d like to modify.

---

## 📜 License

This project is licensed under the MIT License.

---

🌟 **Enjoy building the Savings Management System!**