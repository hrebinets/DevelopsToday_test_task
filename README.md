# 🍲 Recipe Book App

Full-stack JavaScript application for exploring and filtering recipes.

## 🛠️ Installation & Run Instructions

### 1. Clone the project
git clone https://github.com/yourusername/recipe-book.git && cd recipe-book
###2. Backend Setup
cd backend && npm install && echo "API_BASE_URL=https://www.themealdb.com/api/json/v1/1" > .env && npm run start:dev
###3. Frontend Setup
cd ../frontend && npm install && echo "NEXT_PUBLIC_API_URL=http://localhost:3000" > .env.local && npm run dev
✅ Your app will be available at:
Frontend → http://localhost:3001
Backend → http://localhost:3000
