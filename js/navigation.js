/**
 * Python-SVAGDC: Navigation & Curriculum Tree Coordinator
 * S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  const STORAGE_COMPLETED_KEY = 'svagdc_completed_topics';
  let completedTopics = new Set();

  try {
    const saved = localStorage.getItem(STORAGE_COMPLETED_KEY);
    if (saved) {
      completedTopics = new Set(JSON.parse(saved));
    }
  } catch (e) {
    console.warn('Could not load completed topics from localStorage', e);
  }

  function saveCompleted() {
    try {
      localStorage.setItem(STORAGE_COMPLETED_KEY, JSON.stringify(Array.from(completedTopics)));
    } catch (e) {}
  }

  function renderSidebar(activeTopicId = null) {
    const container = document.getElementById('curriculum-tree');
    if (!container || !window.CurriculumData) return;

    const categories = window.CurriculumData.getCategories();
    const allTopics = window.CurriculumData.getTopics();

    let html = '';

    categories.forEach(cat => {
      const isBasics = cat.id === 'cat-basics';
      html += `
        <div class="category-group" id="group_${cat.id}" data-category-id="${cat.id}">
          <div class="category-header" onclick="window.NavigationTracker.toggleCategory('${cat.id}')">
            <div class="category-header-title">
              <i class="${cat.icon || 'fa-solid fa-folder'}"></i>
              <span>${cat.title}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="category-badge">${cat.topics.length}</span>
              <i class="fa-solid fa-chevron-down category-arrow"></i>
            </div>
          </div>
          <ul class="topic-list">
      `;

      cat.topics.forEach(tid => {
        const t = allTopics[tid];
        if (!t) return;
        const isActive = tid === activeTopicId;
        const isCompleted = completedTopics.has(tid);

        html += `
          <li class="topic-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" id="nav_item_${tid}">
            <a href="#${tid}" onclick="window.NavigationTracker.closeMobileSidebar()">
              <span>${t.title}</span>
              <i class="fa-solid fa-circle-check check-icon" title="Completed"></i>
            </a>
          </li>
        `;
      });

      html += `
          </ul>
        </div>
      `;
    });

    container.innerHTML = html;

    // Expand category containing active topic
    if (activeTopicId) {
      const activeTopic = allTopics[activeTopicId];
      if (activeTopic) {
        const activeGroup = document.getElementById(`group_${activeTopic.category}`);
        if (activeGroup) {
          activeGroup.classList.remove('collapsed');
        }
      }
    }
  }

  function updateActiveTopic(topicId) {
    document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('active'));
    const targetItem = document.getElementById(`nav_item_${topicId}`);
    if (targetItem) {
      targetItem.classList.add('active');
      targetItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

      // Ensure parent category group is expanded
      const parentGroup = targetItem.closest('.category-group');
      if (parentGroup) {
        parentGroup.classList.remove('collapsed');
      }
    }

    // Update track pill in header
    const topic = window.CurriculumData ? window.CurriculumData.getTopic(topicId) : null;
    if (topic) {
      document.querySelectorAll('.track-pill').forEach(pill => {
        if (pill.dataset.track === topic.track) {
          pill.classList.add('active');
        } else {
          pill.classList.remove('active');
        }
      });
    }
  }

  function toggleCategory(categoryId) {
    const group = document.getElementById(`group_${categoryId}`);
    if (group) {
      group.classList.toggle('collapsed');
    }
  }

  function filterSidebar(query) {
    const q = (query || '').toLowerCase().trim();
    const items = document.querySelectorAll('.topic-item');

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });

    // Automatically expand categories with visible children during search
    document.querySelectorAll('.category-group').forEach(group => {
      if (!q) return;
      const hasVisible = Array.from(group.querySelectorAll('.topic-item')).some(it => it.style.display !== 'none');
      if (hasVisible) {
        group.classList.remove('collapsed');
      }
    });
  }

  function markCurrentTopicCompleted(topicId = null) {
    const id = topicId || (window.location.hash ? window.location.hash.slice(1) : null);
    if (!id) return;
    completedTopics.add(id);
    saveCompleted();
    const item = document.getElementById(`nav_item_${id}`);
    if (item) item.classList.add('completed');
  }

  function closeMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
  }

  function toggleMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.toggle('open');
    if (backdrop) backdrop.classList.toggle('active');
  }

  // Reading progress bar updater
  function initProgressBar() {
    const mainPane = document.getElementById('app-main');
    const progressBar = document.getElementById('read-progress-bar');
    if (!mainPane || !progressBar) return;

    mainPane.addEventListener('scroll', () => {
      const scrollTop = mainPane.scrollTop;
      const scrollHeight = mainPane.scrollHeight - mainPane.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    });
  }

  window.NavigationTracker = {
    renderSidebar: renderSidebar,
    updateActiveTopic: updateActiveTopic,
    toggleCategory: toggleCategory,
    filterSidebar: filterSidebar,
    markCurrentTopicCompleted: markCurrentTopicCompleted,
    toggleMobileSidebar: toggleMobileSidebar,
    closeMobileSidebar: closeMobileSidebar,
    initProgressBar: initProgressBar
  };

})();
