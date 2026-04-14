# Sanjana Reddy - Data Engineer Portfolio

A modern, responsive, and dynamic personal portfolio website designed to showcase projects, experience, and skills in Data Engineering and Cloud Architecture. 

Built with **React** and **Vite**, featuring smooth animations powered by **Framer Motion**.

---

## 🚀 Live Demo
<!-- Replace next line with your actual Vercel link once deployed -->
[View Live Portfolio Here](https://your-vercel-link-here.vercel.app)

## 🛠️ Tech Stack
- **Framework:** React + Vite
- **Styling:** Vanilla CSS (App.css & index.css)
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 💡 Key Features
- **Centralized Data:** All personal information (experience, projects, skills, education) is pulled dynamically from a core `src/data.js` file, making it incredibly simple to update the portfolio as your career progresses.
- **Scroll Animations:** Interacting elements elegantly fade into view via Framer Motion's viewport detection.
- **Component Based Architecture:** Modular code separated intelligently (`Hero.jsx`, `Projects.jsx`, `Experience.jsx`, `Education.jsx`).
- **Responsive Navigation:** Interactive sticky header tracking page segments.
- **Micro-interactions:** Custom backgrounds, cursor tracking logic, and subtle hover effects to increase user engagement.

## 💻 Running the Project Locally

To test or view the application locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sanjanareddy17/portfolio.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173/`


## 📁 Updating Content
Need to update your resume, add a certification, or append a new project?
Simply open `src/data.js` and modify the JSON objects! The components will automatically adapt, structure, and render the new changes without any extra architectural hassle. 

## ☁️ Deployment Strategy
This static site is optimized to be deployed seamlessly with **Vercel**:

1. Log into [Vercel](https://vercel.com/) and link your GitHub account.
2. Select **"Import Project"** and choose this repository.
3. Vercel will auto-detect Vite. Ensure the output directory is `dist` and build command is `npm run build`.
4. Click **Deploy**. Changes pushed to the `main` branch will automatically trigger a new deployment.

---
*Designed and built by Sanjana Reddy.*
