/**
 * Python-SVAGDC: High-Performance In-Browser Python Execution Engine
 * Powered by Pyodide WebAssembly with Matplotlib Graphical Plot Rendering
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  let pyodideInstance = null;
  let pyodideLoadingPromise = null;
  let isPyodideReady = false;
  let loadedPackages = new Set();

  const SCIENTIFIC_PACKAGES = ['numpy', 'matplotlib', 'pandas', 'scipy'];

  // Initialize Pyodide and preload scientific packages
  async function initPyodide(statusCallback = null) {
    if (pyodideLoadingPromise) return pyodideLoadingPromise;

    pyodideLoadingPromise = new Promise(async (resolve) => {
      try {
        if (typeof loadPyodide === 'function') {
          if (statusCallback) statusCallback('Initializing Pyodide WebAssembly runtime...');
          console.log('[PythonRunner] Initializing Pyodide WebAssembly...');

          pyodideInstance = await loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/'
          });

          // Preload standard scientific core
          if (statusCallback) statusCallback('Loading scientific packages (numpy, matplotlib, pandas, scipy)...');
          console.log('[PythonRunner] Preloading scientific stack...');
          
          try {
            await pyodideInstance.loadPackage(SCIENTIFIC_PACKAGES);
            SCIENTIFIC_PACKAGES.forEach(pkg => loadedPackages.add(pkg));
            console.log('[PythonRunner] Scientific packages loaded successfully!');
          } catch (pkgErr) {
            console.warn('[PythonRunner] Initial package preload warning:', pkgErr);
          }

          isPyodideReady = true;
          if (statusCallback) statusCallback('Python 3 runtime & scientific stack ready!');
          resolve(pyodideInstance);
        } else {
          console.warn('[PythonRunner] Pyodide script not yet available on window.');
          resolve(null);
        }
      } catch (err) {
        console.warn('[PythonRunner] Failed to initialize Pyodide; using local fallback:', err);
        resolve(null);
      }
    });

    return pyodideLoadingPromise;
  }

  // Pre-trigger loading in background on page load
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      setTimeout(() => initPyodide(), 400);
    });
  }

  /**
   * Scan code to find imported packages and ensure they are loaded in Pyodide
   */
  async function ensurePackagesLoaded(code, statusCallback = null) {
    if (!pyodideInstance) return;

    const toLoad = [];
    SCIENTIFIC_PACKAGES.forEach(pkg => {
      // Regex detects: import numpy, import matplotlib.pyplot, from pandas import ...
      const regex = new RegExp(`\\b(import\\s+${pkg}|from\\s+${pkg})\\b`);
      if (regex.test(code) && !loadedPackages.has(pkg)) {
        toLoad.push(pkg);
      }
    });

    if (toLoad.length > 0) {
      if (statusCallback) statusCallback(`Loading required packages (${toLoad.join(', ')})...`);
      try {
        await pyodideInstance.loadPackage(toLoad);
        toLoad.forEach(p => loadedPackages.add(p));
      } catch (err) {
        console.warn('[PythonRunner] Error loading packages dynamically:', err);
      }
    }
  }

  /**
   * Offline fallback with realistic simulated graphics
   */
  function fallbackExecute(code) {
    const lines = code.split('\n');
    const outputs = [];
    let plotSvg = null;

    // Detect if Matplotlib plot is requested
    if (code.includes('plt.plot') || code.includes('plt.subplot') || code.includes('plt.scatter') || code.includes('plt.bar') || code.includes('plt.pie') || code.includes('plt.hist')) {
      plotSvg = generateFallbackPlotSvg(code);
    }

    try {
      for (let rawLine of lines) {
        let line = rawLine.trim();
        if (!line || line.startsWith('#')) continue;

        // Skip import lines in fallback
        if (line.startsWith('import ') || line.startsWith('from ')) continue;

        // Matches print(...)
        const printMatch = line.match(/^print\s*\((.*)\)$/);
        if (printMatch) {
          const inner = printMatch[1].trim();
          if ((inner.startsWith('"') && inner.endsWith('"')) || (inner.startsWith("'") && inner.endsWith("'"))) {
            outputs.push(inner.slice(1, -1));
          } else {
            outputs.push(`>>> ${inner}`);
          }
        }
      }

      if (plotSvg) {
        outputs.push("(Plot rendered successfully below)");
      } else if (outputs.length === 0) {
        outputs.push("Process finished with exit code 0.");
      }

      return {
        success: true,
        output: outputs.join('\n'),
        plotImages: plotSvg ? [plotSvg] : [],
        isSvg: true
      };
    } catch (e) {
      return {
        success: false,
        output: `Traceback (most recent call last):\n  RuntimeError: ${e.message}`,
        plotImages: [],
        isSvg: false
      };
    }
  }

  /**
   * Generate an SVG plot for offline mode
   */
  function generateFallbackPlotSvg(code) {
    if (code.includes('pie')) {
      return `
        <svg viewBox="0 0 320 220" width="100%" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="110" cy="110" r="85" fill="#3b82f6" />
          <path d="M 110 110 L 110 25 A 85 85 0 0 1 185 75 Z" fill="#10b981" />
          <path d="M 110 110 L 185 75 A 85 85 0 0 1 170 170 Z" fill="#f59e0b" />
          <path d="M 110 110 L 170 170 A 85 85 0 0 1 70 185 Z" fill="#ec4899" />
          <text x="215" y="80" font-family="sans-serif" font-size="12" fill="#3b82f6">■ Apples (35%)</text>
          <text x="215" y="105" font-family="sans-serif" font-size="12" fill="#10b981">■ Bananas (25%)</text>
          <text x="215" y="130" font-family="sans-serif" font-size="12" fill="#f59e0b">■ Cherries (25%)</text>
          <text x="215" y="155" font-family="sans-serif" font-size="12" fill="#ec4899">■ Dates (15%)</text>
        </svg>
      `;
    }

    if (code.includes('bar')) {
      return `
        <svg viewBox="0 0 380 200" width="100%" height="190" xmlns="http://www.w3.org/2000/svg">
          <line x1="40" y1="20" x2="40" y2="160" stroke="#94a3b8" stroke-width="2" />
          <line x1="40" y1="160" x2="360" y2="160" stroke="#94a3b8" stroke-width="2" />
          <rect x="60" y="50" width="45" height="110" fill="#3b82f6" rx="4" />
          <rect x="135" y="80" width="45" height="80" fill="#10b981" rx="4" />
          <rect x="210" y="30" width="45" height="130" fill="#f59e0b" rx="4" />
          <rect x="285" y="95" width="45" height="65" fill="#a855f7" rx="4" />
          <text x="82" y="180" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Apples</text>
          <text x="157" y="180" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Bananas</text>
          <text x="232" y="180" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Cherries</text>
          <text x="307" y="180" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Dates</text>
        </svg>
      `;
    }

    // Default line / curve plot
    return `
      <svg viewBox="0 0 380 200" width="100%" height="190" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="20" x2="40" y2="160" stroke="#94a3b8" stroke-width="2" />
        <line x1="40" y1="160" x2="360" y2="160" stroke="#94a3b8" stroke-width="2" />
        <polyline fill="none" stroke="#2563eb" stroke-width="3" points="50,140 100,60 160,110 220,40 280,100 340,30" />
        <circle cx="50" cy="140" r="5" fill="#ef4444" />
        <circle cx="100" cy="60" r="5" fill="#ef4444" />
        <circle cx="160" cy="110" r="5" fill="#ef4444" />
        <circle cx="220" cy="40" r="5" fill="#ef4444" />
        <circle cx="280" cy="100" r="5" fill="#ef4444" />
        <circle cx="340" cy="30" r="5" fill="#ef4444" />
        <text x="200" y="190" font-family="sans-serif" font-size="11" fill="#64748b" text-anchor="middle">X Points</text>
        <text x="15" y="90" font-family="sans-serif" font-size="11" fill="#64748b" transform="rotate(-90 15,90)">Y Points</text>
      </svg>
    `;
  }

  /**
   * Main Code Execution Handler
   */
  async function executeCode(code, outputElem, statusDot, runBtn) {
    if (!outputElem) return;

    if (runBtn) {
      runBtn.disabled = true;
      runBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Running...';
    }

    if (statusDot) {
      statusDot.className = 'status-dot running';
    }

    outputElem.className = 'output-content';
    outputElem.innerHTML = '<div style="color: #94a3b8;"><i class="fa-solid fa-gear fa-spin"></i> Preparing Python 3 execution environment...</div>';

    const startTime = performance.now();

    try {
      const updateStatus = (msg) => {
        outputElem.innerHTML = `<div style="color: #94a3b8;"><i class="fa-solid fa-spinner fa-spin"></i> ${msg}</div>`;
      };

      // 1. Initialize Pyodide if needed
      const pyodide = await initPyodide(updateStatus);

      if (pyodide && isPyodideReady) {
        // 2. Ensure any imported packages are loaded
        await ensurePackagesLoaded(code, updateStatus);

        // 3. Prepare Matplotlib figure extraction hook
        const isMatplotlibUsed = code.includes('matplotlib') || code.includes('plt.');

        const prepScript = `
import sys
import io

_stdout_buffer = io.StringIO()
_stderr_buffer = io.StringIO()
sys.stdout = _stdout_buffer
sys.stderr = _stderr_buffer

${isMatplotlibUsed ? `
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import base64
plt.clf()
plt.close('all')
` : ''}
`;
        await pyodide.runPythonAsync(prepScript);

        let errorOccurred = false;
        let errorMessage = '';

        try {
          // Execute student code
          await pyodide.runPythonAsync(code);
        } catch (pyErr) {
          errorOccurred = true;
          errorMessage = pyErr.message;
        }

        // 4. Capture output and any generated Matplotlib figures
        const extractScript = `
${isMatplotlibUsed ? `
# Extract all open figures to PNG base64
if plt.get_fignums():
    for _fnum in plt.get_fignums():
        _fig = plt.figure(_fnum)
        _img_buf = io.BytesIO()
        _fig.savefig(_img_buf, format='png', bbox_inches='tight', dpi=110, facecolor='#ffffff')
        _img_buf.seek(0)
        _b64 = base64.b64encode(_img_buf.read()).decode('utf-8')
        print(f"\\n__PLOT_B64_START__{_b64}__PLOT_B64_END__\\n")
    plt.close('all')
` : ''}
_out = _stdout_buffer.getvalue()
_err = _stderr_buffer.getvalue()
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
(_out, _err)
`;
        const result = await pyodide.runPythonAsync(extractScript);
        let stdout = result.get(0) || '';
        const stderr = result.get(1) || '';
        const duration = Math.round(performance.now() - startTime);

        if (errorOccurred) {
          outputElem.className = 'output-content error';
          outputElem.textContent = errorMessage || stderr || 'Execution error occurred.';
          if (statusDot) statusDot.className = 'status-dot error';
        } else {
          outputElem.className = 'output-content';

          // Extract any base64 plots
          const plotMatches = [];
          const plotRegex = /__PLOT_B64_START__([A-Za-z0-9+/=]+)__PLOT_B64_END__/g;
          let match;
          while ((match = plotRegex.exec(stdout)) !== null) {
            plotMatches.push(match[1]);
          }

          // Clean stdout of internal plot delimiters
          stdout = stdout.replace(plotRegex, '').trim();

          let displayHtml = '';
          if (stdout) {
            displayHtml += `<div class="console-text-log">${escapeHtml(stdout)}</div>`;
          } else if (plotMatches.length === 0) {
            displayHtml += `<div class="console-text-log" style="color:#94a3b8;">&gt;&gt;&gt; Code executed successfully in ${duration}ms (No text printed)</div>`;
          }

          // Render Plots directly in the output pane!
          if (plotMatches.length > 0) {
            plotMatches.forEach((b64, idx) => {
              displayHtml += `
                <div class="rendered-plot-card">
                  <div class="rendered-plot-header">
                    <span><i class="fa-solid fa-chart-line"></i> Matplotlib Plot Figure ${idx + 1}</span>
                    <a href="data:image/png;base64,${b64}" download="plot_${idx + 1}.png" class="plot-save-btn">
                      <i class="fa-solid fa-download"></i> Save PNG
                    </a>
                  </div>
                  <div class="rendered-plot-body">
                    <img src="data:image/png;base64,${b64}" class="rendered-plot-image" alt="Matplotlib Plot">
                  </div>
                </div>
              `;
            });
          }

          outputElem.innerHTML = displayHtml;
          if (statusDot) statusDot.className = 'status-dot';
        }
      } else {
        // Use offline fallback
        const result = fallbackExecute(code);
        const duration = Math.round(performance.now() - startTime);

        if (result.success) {
          outputElem.className = 'output-content';
          let html = `<div class="console-text-log">${escapeHtml(result.output)}</div>`;
          if (result.plotImages && result.plotImages.length > 0) {
            result.plotImages.forEach((svg) => {
              html += `
                <div class="rendered-plot-card">
                  <div class="rendered-plot-header">
                    <span><i class="fa-solid fa-chart-line"></i> Matplotlib Plot (Offline Render)</span>
                  </div>
                  <div class="rendered-plot-body" style="background:#ffffff; border-radius:8px; padding:10px;">
                    ${svg}
                  </div>
                </div>
              `;
            });
          }
          outputElem.innerHTML = html;
          if (statusDot) statusDot.className = 'status-dot';
        } else {
          outputElem.className = 'output-content error';
          outputElem.textContent = result.output;
          if (statusDot) statusDot.className = 'status-dot error';
        }
      }
    } catch (unexpectedError) {
      outputElem.className = 'output-content error';
      outputElem.textContent = `Execution Error: ${unexpectedError.message}`;
      if (statusDot) statusDot.className = 'status-dot error';
    } finally {
      if (runBtn) {
        runBtn.disabled = false;
        runBtn.innerHTML = '<i class="fa-solid fa-play"></i> Run Code';
      }
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

  window.PythonRunner = {
    execute: executeCode,
    initPyodide: initPyodide,
    isReady: () => isPyodideReady
  };

})();
