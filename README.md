# ☁️ Hoodis3D

A modern interactive hoodie showcase built with **React, Three.js, React Three Fiber, GSAP, and Tailwind CSS**.

Hoodis3D focuses on creating an immersive fashion experience through smooth animations, interactive 3D product visualization, scroll-based transitions, and a responsive modern interface.

---

## ✨ Features

- 🎬 Interactive hero section with video-based mouse movement
- 🧥 Featured hoodie collection
- 🧊 Interactive 3D hoodie viewer
- 🎨 Real-time hoodie color customization
- 🖱️ Interactive 3D model controls
- ✨ Smooth GSAP animations
- 📜 Scroll-triggered animations
- 🌊 Smooth scrolling experience
- 📱 Responsive design for different screen sizes
- ☁️ Modern cloud-inspired visual design
- 📧 Newsletter subscription section
- 🧭 Responsive navigation bar

---

## 🛠️ Tech Stack

### Frontend
- **React 19**
- **Vite**
- **Tailwind CSS**

### 3D & Animation
- **Three.js**
- **React Three Fiber**
- **React Three Drei**
- **GSAP**
- **Lenis**

### Development
- **Oxlint**
- **Vite**

---

## 🎨 Design

Hoodis3D is designed around a clean, minimal fashion aesthetic with:

- Soft sky-blue backgrounds
- Cloud-inspired visuals
- Large typography
- Rounded UI elements
- Glassmorphism navigation
- Smooth transitions
- Interactive 3D product presentation

The goal is to make the product browsing experience feel more like an interactive visual experience than a traditional e-commerce page.

---

## 🧥 3D Hoodie Experience

The project includes an interactive 3D hoodie viewer powered by **Three.js** and **React Three Fiber**.

Users can interact with the hoodie model and customize its appearance through different color options.

The 3D section also adapts its camera field of view according to the screen size to provide a better experience across desktop and mobile devices.

---

## 🎬 Interactive Hero

The hero section uses a video as an interactive visual background.

The displayed video position changes according to the user's pointer movement:

```text
           UP
            ↑
            │
LEFT  ←  CENTER  →  RIGHT
            │
            ↓
          DOWN
```

Instead of simply playing the video normally, the application smoothly seeks between predefined video timestamps based on the pointer position.

This creates an interactive cinematic effect.

---

## ✨ Animations

GSAP is used throughout the project to create smooth transitions and scroll-based animations.

The Featured Hoodies section uses `ScrollTrigger` to animate:

- Section heading
- Product cards
- Opacity
- Position
- Scale

Animations are triggered as the user scrolls through the page.

---

## 🧩 Project Structure

```text
Hoodis3D/
│
├── public/
│   ├── images/
│   └── videos/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── FeaturedHoodies/
│   │   │   └── FeaturedHoodies.jsx
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   │
│   │   ├── Hero/
│   │   │   └── Hero.jsx
│   │   │
│   │   ├── HeroContent/
│   │   │   └── HeroContent.jsx
│   │   │
│   │   ├── Hoodie3D/
│   │   │   ├── Hoodie3D.jsx
│   │   │   └── Hoodie3D.css
│   │   │
│   │   └── Navbar/
│   │       └── Navbar.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- **Node.js**
- **npm**

---

### 1. Clone the repository

```bash
git clone https://github.com/makariosfaiz123/Hoodis3D.git
```

### 2. Navigate to the project

```bash
cd Hoodis3D
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available through the local URL provided by Vite.

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview

```bash
npm run preview
```

Runs the production build locally.

### Lint

```bash
npm run lint
```

Runs Oxlint against the project.

---

## 🧱 Main Components

### `Navbar`

Provides the main navigation interface with links to:

- Home
- Hoodies
- Vibes
- Collection

It also includes the search interface.

### `Hero`

Contains the main visual introduction of the website and works together with the interactive background video.

### `FeaturedHoodies`

Displays the featured hoodie collection with animated product cards.

Current featured products include:

- Cloudy Hoodie — `$59`
- Dreamy Hoodie — `$64`
- Chill Hoodie — `$59`

### `Hoodie3D`

The main interactive 3D product experience.

It uses:

- React Three Fiber
- Three.js
- Drei
- Interactive controls
- Dynamic hoodie colors
- Responsive camera configuration

### `Footer`

Contains:

- Newsletter subscription
- Shopping links
- Help links
- Company links
- Additional benefits/information

---

## 🎯 Project Concept

Hoodis3D is built around one main idea:

> **Turn a simple hoodie showcase into an interactive visual experience.**

Instead of presenting products through static images alone, the project combines:

```text
React
  +
Three.js
  +
3D Product Visualization
  +
GSAP Animations
  +
Interactive Video
  +
Responsive UI
```

to create a more immersive product presentation.

---

## 📱 Responsive Experience

The 3D experience dynamically adjusts its camera configuration depending on the viewport size.

This allows the hoodie model to remain visually balanced across:

- 📱 Mobile
- 📱 Small mobile screens
- 💻 Tablets
- 🖥️ Desktop screens

---

## 📌 Future Improvements

Possible extensions for the project include:

- 🛒 Shopping cart functionality
- 💳 Checkout flow
- 👕 More hoodie models
- 🎨 More customization options
- 🖼️ Product detail pages
- 🔍 Product search
- ❤️ Wishlist
- 📦 Order management
- 🔐 User authentication
- 🌐 Backend integration

---

## 👨‍💻 Author

**Makarios Faiz**

GitHub:  
https://github.com/makariosfaiz123

---

## ⭐ Support

If you like the project, consider giving it a ⭐ on GitHub.
