# React + Vite


 Video: https://drive.google.com/file/d/1bnKAhkaEFYduxD_mv86TmKPtX-3pPTwy/view

# Project Name :✈️ Travel Planner

 A modern  Travel Planner web application built with React.js and Tailwind CSS.

 The app allows users to explore destinations, search for destinations,
add destinations to their trip, manage their selected trip, calculate
the estimated budget, and save personal travel preferences using browser
LocalStorage.

------------------------------------------------------------------------

# Feature

- Attractive Travel Planner header

- 🗺️ Explore multiple travel destinations

- 🔍 Search destinations by name

- 🖼️ Destination cards with image, country, category, description, and
   budget

- ➕ Add destinations to My Trip

- 🗑️ Remove individual destinations

- 🧹 Clear the complete trip

- 💰 Automatically calculate total estimated trip budget

- 📍 Display total selected destinations

- 👤 Save travel preferences

- 🎒 Select travel type:

  - Solo

  - Couple

  - Family

  - Friends

- 💵 Select travel budget:

 - Budget

 - Standard

 - Premium

- 🌎 Select preferred destination

- 💾 Store trip data in LocalStorage

- 💾 Store travel preferences in LocalStorage

- 📱 Responsive design for desktop, tablet, and mobile

- 🎨 Modern gradient-based UI using Tailwind CSS

------------------------------------------------------------------------

# Technologies Used
  - React.js
  - javascript
  - vite
  - HTML5
  - LocalStorage
  - React Hooks
    - UseState
    - useEffect
    - useReducer


------------------------------------------------------------------------

## Project Structure

Travel App/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── DestinationCard.jsx
│   │   ├── DestinationExplorer.jsx
│   │   ├── Header.jsx
│   │   ├── MyTrip.jsx
│   │   └── TravelPreferences.jsx
│   │
│   ├── data/
│   │   └── destinations.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

------------------------------------------------------------------------

##  Installation 

### 1. Create React + Vite Project

```bash
npm create vite@latest travel-planner -- --template react
```

### 2. Open the Project

```bash
cd travel-planner
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

### 5. Configure Tailwind in `vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
});
```

### 7. Start the Development Server
``` bash
 npm run dev
 ```

     Then open the local URL shown in the terminal, usually:
    ``` 
    http://localhost:5173
    ```
   

   ------------------------------------------------------------------------

## 🚀 How It Works

### 🔎 Explore Destinations

The **Destination Explorer** displays all available destinations from:

``` text
src/data/destinations.js
```

Users can search destinations using the search box.

------------------------------------------------------------------------

### ➕ Add to Trip

When the user clicks **Add to Trip**, the selected destination is sent
to the reducer.

The reducer prevents the same destination from being added more than
once.

------------------------------------------------------------------------

### 🧳 My Trip

The **My Trip** section displays all selected destinations.

Users can:

-   Remove a destination
-   Clear the complete trip
-   View the number of selected destinations
-   View the total estimated budget

The total budget is calculated using:

``` javascript
trip.reduce(
    (total, destination) => total + destination.budget,
    0
);
```

------------------------------------------------------------------------

### 💾 LocalStorage

The selected trip is saved in browser LocalStorage using:

``` text
travelTrip
```

Travel preferences are saved using:

``` text
travelPreferences
```

This means the data can remain available after refreshing the page.

------------------------------------------------------------------------

## 🧠 React Concepts Used

### useState

Used for:

-   Destination search
-   Travel preference form

### useEffect

Used to save trip and preference data to LocalStorage whenever the data
changes.

### useReducer

Used to manage the trip state.

Reducer actions include:

``` text
ADD
REMOVE
CLEAR
```

------------------------------------------------------------------------

## 📊 Destination Data

Each destination contains information such as:

``` javascript
{
    id: 1,
    name: "Manali",
    country: "India",
    category: "Mountain",
    budget: 15000,
    description: "Enjoy beautiful mountains, snow and peaceful valleys.",
    image: "image-url"
}
```

------------------------------------------------------------------------

## 🎨 UI Design

The project uses Tailwind CSS utility classes for:

-   Responsive layouts
-   Gradients
-   Cards
-   Shadows
-   Borders
-   Buttons
-   Typography
-   Hover animations
-   Mobile responsiveness

------------------------------------------------------------------------

## 📱 Responsive Design

The application is designed to work on:

-   💻 Desktop
-   💻 Laptop
-   📱 Tablet
-   📱 Mobile

Destination cards automatically change their grid layout according to
screen size.
