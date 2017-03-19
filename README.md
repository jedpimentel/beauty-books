# Beauty Books

1. git clone https://github.com/Resilient-Labs/beauty-books.git
2. cd beauty-books
3. npm install
4. mac: python -m SimpleHTTPServer 3000, pc: simplehttpserver
5. go to browser and type in localhost:3000
6. Navigate here to view the root route http://localhost:3000/public/#/

# Getting Started

## Routes 
The routes for the screen to screen navigation can be found in the config.js. When adding html screen, be sure to add to the configuration function within this config.js file.

## Views
The views, which are html snippets for this single page application, are found in the public/views directory

## Components
- Header
- Tabs

## Controllers
The logic to initialize the state for the current page and to define the behavior on the page objects. Do not use the controller to manipulate the DOM (use directives) or to share code / state across controllers 

## Services
- UserService
- AppointmentService
- ExpensesService

## Database Schema 
``` javascript
User = {
  primary_key: Integer,
  firstname: String,
  lastname: String,
  email: String,
  mobile: String,
  fb_id: String,
  google_id: String,
  create_date: Date,
}

Appointment = {
  primary_key: Integer,
  pro_id: Integer,
  appt_date: Date,
  amount: Float,
  note: String
}

Expenses = {
  primary_key: Integer,
  pro_id: Integer,
  expense_date: Date,
  amount: Float,
  note: String,
  img_path: String
}
```
