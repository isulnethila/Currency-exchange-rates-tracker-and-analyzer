# Currency Converter App

This is a **currency converter** built with **React.js (Next.js) for the frontend** and **Node.js (Express) for the backend**. The app fetches exchange rates from the Open Exchange Rates API and allows users to convert between different currencies.

## Features
- Convert currency using real-time exchange rates
- Select any currency from the dropdown
- Fetch historical exchange rates based on the selected date
- User-friendly interface with modern UI

## Technologies Used
- **Frontend:** React.js (Next.js)
- **Backend:** Node.js, Express.js
- **API:** Open Exchange Rates API
- **Styling:** Tailwind CSS

## Installation & Setup

### Backend (Node.js + Express)
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```
2. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
3. Create a `.env` file and add your Open Exchange Rates API key:
   ```sh
   APP_ID=your_open_exchange_rates_api_key
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The backend runs on **http://localhost:5000**.

### Frontend (React.js + Next.js)
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm run dev
   ```
   The frontend runs on **http://localhost:3000**.

## API Endpoints
### 1. Get All Currencies
```
GET /getAllCurrencies
```
**Response:** JSON object with currency codes and names.

### 2. Convert Currency
```
GET /convert?date=YYYY-MM-DD&sourceCurrency=USD&targetCurrency=INR&amountInSourceCurrency=100
```
**Response:** Converted amount in target currency.

## Usage
- Open **http://localhost:3000** in your browser.
- Select the **date, source currency, target currency**, and enter the amount.
- Click **Get the target currency** to see the converted amount.



## Output
-![Currency Converter Output](https://github.com/isulnethila/Currency-exchange-rates-tracker-and-analyzer/blob/main/output/Screenshot%202025-03-04%20013756.png?raw=true)
---

**Author:**  Isul  
GitHub: [Isul Nethila](https://github.com/isulnethila)




