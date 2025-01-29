# 📚 Library Management API

## Overview
The **Library Management API** is a RESTful API that allows users to manage a library's book collection. It supports **CRUD operations** for books and enforces **rate limiting** to prevent abuse.

- **Base URL**: `https://your-deployed-api.com/api/v1`
- **Version**: v1
- **Authentication**: ❌ Not required
- **Rate Limiting**: ✅ 100 requests per minute per IP

---

## 📌 Rate Limiting
Each response includes the following headers:

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1706543200
```

If the limit is exceeded, you’ll get:

```json
{
  "status": "error",
  "code": 429,
  "message": "Too many requests. Please try again later."
}
```

---

## 📖 Endpoints

### 1️⃣ Retrieve All Books
**GET** `/api/v1/books`

#### ✅ Request:
```http
GET /api/v1/books?page=1&limit=10 HTTP/1.1
Host: your-deployed-api.com
```

#### ✅ Response:
```json
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "B001",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Classic Fiction",
        "publication_date": "1925-04-10",
        "availability": "available"
      }
    ],
    "pagination": {
      "current_page": 1,
      "per_page": 10,
      "total_pages": 3,
      "total_books": 25
    }
  }
}
```

---

### 2️⃣ Retrieve a Specific Book
**GET** `/api/v1/books/{id}`

#### ✅ Request:
```http
GET /api/v1/books/B001 HTTP/1.1
Host: your-deployed-api.com
```

#### ✅ Response:
```json
{
  "status": "success",
  "data": {
    "id": "B001",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic Fiction",
    "publication_date": "1925-04-10",
    "availability": "available",
    "edition": "1st",
    "summary": "A novel about the corruption of the American Dream."
  }
}
```

---

### 3️⃣ Add a New Book
**POST** `/api/v1/books`

#### ✅ Request:
```http
POST /api/v1/books HTTP/1.1
Host: your-deployed-api.com
Content-Type: application/json

{
  "title": "1984",
  "author": "George Orwell",
  "genre": "Dystopian Fiction",
  "publication_date": "1949-06-08",
  "availability": "available",
  "edition": "1st",
  "summary": "A dystopian novel about totalitarianism."
}
```

#### ✅ Response:
```json
{
  "status": "success",
  "message": "Book added successfully!",
  "data": {
    "id": "B002",
    "title": "1984",
    "author": "George Orwell"
  }
}
```

---

### 4️⃣ Update a Book
**PUT** `/api/v1/books/{id}`

#### ✅ Request:
```http
PUT /api/v1/books/B002 HTTP/1.1
Host: your-deployed-api.com
Content-Type: application/json

{
  "availability": "checked out"
}
```

#### ✅ Response:
```json
{
  "status": "success",
  "message": "Book updated successfully!",
  "data": {
    "id": "B002",
    "availability": "checked out"
  }
}
```

---

### 5️⃣ Delete a Book
**DELETE** `/api/v1/books/{id}`

#### ✅ Request:
```http
DELETE /api/v1/books/B002 HTTP/1.1
Host: your-deployed-api.com
```

#### ✅ Response:
```json
{
  "status": "success",
  "message": "Book deleted successfully!"
}
```

---

## 📦 Deployment Instructions

1️⃣ **Install dependencies**
```bash
npm install
```

2️⃣ **Run locally**
```bash
npm run dev
```

3️⃣ **Deploy to Vercel**
```bash
vercel
```

---

## 🔎 Testing with Postman
1. Open **Postman**.
2. Create a **new collection**.
3. Add **GET, POST, PUT, DELETE** requests.
4. Send requests and verify responses.

---

## 🎯 Summary
✅ CRUD operations for books  
✅ RESTful API with versioning  
✅ Rate limiting (100 requests/min)  
✅ Deployed on **Vercel**  

---

🚀 **Now your API is ready for production!** 🚀
