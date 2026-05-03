# ECommerce Platform - Cloud Computing Solution

A complete, scalable e-commerce platform built with modern cloud technologies. This project integrates React frontend with Node.js backend, MongoDB database, and supports deployment on AWS/Azure.

## 🌟 Features

### Frontend
- ✅ Modern React 18 with Hooks
- ✅ Redux Toolkit for state management
- ✅ Tailwind CSS for responsive design
- ✅ User authentication and authorization
- ✅ Product browsing and filtering
- ✅ Shopping cart functionality
- ✅ Order management
- ✅ Admin dashboard
- ✅ Mobile-responsive design

### Backend
- ✅ Express.js REST API
- ✅ MongoDB with Mongoose ODM
- ✅ JWT authentication
- ✅ Role-based access control
- ✅ Product management (CRUD)
- ✅ Cart operations
- ✅ Order processing
- ✅ Payment gateway integration (PayPal, Stripe)
- ✅ Review and rating system
- ✅ Security with Helmet.js
- ✅ CORS enabled
- ✅ Request logging with Morgan

## 📋 Project Structure

```
ecomer/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   ├── Order.js
│   │   └── Review.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── cart.js
│   │   ├── orders.js
│   │   ├── payments.js
│   │   ├── users.js
│   │   └── reviews.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Shop.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Orders.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── store/
│   │   │   ├── index.js
│   │   │   ├── authSlice.js
│   │   │   ├── cartSlice.js
│   │   │   ├── productSlice.js
│   │   │   └── orderSlice.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- npm or yarn
- MongoDB (local or cloud)
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd ecomer
```

2. **Install dependencies**
```bash
# Install root dependencies
npm install

# Install backend dependencies
npm install --workspace=backend

# Install frontend dependencies
npm install --workspace=frontend
```

3. **Setup Environment Variables**

Create `.env` file in `backend/` directory:
```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` and update:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_super_secret_key_here
CLIENT_URL=http://localhost:3000
```

4. **Start MongoDB**
```bash
mongod
```

5. **Start the application**

Open two terminals:

**Terminal 1 - Backend:**
```bash
npm run dev --workspace=backend
```

**Terminal 2 - Frontend:**
```bash
npm run dev --workspace=frontend
```

The application will be available at `http://localhost:3000`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove/:itemId` - Remove item from cart
- `PUT /api/cart/update/:itemId` - Update cart item
- `DELETE /api/cart/clear` - Clear cart

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/status` - Update order status (Admin)
- `GET /api/orders/admin/all` - Get all orders (Admin)

### Payments
- `POST /api/payments/process` - Process payment
- `GET /api/payments/verify/:paymentId` - Verify payment
- `POST /api/payments/refund/:orderId` - Refund payment

### Reviews
- `GET /api/reviews/product/:productId` - Get product reviews
- `POST /api/reviews` - Create review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

### Users
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/profile/:id` - Get user profile
- `PUT /api/users/update/:id` - Update profile
- `DELETE /api/users/:id` - Delete user (Admin)
- `PUT /api/users/:id/role` - Update user role (Admin)

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication:

1. User registers/logs in
2. Server returns JWT token
3. Token is stored in Redux store and localStorage
4. Token is sent with every authenticated request
5. Backend validates token using middleware

## 🎯 Key Technologies

### Backend
- **Express.js** - REST API framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Token-based authentication
- **Bcryptjs** - Password hashing
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger

### Frontend
- **React 18** - UI library
- **Redux Toolkit** - State management
- **Tailwind CSS** - CSS framework
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **React Icons** - Icon library

### Database
- **MongoDB** - Document-based database
- **MongoDB Atlas** - Cloud hosting option

## 🌐 Deployment

### Deploy to AWS

1. **Backend on EC2:**
```bash
# SSH into EC2 instance
ssh -i your-key.pem ec2-user@your-instance-ip

# Install Node.js and dependencies
sudo yum install nodejs npm
cd ~/app && npm install

# Run with PM2 for process management
npm install -g pm2
pm2 start server.js --name "ecommerce-api"
pm2 startup
pm2 save
```

2. **Frontend on S3 + CloudFront:**
```bash
# Build the app
npm run build --workspace=frontend

# Upload to S3
aws s3 sync frontend/build s3://your-bucket-name

# Create CloudFront distribution for CDN
```

3. **Database on MongoDB Atlas:**
- Create account at https://www.mongodb.com/cloud/atlas
- Create cluster and get connection string
- Update MONGODB_URI in backend .env

### Deploy to Azure

1. **Backend on App Service:**
```bash
# Create resource group
az group create --name ecommerce-rg --location eastus

# Create App Service plan
az appservice plan create --name ecommerce-plan --resource-group ecommerce-rg --sku B1

# Create web app
az webapp create --name ecommerce-api --resource-group ecommerce-rg --plan ecommerce-plan --runtime "node|18"
```

2. **Frontend on Static Web Apps:**
```bash
az staticwebapp create --name ecommerce-client --source . --resource-group ecommerce-rg
```

3. **Database on Cosmos DB:**
- Create Cosmos DB instance with MongoDB API
- Update connection string in backend .env

## 🐳 Docker Deployment

Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  mongodb:
    image: mongo:5
    ports:
      - "27017:27017"
    
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    depends_on:
      - mongodb
    
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
```

Run: `docker-compose up`

## 📊 Database Schema

### User
- `_id` - ObjectId
- `name` - String
- `email` - String (unique)
- `password` - String (hashed)
- `role` - String (customer/admin)
- `address` - Object
- `createdAt` - Date
- `updatedAt` - Date

### Product
- `_id` - ObjectId
- `name` - String
- `description` - String
- `price` - Number
- `category` - String
- `image` - String
- `stock` - Number
- `rating` - Number
- `author` - ObjectId (ref: User)
- `createdAt` - Date

### Order
- `_id` - ObjectId
- `orderId` - String (unique)
- `user` - ObjectId (ref: User)
- `items` - Array
- `totalAmount` - Number
- `orderStatus` - String
- `paymentStatus` - String
- `shippingAddress` - Object
- `createdAt` - Date

## 🧪 Testing

```bash
# Backend tests
npm test --workspace=backend

# Frontend tests
npm test --workspace=frontend
```

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcryptjs
- CORS enabled for cross-origin requests
- Helmet.js for HTTP headers security
- Input validation with express-validator
- Rate limiting for API endpoints
- MongoDB injection prevention

## 📝 Best Practices Implemented

✅ Clean code architecture
✅ Separation of concerns
✅ Error handling
✅ Request/response validation
✅ Consistent naming conventions
✅ Comprehensive comments
✅ Modular component structure
✅ State management patterns
✅ API versioning ready
✅ Scalable database design

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details

## 📞 Support

For support, email support@ecommerce.com or create an issue in the repository

## 🎓 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Happy Coding! 🚀**
