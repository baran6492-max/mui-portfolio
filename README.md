# 🌟 Modern Personal Portfolio & Interactive CV

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/MUI-v5-007FFF?style=flat-square&logo=mui&logoColor=white)](https://mui.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

A clean, responsive, and interactive portfolio & resume web application designed to showcase professional experience, projects, technical skills, and contact information. Built with modern web development standards and sleek Material Design aesthetics.

---

## 🚀 Key Features

- **Responsive & Modern UI:** Optimized for all screen sizes (mobile, tablet, desktop) using Material-UI (MUI v5) Grid and component systems.
- **Interactive Resume & Timeline:** Categorized work experience and education timelines with modal popups for detailed descriptions.
- **Dynamic Portfolio Showcase:** Filterable project catalog with preview images, tech stack badges, and direct links.
- **Profile Sidebar:** Always-accessible personal snapshot with direct contact details and CV download trigger.
- **Contact Hub:** Interactive validated contact form ready for backend or service integration (e.g., EmailJS / Formspree).
- **Clean Architecture:** Modular component structure with clean separation of data (`portfolioData.js`, `resumeData.js`) and presentation logic.

---

## 🛠️ Tech Stack

- **Core:** [React.js](https://reactjs.org/)
- **UI Framework & Components:** [Material-UI (MUI v5)](https://mui.com/) & [MUI Lab](https://mui.com/material-ui/about-the-lab/)
- **Icons:** [MUI Icons](https://mui.com/material-ui/material-icons/)
- **Styling:** CSS3, Emotion (MUI default theme engine)
- **Deployment:** GitHub Pages / Vercel / Netlify

---

## 📁 Project Structure
```text
src/
├── assets/          # Images, logos, and static resources
├── components/      # Reusable UI widgets (Timeline, Header, Profile, etc.)
├── pages/           # Main route views (Resume, Portfolio, Contact, Skills)
├── utils/           # Static data objects and configuration
├── App.jsx          # App layout root and routing
└── index.js         # React DOM entrypoint
