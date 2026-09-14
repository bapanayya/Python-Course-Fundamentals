/**
 * Python-SVAGDC: Master Application Controller
 * S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  const DEFAULT_TOPIC_ID = 'python-intro';
  const THEME_STORAGE_KEY = 'svagdc_theme_mode';

  // --- Theme Management ---
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';
    setTheme(savedTheme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
      });
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.innerHTML = theme === 'dark' 
        ? '<i class="fa-solid fa-sun" style="color: #fbbf24;"></i>' 
        : '<i class="fa-solid fa-moon" style="color: #3b82f6;"></i>';
      toggleBtn.title = `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`;
    }
  }

  // --- Topic Rendering ---
  function renderTopic(topicId) {
    if (!window.CurriculumData) return;

    const topic = window.CurriculumData.getTopic(topicId);
    if (!topic) {
      console.warn(`Topic "${topicId}" not found. Loading default.`);
      window.location.hash = DEFAULT_TOPIC_ID;
      return;
    }

    const mainContainer = document.getElementById('topic-content-mount');
    if (!mainContainer) return;

    // Get adjacent topics for Prev / Next navigation
    const { prev, next } = window.CurriculumData.getAdjacentTopics(topicId);

    // Build Category & Track Titles for Breadcrumbs
    const categories = window.CurriculumData.getCategories();
    const cat = categories.find(c => c.id === topic.category);
    const catTitle = cat ? cat.title : 'Curriculum';

    // HTML Construction
    let html = `
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs">
        <a href="#python-intro"><i class="fa-solid fa-house"></i> Home</a>
        <span class="separator">/</span>
        <span style="color: var(--text-muted);">${catTitle}</span>
        <span class="separator">/</span>
        <span class="current">${topic.title}</span>
      </nav>

      <!-- Lesson Header -->
      <header class="lesson-header">
        <div class="lesson-meta-row">
          <span class="module-tag">${catTitle}</span>
          <span class="read-time"><i class="fa-regular fa-clock"></i> ${topic.readTime || '5 min read'}</span>
        </div>
        <h1 class="lesson-title">${topic.title}</h1>
        <p class="lesson-lead">${topic.lead}</p>
      </header>

      <!-- Main Pedagogical Theory Sections -->
      <article class="lesson-body">
        ${topic.htmlContent}
      </article>

      <!-- Interactive "Test Your Understanding" Live Code Runner -->
      <section class="code-runner-section" style="margin-top: 2.5rem;">
        <div class="code-runner-card" id="runner_card_${topic.id}">
          <div class="code-runner-header">
            <div class="runner-title-group">
              <span class="runner-badge"><i class="fa-solid fa-terminal"></i> Test Your Understanding</span>
              <span class="runner-file-label">main.py</span>
            </div>
            <div class="runner-actions">
              <button class="runner-btn btn-secondary" id="copy_btn_${topic.id}" title="Copy Code">
                <i class="fa-regular fa-copy"></i> Copy
              </button>
              <button class="runner-btn btn-secondary" id="reset_btn_${topic.id}" title="Reset to Default">
                <i class="fa-solid fa-rotate-left"></i> Reset
              </button>
              <button class="runner-btn btn-run" id="run_btn_${topic.id}" title="Execute Python Code (Shift+Enter / Alt+R)">
                <i class="fa-solid fa-play"></i> Run Code
              </button>
            </div>
          </div>
          <div class="editor-subtext">
            <i class="fa-solid fa-keyboard"></i> Students: You can freely edit this code or type your own custom Python script below, then click 'Run Code' (or press Shift+Enter) to see results:
          </div>
          <div class="runner-body">
            <div class="editor-pane">
              <textarea class="code-editor-textarea" id="editor_${topic.id}" spellcheck="false" placeholder="# Enter your Python code here...">${escapeHtml(topic.code)}</textarea>
            </div>
            <div class="output-pane">
              <div class="output-header">
                <div class="output-status">
                  <span class="status-dot" id="status_dot_${topic.id}"></span>
                  <span>Terminal Console &amp; Graphic Plots</span>
                </div>
                <button class="runner-btn btn-secondary" id="clear_btn_${topic.id}" style="padding: 2px 8px; font-size: 11px;">
                  Clear
                </button>
              </div>
              <div class="output-content" id="output_${topic.id}">Press 'Run Code' or hit Shift+Enter to execute...</div>
            </div>
          </div>
        </div>
      </section>

      <!-- "Test Your Understanding" Quiz / Exercise Component -->
      <section class="quiz-section">
        <div class="quiz-card" id="quiz_mount_${topic.id}"></div>
      </section>

      <!-- Bottom Navigation Bar -->
      <div class="nav-buttons-bar" style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
        <a href="${prev ? '#' + prev.id : 'javascript:void(0)'}" 
           class="nav-btn ${!prev ? 'disabled' : ''}">
          <i class="fa-solid fa-arrow-left"></i> Previous Chapter
        </a>
        <a href="${next ? '#' + next.id : 'javascript:void(0)'}" 
           class="nav-btn primary ${!next ? 'disabled' : ''}">
          Next Chapter <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `;

    mainContainer.innerHTML = html;

    // Scroll main pane to top smoothly
    const mainPane = document.getElementById('app-main');
    if (mainPane) mainPane.scrollTop = 0;

    // Initialize Code Runner Event Handlers
    initRunnerEvents(topic);

    // Render Quiz Component
    if (window.QuizEngine && topic.quiz) {
      window.QuizEngine.render(`quiz_mount_${topic.id}`, topic.quiz);
    }

    // Update active state in sidebar
    if (window.NavigationTracker) {
      window.NavigationTracker.updateActiveTopic(topic.id);
    }

    // Update browser tab title
    document.title = `${topic.title} | Python-SVAGDC Course Portal`;
  }

  function initRunnerEvents(topic) {
    const runBtn = document.getElementById(`run_btn_${topic.id}`);
    const copyBtn = document.getElementById(`copy_btn_${topic.id}`);
    const resetBtn = document.getElementById(`reset_btn_${topic.id}`);
    const clearBtn = document.getElementById(`clear_btn_${topic.id}`);
    const editor = document.getElementById(`editor_${topic.id}`);
    const output = document.getElementById(`output_${topic.id}`);
    const statusDot = document.getElementById(`status_dot_${topic.id}`);

    if (runBtn && editor && output) {
      runBtn.addEventListener('click', () => {
        const code = editor.value;
        if (window.PythonRunner) {
          window.PythonRunner.execute(code, output, statusDot, runBtn);
        }
      });

      // Enable Tab key indentation (4 spaces) and Shift+Enter to run
      editor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = editor.selectionStart;
          const end = editor.selectionEnd;
          editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);
          editor.selectionStart = editor.selectionEnd = start + 4;
        } else if (e.key === 'Enter' && e.shiftKey) {
          e.preventDefault();
          runBtn.click();
        }
      });
    }

    if (copyBtn && editor) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(editor.value).then(() => {
          copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
          setTimeout(() => {
            copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
          }, 2000);
        });
      });
    }

    if (resetBtn && editor) {
      resetBtn.addEventListener('click', () => {
        editor.value = topic.code;
        if (output) output.textContent = "Code reset to original exercise state.";
      });
    }

    if (clearBtn && output) {
      clearBtn.addEventListener('click', () => {
        output.textContent = "";
      });
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Router & URL Hash Coordinator ---
  function initRouter() {
    function handleRoute() {
      const hash = window.location.hash.slice(1);
      const targetId = hash && window.CurriculumData && window.CurriculumData.getTopic(hash) 
        ? hash 
        : DEFAULT_TOPIC_ID;
      renderTopic(targetId);
    }

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  // --- Instant Search Modal ---
  function initSearchModal() {
    const openBtn = document.getElementById('search-trigger-btn');
    const modal = document.getElementById('search-modal-backdrop');
    const closeBtn = document.getElementById('search-modal-close');
    const input = document.getElementById('search-modal-input');
    const resultsList = document.getElementById('search-results-list');
    const sidebarInput = document.getElementById('sidebar-search-input');

    function openModal() {
      if (!modal) return;
      modal.classList.add('active');
      if (input) {
        input.value = '';
        input.focus();
        renderResults('');
      }
    }

    function closeModal() {
      if (modal) modal.classList.remove('active');
    }

    function renderResults(q) {
      if (!resultsList || !window.CurriculumData) return;
      const results = window.CurriculumData.search(q);

      if (results.length === 0) {
        resultsList.innerHTML = `
          <li style="padding: 1.5rem; text-align: center; color: var(--text-muted);">
            No matching topics found for "${q}". Try "lists", "match case", "numpy", or "sqlite".
          </li>
        `;
        return;
      }

      let html = '';
      results.slice(0, 10).forEach(t => {
        const cat = window.CurriculumData.getCategories().find(c => c.id === t.category);
        html += `
          <li class="search-result-item">
            <a href="#${t.id}" onclick="document.getElementById('search-modal-backdrop').classList.remove('active')">
              <div class="search-result-title">${t.title}</div>
              <div class="search-result-path">${cat ? cat.title : ''} &bull; ${t.lead.slice(0, 85)}...</div>
            </a>
          </li>
        `;
      });

      resultsList.innerHTML = html;
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    if (input) {
      input.addEventListener('input', (e) => {
        renderResults(e.target.value);
      });
    }

    // Sidebar inline filter
    if (sidebarInput && window.NavigationTracker) {
      sidebarInput.addEventListener('input', (e) => {
        window.NavigationTracker.filterSidebar(e.target.value);
      });
    }

    // Global keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      // Ctrl+K or '/' to focus left sidebar search
      if ((e.ctrlKey && e.key.toLowerCase() === 'k') || (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName))) {
        e.preventDefault();
        if (sidebarInput) {
          sidebarInput.focus();
          sidebarInput.select();
          if (window.innerWidth <= 992 && window.NavigationTracker) {
            window.NavigationTracker.toggleMobileSidebar();
          }
        }
      }
      // Esc to close modal
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
      }
      // Alt+R to run code in active card
      if (e.altKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        const currentId = window.location.hash.slice(1) || DEFAULT_TOPIC_ID;
        const runBtn = document.getElementById(`run_btn_${currentId}`);
        if (runBtn) runBtn.click();
      }
    });
  }

  // Application Entry Bootstrap
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    if (window.NavigationTracker) {
      window.NavigationTracker.renderSidebar();
      window.NavigationTracker.initProgressBar();
    }
    initRouter();
    initSearchModal();
  });

})();
