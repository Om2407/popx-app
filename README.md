# PopX App

A clean and responsive mobile app UI built with React JS and Tailwind CSS, based on the Adobe XD design provided by **Educase**. The app is centered on the webpage like a real mobile device and supports smooth navigation between all screens.

---

## Live Demo

🔗 [View Hosted App](https://popx-app-nlni.onrender.com)

## GitHub Repository

📁 [View Source Code](https://github.com/Om2407/popx-app)

---

## Screenshots

| Landing | Login | Signup | Profile |
|--------|-------|--------|---------|
| Welcome screen with two action buttons | Email and password login form | Full registration form | Account settings with user info |

---

## Pages

The app has four screens with navigation between them:

- **Landing Screen** — Welcome message with Create Account and Login buttons
- **Login Screen** — Simple login form with email and password fields
- **Signup Screen** — Registration form with name, phone, email, password, company name, and agency selection
- **Profile Screen** — Displays user account settings with avatar and bio

---

## Tech Stack

- **React JS** — Frontend library
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **React Router DOM** — Client-side navigation

---

## Getting Started

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/Om2407/popx-app.git

# 2. Go into the project folder
cd popx-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## Project Structure

```
popx-app/
├── public/
├── src/
│   ├── pages/
│   │   ├── LandingScreen.jsx
│   │   ├── LoginScreen.jsx
│   │   ├── SignupScreen.jsx
│   │   └── ProfileScreen.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## Deployment

This project is hosted on Render. To deploy your own version:

1. Push your code to GitHub
2. Go to [render.com](https://render.com) and sign in with GitHub
3. Click **New → Static Site** and import your repository
4. Set Build Command to `npm install; npm run build` and Publish Directory to `dist`
5. Click **Deploy** — done!

---

## Assignment

This project was built as part of the frontend assignment given by **Educase India**.

---

## Author

Made with 💙 by Om Gupta