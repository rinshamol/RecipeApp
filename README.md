# Recipe Finder App

A responsive Recipe Finder web app built with React and Vite, powered by the Spoonacular API. Search for any recipe and get detailed cooking instructions, ingredients, and nutritional info instantly.

🔗 **Live Demo:** [recipe-app-git-main-rinshamols-projects.vercel.app](https://recipe-app-one-liard.vercel.app/)



---

## ✨ Features

- 🔍 Search recipes by name in real-time
- 📋 View detailed recipe information including:
  - Cook time
  - Vegetarian / Non-vegetarian badge
  - Price per serving
  - Full ingredients list
  - Step-by-step cooking instructions
- ⚡ Fast and responsive UI built with React and Vite
- 📱 Mobile-friendly layout

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| React | UI components and state management |
| Vite | Build tool and dev server |
| CSS Modules | Scoped component styling |
| Spoonacular API | Recipe data source |
| Vercel | Deployment and hosting |

---

## 📁 Project Structure

```
RecipeApp/
├── src/
│   ├── components/
│   │   ├── Container.jsx         # Main layout wrapper
│   │   ├── FoodDetails.jsx       # Recipe detail view
│   │   ├── FoodItem.jsx          # Individual recipe card
│   │   ├── FoodList.jsx          # Recipe search results
│   │   ├── InnerContainer.jsx    # Inner layout component
│   │   ├── Item.jsx              # Ingredient item
│   │   ├── ItemList.jsx          # Ingredients list
│   │   ├── Nav.jsx               # Navigation bar
│   │   └── Search.jsx            # Search input
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── vercel.json                   # Vercel API proxy config
├── vite.config.js
└── index.html
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- A free [Spoonacular API key](https://spoonacular.com/food-api)

### Installation

```bash
# Clone the repository
git clone https://github.com/rinshamol/RecipeApp.git

# Navigate into the project
cd RecipeApp

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
VITE_SPOON_KEY=your_spoonacular_api_key_here
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

This project is deployed on **Vercel** with automatic CI/CD — every push to the `main` branch triggers a new deployment.

The Spoonacular API proxy is configured in `vercel.json` to handle API requests in production:

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://api.spoonacular.com/:path*"
    }
  ]
}
```

---

## 🎯 What I Learned

- Fetching and displaying real-time data from a third-party REST API
- Managing API keys securely using environment variables
- Configuring Vite proxy for local development and replicating it on Vercel
- Building reusable React components with CSS Modules
- Deploying a React/Vite app with CI/CD on Vercel

---

## 📄 License

This project is for educational purposes only. Recipe data is provided by [Spoonacular](https://spoonacular.com).

---

> Made with 🍕 by [Rinshamol](https://github.com/rinshamol)
