🛍️ ShoppyGlobe
ShoppyGlobe is a simple yet complete e-commerce web application built with React, Redux Toolkit, and React Router. It uses the DummyJSON API to fetch product data and supports features like a shopping cart, product search, product details, and a checkout flow.

🚀 Features
📦 Product List Page with search functionality

🔍 Product Detail Page with image, description, and price

🛒 Cart Page with quantity management, total calculation, and remove feature

💰 Checkout Page with itemized billing and a “Pay” button

✅ Thank You Page with cart reset and navigation

🌐 Routing handled using react-router-dom

🔄 State management via @reduxjs/toolkit

🎨 Responsive UI with pure CSS

🧱 Project Structure
shoppyglobe/
├── public/
├── src/
│   ├── components/       # Reusable UI components (e.g., Header, ProductItem, CartItem)
│   ├── pages/            # Page-level components (Home, Cart, Checkout, ProductDetail, etc.)
│   ├── redux/            # Redux slice (cartSlice.js) and store configuration
│   ├── hooks/            # Custom hooks (e.g., useFetchProducts, useFetchProductDetail)
│   ├── App.jsx           # Main app layout and routes
│   ├── main.jsx          # React root entry
├── README.md
├── package.json

📦 Installation
1.Clone the repository:
git clone https://github.com/nishandutta/shoppyglobe.git
cd shoppyglobe

2.Install dependencies:
npm install
npm install react-router-dom
npm install @reduxjs/toolkit react-redux

3.Start the development server:
npm run dev

4.Open your browser and go to:
👉 http://localhost:5173/

🔧 Technologies Used
React
Redux Toolkit
React Router DOM
Pure CSS
DummyJSON API

📸 Screenshots
<img width="955" alt="image" src="https://github.com/user-attachments/assets/3a3d22f9-5015-4589-a688-28b94b74f460" />
<img width="959" alt="image" src="https://github.com/user-attachments/assets/7054da2a-8fe2-4712-ba32-18e9035cef7d" />
<img width="959" alt="image" src="https://github.com/user-attachments/assets/5f1c5a20-87f7-4d72-8bb1-40064fa9d421" />
<img width="959" alt="image" src="https://github.com/user-attachments/assets/6f289f70-4cb8-475c-baec-28e24c326173" />
<img width="959" alt="image" src="https://github.com/user-attachments/assets/23e5d963-abc6-4fe3-8adb-8fea4398bdc0" />
<img width="959" alt="image" src="https://github.com/user-attachments/assets/06f45e44-6577-43a4-b879-6530310744ff" />
<img width="959" alt="image" src="https://github.com/user-attachments/assets/8940d1a5-a8b8-42d1-b311-35c0f031168c" />
<img width="959" alt="image" src="https://github.com/user-attachments/assets/d0ed852f-c8cf-4549-b4f1-ece4b9a97835" />

📌 Future Enhancements
Add user login/authentication

Store cart data in cloud server

Filter products by category

Add real payment integration







