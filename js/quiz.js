/**
 * Python-SVAGDC: Interactive "Test Your Understanding" Quiz & Exercise Engine
 * S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  function initQuiz(containerId, quizData) {
    const container = document.getElementById(containerId);
    if (!container || !quizData) return;

    // Support both a single quiz object and an array of quiz objects
    const quizzes = Array.isArray(quizData) ? quizData : [quizData];
    if (quizzes.length === 0) return;

    let html = `
      <div class="quiz-header-bar">
        <div class="quiz-badge"><i class="fa-solid fa-graduation-cap"></i> Test Your Understanding</div>
        <span class="quiz-count-badge"><i class="fa-solid fa-list-check"></i> ${quizzes.length} Exercise${quizzes.length > 1 ? 's' : ''}</span>
      </div>
    `;

    quizzes.forEach((q, qIdx) => {
      html += `
        <div class="quiz-item-block" id="quiz_item_${containerId}_${qIdx}">
          <div class="quiz-q-num">Exercise ${qIdx + 1} of ${quizzes.length}</div>
          <div class="quiz-question">${q.question}</div>
      `;

      if (q.type === 'fill-in') {
        html += `
          <div class="quiz-code-prompt">
            ${q.codeTemplate}
          </div>
        `;
      } else if (q.type === 'multiple-choice') {
        html += `<div class="quiz-options">`;
        q.options.forEach((opt, idx) => {
          html += `
            <label class="quiz-option-label">
              <input type="radio" name="quiz_${containerId}_${qIdx}" value="${idx}">
              <span>${opt}</span>
            </label>
          `;
        });
        html += `</div>`;
      }

      html += `
          <div class="quiz-actions">
            <button class="btn-check-answer" id="check_${containerId}_${qIdx}">
              <i class="fa-solid fa-circle-check"></i> Check Answer
            </button>
            <button class="btn-show-solution" id="solution_${containerId}_${qIdx}">
              <i class="fa-regular fa-lightbulb"></i> Show Solution
            </button>
          </div>
          <div class="quiz-feedback" id="feedback_${containerId}_${qIdx}"></div>
        </div>
      `;
    });

    container.innerHTML = html;

    // Attach event listeners for each question
    quizzes.forEach((q, qIdx) => {
      const checkBtn = document.getElementById(`check_${containerId}_${qIdx}`);
      const solutionBtn = document.getElementById(`solution_${containerId}_${qIdx}`);
      const feedback = document.getElementById(`feedback_${containerId}_${qIdx}`);

      if (checkBtn) {
        checkBtn.addEventListener('click', () => {
          let isCorrect = false;
          let explanation = q.explanation || '';

          if (q.type === 'fill-in') {
            const input = container.querySelector(`#quiz_item_${containerId}_${qIdx} input.quiz-fill-input`);
            if (input) {
              const val = input.value.trim();
              const correctVals = Array.isArray(q.answer) ? q.answer : [q.answer];
              isCorrect = correctVals.some(v => v.toLowerCase() === val.toLowerCase());
            }
          } else if (q.type === 'multiple-choice') {
            const selected = container.querySelector(`input[name="quiz_${containerId}_${qIdx}"]:checked`);
            if (selected) {
              isCorrect = parseInt(selected.value, 10) === q.correctIndex;
            } else {
              feedback.className = 'quiz-feedback incorrect';
              feedback.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Please select an option first.';
              return;
            }
          }

          if (isCorrect) {
            feedback.className = 'quiz-feedback correct';
            feedback.innerHTML = `<strong><i class="fa-solid fa-circle-check"></i> Correct!</strong> ${explanation}`;
            if (window.NavigationTracker) {
              window.NavigationTracker.markCurrentTopicCompleted();
            }
          } else {
            feedback.className = 'quiz-feedback incorrect';
            feedback.innerHTML = `<strong><i class="fa-solid fa-circle-xmark"></i> Not quite.</strong> Check your logic and try again, or click 'Show Solution'.`;
          }
        });
      }

      if (solutionBtn) {
        solutionBtn.addEventListener('click', () => {
          let sol = '';
          if (q.type === 'fill-in') {
            sol = Array.isArray(q.answer) ? q.answer[0] : q.answer;
          } else if (q.type === 'multiple-choice') {
            sol = q.options[q.correctIndex];
          }

          feedback.className = 'quiz-feedback correct';
          feedback.innerHTML = `<strong><i class="fa-solid fa-lightbulb"></i> Solution:</strong> <code>${sol}</code><br><span style="margin-top:4px;display:inline-block;">${q.explanation || ''}</span>`;
        });
      }
    });
  }

  window.QuizEngine = {
    render: initQuiz
  };

})();
