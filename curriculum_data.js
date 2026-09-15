/**
 * Python-SVAGDC: Complete Structured Curriculum Repository
 * S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  const DATA = {
  "tracks": [
    {
      "id": "track-core",
      "title": "Python Core",
      "icon": "fa-brands fa-python"
    },
    {
      "id": "track-oop",
      "title": "OOP Classes",
      "icon": "fa-solid fa-cubes"
    },
    {
      "id": "track-files",
      "title": "File Handling",
      "icon": "fa-solid fa-folder-open"
    },
    {
      "id": "track-numpy",
      "title": "NumPy",
      "icon": "fa-solid fa-calculator"
    },
    {
      "id": "track-pandas",
      "title": "Pandas",
      "icon": "fa-solid fa-table"
    },
    {
      "id": "track-scipy",
      "title": "SciPy",
      "icon": "fa-solid fa-atom"
    },
    {
      "id": "track-matplotlib",
      "title": "Matplotlib",
      "icon": "fa-solid fa-chart-line"
    }
  ],
  "categories": [
    {
      "id": "cat-basics",
      "title": "Python Tutorial",
      "track": "track-core",
      "icon": "fa-solid fa-book-open",
      "topics": [
        "python-intro",
        "python-get-started",
        "python-syntax",
        "python-comments",
        "python-variables",
        "python-data-types",
        "python-numbers",
        "python-casting",
        "python-strings",
        "python-booleans",
        "python-operators",
        "python-lists",
        "python-tuples",
        "python-sets",
        "python-dictionaries",
        "python-if-else",
        "python-match-case",
        "python-while-loops",
        "python-for-loops",
        "python-functions",
        "python-lambda",
        "python-arrays-iterators",
        "python-scope",
        "python-modules",
        "python-dates-math",
        "python-json-regex",
        "python-pip-try-except",
        "python-user-input"
      ]
    },
    {
      "id": "cat-oop",
      "title": "Python Classes (OOP)",
      "track": "track-oop",
      "icon": "fa-solid fa-cubes",
      "topics": [
        "python-oop-concepts",
        "python-classes-objects",
        "python-init-self",
        "python-class-properties",
        "python-class-static-methods",
        "python-magic-methods",
        "python-inheritance",
        "python-polymorphism",
        "python-encapsulation",
        "python-inner-classes"
      ]
    },
    {
      "id": "cat-files",
      "title": "File Handling",
      "track": "track-files",
      "icon": "fa-solid fa-file-lines",
      "topics": [
        "file-handling-intro",
        "file-read",
        "file-write",
        "file-delete"
      ]
    },
    {
      "id": "cat-numpy",
      "title": "NumPy Tutorial",
      "track": "track-numpy",
      "icon": "fa-solid fa-calculator",
      "topics": [
        "numpy-intro",
        "numpy-create-arrays",
        "numpy-indexing-slicing",
        "numpy-data-types",
        "numpy-copy-view",
        "numpy-shape-reshape",
        "numpy-iterating",
        "numpy-join-split",
        "numpy-search-sort",
        "numpy-random",
        "numpy-ufuncs"
      ]
    },
    {
      "id": "cat-pandas",
      "title": "Pandas Tutorial",
      "track": "track-pandas",
      "icon": "fa-solid fa-table",
      "topics": [
        "pandas-intro",
        "pandas-series",
        "pandas-dataframes",
        "pandas-read-data",
        "pandas-analyzing-data",
        "pandas-cleaning-data",
        "pandas-correlations-plotting"
      ]
    },
    {
      "id": "cat-scipy",
      "title": "SciPy Tutorial",
      "track": "track-scipy",
      "icon": "fa-solid fa-atom",
      "topics": [
        "scipy-intro-constants",
        "scipy-optimizers",
        "scipy-sparse-graphs",
        "scipy-spatial-interpolation"
      ]
    },
    {
      "id": "cat-matplotlib",
      "title": "Matplotlib Tutorial",
      "track": "track-matplotlib",
      "icon": "fa-solid fa-chart-line",
      "topics": [
        "matplotlib-intro-pyplot",
        "matplotlib-markers-lines",
        "matplotlib-labels-grid",
        "matplotlib-subplots",
        "matplotlib-scatter-bars",
        "matplotlib-hist-pie"
      ]
    }
  ],
  "topics": {
    "python-intro": {
      "id": "python-intro",
      "title": "Python Introduction",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "4 min read",
      "lead": "Python is a high-level, dynamically typed, and interpreted programming language celebrated for its readable syntax, versatility, and extensive scientific ecosystem.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>CPython Architecture & Execution Pipeline:</strong> When a Python program is initiated, the source code (.py) is parsed into an Abstract Syntax Tree (AST), which the compiler translates into platform-independent bytecode (.pyc). The <strong>Python Virtual Machine (PVM)</strong> executes this bytecode using an evaluation loop (<code>ceval.c</code> in CPython). Memory is managed automatically through <em>reference counting</em> (tracking how many pointers reference a given <code>PyObject</code>) augmented by a <em>cyclic garbage collector</em> that periodically resolves circular references.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>What is Python?</h2>\n                <p><strong>Python</strong> was created by <em>Guido van Rossum</em> at CWI in the Netherlands and originally released in 1991. It emphasizes code readability, developer ergonomics, and minimal syntactic ceremony compared to languages like C++ or Java.</p>\n            <div class=\"callout-box info\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-circle-info\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">CPython Execution Model</div>\n                    <div class=\"callout-text\">When you run a Python script, CPython compiles your source code (<code>.py</code>) into bytecode (<code>.pyc</code>), which is then interpreted by the Python Virtual Machine (PVM).</div>\n                </div>\n            </div>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Key Characteristics & Design Strengths</h2>\n                <ul>\n                <li><strong>Dynamic Typing:</strong> Types are bound to objects at runtime rather than variable names at compile time.</li>\n                <li><strong>Automatic Memory Management:</strong> Reference counting combined with a cyclic garbage collector frees developers from manual memory allocation.</li>\n                <li><strong>Multi-Paradigm:</strong> Supports procedural, object-oriented, functional, and event-driven styles seamlessly.</li>\n                <li><strong>Batteries Included:</strong> Massive standard library ranging from mathematical algorithms and regular expressions to HTTP networking and SQLite database persistence.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>The Zen of Python (PEP 20)</h2>\n                <p>Python's design philosophy is encapsulated in the <em>Zen of Python</em>. Important aphorisms include:</p>\n            <ul>\n                <li><em>Beautiful is better than ugly.</em></li>\n                <li><em>Explicit is better than implicit.</em></li>\n                <li><em>Simple is better than complex.</em></li>\n                <li><em>Readability counts.</em></li>\n            </ul>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>High developer productivity and rapid prototyping with minimal boilerplate.</li><li>Enormous scientific and mathematical ecosystem (NumPy, SciPy, Matplotlib, SymPy).</li><li>Multi-paradigm flexibility allowing procedural, object-oriented, and functional designs.</li><li>Cross-platform execution across Windows, Linux, macOS, and microcontrollers (MicroPython).</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Slower raw execution speed compared to compiled languages like C or Fortran (mitigated by compiled C-extensions).</li><li>The Global Interpreter Lock (GIL) limits pure multi-threaded CPU-bound parallelism in standard CPython.</li><li>Runtime type errors can slip past compilation without static type checking (mypy/type hints).</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Astrophysics: Analyzing spectral emission data and telescope imagery (Astropy).</li><li>Quantum Mechanics: Simulating quantum circuits and qubit states with Qiskit.</li><li>Laboratory Automation: Interfacing with oscilloscopes, spectrometers, and Arduino microcontrollers.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "# Welcome to Python!\nprint(\"Hello, Physics Scholars at S.V.A. Govt. Degree College!\")\n\n# Exploring Python dynamic typing\nlanguage = \"Python 3\"\nversion = 3.12\nis_awesome = True\n\nprint(f\"Learning {language} (v{version}) | Modern & Expressive: {is_awesome}\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which component of the standard CPython runtime translates Python bytecode into machine execution?",
          "options": [
            "The Python Virtual Machine (PVM)",
            "The GCC Compiler",
            "The Just-in-Time (JIT) Assembler",
            "The Preprocessor Engine"
          ],
          "correctIndex": 0,
          "explanation": "CPython first compiles source code into platform-independent bytecode, which is executed sequentially by the Python Virtual Machine (PVM)."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary role of the CPython Cyclic Garbage Collector?",
          "options": [
            "To optimize loop execution speed",
            "To detect and reclaim isolated circular references that reference counting cannot resolve",
            "To convert Python bytecode into C source code",
            "To allocate stack memory for local variables"
          ],
          "correctIndex": 1,
          "explanation": "Reference counting immediately reclaims objects when their count drops to 0, but circular references (A points to B and B points to A) require the generational cyclic GC to detect and free unreachable cycles."
        },
        {
          "type": "multiple-choice",
          "question": "What file extension is given to compiled Python bytecode files stored inside the __pycache__ directory?",
          "options": [
            ".exe",
            ".pyc",
            ".pvm",
            ".dll"
          ],
          "correctIndex": 1,
          "explanation": ".pyc represents pre-compiled bytecode generated by the CPython interpreter for faster subsequent module imports."
        }
      ]
    },
    "python-get-started": {
      "id": "python-get-started",
      "title": "Python Getting Started & Environments",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "4 min read",
      "lead": "Setting up Python, running scripts in interactive, script, and notebook modes, and understanding modern scientific programming environments.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Execution Modalities: Interactive, Script & Notebook Environments</h2>\n                <p>Python can be executed through three primary modalities across scientific and computational workflows:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Execution Modality</th><th>Command / Tool</th><th>Key Characteristics &amp; Ideal Use-Cases</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>1. Interactive Mode (REPL)</strong></td><td><code>python</code> (Read-Eval-Print Loop)</td><td>Immediate line-by-line execution, rapid mathematical scratchpad calculations, evaluating expressions, and inspecting objects.</td></tr>\n                        <tr><td><strong>2. Script Mode</strong></td><td><code>python script.py</code></td><td>Batch execution of saved source files, automated computational pipelines, multi-module production software, and laboratory instrument automation.</td></tr>\n                        <tr><td><strong>3. Notebook Mode (Interactive Computing)</strong></td><td>Jupyter Lab, VS Code Notebooks</td><td>Cell-based literate programming, interdisciplinary data analysis, inline graphical plots (Matplotlib), and scientific research reporting.</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Verifying Your Python Installation</h2>\n                <p>Open your command terminal (PowerShell, Command Prompt, or Bash) and execute:</p>\n            <p><code>python --version</code> or <code>py -3 --version</code></p>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-lightbulb\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Modern Editor Recommendation</div>\n                    <div class=\"callout-text\">VS Code with the official Microsoft Python Extension or PyCharm Community Edition provides world-class IntelliSense, debugging, and linting according to PEP 8 standards.</div>\n                </div>\n            </div>\n            </section>\n            ",
      "code": "import sys\nimport platform\n\nprint(\"Python Version:\", platform.python_version())\nprint(\"Operating System:\", platform.system(), platform.release())\nprint(\"Executable Path:\", sys.executable)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What command-line flag is passed to Python to quickly check the currently active interpreter version?",
          "options": [
            "python --version",
            "python -check",
            "python -v -all",
            "python --status"
          ],
          "correctIndex": 0,
          "explanation": "Running 'python --version' or 'python -V' displays the exact interpreter release version."
        },
        {
          "type": "multiple-choice",
          "question": "Why is it recommended to use a virtual environment (`python -m venv env`) for scientific projects?",
          "options": [
            "It accelerates Python's execution speed by 50%",
            "It isolates project dependencies, preventing version conflicts across different libraries",
            "It converts Python scripts into standalone executable files",
            "It automatically corrects syntax errors in your code"
          ],
          "correctIndex": 1,
          "explanation": "Virtual environments provide self-contained directories containing specific versions of Python and packages, eliminating conflicts between incompatible library versions."
        },
        {
          "type": "multiple-choice",
          "question": "Which command flags display the currently active Python version in your terminal?",
          "options": [
            "python --version (or python -V)",
            "python --info",
            "python -check",
            "python --status"
          ],
          "correctIndex": 0,
          "explanation": "Executing `python --version` or `python -V` prints the major, minor, and micro release numbers of the installed interpreter."
        }
      ]
    },
    "python-syntax": {
      "id": "python-syntax",
      "title": "Python Syntax & Indentation",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "5 min read",
      "lead": "Unlike languages that delineate blocks using curly braces { }, Python uniquely employs whitespace indentation to define code scope and structure.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>The Significance of Indentation</h2>\n                <p>In Python, indentation is not merely stylistic\u2014it is a strict syntactic requirement. A code block (such as the body of an <code>if</code> statement, loop, or function) begins with an indentation level and ends when the indent returns to the previous level.</p>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-graduation-cap\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">PEP 8 Standard: 4 Spaces</div>\n                    <div class=\"callout-text\">The official Python Style Guide (PEP 8) mandates using <strong>4 spaces</strong> per indentation level. Never mix tabs and spaces in Python 3, as doing so raises an <code>IndentationError: unexpected indent</code>.</div>\n                </div>\n            </div>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Statements & Line Continuation</h2>\n                <p>Statements typically terminate at the end of a physical line without requiring a semicolon (<code>;</code>). However, long expressions can be broken across multiple lines using implicit continuation inside parentheses <code>()</code>, brackets <code>[]</code>, or braces <code>{}</code>, or explicitly using a backslash (<code>\\</code>).</p>\n            </section>\n            ",
      "code": "# Proper Python Indentation Example\nscore = 88\n\nif score >= 90:\n    grade = \"A+\"\n    status = \"Distinction\"\nelif score >= 75:\n    grade = \"A\"\n    status = \"First Class\"\nelse:\n    grade = \"B\"\n    status = \"Pass\"\n\nprint(f\"Student Score: {score} | Grade: {grade} ({status})\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What error will Python raise if indentation levels within a function or block are inconsistent?",
          "options": [
            "IndentationError",
            "SyntaxWarning",
            "ScopeException",
            "BlockMismatchError"
          ],
          "correctIndex": 0,
          "explanation": "Python's tokenizer strictly checks indentation and raises an IndentationError when block alignments do not match."
        },
        {
          "type": "multiple-choice",
          "question": "What exception is raised if an expected indented block is missing after an `if` statement or function header?",
          "options": [
            "IndentationError",
            "SyntaxWarning",
            "TabError",
            "BlockMissingException"
          ],
          "correctIndex": 0,
          "explanation": "Python strictly enforces indentation using IndentationError (a subclass of SyntaxError) when whitespace hierarchy is invalid."
        },
        {
          "type": "multiple-choice",
          "question": "Which punctuation character must terminate the header line of compound statements (like `if`, `for`, `while`, `def`, and `class`)?",
          "options": [
            "; (semicolon)",
            ": (colon)",
            "{ (opening brace)",
            "-> (arrow)"
          ],
          "correctIndex": 1,
          "explanation": "In Python syntax, a colon (`:`) denotes the start of an indented suite or code block."
        }
      ]
    },
    "python-comments": {
      "id": "python-comments",
      "title": "Python Comments & Documentation",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "3 min read",
      "lead": "Effective code documentation through single-line comments, inline remarks, and multi-line docstrings (PEP 257).",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Single-Line & Inline Comments</h2>\n                <p>Python comments start with the hash symbol (<code>#</code>). Everything following <code>#</code> on that line is completely ignored by the interpreter.</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Docstrings (Documentation Strings)</h2>\n                <p>Docstrings are multi-line string literals enclosed within triple quotes (<code>\"\"\"...\"\"\"</code> or <code>'''...'''</code>) placed immediately after a function, class, or module definition. They are retained at runtime and accessible via the <code>.__doc__</code> attribute and the built-in <code>help()</code> system.</p>\n            </section>\n            ",
      "code": "def kinetic_energy(mass: float, velocity: float) -> float:\n    \"\"\"\n    Calculate the kinetic energy of an object in Joules.\n    \n    Formula: KE = 0.5 * m * v^2\n    \"\"\"\n    # m in kg, v in m/s\n    return 0.5 * mass * (velocity ** 2)\n\nke = kinetic_energy(12.0, 5.0)\nprint(f\"Calculated KE: {ke} J\")\nprint(\"Function Docstring:\", kinetic_energy.__doc__.strip())",
      "quiz": [
        {
          "type": "fill-in",
          "question": "Which symbol is used to start a single-line comment in Python?",
          "codeTemplate": "<span>Enter symbol:</span> <input type='text' class='quiz-fill-input' placeholder='#'>",
          "answer": "#",
          "explanation": "The hash character '#' designates single-line comments in Python."
        },
        {
          "type": "multiple-choice",
          "question": "How are multi-line documentation docstrings typically defined for functions and modules in Python?",
          "options": [
            "Enclosed in triple quotation marks (\"\"\" ... \"\"\")",
            "Enclosed within /* ... */ blocks",
            "Prefixed with ## on every line",
            "Enclosed in <!-- ... --> tags"
          ],
          "correctIndex": 0,
          "explanation": "Triple-quoted strings (\"\"\" or ''') placed immediately below a function, class, or module header become its official docstring."
        },
        {
          "type": "multiple-choice",
          "question": "Which special attribute allows you to programmatically inspect a function or module's docstring at runtime?",
          "options": [
            "func.__comment__",
            "func.__doc__",
            "func.help()",
            "func.__info__"
          ],
          "correctIndex": 1,
          "explanation": "The `__doc__` dunder attribute stores the docstring literal of any documented Python object."
        }
      ]
    },
    "python-variables": {
      "id": "python-variables",
      "title": "Python Variables & Memory References",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "5 min read",
      "lead": "Understanding variables as names bound to objects in memory (PyObject), variable naming rules, multiple assignment, and object identity.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>Object Pointer Model & Memory Internals:</strong> In Python, variables are strictly <em>references (pointers)</em> to heap-allocated objects rather than memory containers holding values. Small integers in the range <code>[-5, 256]</code> are pre-allocated and interned in memory by CPython at startup. When you assign <code>a = 100</code> and <code>b = 100</code>, both variables point to the exact same memory address (verified by <code>id(a) == id(b)</code>).</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>Variables as Object References</h2>\n                <p>In Python, a variable is not a memory bucket holding a value; rather, it is a <strong>label or reference</strong> pointing to an object residing on the heap. Every object has an identity (memory address inspected with <code>id()</code>), a type (inspected with <code>type()</code>), and a value.</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Variable Naming Rules (PEP 8)</h2>\n                <ul>\n                <li>Must begin with a letter (<code>a-z</code>, <code>A-Z</code>) or an underscore (<code>_</code>).</li>\n                <li>Cannot begin with a digit (<code>0-9</code>).</li>\n                <li>Can only contain alphanumeric characters and underscores (<code>A-z, 0-9, _</code>).</li>\n                <li>Case-sensitive (<code>PhysicsScore</code> and <code>physicsscore</code> are distinct variables).</li>\n                <li>Cannot use Python reserved keywords (such as <code>def</code>, <code>class</code>, <code>return</code>, <code>if</code>).</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Multiple Assignment & Unpacking</h2>\n                <p>Python allows simultaneous multi-variable assignments in a single readable line:</p>\n            <p><code>x, y, z = 10, 20, 30</code></p>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Flexible rebinding of variables to different types without re-declaring types.</li><li>Memory optimization through automatic string interning and small integer caching.</li><li>Concise multi-variable assignment and sequence unpacking (x, y = y, x).</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Aliasing pitfalls: mutating a shared object through one variable alters it for all referencing variables.</li><li>Memory indirection through pointers adds overhead compared to stack-allocated variables in C++.</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Swapping state vectors in physics phase-space simulations without temporary variables.</li><li>Tracking sensor pointer references in dynamic data acquisition streams.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "# Variables and Memory Identity\na = [1, 2, 3]\nb = a          # b references the exact same object\nc = [1, 2, 3]  # c is a new object with identical content\n\nprint(\"a == b (Value Equality):\", a == b)\nprint(\"a is b (Object Identity):\", a is b)\nprint(\"a == c (Value Equality):\", a == c)\nprint(\"a is c (Object Identity):\", a is c)\nprint(f\"Memory id(a): {id(a)} | Memory id(b): {id(b)} | Memory id(c): {id(c)}\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which operator verifies whether two variables reference the exact same memory object (identity) in Python?",
          "options": [
            "is",
            "==",
            "equals()",
            ":="
          ],
          "correctIndex": 0,
          "explanation": "The 'is' operator checks for object identity (id(a) == id(b)), whereas '==' tests for equality of values."
        },
        {
          "type": "multiple-choice",
          "question": "Given `a = [10, 20]` and `b = a`, what is the value of `b` after executing `a.append(30)`?",
          "options": [
            "[10, 20]",
            "[10, 20, 30]",
            "None",
            "Raises an AssignmentError"
          ],
          "correctIndex": 1,
          "explanation": "Variables `a` and `b` point to the exact same heap memory object. Mutating the list through `a` reflects immediately when accessed via `b`."
        },
        {
          "type": "multiple-choice",
          "question": "What is the idiomatic Python statement to swap the values of variables `x` and `y` without a temporary variable?",
          "options": [
            "x, y = y, x",
            "swap(x, y)",
            "x = y; y = x",
            "x <=> y"
          ],
          "correctIndex": 0,
          "explanation": "Python evaluates the right-hand tuple `(y, x)` first and unpacks it into the left-hand targets in a single atomic bytecode operation."
        }
      ]
    },
    "python-data-types": {
      "id": "python-data-types",
      "title": "Python Data Types & Precision",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "6 min read",
      "lead": "Deep dive into Python's built-in data types: arbitrary precision integers, IEEE 754 floating-point numbers, complex numbers, and the universal falsy protocol.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>Arbitrary Precision Integers vs. IEEE 754 Floating-Point:</strong> Python's <code>int</code> type uses a variable-length digit array structure (<code>PyLongObject</code>), allowing integers to expand dynamically to consume available memory without 32-bit or 64-bit overflow. In contrast, <code>float</code> is fixed to IEEE 754 double precision (64 bits: 1 sign bit, 11 exponent bits, 52 mantissa bits). Because binary cannot represent certain decimal fractions (like 0.1) exactly, rounding artifacts occur (e.g. <code>0.1 + 0.2 != 0.3</code>), requiring <code>math.isclose()</code> for scientific tolerances.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>Core Built-in Data Types Overview</h2>\n                <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Category</th><th>Data Type</th><th>Description</th><th>Example Literal</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Numeric</strong></td><td><code>int</code></td><td>Arbitrary precision whole numbers (bignum architecture)</td><td><code>x = 42</code></td></tr>\n                        <tr><td><strong>Numeric</strong></td><td><code>float</code></td><td>IEEE 754 double precision floating-point numbers</td><td><code>pi = 3.14159</code></td></tr>\n                        <tr><td><strong>Numeric</strong></td><td><code>complex</code></td><td>Complex numbers with real and imag components</td><td><code>z = 3 + 4j</code></td></tr>\n                        <tr><td><strong>Text</strong></td><td><code>str</code></td><td>Immutable sequence of Unicode code points</td><td><code>msg = 'Quantum'</code></td></tr>\n                        <tr><td><strong>Boolean</strong></td><td><code>bool</code></td><td>Truth values: <code>True</code> or <code>False</code> (subclass of int)</td><td><code>active = True</code></td></tr>\n                        <tr><td><strong>Null</strong></td><td><code>NoneType</code></td><td>Absence of value (singleton <code>None</code>)</td><td><code>val = None</code></td></tr>\n                        <tr><td><strong>Sequences</strong></td><td><code>list</code>, <code>tuple</code>, <code>range</code></td><td>Ordered collections (mutable vs immutable)</td><td><code>[1, 2, 3]</code></td></tr>\n                        <tr><td><strong>Mappings</strong></td><td><code>dict</code></td><td>Key-value associative hash tables</td><td><code>{'key': 'val'}</code></td></tr>\n                        <tr><td><strong>Sets</strong></td><td><code>set</code>, <code>frozenset</code></td><td>Unordered unique mathematical collections</td><td><code>{1, 2, 3}</code></td></tr>\n                    </tbody>\n                </table>\n            </div>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>IEEE 754 Floating-Point Precision & Mitigation</h2>\n                <p>Like C and Java, Python's <code>float</code> follows the IEEE 754 64-bit double-precision standard. Because binary cannot represent certain decimal fractions (like 0.1) exactly, expressions like <code>0.1 + 0.2 == 0.3</code> evaluate to <code>False</code>.</p>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Scientific Precision Best Practice</div>\n                    <div class=\"callout-text\">In scientific and physics calculations, never use <code>==</code> for floats! Always use <code>math.isclose(a, b)</code> or the <code>decimal.Decimal</code> module for financial calculations.</div>\n                </div>\n            </div>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Unlimited integer precision completely eliminates silent numeric overflow bugs.</li><li>Built-in complex number support (complex) simplifies electromagnetic and AC calculations.</li><li>Strong dynamic typing prevents unintended type coercions (e.g., adding a string to an integer raises TypeError).</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Arbitrary precision integers incur higher memory overhead (minimum 28 bytes per int) than primitive C types.</li><li>IEEE 754 floating-point precision limitations can cause subtle convergence errors in iterative simulations.</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>High-precision orbit determination in celestial mechanics requiring large numeric representations.</li><li>AC circuit impedance modeling utilizing complex numbers (Z = R + jX).</li><li>Thermodynamic calculations tracking temperature conversions and energy state transitions.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "import math\nfrom decimal import Decimal\n\n# Demonstrating floating-point precision\nval1 = 0.1 + 0.2\nval2 = 0.3\n\nprint(\"Raw calculation (0.1 + 0.2):\", val1)\nprint(\"Direct equality (val1 == 0.3):\", val1 == val2)\nprint(\"Scientific comparison (math.isclose):\", math.isclose(val1, val2))\n\n# Arbitrary Precision Integer (No overflow!)\nhuge_num = 2 ** 100\nprint(\"2^100 is computed effortlessly:\", huge_num)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the recommended function in Python's standard math module to safely compare two floating-point numbers for equality within a tolerance?",
          "options": [
            "math.isclose()",
            "math.equals()",
            "math.approx()",
            "math.compare()"
          ],
          "correctIndex": 0,
          "explanation": "math.isclose(a, b, rel_tol=1e-09) tests whether two floats are equal within a specified relative or absolute tolerance."
        },
        {
          "type": "multiple-choice",
          "question": "Which of the following built-in collection types in Python is IMMUTABLE (cannot be modified after creation)?",
          "options": [
            "list",
            "set",
            "dict",
            "tuple"
          ],
          "correctIndex": 3,
          "explanation": "Tuples and strings are immutable in Python; attempting item assignment (e.g. `t[0] = 99`) raises a TypeError."
        },
        {
          "type": "multiple-choice",
          "question": "Why does `0.1 + 0.2 == 0.3` evaluate to `False` in standard Python floating-point math?",
          "options": [
            "Because Python integers interfere with floating math",
            "Because IEEE 754 binary floating-point representation cannot represent 0.1 and 0.2 exactly",
            "Because Python rounds floats to 1 decimal place automatically",
            "Because the equality operator does not work with decimals"
          ],
          "correctIndex": 1,
          "explanation": "Base-2 floating point numbers cannot represent fractional decimals like 1/10 exactly, producing small rounding differences (0.30000000000000004)."
        }
      ]
    },
    "python-numbers": {
      "id": "python-numbers",
      "title": "Python Numbers & Complex Math",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "4 min read",
      "lead": "Working with integers, floating-point representations, complex impedance values, and built-in numerical functions.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>The Three Python Number Types</h2>\n                <p>Python provides three built-in numeric types:</p>\n            <ul>\n                <li><strong>int:</strong> Signed integers of unlimited magnitude. Underscores can be used as visual separators (e.g. <code>1_000_000</code>).</li>\n                <li><strong>float:</strong> 64-bit IEEE 754 double precision. Can also be written in scientific E-notation (e.g. <code>3.0e8</code> for the speed of light).</li>\n                <li><strong>complex:</strong> Numbers written with a <code>j</code> or <code>J</code> as the imaginary component (e.g. <code>2 + 3j</code>).</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Complex Number Attributes & Methods</h2>\n                <p>Complex numbers have built-in <code>.real</code> and <code>.imag</code> attributes, and a <code>.conjugate()</code> method.</p>\n            </section>\n            ",
      "code": "# Physics: AC Circuit Impedance using Complex Numbers\nR = 50.0       # Resistance in Ohms\nX_L = 30.0     # Inductive Reactance in Ohms\nZ = complex(R, X_L)  # Total impedance Z = 50 + 30j\n\nprint(f\"Impedance: {Z} Ohms\")\nprint(f\"Real Part (R): {Z.real} Ohms\")\nprint(f\"Imaginary Part (X_L): {Z.imag} Ohms\")\nprint(f\"Complex Conjugate: {Z.conjugate()}\")\nprint(f\"Magnitude |Z|: {abs(Z):.2f} Ohms\")",
      "quiz": [
        {
          "type": "fill-in",
          "question": "Which letter is used in Python numeric literals to denote the imaginary unit in complex numbers?",
          "codeTemplate": "<span>Complex unit:</span> <input type='text' class='quiz-fill-input' placeholder='j'>",
          "answer": [
            "j",
            "J"
          ],
          "explanation": "Python uses 'j' or 'J' to designate the imaginary part of complex numbers."
        },
        {
          "type": "multiple-choice",
          "question": "What are the results of integer floor division `17 // 3` and modulo `17 % 3`?",
          "options": [
            "5 and 2",
            "5.66 and 2",
            "5 and 3",
            "6 and -1"
          ],
          "correctIndex": 0,
          "explanation": "17 divided by 3 is 5 with a remainder of 2. Floor division truncates toward negative infinity to produce 5."
        },
        {
          "type": "multiple-choice",
          "question": "Which standard library module provides high-precision fixed-point and floating-point arithmetic for scientific calibration?",
          "options": [
            "math",
            "decimal",
            "cmath",
            "numbers"
          ],
          "correctIndex": 1,
          "explanation": "The `decimal` module provides user-defined precision (up to hundreds of digits) and exact decimal representation."
        }
      ]
    },
    "python-casting": {
      "id": "python-casting",
      "title": "Python Type Casting & Conversions",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "3 min read",
      "lead": "Converting between data types explicitly using constructor functions and understanding implicit type promotion.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Explicit Casting Functions</h2>\n                <p>Explicit conversion (type casting) is performed using built-in constructors:</p>\n            <ul>\n                <li><code>int(x)</code>: Converts x to an integer (truncating decimals toward zero).</li>\n                <li><code>float(x)</code>: Converts x to a floating-point number.</li>\n                <li><code>str(x)</code>: Converts x into its human-readable string representation.</li>\n                <li><code>bool(x)</code>: Converts x to boolean based on Python truth-value rules.</li>\n            </ul>\n            </section>\n            ",
      "code": "# Explicit type conversion examples\nraw_input = \"450\"\nvoltage = int(raw_input)\ncurrent = float(\"2.5\")\npower = voltage * current\n\nprint(f\"Voltage: {voltage} V ({type(voltage).__name__})\")\nprint(f\"Current: {current} A ({type(current).__name__})\")\nprint(f\"Calculated Power: {power} W ({type(power).__name__})\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the output of int(7.89) in Python?",
          "options": [
            "7",
            "8",
            "7.0",
            "TypeError"
          ],
          "correctIndex": 0,
          "explanation": "The int() function truncates the fractional portion towards zero, yielding 7."
        },
        {
          "type": "multiple-choice",
          "question": "What do `bool(0)` and `bool(\"False\")` evaluate to in Python?",
          "options": [
            "False and False",
            "False and True",
            "True and False",
            "True and True"
          ],
          "correctIndex": 1,
          "explanation": "0 is falsy, so `bool(0)` is False. Any non-empty string is truthy, so `bool(\"False\")` evaluates to True!"
        },
        {
          "type": "multiple-choice",
          "question": "What exception is raised if you attempt to cast the string `\"3.14\"` directly using `int(\"3.14\")`?",
          "options": [
            "TypeError",
            "ValueError",
            "CastException",
            "OverflowError"
          ],
          "correctIndex": 1,
          "explanation": "`int()` only parses base-10 integer string literals. To convert \"3.14\" to an int, you must do `int(float(\"3.14\"))`."
        }
      ]
    },
    "python-strings": {
      "id": "python-strings",
      "title": "Python Strings & Text Manipulation",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "6 min read",
      "lead": "Mastering Python's immutable Unicode strings: slicing [start:stop:step], interpolation via f-strings, and essential built-in transformation methods.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>String Immutability & Indexing</h2>\n                <p>Strings in Python are <strong>immutable sequences</strong> of Unicode characters. Once created, individual characters cannot be modified in place. Python supports both positive (0-indexed from front) and negative indexing (-1 from end).</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Extended Slicing: [start:stop:step]</h2>\n                <p>Slicing extracts a substring using the formula <code>string[start:stop:step]</code> where <code>stop</code> is non-inclusive.</p>\n            <ul>\n                <li><code>s[1:5]</code>: Characters from index 1 up to (not including) 5.</li>\n                <li><code>s[::-1]</code>: Idiomatic Python trick to reverse a string!</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Modern f-Strings (PEP 498)</h2>\n                <p>Formatted string literals (f-strings) prefix strings with <code>f\"...\"</code> and evaluate expressions enclosed within curly braces <code>{expr}</code> directly at runtime.</p>\n            </section>\n            ",
      "code": "# String Manipulation & Slicing\ntitle = \"Department of Physics, SVAGDC\"\n\nprint(\"Original:\", title)\nprint(\"First 10 chars:\", title[:10])\nprint(\"Reversed String:\", title[::-1])\nprint(\"Uppercase:\", title.upper())\nprint(\"Word Count:\", len(title.split()))\n\n# Advanced f-string formatting\npi = 3.1415926535\nprint(f\"Value of Pi formatted to 4 decimals: {pi:.4f}\")",
      "quiz": [
        {
          "type": "fill-in",
          "question": "What concise slicing expression reverses any string 's' in Python?",
          "codeTemplate": "<span>Expression: s</span><input type='text' class='quiz-fill-input' placeholder='[::-1]'>",
          "answer": [
            "[:: -1]",
            "[::-1]"
          ],
          "explanation": "s[::-1] steps backwards through the string with step -1, returning the reversed sequence."
        },
        {
          "type": "multiple-choice",
          "question": "Given `s = \"Physics\"`, what does the negative slice `s[-3:]` produce?",
          "options": [
            "ics",
            "hys",
            "Phys",
            "sic"
          ],
          "correctIndex": 0,
          "explanation": "Index -3 is 'i'. Slicing to the end yields 'ics'."
        },
        {
          "type": "multiple-choice",
          "question": "Which string method strips whitespace from both the beginning and end of a string?",
          "options": [
            ".trim()",
            ".strip()",
            ".clean()",
            ".chop()"
          ],
          "correctIndex": 1,
          "explanation": "Python's `.strip()` method removes leading and trailing whitespace characters (spaces, tabs, newlines)."
        }
      ]
    },
    "python-booleans": {
      "id": "python-booleans",
      "title": "Python Booleans & Truthiness",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "4 min read",
      "lead": "Understanding truth values in Python: the bool type, the universal falsy set, and evaluation of truthiness in control structures.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>The Boolean Type</h2>\n                <p>The <code>bool</code> data type has only two constant values: <code>True</code> and <code>False</code>. In Python, <code>bool</code> is a direct subclass of <code>int</code>, where <code>True == 1</code> and <code>False == 0</code>.</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>The Universal Falsy Set</h2>\n                <p>Any object can be tested for truth value. The following are inherently considered <strong>Falsy</strong>:</p>\n            <ul>\n                <li>Constants: <code>None</code>, <code>False</code></li>\n                <li>Zero in any numeric type: <code>0</code>, <code>0.0</code>, <code>0j</code></li>\n                <li>Empty sequences and collections: <code>''</code> (empty string), <code>()</code>, <code>[]</code>, <code>{}</code>, <code>set()</code></li>\n            </ul>\n            <p>All other values are considered <strong>Truthy</strong>.</p>\n            </section>\n            ",
      "code": "# Exploring Truthiness\nitems = []\n\nif not items:\n    print(\"The collection is empty (Falsy)!\")\n\n# Boolean arithmetic\nprint(\"True + True =\", True + True)\nprint(\"bool(0) =\", bool(0))\nprint(\"bool('SVAGDC') =\", bool('SVAGDC'))",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which of the following values is evaluated as Truthy in Python?",
          "options": [
            "[0]",
            "[]",
            "0.0",
            "None"
          ],
          "correctIndex": 0,
          "explanation": "[0] is a non-empty list containing one element, therefore it evaluates to True. Empty collections like [] are Falsy."
        },
        {
          "type": "multiple-choice",
          "question": "Which of the following values evaluates to `False` in an `if` condition?",
          "options": [
            "[] (empty list)",
            "[0]",
            "'False'",
            "-1"
          ],
          "correctIndex": 0,
          "explanation": "Empty containers (empty lists, sets, tuples, dicts), `None`, `0`, and `\"\"` evaluate to False (falsy) in Python."
        },
        {
          "type": "multiple-choice",
          "question": "What is the numeric value of `True + True + False` in Python arithmetic?",
          "options": [
            "2",
            "1",
            "TypeError",
            "True"
          ],
          "correctIndex": 0,
          "explanation": "`bool` is a subclass of `int` in Python, where `True == 1` and `False == 0`, so 1 + 1 + 0 = 2."
        }
      ]
    },
    "python-operators": {
      "id": "python-operators",
      "title": "Python Operators & Expressions",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "6 min read",
      "lead": "Complete taxonomy of Python operators: Arithmetic, Comparison, Logical with short-circuit evaluation, Bitwise, Membership, Identity, and the Walrus operator (:=).",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>Short-Circuit Evaluation & The Walrus Operator:</strong> Logical operators <code>and</code> and <code>or</code> use short-circuit evaluation: if the first operand is sufficient to determine the outcome, the second operand is never evaluated. PEP 572 introduced the assignment expression (Walrus operator <code>:=</code>), allowing a value to be assigned to a variable within an expression, significantly streamlining conditional data ingestion loops.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>Classification of Python Operators</h2>\n                <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Category</th><th>Operators</th><th>Description / Example</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Arithmetic</strong></td><td><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>//</code>, <code>%</code>, <code>**</code></td><td><code>//</code> is floor division; <code>**</code> is exponentiation</td></tr>\n                        <tr><td><strong>Comparison</strong></td><td><code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code></td><td>Chained comparisons are valid: <code>0 &lt; x &lt; 100</code></td></tr>\n                        <tr><td><strong>Logical</strong></td><td><code>and</code>, <code>or</code>, <code>not</code></td><td>Short-circuit evaluation applies</td></tr>\n                        <tr><td><strong>Bitwise</strong></td><td><code>&amp;</code>, <code>|</code>, <code>^</code>, <code>~</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code></td><td>Direct binary bit manipulation</td></tr>\n                        <tr><td><strong>Identity</strong></td><td><code>is</code>, <code>is not</code></td><td>Memory identity comparison (<code>id(a) == id(b)</code>)</td></tr>\n                        <tr><td><strong>Membership</strong></td><td><code>in</code>, <code>not in</code></td><td>Tests membership within sequences or mappings</td></tr>\n                        <tr><td><strong>Assignment Expression</strong></td><td><code>:=</code> (Walrus)</td><td>Assigns values to variables within an expression (PEP 572)</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Expressive operator chaining (e.g., <code>0 <= wavelength <= 750</code>) mirrors mathematical notation.</li><li>Walrus operator reduces redundant function calls and keeps code DRY.</li><li>Comprehensive bitwise operators allow low-level telemetry bit manipulation.</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Floor division (//) truncates toward negative infinity (e.g. -7 // 2 is -4, not -3), which can surprise newcomers.</li><li>Overuse of complex Walrus expressions can impair code readability.</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Signal bitmasking: extracting status flags from binary spectrometer hardware outputs.</li><li>Continuous sensor monitoring: reading sensor packets with <code>while (packet := read_sensor()) is not None:</code>.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "# Chained comparisons & Walrus operator\nsensor_reading = 42.8\n\n# Chained comparison\nif 20.0 <= sensor_reading <= 50.0:\n    print(f\"Reading {sensor_reading} is within optimal operating range.\")\n\n# Walrus Operator (:=)\ndata_stream = [\"photon\", \"neutron\", \"electron\", \"proton\"]\nif (count := len(data_stream)) > 2:\n    print(f\"Detected high particle flux: {count} particles identified.\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the result of 17 // 5 in Python?",
          "options": [
            "3",
            "3.4",
            "2",
            "3.0"
          ],
          "correctIndex": 0,
          "explanation": "The floor division operator '//' truncates the fractional part, returning the integer 3."
        },
        {
          "type": "multiple-choice",
          "question": "What is the value of `2 ** 3 ** 2` in Python due to operator associativity?",
          "options": [
            "64",
            "512",
            "18",
            "256"
          ],
          "correctIndex": 1,
          "explanation": "The exponentiation operator `**` is right-associative: it evaluates `3 ** 2 = 9` first, then `2 ** 9 = 512`."
        },
        {
          "type": "multiple-choice",
          "question": "What is the key difference between the `==` operator and the `is` operator?",
          "options": [
            "`==` tests value equality, whereas `is` tests object identity (same memory address)",
            "`==` is for numbers only, `is` is for strings",
            "`==` tests reference equality, while `is` tests value equality",
            "There is no difference in Python"
          ],
          "correctIndex": 0,
          "explanation": "`==` checks if values are equivalent, whereas `is` checks whether two variable references point to the exact same object in memory (`id(a) == id(b)`)."
        }
      ]
    },
    "python-lists": {
      "id": "python-lists",
      "title": "Python Lists & Operations",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "6 min read",
      "lead": "Lists are mutable, ordered sequences of arbitrary objects implemented under the hood as dynamic arrays of pointers.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>CPython List Over-Allocation Strategy:</strong> A Python <code>list</code> is implemented internally as a contiguous array of pointers to objects. When items are appended, CPython employs an over-allocation growth pattern (0, 4, 8, 16, 25, 35...) to achieve amortized <strong>O(1)</strong> append time. However, inserting or deleting items at the front requires shifting all subsequent pointers, incurring <strong>O(n)</strong> cost.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>List Architecture & Common Operations</h2>\n                <p>In CPython, a <code>list</code> is an over-allocated array of object pointers, offering amortized <strong>O(1)</strong> append and pop-from-end operations, but <strong>O(n)</strong> insertion or deletion at the beginning.</p>\n            <ul>\n                <li><code>list.append(x)</code>: Adds item x to the end.</li>\n                <li><code>list.insert(i, x)</code>: Inserts item x at index i.</li>\n                <li><code>list.pop([i])</code>: Removes and returns item at index i (defaults to last item).</li>\n                <li><code>list.sort(key=None, reverse=False)</code>: In-place Timsort algorithm.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>List Comprehensions</h2>\n                <p>List comprehensions provide a concise, high-performance syntax for transforming sequences:</p>\n            <p><code>[expr for item in iterable if condition]</code></p>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Dynamic resizing without manual memory management.</li><li>Supports heterogeneous elements (mixing floats, strings, and objects in one collection).</li><li>Syntactically elegant list comprehensions provide vectorized performance for sequence transformations.</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Inefficient for massive numeric computations due to pointer dereferencing (NumPy arrays are far superior).</li><li>High memory footprint compared to C-style primitive arrays.</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Storing discrete experimental trials and observation records.</li><li>Queuing tasks and intermediate states in experimental workflows.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "# List operations and comprehensions\nwavelengths_nm = [450, 520, 680, 550, 400, 700]\n\n# Filter visible red and infrared (> 600 nm)\nlong_waves = [w for w in wavelengths_nm if w >= 600]\nwavelengths_nm.sort()\n\nprint(\"Sorted Wavelengths:\", wavelengths_nm)\nprint(\"Long Wavelengths (>= 600nm):\", long_waves)\nprint(\"Popped Shortest:\", wavelengths_nm.pop(0))",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the time complexity of appending an element to the end of a Python list (amortized)?",
          "options": [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n^2)"
          ],
          "correctIndex": 0,
          "explanation": "Because Python lists use an over-allocation dynamic array strategy, appending to the end has amortized O(1) constant time complexity."
        },
        {
          "type": "multiple-choice",
          "question": "What is the average time complexity of appending an item to the end of a Python list using `.append()`?",
          "options": [
            "O(1) amortized",
            "O(n)",
            "O(log n)",
            "O(n^2)"
          ],
          "correctIndex": 0,
          "explanation": "CPython lists over-allocate backing array space, making appends an O(1) amortized operation."
        },
        {
          "type": "multiple-choice",
          "question": "Given `nums = [1, 2, 3]`, what is the result of `nums * 2`?",
          "options": [
            "[2, 4, 6]",
            "[1, 2, 3, 1, 2, 3]",
            "[[1, 2, 3], [1, 2, 3]]",
            "TypeError"
          ],
          "correctIndex": 1,
          "explanation": "Multiplying a Python list by an integer `k` concatenates `k` shallow repetitions of the list sequence."
        }
      ]
    },
    "python-tuples": {
      "id": "python-tuples",
      "title": "Python Tuples & Unpacking",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "4 min read",
      "lead": "Tuples are immutable, ordered heterogeneous collections providing data integrity, hashability for dictionary keys, and elegant sequence unpacking.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>Immutability, Memory Invariants & Hashability:</strong> Because tuples are immutable, CPython optimizes their memory allocation into a single contiguous block containing the PyObject header and pointers, without over-allocation buffers. Tuples containing only immutable elements are themselves hashable, allowing them to serve as dictionary keys or set elements.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>Creating Tuples & Singleton Syntax</h2>\n                <p>Tuples are defined using comma-separated values, optionally enclosed in parentheses <code>( )</code>. A single-element tuple requires a trailing comma: <code>x = (42,)</code>.</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Sequence Unpacking & Starred Expressions</h2>\n                <p>Tuples can be unpacked into multiple target variables. Extended unpacking using the asterisk operator (<code>*</code>) captures residual elements into a list.</p>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Guaranteed data integrity: contents cannot be inadvertently mutated by downstream functions.</li><li>Lower memory consumption and faster allocation than lists.</li><li>Can serve as dictionary keys for multidimensional coordinate lookups.</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Cannot add, remove, or modify elements in place; modifications require creating a new tuple.</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Representing fixed physical coordinates: <code>position = (x, y, z)</code>.</li><li>Returning multiple physical quantities from a calculation: <code>(energy, momentum, wavelength)</code>.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "# Tuple Packing and Extended Unpacking\ncoordinates = (13.7498, 79.7034, \"Srikalahasti\", \"Andhra Pradesh\")\n\n# Unpacking with star expression\nlat, lon, *location_info = coordinates\n\nprint(f\"Latitude: {lat}, Longitude: {lon}\")\nprint(f\"Location Details List: {location_info}\")\nprint(f\"Immutable Tuple Length: {len(coordinates)}\")",
      "quiz": [
        {
          "type": "fill-in",
          "question": "How do you define a single-element tuple containing the integer 5 in Python?",
          "codeTemplate": "<span>Single tuple:</span> <input type='text' class='quiz-fill-input' placeholder='(5,)'>",
          "answer": [
            "(5,)",
            "5,"
          ],
          "explanation": "A trailing comma (e.g. (5,) or 5,) is required to distinguish a single-element tuple from parenthesized arithmetic."
        },
        {
          "type": "multiple-choice",
          "question": "How do you define a single-element tuple containing the integer 42?",
          "options": [
            "(42,)",
            "(42)",
            "tuple(42)",
            "[42,]"
          ],
          "correctIndex": 0,
          "explanation": "The trailing comma `(42,)` is syntactically required to distinguish a single-element tuple from parenthesized grouping `(42)`."
        },
        {
          "type": "multiple-choice",
          "question": "Can a tuple containing a list, e.g. `t = (1, 2, [3, 4])`, be used as a key in a Python dictionary?",
          "options": [
            "No, because the contained list is mutable and unhashable, raising a TypeError",
            "Yes, because tuples are always hashable",
            "Yes, Python automatically casts the list to a tuple",
            "No, dictionaries only support string keys"
          ],
          "correctIndex": 0,
          "explanation": "A tuple is only hashable if all of its elements are themselves hashable. An unhashable mutable list causes `hash(t)` to raise TypeError."
        }
      ]
    },
    "python-sets": {
      "id": "python-sets",
      "title": "Python Sets & Mathematical Operations",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "5 min read",
      "lead": "Sets are mutable collections of unique, hashable elements optimized for O(1) membership testing and mathematical set operations (union, intersection, difference).",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>Hash Table Architecture for Set Theory:</strong> Sets are implemented using open-addressing hash tables without value pointers. Element membership testing (<code>x in S</code>) executes in average <strong>O(1)</strong> time by computing the hash of the target element (<code>hash(x)</code>) and probing the internal table bucket directly.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>Mathematical Set Operators</h2>\n                <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Operation</th><th>Operator</th><th>Method</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Union</strong></td><td><code>A | B</code></td><td><code>A.union(B)</code></td></tr>\n                        <tr><td><strong>Intersection</strong></td><td><code>A &amp; B</code></td><td><code>A.intersection(B)</code></td></tr>\n                        <tr><td><strong>Difference</strong></td><td><code>A - B</code></td><td><code>A.difference(B)</code></td></tr>\n                        <tr><td><strong>Symmetric Difference</strong></td><td><code>A ^ B</code></td><td><code>A.symmetric_difference(B)</code></td></tr>\n                    </tbody>\n                </table>\n            </div>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Automatic deduplication of redundant experimental data points.</li><li>Sub-millisecond membership testing even with millions of elements.</li><li>Mathematical set operations (union |, intersection &, difference -) express set theory directly.</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Elements must be immutable/hashable; mutable collections like lists cannot be stored in sets.</li><li>Unordered: elements cannot be accessed via positional indices (s[0] raises TypeError).</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Filtering unique emission wavelengths detected by an optical spectrometer.</li><li>Identifying common resonant frequencies between multiple vibrating mechanical systems.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "# Mathematical Set Theory in Python\nphysics_students = {\"Ananya\", \"Ravi\", \"Sneha\", \"Karthik\"}\ncs_students = {\"Karthik\", \"Sneha\", \"Divya\", \"Pooja\"}\n\nboth_courses = physics_students & cs_students\neither_course = physics_students | cs_students\nonly_physics = physics_students - cs_students\n\nprint(\"Enrolled in Both:\", both_courses)\nprint(\"Total Unique Students:\", either_course)\nprint(\"Enrolled ONLY in Physics:\", only_physics)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which operator calculates the intersection of two Python sets A and B?",
          "options": [
            "&",
            "|",
            "^",
            "-"
          ],
          "correctIndex": 0,
          "explanation": "The ampersand '&' operator computes the mathematical intersection of two sets."
        },
        {
          "type": "multiple-choice",
          "question": "What is the output of `set([1, 2, 2, 3, 3, 3])`?",
          "options": [
            "{1, 2, 3}",
            "[1, 2, 3]",
            "{3, 2, 1}",
            "(1, 2, 3)"
          ],
          "correctIndex": 0,
          "explanation": "Sets are unordered collections of unique elements; all duplicate entries are automatically discarded."
        },
        {
          "type": "multiple-choice",
          "question": "Which bitwise operator computes the symmetric difference (elements in either set, but not both)?",
          "options": [
            "^ (caret)",
            "& (ampersand)",
            "| (pipe)",
            "- (minus)"
          ],
          "correctIndex": 0,
          "explanation": "The `^` operator computes symmetric difference `A ^ B`, equivalent to `(A | B) - (A & B)`."
        }
      ]
    },
    "python-dictionaries": {
      "id": "python-dictionaries",
      "title": "Python Dictionaries & Mappings",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "6 min read",
      "lead": "Dictionaries are compact, insertion-ordered hash tables mapping unique, immutable keys to arbitrary values with average O(1) lookup time.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>Compact Insertion-Ordered Hash Tables:</strong> Since Python 3.7, dictionaries use a compact hash table design consisting of two arrays: a sparse index table storing hash bucket indices, and a dense table storing entries (hash, key pointer, value pointer) in insertion order. This reduced memory usage by 20-25% while preserving insertion order deterministically.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>Dictionary Fundamentals & Safe Access</h2>\n                <p>Accessing a non-existent key using subscript syntax <code>dict[key]</code> raises a <code>KeyError</code>. Using <code>dict.get(key, default)</code> avoids runtime exceptions by returning a fallback default value.</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Dictionary Merging (PEP 584)</h2>\n                <p>In Python 3.9+, dictionaries can be merged cleanly using the union operators: <code>dict1 | dict2</code> and augmented update <code>dict1 |= dict2</code>.</p>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Lightning-fast average O(1) key lookups, insertions, and deletions.</li><li>Deterministic insertion order preservation.</li><li>Clean merging with the union operator (dict1 | dict2).</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Keys must be hashable and immutable.</li><li>Memory overhead is higher than specialized structured records (e.g. namedtuples).</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Storing physical constant lookup tables (e.g. speed of light, Planck constant, electron mass).</li><li>Parsing and structuring JSON telemetry data received from laboratory instrumentation.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "# Physics Constants Dictionary\nconstants = {\n    \"c\": 2.99792458e8,      # Speed of light (m/s)\n    \"h\": 6.62607015e-34,     # Planck constant (J*s)\n    \"e\": 1.602176634e-19     # Elementary charge (C)\n}\n\n# Safe lookup with get()\ngrav = constants.get(\"G\", 6.67430e-11)\n\nprint(f\"Speed of light c = {constants['c']:.2e} m/s\")\nprint(f\"Gravitational constant G = {grav:.2e} N(m/kg)^2\")\nprint(\"Dictionary Keys:\", list(constants.keys()))",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which method should you use on a dictionary to retrieve a value without raising a KeyError if the key is absent?",
          "options": [
            "dict.get()",
            "dict.fetch()",
            "dict.find()",
            "dict.lookup()"
          ],
          "correctIndex": 0,
          "explanation": "dict.get(key, default) safely retrieves the value or returns the provided default without raising KeyError."
        },
        {
          "type": "multiple-choice",
          "question": "What does `d.get('voltage', 0.0)` return if the key `'voltage'` is absent from dictionary `d`?",
          "options": [
            "0.0",
            "None",
            "KeyError: 'voltage'",
            "False"
          ],
          "correctIndex": 0,
          "explanation": "The `.get(key, default)` method safely looks up keys without raising KeyError, returning the specified default value if absent."
        },
        {
          "type": "multiple-choice",
          "question": "Which dictionary method yields key-value pairs as iterable `(key, value)` 2-tuples?",
          "options": [
            ".items()",
            ".pairs()",
            ".entries()",
            ".values()"
          ],
          "correctIndex": 0,
          "explanation": "`dict.items()` returns a dynamic view of `(key, value)` tuples suitable for sequence unpacking in a loop."
        }
      ]
    },
    "python-if-else": {
      "id": "python-if-else",
      "title": "Python If...Else & Conditional Control",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "4 min read",
      "lead": "Controlling algorithmic execution paths using if, elif, else ladders, nested conditional blocks, and inline conditional ternary expressions.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>The Conditional Ladder</h2>\n                <p>Python checks expressions sequentially from top to bottom. The first condition that evaluates to <strong>Truthy</strong> has its block executed, after which the entire ladder exits.</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Conditional Expressions (Ternary Operator)</h2>\n                <p>Python features a clean inline ternary expression:</p>\n            <p><code>value_if_true if condition else value_if_false</code></p>\n            </section>\n            ",
      "code": "# Physics State of Matter Classifier\ntemp_celsius = 110.0\n\n# Conditional ladder\nif temp_celsius <= 0:\n    state = \"Solid (Ice)\"\nelif 0 < temp_celsius < 100:\n    state = \"Liquid (Water)\"\nelse:\n    state = \"Gas (Steam)\"\n\n# Ternary expression\nis_boiling = True if temp_celsius >= 100 else False\n\nprint(f\"At {temp_celsius}\u00b0C, H2O is in {state} state. Boiling: {is_boiling}\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the correct syntax for Python's inline ternary conditional expression?",
          "options": [
            "x if condition else y",
            "condition ? x : y",
            "if condition then x else y",
            "x when condition else y"
          ],
          "correctIndex": 0,
          "explanation": "Python's ternary operator uses the syntax: 'x if condition else y'."
        },
        {
          "type": "multiple-choice",
          "question": "What is the correct syntax for a one-line ternary conditional assignment in Python?",
          "options": [
            "x = val1 if condition else val2",
            "x = condition ? val1 : val2",
            "x = if condition then val1 else val2",
            "x = condition -> val1 | val2"
          ],
          "correctIndex": 0,
          "explanation": "Python's ternary operator follows the natural syntax: `<true_expr> if <condition> else <false_expr>`."
        },
        {
          "type": "multiple-choice",
          "question": "In the condition `if func_a() and func_b():`, what happens if `func_a()` returns `False`?",
          "options": [
            "`func_b()` is skipped entirely due to short-circuit evaluation",
            "`func_b()` is still executed",
            "A ShortCircuitWarning is raised",
            "Both functions execute concurrently"
          ],
          "correctIndex": 0,
          "explanation": "Logical `and` short-circuits: once the left operand is False, the overall expression cannot be True, so the right operand is never called."
        }
      ]
    },
    "python-match-case": {
      "id": "python-match-case",
      "title": "Python Structural Pattern Matching (PEP 634)",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "5 min read",
      "lead": "Modern pattern matching introduced in Python 3.10 offering structural destructuring, sequence and mapping patterns, pattern guards, and wildcards.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>Structural Pattern Matching (PEP 634):</strong> Unlike traditional switch statements that simply compare scalar values, Python's <code>match-case</code> evaluates the <em>structure</em> and <em>types</em> of data. It can unpack sequences, match dictionary key patterns, check class types, and bind internal variables dynamically while evaluating optional boolean guard conditions.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>Pattern Matching vs Switch Statements</h2>\n                <p>Unlike simple C or Java <code>switch</code> statements, Python's <code>match-case</code> does not simply compare values\u2014it inspects the <strong>structure</strong> of data and binds variables dynamically.</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Guards & Wildcard Pattern</h2>\n                <p>The wildcard <code>_</code> acts as a default catch-all fallback. Pattern guards add conditional <code>if</code> constraints to case expressions.</p>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Replaces deeply nested, fragile if-elif ladders with clean declarative pattern rules.</li><li>Supports sequence destructuring, type matching, and conditional guards.</li><li>Improves readability and maintainability for complex state machines.</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Requires Python 3.10 or newer.</li><li>Syntax has nuances (e.g. variable names inside patterns are capture targets, not equality comparisons).</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Parsing command packets sent to laboratory robotics and stepper motors.</li><li>Classifying particle collision event types based on detector sensor signatures.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "# Command Parser using Structural Pattern Matching\ndef handle_command(command):\n    match command:\n        case [\"move\", (\"north\" | \"south\" | \"east\" | \"west\") as direction]:\n            return f\"Moving agent {direction}\"\n        case [\"fire\", power] if power > 100:\n            return f\"OVERLOAD WARNING: Power {power} exceeds threshold!\"\n        case [\"fire\", power]:\n            return f\"Discharging laser with power {power} W\"\n        case [\"status\"]:\n            return \"All telemetry sensors operational.\"\n        case _:\n            return \"Error: Unknown command sequence.\"\n\nprint(handle_command([\"move\", \"north\"]))\nprint(handle_command([\"fire\", 150]))\nprint(handle_command([\"status\"]))",
      "quiz": [
        {
          "type": "fill-in",
          "question": "Which character serves as the wildcard / default catch-all pattern in a Python match-case statement?",
          "codeTemplate": "<span>Wildcard: case </span><input type='text' class='quiz-fill-input' placeholder='_'>:",
          "answer": "_",
          "explanation": "The underscore '_' represents the wildcard pattern in PEP 634 match-case statements."
        },
        {
          "type": "multiple-choice",
          "question": "Which wildcard character represents the default catch-all pattern in a `match...case` block?",
          "options": [
            "_ (underscore)",
            "* (asterisk)",
            "default",
            "else"
          ],
          "correctIndex": 0,
          "explanation": "In PEP 634 Structural Pattern Matching, `case _:` serves as the wildcard that matches any value."
        },
        {
          "type": "multiple-choice",
          "question": "How can you apply an additional boolean condition (guard) to a pattern in a `case` statement?",
          "options": [
            "case [x, y] if x > 0:",
            "case [x, y] when x > 0:",
            "case [x, y] where x > 0:",
            "case [x, y]: guard(x > 0)"
          ],
          "correctIndex": 0,
          "explanation": "Guards are attached using the `if` keyword immediately following the pattern: `case pattern if condition:`."
        }
      ]
    },
    "python-while-loops": {
      "id": "python-while-loops",
      "title": "Python While Loops & Jump Statements",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "4 min read",
      "lead": "Mastering indefinite iteration, loop condition evaluation, jump control statements (break, continue, pass), and the unique Python while...else construct.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-arrows-rotate\"></i> What is a While Loop? (Indefinite Iteration)</h2>\n            <p>A <strong>while loop</strong> executes a block of code repeatedly as long as a specified boolean test condition remains <code>True</code>. While <code>for</code> loops are designed for <em>definite iteration</em> (iterating over a pre-known sequence of elements), <code>while</code> loops are designed for <strong>indefinite iteration</strong> \u2014 where the exact number of iterations is not known in advance and depends on dynamic runtime conditions (such as sensor readings, user inputs, or convergence algorithms).</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-traffic-light\"></i> Loop Control Statements: break, continue, and pass</h2>\n            <ul>\n                <li><strong><code>break</code>:</strong> Immediately aborts the loop entirely and transfers control to the first statement following the loop block.</li>\n                <li><strong><code>continue</code>:</strong> Skips the remaining statements inside the current iteration and jumps directly to re-evaluating the loop condition.</li>\n                <li><strong><code>pass</code>:</strong> A null statement (no-op) used as a syntactical placeholder where Python syntax demands an indented block, but no action is required.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-code-fork\"></i> The Unique Python while...else Construct</h2>\n            <p>One of Python's most unique language features is attaching an <code>else:</code> block to a <code>while</code> loop:</p>\n            <div class=\"callout-box info\">\n                <i class=\"fa-solid fa-circle-info callout-icon\"></i>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">How while...else Operates</div>\n                    <div class=\"callout-text\">The <code>else:</code> suite executes <strong>only when the loop terminates naturally</strong> because the test condition evaluated to <code>False</code>. If the loop is terminated prematurely via a <code>break</code> statement, the <code>else:</code> block is completely skipped! This provides an elegant mechanism for search loops without clumsy boolean flag variables.</div>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li><strong>Infinite Loop Prevention:</strong> Ensure the loop variable is modified inside the suite; otherwise, the condition remains True indefinitely, freezing the program.</li>\n                <li><strong>Sentinel Values:</strong> While loops are widely used in data streams to continuously read input packets until a special termination code (sentinel) is received.</li>\n            </ul>\n        </div>\n        ",
      "code": "# Half-life radioactive decay simulation\nradium_mass = 100.0  # grams\nhalf_life_years = 1600\nyears = 0\n\nwhile radium_mass > 12.5:\n    radium_mass /= 2\n    years += half_life_years\nelse:\n    print(\"Threshold reached naturally without premature abort!\")\n\nprint(f\"Remaining mass: {radium_mass}g after {years} years.\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "When does the 'else' block of a Python while loop execute?",
          "options": [
            "Only when the loop terminates normally without encountering 'break'",
            "Whenever the loop terminates, including after 'break'",
            "Before the loop begins",
            "Only if the condition was initially false"
          ],
          "correctIndex": 0,
          "explanation": "A loop-else clause executes only when the loop condition becomes false, but is skipped if terminated via 'break'."
        },
        {
          "type": "multiple-choice",
          "question": "When does the optional `else:` block attached to a `while` loop execute?",
          "options": [
            "When the loop condition evaluates to False normally without encountering a `break`",
            "Only when a `break` statement is triggered",
            "Whenever an exception is caught in the loop",
            "On every loop iteration"
          ],
          "correctIndex": 0,
          "explanation": "In Python loops, the `else:` branch executes only when the loop completes its iterations naturally without terminating via `break`."
        },
        {
          "type": "multiple-choice",
          "question": "Which statement immediately aborts the current iteration and jumps directly to the loop condition evaluation?",
          "options": [
            "continue",
            "pass",
            "break",
            "next"
          ],
          "correctIndex": 0,
          "explanation": "`continue` skips the remainder of the current loop iteration and proceeds to the next iteration."
        }
      ]
    },
    "python-for-loops": {
      "id": "python-for-loops",
      "title": "Python For Loops & Range Arithmetic",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "5 min read",
      "lead": "Iterating over sequences, strings, and generator streams with for loops, enumerate(), zip(), and range() O(1) memory model.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>The range() Object Memory Model</h2>\n                <p>In Python 3, <code>range(start, stop, step)</code> does not generate an entire list in memory. It is an immutable arithmetic sequence object requiring <strong>O(1)</strong> memory regardless of sequence size!</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Iteration Utilities: enumerate() and zip()</h2>\n                <ul>\n                <li><code>enumerate(iterable, start=0)</code>: Yields index-element pairs.</li>\n                <li><code>zip(*iterables)</code>: Pairs corresponding elements from multiple iterables simultaneously.</li>\n            </ul>\n            </section>\n            ",
      "code": "# Iterating with enumerate() and zip()\nplanets = [\"Mercury\", \"Venus\", \"Earth\", \"Mars\"]\ndistances_au = [0.39, 0.72, 1.00, 1.52]\n\nprint(\"Planetary Solar System Table:\")\nfor idx, (planet, dist) in enumerate(zip(planets, distances_au), start=1):\n    print(f\"{idx}. {planet:<10} : {dist:.2f} AU from Sun\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What function allows simultaneous iteration over two or more lists element-by-element?",
          "options": [
            "zip()",
            "pair()",
            "combine()",
            "merge()"
          ],
          "correctIndex": 0,
          "explanation": "The zip() function aggregates elements from each of the iterables into tuples."
        },
        {
          "type": "multiple-choice",
          "question": "What sequence of integers is generated by `list(range(2, 11, 3))`?",
          "options": [
            "[2, 5, 8]",
            "[2, 5, 8, 11]",
            "[3, 6, 9]",
            "[2, 4, 6, 8, 10]"
          ],
          "correctIndex": 0,
          "explanation": "`range(start, stop, step)` starts at 2, increments by 3, and stops before 11: giving 2, 5, 8."
        },
        {
          "type": "multiple-choice",
          "question": "Which built-in function yields pairs of `(index, element)` while iterating over a collection?",
          "options": [
            "enumerate()",
            "zip()",
            "iter()",
            "indexof()"
          ],
          "correctIndex": 0,
          "explanation": "`enumerate(iterable, start=0)` yields 2-tuples containing the count index and the corresponding item."
        }
      ]
    },
    "python-functions": {
      "id": "python-functions",
      "title": "Python Functions & Parameter Taxonomy",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "7 min read",
      "lead": "Modular programming through functions (def), positional and keyword arguments, default parameters, variable-length *args and **kwargs, and recursion.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>First-Class Citizens & Stack Frames:</strong> In Python, functions are first-class objects: they can be assigned to variables, passed as arguments, and returned from other functions. When a function is invoked, CPython creates a <code>PyFrameObject</code> on the call stack containing local variables, bytecode instructions, and evaluation stacks, which is destroyed upon return.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>The Full Python Argument Taxonomy</h2>\n                <p>Python provides an expressive parameter system:</p>\n            <ul>\n                <li><strong>Positional Arguments:</strong> Bound strictly by position.</li>\n                <li><strong>Keyword Arguments:</strong> Specified explicitly by name (<code>arg=value</code>).</li>\n                <li><strong>Default Arguments:</strong> Fallback values if omitted. <em>Caution: Never use mutable objects (like [] or {}) as default arguments!</em></li>\n                <li><strong>*args:</strong> Gathers extra positional arguments into a tuple.</li>\n                <li><strong>**kwargs:</strong> Gathers extra keyword arguments into a dictionary.</li>\n            </ul>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Modular procedural abstraction, code reuse, and encapsulation of physical formulas.</li><li>Expressive parameter handling (*args, **kwargs, default values, keyword-only args).</li><li>Supports closures and higher-order functions for decorators and pipelines.</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Function call overhead in Python is slightly higher than in C due to frame object creation.</li><li>Recursion depth is capped (typically 1000) to prevent C call stack exhaustion.</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Encapsulating physical laws into reusable modular libraries (kinematics, thermodynamics, optics).</li><li>Building numerical solvers that accept arbitrary mathematical functions as arguments.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "# Flexible Function Definition with *args and **kwargs\ndef calculate_resistance_network(*resistors, connection=\"series\", **metadata):\n    \"\"\"Calculates equivalent resistance for series or parallel configurations.\"\"\"\n    if connection == \"series\":\n        r_eq = sum(resistors)\n    elif connection == \"parallel\":\n        r_eq = 1.0 / sum(1.0 / r for r in resistors)\n    else:\n        raise ValueError(\"Unknown connection type\")\n    \n    return r_eq, metadata\n\nr_total, meta = calculate_resistance_network(100, 200, 300, connection=\"parallel\", circuit_id=\"LAB-01\")\nprint(f\"Parallel Equivalent Resistance: {r_total:.2f} Ohms\")\nprint(f\"Circuit Metadata: {meta}\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What data type does the **kwargs parameter receive within a function body?",
          "options": [
            "dict",
            "tuple",
            "list",
            "set"
          ],
          "correctIndex": 0,
          "explanation": "**kwargs captures arbitrary keyword arguments as a standard Python dictionary (dict)."
        },
        {
          "type": "multiple-choice",
          "question": "What container type is created when variable positional arguments are captured using `*args`?",
          "options": [
            "A tuple",
            "A list",
            "A set",
            "A dictionary"
          ],
          "correctIndex": 0,
          "explanation": "`*args` packs variable positional arguments into an immutable tuple, whereas `**kwargs` packs keyword arguments into a dictionary."
        },
        {
          "type": "multiple-choice",
          "question": "Why is using a mutable default argument like `def append_to(item, target=[])` dangerous?",
          "options": [
            "The default list is instantiated only once when the function is defined, sharing state across multiple calls",
            "Python does not allow lists in parameter definitions",
            "It raises a SyntaxError at runtime",
            "It causes a stack overflow error"
          ],
          "correctIndex": 0,
          "explanation": "Default argument expressions are evaluated once at function definition time. Subsequent calls modify the same persistent list object."
        }
      ]
    },
    "python-lambda": {
      "id": "python-lambda",
      "title": "Python Lambda & Functional Utilities",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "4 min read",
      "lead": "Anonymous in-line functions: syntax, single-expression limitations, functional programming primitives (map, filter, reduce), and sorting keys.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-bolt\"></i> What is a Lambda Function? (Anonymous Functions)</h2>\n            <p>In Python, a <strong>lambda function</strong> is a small, anonymous function defined without a name using the <code>lambda</code> keyword rather than the standard <code>def</code> statement. The concept originates from Alonzo Church's mathematical formalism known as <em>Lambda Calculus</em>.</p>\n            \n            <p><strong>Syntax:</strong> <code>lambda arguments: expression</code></p>\n            \n            <div class=\"callout-box warning\">\n                <i class=\"fa-solid fa-triangle-exclamation callout-icon\"></i>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Single-Expression Limitation</div>\n                    <div class=\"callout-text\">A lambda function can accept any number of positional and keyword arguments, but it can contain <strong>only a single expression</strong>. It cannot contain statements like <code>return</code>, <code>pass</code>, <code>assert</code>, or variable assignments (<code>=</code>). The expression is evaluated and returned automatically!</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-filter\"></i> Functional Programming Primitives: map(), filter(), and sorted()</h2>\n            <p>Lambdas shine brightest when passed as short callback functions to higher-order functions:</p>\n            <ul>\n                <li><strong><code>map(func, iterable)</code>:</strong> Applies the lambda transformation to each item in an iterable.</li>\n                <li><strong><code>filter(func, iterable)</code>:</strong> Retains only elements for which the lambda returns <code>True</code>.</li>\n                <li><strong>Custom Sorting:</strong> Passing <code>key=lambda x: x['score']</code> into <code>sorted()</code> to sort complex dictionaries or tuples by specific fields.</li>\n            </ul>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li><strong>PEP 8 Guideline:</strong> Do not assign a lambda to a variable (e.g. <code>sq = lambda x: x**2</code>). If a function requires a name, use <code>def sq(x): return x**2</code> for clearer stack traces and debugging.</li>\n            </ul>\n        </div>\n        ",
      "code": "# Functional operations with lambda and map/filter\ntemperatures_f = [32.0, 68.0, 100.0, 212.0]\n\n# Convert Fahrenheit to Celsius: C = (F - 32) * 5/9\ncelsius = list(map(lambda f: (f - 32) * 5 / 9, temperatures_f))\nabove_room_temp = list(filter(lambda c: c > 25.0, celsius))\n\nprint(\"Celsius Readings:\", [round(c, 1) for c in celsius])\nprint(\"Temps above 25\u00b0C:\", [round(c, 1) for c in above_room_temp])",
      "quiz": [
        {
          "type": "fill-in",
          "question": "Which keyword creates an anonymous inline function in Python?",
          "codeTemplate": "<span>Keyword: </span><input type='text' class='quiz-fill-input' placeholder='lambda'>",
          "answer": "lambda",
          "explanation": "The 'lambda' keyword defines anonymous inline functions."
        },
        {
          "type": "multiple-choice",
          "question": "Which of the following creates a valid lambda function that calculates kinetic energy \\(0.5 \\cdot m \\cdot v^2\\)?",
          "options": [
            "lambda m, v: 0.5 * m * v**2",
            "def lambda(m, v): return 0.5 * m * v**2",
            "lambda(m, v) => 0.5 * m * v**2",
            "m, v -> 0.5 * m * v**2"
          ],
          "correctIndex": 0,
          "explanation": "Python lambda syntax is `lambda param1, param2: expression`."
        },
        {
          "type": "multiple-choice",
          "question": "What is the output of `list(map(lambda x: x * 2, [1, 2, 3]))`?",
          "options": [
            "[2, 4, 6]",
            "[1, 2, 3, 1, 2, 3]",
            "[2, 2, 2]",
            "None"
          ],
          "correctIndex": 0,
          "explanation": "`map()` applies the transformation lambda to each item of the input sequence."
        }
      ]
    },
    "python-arrays-iterators": {
      "id": "python-arrays-iterators",
      "title": "Python Iterators & The Iteration Protocol",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "5 min read",
      "lead": "Understanding the Python Iteration Protocol (__iter__ and __next__), memory-efficient generators with yield, and StopIteration.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-repeat\"></i> The Python Iteration Protocol: Iterable vs. Iterator</h2>\n            <p>Many students confuse an <em>Iterable</em> with an <em>Iterator</em>:</p>\n            <ul>\n                <li><strong>Iterable:</strong> Any object capable of returning an iterator (implements <code>__iter__()</code>). Examples: <code>list</code>, <code>tuple</code>, <code>str</code>, <code>dict</code>. You can iterate over an iterable using a <code>for</code> loop.</li>\n                <li><strong>Iterator:</strong> The actual stateful cursor object that produces the next value in the stream (implements both <code>__iter__()</code> and <code>__next__()</code>). Calling <code>next(it)</code> yields the next element and advances internal state.</li>\n            </ul>\n            <p>When an iterator exhausts its data stream, calling <code>next()</code> raises the standard <code>StopIteration</code> exception, which signals to <code>for</code> loops that iteration is complete.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-seedling\"></i> Generators and the yield Statement</h2>\n            <p>Creating an iterator class with manual state tracking is tedious. Python provides <strong>Generators</strong>: functions that use the <code>yield</code> keyword instead of <code>return</code>.</p>\n            <p>When a generator encounters <code>yield</code>, it produces a value, suspends its execution state (preserving local variables and instruction pointer), and hands control back to the caller. On the next call, it resumes execution right where it paused!</p>\n            <p><strong>Memory Advantage:</strong> A generator that produces 1 billion numbers takes almost <strong>zero RAM</strong> because it yields numbers lazily on demand, whereas a list of 1 billion numbers would instantly crash your computer with an <code>OutOfMemoryError</code>!</p>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li>Generator Expressions use parentheses: <code>(x**2 for x in range(100))</code> creates a lazy generator object, while <code>[x**2 for x in range(100)]</code> creates an eager, memory-allocated list.</li>\n            </ul>\n        </div>\n        ",
      "code": "# Custom Countdown Iterator Class\nclass Countdown:\n    def __init__(self, start):\n        self.current = start\n        \n    def __iter__(self):\n        return self\n        \n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        val = self.current\n        self.current -= 1\n        return val\n\n# Looping with the custom iterator\nprint(\"Rocket Launch Countdown:\")\nfor count in Countdown(5):\n    print(f\"T-minus {count}...\")\nprint(\"Liftoff!\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which exception is raised by an iterator's __next__() method when there are no further items?",
          "options": [
            "StopIteration",
            "IndexError",
            "EOFError",
            "IterationDone"
          ],
          "correctIndex": 0,
          "explanation": "The StopIteration built-in exception signals that the iteration is complete."
        },
        {
          "type": "multiple-choice",
          "question": "Which standard exception is raised by an iterator's `__next__()` method when no more elements remain?",
          "options": [
            "StopIteration",
            "IndexError",
            "GeneratorExit",
            "EndSequenceException"
          ],
          "correctIndex": 0,
          "explanation": "Under the Python iteration protocol, `StopIteration` notifies calling loops that the stream is exhausted."
        },
        {
          "type": "multiple-choice",
          "question": "Which keyword transforms a standard Python function into a memory-efficient generator function?",
          "options": [
            "yield",
            "generate",
            "return",
            "stream"
          ],
          "correctIndex": 0,
          "explanation": "The `yield` statement suspends function state, producing values lazily on demand one at a time."
        }
      ]
    },
    "python-scope": {
      "id": "python-scope",
      "title": "Python Variable Scope & The LEGB Rule",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "5 min read",
      "lead": "Variable namespaces, variable lifetime, the LEGB scope resolution rule (Local, Enclosing, Global, Built-in), and global / nonlocal declarations.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>The LEGB Resolution Hierarchy</h2>\n                <p>When resolving a variable name, Python inspects scopes in strict hierarchical order:</p>\n            <ol>\n                <li><strong>Local (L):</strong> Defined inside the current function.</li>\n                <li><strong>Enclosing (E):</strong> Defined in enclosing / nested functions.</li>\n                <li><strong>Global (G):</strong> Defined at the top level of the module.</li>\n                <li><strong>Built-in (B):</strong> Pre-defined in the <code>builtins</code> module (e.g. <code>len</code>, <code>print</code>, <code>range</code>).</li>\n            </ol>\n            </section>\n            ",
      "code": "# Demonstrating LEGB and global/nonlocal\nx = \"Global Scope\"\n\ndef outer():\n    x = \"Enclosing Scope\"\n    def inner():\n        nonlocal x\n        x = \"Modified by Inner\"\n    inner()\n    return x\n\nprint(\"Global Variable:\", x)\nprint(\"Outer Result after nonlocal edit:\", outer())",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which keyword allows modifying a variable in an enclosing (non-global) outer function scope?",
          "options": [
            "nonlocal",
            "global",
            "outer",
            "parent"
          ],
          "correctIndex": 0,
          "explanation": "The 'nonlocal' keyword allows inner functions to rebind variables declared in outer enclosing scopes."
        },
        {
          "type": "multiple-choice",
          "question": "Which keyword is used inside a nested function to modify a variable declared in its immediate outer enclosing scope?",
          "options": [
            "nonlocal",
            "global",
            "outer",
            "parent"
          ],
          "correctIndex": 0,
          "explanation": "`nonlocal` rebinds variables in nearest enclosing scopes (excluding global/built-in), whereas `global` targets module-level variables."
        },
        {
          "type": "multiple-choice",
          "question": "What is the correct name resolution hierarchy described by the LEGB rule?",
          "options": [
            "Local -> Enclosing -> Global -> Built-in",
            "Lexical -> External -> Global -> Base",
            "Local -> Extended -> General -> Binary",
            "List -> Element -> Group -> Block"
          ],
          "correctIndex": 0,
          "explanation": "Python resolves identifiers by searching Local first, then Enclosing functions, then Global module scope, and finally Built-in names."
        }
      ]
    },
    "python-modules": {
      "id": "python-modules",
      "title": "Python Modules, Packages & Namespaces",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "5 min read",
      "lead": "Organizing large codebases into reusable modules and hierarchical packages, understanding sys.path, and the __name__ == '__main__' idiom.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>The __name__ == '__main__' Idiom</h2>\n                <p>When a Python file is run directly, CPython sets its special <code>__name__</code> attribute to <code>'__main__'</code>. When imported as a module, <code>__name__</code> matches the module filename. This enables files to serve both as standalone runnable scripts and as reusable library modules.</p>\n            </section>\n            ",
      "code": "import math\nimport sys\n\nprint(\"Module Name (__name__):\", __name__)\nprint(\"Math Pi Constant:\", math.pi)\nprint(\"System Search Paths count:\", len(sys.path))\n\nif __name__ == \"__main__\":\n    print(\"Script executed directly as entrypoint!\")",
      "quiz": [
        {
          "type": "fill-in",
          "question": "What is the value of __name__ when a Python script is executed directly from the terminal?",
          "codeTemplate": "<span>Value: '</span><input type='text' class='quiz-fill-input' placeholder='__main__'><span>'</span>",
          "answer": [
            "__main__",
            "'__main__'"
          ],
          "explanation": "Python sets the __name__ variable of the entry script to '__main__'."
        },
        {
          "type": "multiple-choice",
          "question": "What is the value of `__name__` when a Python script is executed directly from the command line?",
          "options": [
            "'__main__'",
            "'__root__'",
            "'module'",
            "None"
          ],
          "correctIndex": 0,
          "explanation": "The top-level execution environment assigns `'__main__'` to `__name__`, allowing `if __name__ == '__main__':` guards to work."
        },
        {
          "type": "multiple-choice",
          "question": "Which file in a directory signals to Python that the folder should be treated as a package?",
          "options": [
            "__init__.py",
            "__package__.py",
            "main.py",
            "module.info"
          ],
          "correctIndex": 0,
          "explanation": "`__init__.py` initializes the package namespace and controls package-level imports."
        }
      ]
    },
    "python-dates-math": {
      "id": "python-dates-math",
      "title": "Python Dates & Math Modules",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "4 min read",
      "lead": "Mastering the datetime module for timestamps and durations, and the math module for scientific calculations and trigonometry.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>The math Module for Scientific Work</h2>\n                <p>The standard <code>math</code> library provides underlying C-standard mathematical functions, including trigonometric (<code>sin</code>, <code>cos</code>, <code>tan</code>), exponential (<code>exp</code>, <code>log</code>, <code>log10</code>), and rounding helpers.</p>\n            </section>\n            ",
      "code": "import math\nfrom datetime import datetime, timedelta\n\n# Physics: Simple Harmonic Motion calculation\namplitude = 5.0  # meters\nangular_frequency = math.pi / 2  # rad/s\ntime_sec = 1.0\n\ndisplacement = amplitude * math.cos(angular_frequency * time_sec)\nprint(f\"SHM Displacement at t={time_sec}s: {displacement:.3f} m\")\n\n# Date arithmetic\nnow = datetime.now()\nexam_date = now + timedelta(days=45)\nprint(\"Current Date:\", now.strftime(\"%Y-%m-%d\"))\nprint(\"Target Exam Date:\", exam_date.strftime(\"%Y-%m-%d\"))",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which method in the datetime module formats a datetime object into a custom human-readable string?",
          "options": [
            "strftime()",
            "strptime()",
            "format()",
            "toString()"
          ],
          "correctIndex": 0,
          "explanation": "strftime() (string format time) converts a datetime object to a formatted string using directives."
        },
        {
          "type": "multiple-choice",
          "question": "Which method in the `datetime` module formats a `datetime` object into a readable formatted string?",
          "options": [
            ".strftime()",
            ".strptime()",
            ".to_string()",
            ".dateformat()"
          ],
          "correctIndex": 0,
          "explanation": "`strftime` stands for 'string format time', converting datetime objects to strings using directives like `%Y-%m-%d`."
        },
        {
          "type": "multiple-choice",
          "question": "Which function in the `math` module computes the greatest common divisor of two integers?",
          "options": [
            "math.gcd()",
            "math.lcm()",
            "math.hcf()",
            "math.factor()"
          ],
          "correctIndex": 0,
          "explanation": "`math.gcd(a, b)` computes the greatest common divisor using Euclid's algorithm in fast C code."
        }
      ]
    },
    "python-json-regex": {
      "id": "python-json-regex",
      "title": "Python JSON & Regular Expressions",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "5 min read",
      "lead": "Serializing and deserializing structured JSON data, and advanced pattern matching using Python's regular expressions (re) module.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>JSON Parsing & Dumping</h2>\n                <ul>\n                <li><code>json.dumps(obj)</code>: Serializes Python dictionary/list to a JSON formatted string.</li>\n                <li><code>json.loads(str)</code>: Deserializes JSON string to Python data structure.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Regular Expressions (re Module)</h2>\n                <p>Key regex functions include <code>re.search()</code>, <code>re.findall()</code>, <code>re.sub()</code>, and <code>re.compile()</code>.</p>\n            </section>\n            ",
      "code": "import json\nimport re\n\n# JSON Serialization\nlab_result = {\n    \"experiment\": \"Photoelectric Effect\",\n    \"stopping_potential_v\": 1.45,\n    \"frequency_hz\": 6.8e14,\n    \"status\": \"Verified\"\n}\n\njson_payload = json.dumps(lab_result, indent=2)\nprint(\"JSON Output:\n\", json_payload)\n\n# Regex pattern extraction\nlog_data = \"Station-01 [TEMP: 42.5C] Station-02 [TEMP: 39.8C]\"\ntemperatures = re.findall(r'TEMP:\\s*([\\d\\.]+)C', log_data)\nprint(\"Extracted Temperature Readings (\u00b0C):\", temperatures)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which function in the 're' module returns all non-overlapping pattern matches as a list of strings?",
          "options": [
            "re.findall()",
            "re.search()",
            "re.match()",
            "re.finditer()"
          ],
          "correctIndex": 0,
          "explanation": "re.findall() scans the entire target string and returns all matches as a list."
        },
        {
          "type": "multiple-choice",
          "question": "What is the key difference between `json.loads()` and `json.dumps()`?",
          "options": [
            "`json.loads()` parses a JSON string into Python objects; `json.dumps()` serializes Python objects into a JSON string",
            "`json.loads()` reads from a disk file; `json.dumps()` prints to terminal",
            "`json.loads()` is for lists; `json.dumps()` is for dicts",
            "There is no difference"
          ],
          "correctIndex": 0,
          "explanation": "`loads` = load string (deserialize); `dumps` = dump string (serialize)."
        },
        {
          "type": "multiple-choice",
          "question": "In regular expressions (`re`), which quantifier matches one or more repetitions of the preceding character?",
          "options": [
            "+ (plus)",
            "* (asterisk)",
            "? (question mark)",
            "{0,1}"
          ],
          "correctIndex": 0,
          "explanation": "`+` matches 1 or more occurrences, whereas `*` matches 0 or more, and `?` matches 0 or 1."
        }
      ]
    },
    "python-pip-try-except": {
      "id": "python-pip-try-except",
      "title": "Python PIP & Robust Exception Handling",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "6 min read",
      "lead": "Managing external packages with PIP, building defensive software with try, except, else, finally, and custom exception hierarchies.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>Defensive Exception Propagation & Tracebacks:</strong> When a runtime error occurs, CPython constructs an exception object and unwinds the call stack frame by frame looking for a matching <code>except</code> block. If uncaught, a full traceback is printed. The <code>finally</code> block is guaranteed to execute via bytecode instructions, even if exceptions are re-raised or return statements are encountered.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>The Full Exception Handling Lifecycle</h2>\n                <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Block</th><th>Execution Condition</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><code>try</code></td><td>Guards code that might raise an exception.</td></tr>\n                        <tr><td><code>except ErrorType</code></td><td>Catches and handles matching exceptions.</td></tr>\n                        <tr><td><code>else</code></td><td>Executes if and ONLY if NO exception was raised in the try block.</td></tr>\n                        <tr><td><code>finally</code></td><td>Always executes regardless of whether an exception occurred (ideal for cleanups).</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Separates normal operational logic from error recovery pathways.</li><li>Deterministic resource cleanup via the <code>finally</code> block.</li><li>Custom exception hierarchies allow domain-specific error reporting.</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Catching bare <code>except:</code> can mask critical bugs, syntax errors, and KeyboardInterrupt signals.</li><li>Exception handling should not be used as normal control flow due to performance overhead.</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Gracefully handling hardware communication timeouts in data acquisition systems.</li><li>Guarding against physical impossibilities (division by zero in resistance calculation, negative Kelvin temperatures).</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "# Defensive Calculation with Exception Handling\ndef calculate_resistance(voltage, current):\n    try:\n        r = voltage / current\n    except ZeroDivisionError:\n        print(\"Error: Current cannot be zero (Open circuit or division by zero)!\")\n        return None\n    except TypeError as e:\n        print(f\"Error: Numeric values required. Details: {e}\")\n        return None\n    else:\n        print(\"Calculation completed without error.\")\n        return r\n    finally:\n        print(\"Telemetry calculation cycle finalized.\")\n\nres = calculate_resistance(12.0, 0.5)\nprint(f\"Resistance: {res} Ohms\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which block in an exception handling construct is guaranteed to execute whether an exception occurs or not?",
          "options": [
            "finally",
            "else",
            "except",
            "catch"
          ],
          "correctIndex": 0,
          "explanation": "The 'finally' clause is always executed prior to leaving the try statement, making it essential for resource release."
        },
        {
          "type": "multiple-choice",
          "question": "When does the `finally:` block in a `try...except...finally` construct execute?",
          "options": [
            "Always, regardless of whether an exception occurred or was handled",
            "Only when an unhandled exception crashes the program",
            "Only when no exceptions occur",
            "Only if an `except` block catches an error"
          ],
          "correctIndex": 0,
          "explanation": "`finally:` always runs, ensuring resources (such as open file handles or network sockets) are guaranteed to be closed."
        },
        {
          "type": "multiple-choice",
          "question": "Which CLI command generates a standard list of all currently installed packages and their exact versions?",
          "options": [
            "pip freeze",
            "pip list --dump",
            "pip export",
            "pip packages"
          ],
          "correctIndex": 0,
          "explanation": "`pip freeze` outputs installed packages formatted as `package==version`, ideal for saving into `requirements.txt`."
        }
      ]
    },
    "python-user-input": {
      "id": "python-user-input",
      "title": "Python User Input & String Formatting",
      "category": "cat-basics",
      "track": "track-core",
      "readTime": "4 min read",
      "lead": "Receiving interactive console input via input(), type conversion, and mastering string formatting specifiers.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>The input() Function</h2>\n                <p>In Python 3, <code>input(prompt)</code> always returns data as a <strong>string</strong> (<code>str</code>). When numerical data is expected, explicit type conversion (e.g. <code>int()</code> or <code>float()</code>) is mandatory.</p>\n            </section>\n            ",
      "code": "# String Formatting Showcase\nstudent_name = \"Karthik\"\nroll_no = 2024101\npercentage = 94.6789\n\n# Modern Format Specifiers\nformatted_output = f\"Student: {student_name:<12} | ID: {roll_no} | Score: {percentage:.2f}%\"\nprint(formatted_output)\n\n# Demonstrating type conversion on input\nsimulated_input = \"25.4\"\nconverted_val = float(simulated_input)\nprint(f\"Parsed numeric value: {converted_val} (Type: {type(converted_val).__name__})\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What data type is always returned by the built-in input() function in Python 3?",
          "options": [
            "str",
            "int",
            "any",
            "None"
          ],
          "correctIndex": 0,
          "explanation": "In Python 3, input() reads a line from console and always returns it as a string (str)."
        },
        {
          "type": "multiple-choice",
          "question": "What data type is ALWAYS returned by Python's built-in `input()` function?",
          "options": [
            "str (string)",
            "int (integer)",
            "float",
            "Depends on what the user types"
          ],
          "correctIndex": 0,
          "explanation": "`input()` always returns user input as a string literal `str`, requiring explicit casting (`float(input())`) for numeric calculation."
        },
        {
          "type": "multiple-choice",
          "question": "How do you format a floating-point variable `wavelength = 632.819` to 2 decimal places using an f-string?",
          "options": [
            "f\"{wavelength:.2f}\"",
            "f\"{wavelength:2}\"",
            "f\"{wavelength%2f}\"",
            "f\"{round(wavelength, 2):f}\""
          ],
          "correctIndex": 0,
          "explanation": "In Python f-strings, `:.2f` specifies floating-point formatting rounded to two decimal places."
        }
      ]
    },
    "python-oop-concepts": {
      "id": "python-oop-concepts",
      "title": "Python OOP Concepts & Architecture",
      "category": "cat-oop",
      "track": "track-oop",
      "readTime": "5 min read",
      "lead": "Transitioning from procedural scripting to robust Object-Oriented Architecture: modeling real-world domain entities through Encapsulation, Abstraction, Inheritance, and Polymorphism.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-cubes\"></i> Procedural Programming vs. Object-Oriented Programming (OOP)</h2>\n            <p>In introductory programming, code is typically written in a <strong>procedural paradigm</strong>: a linear sequence of instructions, loops, and standalone functions manipulating global or loosely passed data structures. While effective for simple scripts, procedural code quickly deteriorates into an unmaintainable tangle of 'spaghetti code' as scientific simulations or web applications grow.</p>\n            \n            <p><strong>Object-Oriented Programming (OOP)</strong> solves this by organizing software design around <strong>objects</strong> rather than separate actions and data. An object bundles both <strong>state (data / attributes)</strong> and <strong>behavior (functions / methods)</strong> together into a unified, self-contained entity modeling a real-world concept.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-monument\"></i> The Four Pillars of Object-Oriented Programming</h2>\n            <p>Every professional object-oriented software system rests upon four foundational architectural pillars:</p>\n            \n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr>\n                            <th>Pillar</th>\n                            <th>Core Purpose</th>\n                            <th>Real-Life Analogy</th>\n                            <th>Primary Benefit</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>1. Encapsulation</strong></td>\n                            <td>Bundling data and methods together while restricting direct access to internal states.</td>\n                            <td>A medical capsule protecting medicine from contamination; a car's sealed engine box.</td>\n                            <td>Data security, prevents accidental corruption, enables validation guards.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>2. Abstraction</strong></td>\n                            <td>Hiding complex implementation details and exposing only a clean, simple public interface.</td>\n                            <td>Car steering wheel and accelerator pedal (you drive without knowing fuel injection physics).</td>\n                            <td>Reduces mental complexity, isolates callers from internal changes.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>3. Inheritance</strong></td>\n                            <td>Deriving specialized child classes from general parent classes.</td>\n                            <td>Biological heredity: children inherit eye color and traits from parents.</td>\n                            <td>Code reusability, eliminates duplication, creates clean hierarchical taxonomies.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>4. Polymorphism</strong></td>\n                            <td>Allowing different classes to respond to the same method call in their own specialized way.</td>\n                            <td>A computer's USB port accepting keyboard, mouse, or flash drive uniformly.</td>\n                            <td>Flexibility, decoupling, eliminates massive if/elif type checks.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microscope\"></i> Scientific & Physics Modeling with OOP</h2>\n            <p>In computational physics and engineering, OOP mirrors reality with extraordinary fidelity. A physical system is naturally composed of interacting entities: planets, charges, waves, lenses, and detectors. By modeling each as an object with mass, charge, coordinates, and force-calculation methods, large-scale multi-body simulations (like planetary orbits or galactic collisions) become modular, readable, and highly scalable.</p>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li><strong>Class vs Object:</strong> A <em>Class</em> is a user-defined blueprint or prototype (like an architectural schematic of a building). An <em>Object</em> is a concrete instance allocated in memory created from that blueprint (the actual physical building constructed on the ground).</li>\n                <li><strong>Multi-Paradigm Python:</strong> Python is not purely object-oriented like Java or Smalltalk. It is a <em>multi-paradigm language</em> that supports procedural, functional, and object-oriented programming simultaneously!</li>\n            </ul>\n        </div>\n        ",
      "code": "# High-level OOP Paradigm Representation\nclass PhysicalEntity:\n    def __init__(self, name, mass_kg):\n        self.name = name\n        self.mass_kg = mass_kg\n        \n    def describe(self):\n        return f\"{self.name} with mass {self.mass_kg} kg\"\n\nelectron = PhysicalEntity(\"Electron\", 9.109e-31)\nprint(electron.describe())",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which OOP pillar is defined as bundling data and methods into a single class while protecting internal state?",
          "options": [
            "Encapsulation",
            "Polymorphism",
            "Inheritance",
            "Compilation"
          ],
          "correctIndex": 0,
          "explanation": "Encapsulation bundles data attributes and methods together and controls access to internal states."
        },
        {
          "type": "multiple-choice",
          "question": "Which OOP pillar is demonstrated when internal object state is hidden and only accessible via validated methods?",
          "options": [
            "Encapsulation",
            "Polymorphism",
            "Inheritance",
            "Abstraction"
          ],
          "correctIndex": 0,
          "explanation": "Encapsulation bundles data and methods together while restricting direct unauthorized outside access to internal state."
        },
        {
          "type": "multiple-choice",
          "question": "What design benefit does Polymorphism provide in scientific simulation frameworks?",
          "options": [
            "It allows different classes to share identical method signatures, enabling uniform treatment of varied physical objects",
            "It prevents objects from using memory",
            "It forces all classes to inherit from C++ libraries",
            "It eliminates the need for constructors"
          ],
          "correctIndex": 0,
          "explanation": "Polymorphism lets a simulation call `.compute_force()` on planets, springs, and electrons alike without knowing their specific underlying class."
        }
      ]
    },
    "python-classes-objects": {
      "id": "python-classes-objects",
      "title": "Python Classes & Objects",
      "category": "cat-oop",
      "track": "track-oop",
      "readTime": "5 min read",
      "lead": "Defining classes with the class keyword, instantiating concrete objects in heap memory, class variables vs instance variables, and the object model.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-cube\"></i> Understanding Classes vs. Objects (Blueprint vs. House)</h2>\n            <p>To understand classes and objects, consider an architectural blueprint:</p>\n            <ul>\n                <li><strong>The Class (Blueprint):</strong> Contains the formal design, dimensions, and specifications of how a house should look and function. The blueprint itself has no physical walls, takes up no real land, and you cannot sleep inside it.</li>\n                <li><strong>The Object (Concrete House):</strong> When construction workers build a house using that blueprint, physical materials are allocated on a plot of land. You can build 100 identical or customized houses from a single blueprint! Each house has its own physical address in memory.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-memory\"></i> Class Variables vs. Instance Variables</h2>\n            <p>One of the most frequent points of confusion for students and exam aspirants is the critical distinction between <strong>Class Variables</strong> and <strong>Instance Variables</strong>:</p>\n\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr>\n                            <th>Feature</th>\n                            <th>Class Variable</th>\n                            <th>Instance Variable</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Where Defined</strong></td>\n                            <td>Directly inside the <code>class</code> body, outside any method.</td>\n                            <td>Inside methods (typically inside <code>__init__</code>) prefixed with <code>self.</code>.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Memory Location</strong></td>\n                            <td>Stored in the single shared Class namespace dictionary (<code>Class.__dict__</code>).</td>\n                            <td>Stored in each distinct object's individual dictionary (<code>instance.__dict__</code>).</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Sharing Behavior</strong></td>\n                            <td><strong>Shared across ALL instances</strong> of the class. Modifying it via the class alters it everywhere.</td>\n                            <td><strong>Unique to that specific instance</strong>. Changing it on object A does NOT affect object B.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Typical Use Case</strong></td>\n                            <td>Universal constants, default configurations, instance counters.</td>\n                            <td>Individual attributes: student name, resistor value, vehicle speed.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div class=\"callout-box warning\">\n                <i class=\"fa-solid fa-triangle-exclamation callout-icon\"></i>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Shadowing Trap</div>\n                    <div class=\"callout-text\">If you assign to a class variable through an instance (e.g. <code>r1.tolerance = \"\u00b11%\"</code>), Python does <strong>NOT</strong> change the class variable! Instead, it creates a new <em>instance variable</em> on <code>r1</code> that shadows the class variable. To update a class variable globally, always assign via the class: <code>Resistor.tolerance = \"\u00b11%\"</code>.</div>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li><code>type(obj)</code> returns the class of which an object is an instance.</li>\n                <li><code>isinstance(obj, ClassName)</code> checks whether an object belongs to a class or any of its subclasses (preferred over <code>type() == ClassName</code>).</li>\n                <li><code>id(obj)</code> returns the unique integer memory address of the object in CPython.</li>\n            </ul>\n        </div>\n        ",
      "code": "class Resistor:\n    # Class variable (shared across all instances)\n    tolerance = \"\u00b15%\"\n    \n    def __init__(self, resistance_ohms, power_rating_watts):\n        # Instance variables (unique to each object)\n        self.resistance = resistance_ohms\n        self.power = power_rating_watts\n\nr1 = Resistor(1000, 0.25)\nr2 = Resistor(4700, 0.5)\n\nprint(f\"R1: {r1.resistance}\u03a9, {r1.power}W (Tolerance: {r1.tolerance})\")\nprint(f\"R2: {r2.resistance}\u03a9, {r2.power}W (Tolerance: {r2.tolerance})\")\nprint(\"Are classes identical type?\", type(r1) is type(r2))",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Where are instance-specific attributes typically initialized in a Python class?",
          "options": [
            "Inside the __init__() constructor method",
            "Outside the class definition",
            "Inside the class docstring",
            "Inside the __del__() destructor"
          ],
          "correctIndex": 0,
          "explanation": "The __init__() initializer method is called during object instantiation to bind instance attributes to self."
        },
        {
          "type": "multiple-choice",
          "question": "What is the relationship between a 'Class' and an 'Object' in Python?",
          "options": [
            "A Class is the blueprint/template; an Object is a concrete instance in memory created from that blueprint",
            "A Class is a variable; an Object is a function",
            "They are exact synonyms in Python",
            "Objects define classes, not the other way around"
          ],
          "correctIndex": 0,
          "explanation": "The class defines the attributes and behaviors, while an object is a distinct instance populated with real data in memory."
        },
        {
          "type": "multiple-choice",
          "question": "What is the difference between a class variable and an instance variable?",
          "options": [
            "Class variables are shared across all instances; instance variables are unique to each individual object",
            "Class variables cannot be modified; instance variables can",
            "Instance variables must be strings; class variables can be numbers",
            "There is no difference in CPython"
          ],
          "correctIndex": 0,
          "explanation": "Class variables exist on the class object itself and are shared, whereas instance variables are bound to `self`."
        }
      ]
    },
    "python-init-self": {
      "id": "python-init-self",
      "title": "The __init__() Method & self Parameter",
      "category": "cat-oop",
      "track": "track-oop",
      "readTime": "5 min read",
      "lead": "Demystifying Python's instance constructor, the bound method dispatch mechanism, and why self is explicitly passed in Python.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-wand-magic-sparkles\"></i> The Role of __init__() (Constructor vs. Initializer)</h2>\n            <p>In languages like C++ or Java, constructors both allocate memory and initialize values. In Python, object creation is a two-step process:</p>\n            <ol>\n                <li><strong><code>__new__(cls, ...)</code>:</strong> The true constructor method that allocates the raw object in heap memory and returns the new instance.</li>\n                <li><strong><code>__init__(self, ...)</code>:</strong> The <strong>initializer</strong> method. It receives the freshly allocated instance as <code>self</code> and attaches attributes, sets initial state, and performs validation.</li>\n            </ol>\n            <p>In 99% of application code, developers only need to define <code>__init__()</code>.</p>\n\n            <div class=\"callout-box warning\">\n                <i class=\"fa-solid fa-triangle-exclamation callout-icon\"></i>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Important Rule: __init__() Must Always Return None</div>\n                    <div class=\"callout-text\">The <code>__init__()</code> method must <strong>never return any value</strong> (or return <code>None</code> explicitly). Attempting to return a string, integer, or custom object from <code>__init__</code> raises an immediate <code>TypeError: __init__() should return None</code>.</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-hand-point-right\"></i> Why is self Explicit in Python?</h2>\n            <p>In languages like Java, C++, or JavaScript, the current object reference (<code>this</code>) is passed invisibly behind the scenes. In Python, the first parameter of any instance method must be explicitly written as <code>self</code>.</p>\n            \n            <p>This design choice directly reflects the core Zen of Python philosophy: <strong>'Explicit is better than implicit.'</strong></p>\n            \n            <p>When you execute an instance method call:</p>\n            <pre><code>wg.cross_section_area()</code></pre>\n            <p>Python internally transforms it into a class-level function call passing the instance as the first argument:</p>\n            <pre><code>Waveguide.cross_section_area(wg)</code></pre>\n            <p>Notice that <code>self</code> is not a reserved Python keyword! You could technically name it <code>this</code>, <code>me</code>, or <code>x</code>, but PEP 8 universally establishes <code>self</code> as the mandatory community convention.</p>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li><strong>Bound Method vs Unbound Function:</strong> When accessed via an instance (<code>wg.cross_section_area</code>), Python creates a <em>bound method</em> with <code>wg</code> pre-attached to <code>self</code>. When accessed via the class (<code>Waveguide.cross_section_area</code>), it is a plain function requiring an explicit object argument.</li>\n                <li><strong>Default Arguments Hazard:</strong> Never use mutable objects (like <code>def __init__(self, data=[])</code>) as default parameter values in <code>__init__</code>, as that single list object will be shared across all instances! Use <code>data=None</code> and initialize inside.</li>\n            </ul>\n        </div>\n        ",
      "code": "class Waveguide:\n    def __init__(self, width_mm, height_mm, mode=\"TE10\"):\n        self.a = width_mm\n        self.b = height_mm\n        self.mode = mode\n        \n    def cross_section_area(self):\n        # Accessing instance state via self\n        return self.a * self.b\n\nwg = Waveguide(22.86, 10.16)\nprint(f\"Mode: {wg.mode}\")\nprint(f\"Cross Section Area: {wg.cross_section_area():.2f} mm\u00b2\")",
      "quiz": [
        {
          "type": "fill-in",
          "question": "What standard identifier represents the instance itself as the first parameter in Python methods?",
          "codeTemplate": "<span>Parameter: </span><input type='text' class='quiz-fill-input' placeholder='self'>",
          "answer": "self",
          "explanation": "By convention, 'self' is the name given to the first parameter of instance methods."
        },
        {
          "type": "multiple-choice",
          "question": "What does the `self` parameter represent in Python class methods?",
          "options": [
            "The current instance of the class on which the method was called",
            "A global Python keyword referencing the operating system",
            "The parent superclass",
            "The class definition itself"
          ],
          "correctIndex": 0,
          "explanation": "When you invoke `obj.method()`, Python passes `obj` as the first argument, conventionally named `self`."
        },
        {
          "type": "multiple-choice",
          "question": "What value must the `__init__()` constructor method return in Python?",
          "options": [
            "None (or have no return statement)",
            "self",
            "True",
            "A new dictionary"
          ],
          "correctIndex": 0,
          "explanation": "`__init__()` must never return a non-None value; returning anything other than None raises a TypeError."
        }
      ]
    },
    "python-class-properties": {
      "id": "python-class-properties",
      "title": "Class Properties & @property Decorators",
      "category": "cat-oop",
      "track": "track-oop",
      "readTime": "5 min read",
      "lead": "Clean Pythonic getters, setters, and deleters using the @property decorator without breaking backward-compatible attribute access syntax.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-sliders\"></i> The Evolution: From Java Getters/Setters to Pythonic @property</h2>\n            <p>In traditional object-oriented languages like Java, developers are taught to declare all variables private and write boilerplate getter and setter methods:</p>\n            <pre><code># Verbose Java-style Getter and Setter (Unpythonic)\nclass Person:\n    def get_age(self):\n        return self._age\n    def set_age(self, val):\n        if val < 0: raise ValueError(\"Age cannot be negative\")\n        self._age = val</code></pre>\n            \n            <p>In Python, writing <code>person.get_age()</code> and <code>person.set_age(25)</code> is considered verbose and unpythonic. Python introduces the <strong><code>@property</code> decorator</strong>, which lets you write methods that can be accessed with the <strong>clean, natural syntax of simple attributes (<code>person.age = 25</code>)</strong> while secretly executing validation logic behind the scenes!</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-code-branch\"></i> The @property Triad: Getter, Setter, and Deleter</h2>\n            <p>The property mechanism provides three distinct decorators:</p>\n            <ul>\n                <li><strong>Getter (<code>@property</code>):</strong> Converts a method into a read-only attribute getter. When you access <code>obj.temperature</code>, the getter function executes and returns the computed or stored value.</li>\n                <li><strong>Setter (<code>@name.setter</code>):</strong> Defines a validation and assignment guard. When you do <code>obj.temperature = 100</code>, the setter executes with <code>100</code> as the argument.</li>\n                <li><strong>Deleter (<code>@name.deleter</code>):</strong> Executes cleanup logic when <code>del obj.temperature</code> is invoked.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Read-Only Computed Properties</h2>\n            <p>One of the most elegant applications of <code>@property</code> is computing values dynamically without storing redundant, out-of-sync state. For example, in a <code>Circle</code> class with <code>radius</code>, the <code>area</code> should never be a stored variable (which could get desynchronized if radius changes); it should be a <strong>computed property</strong> calculated dynamically on the fly:</p>\n            <pre><code>import math\n\nclass Circle:\n    def __init__(self, radius):\n        self.radius = radius\n        \n    @property\n    def area(self):\n        # Dynamically calculated on demand!\n        return math.pi * (self.radius ** 2)\n\nc = Circle(5)\nprint(c.area)  # 78.5398...\nc.radius = 10\nprint(c.area)  # 314.1592... (Instantly updated!)</code></pre>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li><strong>Backward Compatibility:</strong> In Python, you can start with a plain public variable (<code>self.x = 10</code>). If you later need to add validation, you can convert it to a <code>@property</code> without changing the syntax for any external users of your class!</li>\n                <li>Attempting to assign to a property that lacks a <code>@name.setter</code> raises an immediate <code>AttributeError: can't set attribute</code>.</li>\n            </ul>\n        </div>\n        ",
      "code": "class Thermometer:\n    def __init__(self, kelvin=300.0):\n        self._kelvin = kelvin  # Protected backing variable\n        \n    @property\n    def celsius(self):\n        \"\"\"Getter for temperature in Celsius.\"\"\"\n        return self._kelvin - 273.15\n        \n    @celsius.setter\n    def celsius(self, value):\n        \"\"\"Setter with physics validation: Temperature cannot be below Absolute Zero!\"\"\"\n        if value < -273.15:\n            raise ValueError(\"Physical impossibility: Temperature below Absolute Zero (0 K)!\")\n        self._kelvin = value + 273.15\n\nt = Thermometer(373.15)\nprint(f\"Boiling Point: {t.celsius:.2f} \u00b0C\")\nt.celsius = 25.0\nprint(f\"Room Temperature in Kelvin: {t._kelvin:.2f} K\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which built-in decorator transforms a class method into a read-only attribute getter?",
          "options": [
            "@property",
            "@getter",
            "@attribute",
            "@field"
          ],
          "correctIndex": 0,
          "explanation": "The @property decorator converts an instance method into a readable property."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary advantage of using the `@property` decorator instead of a getter method like `get_temperature()`?",
          "options": [
            "It allows accessing method logic using clean attribute syntax (`obj.temperature`) while maintaining encapsulation",
            "It makes the method execute 10 times faster",
            "It turns the method into an asynchronous coroutine",
            "It automatically saves the value to disk"
          ],
          "correctIndex": 0,
          "explanation": "`@property` enables pythonic attribute access syntax while internally routing through getter/setter validation logic."
        },
        {
          "type": "multiple-choice",
          "question": "How do you define a setter for a property decorated with `@property def radius(self):`?",
          "options": [
            "@radius.setter",
            "@setter(radius)",
            "@property.setter",
            "def set_radius(self, val):"
          ],
          "correctIndex": 0,
          "explanation": "Python property setters use the syntax `@<property_name>.setter`."
        }
      ]
    },
    "python-class-static-methods": {
      "id": "python-class-static-methods",
      "title": "Class Methods (@classmethod) vs Static Methods",
      "category": "cat-oop",
      "track": "track-oop",
      "readTime": "5 min read",
      "lead": "Mastering the three method modalities in Python: Instance methods (self), Class methods (@classmethod, cls), and Static methods (@staticmethod).",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-code-compare\"></i> The Three Types of Methods in Python</h2>\n            <p>Every function defined inside a Python class falls into one of three distinct categories:</p>\n\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr>\n                            <th>Method Type</th>\n                            <th>Decorator</th>\n                            <th>First Argument</th>\n                            <th>Access Capabilities</th>\n                            <th>When to Use</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Instance Method</strong></td>\n                            <td>None (Default)</td>\n                            <td><code>self</code> (Instance)</td>\n                            <td>Can read and modify both instance state (<code>self</code>) and class state (<code>self.__class__</code>).</td>\n                            <td>Standard methods operating on individual object data.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Class Method</strong></td>\n                            <td><code>@classmethod</code></td>\n                            <td><code>cls</code> (Class object)</td>\n                            <td>Can read and modify class-level state. Cannot access individual instance state directly.</td>\n                            <td><strong>Alternative constructors</strong> (e.g. from CSV, JSON, strings) and factory methods.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Static Method</strong></td>\n                            <td><code>@staticmethod</code></td>\n                            <td>None (Plain parameters)</td>\n                            <td>Cannot access or modify either instance state (<code>self</code>) or class state (<code>cls</code>).</td>\n                            <td>Self-contained utility/helper functions kept inside the class namespace for logical cohesion.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-industry\"></i> Class Methods as Alternative Constructors</h2>\n            <p>A premier use case for <code>@classmethod</code> is creating alternative constructors. For example, in a <code>Date</code> class whose default <code>__init__</code> accepts day, month, year integers, you can add a class method that parses an ISO string:</p>\n            <pre><code>class Date:\n    def __init__(self, day, month, year):\n        self.day, self.month, self.year = day, month, year\n        \n    @classmethod\n    def from_string(cls, date_str):\n        # Alternative constructor parsing \"YYYY-MM-DD\"\n        year, month, day = map(int, date_str.split('-'))\n        return cls(day, month, year) # Returns a new Date instance!\n\nd1 = Date(15, 9, 2026)                    # Standard init\nd2 = Date.from_string(\"2026-09-15\")        # Class method constructor!</code></pre>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li>Both <code>@classmethod</code> and <code>@staticmethod</code> can be invoked either directly on the class (<code>Class.method()</code>) or through an instance (<code>obj.method()</code>). Calling via the class is the preferred Pythonic idiom.</li>\n                <li>Inheritance benefit of <code>@classmethod</code>: Because <code>cls</code> is passed dynamically, calling an inherited class method on a subclass automatically instantiates the subclass, not the parent!</li>\n            </ul>\n        </div>\n        ",
      "code": "class Laser:\n    speed_of_light = 3.0e8  # m/s\n    \n    def __init__(self, wavelength_nm):\n        self.wavelength = wavelength_nm * 1e-9  # meters\n        \n    @classmethod\n    def from_frequency(cls, frequency_hz):\n        \"\"\"Alternative Constructor: create Laser directly from frequency!\"\"\"\n        wavelength_m = cls.speed_of_light / frequency_hz\n        return cls(wavelength_m * 1e9)\n        \n    @staticmethod\n    def is_visible(wavelength_nm):\n        \"\"\"Utility function checking if wavelength is in human visible spectrum.\"\"\"\n        return 380 <= wavelength_nm <= 750\n\nred_laser = Laser.from_frequency(4.6e14)\nprint(f\"Red Laser Wavelength: {red_laser.wavelength * 1e9:.1f} nm\")\nprint(\"Is 650nm visible?\", Laser.is_visible(650))",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the standard name of the first parameter passed to a @classmethod in Python?",
          "options": [
            "cls",
            "self",
            "klass",
            "type"
          ],
          "correctIndex": 0,
          "explanation": "By convention, @classmethod methods take 'cls' as their first parameter, representing the class object itself."
        },
        {
          "type": "multiple-choice",
          "question": "What is the first parameter automatically passed to a method decorated with `@classmethod`?",
          "options": [
            "cls (the class object itself)",
            "self (the instance)",
            "args (a tuple)",
            "None"
          ],
          "correctIndex": 0,
          "explanation": "Class methods receive the class object as their first parameter (`cls`), enabling alternative constructors and class state modification."
        },
        {
          "type": "multiple-choice",
          "question": "When should you prefer `@staticmethod` over a standard instance method?",
          "options": [
            "When the utility function does not require access to either instance state (`self`) or class state (`cls`)",
            "When you want the method to run only once per program",
            "When the method takes no arguments",
            "When you need to override built-in operators"
          ],
          "correctIndex": 0,
          "explanation": "Static methods are plain functions housed inside a class namespace purely for organizational cohesion."
        }
      ]
    },
    "python-magic-methods": {
      "id": "python-magic-methods",
      "title": "Python Magic & Dunder Methods",
      "category": "cat-oop",
      "track": "track-oop",
      "readTime": "6 min read",
      "lead": "Unlocking Python's operator overloading and internal protocols using Double-Underscore (Dunder) magic methods.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-hat-wizard\"></i> What are Magic / Dunder Methods?</h2>\n            <p>In Python, methods surrounded by double underscores on both sides (such as <code>__init__</code>, <code>__str__</code>, <code>__len__</code>) are formally called <strong>Special Methods</strong>, or colloquially <strong>Dunder Methods</strong> (short for <em>Double UNDERscore</em>).</p>\n            \n            <p>Dunder methods are not typically called directly in your code (you rarely write <code>x.__add__(y)</code>). Instead, <strong>Python invokes them automatically under the hood</strong> whenever standard operations, operators, or built-in functions are executed on your objects.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Essential Magic Method Categories</h2>\n            \n            <h3>1. String Representation: __str__ vs. __repr__</h3>\n            <ul>\n                <li><strong><code>__str__(self)</code>:</strong> Called by <code>print(obj)</code> and <code>str(obj)</code>. Meant to return an informal, clean, human-readable description for end users.</li>\n                <li><strong><code>__repr__(self)</code>:</strong> Called by <code>repr(obj)</code> and in the interactive Python terminal. Meant to return an unambiguous, technical representation (ideally valid Python code that could recreate the object) for developers and debugging logs.</li>\n            </ul>\n\n            <h3>2. Mathematical Operator Overloading</h3>\n            <p>When you evaluate mathematical expressions between your custom class instances, Python translates them to dunder calls:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr>\n                            <th>Operator</th>\n                            <th>Dunder Method Invoked</th>\n                            <th>Scientific / Physics Meaning</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><code>a + b</code></td>\n                            <td><code>a.__add__(b)</code></td>\n                            <td>Vector addition, polynomial sum, tensor accumulation</td>\n                        </tr>\n                        <tr>\n                            <td><code>a - b</code></td>\n                            <td><code>a.__sub__(b)</code></td>\n                            <td>Vector difference, coordinate displacement</td>\n                        </tr>\n                        <tr>\n                            <td><code>a * b</code></td>\n                            <td><code>a.__mul__(b)</code></td>\n                            <td>Dot product, scalar multiplication, matrix scaling</td>\n                        </tr>\n                        <tr>\n                            <td><code>a == b</code></td>\n                            <td><code>a.__eq__(b)</code></td>\n                            <td>Equality testing across physical quantities</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li>If <code>__str__</code> is not defined on a class, Python automatically falls back to <code>__repr__</code>. But if <code>__repr__</code> is missing, Python uses the default object memory address.</li>\n                <li>Implementing <code>__len__</code> and <code>__getitem__</code> automatically gives your class sequence behavior (indexing, slicing, and <code>for</code> loop iteration)!</li>\n            </ul>\n        </div>\n        ",
      "code": "# Physics Vector 2D Class with Operator Overloading\nclass Vector2D:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n        \n    def __add__(self, other):\n        # Overload v1 + v2\n        return Vector2D(self.x + other.x, self.y + other.y)\n        \n    def __str__(self):\n        return f\"({self.x}i + {self.y}j)\"\n        \n    def __repr__(self):\n        return f\"Vector2D(x={self.x}, y={self.y})\"\n\nv1 = Vector2D(3, 4)\nv2 = Vector2D(1, -2)\nv_result = v1 + v2\n\nprint(\"Vector Addition Result:\", v_result)\nprint(\"Technical Representation:\", repr(v_result))",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which magic method must be implemented to allow an object to be evaluated by the built-in len() function?",
          "options": [
            "__len__()",
            "__size__()",
            "__count__()",
            "__length__()"
          ],
          "correctIndex": 0,
          "explanation": "Implementing __len__(self) defines the behavior for the built-in len() function on instances."
        },
        {
          "type": "multiple-choice",
          "question": "Which magic method is invoked when you evaluate the addition operator `a + b` between two custom objects?",
          "options": [
            "__add__(self, other)",
            "__plus__(self, other)",
            "__sum__(self, other)",
            "__concat__(self, other)"
          ],
          "correctIndex": 0,
          "explanation": "`a + b` translates directly to `a.__add__(b)` under Python's operator overloading protocol."
        },
        {
          "type": "multiple-choice",
          "question": "What is the difference between `__str__()` and `__repr__()`?",
          "options": [
            "`__str__` is intended for readable user presentation; `__repr__` is intended for unambiguous debugging representation",
            "`__str__` is for integers; `__repr__` is for floats",
            "`__str__` cannot contain newlines; `__repr__` can",
            "There is no difference"
          ],
          "correctIndex": 0,
          "explanation": "`__str__` provides human-friendly text for end users (`print(obj)`), whereas `__repr__` aims to show exact code representation for developers."
        }
      ]
    },
    "python-inheritance": {
      "id": "python-inheritance",
      "title": "Python Inheritance & super() Mechanics",
      "category": "cat-oop",
      "track": "track-oop",
      "readTime": "6 min read",
      "lead": "Deriving specialized subclasses, cooperative multiple inheritance, Method Resolution Order (MRO), and the C3 Linearization algorithm.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-sitemap\"></i> Understanding Inheritance (The 'Is-A' Relationship)</h2>\n            <p><strong>Inheritance</strong> allows a new class (the <em>child / derived / subclass</em>) to inherit attributes and methods from an existing class (the <em>parent / base / superclass</em>). This models real-world taxonomic relationships:</p>\n            <ul>\n                <li>A <code>Fermion</code> <em>is a</em> <code>Particle</code>.</li>\n                <li>A <code>SavingsAccount</code> <em>is a</em> <code>BankAccount</code>.</li>\n                <li>A <code>Car</code> <em>is a</em> <code>Vehicle</code>.</li>\n            </ul>\n            <p>Inheritance prevents code duplication, centralizes bug fixes in the base class, and establishes clean hierarchical domain models.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-arrows-turn-to-dots\"></i> Types of Inheritance Supported in Python</h2>\n            <p>Python is one of the few mainstream languages that natively supports all major inheritance topologies:</p>\n            <ul>\n                <li><strong>Single Inheritance:</strong> A child inherits from one parent (e.g. <code>Fermion(Particle)</code>).</li>\n                <li><strong>Multiple Inheritance:</strong> A child inherits directly from multiple parents (e.g. <code>AmphibiousVehicle(Car, Boat)</code>).</li>\n                <li><strong>Multilevel Inheritance:</strong> A chain of derivation (e.g. <code>Electron</code> &rarr; <code>Lepton</code> &rarr; <code>Fermion</code> &rarr; <code>Particle</code>).</li>\n                <li><strong>Hierarchical Inheritance:</strong> Multiple distinct child classes inherit from a single common parent.</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-gem\"></i> The Diamond Problem & C3 Linearization (MRO)</h2>\n            <p>When multiple inheritance hierarchies form a diamond shape (Class D inherits from B and C, both of which inherit from A), which version of an overridden method should D call? This is the classic <strong>Diamond Problem</strong>.</p>\n            \n            <p>Python cleanly resolves this using the <strong>C3 Linearization Algorithm</strong>, which computes a deterministic, monotonic order known as the <strong>Method Resolution Order (MRO)</strong>. You can inspect any class's MRO at any time:</p>\n            <pre><code># Inspecting the exact lookup sequence:\nprint(Fermion.__mro__)\n# Or using the mro() method:\nprint([cls.__name__ for cls in Fermion.mro()])</code></pre>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-arrow-up-right-from-square\"></i> The Power of super()</h2>\n            <p>Rather than hardcoding parent class names like <code>Particle.__init__(self, name)</code>, Python provides the built-in <code>super()</code> function. Using <code>super().__init__(name, mass)</code> delegates method invocation dynamically along the MRO chain, enabling true <em>cooperative multiple inheritance</em> without calling the same ancestor constructor twice.</p>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li><strong>super() in Python 3:</strong> In Python 3, you simply write <code>super().method()</code> (zero arguments needed). In legacy Python 2, one had to write <code>super(CurrentClass, self).method()</code>.</li>\n                <li><strong>Composition over Inheritance:</strong> While inheritance models \"is-a\", software engineering often recommends <em>Composition</em> (\"has-a\" relationships, like a Car <em>having</em> an Engine) to reduce tight coupling.</li>\n            </ul>\n        </div>\n        ",
      "code": "# Inheritance Hierarchy: Quantum Particles\nclass Particle:\n    def __init__(self, name, mass):\n        self.name = name\n        self.mass = mass\n        \n    def describe(self):\n        return f\"Particle: {self.name} (Mass: {self.mass})\"\n\nclass Fermion(Particle):\n    def __init__(self, name, mass, spin=0.5):\n        # Forwarding to superclass constructor\n        super().__init__(name, mass)\n        self.spin = spin\n        \n    def describe(self):\n        return f\"{super().describe()} | Spin: {self.spin} (Follows Fermi-Dirac Statistics)\"\n\nelectron = Fermion(\"Electron\", \"9.1e-31 kg\", spin=0.5)\nprint(electron.describe())\nprint(\"Method Resolution Order (MRO):\", [c.__name__ for c in Fermion.__mro__])",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What built-in function is used to invoke a method implementation from the parent/superclass?",
          "options": [
            "super()",
            "parent()",
            "base()",
            "inherit()"
          ],
          "correctIndex": 0,
          "explanation": "super() delegates method calls to a parent or sibling class according to the class MRO."
        },
        {
          "type": "multiple-choice",
          "question": "How do you invoke the constructor of a parent superclass from within a subclass in Python 3?",
          "options": [
            "super().__init__(*args)",
            "Parent.__init__(self, *args)",
            "base.init(*args)",
            "super.init(*args)"
          ],
          "correctIndex": 0,
          "explanation": "`super().__init__()` dynamically resolves and invokes the parent constructor according to the Method Resolution Order (MRO)."
        },
        {
          "type": "multiple-choice",
          "question": "What algorithm does Python use to determine the Method Resolution Order (MRO) in multiple inheritance?",
          "options": [
            "C3 Linearization algorithm",
            "Depth-First Search (DFS)",
            "Breadth-First Search (BFS)",
            "Dijkstra's Algorithm"
          ],
          "correctIndex": 0,
          "explanation": "CPython uses the C3 Linearization algorithm to ensure a consistent, monotonic resolution order without diamond inheritance ambiguity."
        }
      ]
    },
    "python-polymorphism": {
      "id": "python-polymorphism",
      "title": "Python Polymorphism & Duck Typing",
      "category": "cat-oop",
      "track": "track-oop",
      "readTime": "4 min read",
      "lead": "Mastering the true power of Polymorphism in Python: from built-in function polymorphism and method overriding to dynamic Duck Typing ('If it walks like a duck and quacks like a duck, it is a duck').",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-shapes\"></i> What is Polymorphism? (Etymology & Core Concept)</h2>\n            <p>The word <strong>Polymorphism</strong> is derived from two classical Greek roots: <strong>poly</strong> (meaning <em>many</em>) and <strong>morph</strong> (meaning <em>form</em>). In computer science and software architecture, polymorphism is the ability of different objects, functions, or operators to respond to the <strong>same interface or method call in different, specialized ways</strong>.</p>\n            \n            <p>Without polymorphism, software developers are forced to write fragile, hard-to-maintain cascades of <code>if-elif-else</code> conditional statements to check the specific type of every object before invoking actions. With polymorphism, you write code that talks to a uniform interface, and each object automatically executes its own internal behavior.</p>\n            \n            <div class=\"callout-box info\">\n                <i class=\"fa-solid fa-circle-info callout-icon\"></i>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Open-Closed Principle (SOLID Architecture)</div>\n                    <div class=\"callout-text\">Polymorphism is the backbone of the <em>Open-Closed Principle</em>: software entities should be <strong>open for extension, but closed for modification</strong>. When you need to add a new data type or device to your system, you create a new class implementing the shared method name without touching or breaking any pre-existing code!</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-credit-card\"></i> Real-Life Relatable Example: E-Commerce Payment Gateway</h2>\n            <p>To truly perceive how polymorphism operates in production software, consider an <strong>E-Commerce Checkout System</strong>. When a customer finalizes their shopping cart, they are presented with multiple payment choices:</p>\n            \n            <div class=\"real-world-card\">\n                <div class=\"real-world-header\">\n                    <i class=\"fa-solid fa-store\"></i> Payment Gateway Analogy: One Action, Diverse Behaviors\n                </div>\n                <ul>\n                    <li><strong>Credit Card Payment:</strong> Validates the 16-digit card number, checks CVV and expiry date, and communicates with the Visa/Mastercard processing network.</li>\n                    <li><strong>UPI Payment (Google Pay / PhonePe):</strong> Generates a dynamic QR code or UPI Intent and routes through the NPCI banking switch.</li>\n                    <li><strong>NetBanking Payment:</strong> Encrypts banking session tokens and redirects to the respective bank's two-factor authentication portal.</li>\n                    <li><strong>Digital Wallet (Paytm / Amazon Pay):</strong> Checks available pre-funded wallet balance and debits the amount instantly.</li>\n                </ul>\n                <p style=\"margin-top: 0.75rem; margin-bottom: 0;\"><strong>The Polymorphic Advantage:</strong> The checkout controller does NOT need separate complex code for each option. It simply receives an object and calls <code>payment.process_payment(amount)</code>! The method name remains identical, but the internal action changes dynamically depending on the payment object provided.</p>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-layer-group\"></i> The Four Primary Forms of Polymorphism in Python</h2>\n            <p>In Python, polymorphism manifests across four distinct programming mechanisms:</p>\n            \n            <h3>1. Polymorphism with Built-in Functions</h3>\n            <p>Python's built-in functions behave polymorphically across disparate data structures without manual type casting. For instance, the universal <code>len()</code> function inspects lengths seamlessly:</p>\n            <pre><code># len() handles diverse types polymorphically:\nprint(len(\"Python\"))             # String: 6 characters\nprint(len([10, 20, 30, 40]))     # List: 4 elements\nprint(len({\"name\": \"Ravi\", \"dept\": \"Physics\"}))  # Dict: 2 key-value pairs</code></pre>\n            <p>Under the hood, <code>len(x)</code> dynamically delegates to <code>x.__len__()</code> implemented by each respective data structure.</p>\n\n            <h3>2. Polymorphism with Class Methods (Independent Classes)</h3>\n            <p>Different classes can define methods with the exact same name and parameter signatures without any shared parent inheritance. A single external function or loop can iterate over diverse objects and invoke that common method uniformly.</p>\n\n            <h3>3. Polymorphism with Inheritance (Method Overriding)</h3>\n            <p>When a specialized child class provides its own customized implementation of a method that is already defined in its parent superclass, it <strong>overrides</strong> the parent's behavior. When called on an instance of the child class, Python's dynamic dispatch executes the child's overridden version.</p>\n\n            <h3>4. Polymorphism with Operators (Operator Overloading)</h3>\n            <p>The standard plus operator (<code>+</code>) performs completely different mathematical and computational operations based on the operands:</p>\n            <ul>\n                <li>Numeric Addition: <code>10 + 25 = 35</code> (Integer arithmetic)</li>\n                <li>String Concatenation: <code>\"Super\" + \"conductor\" = \"Superconductor\"</code> (Text joining)</li>\n                <li>List Merging: <code>[1, 2] + [3, 4] = [1, 2, 3, 4]</code> (Sequence concatenation)</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-feather-pointed\"></i> Deep Dive: Duck Typing (\"The Pythonic Adage\")</h2>\n            <p>In statically typed languages such as Java or C++, for a function to accept different classes polymorphically, both classes must explicitly implement a formal <code>interface</code> or inherit from an <code>abstract class</code> (e.g. <code>public void process(PaymentGateway p)</code>).</p>\n            \n            <p>Python takes an entirely different, radically dynamic approach known as <strong>Duck Typing</strong>, originating from the classic aphorism by poet James Whitcomb Riley:</p>\n            \n            <div class=\"callout-box academic\">\n                <i class=\"fa-solid fa-quote-left callout-icon\"></i>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Principle of Duck Typing</div>\n                    <div class=\"callout-text\"><em>\"When I see a bird that walks like a duck, swims like a duck, and quacks like a duck, I call that bird a duck.\"</em><br><br>In Python, an object's suitability is determined <strong>not by its explicit inheritance hierarchy or class type</strong>, but strictly by the <strong>presence of the required methods and attributes</strong> at runtime.</div>\n                </div>\n            </div>\n\n            <p>If a function needs to stream data, it doesn't care whether the object is a <code>File</code>, a <code>NetworkSocket</code>, or an <code>AudioBuffer</code>. As long as the object possesses a <code>.read()</code> method, Python executes it happily!</p>\n            \n            <p>This fosters Python's guiding design philosophy: <strong>EAFP</strong> (<em>\"Easier to Ask for Forgiveness than Permission\"</em>) \u2014 instead of checking <code>isinstance()</code> upfront, invoke the method directly inside a <code>try...except AttributeError</code> block.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-atom\"></i> Real-World Scientific Application: Laboratory Signal & Particle Emitters</h2>\n            <p>In experimental physics and laboratory data acquisition, different physical instruments emit distinct signal streams into a common computational bus. Notice how our live demonstration below models a <code>WaveGenerator</code> and a <code>ParticleGun</code>: both provide an <code>.emit()</code> method. The central <code>laboratory_emitter()</code> function accepts either device seamlessly without knowing or caring about their underlying class details!</p>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li><strong>Method Overriding vs Method Overloading:</strong> Python fully supports <em>Method Overriding</em> (child subclass redefines parent method). However, Python does <strong>NOT</strong> support traditional compile-time <em>Method Overloading</em> (multiple methods with identical names but different parameter types in the same class). In Python, defining a second method with the same name simply overwrites the first! Python handles varying parameter counts gracefully via default arguments or <code>*args</code> / <code>**kwargs</code>.</li>\n                <li><strong>Dynamic Dispatch:</strong> Python resolves method calls at runtime using the object's class namespace and the Method Resolution Order (MRO), not at compile time.</li>\n                <li><strong>Duck Typing Benefit:</strong> Eliminates boilerplate abstract interfaces, dramatically speeds up prototyping, and makes testing easy with Mock objects.</li>\n            </ul>\n        </div>\n        ",
      "code": "# Dynamic Polymorphism Showcase\nclass WaveGenerator:\n    def emit(self):\n        return \"Emitting sinusoidal continuous wave.\"\n\nclass ParticleGun:\n    def emit(self):\n        return \"Firing discrete stream of electrons.\"\n\ndef laboratory_emitter(device):\n    # Device only needs an .emit() method (Duck Typing)\n    print(f\"Device Output: {device.emit()}\")\n\nlaboratory_emitter(WaveGenerator())\nlaboratory_emitter(ParticleGun())",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What programming philosophy in Python evaluates object compatibility based on present methods and properties rather than explicit type inheritance?",
          "options": [
            "Duck Typing",
            "Static Typing",
            "Strong Binding",
            "Strict Inheritance"
          ],
          "correctIndex": 0,
          "explanation": "Duck typing is Python's dynamic typing philosophy where an object's suitability is determined by the presence of certain methods and properties."
        },
        {
          "type": "multiple-choice",
          "question": "What Python design philosophy is described by: 'If it walks like a duck and quacks like a duck, it is a duck'?",
          "options": [
            "Duck Typing",
            "Strict Typing",
            "Encapsulated Typing",
            "Static Typing"
          ],
          "correctIndex": 0,
          "explanation": "Duck typing means Python cares only about whether an object has the required methods/attributes, not its explicit inheritance hierarchy."
        },
        {
          "type": "multiple-choice",
          "question": "Which module in the Python standard library allows defining formal Abstract Base Classes (ABCs) and `@abstractmethod` decorators?",
          "options": [
            "abc",
            "abstract",
            "types",
            "interfaces"
          ],
          "correctIndex": 0,
          "explanation": "The `abc` module provides the `ABC` base class and `@abstractmethod` decorator to enforce interface implementation."
        }
      ]
    },
    "python-encapsulation": {
      "id": "python-encapsulation",
      "title": "Encapsulation & Private Name Mangling",
      "category": "cat-oop",
      "track": "track-oop",
      "readTime": "5 min read",
      "lead": "Protecting internal data integrity: public attributes, protected single-underscore convention (_), private double-underscore name mangling (__), and modern Pythonic @property getters and setters.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-shield-halved\"></i> What is Encapsulation? (The Capsule Analogy)</h2>\n            <p><strong>Encapsulation</strong> is one of the four foundational pillars of Object-Oriented Programming (OOP). It refers to the practice of <strong>bundling data attributes and the methods that manipulate that data into a single cohesive unit (a class)</strong>, while simultaneously <strong>restricting direct unauthorized outside access</strong> to the internal states of the object.</p>\n\n            <div class=\"real-world-card\">\n                <div class=\"real-world-header\">\n                    <i class=\"fa-solid fa-capsules\"></i> The Medical Capsule & Smart TV Analogies\n                </div>\n                <ul>\n                    <li><strong>The Medical Capsule:</strong> Just as a medical capsule seals active medicinal compounds within a soluble gelatin shell to protect them from external air and contamination, a class seals critical state variables away from accidental external alteration.</li>\n                    <li><strong>The Smart TV Remote:</strong> When you operate a television, you interact exclusively with public buttons (Power, Volume, Channel). You do not pry open the TV casing and manipulate high-voltage internal circuit capacitors directly. Direct capacitor tampering is dangerous and can destroy the TV. The TV exposes a clean public interface while encapsulating its dangerous internal wiring!</li>\n                </ul>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-building-columns\"></i> Why Do We Need Encapsulation? (Preventing Data Corruption)</h2>\n            <p>Consider a <strong>Bank Account System</strong> without encapsulation:</p>\n            <pre><code># DANGEROUS: Unprotected Public State\nclass VulnerableAccount:\n    def __init__(self, balance):\n        self.balance = balance\n\nacc = VulnerableAccount(5000)\n# A buggy line anywhere in the software can corrupt the balance:\nacc.balance = -99999999   # Negative balance without authorization!\nacc.balance = \"corrupted\" # Wrong data type destroys subsequent calculations!</code></pre>\n            \n            <p>With encapsulation, we make <code>__balance</code> private. External code is strictly forbidden from directly overwriting the variable. Instead, state changes can only occur through validated methods like <code>deposit(amount)</code> and <code>withdraw(amount)</code> which enforce business logic (e.g. amount must be positive, and balance cannot fall below zero).</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-list-check\"></i> Access Conventions in Python: Public, Protected & Private</h2>\n            <p>Unlike languages like C++ or Java that have strict compile-time keywords (<code>public</code>, <code>protected</code>, <code>private</code>), Python implements access control through <strong>naming conventions and name mangling</strong>:</p>\n\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr>\n                            <th>Convention</th>\n                            <th>Syntax Example</th>\n                            <th>Accessibility</th>\n                            <th>Enforcement Mechanism</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Public</strong></td>\n                            <td><code>self.voltage</code></td>\n                            <td>Accessible from anywhere (inside class, subclasses, and external callers).</td>\n                            <td>No restriction. Open access by default.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Protected</strong></td>\n                            <td><code>self._operational_mode</code></td>\n                            <td>Intended only for internal use within the class and its derived subclasses.</td>\n                            <td><strong>Advisory convention (PEP 8)</strong>. Signals developers: <em>\"Treat as private; do not touch outside.\"</em> Python does not strictly block it, upholding the philosophy: <em>'We are all consenting adults here.'</em></td>\n                        </tr>\n                        <tr>\n                            <td><strong>Private</strong></td>\n                            <td><code>self.__actual_voltage</code></td>\n                            <td>Intended strictly for internal class use. Hidden from direct external access and subclass collision.</td>\n                            <td><strong>Strict Name Mangling</strong>. CPython automatically rewrites the attribute name internally.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-gears\"></i> Name Mangling Demystified: How CPython Renames Internals</h2>\n            <p>When you prefix an attribute with <strong>two leading underscores</strong> and at most one trailing underscore (e.g., <code>__actual_voltage</code>), Python's compiler activates <strong>Name Mangling</strong>:</p>\n            \n            <div class=\"callout-box warning\">\n                <i class=\"fa-solid fa-triangle-exclamation callout-icon\"></i>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">The Name Mangling Formula</div>\n                    <div class=\"callout-text\">CPython dynamically transforms <code>__attribute</code> into: <code>_ClassName__attribute</code>.<br><br>For instance, in <code>class HighVoltagePowerSupply</code>, the private variable <code>self.__actual_voltage</code> is stored inside the object's attribute dictionary as: <code>_HighVoltagePowerSupply__actual_voltage</code>!</div>\n                </div>\n            </div>\n\n            <p>If external code attempts to access <code>ps.__actual_voltage</code>, Python raises an immediate error:</p>\n            <pre><code>AttributeError: 'HighVoltagePowerSupply' object has no attribute '__actual_voltage'</code></pre>\n            \n            <p><strong>Why does Python do this?</strong> The primary purpose of name mangling is <strong>not security or secrecy</strong>, but to prevent <em>accidental name collisions and unintended overrides</em> when subclasses inherit from parent classes that define internal private helper attributes.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-bolt\"></i> Real-World Scientific Application: High-Voltage Laboratory Safety</h2>\n            <p>In our live laboratory demonstration below, a <code>HighVoltagePowerSupply</code> regulates electrostatic acceleration tubes. Direct external access to voltage could accidentally command 50,000V and trigger an electrical fire! By encapsulating <code>__actual_voltage</code> and routing updates through <code>set_voltage()</code>, the software enforces hardware safety limits (maximum 10,000V) before any current is allowed to flow.</p>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li><strong>Encapsulation vs Abstraction:</strong> Encapsulation is about <em>data hiding and binding</em> (packaging data with validation guards). Abstraction is about <em>complexity hiding</em> (exposing only essential interface features while hiding internal algorithmic mechanics).</li>\n                <li><strong>Is Private Truly Private in Python?</strong> No! Since Python is an interpreted, reflective language, one can technically still access <code>ps._HighVoltagePowerSupply__actual_voltage</code>. However, doing so violates PEP 8 conventions and will break code if internal class names change.</li>\n                <li><strong>Pythonic Alternative:</strong> Instead of manual Java-style <code>get_x()</code> and <code>set_x()</code> methods, modern Python uses the <strong><code>@property</code> decorator</strong> to achieve encapsulation with natural attribute access syntax (<code>obj.voltage = 500</code>).</li>\n            </ul>\n        </div>\n        ",
      "code": "class HighVoltagePowerSupply:\n    def __init__(self, target_voltage):\n        self._operational_mode = \"STANDBY\"   # Protected convention\n        self.__actual_voltage = target_voltage  # Private (mangled)\n        \n    def get_voltage(self):\n        return self.__actual_voltage\n        \n    def set_voltage(self, v):\n        if 0 <= v <= 10000:\n            self.__actual_voltage = v\n        else:\n            raise ValueError(\"Safety limit exceeded: Max voltage 10,000V!\")\n\nps = HighVoltagePowerSupply(2500)\nprint(f\"Regulated Voltage: {ps.get_voltage()} V\")\n\n# Inspecting Python's name mangling\nprint(\"Mangled attribute in object dict:\", \"_HighVoltagePowerSupply__actual_voltage\" in ps.__dict__)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "How does CPython internally rewrite an attribute named '__voltage' defined in class 'Sensor'?",
          "options": [
            "_Sensor__voltage",
            "__voltage_Sensor",
            "private_Sensor_voltage",
            "Sensor.__voltage"
          ],
          "correctIndex": 0,
          "explanation": "CPython mangles double-underscore attributes by prefixing them with an underscore followed by the class name: '_ClassName__attribute'."
        },
        {
          "type": "multiple-choice",
          "question": "How does Python handle double-underscore attributes like `__secret` inside a class `Sensor` to prevent accidental name collisions?",
          "options": [
            "Name Mangling: it internally renames the attribute to `_Sensor__secret`",
            "It encrypts the variable in RAM using AES",
            "It raises an error if accessed outside the file",
            "It locks the variable with the operating system"
          ],
          "correctIndex": 0,
          "explanation": "Double-underscore prefixing triggers name mangling, transforming `__attr` into `_<ClassName>__attr` to prevent collisions in subclasses."
        },
        {
          "type": "multiple-choice",
          "question": "What is the conventional meaning of a single leading underscore (e.g. `_internal_cache`) on a Python variable or method?",
          "options": [
            "An advisory convention signaling internal/private implementation details that external code should not rely on",
            "A syntax error",
            "A constant that cannot be altered",
            "A variable that exists only in C extensions"
          ],
          "correctIndex": 0,
          "explanation": "PEP 8 establishes a single leading underscore as a polite 'private' signal for developers, though Python does not strictly enforce it."
        }
      ]
    },
    "python-inner-classes": {
      "id": "python-inner-classes",
      "title": "Python Inner & Nested Classes",
      "category": "cat-oop",
      "track": "track-oop",
      "readTime": "4 min read",
      "lead": "Encapsulating tightly coupled auxiliary components, state machines, and data holders using inner classes.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-diagram-nested\"></i> What is an Inner / Nested Class?</h2>\n            <p>An <strong>Inner Class</strong> (or <em>Nested Class</em>) is simply a class defined directly within the indentation scope of another outer class. In Python, classes are first-class objects, meaning they can be defined anywhere, including inside other classes and functions.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-bullseye\"></i> When Should You Use an Inner Class?</h2>\n            <p>Inner classes are appropriate when an auxiliary data structure or helper component is <strong>tightly coupled</strong> to its parent class and has no practical purpose anywhere else in the application:</p>\n            <ul>\n                <li>A <code>Telescope</code> class containing an inner <code>Mount</code> class (modeling Equatorial vs Alt-Azimuth motorized trackers).</li>\n                <li>A <code>Computer</code> class containing an inner <code>Processor</code> and <code>RAM</code> class.</li>\n                <li>A <code>DatabaseEngine</code> class containing an inner <code>ConnectionPool</code> or <code>Cursor</code> class.</li>\n            </ul>\n            <p>By nesting the class, you keep the global namespace clean and prevent other modules from misusing specialized internal helper components.</p>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li><strong>Python vs Java Inner Classes:</strong> In Java, non-static inner classes automatically hold an implicit reference to their outer enclosing instance. In Python, inner classes do <strong>NOT</strong> have any automatic link to outer instances! If an inner instance needs to access the outer instance, the outer instance must be explicitly passed (e.g. <code>self.Mount(self)</code>).</li>\n            </ul>\n        </div>\n        ",
      "code": "class Telescope:\n    def __init__(self, aperture_mm):\n        self.aperture = aperture_mm\n        self.mount = self.Mount(\"Equatorial\", motorized=True)\n        \n    class Mount:\n        def __init__(self, mount_type, motorized):\n            self.type = mount_type\n            self.motorized = motorized\n            \n        def status(self):\n            return f\"{self.type} mount (Motorized: {self.motorized})\"\n\nastro_telescope = Telescope(200)\nprint(f\"Telescope: {astro_telescope.aperture}mm with {astro_telescope.mount.status()}\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary architectural benefit of using an inner class in Python?",
          "options": [
            "Grouping tightly coupled auxiliary components within their parent class scope",
            "Making the code run faster in bytecode execution",
            "Allowing private variables to be accessed globally",
            "Automatically allocating thread-safe memory"
          ],
          "correctIndex": 0,
          "explanation": "Inner classes cleanly group closely coupled helper structures within the parent class without polluting the global namespace."
        },
        {
          "type": "multiple-choice",
          "question": "When is defining an Inner (Nested) Class appropriate in Python?",
          "options": [
            "When a helper class is tightly coupled to its outer class and serves no practical purpose anywhere else in the codebase",
            "To make the code execute in parallel",
            "To reduce the memory size of functions",
            "Whenever creating more than two methods"
          ],
          "correctIndex": 0,
          "explanation": "Inner classes logically namespace specialized data structures or helper objects directly inside the class that depends on them."
        },
        {
          "type": "multiple-choice",
          "question": "Can an instance of an inner class directly access the instance variables (`self`) of an outer class without an explicit reference?",
          "options": [
            "No, inner classes in Python do not hold an implicit reference to an outer class instance",
            "Yes, Python automatically binds outer self to inner self",
            "Yes, using the `outer` keyword",
            "Only in Python 3.12+"
          ],
          "correctIndex": 0,
          "explanation": "Unlike Java, Python nested classes are simply objects bound to the outer class's namespace; they have no automatic back-reference to outer instances."
        }
      ]
    },
    "file-handling-intro": {
      "id": "file-handling-intro",
      "title": "Python File Handling Overview & Access Modes",
      "category": "cat-files",
      "track": "track-files",
      "readTime": "5 min read",
      "lead": "Persistent storage in Python: opening streams with open(), text vs binary modes, and understanding file access flags.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>Stream Buffering & Deterministic Resource Management:</strong> Operating systems allocate a file descriptor for each opened file. Python buffers file reads and writes in memory to minimize expensive disk I/O operations. Using Python's context manager (<code>with open(...) as f:</code>) ensures that the file descriptor is flushed and closed deterministically via the <code>__exit__</code> protocol, preventing resource leaks.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>Core File Modes Table</h2>\n                <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Mode</th><th>Description</th><th>Pointer Position / Behavior</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><code>'r'</code></td><td>Read (default)</td><td>Starts at beginning. Raises <code>FileNotFoundError</code> if missing.</td></tr>\n                        <tr><td><code>'w'</code></td><td>Write</td><td>Truncates file to 0 bytes or creates new file.</td></tr>\n                        <tr><td><code>'a'</code></td><td>Append</td><td>Pointer placed at end. Creates new file if missing without truncating.</td></tr>\n                        <tr><td><code>'x'</code></td><td>Exclusive Creation</td><td>Creates new file; raises <code>FileExistsError</code> if file already exists.</td></tr>\n                        <tr><td><code>'t'</code> / <code>'b'</code></td><td>Text / Binary</td><td>Text mode (default) decodes characters; binary handles raw bytes (images/PDFs).</td></tr>\n                        <tr><td><code>'+'</code></td><td>Update</td><td>Opens file for both reading and writing (e.g. <code>'r+'</code> or <code>'w+'</code>).</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>The Context Manager 'with' Statement</h2>\n                <p>Always open files using Python's <code>with open(...) as f:</code> context manager. It guarantees that file descriptors are closed deterministically, even if unhandled exceptions occur during execution.</p>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Deterministic file descriptor closing prevents file lock errors on Windows and Linux.</li><li>Automatic UTF-8 encoding/decoding protects against character corruption.</li><li>Low-level pointer manipulation (seek/tell) enables selective file processing.</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Opening large multi-gigabyte raw files entirely into memory using read() can cause Out-Of-Memory crashes.</li><li>Improperly handled write modes ('w') immediately truncate and overwrite existing files.</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Logging continuous telemetry streams from physics laboratory sensors.</li><li>Ingesting astronomical FITS header data and CSV spectrometer readings.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "# Simulating File Operations with io.StringIO\nimport io\n\n# In-memory stream representing file\nmock_file = io.StringIO()\nmock_file.write(\"Experiment-01: Michelson Interferometer\\nStatus: Calibrated\\n\")\n\n# Reading stream content\nmock_file.seek(0)\ncontent = mock_file.read()\n\nprint(\"File Stream Content:\")\nprint(content)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which file open mode opens a file for writing, but fails with FileExistsError if the file already exists?",
          "options": [
            "'x'",
            "'w'",
            "'a'",
            "'r+'"
          ],
          "correctIndex": 0,
          "explanation": "Mode 'x' (exclusive creation) creates a new file and raises FileExistsError if it already exists, preventing accidental overwrites."
        },
        {
          "type": "multiple-choice",
          "question": "Why is it best practice to open files using the `with open(...) as f:` context manager?",
          "options": [
            "It guarantees the file handle is closed automatically, even if an exception occurs inside the block",
            "It prevents other users on the operating system from reading the file",
            "It compresses file contents on the fly",
            "It bypasses the disk buffer for faster writes"
          ],
          "correctIndex": 0,
          "explanation": "Context managers invoke `__enter__` and `__exit__`, guaranteeing cleanup and closing of file descriptors under all conditions."
        },
        {
          "type": "multiple-choice",
          "question": "What is the difference between open mode `'r'` and mode `'rb'`?",
          "options": [
            "`'r'` opens for text mode with string decoding; `'rb'` opens for raw binary mode returning bytes",
            "`'rb'` is read-backward mode",
            "`'r'` is for files under 1MB; `'rb'` is for large files",
            "They are interchangeable on Windows"
          ],
          "correctIndex": 0,
          "explanation": "Binary mode (`'b'`) returns raw byte objects (`bytes`), essential for images, audio, compiled binaries, and serialized arrays."
        }
      ]
    },
    "file-read": {
      "id": "file-read",
      "title": "Python Reading Files & Pointer Manipulation",
      "category": "cat-files",
      "track": "track-files",
      "readTime": "5 min read",
      "lead": "Reading text streams safely: read(), readline(), readlines(), iterating line-by-line, and manipulating stream pointers with tell() and seek().",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Reading Methods Compared</h2>\n                <ul>\n                <li><code>f.read([size])</code>: Reads up to size characters (or entire file if omitted).</li>\n                <li><code>f.readline()</code>: Reads a single line including trailing newline character.</li>\n                <li><code>f.readlines()</code>: Reads entire file into a list of strings.</li>\n                <li><code>for line in f:</code>: Idiomatic memory-efficient line iteration without loading entire file into memory.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Pointer Control: tell() and seek()</h2>\n                <p><code>f.tell()</code> returns the current byte position within the file. <code>f.seek(offset, whence)</code> moves the pointer to a designated location.</p>\n            </section>\n            ",
      "code": "import io\n\n# Setup mock data file\nlog_stream = io.StringIO(\"\"\"Laser: He-Ne\nWavelength: 632.8 nm\nPower: 5 mW\nDetector: Photodiode\"\"\")\n\n# Read line by line\nprint(\"Reading Line-by-Line:\")\nfor line in log_stream.getvalue().splitlines():\n    print(\" ->\", line)\n\nprint(f\"Current stream pointer position: {log_stream.tell()}\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which method returns the current byte position of the file pointer in Python?",
          "options": [
            "f.tell()",
            "f.seek()",
            "f.pos()",
            "f.pointer()"
          ],
          "correctIndex": 0,
          "explanation": "f.tell() returns an integer giving the file object's current position in the file measured in bytes from the start."
        },
        {
          "type": "multiple-choice",
          "question": "What does `f.seek(0)` do when called on an active open file object `f`?",
          "options": [
            "Repositions the internal file read/write pointer back to the very beginning (byte offset 0)",
            "Deletes all contents in the file",
            "Checks if the file has 0 bytes",
            "Reads the first 0 lines of the file"
          ],
          "correctIndex": 0,
          "explanation": "`.seek(offset)` repositions the file stream pointer, enabling random access or re-reading without reopening the file."
        },
        {
          "type": "multiple-choice",
          "question": "Which method reads the next single line from a file as a string, preserving the newline character `\\n`?",
          "options": [
            ".readline()",
            ".readlines()",
            ".read(1)",
            ".scan()"
          ],
          "correctIndex": 0,
          "explanation": "`readline()` reads one line at a time, keeping memory usage minimal when processing multi-gigabyte scientific datasets."
        }
      ]
    },
    "file-write": {
      "id": "file-write",
      "title": "Python Writing & Creating Files",
      "category": "cat-files",
      "track": "track-files",
      "readTime": "4 min read",
      "lead": "Writing text and tabular data: write(), writelines(), buffer flushing, and formatting CSV/log records with UTF-8 encoding.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Encoding Specification</h2>\n                <p>Always specify <code>encoding='utf-8'</code> when opening files for writing to prevent platform-dependent character encoding corruption between Windows, Linux, and macOS.</p>\n            </section>\n            ",
      "code": "import io\n\n# Writing telemetry records\ntelemetry_data = [\n    \"Timestamp,Sensor_ID,Voltage_V\\n\",\n    \"12:00:01,SEN-01,3.29\\n\",\n    \"12:00:02,SEN-01,3.31\\n\"\n]\n\nstream = io.StringIO()\nstream.writelines(telemetry_data)\n\n# Verify written output\nstream.seek(0)\nprint(\"Buffered CSV Log Output:\")\nprint(stream.read().strip())",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What happens if you open an existing file in 'w' (write) mode in Python?",
          "options": [
            "The existing content is immediately truncated to 0 bytes",
            "New content is appended to the end of the file",
            "A FileExistsError is raised",
            "The file is opened in read-only mode"
          ],
          "correctIndex": 0,
          "explanation": "Opening in 'w' mode immediately truncates the file, erasing all existing content before writing."
        },
        {
          "type": "multiple-choice",
          "question": "What happens when you open an existing file using mode `'w'`?",
          "options": [
            "The file is immediately truncated to zero length (all previous contents overwritten)",
            "New content is appended to the end of the file",
            "A FileExistsError is raised",
            "The file opens as read-only"
          ],
          "correctIndex": 0,
          "explanation": "Mode `'w'` truncates existing files immediately. To append data without deleting previous lines, use mode `'a'`."
        },
        {
          "type": "multiple-choice",
          "question": "Which open mode creates a new file for writing, but raises `FileExistsError` if the file already exists?",
          "options": [
            "'x' (exclusive creation)",
            "'w+'",
            "'a'",
            "'r+'"
          ],
          "correctIndex": 0,
          "explanation": "Mode `'x'` guarantees exclusive creation, preventing accidental overwriting of pre-existing scientific log files."
        }
      ]
    },
    "file-delete": {
      "id": "file-delete",
      "title": "Deleting Files & Filesystem Safety",
      "category": "cat-files",
      "track": "track-files",
      "readTime": "4 min read",
      "lead": "Safe file deletion using os.remove(), inspecting file existence with os.path.exists(), and modern filesystem paths via pathlib.Path.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Modern Filesystem Navigation with pathlib</h2>\n                <p>Python 3.4+ provides <code>pathlib.Path</code>, an object-oriented filesystem abstraction superior to traditional raw string manipulation in <code>os.path</code>.</p>\n            </section>\n            ",
      "code": "import os\nfrom pathlib import Path\n\n# Safe path operations check\nmock_file_path = \"lab_measurements_temp.csv\"\n\n# Demonstrating existence check\nfile_exists = os.path.exists(mock_file_path)\nprint(f\"Checking '{mock_file_path}': Exists? {file_exists}\")\n\n# Using pathlib.Path\np = Path(\"data/reports/summary.txt\")\nprint(\"Path suffix:\", p.suffix)\nprint(\"Path parent directory:\", p.parent)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which standard function in the 'os' module is used to delete a file in Python?",
          "options": [
            "os.remove()",
            "os.delete()",
            "os.unlink_file()",
            "os.erase()"
          ],
          "correctIndex": 0,
          "explanation": "os.remove(path) or os.unlink(path) deletes (removes) a file path."
        },
        {
          "type": "multiple-choice",
          "question": "Which standard library module function deletes a single file from the filesystem?",
          "options": [
            "os.remove() (or os.unlink())",
            "os.delete()",
            "sys.remove()",
            "shutil.erase()"
          ],
          "correctIndex": 0,
          "explanation": "`os.remove(path)` or `os.unlink(path)` deletes a file; using `os.rmdir()` is reserved for empty directories."
        },
        {
          "type": "multiple-choice",
          "question": "Which module and function recursively removes an entire non-empty directory tree?",
          "options": [
            "shutil.rmtree()",
            "os.removedirs()",
            "os.delete_all()",
            "sys.wipe()"
          ],
          "correctIndex": 0,
          "explanation": "`shutil.rmtree(path)` traverses and deletes a directory tree including all child files and subdirectories."
        }
      ]
    },
    "numpy-intro": {
      "id": "numpy-intro",
      "title": "NumPy Introduction & Vectorization",
      "category": "cat-numpy",
      "track": "track-numpy",
      "readTime": "5 min read",
      "lead": "NumPy (Numerical Python) is the foundational scientific library in Python, providing high-performance multidimensional arrays (ndarray) and vectorized computational routines.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>Memory Strides & SIMD Vectorization:</strong> NumPy arrays (<code>ndarray</code>) are implemented in C as a flat, contiguous memory block paired with metadata: data type, dimensions (shape), and <em>strides</em> (the byte offset needed to jump to the next element along each dimension). Because data is stored contiguously without pointer indirection, modern CPUs can execute Single Instruction, Multiple Data (SIMD) vector instructions, executing math 50x-100x faster than pure Python.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>Why Use NumPy Over Python Lists?</h2>\n                <p>While standard Python lists store heterogeneous arrays of pointers (incurring boxing/unboxing overhead and pointer dereferencing), NumPy arrays store <strong>contiguous blocks of memory with homogeneous C data types</strong>. This allows SIMD vectorization and cache locality, achieving 50x to 100x performance improvements.</p>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Blazing-fast vectorized computation avoiding slow Python for-loops.</li><li>Extensive mathematical routines: linear algebra, Fourier transforms, random sampling.</li><li>Memory efficiency: eliminates 24+ byte Python object wrappers for every number.</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Homogeneous elements only: all items in an array must share the exact same data type.</li><li>Array dimensions cannot be dynamically appended without reallocating memory buffers.</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Solving differential equations for fluid dynamics and heat conduction.</li><li>Fast Fourier Transform (FFT) analysis of acoustic and electromagnetic signals.</li><li>Matrix diagonalization and eigenvalue computation in quantum mechanics.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "# Simulating Vectorized Computation\nimport time\n\n# Comparing vector sum concept\nsize = 10000\nlist_a = list(range(size))\nlist_b = list(range(size))\n\nstart = time.perf_counter()\nresult = [a + b for a, b in zip(list_a, list_b)]\nduration_us = (time.perf_counter() - start) * 1e6\n\nprint(f\"Computed {size} vector additions in {duration_us:.1f} microseconds.\")\nprint(\"Sample Result [0..5]:\", result[:5])",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary reason NumPy ndarrays are drastically faster than standard Python lists for numeric computations?",
          "options": [
            "Contiguous memory allocation with homogeneous C data types",
            "NumPy uses multithreading for every line of code",
            "NumPy skips the Python Virtual Machine completely",
            "NumPy runs in the GPU by default"
          ],
          "correctIndex": 0,
          "explanation": "NumPy arrays store elements contiguously in memory as uniform data types, maximizing CPU cache locality and enabling SIMD vectorization."
        },
        {
          "type": "multiple-choice",
          "question": "Why are NumPy ndarrays significantly faster than standard Python lists for numeric computations?",
          "options": [
            "Homogeneous contiguous memory buffers with vectorized C implementations avoiding type-checking loops",
            "NumPy arrays are stored in CPU L1 cache exclusively",
            "Python lists convert all numbers into strings",
            "NumPy disables the Python garbage collector"
          ],
          "correctIndex": 0,
          "explanation": "NumPy stores data in contiguous blocks of memory of a single data type (homogeneous), allowing low-level SIMD CPU vectorization."
        },
        {
          "type": "multiple-choice",
          "question": "What does the `.ndim` attribute of a NumPy array represent?",
          "options": [
            "The number of dimensions (axes) of the array",
            "The total number of elements in the array",
            "The memory size in bytes",
            "The data type code"
          ],
          "correctIndex": 0,
          "explanation": "`.ndim` gives the number of axes: 1 for vectors, 2 for matrices, 3 for 3D tensors, etc."
        }
      ]
    },
    "numpy-create-arrays": {
      "id": "numpy-create-arrays",
      "title": "Creating NumPy Arrays & Dimensions (ndim)",
      "category": "cat-numpy",
      "track": "track-numpy",
      "readTime": "5 min read",
      "lead": "Constructing 0D scalars, 1D vectors, 2D matrices, and 3D tensors using np.array(), and inspecting array dimensionality with ndim.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Array Dimensions Hierarchy</h2>\n                <ul>\n                <li><strong>0-D Array:</strong> A scalar value (e.g. <code>np.array(42)</code>).</li>\n                <li><strong>1-D Array:</strong> A vector with elements (e.g. <code>np.array([1, 2, 3])</code>).</li>\n                <li><strong>2-D Array:</strong> A matrix having 1-D arrays as its elements (e.g. <code>np.array([[1, 2], [3, 4]])</code>).</li>\n                <li><strong>3-D Array:</strong> A tensor having 2-D matrices as its elements.</li>\n            </ul>\n            </section>\n            ",
      "code": "# Array Construction Demonstration\n# In NumPy:\n# 0D: scalar, 1D: vector, 2D: matrix\nscalar_val = 42\nvector_1d = [10, 20, 30, 40]\nmatrix_2d = [[1, 2, 3], [4, 5, 6]]\n\nprint(\"0D Dimension ndim: 0\")\nprint(\"1D Vector Elements:\", len(vector_1d), \"ndim: 1\")\nprint(\"2D Matrix Shape: (2, 3) ndim: 2\")\nprint(\"Sample Matrix Row 1:\", matrix_2d[0])",
      "quiz": [
        {
          "type": "fill-in",
          "question": "Which array attribute returns the number of dimensions of a NumPy array?",
          "codeTemplate": "<span>Attribute: arr.</span><input type='text' class='quiz-fill-input' placeholder='ndim'>",
          "answer": "ndim",
          "explanation": "The 'ndim' attribute returns the integer number of array dimensions."
        },
        {
          "type": "multiple-choice",
          "question": "Which function creates a 1D array of 50 evenly spaced values spanning the closed interval [0, 1]?",
          "options": [
            "np.linspace(0, 1, 50)",
            "np.arange(0, 1, 50)",
            "np.range(0, 1, 50)",
            "np.spaced(0, 1, 50)"
          ],
          "correctIndex": 0,
          "explanation": "`np.linspace(start, stop, num)` generates evenly spaced points over a specified interval, including endpoint by default."
        },
        {
          "type": "multiple-choice",
          "question": "What is the shape of an array created by `np.zeros((3, 4, 2))`?",
          "options": [
            "(3, 4, 2)",
            "(24,)",
            "(3, 8)",
            "(12, 2)"
          ],
          "correctIndex": 0,
          "explanation": "The shape tuple `(3, 4, 2)` produces a 3D array with 3 planes, 4 rows, and 2 columns (24 total zeros)."
        }
      ]
    },
    "numpy-indexing-slicing": {
      "id": "numpy-indexing-slicing",
      "title": "NumPy Array Indexing & Multi-Dimensional Slicing",
      "category": "cat-numpy",
      "track": "track-numpy",
      "readTime": "5 min read",
      "lead": "Mastering multidimensional NumPy array slicing, stride mechanics, integer array indexing, and boolean mask filtering.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table-cells\"></i> Multidimensional Indexing vs. Python Lists</h2>\n            <p>In standard Python nested lists, accessing row <code>i</code> and column <code>j</code> requires chained indexing: <code>matrix[i][j]</code>, which creates an intermediate list object in memory. In NumPy, multidimensional arrays use efficient tuple indexing separated by commas: <code>arr[i, j]</code>, traversing contiguous memory buffers directly in fast compiled C.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scissors\"></i> Slicing Across Axes: [start:stop:step]</h2>\n            <p>NumPy slicing follows the standard Python slice syntax across each axis independently:</p>\n            <ul>\n                <li><code>arr[row_slice, col_slice]</code></li>\n                <li><code>arr[:, 0]</code> selects all rows from column 0 (extracting the first column).</li>\n                <li><code>arr[0, :]</code> selects the entire first row.</li>\n                <li><code>arr[1:4, 2:5]</code> extracts a 3x3 submatrix.</li>\n            </ul>\n            <div class=\"callout-box warning\">\n                <i class=\"fa-solid fa-triangle-exclamation callout-icon\"></i>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Slices are Views, NOT Copies!</div>\n                    <div class=\"callout-text\">Standard NumPy array slicing returns a <strong>view</strong> sharing the original array's underlying memory buffer. Modifying a slice (e.g. <code>sub[0, 0] = 999</code>) will mutate the original array! To prevent this, explicitly call <code>.copy()</code>.</div>\n                </div>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-filter\"></i> Boolean Mask Indexing</h2>\n            <p>Boolean indexing allows filtering arrays using conditional expressions:</p>\n            <pre><code>import numpy as np\ndata = np.array([12, -4, 25, -9, 30])\n# Boolean condition creates a mask: [True, False, True, False, True]\npositive_data = data[data > 0]  # Yields: [12, 25, 30]</code></pre>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li><strong>Ellipsis (...):</strong> Used to skip multiple unneeded dimensions: <code>arr[..., 0]</code> selects the first column across arbitrary higher dimensions.</li>\n                <li>Combining logical conditions on NumPy arrays requires bitwise operators (<code>&</code> for and, <code>|</code> for or) with parentheses: <code>(arr > 0) & (arr < 50)</code>.</li>\n            </ul>\n        </div>\n        ",
      "code": "# Multi-dimensional Slicing Simulation\nmatrix = [\n    [10, 20, 30, 40],\n    [50, 60, 70, 80],\n    [90, 100, 110, 120]\n]\n\n# Extract element at row 1, column 2 (0-indexed)\nelement = matrix[1][2]\nprint(f\"Element at coordinate [1, 2]: {element}\")\n\n# Extract column 1 across all rows\ncol_1 = [row[1] for row in matrix]\nprint(\"Column 1 values across all rows:\", col_1)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "In a 2D NumPy array 'arr', which syntax extracts the entire second column (index 1) across all rows?",
          "options": [
            "arr[:, 1]",
            "arr[1, :]",
            "arr[1][:]",
            "arr[*, 1]"
          ],
          "correctIndex": 0,
          "explanation": "arr[:, 1] selects all rows (':') at column index 1."
        },
        {
          "type": "multiple-choice",
          "question": "Given a 2D array `arr` of shape (5, 5), how do you extract all elements from the 3rd row (index 2)?",
          "options": [
            "arr[2, :]",
            "arr[:, 2]",
            "arr[2][:]",
            "arr.row(2)"
          ],
          "correctIndex": 0,
          "explanation": "`arr[2, :]` selects row index 2 across all columns (`:`)."
        },
        {
          "type": "multiple-choice",
          "question": "How do you select only the odd numbers from a 1D array `x` using boolean indexing?",
          "options": [
            "x[x % 2 != 0]",
            "x.filter(odd)",
            "x[x == 'odd']",
            "x.where(x % 2 != 0)"
          ],
          "correctIndex": 0,
          "explanation": "`x % 2 != 0` creates a boolean mask array of True/False, and `x[mask]` filters out the elements where True."
        }
      ]
    },
    "numpy-data-types": {
      "id": "numpy-data-types",
      "title": "NumPy Data Types & astype() Conversion",
      "category": "cat-numpy",
      "track": "track-numpy",
      "readTime": "5 min read",
      "lead": "Understanding NumPy's type characters (i, b, u, f, c, m, M, O, S, U, V) and casting array types with the astype() method.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Type Codes in NumPy</h2>\n                <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Type Code</th><th>Data Type</th><th>Description</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><code>'i'</code></td><td>Integer</td><td><code>int32</code>, <code>int64</code></td></tr>\n                        <tr><td><code>'f'</code></td><td>Float</td><td><code>float32</code>, <code>float64</code></td></tr>\n                        <tr><td><code>'c'</code></td><td>Complex Float</td><td><code>complex64</code>, <code>complex128</code></td></tr>\n                        <tr><td><code>'b'</code></td><td>Boolean</td><td><code>bool_</code></td></tr>\n                        <tr><td><code>'U'</code></td><td>Unicode String</td><td>Fixed-width unicode string</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            </section>\n            ",
      "code": "# Data Type Conversion Principle\nraw_floats = [1.2, 4.5, 7.8, 9.1]\n\n# In NumPy: arr.astype('i')\nconverted_ints = [int(x) for x in raw_floats]\n\nprint(\"Original Floats:\", raw_floats)\nprint(\"Cast to Integers:\", converted_ints)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which method is used to create a copy of a NumPy array cast to a specified data type?",
          "options": [
            "arr.astype()",
            "arr.cast()",
            "arr.convert()",
            "arr.to_type()"
          ],
          "correctIndex": 0,
          "explanation": "arr.astype(new_type) creates and returns a copy of the array converted to the requested data type."
        },
        {
          "type": "multiple-choice",
          "question": "How do you safely convert a float NumPy array `arr` to 32-bit signed integers?",
          "options": [
            "arr.astype(np.int32)",
            "arr.to_int32()",
            "int32(arr)",
            "arr.dtype = np.int32"
          ],
          "correctIndex": 0,
          "explanation": "`.astype(dtype)` creates a newly cast copy with the specified target data type without corrupting raw byte views."
        },
        {
          "type": "multiple-choice",
          "question": "What data type does NumPy assign by default when initializing `np.array([1.5, 2.0, 3.5])` on a 64-bit OS?",
          "options": [
            "float64",
            "float32",
            "float128",
            "double"
          ],
          "correctIndex": 0,
          "explanation": "On 64-bit platforms, standard floating-point numbers default to IEEE 754 double precision (`float64`)."
        }
      ]
    },
    "numpy-copy-view": {
      "id": "numpy-copy-view",
      "title": "NumPy Copy vs View & Memory Ownership",
      "category": "cat-numpy",
      "track": "track-numpy",
      "readTime": "5 min read",
      "lead": "The critical difference between copies (owns data) and views (looks at original data buffer), and inspecting the .base attribute.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Memory Ownership: The .base Attribute</h2>\n                <p>A <strong>Copy</strong> owns its memory buffer: modifying the copy has zero effect on the original array, and its <code>.base</code> attribute returns <code>None</code>. A <strong>View</strong> merely provides a new window over the original memory: modifying the view directly modifies the original array, and its <code>.base</code> returns the original array!</p>\n            </section>\n            ",
      "code": "# Copy vs View Demonstration\noriginal = [10, 20, 30, 40]\n\n# Shallow view simulation (direct reference)\nview_ref = original\n# Deep copy simulation\ncopy_ref = original.copy()\n\n# Modifying view modifies original\nview_ref[0] = 999\nprint(\"Original after view modification:\", original)\nprint(\"Copy remains untouched:\", copy_ref)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What does a NumPy array's .base attribute return if the array is a copy that owns its own data?",
          "options": [
            "None",
            "True",
            "self",
            "0"
          ],
          "correctIndex": 0,
          "explanation": "If an array owns its memory buffer (a copy), its .base attribute is None. If it is a view, .base references the original array."
        },
        {
          "type": "multiple-choice",
          "question": "What is the critical distinction between a NumPy `copy()` and a `view()`?",
          "options": [
            "A copy owns its memory; a view references the original array's memory buffer so modifying one affects both",
            "A view is faster to save to disk than a copy",
            "A copy cannot be reshaped",
            "Views only work for 1D arrays"
          ],
          "correctIndex": 0,
          "explanation": "Standard slicing in NumPy produces views sharing the parent buffer. Modifying a slice alters the source array!"
        },
        {
          "type": "multiple-choice",
          "question": "Which attribute can you inspect to determine if an array owns its memory or is a view of another array?",
          "options": [
            "arr.base",
            "arr.parent",
            "arr.owner",
            "arr.source"
          ],
          "correctIndex": 0,
          "explanation": "If `arr.base` is `None`, the array owns its memory (it is a copy/source); if it is a view, `.base` references the root array."
        }
      ]
    },
    "numpy-shape-reshape": {
      "id": "numpy-shape-reshape",
      "title": "Array Shape & Reshaping Dimensions",
      "category": "cat-numpy",
      "track": "track-numpy",
      "readTime": "5 min read",
      "lead": "Analyzing array geometry with shape, reshaping between 1D vectors and multi-dimensional matrices with reshape(), and using -1 for unknown dimensions.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Reshaping Mechanics</h2>\n                <p>The product of the dimensions in the new shape must exactly equal the total number of elements in the original array. Passing <code>-1</code> lets NumPy automatically calculate that specific dimension.</p>\n            </section>\n            ",
      "code": "# Reshaping 12 elements\n# (12,) -> (3, 4) or (2, 6) or (2, 2, 3)\ntotal_elements = 12\nrows, cols = 3, 4\n\nsimulated_matrix = [\n    [r * cols + c for c in range(cols)]\n    for r in range(rows)\n]\n\nprint(f\"Reshaped 1D sequence of {total_elements} items into {rows}x{cols} matrix:\")\nfor row in simulated_matrix:\n    print(\" \", row)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What value can be passed as one of the dimensions in arr.reshape() to have NumPy calculate the dimension automatically?",
          "options": [
            "-1",
            "None",
            "0",
            "auto"
          ],
          "correctIndex": 0,
          "explanation": "Passing -1 for one dimension instructs NumPy to calculate the exact dimension required to accommodate all elements."
        },
        {
          "type": "multiple-choice",
          "question": "Given an array `arr` of 12 elements, what does `arr.reshape(3, -1)` produce?",
          "options": [
            "An array of shape (3, 4) because NumPy infers the remaining dimension automatically",
            "An error because negative dimensions are invalid",
            "An array of shape (3, 1)",
            "An inverted 3x4 matrix"
          ],
          "correctIndex": 0,
          "explanation": "Passing `-1` instructs NumPy to calculate the required dimension size dynamically based on total elements: 12 / 3 = 4."
        },
        {
          "type": "multiple-choice",
          "question": "Which method flattens an n-dimensional array into a 1D copy?",
          "options": [
            "arr.flatten()",
            "arr.unroll()",
            "arr.to_1d()",
            "arr.squeeze()"
          ],
          "correctIndex": 0,
          "explanation": "`.flatten()` collapses an array into a 1D array as an independent copy (unlike `.ravel()`, which returns a view if possible)."
        }
      ]
    },
    "numpy-iterating": {
      "id": "numpy-iterating",
      "title": "Iterating Arrays & np.nditer()",
      "category": "cat-numpy",
      "track": "track-numpy",
      "readTime": "4 min read",
      "lead": "Navigating multi-dimensional arrays efficiently using np.nditer(), controlling iteration order (C vs Fortran), and tracking indices with ndenumerate().",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Why np.nditer()?</h2>\n                <p>Instead of writing nested <code>for</code> loops for high-dimensional arrays, <code>np.nditer()</code> flattens multi-dimensional iteration in C without memory duplication.</p>\n            </section>\n            ",
      "code": "# Iteration over 2D structure\nmatrix = [\n    [1, 2, 3],\n    [4, 5, 6]\n]\n\nprint(\"Iterating over all coordinates:\")\nfor r_idx, row in enumerate(matrix):\n    for c_idx, val in enumerate(row):\n        print(f\"Coordinate ({r_idx}, {c_idx}) = {val}\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which NumPy iterator function yields both the coordinate indices and the element value during iteration?",
          "options": [
            "np.ndenumerate()",
            "np.nditer()",
            "np.coordinate()",
            "np.zip()"
          ],
          "correctIndex": 0,
          "explanation": "np.ndenumerate() yields coordinate tuples (e.g. (0, 1)) alongside the corresponding array element."
        },
        {
          "type": "multiple-choice",
          "question": "What is the primary advantage of `np.nditer()` when iterating through multi-dimensional arrays?",
          "options": [
            "It iterates through elements efficiently regardless of memory layout (C-order or Fortran-order) without nested loops",
            "It compiles Python loops to CUDA GPU kernels",
            "It automatically sorts elements before iterating",
            "It prevents memory modification"
          ],
          "correctIndex": 0,
          "explanation": "`np.nditer()` is an efficient multidimensional iterator that traverses array memory in optimal cache order."
        },
        {
          "type": "multiple-choice",
          "question": "Which flag in `np.nditer(arr, flags=['...'])` enables tracking the multi-dimensional coordinates of the current element?",
          "options": [
            "multi_index",
            "track_coords",
            "enumerate_all",
            "index_view"
          ],
          "correctIndex": 0,
          "explanation": "Passing `flags=['multi_index']` allows querying `it.multi_index` to obtain the tuple coordinate (e.g. `(row, col)`)."
        }
      ]
    },
    "numpy-join-split": {
      "id": "numpy-join-split",
      "title": "Joining & Splitting NumPy Arrays",
      "category": "cat-numpy",
      "track": "track-numpy",
      "readTime": "5 min read",
      "lead": "Combining arrays along axes: concatenate(), stack(), hstack(), vstack(), dstack(), and partitioning with array_split().",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Stacking Functions Compared</h2>\n                <ul>\n                <li><code>np.concatenate((a, b), axis=0)</code>: Joins arrays along an existing axis.</li>\n                <li><code>np.stack((a, b), axis=0)</code>: Joins arrays along a NEW axis.</li>\n                <li><code>np.vstack((a, b))</code>: Stacks arrays vertically (row-wise).</li>\n                <li><code>np.hstack((a, b))</code>: Stacks arrays horizontally (column-wise).</li>\n            </ul>\n            </section>\n            ",
      "code": "# Simulating horizontal and vertical concatenation\nvector_a = [1, 2, 3]\nvector_b = [4, 5, 6]\n\n# Horizontal concatenate\nh_joined = vector_a + vector_b\n# Vertical stack (2x3 matrix)\nv_joined = [vector_a, vector_b]\n\nprint(\"Horizontal Join (1D):\", h_joined)\nprint(\"Vertical Stack (2x3 Matrix):\", v_joined)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which function splits an array into multiple sub-arrays even if the split is not perfectly equal?",
          "options": [
            "np.array_split()",
            "np.split()",
            "np.divide()",
            "np.partition()"
          ],
          "correctIndex": 0,
          "explanation": "np.array_split() successfully splits arrays into unequal segments when an exact division is not possible."
        },
        {
          "type": "multiple-choice",
          "question": "Which function joins a sequence of arrays along a new axis (increasing the array's dimensionality)?",
          "options": [
            "np.stack()",
            "np.concatenate()",
            "np.append()",
            "np.join()"
          ],
          "correctIndex": 0,
          "explanation": "`np.concatenate` joins along an existing axis, whereas `np.stack` joins along a newly created axis."
        },
        {
          "type": "multiple-choice",
          "question": "What does `np.array_split(arr, 3)` do if `arr` has 8 elements?",
          "options": [
            "Splits into 3 subarrays with sizes 3, 3, and 2 elements without raising an error",
            "Raises a ValueError because 8 is not evenly divisible by 3",
            "Pads the array with zeros to 9 elements",
            "Discards the last 2 elements"
          ],
          "correctIndex": 0,
          "explanation": "Unlike `np.split()`, which demands equal division, `np.array_split()` handles unequal splits gracefully."
        }
      ]
    },
    "numpy-search-sort": {
      "id": "numpy-search-sort",
      "title": "Searching, Sorting & Boolean Filtering",
      "category": "cat-numpy",
      "track": "track-numpy",
      "readTime": "5 min read",
      "lead": "Finding element indices using np.where(), binary search insertion with searchsorted(), sorting arrays, and boolean mask filtering.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Boolean Mask Indexing</h2>\n                <p>NumPy allows filtering arrays using boolean expressions: <code>arr[arr % 2 == 0]</code> returns all even elements directly without manual loops.</p>\n            </section>\n            ",
      "code": "# Boolean Mask Filtering Principle\nmeasurements = [12.4, 45.1, 8.3, 90.7, 33.2, 67.5]\n\n# Filtering elements > 40.0\nthreshold = 40.0\nfiltered_results = [x for x in measurements if x > threshold]\n\nprint(f\"Readings exceeding threshold {threshold}:\", filtered_results)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which NumPy function searches an array for a specified condition and returns the indices where the condition is True?",
          "options": [
            "np.where()",
            "np.find()",
            "np.search()",
            "np.lookup()"
          ],
          "correctIndex": 0,
          "explanation": "np.where(condition) returns a tuple of index arrays where the condition evaluates to True."
        },
        {
          "type": "multiple-choice",
          "question": "What does `np.where(arr > 5)` return for a 1D array?",
          "options": [
            "A tuple containing an array of indices where the condition is True",
            "A boolean array of True and False values",
            "The values greater than 5 directly",
            "The count of numbers greater than 5"
          ],
          "correctIndex": 0,
          "explanation": "`np.where(condition)` returns index coordinates where condition is met. (To get values directly, use `arr[arr > 5]`)."
        },
        {
          "type": "multiple-choice",
          "question": "Which function returns the indices that would sort an array rather than the sorted elements themselves?",
          "options": [
            "np.argsort()",
            "np.sort_indices()",
            "np.order()",
            "np.rank()"
          ],
          "correctIndex": 0,
          "explanation": "`np.argsort()` returns an array of indices that sorts the data along the specified axis, invaluable for sorting parallel data arrays."
        }
      ]
    },
    "numpy-random": {
      "id": "numpy-random",
      "title": "NumPy Random & Statistical Distributions",
      "category": "cat-numpy",
      "track": "track-numpy",
      "readTime": "6 min read",
      "lead": "Generating pseudo-random numbers, shuffling, permutations, and sampling from physical distributions: Normal (Gaussian), Binomial, Poisson, Uniform, and Logistic.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>Pseudo-Random Number Generation & Probability Densities:</strong> NumPy's modern <code>numpy.random.Generator</code> uses the high-performance PCG64 pseudo-random number generator. It transforms uniform random deviates into arbitrary continuous or discrete physical distributions using inversion and rejection sampling algorithms.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>Key Physical Distributions</h2>\n                <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Distribution</th><th>NumPy Method</th><th>Physics / Scientific Application</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Normal (Gaussian)</strong></td><td><code>random.normal(loc, scale, size)</code></td><td>Measurement error, thermal noise, Maxwell-Boltzmann speeds</td></tr>\n                        <tr><td><strong>Poisson</strong></td><td><code>random.poisson(lam, size)</code></td><td>Radioactive decay counts, photon shot noise</td></tr>\n                        <tr><td><strong>Uniform</strong></td><td><code>random.uniform(low, high, size)</code></td><td>Equally probable events, Monte Carlo sampling</td></tr>\n                        <tr><td><strong>Binomial</strong></td><td><code>random.binomial(n, p, size)</code></td><td>Quantum spin states, coin toss probability</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Vectorized generation of millions of statistical samples in milliseconds.</li><li>Comprehensive library of physical distributions: Normal, Poisson, Binomial, Uniform, Exponential.</li><li>Reproducible research via explicit seed initialization.</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Pseudo-random algorithms are deterministic and unsuitable for cryptographic security (use Python's secrets module).</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Monte Carlo simulations of photon transport through turbulent atmospheres.</li><li>Modeling radioactive decay events with Poisson random distributions.</li><li>Simulating experimental measurement error with Gaussian normal noise.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "import random\n\n# Simulating Gaussian normal distribution (Mean=100, StdDev=15)\nsamples = [round(random.gauss(100, 15), 2) for _ in range(8)]\nprint(\"Simulated Gaussian Samples:\", samples)\n\n# Simulating Poisson events (Lambda = 5 counts/sec)\npoisson_sim = [random.expovariate(1/5.0) for _ in range(5)]\nprint(\"Simulated Inter-arrival Times (sec):\", [round(t, 2) for t in poisson_sim])",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which statistical distribution is primarily used in physics to model random radioactive particle decay counts over a fixed time interval?",
          "options": [
            "Poisson Distribution",
            "Uniform Distribution",
            "Logistic Distribution",
            "Pareto Distribution"
          ],
          "correctIndex": 0,
          "explanation": "The Poisson distribution models the probability of a given number of discrete events occurring in a fixed interval of time (e.g. radioactive decay counts)."
        },
        {
          "type": "multiple-choice",
          "question": "What is the recommended modern API in NumPy to generate random numbers with reproducible seeds?",
          "options": [
            "rng = np.random.default_rng(seed)",
            "np.random.seed(seed)",
            "np.random.rand()",
            "random.numpy_seed()"
          ],
          "correctIndex": 0,
          "explanation": "NumPy 1.17+ introduced `Generator` instances initialized via `np.random.default_rng()`, replacing legacy global PRNG state."
        },
        {
          "type": "multiple-choice",
          "question": "Which method on a NumPy generator draws samples from a Gaussian (normal) distribution?",
          "options": [
            "rng.normal(loc, scale, size)",
            "rng.gaussian()",
            "rng.bell_curve()",
            "rng.norm_dist()"
          ],
          "correctIndex": 0,
          "explanation": "`rng.normal(loc=mean, scale=std, size=shape)` generates samples following a Gaussian distribution."
        }
      ]
    },
    "numpy-ufuncs": {
      "id": "numpy-ufuncs",
      "title": "NumPy Universal Functions (ufuncs)",
      "category": "cat-numpy",
      "track": "track-numpy",
      "readTime": "6 min read",
      "lead": "Universal Functions (ufuncs): high-speed element-wise arithmetic, SIMD CPU vectorization, broadcasting mechanics, and accumulator methods.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-bolt-lightning\"></i> What is a Universal Function (ufunc)?</h2>\n            <p>A <strong>Universal Function (ufunc)</strong> in NumPy is a function that operates on <code>ndarrays</code> in an <strong>element-by-element fashion</strong>. Unlike traditional Python functions that rely on slow interpreted <code>for</code> loops with type-checking overhead, ufuncs are implemented in optimized, compiled C and utilize <strong>SIMD (Single Instruction, Multiple Data) CPU vectorization</strong>, running up to 100x faster than pure Python.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-tower-broadcast\"></i> Array Broadcasting Rules</h2>\n            <p>Broadcasting describes how NumPy treats arrays with different shapes during arithmetic operations. When operating on two arrays, NumPy compares their shapes element-wise from right to left:</p>\n            <ul>\n                <li>Two dimensions are compatible if they are <strong>equal</strong>, or one of them is <strong>1</strong>.</li>\n                <li>If a dimension is 1, the smaller array is virtually 'stretched' (broadcasted) across the larger dimension without copying memory!</li>\n            </ul>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-calculator\"></i> Advanced ufunc Methods: reduce() & accumulate()</h2>\n            <p>Every binary ufunc provides built-in aggregation methods:</p>\n            <ul>\n                <li><strong><code>np.add.reduce(arr)</code>:</strong> Reduces an array by repeated addition (computes sum).</li>\n                <li><strong><code>np.add.accumulate(arr)</code>:</strong> Computes cumulative progressive sums (<code>cumsum</code>).</li>\n                <li><strong><code>np.multiply.outer(a, b)</code>:</strong> Computes the outer product table between all pairs of elements.</li>\n            </ul>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li>Custom Python functions can be transformed into ufuncs using <code>np.frompyfunc(func, nin, nout)</code> or <code>np.vectorize()</code>.</li>\n            </ul>\n        </div>\n        ",
      "code": "import math\n\n# Demonstrating ufunc principles\nangles_deg = [0, 30, 45, 60, 90]\nradians = [math.radians(deg) for deg in angles_deg]\nsin_values = [round(math.sin(r), 4) for r in radians]\n\nprint(\"Angles (degrees):\", angles_deg)\nprint(\"Sin Values (ufunc concept):\", sin_values)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the term for NumPy functions that perform fast, element-by-element operations on ndarray objects?",
          "options": [
            "ufuncs (Universal Functions)",
            "fastfuncs",
            "cfuncs",
            "macrofuncs"
          ],
          "correctIndex": 0,
          "explanation": "A ufunc (universal function) is a function that operates on ndarrays in an element-by-element fashion."
        },
        {
          "type": "multiple-choice",
          "question": "How can you convert any custom Python function into a vectorized NumPy Universal Function (ufunc)?",
          "options": [
            "np.frompyfunc()",
            "np.vector()",
            "np.make_ufunc()",
            "np.c_compile()"
          ],
          "correctIndex": 0,
          "explanation": "`np.frompyfunc(func, nin, nout)` turns a standard scalar function into a ufunc that supports broadcasting."
        },
        {
          "type": "multiple-choice",
          "question": "Which ufunc method applies an operation cumulatively across an array (e.g. cumulative sum or product)?",
          "options": [
            ".accumulate()",
            ".reduce()",
            ".reduceat()",
            ".scan()"
          ],
          "correctIndex": 0,
          "explanation": "`np.add.accumulate([1, 2, 3])` yields `[1, 3, 6]`, providing cumulative progressive results."
        }
      ]
    },
    "pandas-intro": {
      "id": "pandas-intro",
      "title": "Pandas Introduction & Data Analysis",
      "category": "cat-pandas",
      "track": "track-pandas",
      "readTime": "5 min read",
      "lead": "Pandas is Python's premier data manipulation library, providing flexible tabular DataFrames, labeled Series, and rich data cleaning tools.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>Columnar Tabular Architecture:</strong> A Pandas DataFrame is a 2D labeled data structure consisting of multiple 1D NumPy arrays (columns) linked by a shared index. This columnar architecture optimizes exploratory data analysis, filtering, and aggregation by applying vectorized operations down entire columns simultaneously.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>What is Pandas?</h2>\n                <p>Created by <em>Wes McKinney</em>, the name <strong>Pandas</strong> derives from both <em>'Panel Data'</em> and <em>'Python Data Analysis'</em>. Built directly on top of NumPy, it provides spreadsheet-like tables with labeled rows and columns.</p>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Spreadsheet-like tabular representation with intuitive row and column labels.</li><li>Comprehensive built-in data cleaning: handling missing values, duplicates, and type parsing.</li><li>Effortless ingestion of diverse formats: CSV, Excel, JSON, SQL, HDF5.</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>High memory footprint: DataFrames typically require 5x to 10x the raw file size in RAM.</li><li>Not optimized for streaming or real-time sub-millisecond transaction processing.</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Analyzing atmospheric physics telemetry (temperature, pressure, humidity time series).</li><li>Processing particle collision datasets and calculating cross-section correlations.</li><li>Managing laboratory inventory, student experiment logs, and calibration dates.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "# Pandas Tabular Data Concept\nphysics_dataset = {\n    \"Experiment\": [\"Pendulum\", \"Ohm's Law\", \"Prism Spectrometer\"],\n    \"Duration_min\": [45, 30, 60],\n    \"Accuracy_pct\": [98.5, 99.2, 97.8]\n}\n\nprint(\"Raw Dataset Dictionary:\")\nfor k, v in physics_dataset.items():\n    print(f\" {k:<15}: {v}\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary 2-dimensional tabular data structure provided by Pandas?",
          "options": [
            "DataFrame",
            "Series",
            "PanelArray",
            "TableTensor"
          ],
          "correctIndex": 0,
          "explanation": "A Pandas DataFrame is a 2-dimensional labeled data structure with columns of potentially different types."
        },
        {
          "type": "multiple-choice",
          "question": "What are the two primary core data structures provided by Pandas?",
          "options": [
            "Series (1-dimensional labeled array) and DataFrame (2-dimensional labeled table)",
            "Vector and Tensor",
            "Matrix and Database",
            "List and Dictionary"
          ],
          "correctIndex": 0,
          "explanation": "A Series is a labeled 1D column; a DataFrame is a 2D tabular structure composed of aligned Series."
        },
        {
          "type": "multiple-choice",
          "question": "What underlying numeric library powers high-speed column calculations in Pandas?",
          "options": [
            "NumPy",
            "TensorFlow",
            "PyTorch",
            "SQLite"
          ],
          "correctIndex": 0,
          "explanation": "Pandas series and columns are built directly on top of NumPy ndarrays, providing vectorization and fast memory operations."
        }
      ]
    },
    "pandas-series": {
      "id": "pandas-series",
      "title": "Pandas Series & Custom Index Labels",
      "category": "cat-pandas",
      "track": "track-pandas",
      "readTime": "4 min read",
      "lead": "A Pandas Series is a one-dimensional labeled array capable of holding any data type, accessible via custom index labels.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Custom Indexing</h2>\n                <p>Unlike standard Python lists or NumPy arrays that use only numeric 0, 1, 2 indices, a Pandas Series can be indexed by arbitrary labels (e.g. string dates, student names, or physical sensor IDs).</p>\n            </section>\n            ",
      "code": "# Simulating Series with Custom Labels\nreadings = [3.28, 3.31, 3.29, 3.35]\nlabels = [\"09:00\", \"10:00\", \"11:00\", \"12:00\"]\n\n# Mapping labels to values\nseries_map = dict(zip(labels, readings))\n\nprint(\"Time-Indexed Voltage Series:\")\nfor time_label, voltage in series_map.items():\n    print(f\" Time: {time_label} -> {voltage} V\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "How many dimensions does a Pandas Series possess?",
          "options": [
            "1 Dimension",
            "2 Dimensions",
            "3 Dimensions",
            "N Dimensions"
          ],
          "correctIndex": 0,
          "explanation": "A Pandas Series is strictly a 1-dimensional labeled array."
        },
        {
          "type": "multiple-choice",
          "question": "How do you define explicit custom index labels (e.g. ['sample1', 'sample2']) when instantiating `pd.Series([10, 20])`?",
          "options": [
            "pd.Series([10, 20], index=['sample1', 'sample2'])",
            "pd.Series([10, 20], labels=['sample1', 'sample2'])",
            "pd.Series([10, 20]).set_labels(['sample1', 'sample2'])",
            "pd.Series([10, 20], keys=['sample1', 'sample2'])"
          ],
          "correctIndex": 0,
          "explanation": "The `index` keyword argument assigns custom row labels to a Series."
        },
        {
          "type": "multiple-choice",
          "question": "What happens when you add two Pandas Series with different index labels?",
          "options": [
            "Values with matching index labels are added; non-matching indices result in `NaN` (automatic alignment)",
            "An AlignmentError is raised",
            "Values are summed strictly by integer position",
            "The second series is concatenated to the end"
          ],
          "correctIndex": 0,
          "explanation": "Pandas automatically aligns series by index label prior to computation; unaligned labels result in missing values (`NaN`)."
        }
      ]
    },
    "pandas-dataframes": {
      "id": "pandas-dataframes",
      "title": "Pandas DataFrames & Row Indexing (loc vs iloc)",
      "category": "cat-pandas",
      "track": "track-pandas",
      "readTime": "5 min read",
      "lead": "2D tabular data manipulation with Pandas DataFrames: row/column alignment, the loc vs iloc indexing taxonomy, and boolean filtering.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-table\"></i> What is a Pandas DataFrame?</h2>\n            <p>A <strong>DataFrame</strong> is a two-dimensional, size-mutable, and potentially heterogeneous tabular data structure with labeled axes (rows and columns). You can think of a DataFrame as a spreadsheet, an SQL table, or a dictionary of aligned Pandas <code>Series</code> sharing a common index.</p>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-crosshairs\"></i> The Golden Taxonomy: .loc[] vs. .iloc[]</h2>\n            <p>One of the most essential concepts for any data science aspirant is understanding the difference between <code>.loc</code> and <code>.iloc</code>:</p>\n\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr>\n                            <th>Indexer</th>\n                            <th>Basis of Selection</th>\n                            <th>Syntax Example</th>\n                            <th>Stop Index Behavior</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong><code>.loc[]</code></strong></td>\n                            <td><strong>Label-based</strong> (Column names, row index labels)</td>\n                            <td><code>df.loc['row_label', 'ColumnName']</code></td>\n                            <td><strong>Inclusive</strong> of both start AND stop labels! (<code>'A':'C'</code> includes C)</td>\n                        </tr>\n                        <tr>\n                            <td><strong><code>.iloc[]</code></strong></td>\n                            <td><strong>Integer position-based</strong> (0, 1, 2, 3...)</td>\n                            <td><code>df.iloc[0:5, 1:3]</code></td>\n                            <td><strong>Exclusive</strong> of stop integer! (Standard Python half-open slice <code>0:5</code> gives 0, 1, 2, 3, 4)</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </section>\n\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-filter\"></i> Filtering and Masking Rows</h2>\n            <p>Filtering rows in a DataFrame uses boolean indexing:</p>\n            <pre><code># Filter students with score >= 75:\nhigh_scorers = df[df['Score'] >= 75]\n\n# Compound conditions with & (AND) or | (OR):\nphysics_toppers = df[(df['Department'] == 'Physics') & (df['Score'] >= 85)]</code></pre>\n        </section>\n\n        <div class=\"exam-note-box\">\n            <div class=\"exam-note-header\">\n                <i class=\"fa-solid fa-graduation-cap\"></i> Key Takeaways for Competitive Exams & Technical Interviews\n            </div>\n            <ul>\n                <li>Use <code>inplace=True</code> cautiously. Many modern Pandas operations recommend reassigning (<code>df = df.drop(...)</code>) for method chaining and memory predictability.</li>\n            </ul>\n        </div>\n        ",
      "code": "# Simulating DataFrame Indexing\ntable = [\n    {\"ID\": \"P101\", \"Name\": \"Ananya\", \"Marks\": 95},\n    {\"ID\": \"P102\", \"Name\": \"Ravi\", \"Marks\": 88},\n    {\"ID\": \"P103\", \"Name\": \"Sneha\", \"Marks\": 92}\n]\n\n# iloc simulation: integer position 0\nfirst_row = table[0]\nprint(\"First Row (.iloc[0]):\", first_row)\n\n# loc simulation: finding by ID label 'P102'\nloc_match = next(r for r in table if r[\"ID\"] == \"P102\")\nprint(\"Row with ID 'P102' (.loc['P102']):\", loc_match)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which Pandas accessor selects rows and columns strictly by their integer numerical position (0, 1, 2...)?",
          "options": [
            "df.iloc[]",
            "df.loc[]",
            "df.ix[]",
            "df.at[]"
          ],
          "correctIndex": 0,
          "explanation": "df.iloc[] provides purely integer-location based indexing for selection by position."
        },
        {
          "type": "multiple-choice",
          "question": "What is the key difference between `.loc[]` and `.iloc[]` in Pandas DataFrame indexing?",
          "options": [
            "`.loc` is label-based (column names, row labels); `.iloc` is integer position-based (0, 1, 2...)",
            "`.loc` works on columns only; `.iloc` works on rows only",
            "`.iloc` is slower than `.loc`",
            "There is no functional difference"
          ],
          "correctIndex": 0,
          "explanation": "`.loc['2024-01-01', 'Temperature']` selects by label; `.iloc[0, 2]` selects by zero-based integer index."
        },
        {
          "type": "multiple-choice",
          "question": "How do you drop a column named `'unneeded'` from DataFrame `df` in-place?",
          "options": [
            "df.drop(columns=['unneeded'], inplace=True)",
            "df.remove('unneeded')",
            "del df.loc['unneeded']",
            "df.pop_column('unneeded')"
          ],
          "correctIndex": 0,
          "explanation": "`df.drop(columns=[...], inplace=True)` or `df.drop('unneeded', axis=1)` deletes columns directly in memory."
        }
      ]
    },
    "pandas-read-data": {
      "id": "pandas-read-data",
      "title": "Loading Data: pd.read_csv() & pd.read_json()",
      "category": "cat-pandas",
      "track": "track-pandas",
      "readTime": "5 min read",
      "lead": "Importing tabular datasets into DataFrames from Comma-Separated Values (CSV), JavaScript Object Notation (JSON), and relational databases.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>File Ingestion Functions</h2>\n                <p>Pandas provides high-speed C-engine parsers: <code>pd.read_csv('filename.csv')</code> and <code>pd.read_json('filename.json')</code>.</p>\n            </section>\n            ",
      "code": "import json\n\n# Simulating JSON data parsing\njson_str = '{\"Student\":[\"Ravi\",\"Pooja\"],\"Score\":[85,92]}'\nparsed_data = json.loads(json_str)\n\nprint(\"Parsed Tabular JSON structure:\")\nprint(\"Columns:\", list(parsed_data.keys()))\nprint(\"Row 0:\", {k: v[0] for k, v in parsed_data.items()})\nprint(\"Row 1:\", {k: v[1] for k, v in parsed_data.items()})",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What is the primary Pandas function to read a comma-separated values file into a DataFrame?",
          "options": [
            "pd.read_csv()",
            "pd.load_csv()",
            "pd.open_csv()",
            "pd.import_csv()"
          ],
          "correctIndex": 0,
          "explanation": "pd.read_csv(filepath) is the standard method used to load CSV data into a DataFrame."
        },
        {
          "type": "multiple-choice",
          "question": "Which parameter in `pd.read_csv()` allows you to designate a specific column as the row index?",
          "options": [
            "index_col",
            "row_index",
            "key_col",
            "index_name"
          ],
          "correctIndex": 0,
          "explanation": "`index_col='Timestamp'` instructs Pandas to parse that column as the DataFrame's row index."
        },
        {
          "type": "multiple-choice",
          "question": "How do you parse ISO datetime strings into actual `datetime64` objects when loading a CSV?",
          "options": [
            "parse_dates=['DateColumn']",
            "dates=True",
            "convert_datetime=True",
            "auto_dates=True"
          ],
          "correctIndex": 0,
          "explanation": "Passing `parse_dates=['col_name']` enables automatic datetime parsing during CSV ingestion."
        }
      ]
    },
    "pandas-analyzing-data": {
      "id": "pandas-analyzing-data",
      "title": "Analyzing Data: head(), tail(), info() & describe()",
      "category": "cat-pandas",
      "track": "track-pandas",
      "readTime": "5 min read",
      "lead": "Exploratory Data Analysis (EDA): inspecting quick previews with head() and tail(), checking memory and null counts with info(), and calculating statistical summaries with describe().",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>EDA Functions Overview</h2>\n                <ul>\n                <li><code>df.head(n=5)</code>: Inspects first n rows.</li>\n                <li><code>df.tail(n=5)</code>: Inspects last n rows.</li>\n                <li><code>df.info()</code>: Displays total rows, column datatypes, and non-null counts.</li>\n                <li><code>df.describe()</code>: Computes count, mean, std, min, 25%, 50% (median), 75%, and max.</li>\n            </ul>\n            </section>\n            ",
      "code": "# Simulating Statistical Description\ndata_points = [12.0, 15.5, 14.2, 19.8, 22.1, 16.4, 18.0]\n\ncount = len(data_points)\nmean_val = sum(data_points) / count\nmin_val = min(data_points)\nmax_val = max(data_points)\n\nprint(f\"Count: {count}\")\nprint(f\"Mean : {mean_val:.2f}\")\nprint(f\"Min  : {min_val}\")\nprint(f\"Max  : {max_val}\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which Pandas DataFrame method computes summary statistics (count, mean, standard deviation, quartiles) for numeric columns?",
          "options": [
            "df.describe()",
            "df.summary()",
            "df.stats()",
            "df.info()"
          ],
          "correctIndex": 0,
          "explanation": "df.describe() generates descriptive statistics that summarize the central tendency, dispersion, and shape of a dataset's distribution."
        },
        {
          "type": "multiple-choice",
          "question": "Which DataFrame method returns count, mean, standard deviation, min, 25%, 50%, 75%, and max for all numeric columns?",
          "options": [
            "df.describe()",
            "df.info()",
            "df.summary()",
            "df.stats()"
          ],
          "correctIndex": 0,
          "explanation": "`df.describe()` computes summary statistics of all numeric features in one concise table."
        },
        {
          "type": "multiple-choice",
          "question": "What does `df.info()` display about a DataFrame?",
          "options": [
            "Memory footprint, column names, non-null counts, and data types (dtypes)",
            "The first 5 rows of data",
            "A correlation matrix of columns",
            "The SQL database connection parameters"
          ],
          "correctIndex": 0,
          "explanation": "`df.info()` provides essential metadata about column data types and missing value counts."
        }
      ]
    },
    "pandas-cleaning-data": {
      "id": "pandas-cleaning-data",
      "title": "Data Cleaning: Handling Nulls, Formats & Duplicates",
      "category": "cat-pandas",
      "track": "track-pandas",
      "readTime": "6 min read",
      "lead": "Preparing raw data for scientific analysis: detecting missing values (isna), dropping rows (dropna), imputing values (fillna), fixing formats (to_datetime), and eliminating duplicates (drop_duplicates).",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Data Cleaning Pipeline</h2>\n                <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Issue</th><th>Pandas Tool / Method</th><th>Strategy</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><strong>Missing / Empty Cells</strong></td><td><code>dropna(inplace=True)</code> or <code>fillna(val)</code></td><td>Remove incomplete rows or impute with mean/median</td></tr>\n                        <tr><td><strong>Incorrect Formats</strong></td><td><code>pd.to_datetime(col)</code> or <code>col.astype()</code></td><td>Parse into proper ISO datetime or numeric types</td></tr>\n                        <tr><td><strong>Duplicate Records</strong></td><td><code>df.drop_duplicates(inplace=True)</code></td><td>Remove identical rows across key columns</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            </section>\n            ",
      "code": "# Data Cleaning Simulation\nraw_records = [\n    {\"sensor\": \"S1\", \"temp\": 24.5},\n    {\"sensor\": \"S2\", \"temp\": None},   # Missing value\n    {\"sensor\": \"S1\", \"temp\": 24.5},   # Duplicate\n    {\"sensor\": \"S3\", \"temp\": 26.1}\n]\n\n# 1. Clean missing values\ncleaned_no_nulls = [r for r in raw_records if r[\"temp\"] is not None]\n# 2. Remove duplicates\nunique_records = []\nseen = set()\nfor r in cleaned_no_nulls:\n    key = (r[\"sensor\"], r[\"temp\"])\n    if key not in seen:\n        seen.add(key)\n        unique_records.append(r)\n\nprint(\"Original Record Count:\", len(raw_records))\nprint(\"Cleaned & Deduplicated Records:\", unique_records)",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which method drops all rows containing null / NaN values from a Pandas DataFrame?",
          "options": [
            "df.dropna()",
            "df.drop_null()",
            "df.clean_na()",
            "df.remove_empty()"
          ],
          "correctIndex": 0,
          "explanation": "df.dropna() removes missing values by dropping rows (or columns) that contain null values."
        },
        {
          "type": "multiple-choice",
          "question": "Which method replaces all `NaN` (missing values) in a DataFrame with a replacement value like `0`?",
          "options": [
            "df.fillna(0)",
            "df.replace_na(0)",
            "df.impute(0)",
            "df.clean_nulls(0)"
          ],
          "correctIndex": 0,
          "explanation": "`df.fillna(value)` fills missing/NA cells with specified scalar values or column medians/means."
        },
        {
          "type": "multiple-choice",
          "question": "How do you remove all completely duplicate rows from DataFrame `df`?",
          "options": [
            "df.drop_duplicates(inplace=True)",
            "df.remove_clones()",
            "df.unique_rows()",
            "df.dedupe()"
          ],
          "correctIndex": 0,
          "explanation": "`df.drop_duplicates()` identifies and removes identical repeating rows."
        }
      ]
    },
    "pandas-correlations-plotting": {
      "id": "pandas-correlations-plotting",
      "title": "Pandas Correlations (corr) & Built-in Plotting",
      "category": "cat-pandas",
      "track": "track-pandas",
      "readTime": "5 min read",
      "lead": "Analyzing statistical relationships using Pearson correlation coefficients with df.corr(), and visualizing distributions directly using df.plot().",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Pearson Correlation Coefficient (r)</h2>\n                <p>The correlation matrix calculated by <code>df.corr()</code> produces values from <strong>-1.0 to +1.0</strong>:</p>\n            <ul>\n                <li><strong>1.0:</strong> Perfect positive correlation (as x increases, y increases proportionally).</li>\n                <li><strong>0.0:</strong> No linear relationship.</li>\n                <li><strong>-1.0:</strong> Perfect negative correlation.</li>\n            </ul>\n            </section>\n            ",
      "code": "# Pearson Correlation Principle\n# Hooke's Law: Force (N) vs Spring Extension (cm)\nforce = [1.0, 2.0, 3.0, 4.0, 5.0]\nextension = [2.1, 4.0, 6.2, 7.9, 10.1]\n\n# In Pandas: df.corr() computes correlation matrix\n# Both increase proportionally -> Correlation is close to +1.0\nprint(\"Force (N)    :\", force)\nprint(\"Extension (cm):\", extension)\nprint(\"Estimated Linear Correlation r \u2248 +0.999 (Strong Positive Hooke's Law Agreement)\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What does a correlation coefficient of +1.0 between two columns indicate?",
          "options": [
            "A perfect positive linear relationship",
            "Zero relationship between variables",
            "A perfect negative relationship",
            "The columns contain identical string text"
          ],
          "correctIndex": 0,
          "explanation": "A correlation of +1.0 indicates that as one variable increases, the other increases in exact linear proportion."
        },
        {
          "type": "multiple-choice",
          "question": "What correlation coefficient method does `df.corr()` compute by default?",
          "options": [
            "Pearson correlation coefficient",
            "Spearman rank correlation",
            "Kendall Tau",
            "Cosine similarity"
          ],
          "correctIndex": 0,
          "explanation": "`df.corr(method='pearson')` calculates standard Pearson linear correlation coefficients ranging from -1 to +1."
        },
        {
          "type": "multiple-choice",
          "question": "How do you create a quick scatter plot between `'voltage'` and `'current'` using Pandas' built-in plotting wrapper?",
          "options": [
            "df.plot(kind='scatter', x='voltage', y='current')",
            "df.scatter('voltage', 'current')",
            "df.plot_points('voltage', 'current')",
            "df.graph('scatter')"
          ],
          "correctIndex": 0,
          "explanation": "`df.plot(kind='scatter', x=..., y=...)` invokes Matplotlib under the hood to render a scatter diagram."
        }
      ]
    },
    "scipy-intro-constants": {
      "id": "scipy-intro-constants",
      "title": "SciPy Introduction & Physical Constants",
      "category": "cat-scipy",
      "track": "track-scipy",
      "readTime": "7 min read",
      "lead": "SciPy (Scientific Python) builds upon NumPy to provide high-level algorithms for scientific computing, physics calculations, numerical calculus, and standardized CODATA fundamental physical constants.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>CODATA Standardized Physical Constants:</strong> The <code>scipy.constants</code> module embeds authoritative CODATA recommended values for universal constants (c, h, G, e, k, etc.) along with comprehensive unit conversion factors. This guarantees consistency across scientific calculations without hardcoding error-prone magic numbers.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>What is SciPy & How Does it Extend NumPy?</h2>\n                <p>While NumPy provides the low-level multidimensional <code>ndarray</code> and fundamental vectorized arithmetic, <strong>SciPy</strong> provides the higher-level numerical routines required for professional scientific research and engineering:</p>\n            <ul>\n                <li><code>scipy.constants</code>: Standard physical constants and SI unit conversion factors.</li>\n                <li><code>scipy.optimize</code>: Root-finding, non-linear least squares curve fitting, and minimization.</li>\n                <li><code>scipy.integrate</code>: Numerical integration and solving Ordinary Differential Equations (ODEs).</li>\n                <li><code>scipy.interpolate</code>: Smoothing splines and continuous function approximations from discrete data.</li>\n                <li><code>scipy.fft</code>: Fast Fourier Transforms for spectral analysis and signal processing.</li>\n                <li><code>scipy.linalg</code>: Advanced linear algebra (matrix decompositions: LU, QR, SVD, Cholesky).</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>CODATA Fundamental Physical Constants</h2>\n                <p>Scientific calculations must never rely on hardcoded magic numbers with arbitrary rounding. The <code>scipy.constants</code> submodule provides exact, internationally recognized <strong>CODATA (Committee on Data for Science and Technology)</strong> recommended values:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Physical Constant</th><th>Symbol in scipy.constants</th><th>Exact SI Value</th><th>Physical Significance</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Speed of Light in Vacuum</strong></td>\n                            <td><code>constants.c</code></td>\n                            <td>299,792,458 m/s</td>\n                            <td>Universal speed limit and spacetime constant ($E=mc^2$).</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Planck Constant</strong></td>\n                            <td><code>constants.h</code></td>\n                            <td>6.62607015 \u00d7 10\u207b\u00b3\u2074 J\u00b7s</td>\n                            <td>Defines quantum of action and photon energy ($E = h\\nu$).</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Gravitational Constant</strong></td>\n                            <td><code>constants.G</code></td>\n                            <td>6.67430 \u00d7 10\u207b\u00b9\u00b9 m\u00b3/(kg\u00b7s\u00b2)</td>\n                            <td>Universal Newtonian gravitational attraction coupling.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Elementary Charge</strong></td>\n                            <td><code>constants.e</code></td>\n                            <td>1.602176634 \u00d7 10\u207b\u00b9\u2079 C</td>\n                            <td>Electric charge carried by a single proton or electron.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Electron Rest Mass</strong></td>\n                            <td><code>constants.m_e</code></td>\n                            <td>9.1093837015 \u00d7 10\u207b\u00b3\u00b9 kg</td>\n                            <td>Subatomic mass determining atomic orbital radii.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Boltzmann Constant</strong></td>\n                            <td><code>constants.k</code></td>\n                            <td>1.380649 \u00d7 10\u207b\u00b2\u00b3 J/K</td>\n                            <td>Relates kinetic energy of particles with thermodynamic temperature ($E = k_B T$).</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Avogadro Constant</strong></td>\n                            <td><code>constants.N_A</code></td>\n                            <td>6.02214076 \u00d7 10\u00b2\u00b3 mol\u207b\u00b9</td>\n                            <td>Number of constituent particles in one mole of substance.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <p><strong>SI Unit Conversions:</strong> <code>scipy.constants</code> also includes exact conversion multipliers: <code>constants.electron_volt</code> (eV to Joules), <code>constants.angstrom</code> (10\u207b\u00b9\u2070 m), <code>constants.astronomical_unit</code> (AU in meters), and metric prefixes (<code>constants.kilo</code>, <code>constants.micro</code>, <code>constants.nano</code>).</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Key Advantages &amp; Strengths</h2>\n                <ul>\n                <li><strong>Eliminates Precision Errors:</strong> Eliminates human truncation errors (e.g. typing <code>3.14</code> instead of <code>pi</code> or <code>3e8</code> instead of exact $c$).</li>\n                <li><strong>SI Traceability:</strong> All constants match the revised 2019 SI definitions anchored to exact invariant constants of nature.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Disadvantages &amp; Limitations</h2>\n                <ul>\n                <li><strong>Scalar Overheads:</strong> While constants are exact floats, evaluating single scalar formulas in Python is slower than vectorized array computations; always combine with NumPy arrays for batch calculations.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Real-World Scientific &amp; Data Science Applications</h2>\n                <div class=\"callout-tip\">\n                <div class=\"callout-title\">Interdisciplinary Laboratory Calculations</div>\n                <div class=\"callout-body\">\n                    <ul>\n                        <li><strong>Modern Physics &amp; Optics:</strong> Calculating the de Broglie wavelength of matter waves ($\\lambda = \\frac{h}{p}$) and photon transition energies.</li>\n                        <li><strong>Physical Chemistry:</strong> Determining reaction rate constants via the Arrhenius equation and molar gas volumes ($PV = nRT$).</li>\n                        <li><strong>Astrophysics:</strong> Calculating orbital velocities, escape velocities, and gravitational redshifts around stellar bodies.</li>\n                    </ul>\n                </div>\n            </div>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Access to official CODATA standard values eliminates typographical calculation errors.</li><li>Built-in conversion helpers for imperial, metric, and astronomical units.</li><li>Full compatibility with NumPy vectors and SciPy algorithms.</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Values represent fixed precision floats; extreme relativistic calculations may require arbitrary precision libraries.</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Calculating photon energy and wavelength relationships in quantum optics (E = hc/\u03bb).</li><li>Gravitational force and orbital period calculations in astrophysics.</li><li>Thermal physics calculations of molecular kinetic energy (3/2 kT).</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "import scipy.constants as const\nimport numpy as np\n\n# Interdisciplinary Physics: Photon Energy & De Broglie Wavelength\n# Wavelengths across visible spectrum: 400 nm (violet) to 700 nm (red)\nwavelengths_nm = np.array([400.0, 450.0, 500.0, 550.0, 600.0, 650.0, 700.0])\nwavelengths_m = wavelengths_nm * const.nano\n\n# Photon Energy: E = h * c / lambda\nenergy_joules = (const.h * const.c) / wavelengths_m\n# Convert Joules to Electron-Volts (eV)\nenergy_ev = energy_joules / const.electron_volt\n\nprint(\"Photon Energies across Visible Spectrum:\")\nprint(\"-\" * 50)\nfor wl, e_ev in zip(wavelengths_nm, energy_ev):\n    print(f\" Wavelength: {wl:5.1f} nm  -->  Photon Energy: {e_ev:.3f} eV\")\n\n# Verify Speed of Light\nprint(\"-\" * 50)\nprint(f\"CODATA Speed of Light (c): {const.c:,} m/s\")\nprint(f\"CODATA Planck Constant (h): {const.h:.6e} J*s\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which SciPy submodule provides access to standardized CODATA physical and mathematical constants?",
          "options": [
            "scipy.constants",
            "scipy.physics",
            "scipy.values",
            "scipy.codata"
          ],
          "correctIndex": 0,
          "explanation": "scipy.constants provides exact standardized CODATA fundamental physical constants and unit conversion multipliers."
        },
        {
          "type": "multiple-choice",
          "question": "Which sub-package in SciPy provides fundamental physical constants like Planck's constant (h) and speed of light (c)?",
          "options": [
            "scipy.constants",
            "scipy.physics",
            "scipy.units",
            "scipy.si"
          ],
          "correctIndex": 0,
          "explanation": "`from scipy import constants` provides exact values for `constants.c`, `constants.h`, `constants.G`, etc."
        },
        {
          "type": "multiple-choice",
          "question": "What is the speed of light in vacuum accessible as in `scipy.constants`?",
          "options": [
            "constants.c",
            "constants.speed_of_light",
            "constants.light",
            "Both constants.c and constants.speed_of_light"
          ],
          "correctIndex": 3,
          "explanation": "Both `constants.c` and its full alias `constants.speed_of_light` evaluate to 299,792,458.0 m/s."
        }
      ]
    },
    "scipy-optimizers": {
      "id": "scipy-optimizers",
      "title": "SciPy Optimizers & Root Finding",
      "category": "cat-scipy",
      "track": "track-scipy",
      "readTime": "7 min read",
      "lead": "Solving equations and fitting experimental data: Numerical root-finding with scipy.optimize.root, function minimization with optimize.minimize, and empirical curve fitting with optimize.curve_fit.",
      "htmlContent": "\n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-microchip\"></i> Conceptual Depth & Under-the-Hood Mechanics</h2>\n            <p><strong>Gradient Descent & Quasi-Newton Algorithms:</strong> <code>scipy.optimize</code> provides algorithms (BFGS, Nelder-Mead, Powell, Conjugate Gradient) to find minimum energy configurations or roots of non-linear equations by calculating local gradients and Hessian approximations iteratively.</p>\n        </section>\n        \n            <section class=\"pedagogy-section\">\n                <h2>What is Root Finding & Why Does Science Need It?</h2>\n                <p><strong>Definition:</strong> A <strong>root</strong> (or zero) of a mathematical function $f(x)$ is an input value $x^*$ such that $f(x^*) = 0$.</p>\n            <p>In scientific research and engineering, most realistic governing equations are transcendental or non-linear (e.g., $x e^x - \\cos(x) = 0$), possessing no closed-form algebraic solutions. Numerical root finding iteratively approximates the roots with arbitrary decimal precision.</p>\n            <p><strong>Key Function: <code>scipy.optimize.root(fun, x0, method='hybr')</code></strong></p>\n            <ul>\n                <li><code>fun</code>: The objective function returning $f(x)$.</li>\n                <li><code>x0</code>: An initial guess point. A good initial guess prevents convergence to alternate local roots.</li>\n                <li><code>result.x</code>: The converged root coordinate.</li>\n                <li><code>result.success</code>: Boolean confirming whether the algorithm satisfied convergence tolerance.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Scalar and Multivariable Function Minimization</h2>\n                <p><strong>Definition:</strong> Optimization finds the set of parameters $\\vec{x}$ that minimizes an objective cost function $f(\\vec{x})$.</p>\n            <p><strong>Key Function: <code>scipy.optimize.minimize(fun, x0, method='BFGS', bounds=...)</code></strong></p>\n            <ul>\n                <li><strong>Unconstrained Optimization:</strong> Algorithms like <code>BFGS</code> (Broyden\u2013Fletcher\u2013Goldfarb\u2013Shanno quasi-Newton method) or <code>Nelder-Mead</code> (simplex method, gradient-free).</li>\n                <li><strong>Constrained Optimization:</strong> Enforcing physical boundaries (e.g., temperatures cannot be below 0 Kelvin, concentrations cannot be negative) using <code>bounds=[(min, max), ...]</code> and <code>method='L-BFGS-B'</code>.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Non-Linear Experimental Curve Fitting: curve_fit()</h2>\n                <p>In laboratory experiments, researchers propose a theoretical model function (e.g. exponential decay $y = A e^{-\\lambda t}$) and seek parameters that fit noisy sensor measurements.</p>\n            <p><code>popt, pcov = scipy.optimize.curve_fit(model_func, x_data, y_data, p0=[guess_A, guess_lambda])</code></p>\n            <ul>\n                <li><code>popt</code>: Optimal parameters minimizing the sum of squared residuals.</li>\n                <li><code>pcov</code>: Estimated covariance matrix; the square root of its diagonal gives the one-standard-deviation statistical error for each parameter!</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Key Advantages &amp; Strengths</h2>\n                <ul>\n                <li><strong>Robust Industrial Solvers:</strong> Implements battle-tested Fortran and C numerical libraries (MINPACK, QUADPACK).</li>\n                <li><strong>Automated Convergence:</strong> Automatically evaluates step size, Hessian approximations, and stopping criteria.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Disadvantages &amp; Limitations</h2>\n                <ul>\n                <li><strong>Local Minima Trapping:</strong> Gradient-based optimizers can get trapped in local minima rather than finding the global minimum; multi-start or simulated annealing (<code>scipy.optimize.dual_annealing</code>) may be needed for rugged landscapes.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Real-World Scientific &amp; Data Science Applications</h2>\n                <div class=\"callout-tip\">\n                <div class=\"callout-title\">Equilibrium &amp; Half-Life Extraction</div>\n                <div class=\"callout-body\">\n                    <p>In nuclear physics, <code>curve_fit</code> extracts radioactive decay constants and half-lives from Geiger counter counts. In chemistry, <code>root</code> finds thermodynamic chemical equilibrium concentrations from non-linear mass action equations.</p>\n                </div>\n            </div>\n            </section>\n            \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-scale-balanced\"></i> Architectural Evaluation: Advantages & Disadvantages</h2>\n            <div class=\"callout-box tip\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-thumbs-up\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Key Advantages & Strengths</div>\n                    <ul><li>Fast convergence on complex multi-variable objective functions.</li><li>Supports constrained optimization (bounds, equality, and inequality constraints).</li><li>Automatic numerical estimation of Jacobian and Hessian matrices.</li></ul>\n                </div>\n            </div>\n            <div class=\"callout-box warning\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-triangle-exclamation\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Disadvantages & Limitations</div>\n                    <ul><li>Can become trapped in local minima if initial estimates (x0) are chosen poorly.</li><li>Discontinuous objective functions can cause gradient-based solvers to fail.</li></ul>\n                </div>\n            </div>\n        </section>\n        \n        <section class=\"pedagogy-section\">\n            <h2><i class=\"fa-solid fa-flask-vial\"></i> Real-World Scientific & Data Science Applications</h2>\n            <div class=\"callout-box academic\">\n                <div class=\"callout-icon\"><i class=\"fa-solid fa-flask\"></i></div>\n                <div class=\"callout-content\">\n                    <div class=\"callout-title\">Interdisciplinary Science & Data Science Use-Cases</div>\n                    <ul><li>Finding potential energy minima in molecular and crystalline lattice structures.</li><li>Non-linear curve fitting to extract physical constants from experimental data.</li><li>Equilibrium trajectory optimization in aerospace and orbital mechanics.</li></ul>\n                </div>\n            </div>\n        </section>\n        ",
      "code": "import numpy as np\n\n# Interdisciplinary Science: Newton-Raphson Root Finding Simulation\n# Problem: Find equilibrium state where f(x) = x^3 - 2*x - 5 = 0\n# Analytical Derivative: f'(x) = 3*x^2 - 2\n\ndef f(x):\n    return x**3 - 2*x - 5\n\ndef f_prime(x):\n    return 3*x**2 - 2\n\n# Iterative solver simulation\nx_current = 2.0  # Initial guess\ntolerance = 1e-7\nmax_iterations = 20\n\nprint(f\"Finding root of f(x) = x^3 - 2x - 5 with initial guess x0 = {x_current}\")\nprint(\"-\" * 55)\n\nfor iteration in range(1, max_iterations + 1):\n    fx = f(x_current)\n    fpx = f_prime(x_current)\n    x_next = x_current - fx / fpx\n    diff = abs(x_next - x_current)\n    \n    print(f\" Iteration {iteration:2d}: x = {x_next:.8f}  |  f(x) = {fx:+.6e}\")\n    \n    if diff < tolerance:\n        print(\"-\" * 55)\n        print(f\"Converged to root x* = {x_next:.8f} in {iteration} iterations!\")\n        break\n    x_current = x_next",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which SciPy function performs non-linear least squares regression to fit empirical data to any custom user-defined theoretical model?",
          "options": [
            "scipy.optimize.curve_fit",
            "scipy.optimize.linear_fit",
            "scipy.optimize.model_solve",
            "scipy.optimize.regression"
          ],
          "correctIndex": 0,
          "explanation": "scipy.optimize.curve_fit uses non-linear least squares to fit a function to experimental data."
        },
        {
          "type": "multiple-choice",
          "question": "Which function in `scipy.optimize` finds the local minimum of a scalar function?",
          "options": [
            "scipy.optimize.minimize_scalar()",
            "scipy.optimize.find_min()",
            "scipy.optimize.gradient_descent()",
            "scipy.optimize.least_val()"
          ],
          "correctIndex": 0,
          "explanation": "`minimize_scalar()` uses Brent's or Golden-section search methods to optimize 1D scalar cost functions."
        },
        {
          "type": "multiple-choice",
          "question": "Which algorithm does `scipy.optimize.root()` use by default for general non-linear equation systems?",
          "options": [
            "HYBR (modified Powell hybrid method)",
            "Newton-Raphson",
            "Bisection",
            "Simulated Annealing"
          ],
          "correctIndex": 0,
          "explanation": "The hybrid Powell method (`hybr`) combines gradient descent and Newton steps for robust non-linear root solving."
        }
      ]
    },
    "scipy-sparse-graphs": {
      "id": "scipy-sparse-graphs",
      "title": "Sparse Matrices & Graph Algorithms",
      "category": "cat-scipy",
      "track": "track-scipy",
      "readTime": "7 min read",
      "lead": "Eliminating memory bottlenecks in large systems: Compressed Sparse Row (CSR) matrices with scipy.sparse, and shortest path graph algorithms with scipy.sparse.csgraph.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>The Sparse Matrix Principle: Why Store Zeros?</h2>\n                <p><strong>Definition:</strong> A matrix is considered <strong>sparse</strong> if the overwhelming majority of its elements are zero. Conversely, a matrix where most elements are non-zero is called <strong>dense</strong>.</p>\n            <p><strong>The Memory Crisis:</strong> Consider a finite-element physics grid or social network graph with 100,000 nodes. A standard dense 2D array would require:\n            <br><code>100,000 \u00d7 100,000 \u00d7 8 bytes = 80 Gigabytes of RAM!</code>\n            <br>If only 0.01% of entries are non-zero, 79.99 Gigabytes of RAM are wasted storing zeros. <strong>Sparse matrix formats store only the non-zero values along with their coordinate indices</strong>, reducing memory consumption to mere megabytes!</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>CSR vs. CSC vs. COO Formats</h2>\n                <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Format</th><th>Full Name</th><th>Primary Strength</th><th>Optimal Use Case</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><code>csr_matrix</code></td>\n                            <td>Compressed Sparse Row</td>\n                            <td>Fast row slicing and matrix-vector multiplication.</td>\n                            <td>Iterative numerical solvers (e.g. solving $A\\vec{x} = \\vec{b}$).</td>\n                        </tr>\n                        <tr>\n                            <td><code>csc_matrix</code></td>\n                            <td>Compressed Sparse Column</td>\n                            <td>Fast column slicing and extraction.</td>\n                            <td>Column-oriented operations and inverse transforms.</td>\n                        </tr>\n                        <tr>\n                            <td><code>coo_matrix</code></td>\n                            <td>Coordinate List format</td>\n                            <td>Fast, simple matrix assembly from raw tuples.</td>\n                            <td>Initial creation; easily converts to CSR via <code>.tocsr()</code>.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Graph Algorithms: scipy.sparse.csgraph</h2>\n                <p>A sparse matrix directly represents the <strong>adjacency matrix</strong> of a network or physical mesh (where <code>matrix[i, j]</code> is the weight of the edge connecting node $i$ to node $j$).</p>\n            <ul>\n                <li><code>csgraph.dijkstra(csgraph, indices=0)</code>: Computes the shortest path from a source node to all other nodes.</li>\n                <li><code>csgraph.minimum_spanning_tree(csgraph)</code>: Computes the minimal connection tree spanning all nodes without cycles.</li>\n                <li><code>csgraph.connected_components(csgraph)</code>: Identifies isolated sub-graphs or clusters.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Key Advantages &amp; Strengths</h2>\n                <ul>\n                <li><strong>Scalability:</strong> Makes solving differential equation systems with millions of grid cells feasible on a standard laptop.</li>\n                <li><strong>Algorithmic Efficiency:</strong> Matrix-vector products skip zero additions entirely, yielding 100x speedups.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Disadvantages &amp; Limitations</h2>\n                <ul>\n                <li><strong>Item Assignment Penalty:</strong> Modifying the sparsity structure (e.g., assigning a new non-zero into an existing CSR matrix) requires expensive memory reallocations. Always build as COO or list first, then convert.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Real-World Scientific &amp; Data Science Applications</h2>\n                <div class=\"callout-tip\">\n                <div class=\"callout-title\">Circuit Meshes &amp; Quantum Hamiltonian Matrices</div>\n                <div class=\"callout-body\">\n                    <p>In electrical engineering, nodal analysis of electrical grids produces sparse admittance matrices. In quantum physics, spin-chain Hamiltonians across multi-qubit systems are overwhelmingly sparse.</p>\n                </div>\n            </div>\n            </section>\n            ",
      "code": "# Sparse Matrix Principle & Memory Savings Demonstration\nimport sys\n\n# Dense representation: 5x5 grid with mostly zeros\ndense_matrix = [\n    [0, 0, 0, 0, 0],\n    [7, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0],\n    [0, 0, 0, 9, 0],\n    [0, 0, 0, 0, 3]\n]\n\n# Compressed Sparse Row (CSR) Representation\nnon_zero_values = []\nrow_indices = []\ncol_indices = []\n\nfor r_idx, row in enumerate(dense_matrix):\n    for c_idx, val in enumerate(row):\n        if val != 0:\n            non_zero_values.append(val)\n            row_indices.append(r_idx)\n            col_indices.append(c_idx)\n\nprint(\"Original Dense Grid Dimensions: 5 rows x 5 columns (25 cells)\")\nprint(f\"Total Non-Zero Elements Stored: {len(non_zero_values)}\")\nprint(\"-\" * 50)\nprint(\"CSR Non-Zero Triplet Format (Value, Row, Column):\")\nfor v, r, c in zip(non_zero_values, row_indices, col_indices):\n    print(f\"  Value = {v} at Coordinate Grid Position [Row {r}, Col {c}]\")\n\nprint(\"-\" * 50)\nsparsity_percent = (1.0 - (len(non_zero_values) / 25.0)) * 100\nprint(f\"Matrix Sparsity: {sparsity_percent:.1f}% empty zeros conserved!\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What does 'CSR' stand for in SciPy's sparse matrix library?",
          "options": [
            "Compressed Sparse Row",
            "Column Sparse Reduction",
            "Coordinate Scaled Representation",
            "Compact Symmetric Range"
          ],
          "correctIndex": 0,
          "explanation": "CSR stands for Compressed Sparse Row, the standard high-performance format for sparse matrix arithmetic."
        },
        {
          "type": "multiple-choice",
          "question": "What sparse matrix format in `scipy.sparse` is optimal for fast row slicing and matrix-vector multiplication?",
          "options": [
            "CSR (Compressed Sparse Row)",
            "LIL (List of Lists)",
            "DOK (Dictionary of Keys)",
            "COO (Coordinate format)"
          ],
          "correctIndex": 0,
          "explanation": "CSR format stores values in contiguous row pointer arrays, maximizing cache performance during matrix vector multiplications."
        },
        {
          "type": "multiple-choice",
          "question": "Which algorithm in `scipy.sparse.csgraph` computes all-pairs shortest paths on a weighted graph in \\(O(V^3)\\) time?",
          "options": [
            "floyd_warshall()",
            "dijkstra()",
            "bellman_ford()",
            "breadth_first_order()"
          ],
          "correctIndex": 0,
          "explanation": "`csgraph.floyd_warshall()` solves all-pairs shortest path problems on dense or sparse adjacency matrices."
        }
      ]
    },
    "scipy-spatial-interpolation": {
      "id": "scipy-spatial-interpolation",
      "title": "Spatial KD-Trees & 1D/Spline Interpolation",
      "category": "cat-scipy",
      "track": "track-scipy",
      "readTime": "7 min read",
      "lead": "Searching multi-dimensional metric spaces using scipy.spatial.KDTree, computing distance metrics, and estimating intermediate unmeasured values with scipy.interpolate.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>What is a KD-Tree (K-Dimensional Tree)?</h2>\n                <p><strong>Definition:</strong> A <strong>KD-Tree</strong> is a space-partitioning data structure that organizes points in a $k$-dimensional space.</p>\n            <p><strong>The Scientific Problem:</strong> Given 100,000 sensor coordinates, which sensor is closest to an earthquake epicenter? A brute-force linear search checks every single point, requiring $O(N)$ time. A <code>scipy.spatial.KDTree</code> recursively splits coordinates along alternating dimensions, allowing <strong>nearest-neighbor lookups in $O(\\log N)$ time</strong>!</p>\n            <p><strong>Key Methods:</strong></p>\n            <ul>\n                <li><code>tree = scipy.spatial.KDTree(points)</code>: Builds the balanced spatial partition.</li>\n                <li><code>distance, index = tree.query(query_point, k=1)</code>: Returns the Euclidean distance and index of the closest neighbor (or $k$ closest neighbors).</li>\n                <li><code>indices = tree.query_ball_point(query_point, r=radius)</code>: Finds all points located within a spherical radius $r$.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>What is Interpolation (scipy.interpolate)?</h2>\n                <p><strong>Definition:</strong> <strong>Interpolation</strong> is the mathematical method of estimating unknown values that fall <em>between</em> existing discrete known data points.</p>\n            <p><strong>Common Interpolation Methods:</strong></p>\n            <ul>\n                <li><strong>Linear Interpolation (<code>kind='linear'</code>):</strong> Connects neighboring data points with straight lines. Simple, but produces sharp, unphysical kinks.</li>\n                <li><strong>Cubic Spline (<code>kind='cubic'</code>):</strong> Fits piece-wise 3rd-degree polynomials such that the 1st and 2nd derivatives are continuous across points, producing perfectly smooth, physical curves.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Key Advantages &amp; Strengths</h2>\n                <ul>\n                <li><strong>Continuous Physical Modeling:</strong> Converts discrete instrument readings into a smooth, queryable continuous function.</li>\n                <li><strong>Fast Spatial Analytics:</strong> KD-Trees enable real-time tracking in astronomical catalogs, particle simulations, and geospatial GIS maps.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Disadvantages &amp; Pitfalls</h2>\n                <ul>\n                <li><strong>Extrapolation Hazard:</strong> Interpolation is only valid <em>inside</em> the range of known data points. Querying points outside the measured domain (extrapolation) can diverge wildly, especially with higher-order polynomials (Runge's phenomenon).</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Real-World Scientific &amp; Data Science Applications</h2>\n                <div class=\"callout-tip\">\n                <div class=\"callout-title\">Meteorological Grids &amp; Particle Collisions</div>\n                <div class=\"callout-body\">\n                    <p>In meteorology, KD-Trees match GPS coordinates to the nearest weather station, while spline interpolation creates smooth temperature contour maps from discrete station measurements. In particle physics, KD-Trees identify nearest collision vertices.</p>\n                </div>\n            </div>\n            </section>\n            ",
      "code": "# Linear & Spline Interpolation Concept\n# Experimental Calibration Data: Discrete voltage measurements at temperatures\ntemp_known = [10.0, 20.0, 30.0, 40.0, 50.0]        # Celsius\nvoltage_known = [1.25, 2.48, 3.82, 5.10, 6.45]     # Volts\n\n# Desired query: What is the voltage at an unmeasured temperature T = 27.5 \u00b0C?\ntarget_temp = 27.5\n\n# Step 1: Find neighboring calibration bounding points\nfor i in range(len(temp_known) - 1):\n    if temp_known[i] <= target_temp <= temp_known[i+1]:\n        x0, x1 = temp_known[i], temp_known[i+1]\n        y0, y1 = voltage_known[i], voltage_known[i+1]\n        break\n\n# Step 2: Linear interpolation formula: y = y0 + (x - x0) * (y1 - y0) / (x1 - x0)\ninterpolated_voltage = y0 + (target_temp - x0) * ((y1 - y0) / (x1 - x0))\n\nprint(\"Sensor Calibration Benchmark:\")\nprint(f\" Known Lower Bound: {x0}\u00b0C -> {y0} V\")\nprint(f\" Known Upper Bound: {x1}\u00b0C -> {y1} V\")\nprint(\"-\" * 45)\nprint(f\"Interpolated Voltage at {target_temp}\u00b0C: {interpolated_voltage:.3f} Volts\")",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which spatial data structure enables fast O(log n) nearest-neighbor searches in multi-dimensional space?",
          "options": [
            "KDTree",
            "BTree",
            "HashTable",
            "LinearArray"
          ],
          "correctIndex": 0,
          "explanation": "scipy.spatial.KDTree partitions k-dimensional space to perform O(log n) nearest-neighbor queries."
        },
        {
          "type": "multiple-choice",
          "question": "Which spatial data structure in `scipy.spatial` accelerates nearest-neighbor searches in multi-dimensional space to \\(O(\\log N)\\)?",
          "options": [
            "KDTree (or cKDTree)",
            "QuadTree",
            "RTree",
            "VoronoiTree"
          ],
          "correctIndex": 0,
          "explanation": "`scipy.spatial.cKDTree` builds a C-optimized k-dimensional tree for lightning-fast spatial queries."
        },
        {
          "type": "multiple-choice",
          "question": "Which class in `scipy.interpolate` produces a smooth cubic spline curve passing through discrete experimental calibration points?",
          "options": [
            "CubicSpline",
            "LinearNDInterpolator",
            "NearestNDInterpolator",
            "SplineWrapper"
          ],
          "correctIndex": 0,
          "explanation": "`CubicSpline(x, y)` generates piecewise 3rd-degree polynomials with continuous 1st and 2nd derivatives."
        }
      ]
    },
    "matplotlib-intro-pyplot": {
      "id": "matplotlib-intro-pyplot",
      "title": "Matplotlib Introduction & Pyplot",
      "category": "cat-matplotlib",
      "track": "track-matplotlib",
      "readTime": "7 min read",
      "lead": "Matplotlib is Python's premier scientific visualization library created by John D. Hunter. It delivers complete programmatic control over publication-grade 2D figures, axes, coordinates, and graphical output.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>The Architecture: Figure vs. Axes vs. Axis</h2>\n                <p>To master Matplotlib, one must understand its foundational hierarchical architecture. A plot is not a flat canvas, but an organized hierarchy of graphic objects:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Component</th><th>Analogy</th><th>Scientific Definition &amp; Scope</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Figure</strong></td>\n                            <td>The Paper Sheet</td>\n                            <td>The top-level container window that encompasses everything: all subplots, titles, legends, colorbars, and annotations. Created via <code>plt.figure(figsize=(w, h))</code>.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Axes</strong></td>\n                            <td>The Graph Box</td>\n                            <td>The actual plotting coordinate region where data curves live. An Axes object contains coordinate systems, spines, tick marks, and labels. A single Figure can contain one or multiple Axes (subplots).</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Axis</strong></td>\n                            <td>The Number Line</td>\n                            <td>The numerical scale lines (X-axis and Y-axis). They define the data bounds, generate tick intervals, tick markers, and axis labels.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Artist</strong></td>\n                            <td>The Visible Elements</td>\n                            <td>Every visible element on the figure\u2014lines, text, rectangles, circles, markers\u2014is an Artist object that knows how to render itself onto the canvas backend.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Procedural Pyplot vs. Object-Oriented API</h2>\n                <p>Matplotlib offers two distinct workflows for drawing plots:</p>\n            <ul>\n                <li><strong>State-based (Procedural) Pyplot Interface:</strong> Mimics MATLAB commands. Calling <code>plt.plot()</code>, <code>plt.title()</code>, or <code>plt.grid()</code> automatically applies changes to the 'current' active figure and axes. It is ideal for rapid exploratory data analysis, interactive notebooks, and teaching.</li>\n                <li><strong>Object-Oriented (OO) API:</strong> Explicitly creates Figure and Axes objects using <code>fig, ax = plt.subplots()</code>, then calls methods on <code>ax</code> (e.g., <code>ax.plot()</code>, <code>ax.set_title()</code>). This provides strict architectural control for multi-panel publications, automated lab pipelines, and web applications.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Key Advantages &amp; Strengths</h2>\n                <ul>\n                <li><strong>Publication-Grade Typography:</strong> Native support for mathematical LaTeX formulas (e.g. <code>r'$\\psi(x) = A e^{-\\alpha x}$'</code>) and vector formats (SVG, PDF, EPS).</li>\n                <li><strong>Zero-Copy Scientific Stack Integration:</strong> Plots NumPy arrays, Pandas DataFrames/Series, and SciPy numerical outputs without requiring intermediate conversions.</li>\n                <li><strong>Exhaustive Customizability:</strong> Virtually every visual parameter\u2014line weights, tick intervals, spines, colormaps, alpha transparencies\u2014can be programmatically fine-tuned.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Disadvantages &amp; Limitations</h2>\n                <ul>\n                <li><strong>Syntax Verbosity:</strong> Crafting intricate statistical multi-plot layouts often requires more configuration code than high-level declarative libraries (such as Seaborn).</li>\n                <li><strong>Default Aesthetics:</strong> Standard vanilla styling requires deliberate tweaking of palettes, fonts, and paddings to match modern design standards.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Real-World Scientific &amp; Data Science Applications</h2>\n                <div class=\"callout-tip\">\n                <div class=\"callout-title\">Interdisciplinary Laboratory &amp; Analytical Use Cases</div>\n                <div class=\"callout-body\">\n                    <ul>\n                        <li><strong>Experimental Physics:</strong> Visualizing simple harmonic motion, wave interference, resonance phenomena, and photoelectric stopping potential curves.</li>\n                        <li><strong>Physical Chemistry:</strong> Plotting spectrophotometric absorbance vs. concentration (Beer-Lambert law calibration) and chemical reaction kinetics.</li>\n                        <li><strong>Biology &amp; Bioinformatics:</strong> Displaying cell population growth curves (logistic vs exponential) and enzyme kinetics (Michaelis-Menten curves).</li>\n                        <li><strong>Data Science &amp; Machine Learning:</strong> Tracking training loss curves across epochs, ROC curves, and precision-recall trade-offs.</li>\n                    </ul>\n                </div>\n            </div>\n            </section>\n            ",
      "code": "import matplotlib.pyplot as plt\nimport numpy as np\n\n# Interdisciplinary Science: Damped Harmonic Oscillator\n# Equation: x(t) = A * exp(-gamma * t) * cos(omega * t)\ntime = np.linspace(0, 10, 250)\namplitude = 5.0\ndamping_factor = 0.35\nangular_freq = 3.0\n\ndisplacement = amplitude * np.exp(-damping_factor * time) * np.cos(angular_freq * time)\nenvelope = amplitude * np.exp(-damping_factor * time)\n\nplt.figure(figsize=(6.5, 3.8))\n# Plot theoretical envelope and damped oscillation\nplt.plot(time, envelope, '--', color='#94a3b8', linewidth=1.5, label='Decay Envelope (e^-\u03b3t)')\nplt.plot(time, -envelope, '--', color='#94a3b8', linewidth=1.5)\nplt.plot(time, displacement, color='#2563eb', linewidth=2.2, label='Oscillation x(t)')\n\nplt.title('Damped Harmonic Oscillator: Amplitude vs Time', fontsize=11, fontweight='bold', pad=10)\nplt.xlabel('Time t (seconds)', fontsize=10)\nplt.ylabel('Displacement x (centimeters)', fontsize=10)\nplt.grid(True, linestyle=':', alpha=0.6)\nplt.legend(loc='upper right', frameon=True)\nplt.show()",
      "quiz": [
        {
          "type": "fill-in",
          "question": "What is the universally adopted standard alias for importing the matplotlib.pyplot module?",
          "codeTemplate": "<span>import matplotlib.pyplot as </span><input type='text' class='quiz-fill-input' placeholder='plt'>",
          "answer": "plt",
          "explanation": "'plt' is the universally adopted standard alias for matplotlib.pyplot across scientific Python."
        },
        {
          "type": "multiple-choice",
          "question": "What is the standard, universally accepted convention for importing Matplotlib's pyplot interface?",
          "options": [
            "import matplotlib.pyplot as plt",
            "import pyplot as pt",
            "from matplotlib import plot",
            "import matplotlib.plot as mp"
          ],
          "correctIndex": 0,
          "explanation": "`import matplotlib.pyplot as plt` is the standard alias used across all scientific Python documentation."
        },
        {
          "type": "multiple-choice",
          "question": "In Matplotlib's object-oriented hierarchy, what is the difference between a `Figure` and an `Axes`?",
          "options": [
            "A Figure is the entire outer window/canvas; an Axes is the actual plot area with coordinate axes and data marks",
            "An Axes is the 3D version of a Figure",
            "A Figure contains text; an Axes contains numbers",
            "They are identical"
          ],
          "correctIndex": 0,
          "explanation": "The Figure is the overall canvas bounding the entire graphic; an Axes is a bounding box with an x and y axis that displays the plots."
        }
      ]
    },
    "matplotlib-markers-lines": {
      "id": "matplotlib-markers-lines",
      "title": "Matplotlib Markers, Lines & Colors",
      "category": "cat-matplotlib",
      "track": "track-matplotlib",
      "readTime": "7 min read",
      "lead": "Aesthetic styling of data representations: marker geometries, compact format strings (fmt), line styles, line widths, and multi-color encodings.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Data Markers: Indicating Discrete Data Points</h2>\n                <p>In scientific computing, experimental measurements are discrete events, whereas theoretical predictions are continuous curves. <strong>Markers</strong> are geometric symbols drawn at each individual (x, y) coordinate to highlight raw measurement points.</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Marker</th><th>Name</th><th>Marker</th><th>Name</th><th>Marker</th><th>Name</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr><td><code>'o'</code></td><td>Circle</td><td><code>'s'</code></td><td>Square</td><td><code>'^'</code></td><td>Triangle Up</td></tr>\n                        <tr><td><code>'*'</code></td><td>Star</td><td><code>'D'</code></td><td>Diamond</td><td><code>'v'</code></td><td>Triangle Down</td></tr>\n                        <tr><td><code>'.'</code></td><td>Point</td><td><code>'p'</code></td><td>Pentagon</td><td><code>'+'</code></td><td>Plus Symbol</td></tr>\n                        <tr><td><code>'x'</code></td><td>X Mark</td><td><code>'h'</code></td><td>Hexagon</td><td><code>'d'</code></td><td>Thin Diamond</td></tr>\n                    </tbody>\n                </table>\n            </div>\n            <p>Marker appearance can be refined with <code>markersize</code> (or <code>ms</code>), <code>markerfacecolor</code> (or <code>mfc</code>), and <code>markeredgecolor</code> (or <code>mec</code>).</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Line Styles, Widths &amp; Format Strings (fmt)</h2>\n                <p>Continuous lines represent theoretical relationships, curve fits, or time series. Matplotlib provides four fundamental line styles:</p>\n            <ul>\n                <li><code>'-'</code> or <code>'solid'</code>: Solid continuous line (default).</li>\n                <li><code>'--'</code> or <code>'dashed'</code>: Dashed line, ideal for theoretical limits or averages.</li>\n                <li><code>':'</code> or <code>'dotted'</code>: Dotted line, excellent for coordinate bounds or threshold limits.</li>\n                <li><code>'-.'</code> or <code>'dashdot'</code>: Dash-dot line, useful for secondary baselines.</li>\n            </ul>\n            <p><strong>The Shortcut Format String (fmt):</strong> You can specify marker, line style, and color in a single compact 3-character string: <code>'marker|line|color'</code>:</p>\n            <ul>\n                <li><code>'o-r'</code> &rarr; Circle marker, solid line, in <strong>Red</strong>.</li>\n                <li><code>'s--b'</code> &rarr; Square marker, dashed line, in <strong>Blue</strong>.</li>\n                <li><code>'^:g'</code> &rarr; Triangle marker, dotted line, in <strong>Green</strong>.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Key Advantages &amp; Strengths</h2>\n                <ul>\n                <li><strong>Accessibility &amp; Black-and-White Printing:</strong> Combining distinct marker shapes and line styles ensures charts remain fully distinguishable in monochrome research prints or for color-blind readers.</li>\n                <li><strong>Visual Separation of Theory vs. Experiment:</strong> Standard practice plots discrete experimental data points with markers and regression fits with solid curves.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Disadvantages &amp; Pitfalls</h2>\n                <ul>\n                <li><strong>Marker Crowding:</strong> In high-frequency sensor streams (thousands of points), rendering a marker at every point creates a solid blob of ink. In such cases, use <code>markevery=N</code> to display every N-th marker.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Real-World Scientific &amp; Data Science Applications</h2>\n                <div class=\"callout-tip\">\n                <div class=\"callout-title\">Laboratory Measurement vs Theoretical Model</div>\n                <div class=\"callout-body\">\n                    <p>In the <strong>Photoelectric Effect</strong> experiment, laboratory measurements of stopping potential ($V_0$) at various light frequencies ($\nu$) are plotted with circular markers. The linear fit ($V_0 = \\frac{h}{e}\\nu - \\frac{\\Phi}{e}$) is plotted as a solid line. The slope yields Planck's constant ($h$).</p>\n                </div>\n            </div>\n            </section>\n            ",
      "code": "import matplotlib.pyplot as plt\nimport numpy as np\n\n# Laboratory Experiment: Photoelectric Effect\n# Frequency of incident light (in THz)\nfreq_thz = np.array([549, 616, 688, 741, 822])\n# Measured stopping potential (in Volts)\nv_stop_measured = np.array([0.62, 0.90, 1.18, 1.41, 1.74])\n\n# Linear Regression theoretical fit: V = m * freq + c\nslope, intercept = np.polyfit(freq_thz, v_stop_measured, 1)\nfreq_fit = np.linspace(500, 850, 100)\nv_stop_fit = slope * freq_fit + intercept\n\nplt.figure(figsize=(6.5, 3.8))\n# Theoretical fit: Solid line\nplt.plot(freq_fit, v_stop_fit, color='#dc2626', linewidth=2, label=f'Linear Fit: V0 = {slope:.4f}\u03bd + ({intercept:.2f})')\n# Experimental points: Square markers with distinct face and edge colors\nplt.plot(freq_thz, v_stop_measured, 's', markersize=8, markerfacecolor='#fbbf24', markeredgecolor='#78350f', markeredgewidth=1.5, label='Measured Data Points')\n\nplt.title('Photoelectric Effect: Stopping Potential vs Frequency', fontsize=11, fontweight='bold', pad=10)\nplt.xlabel('Incident Light Frequency \u03bd (THz)', fontsize=10)\nplt.ylabel('Stopping Potential V0 (Volts)', fontsize=10)\nplt.grid(True, linestyle='--', alpha=0.5)\nplt.legend(loc='upper left', frameon=True)\nplt.show()",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "What does the Matplotlib format string 's--g' specify?",
          "options": [
            "Square marker, dashed line, in green color",
            "Star marker, solid line, in grey color",
            "Square marker, dotted line, in gold color",
            "Solid line with green background markers"
          ],
          "correctIndex": 0,
          "explanation": "In the format string 's--g': 's' is square marker, '--' is dashed line style, and 'g' is green color."
        },
        {
          "type": "multiple-choice",
          "question": "In the format string `'o--r'`, what do the three components represent?",
          "options": [
            "Circle marker ('o'), dashed line style ('--'), red color ('r')",
            "Octagon marker, double width, rainbow color",
            "Origin alignment, dash space, RGB spectrum",
            "Oval marker, solid line, ruby tone"
          ],
          "correctIndex": 0,
          "explanation": "Matplotlib's concise format strings follow `[marker][line][color]`: 'o' = circle, '--' = dashed, 'r' = red."
        },
        {
          "type": "multiple-choice",
          "question": "Which parameter adjusts the physical thickness of a plotted line in points?",
          "options": [
            "linewidth (or lw)",
            "thickness",
            "line_weight",
            "stroke"
          ],
          "correctIndex": 0,
          "explanation": "`plt.plot(x, y, linewidth=2.5)` controls line thickness in typographic points."
        }
      ]
    },
    "matplotlib-labels-grid": {
      "id": "matplotlib-labels-grid",
      "title": "Labels, Titles, Fonts & Grid Lines",
      "category": "cat-matplotlib",
      "track": "track-matplotlib",
      "readTime": "8 min read",
      "lead": "Transforming raw curves into publication-ready scientific figures: Understanding Plot Titles, Axis Labels with Physical Units, Legends for multi-dataset decoding, Font Dictionaries, and Coordinate Reference Grids.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>Visual Anatomy of a Scientific Plot</h2>\n                <p>In academic research and professional data science, a plot is a primary visual argument. Without complete labelling, even the most elegant mathematical curve is scientifically meaningless. Every component serves a specific cognitive purpose:</p>\n            <div class=\"table-container\">\n                <table class=\"data-table\">\n                    <thead>\n                        <tr><th>Visual Component</th><th>Function Call</th><th>Scientific Purpose &amp; Best Practices</th></tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td><strong>Plot Title</strong></td>\n                            <td><code>plt.title()</code></td>\n                            <td>Summarizes what relationship or physical law is depicted. Answers <em>what</em> is happening in the visualization.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>X-Axis Label</strong></td>\n                            <td><code>plt.xlabel()</code></td>\n                            <td>Specifies the independent variable (abscissa) and <strong>must always state the measurement units</strong> (e.g. seconds, nm, kelvin).</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Y-Axis Label</strong></td>\n                            <td><code>plt.ylabel()</code></td>\n                            <td>Specifies the dependent variable (ordinate) and its units of measurement (e.g. Volts, Amperes, mol/L, count).</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Plot Legend</strong></td>\n                            <td><code>plt.legend()</code></td>\n                            <td>The visual decoding key that maps colors, markers, and line styles to their respective datasets, samples, or mathematical models.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Coordinate Grid</strong></td>\n                            <td><code>plt.grid()</code></td>\n                            <td>A geometric mesh of reference lines enabling viewers to project coordinates and quantitatively estimate values without a ruler.</td>\n                        </tr>\n                        <tr>\n                            <td><strong>Font Dictionaries</strong></td>\n                            <td><code>fontdict={...}</code></td>\n                            <td>Uniform typographic formatting (family, color, size, weight) ensuring institutional presentation standards.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>What are Plot Titles (plt.title)?</h2>\n                <p><strong>Definition:</strong> The Title is the prominent headline positioned at the top of the plot axis that establishes the context of the visualization.</p>\n            <p><strong>Parameters &amp; Usage:</strong></p>\n            <ul>\n                <li><code>label</code> (string): The text or LaTeX expression to display (e.g. <code>r'RLC Circuit Resonance Curve (\\omega_0 = 50\\text{ Hz})'</code>).</li>\n                <li><code>loc</code>: Horizontal alignment. Accepts <code>'center'</code> (default), <code>'left'</code>, or <code>'right'</code>. Academic conventions often prefer left-aligned titles for journal figures.</li>\n                <li><code>pad</code> (float/int): Vertical clearance between the title and the top spine of the plot in points (e.g. <code>pad=12</code>). Prevents titles from colliding with axis tick marks.</li>\n                <li><code>fontsize</code> and <code>fontweight</code>: Controls font scale and thickness (e.g. <code>fontsize=12, fontweight='bold'</code>).</li>\n                <li><code>color</code>: Hex string, RGB tuple, or named color.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>What are Axis Labels (plt.xlabel &amp; plt.ylabel)?</h2>\n                <p><strong>Definition:</strong> Axis Labels describe the physical or mathematical dimensions plotted along the orthogonal coordinate axes.</p>\n            <p><strong>The Golden Rule of Science:</strong> <em>Never draw a plot without units!</em> In scientific research, engineering, and data science, an axis label must always include:\n            <code>Variable Name [Symbol] (Measurement Unit)</code> (e.g., <code>Time, t (seconds)</code> or <code>Pressure, P (kPa)</code>).</p>\n            <p><strong>Key Options:</strong></p>\n            <ul>\n                <li><code>labelpad</code>: Spacing in points between the axis ticks and the text label (e.g. <code>labelpad=10</code> prevents overlapping long numbers).</li>\n                <li><code>loc</code>: Position along the axis line (for X: <code>'left'</code>, <code>'center'</code>, <code>'right'</code>; for Y: <code>'bottom'</code>, <code>'center'</code>, <code>'top'</code>).</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>What are Plot Legends (plt.legend)?</h2>\n                <p><strong>Definition:</strong> A Legend is an explanatory box that decodes the meaning of different lines, markers, or colors when multiple data series share the same plotting canvas.</p>\n            <p><strong>How Legends Work in Matplotlib:</strong></p>\n            <ol>\n                <li>Assign a descriptive string to the <code>label</code> parameter in each plotting command:\n                    <br><code>plt.plot(time, v_in, label='Input Signal (50 Hz)')</code>\n                    <br><code>plt.plot(time, v_out, label='Filtered Output')</code>\n                </li>\n                <li>Call <code>plt.legend()</code> to generate and render the legend box on the canvas.</li>\n            </ol>\n            <p><strong>Critical Legend Parameters:</strong></p>\n            <ul>\n                <li><code>loc</code>: Placement location. Popular options include:\n                    <ul>\n                        <li><code>'best'</code> (default): Automatically computes the location with minimal data overlap.</li>\n                        <li><code>'upper right'</code>, <code>'upper left'</code>, <code>'lower left'</code>, <code>'lower right'</code>, <code>'center'</code>.</li>\n                    </ul>\n                </li>\n                <li><code>bbox_to_anchor=(x, y)</code>: Anchors the legend to precise normalized coordinates. Allows placing legends <em>outside</em> the plot area (e.g. <code>bbox_to_anchor=(1.05, 1)</code>) so curves are never obscured.</li>\n                <li><code>ncol</code>: Number of columns (e.g., <code>ncol=2</code> lays out items side-by-side).</li>\n                <li><code>frameon=True/False</code>: Displays or hides the background border card.</li>\n                <li><code>title=\"...\"</code>: Adds a header title inside the legend box.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Coordinate Grids (plt.grid) &amp; Font Customization</h2>\n                <p><strong>The Coordinate Grid:</strong> Calling <code>plt.grid(True)</code> displays background reference lines. You can customize:</p>\n            <ul>\n                <li><code>axis</code>: <code>'both'</code> (default), <code>'x'</code> (vertical grid lines only), or <code>'y'</code> (horizontal lines only).</li>\n                <li><code>linestyle</code>: <code>':'</code> (dotted), <code>'--'</code> (dashed), <code>'-'</code> (solid).</li>\n                <li><code>alpha</code>: Transparency (e.g. <code>alpha=0.6</code>), ensuring reference lines do not visually overpower the actual data.</li>\n                <li><code>color</code>: Line color (e.g. <code>color='#94a3b8'</code>).</li>\n            </ul>\n            <p><strong>Typography with fontdict:</strong> Instead of specifying typography individually, define a reusable dictionary:</p>\n            <pre><code>font_title = {'family': 'sans-serif', 'color': '#0f172a', 'size': 13, 'weight': 'bold'}\nfont_labels = {'family': 'sans-serif', 'color': '#334155', 'size': 10}\n\nplt.title('Title Here', fontdict=font_title, pad=12)\nplt.xlabel('X-Axis Label (Units)', fontdict=font_labels)\nplt.ylabel('Y-Axis Label (Units)', fontdict=font_labels)</code></pre>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Key Advantages &amp; Strengths</h2>\n                <ul>\n                <li><strong>Self-Explaining Visualizations:</strong> A properly labelled plot with titles, units, legends, and grid lines can be interpreted independently without referring back to accompanying prose.</li>\n                <li><strong>Exact Reading of Critical Points:</strong> Grid lines allow immediate visual estimation of resonant peaks, half-decay points, and threshold values.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Disadvantages &amp; Pitfalls</h2>\n                <ul>\n                <li><strong>Visual Noise:</strong> Opaque, thick, or excessively dense grid lines distract the human eye from the data curves. Always use subtle linestyles (dotted or dashed) with low opacity (<code>alpha=0.4 - 0.7</code>).</li>\n                <li><strong>Legend Collisions:</strong> Automatic placement (<code>loc='best'</code>) may sometimes choose an awkward position on complex multi-line plots; explicit placement with <code>loc</code> or <code>bbox_to_anchor</code> is recommended for final publication.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Real-World Scientific &amp; Data Science Applications</h2>\n                <div class=\"callout-tip\">\n                <div class=\"callout-title\">Interdisciplinary Science &amp; Data Science Use-Cases</div>\n                <div class=\"callout-body\">\n                    <ul>\n                        <li><strong>Electronics &amp; Physics Laboratory:</strong> Measuring the resonance curve of an RLC series circuit (Current $I$ vs. Source Frequency $f$). A dashed vertical marker identifies the resonance frequency $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$, while the legend clarifies the nominal circuit parameters.</li>\n                        <li><strong>Analytical Chemistry:</strong> Titration curves (pH vs Volume of titrant added) with an annotated equivalence point and horizontal grid lines for pH calibration.</li>\n                        <li><strong>Data Science &amp; Machine Learning:</strong> Overlaying Training Loss vs. Validation Loss across training epochs to diagnose overfitting and early stopping criteria.</li>\n                    </ul>\n                </div>\n            </div>\n            </section>\n            ",
      "code": "import matplotlib.pyplot as plt\nimport numpy as np\n\n# Interdisciplinary Science: Series RLC Circuit Resonance\n# Current I(f) = V0 / sqrt(R^2 + (2*pi*f*L - 1/(2*pi*f*C))^2)\nfreq = np.linspace(20, 80, 300)  # Frequency range in Hz\nR1, R2 = 10.0, 25.0              # Circuit resistances in Ohms\nL = 0.1                          # Inductance in Henrys\nC = 100e-6                       # Capacitance in Farads\nV0 = 20.0                        # Applied AC voltage\n\nomega = 2 * np.pi * freq\nX_L = omega * L\nX_C = 1.0 / (omega * C)\n\nI_curve1 = V0 / np.sqrt(R1**2 + (X_L - X_C)**2)\nI_curve2 = V0 / np.sqrt(R2**2 + (X_L - X_C)**2)\nf0 = 1.0 / (2 * np.pi * np.sqrt(L * C))  # Theoretical resonance frequency ~ 50.3 Hz\n\n# Typography Styling\nfont_title = {'family': 'sans-serif', 'color': '#0f172a', 'size': 11, 'weight': 'bold'}\nfont_axis = {'family': 'sans-serif', 'color': '#334155', 'size': 9}\n\nplt.figure(figsize=(6.5, 3.8))\n# Multi-series data with labels for Legend\nplt.plot(freq, I_curve1, color='#0284c7', linewidth=2.2, label=f'R = {R1} \u03a9 (High Q-factor)')\nplt.plot(freq, I_curve2, color='#f59e0b', linewidth=2.0, linestyle='--', label=f'R = {R2} \u03a9 (Low Q-factor)')\n\n# Reference vertical resonance line\nplt.axvline(x=f0, color='#dc2626', linestyle=':', linewidth=1.8, label=f'Resonance f0 = {f0:.1f} Hz')\n\n# Title with pad and loc\nplt.title('Series RLC Circuit: Current Response vs Frequency', fontdict=font_title, loc='center', pad=10)\n# Axis labels with physical quantities and measurement units\nplt.xlabel('Applied AC Frequency f (Hertz)', fontdict=font_axis, labelpad=6)\nplt.ylabel('Circuit Current I (Amperes)', fontdict=font_axis, labelpad=6)\n\n# Coordinate Grid\nplt.grid(True, linestyle=':', color='#94a3b8', alpha=0.7)\n\n# Legend Configuration\nplt.legend(loc='upper right', frameon=True, fontsize=9)\nplt.show()",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which parameter in plt.title() controls the horizontal alignment ('left', 'center', or 'right') of the title text?",
          "options": [
            "loc",
            "align",
            "position",
            "halign"
          ],
          "correctIndex": 0,
          "explanation": "The 'loc' argument in plt.title(loc='left'|'center'|'right') controls horizontal alignment."
        },
        {
          "type": "multiple-choice",
          "question": "How do you render LaTeX mathematical formulas (such as \\(\\lambda = \\frac{h}{p}\\)) inside a plot title?",
          "options": [
            "Enclose the raw string in dollar signs: `r\"$\\lambda = \\frac{h}{p}$\"`",
            "Use the `latex.render()` function",
            "Set `plt.math_mode = True`",
            "Formulas are not supported in Matplotlib"
          ],
          "correctIndex": 0,
          "explanation": "Matplotlib has a built-in TeX parser: enclose expressions in raw strings with dollar signs (`r\"$...$\"`)."
        },
        {
          "type": "multiple-choice",
          "question": "Which method enables grid lines on the plot canvas?",
          "options": [
            "plt.grid(True)",
            "plt.show_grid()",
            "plt.axis_grid(1)",
            "plt.draw_grid()"
          ],
          "correctIndex": 0,
          "explanation": "`plt.grid(True, linestyle='--', alpha=0.6)` activates custom grid markings."
        }
      ]
    },
    "matplotlib-subplots": {
      "id": "matplotlib-subplots",
      "title": "Subplots & Multi-Plot Layouts",
      "category": "cat-matplotlib",
      "track": "track-matplotlib",
      "readTime": "7 min read",
      "lead": "Structuring complex visual reports: Partitioning figures into subplots using plt.subplot(nrows, ncols, index), modern object-oriented plt.subplots(), overarching titles (suptitle), and automatic spacing.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>The Need for Multi-Plot Panels</h2>\n                <p>Scientific experiments rarely involve a single isolated variable. Researchers frequently need to compare related signals side-by-side\u2014such as an original sensor signal alongside its Fourier frequency transform, or simultaneous orthogonal components of an electromagnetic wave.</p>\n            <p>A <strong>Subplot</strong> partitions a single master Figure into a matrix grid of individual Axes, each capable of hosting distinct curves, scales, titles, and legends.</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Procedural plt.subplot() vs. Object-Oriented plt.subplots()</h2>\n                <p><strong>1. Procedural Grid Indexing: <code>plt.subplot(nrows, ncols, index)</code></strong></p>\n            <p>Divides the canvas into <code>nrows</code> rows and <code>ncols</code> columns, and makes the 1-based <code>index</code> subplot active for subsequent drawing:</p>\n            <ul>\n                <li><code>plt.subplot(1, 2, 1)</code> &rarr; 1 row, 2 columns &rarr; Activates left panel.</li>\n                <li><code>plt.subplot(1, 2, 2)</code> &rarr; 1 row, 2 columns &rarr; Activates right panel.</li>\n                <li><code>plt.subplot(2, 2, 4)</code> &rarr; 2 rows, 2 columns &rarr; Activates bottom-right panel.</li>\n            </ul>\n            <p><strong>2. Object-Oriented Interface: <code>fig, (ax1, ax2) = plt.subplots(1, 2)</code></strong></p>\n            <p>Creates both the Figure and an array of Axes in a single call. This is the preferred modern standard for building programmatic analytical workflows.</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Super-Titles &amp; Layout Optimization</h2>\n                <p>When multiple subplots share a figure, two supplementary functions are critical:</p>\n            <ul>\n                <li><code>plt.suptitle('Global Figure Title', fontsize=13, fontweight='bold')</code>: Creates an overarching title centered above all subplots.</li>\n                <li><code>plt.tight_layout()</code>: Automatically adjusts subplot margins, padding, and labels so titles and axis numbers from adjacent panels never collide.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Key Advantages &amp; Strengths</h2>\n                <ul>\n                <li><strong>Unified Comparison:</strong> Eliminates clutter from popping up dozens of separate windows; synchronizes temporal or spatial scales across datasets.</li>\n                <li><strong>Publication Ready:</strong> Compact multi-panel figures (e.g. Figure 1(a), 1(b)) conform to leading journal formats.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Disadvantages &amp; Pitfalls</h2>\n                <ul>\n                <li><strong>Overcrowding:</strong> Placing more than 4 to 6 subplots in small figure dimensions leads to illegible fonts. Always enlarge <code>figsize=(width, height)</code> accordingly.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Real-World Scientific &amp; Data Science Applications</h2>\n                <div class=\"callout-tip\">\n                <div class=\"callout-title\">Electromagnetic Wave &amp; Mechanical Energy Comparisons</div>\n                <div class=\"callout-body\">\n                    <p>In physics, synchronized subplots display the orthogonal <strong>Electric Field $E(t)$</strong> and <strong>Magnetic Field $B(t)$</strong> of a propagating electromagnetic wave, or simultaneously show Kinetic Energy, Potential Energy, and Total Mechanical Energy of an oscillating pendulum to confirm energy conservation.</p>\n                </div>\n            </div>\n            </section>\n            ",
      "code": "import matplotlib.pyplot as plt\nimport numpy as np\n\n# Interdisciplinary Science: Electromagnetic Wave Components in Vacuum\ntime = np.linspace(0, 2 * np.pi, 200)\nE_field = np.sin(time)          # Electric field (V/m)\nB_field = np.cos(time)          # Magnetic field in quadrature (Tesla)\n\nplt.figure(figsize=(7.0, 3.6))\n\n# Subplot 1: Electric Field Component\nplt.subplot(1, 2, 1)\nplt.plot(time, E_field, color='#2563eb', linewidth=2.0)\nplt.title('Electric Field E_y(t)', fontsize=10, fontweight='bold')\nplt.xlabel('Phase Angle (radians)', fontsize=9)\nplt.ylabel('E (Volts / meter)', fontsize=9)\nplt.grid(True, linestyle=':', alpha=0.6)\n\n# Subplot 2: Magnetic Field Component\nplt.subplot(1, 2, 2)\nplt.plot(time, B_field, color='#ec4899', linewidth=2.0)\nplt.title('Magnetic Field B_z(t)', fontsize=10, fontweight='bold')\nplt.xlabel('Phase Angle (radians)', fontsize=9)\nplt.ylabel('B (Tesla)', fontsize=9)\nplt.grid(True, linestyle=':', alpha=0.6)\n\n# Global Figure Overarching Title & Automatic Spacing\nplt.suptitle('Electromagnetic Wave Field Vectors', fontsize=11, fontweight='bold')\nplt.tight_layout()\nplt.show()",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which Matplotlib function adds an overarching centered super-title across an entire figure with multiple subplots?",
          "options": [
            "plt.suptitle()",
            "plt.super_title()",
            "plt.main_title()",
            "plt.top_title()"
          ],
          "correctIndex": 0,
          "explanation": "plt.suptitle() creates an overarching, centered super-title for the entire figure window."
        },
        {
          "type": "multiple-choice",
          "question": "What is returned by the command `fig, (ax1, ax2) = plt.subplots(1, 2)`?",
          "options": [
            "A Figure object and a 1D array of two side-by-side Axes objects",
            "Two separate Figure windows",
            "A list of coordinates",
            "A 2x2 grid of subplots"
          ],
          "correctIndex": 0,
          "explanation": "`plt.subplots(1, 2)` creates 1 row with 2 columns of subplots, returning the parent figure and axes array."
        },
        {
          "type": "multiple-choice",
          "question": "Which function prevents overlapping axis labels and titles between adjacent subplots?",
          "options": [
            "plt.tight_layout()",
            "plt.autospace()",
            "plt.clean_axes()",
            "plt.pad_all()"
          ],
          "correctIndex": 0,
          "explanation": "`plt.tight_layout()` automatically adjusts subplot parameters so titles, labels, and ticks don't overlap."
        }
      ]
    },
    "matplotlib-scatter-bars": {
      "id": "matplotlib-scatter-bars",
      "title": "Scatter Plots, ColorMaps & Bar Charts",
      "category": "cat-matplotlib",
      "track": "track-matplotlib",
      "readTime": "7 min read",
      "lead": "Visualizing bivariate correlations, clusters, and discrete comparisons: plt.scatter() with multidimensional color mapping (cmap), sizing, colorbars, and vertical/horizontal bar charts.",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>What is a Scatter Plot (plt.scatter)?</h2>\n                <p><strong>Definition:</strong> A Scatter Plot displays individual data samples as points along Cartesian coordinates without connecting lines.</p>\n            <p><strong>Why Scatter Plots are Essential in Data Science &amp; Science:</strong></p>\n            <ul>\n                <li>Identifies non-linear correlations, cluster groupings, and data spreads.</li>\n                <li>Detects laboratory sensor anomalies and experimental outliers immediately.</li>\n            </ul>\n            <p><strong>Multidimensional Mapping (4D Visualization):</strong> With <code>plt.scatter(x, y, s=size, c=color, cmap='viridis')</code>, a single 2D plot can visualize four continuous dimensions simultaneously:\n            (1) X position, (2) Y position, (3) Marker size $s$, and (4) Color value $c$. Adding <code>plt.colorbar()</code> provides the quantitative legend for the color dimension.</p>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>What are Bar Charts (plt.bar &amp; plt.barh)?</h2>\n                <p><strong>Definition:</strong> A Bar Chart represents categorical data with rectangular bars whose heights or lengths are proportional to the values they represent.</p>\n            <ul>\n                <li><code>plt.bar(categories, values)</code>: Vertical bar charts. Best when categories have short names or represent time steps.</li>\n                <li><code>plt.barh(categories, values)</code>: Horizontal bar charts. Highly recommended when category labels are long and descriptive, avoiding awkward rotated text.</li>\n                <li><code>yerr=errors</code>: Adds quantitative experimental error bars indicating standard deviation or uncertainty intervals.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Key Advantages &amp; Strengths</h2>\n                <ul>\n                <li><strong>No Assumptions of Continuity:</strong> Scatter plots make zero interpolation assumptions, preserving the true fidelity of raw empirical data.</li>\n                <li><strong>ColorMap Scientific Standards:</strong> Colormaps such as <code>'viridis'</code>, <code>'plasma'</code>, and <code>'inferno'</code> are perceptually uniform, preventing optical illusions across luminance scales.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Disadvantages &amp; Limitations</h2>\n                <ul>\n                <li><strong>Overplotting:</strong> When displaying tens of thousands of datapoints, points overlap into an indistinguishable mass. Mitigate with transparency (e.g. <code>alpha=0.3</code>) or hexbinning.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Real-World Scientific &amp; Data Science Applications</h2>\n                <div class=\"callout-tip\">\n                <div class=\"callout-title\">Particle Scattering &amp; Categorical Lab Comparisons</div>\n                <div class=\"callout-body\">\n                    <p>In nuclear physics, scatter plots map particle detector angles against measured kinetic energy, with marker color indicating beam intensity. In chemistry and materials science, bar charts compare dielectric constants or thermal conductivities across different alloy compositions with error bars.</p>\n                </div>\n            </div>\n            </section>\n            ",
      "code": "import matplotlib.pyplot as plt\nimport numpy as np\n\n# Interdisciplinary Science: Particle Scattering Telemetry\n# 4D Data: Angle (X), Detected Energy (Y), Flux Intensity (Color), Cross-Section (Size)\nnp.random.seed(42)\nscattering_angle = np.random.uniform(15, 165, 60)\nenergy_mev = 80.0 * np.sin(np.radians(scattering_angle)) + np.random.normal(0, 4, 60)\nintensity = np.random.randint(25, 180, 60)\nmarker_sizes = intensity * 1.2\n\nplt.figure(figsize=(6.5, 3.8))\n# 4D Scatter Plot using Perceptually Uniform 'plasma' colormap\nscatter = plt.scatter(scattering_angle, energy_mev, c=intensity, s=marker_sizes, \n                      cmap='plasma', alpha=0.82, edgecolors='#1e293b', linewidths=0.8)\n\n# Colorbar for the 3rd continuous dimension\ncbar = plt.colorbar(scatter)\ncbar.set_label('Particle Flux Intensity (counts/sec)', fontsize=9)\n\nplt.title('Particle Scattering Energy vs Angle', fontsize=11, fontweight='bold', pad=10)\nplt.xlabel('Scattering Angle \u03b8 (Degrees)', fontsize=9)\nplt.ylabel('Detected Kinetic Energy (MeV)', fontsize=9)\nplt.grid(True, linestyle=':', alpha=0.5)\nplt.show()",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which Matplotlib function is used to generate a horizontal bar chart?",
          "options": [
            "plt.barh()",
            "plt.hbar()",
            "plt.bar_horizontal()",
            "plt.bar(orientation='horizontal')"
          ],
          "correctIndex": 0,
          "explanation": "plt.barh() is the dedicated function for rendering horizontal bar charts in Matplotlib."
        },
        {
          "type": "multiple-choice",
          "question": "Which parameter in `plt.scatter(x, y, c=z, cmap='viridis')` maps a continuous variable `z` to a color spectrum?",
          "options": [
            "cmap (colormap)",
            "colorscheme",
            "palette",
            "hue_map"
          ],
          "correctIndex": 0,
          "explanation": "`cmap` specifies the colormap gradient (e.g. `'viridis'`, `'plasma'`, `'coolwarm'`) mapped to the values in `c`."
        },
        {
          "type": "multiple-choice",
          "question": "Which function renders horizontal bar charts instead of vertical ones?",
          "options": [
            "plt.barh()",
            "plt.bar(orient='h')",
            "plt.hbar()",
            "plt.horizontal_bar()"
          ],
          "correctIndex": 0,
          "explanation": "`plt.barh()` renders horizontal bar charts with height representing category span."
        }
      ]
    },
    "matplotlib-hist-pie": {
      "id": "matplotlib-hist-pie",
      "title": "Histograms & Pie Charts",
      "category": "cat-matplotlib",
      "track": "track-matplotlib",
      "readTime": "7 min read",
      "lead": "Analyzing empirical distributions and proportional composition: Frequency distributions with plt.hist(bins), and whole-composition charts with plt.pie(explode, autopct).",
      "htmlContent": "\n            <section class=\"pedagogy-section\">\n                <h2>What is a Statistical Histogram (plt.hist)?</h2>\n                <p><strong>Definition:</strong> A Histogram is a graphical representation of the distribution of numerical data. It groups continuous quantitative measurements into consecutive, non-overlapping intervals called <strong>bins</strong>.</p>\n            <p><strong>Why Histograms are Essential in Science:</strong></p>\n            <ul>\n                <li>Reveals whether experimental data follows a normal (Gaussian bell curve), Poisson, or skewed distribution.</li>\n                <li>Estimates the Probability Density Function (PDF) of measured physical phenomena.</li>\n                <li>Computes central tendency (mean/mode) and dispersion (variance/spread) visually.</li>\n            </ul>\n            <p><strong>Key Histogram Parameters:</strong></p>\n            <ul>\n                <li><code>bins</code>: Number of equal-width bins (e.g. <code>bins=25</code>) or an array of explicit bin edges.</li>\n                <li><code>density=True</code>: Normalizes bin counts such that the total area under the histogram integrates to 1.0 (approximating a probability density).</li>\n                <li><code>edgecolor</code>: Outlines individual bars to make bin boundaries visible (e.g. <code>edgecolor='black'</code>).</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>What is a Pie Chart (plt.pie)?</h2>\n                <p><strong>Definition:</strong> A Pie Chart is a circular statistical graphic divided into slices to illustrate numerical proportions of a whole.</p>\n            <p><strong>Key Parameters:</strong></p>\n            <ul>\n                <li><code>autopct='%1.1f%%'</code>: Automatically formats and prints the percentage value on each wedge.</li>\n                <li><code>explode=[0.1, 0, 0]</code>: Offsets (pulls out) a specific slice from the center for visual emphasis.</li>\n                <li><code>startangle=90</code>: Rotates the first slice to a vertical starting orientation.</li>\n                <li><code>shadow=True</code>: Adds a subtle drop shadow to the wedges.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Key Advantages &amp; Strengths</h2>\n                <ul>\n                <li><strong>Instant Identification of Distribution Shape:</strong> Histograms quickly communicate whether empirical noise is thermal Gaussian noise or systematic instrumental bias.</li>\n                <li><strong>Proportional Clarity:</strong> Pie charts provide immediate comprehension when comparing fewer than 5 major budget or elemental constituents.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Disadvantages &amp; Pitfalls</h2>\n                <ul>\n                <li><strong>Bin Width Sensitivity:</strong> Choosing too few bins obscures key peaks; choosing too many produces noisy, sparse spikes.</li>\n                <li><strong>Pie Chart Angle Distortion:</strong> Humans struggle to accurately compare angles and slice areas compared to straight bar lengths. Never use pie charts when comparing more than 5 or 6 categories.</li>\n            </ul>\n            </section>\n            \n\n            <section class=\"pedagogy-section\">\n                <h2>Real-World Scientific &amp; Data Science Applications</h2>\n                <div class=\"callout-tip\">\n                <div class=\"callout-title\">Maxwell-Boltzmann Velocity &amp; Atmospheric Composition</div>\n                <div class=\"callout-body\">\n                    <p>In statistical mechanics, histograms model the <strong>Maxwell-Boltzmann molecular speed distribution</strong> of gas molecules at a given temperature. In Earth &amp; atmospheric science, pie charts illustrate the percentage composition of gases in the atmosphere (78% Nitrogen, 21% Oxygen, 0.9% Argon, etc.).</p>\n                </div>\n            </div>\n            </section>\n            ",
      "code": "import matplotlib.pyplot as plt\nimport numpy as np\n\n# Statistical Physics: Molecular Speed Distribution (Maxwell-Boltzmann Approximation)\nnp.random.seed(101)\n# Simulated molecular speeds of an ideal gas at T = 300 Kelvin (mean speed ~ 450 m/s)\nmolecular_speeds = np.random.normal(loc=450, scale=75, size=600)\n\nplt.figure(figsize=(6.5, 3.8))\n# Histogram with 25 bins and outline styling\nn, bins, patches = plt.hist(molecular_speeds, bins=25, color='#3b82f6', edgecolor='#1e3a8a', \n                            alpha=0.8, density=True, label='Observed Velocities')\n\n# Theoretical Gaussian curve overlay\nmean_spd = np.mean(molecular_speeds)\nstd_spd = np.std(molecular_speeds)\nx_curve = np.linspace(200, 700, 200)\npdf_curve = (1 / (std_spd * np.sqrt(2 * np.pi))) * np.exp(-0.5 * ((x_curve - mean_spd) / std_spd)**2)\nplt.plot(x_curve, pdf_curve, color='#dc2626', linewidth=2, label='Normal Probability Density Fit')\n\nplt.title('Maxwell-Boltzmann Molecular Speed Distribution', fontsize=11, fontweight='bold', pad=10)\nplt.xlabel('Molecular Velocity v (meters / second)', fontsize=9)\nplt.ylabel('Probability Density P(v)', fontsize=9)\nplt.grid(axis='y', linestyle=':', alpha=0.6)\nplt.legend(loc='upper right', frameon=True)\nplt.show()",
      "quiz": [
        {
          "type": "multiple-choice",
          "question": "Which parameter in plt.pie() offsets or pulls out a slice from the center for visual emphasis?",
          "options": [
            "explode",
            "offset",
            "detach",
            "pull"
          ],
          "correctIndex": 0,
          "explanation": "The 'explode' parameter in plt.pie(explode=[...]) specifies the fraction of the radius with which to offset each wedge."
        },
        {
          "type": "multiple-choice",
          "question": "What does the `bins` parameter in `plt.hist(data, bins=25)` control?",
          "options": [
            "The number of discrete interval intervals (equal-width buckets) into which the data range is divided",
            "The maximum value allowed in the histogram",
            "The number of colors used in the bars",
            "The height of the y-axis"
          ],
          "correctIndex": 0,
          "explanation": "`bins` defines the number of bin intervals or an explicit array of bin edges."
        },
        {
          "type": "multiple-choice",
          "question": "Which parameter in `plt.pie(values, explode=[0, 0.1, 0])` separates or highlights a specific slice from the center?",
          "options": [
            "explode",
            "offset",
            "detach",
            "highlight"
          ],
          "correctIndex": 0,
          "explanation": "`explode` takes a fraction array specifying how far each wedge offsets radially from the center."
        }
      ]
    }
  }
};

  window.CurriculumData = {
    getTracks: () => DATA.tracks,
    getCategories: () => DATA.categories,
    getTopics: () => DATA.topics,
    getTopic: (id) => DATA.topics[id] || null,
    getAllTopicIds: () => Object.keys(DATA.topics),
    
    getAdjacentTopics: (currentId) => {
      const allIds = [];
      DATA.categories.forEach(cat => {
        cat.topics.forEach(tid => {
          if (DATA.topics[tid]) allIds.push(tid);
        });
      });
      
      const idx = allIds.indexOf(currentId);
      if (idx === -1) return { prev: null, next: null };
      
      return {
        prev: idx > 0 ? DATA.topics[allIds[idx - 1]] : null,
        next: idx < allIds.length - 1 ? DATA.topics[allIds[idx + 1]] : null
      };
    },
    
    search: (query) => {
      if (!query || !query.trim()) return [];
      const q = query.toLowerCase().trim();
      const results = [];
      
      for (const [id, topic] of Object.entries(DATA.topics)) {
        let score = 0;
        if (topic.title.toLowerCase().includes(q)) score += 10;
        if (topic.lead.toLowerCase().includes(q)) score += 5;
        if (topic.htmlContent.toLowerCase().includes(q)) score += 1;
        
        if (score > 0) {
          results.push({ topic, score });
        }
      }
      
      return results.sort((a, b) => b.score - a.score).map(r => r.topic);
    }
  };
})();
