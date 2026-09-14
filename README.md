# Python-SVAGDC: Master Python Learning Portal

A dedicated, elegant, and comprehensive educational website engineered for the **Department of Physics**, **S.V.A. Govt. Degree College, Srikalahasti**.

---

## 🌟 Key Features

1. **Bespoke Academic Design**:
   - Custom-tailored modern UI with Inter & JetBrains Mono typography.
   - Refined Dark and Light theme toggle with `localStorage` persistence.
   - Sticky top navigation bar with quick track-switcher pills and instant search (`Ctrl+K`).
   - Collapsible hierarchical curriculum sidebar faithfully organized by modules.
   - Reading progress bar and topic completion tracking.

2. **Complete Python Curriculum Coverage (70 In-Depth Chapters)**:
   - **Track 1: Python Core Foundations**: Introduction, environments, syntax, comments, memory variables, data types, numbers, casting, strings, booleans, operators & Walrus `:=`, lists, tuples, sets, dictionaries, if-else, structural pattern matching (PEP 634), while/for loops, functions, lambda expressions, iterators, scope (LEGB), modules, datetime, math, JSON, regex, and exception handling.
   - **Track 2: Object-Oriented Programming (OOP)**: OOP principles, classes & objects, `__init__` and `self`, class properties (`@property`), class & static methods, magic/dunder methods, multiple inheritance & C3 MRO, polymorphism & duck typing, encapsulation (private name mangling), and inner classes.
   - **Track 3: File Handling**: Access modes, reading text streams, pointer control (`seek`/`tell`), deterministic context managers (`with`), and filesystem safety.
   - **Track 4: Scientific Stack - NumPy**: ndarray architecture, multi-dimensional indexing, slicing, data types, copy vs view, shape manipulation, iterating (`nditer`), joining & splitting, searching, sorting, random statistical distributions (Normal, Poisson, Uniform), and universal functions (ufuncs).
   - **Track 5: Scientific Stack - Pandas**: Labeled Series, DataFrames (`loc` vs `iloc`), CSV/JSON ingestion, exploratory data analysis (`head`, `describe`, `info`), comprehensive data cleaning (null handling, deduplication), correlations, and plotting.
   - **Track 6: Scientific Stack - SciPy**: Physical constants (`scipy.constants`), optimizers & function minimization (`scipy.optimize`), Compressed Sparse Row (CSR) matrices, graph algorithms (Dijkstra), and spatial KD-Trees.
   - **Track 7: Data Visualization - Matplotlib**: Pyplot interface, line plots, marker styling tables, format strings (fmt), labels, titles, grid styling, subplots & multi-plot layouts, scatter plots, colormaps, bar charts, histograms, and customized pie charts.

3. **Interactive "Test Your Understanding" Live Code Runner**:
   - Real Python 3 execution in the browser powered by **Pyodide WebAssembly**.
   - Built-in instant offline execution fallback for offline classroom labs.
   - Live editable code blocks with "Run Code ▶", "Copy 📋", and "Reset ↺".
   - Color-coded output console showing real standard outputs and graphical Matplotlib plot outputs.

4. **"Test Your Understanding" Assessment Quizzes (210 Exercises)**:
   - Interactive multiple-choice and fill-in-the-code questions (3 per topic across all 70 topics).
   - Instant validation with explanatory pedagogical feedback and "Show Solution" helpers.

5. **Official YouTube Channel Integration — The Competitive Edge**:
   - Channel: [The Competitive Edge (@TheCompetitiveEdge-b4z)](https://www.youtube.com/@TheCompetitiveEdge-b4z)
   - Dedicated one-stop destination for competitive exam preparation (UPSC, SSC, Banking, Railways, APPSC, TSPSC, State PSCs, Police, Defence) featuring Current Affairs, Quantitative Aptitude, Reasoning, General English, and General Science.

---

## 🚀 How to Open and Run

### Option 1: Direct Browser Launch
Simply double-click `pythontutorial.html` in file explorer or open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari:
```
file:///E:/Google-AntiGravity-Projects/Python-Fundamentals/Python-SVAGDC/pythontutorial.html
```

### Option 2: Run via Local Python Server
To serve locally across your college computer network or classroom Wi-Fi:
```powershell
cd E:\Google-AntiGravity-Projects\Python-Fundamentals\Python-SVAGDC
python -m http.server 8000
```
Then visit `http://localhost:8000/pythontutorial.html` in your browser.

---

## 📂 Directory Structure

```
Python-SVAGDC/
├── pythontutorial.html          # Main application portal with custom layout & SPA routing
├── css/
│   ├── style.css                # Bespoke modern design system, typography, responsive layout
│   └── code-runner.css          # Styling for "Test Your Understanding" live editor and output console
├── js/
│   ├── app.js                   # Application controller, hash routing, search, theme toggle
│   ├── runner.js                # Pyodide WebAssembly Python 3 runtime + offline fallback
│   ├── navigation.js            # Sidebar category accordions, progress tracking, breadcrumbs
│   ├── quiz.js                  # "Test Your Understanding" interactive quizzes and challenges
│   └── curriculum_data.js       # Complete structured lessons, code examples, tables, exercises
└── README.md                    # Documentation & user instructions
```
