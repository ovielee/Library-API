📚 Library Management API - Documentation
Overview
The Library Management API is a RESTful API that allows users to manage a library's book collection. It supports CRUD operations for books and enforces rate limiting to prevent abuse.

Base URL: https://your-deployed-api.com/api/v1
Version: v1
Authentication: ❌ Not required
Rate Limiting: ✅ 100 requests per minute per IP
📌 Rate Limiting
Each response includes the following headers:

X-RateLimit-Limit: Total requests allowed per minute
X-RateLimit-Remaining: Remaining requests before rate limit resets
X-RateLimit-Reset: Time (in seconds) until the limit resets
Example:

http
Copy
Edit
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1706543200
If the limit is exceeded, you’ll get:

json
Copy
Edit
{
  "status": "error",
  "code": 429,
  "message": "Too many requests. Please try again later."
}
📖 Endpoints
1️⃣ Retrieve All Books
GET /api/v1/books

📌 Fetch a paginated list of books.
✅ Request:
http
Copy
Edit
GET /api/v1/books?page=1&limit=10 HTTP/1.1
Host: your-deployed-api.com
✅ Response:
json
Copy
Edit
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
2️⃣ Retrieve a Specific Book
GET /api/v1/books/{id}

📌 Get details of a book.
✅ Request:
http
Copy
Edit
GET /api/v1/books/B001 HTTP/1.1
Host: your-deployed-api.com
✅ Response:
json
Copy
Edit
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
3️⃣ Add a New Book
POST /api/v1/books

📌 Add a new book to the library.
✅ Request:
http
Copy
Edit
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
✅ Response:
json
Copy
Edit
{
  "status": "success",
  "message": "Book added successfully!",
  "data": {
    "id": "B002",
    "title": "1984",
    "author": "George Orwell"
  }
}
❌ Validation Errors:
json
Copy
Edit
{
  "status": "error",
  "code": 400,
  "message": "Validation failed",
  "errors": {
    "title": "Title is required",
    "author": "Author is required"
  }
}
4️⃣ Update a Book
PUT /api/v1/books/{id}

📌 Update book details.
✅ Request:
http
Copy
Edit
PUT /api/v1/books/B002 HTTP/1.1
Host: your-deployed-api.com
Content-Type: application/json

{
  "availability": "checked out"
}
✅ Response:
json
Copy
Edit
{
  "status": "success",
  "message": "Book updated successfully!",
  "data": {
    "id": "B002",
    "availability": "checked out"
  }
}
5️⃣ Delete a Book
DELETE /api/v1/books/{id}

📌 Remove a book from the library.
✅ Request:
http
Copy
Edit
DELETE /api/v1/books/B002 HTTP/1.1
Host: your-deployed-api.com
✅ Response:
json
Copy
Edit
{
  "status": "success",
  "message": "Book deleted successfully!"
}
❌ Error Response (Book Not Found):
json
Copy
Edit
{
  "status": "error",
  "code": 404,
  "message": "Book not found"
}
📦 Deployment Instructions
1️⃣ Install dependencies

bash
Copy
Edit
npm install
2️⃣ Run locally

bash
Copy
Edit
npm run dev
3️⃣ Deploy to Vercel

bash
Copy
Edit
vercel
🔎 Testing with Postman
Open Postman.
Create a new collection.
Add GET, POST, PUT, DELETE requests.
Send requests and verify responses.