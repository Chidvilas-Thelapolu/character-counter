# Character Counter

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

A feature-rich, beautiful, real-time Character Counter app featuring a massive dark-themed UI. The system analyzes keystrokes and extracts detailed statistics, dividing content into multiple groups like Capitals, Small Letters, Numbers, and Special Characters, visualizing exactly how many times each character is typed.

### 🌐 **Live Demo:** [Character Counter Online](https://Chidvilas-Thelapolu.github.io/character-counter/)

---

## 📸 Features

- **Blazing Fast Regex Analysis:** Real-time extraction of specific character groups (Numbers, Uppercase, Lowercase, Special).
- **Glassmorphic Interactive UI:** Sleek `.stat-card` components that elevate and shade dynamically upon hovering.
- **Detailed Component Expansion:** Toggling the **Show Details** panel inside any card renders an embedded scrollable pane, badge-mapping exactly what characters you typed and tracking their specific occurrences (e.g., `G × 3`).
- **Responsive Flexbox/Grid Canvas:** Collapses gracefully from a side-by-side desktop panel view into an overarching mobile stack architecture.
- **Vite Configuration:** Optimized build engine routing via GitHub Pages custom base deployments.

---

## 🛠️ Technologies Stack

| Layer          | System Used       | Purpose                                                                                                                                        |
| :------------- | :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**  | **React 18**      | High-performance state tracking (`useState`) and functional components mapping.                                                                |
| **Build Tool** | **Vite**          | Fast module bundling with Hot Module Replacement (HMR).                                                                                        |
| **Styling**    | **Vanilla CSS 3** | Highly customizable element control. Dynamic variable handling (`rgba()`, `box-shadow`) matching premium dark-theme palettes (`#0f172a`, etc). |
| **Deployment** | **GitHub Pages**  | Handled natively utilizing the `gh-pages` automated static build pusher command.                                                               |

---

## 📂 Folder Structure

```
character-counter/
├── node_modules/         # Package dependencies
├── public/               # Public assets (e.g. vite.svg)
├── src/                  # Direct React Source Hub
│   ├── components/       # Reusable UI Architecture
│   │   ├── AppContainer.jsx & .css
│   │   ├── Footer.jsx & .css
│   │   ├── Header.jsx & .css
│   │   ├── StatCard.jsx & .css
│   │   ├── StatsGrid.jsx & .css
│   │   └── TextInput.jsx & .css
│   ├── App.css           # Macro Layout Structuring
│   ├── App.jsx           # Master Component Integration Node
│   ├── index.css         # Reset UI definitions and variable schemes
│   └── main.jsx          # StrictMode wrapper & DOM Render Init
├── .gitignore            # Git exclusion mapping
├── index.html            # Vite mounting shell
├── package.json          # Dependency scripts & React plugins
└── vite.config.js        # Base URL path config mapping (`/character-counter/`)
```

---

## 💻 Local Installation & Setup

If you wish to download and run this repository locally:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Chidvilas-Thelapolu/character-counter.git
   ```

2. **Navigate to the directory:**

   ```sh
   cd character-counter
   ```

3. **Install the dependencies using Node Package Manager:**

   ```sh
   npm install
   ```

4. **Boot up the Vite Dev Server:**
   ```sh
   npm run dev
   ```
   _The server should now be running natively on `http://localhost:5173`_

---

## 🚢 Publishing & Pushing Code

Modifying the code and want to push the updates to GitHub Pages? Simply run your normal git commands to push to `main` branch, then type:

```sh
npm run deploy
```

This will automatically build the `dist` folder and deploy the new version onto the `gh-pages` branch for you.

---

## 🧑‍💻 Developed By

Maintained and created by:

- **T.Chidvilas**
- **T.Jaswanth**
- **Sd.Shifa Sultana**
