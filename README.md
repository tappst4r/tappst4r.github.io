# tappst4r.github.io

# R.G.S. Trip Ticket System

## 📌 Project Overview
The **R.G.S. Trip Ticket System** is a web-based application designed to streamline trip ticket requests, approvals, and tracking. It allows users to submit trip ticket requests, administrators to review and approve them, and provides real-time updates on request statuses.

## 🚀 Features
- User authentication (admin login & role-based access)
- Trip ticket request submission
- Approval system for trip tickets
- Database integration with MySQL
- Responsive UI with Masonry (Waterfall) layout

## 🛠️ Technologies Used
- **Frontend:** HTML, CSS, JavaScript (Masonry Layout)
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Version Control:** Git & GitHub

---

## 📥 Installation & Setup

### 1️⃣ Prerequisites
Make sure you have the following installed on your machine:
- **[Node.js](https://nodejs.org/)** (v14 or later)
- **[MySQL](https://www.mysql.com/)** (Ensure a running MySQL server)
- **[Git](https://git-scm.com/)** (for cloning the repository)

### 2️⃣ Clone the Repository
```sh
 git clone https://github.com/oatlord/R.G.S.-Trip-Ticket-System.git
 cd R.G.S.-Trip-Ticket-System
```

### 3️⃣ Install Dependencies
```sh
 npm install
```

### 4️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
 DB_HOST=localhost
 DB_USER=root
 DB_PASSWORD=yourpassword
 DB_NAME=trip_ticket_db
 SESSION_SECRET=your_secret_key
```

### 5️⃣ Database Setup
Log in to MySQL and create the database:
```sql
 CREATE DATABASE ticket_and_material_requester_db;
```
Import the provided SQL dump:
```sh
 mysql -u root -p ticket_and_material_requester_db < database.sql
```

### 6️⃣ Run the Application
```sh
 npm start
```
The app should now be running on **`http://localhost:3000`**.

---

## 🔧 Troubleshooting
### 1️⃣ Common Issues & Fixes
- **Port Already in Use:** Change the port in `server.js` or terminate the existing process.
- **Database Connection Issues:** Double-check `.env` credentials and ensure MySQL is running.
- **Module Not Found:** Run `npm install` again to ensure all dependencies are installed.

For additional support, feel free to open an issue in the [GitHub repository](https://github.com/oatlord/R.G.S.-Trip-Ticket-System/issues).


---

## 👤 Author
**Christopher Jacob Ong**
- GitHub: [tappst4r]([https://github.com/oatlord](https://github.com/tappst4r))
- LinkedIn: [Christopher Jacob Ong](https://linkedin.com/in/christopher-jacob-ong-4ab37028b/)
