# React + TypeScript + Vite

## Running it Locally

## Prerequisites
---------------

* Node.js (version 14 or higher)
* npm (version 6 or higher) or yarn (version 1 or higher)
* A code editor or IDE of your choice

## 🛠️ Technologies Used

- React
- Tailwind CSS
- React Hook Form
- React Router
- Zustand (State Management)
- Radix UI
- Recharts
- TanStack React Query


## Step 1: Clone the Repository
-----------------------------

Clone the repository using your preferred method:
```bash
git clone https://github.com/Onibenjo/soar-fe.git
```

## Step 2: Install Dependencies
-----------------------------

Navigate to the project directory and install the dependencies:
```bash
npm install
```
or
```bash
yarn install
```

## Step 3: Start the Development Server
--------------------------------------

Start the development server:
```bash
npm run dev
```
or
```bash
yarn dev
```

## Step 4: Open the App in Your Browser
--------------------------------------

Open your browser and navigate to `http://localhost:5173` (or the port number specified in `vite.config.js` file).

## Troubleshooting
-----------------

* If you encounter issues with dependencies, try running `npm install` or `yarn install` again.
* If you encounter issues with the development server, try running `npm run dev` or `yarn dev` again.


## 📦 Packages Used

This project leverages a variety of libraries and tools to ensure scalability, maintainability, and a great developer experience.

### **Core Libraries**
- **`react`**: The core library for building user interfaces in a component-based architecture.
- **`typescript`**: Type checking javascript

---

### **Form Management**
- **`react-hook-form`**: For form validation.
- **`@hookform/resolvers`**: Allows integration of external validation schemas, such as `Zod`, into `react-hook-form`.

---

### **Validation**
- **`zod`**: A TypeScript-first schema validation library for handling input.

---

### **Routing**
- **`react-router`**: Manages routing in the application.

---

### **State Management**
- **`zustand`**: Easy-to-use state management library.

---

### **Data Fetching & Caching**
- **`@tanstack/react-query`**: Data-fetching library that handles caching, synchronization, and background updates.

---

### **UI & Animation**
- **`@radix-ui/react-tabs`**: Unstyled, accessible tabs components for building tab interfaces.
- **`tailwind-merge`**: Ensures class merging behavior in Tailwind CSS when conditionally combining styles.
- **`clsx`**: Utility for combining class names.

---

### **Charts & Visualizations**
- **`recharts`**: For charts
- **`react-minimal-pie-chart`**: For the pie chart; it's minimal

---

### **Carousel/Sliders**
- **`react-slick`**: Used for building responsive sliders and carousels.

---

### **Data Persistence**
- **`idb-keyval`**: storing info in indexDB

Due to the time constraints, I use a couple of packages. Ideally, most components would be done form scratch.



---

## 🚀 Features

- Image upload and preview functionality.
- Form validation using `react-hook-form` and `zod`.
- Responsive and animated UI built with Tailwind CSS.
- Data persistence using `idb-keyval` (IndexedDB).
- State management with Zustand.
- Data visualization using Recharts and Pie Charts.
- Dynamic routing using React Router.
- A11y assessable


## 💡 Future Improvements

- Add unit tests for all components.
- Implement dark mode.
- Integrate internationalization (i18n) for multiple languages.
