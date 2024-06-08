# Installation

Run the following command to clone the repository

```
git clone https://github.com/Drug-Abuse-and-Prevention/DrugAbusePreventionNew/tree/94e96220ecb96b936d846e018d5e98629c99c6aa/Final-drug-abuse
```

Go to `frontend` and `backend` directory to install packages

```
cd frontend
npm install
```

```
cd backend
npm install
```

# Configuration

Create `.env` file inside `backend` directory and copy the following code

```
MONGO_URI=Your mongodb URI
PORT=3001
SECRET =secr3t
TWILIO_ACCOUNT_SID = YOUR_SID_OF_TWILIO_ACCOUNT
TWILIO_AUTH_TOKEN = AUTH_TOKEN
SENDGRID_API_KEY = YOUR_SENDGRID_API
WHEREBY_API_KEY = YOUR_WHEREBY_API
```

# Run the App

Go to `backend` and `frontend` directory and start the server

```
cd backend
node server.js
```

```
cd frontend
npm start
```

# Live Demo

https://dapr.netlify.app/
