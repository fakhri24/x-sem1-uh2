/**
 * Interactive Presentation Controller for Logaritma UH 2
 * Mode Papan Tulis Matematika Bersih & Sejajar (Clean Aligned Chalkboard)
 */

let state = {
  currentSet: 'setA',
  currentQuestionIndex: 0,
  currentStepIndex: 0,
  isDark: true
};

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Read query parameters if available
  const params = new URLSearchParams(window.location.search);
  if (params.get('set') && SLIDES_DATA[params.get('set')]) {
    state.currentSet = params.get('set');
  }
  if (params.get('q')) {
    const qNum = parseInt(params.get('q'), 10);
    if (!isNaN(qNum) && qNum >= 1 && qNum <= 10) {
      state.currentQuestionIndex = qNum - 1;
    }
  }
  if (params.get('step')) {
    const sNum = parseInt(params.get('step'), 10);
    if (!isNaN(sNum) && sNum >= 0) {
      state.currentStepIndex = sNum;
    }
  }

  initTheme();
  renderQuestionPills();
  renderSlide();
  setupKeyboardNavigation();
  lucide.createIcons();
});

function syncUrl() {
  const url = new URL(window.location);
  url.searchParams.set('set', state.currentSet);
  url.searchParams.set('q', state.currentQuestionIndex + 1);
  url.searchParams.set('step', state.currentStepIndex);
  window.history.replaceState({}, '', url);
}

// Helper to render KaTeX into an element safely
function renderKaTeX(latex, element, displayMode = true) {
  if (!window.katex) {
    element.textContent = latex;
    return;
  }
  try {
    katex.render(latex, element, {
      displayMode: displayMode,
      throwOnError: false
    });
  } catch (err) {
    console.error('KaTeX rendering error:', err);
    element.textContent = latex;
  }
}

// Helper to render mixed text and KaTeX math ($...$) in question prompts
function renderPromptWithKaTeX(text, element) {
  if (!text) {
    element.textContent = 'Tentukan nilai dari:';
    return;
  }
  if (!text.includes('$') || !window.katex) {
    element.textContent = text;
    return;
  }
  element.innerHTML = '';
  const parts = text.split('$');
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 1) {
      // Inside inline math $...$
      const span = document.createElement('span');
      span.className = 'inline-block mx-1 font-serif text-slate-800 dark:text-gray-200';
      try {
        katex.render(parts[i], span, { displayMode: false, throwOnError: false });
      } catch (err) {
        span.textContent = parts[i];
      }
      element.appendChild(span);
    } else if (parts[i].length > 0) {
      element.appendChild(document.createTextNode(parts[i]));
    }
  }
}

// Render 1..10 question buttons in Left Rail (1-Column Vertical List)
function renderQuestionPills() {
  const container = document.getElementById('question-pills');
  if (!container) return;
  container.innerHTML = '';

  const questions = SLIDES_DATA[state.currentSet];
  questions.forEach((q, idx) => {
    const isCurrent = (idx === state.currentQuestionIndex);
    const hasSteps = (q.steps && q.steps.length > 0) || (q.totalSteps && q.totalSteps > 0);
    const btn = document.createElement('button');
    btn.className = `w-full py-1.5 px-2.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-between border ${
      isCurrent
        ? 'bg-cyan-600 text-white border-cyan-500 shadow-xs'
        : 'bg-slate-50 dark:bg-gray-800/50 border-slate-200/80 dark:border-gray-700/50 text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-slate-900 dark:hover:text-white'
    }`;
    btn.innerHTML = `
      <span class="flex items-center gap-1.5">
        <span class="text-[10px] ${isCurrent ? 'text-cyan-200' : 'text-slate-400 dark:text-gray-500'} font-mono">${idx + 1}.</span>
        <span>Soal ${idx + 1}</span>
      </span>
      ${isCurrent 
        ? '<span class="w-1.5 h-1.5 rounded-full bg-white shadow-xs"></span>' 
        : (hasSteps ? '<span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>' : '<span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-600"></span>')
      }
    `;
    btn.title = `Lompat ke Soal ${idx + 1}`;
    btn.onclick = () => goToQuestion(idx + 1);
    container.appendChild(btn);
  });
}

// Main Render Function
function renderSlide() {
  const questions = SLIDES_DATA[state.currentSet];
  const question = questions[state.currentQuestionIndex];
  const totalQuestions = questions.length;
  const maxSteps = question.totalSteps || (question.steps ? question.steps.length : 0);

  // Clamp currentStepIndex if out of bounds
  if (state.currentStepIndex > maxSteps) {
    state.currentStepIndex = maxSteps;
  }

  // 1. Update Badges & Prompts
  document.getElementById('slide-badge-set').textContent = question.set;
  document.getElementById('slide-badge-category').textContent = question.category;
  document.getElementById('slide-badge-num').textContent = `Soal ${state.currentQuestionIndex + 1} dari ${totalQuestions}`;
  document.getElementById('slide-counter-badge').textContent = `${state.currentQuestionIndex + 1} / ${totalQuestions}`;

  // Set switcher button states
  const btnSetA = document.getElementById('btn-set-a');
  const btnSetB = document.getElementById('btn-set-b');
  if (btnSetA && btnSetB) {
    if (state.currentSet === 'setA') {
      btnSetA.className = 'w-full py-1.5 px-2.5 rounded-lg transition-all text-white bg-cyan-600 shadow-sm text-left flex items-center justify-between text-xs font-bold';
      btnSetB.className = 'w-full py-1.5 px-2.5 rounded-lg transition-all text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white text-left flex items-center justify-between text-xs font-semibold';
    } else {
      btnSetB.className = 'w-full py-1.5 px-2.5 rounded-lg transition-all text-white bg-cyan-600 shadow-sm text-left flex items-center justify-between text-xs font-bold';
      btnSetA.className = 'w-full py-1.5 px-2.5 rounded-lg transition-all text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white text-left flex items-center justify-between text-xs font-semibold';
    }
  }

  // Prompt text
  const promptEl = document.getElementById('question-prompt');
  renderPromptWithKaTeX(question.prompt || 'Tentukan nilai dari:', promptEl);

  // 2. Render Chalkboard Stage
  const stage = document.getElementById('chalkboard-stage');
  stage.innerHTML = '';

  if (maxSteps === 0) {
    // Unimplemented question placeholder
    const wrap = document.createElement('div');
    wrap.className = 'flex flex-col items-center justify-center text-center py-6';
    
    const mathEl = document.createElement('div');
    mathEl.className = 'text-center text-slate-900 dark:text-gray-100 fade-pop-in mb-6';
    renderKaTeX(question.initialLHS, mathEl, true);
    wrap.appendChild(mathEl);

    const info = document.createElement('div');
    info.className = 'text-xs text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/60 rounded-full px-4 py-1.5 font-medium';
    info.textContent = 'Langkah pengerjaan nomor ini siap ditambahkan selanjutnya.';
    wrap.appendChild(info);

    stage.appendChild(wrap);
  } else if (question.layout === 'split-combine') {
    renderSplitCombineSlide(question, stage);
  } else if (question.layout === 'stacked') {
    renderStackedSlide(question, stage);
  } else {
    // In-Place Reveal: Pre-render all steps in a fixed-geometry grid.
    // Elements beyond currentStepIndex are set to 'invisible opacity-0 pointer-events-none'.
    // Because 'invisible' elements preserve their full layout dimensions, the question
    // and all equal signs remain locked at the exact same pixels from Step 0 through completion.
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-[auto_min-content_auto] items-center gap-y-4 md:gap-y-6 w-fit mx-auto py-2';

    // Row 1: Left-hand side (question) - Always visible in its locked permanent position!
    const lhs = document.createElement('div');
    lhs.className = 'text-right text-slate-900 dark:text-gray-100 flex items-center justify-end';
    renderKaTeX('{\\displaystyle ' + question.initialLHS + '}', lhs, false);
    grid.appendChild(lhs);

    // Row 1: Equals sign
    const isStep1Visible = (state.currentStepIndex >= 1);
    const isStep1Latest = (state.currentStepIndex === 1);
    const eq1 = document.createElement('div');
    eq1.className = `px-2 md:px-3 flex items-center justify-center font-sans transition-opacity duration-200 ${
      isStep1Visible
        ? (isStep1Latest ? 'text-cyan-600 dark:text-cyan-400 fade-appear' : 'text-slate-400 dark:text-gray-400')
        : 'invisible opacity-0 pointer-events-none'
    }`;
    renderKaTeX('=', eq1, false);
    grid.appendChild(eq1);

    // Row 1: Right-hand side (Step 1)
    const rhs1 = document.createElement('div');
    rhs1.className = `text-left flex items-center justify-start text-slate-900 dark:text-gray-100 transition-opacity duration-200 ${
      isStep1Visible
        ? (isStep1Latest ? 'font-medium fade-appear' : '')
        : 'invisible opacity-0 pointer-events-none'
    }`;
    renderKaTeX('{\\displaystyle ' + question.steps[0].rhs + '}', rhs1, false);
    grid.appendChild(rhs1);

    // Additional rows (Step 2 through maxSteps)
    for (let s = 1; s < maxSteps; s++) {
      const stepData = question.steps[s];
      const stepNum = s + 1; // 1-indexed step number (2, 3, 4...)
      const isVisible = (state.currentStepIndex >= stepNum);
      const isLatest = (state.currentStepIndex === stepNum);
      const isFinal = stepData.isFinal;

      // Col 1: Empty placeholder under LHS
      const emptyCol = document.createElement('div');
      grid.appendChild(emptyCol);

      // Col 2: Aligned Equals sign
      const eq = document.createElement('div');
      eq.className = `px-2 md:px-3 flex items-center justify-center font-sans transition-opacity duration-200 ${
        isVisible
          ? (isFinal
              ? 'text-emerald-600 dark:text-emerald-400 ' + (isLatest ? 'fade-appear' : '')
              : (isLatest ? 'text-cyan-600 dark:text-cyan-400 fade-appear' : 'text-slate-400 dark:text-gray-400'))
          : 'invisible opacity-0 pointer-events-none'
      }`;
      renderKaTeX(stepData.eq || '=', eq, false);
      grid.appendChild(eq);

      // Col 3: Aligned RHS expression (Flush Left)
      const rhs = document.createElement('div');
      rhs.className = `text-left flex items-center justify-start transition-opacity duration-200 ${
        isVisible
          ? (isFinal
              ? 'text-emerald-600 dark:text-emerald-400 font-bold final-glow ' + (isLatest ? 'fade-appear' : '')
              : 'text-slate-900 dark:text-gray-100 ' + (isLatest ? 'font-medium fade-appear' : ''))
          : 'invisible opacity-0 pointer-events-none'
      }`;
      renderKaTeX('{\\displaystyle ' + stepData.rhs + '}', rhs, false);
      grid.appendChild(rhs);
    }

    stage.appendChild(grid);
  }

  // 3. Update Indicator Dots & Buttons
  renderStepDots(maxSteps);

  const prevStepBtn = document.getElementById('btn-prev-step');
  const nextStepBtn = document.getElementById('btn-next-step');
  const nextStepText = document.getElementById('btn-next-step-text');
  const prevSlideBtn = document.getElementById('btn-prev-slide');
  const nextSlideBtn = document.getElementById('btn-next-slide');

  if (prevSlideBtn) prevSlideBtn.disabled = (state.currentQuestionIndex === 0);
  if (nextSlideBtn) nextSlideBtn.disabled = (state.currentQuestionIndex === totalQuestions - 1);

  if (prevStepBtn) prevStepBtn.disabled = (state.currentStepIndex === 0);

  if (nextStepBtn && nextStepText) {
    if (state.currentStepIndex < maxSteps) {
      nextStepText.textContent = `Langkah ${state.currentStepIndex + 1}`;
      nextStepBtn.classList.remove('from-emerald-600', 'to-teal-600');
      nextStepBtn.classList.add('from-cyan-500', 'to-blue-600');
    } else {
      if (state.currentQuestionIndex < totalQuestions - 1) {
        nextStepText.textContent = 'Soal Berikutnya';
        nextStepBtn.classList.remove('from-cyan-500', 'to-blue-600');
        nextStepBtn.classList.add('from-emerald-600', 'to-teal-600');
      } else {
        nextStepText.textContent = 'Selesai';
      }
    }
  }

  renderQuestionPills();
  lucide.createIcons();
  syncUrl();
}

// Render Split-Combine Multi-Column Layout (Soal 2, etc.)
function renderSplitCombineSlide(question, stage) {
  const container = document.createElement('div');
  container.className = 'w-full max-w-5xl mx-auto flex flex-col items-center py-1';

  // 1. Question Header / Persistent Formula at top
  const headerWrap = document.createElement('div');
  headerWrap.className = 'text-center pb-3 mb-2 border-b border-slate-200/80 dark:border-gray-800/80 w-full';
  
  const formulaEl = document.createElement('div');
  formulaEl.className = 'text-2xl md:text-3xl text-slate-900 dark:text-gray-100 font-serif';
  renderKaTeX('{\\displaystyle ' + question.initialLHS + '}', formulaEl, true);
  headerWrap.appendChild(formulaEl);
  container.appendChild(headerWrap);

  // 2. Middle Section: Two Columns (Left & Right)
  const columnsWrap = document.createElement('div');
  columnsWrap.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full relative py-2 items-start';

  // Subtle vertical divider for desktop
  const vDivider = document.createElement('div');
  vDivider.className = 'hidden md:block absolute top-2 bottom-2 left-1/2 w-px bg-gradient-to-b from-transparent via-slate-200 dark:via-gray-800 to-transparent -translate-x-1/2 pointer-events-none';
  columnsWrap.appendChild(vDivider);

  // Helper to render branch grid (zero-drift)
  function createBranchColumn(branchData, defaultBadgeColor) {
    const colEl = document.createElement('div');
    colEl.className = 'split-col flex flex-col items-center w-full';

    // Badge
    const badgeWrap = document.createElement('div');
    badgeWrap.className = 'flex items-center gap-1.5 mb-2.5';
    const dot = document.createElement('span');
    dot.className = `w-2 h-2 rounded-full ${defaultBadgeColor === 'cyan' ? 'bg-cyan-400' : 'bg-amber-400'}`;
    const label = document.createElement('span');
    label.className = `text-[11px] font-bold uppercase tracking-wider ${defaultBadgeColor === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' : 'text-amber-600 dark:text-amber-400'}`;
    label.textContent = branchData.badge || (defaultBadgeColor === 'cyan' ? 'Suku Pertama' : 'Suku Kedua');
    badgeWrap.appendChild(dot);
    badgeWrap.appendChild(label);
    colEl.appendChild(badgeWrap);

    // Equation Grid
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-[auto_min-content_auto] items-center gap-y-2 md:gap-y-3 w-fit mx-auto';

    // Row 1: LHS
    const lhs = document.createElement('div');
    lhs.className = 'text-right text-slate-900 dark:text-gray-100 flex items-center justify-end';
    renderKaTeX('{\\displaystyle ' + branchData.initialLHS + '}', lhs, false);
    grid.appendChild(lhs);

    // Row 1: Step 1
    const step1 = branchData.steps[0];
    const isStep1Visible = (state.currentStepIndex >= step1.stepNum);
    const isStep1Latest = (state.currentStepIndex === step1.stepNum);

    const eq1 = document.createElement('div');
    eq1.className = `px-2 flex items-center justify-center font-sans transition-opacity duration-200 ${
      isStep1Visible
        ? (isStep1Latest ? 'text-cyan-600 dark:text-cyan-400 fade-appear' : 'text-slate-400 dark:text-gray-400')
        : 'invisible opacity-0 pointer-events-none'
    }`;
    renderKaTeX(step1.eq || '=', eq1, false);
    grid.appendChild(eq1);

    const rhs1 = document.createElement('div');
    rhs1.className = `text-left flex items-center justify-start transition-opacity duration-200 ${
      isStep1Visible
        ? (isStep1Latest ? 'font-medium fade-appear' : 'text-slate-900 dark:text-gray-100')
        : 'invisible opacity-0 pointer-events-none'
    }`;
    renderKaTeX('{\\displaystyle ' + step1.rhs + '}', rhs1, false);
    grid.appendChild(rhs1);

    // Rows 2..N
    for (let i = 1; i < branchData.steps.length; i++) {
      const s = branchData.steps[i];
      const isVisible = (state.currentStepIndex >= s.stepNum);
      const isLatest = (state.currentStepIndex === s.stepNum);

      const empty = document.createElement('div');
      grid.appendChild(empty);

      const eq = document.createElement('div');
      eq.className = `px-2 flex items-center justify-center font-sans transition-opacity duration-200 ${
        isVisible
          ? (s.isSubFinal
              ? 'text-slate-400 dark:text-gray-400 font-bold ' + (isLatest ? 'fade-appear' : '')
              : (isLatest ? 'text-cyan-600 dark:text-cyan-400 fade-appear' : 'text-slate-400 dark:text-gray-400'))
          : 'invisible opacity-0 pointer-events-none'
      }`;
      renderKaTeX(s.eq || '=', eq, false);
      grid.appendChild(eq);

      const rhs = document.createElement('div');
      rhs.className = `text-left flex items-center justify-start transition-opacity duration-200 ${
        isVisible
          ? (s.isSubFinal
              ? 'font-bold ' + (isLatest ? 'fade-appear' : '')
              : (isLatest ? 'font-medium fade-appear' : 'text-slate-900 dark:text-gray-100'))
          : 'invisible opacity-0 pointer-events-none'
      }`;
      renderKaTeX('{\\displaystyle ' + s.rhs + '}', rhs, false);
      grid.appendChild(rhs);
    }

    colEl.appendChild(grid);
    return colEl;
  }

  columnsWrap.appendChild(createBranchColumn(question.split.left, 'cyan'));
  columnsWrap.appendChild(createBranchColumn(question.split.right, 'amber'));
  container.appendChild(columnsWrap);

  // 3. Bottom Section: Divider + Penggabungan
  const cData = question.split.combine;
  const lhsStep = cData.lhsStepNum || 11;
  const isCombineVisible = (state.currentStepIndex >= lhsStep);
  const bottomWrap = document.createElement('div');
  bottomWrap.className = 'w-full flex flex-col items-center mt-2 pt-2 border-t border-slate-200/80 dark:border-gray-800/80';

  const combineBadge = document.createElement('div');
  combineBadge.className = `flex items-center gap-1.5 mb-2 transition-opacity duration-200 ${
    isCombineVisible ? 'opacity-100' : 'invisible opacity-0 pointer-events-none'
  }`;
  combineBadge.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
    <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Penggabungan & Hasil Akhir</span>
  `;
  bottomWrap.appendChild(combineBadge);

  const combineGrid = document.createElement('div');
  combineGrid.className = 'combine-col grid grid-cols-[auto_min-content_auto] items-center gap-y-2 md:gap-y-3 w-fit mx-auto';

  // Step 11: LHS of Combine row (formula soal awal di bawah)
  const isLhsVisible = (state.currentStepIndex >= lhsStep);
  const isLhsLatest = (state.currentStepIndex === lhsStep);

  const cLhs = document.createElement('div');
  cLhs.className = `text-right text-slate-900 dark:text-gray-100 flex items-center justify-end transition-opacity duration-200 ${
    isLhsVisible ? (isLhsLatest ? 'fade-appear' : '') : 'invisible opacity-0 pointer-events-none'
  }`;
  renderKaTeX('{\\displaystyle ' + cData.initialLHS + '}', cLhs, false);
  combineGrid.appendChild(cLhs);

  // Step 12: Combine Row 1 RHS (= 8 + 9)
  const cStep1 = cData.steps[0];
  const isC1Visible = (state.currentStepIndex >= cStep1.stepNum);
  const isC1Latest = (state.currentStepIndex === cStep1.stepNum);

  const cEq1 = document.createElement('div');
  cEq1.className = `px-2 md:px-3 flex items-center justify-center font-sans transition-opacity duration-200 ${
    isC1Visible ? (isC1Latest ? 'text-cyan-600 dark:text-cyan-400 fade-appear' : 'text-slate-400 dark:text-gray-400') : 'invisible opacity-0 pointer-events-none'
  }`;
  renderKaTeX(cStep1.eq || '=', cEq1, false);
  combineGrid.appendChild(cEq1);

  const cRhs1 = document.createElement('div');
  cRhs1.className = `text-left flex items-center justify-start transition-opacity duration-200 ${
    isC1Visible ? (isC1Latest ? 'font-medium fade-appear' : 'text-slate-900 dark:text-gray-100') : 'invisible opacity-0 pointer-events-none'
  }`;
  renderKaTeX('{\\displaystyle ' + cStep1.rhs + '}', cRhs1, false);
  combineGrid.appendChild(cRhs1);

  // Step 13: Final Answer (= 17)
  const cStep2 = cData.steps[1];
  const isC2Visible = (state.currentStepIndex >= cStep2.stepNum);
  const isC2Latest = (state.currentStepIndex === cStep2.stepNum);

  const empty2 = document.createElement('div');
  combineGrid.appendChild(empty2);

  const cEq2 = document.createElement('div');
  cEq2.className = `px-2 md:px-3 flex items-center justify-center font-sans transition-opacity duration-200 ${
    isC2Visible ? 'text-emerald-600 dark:text-emerald-400 ' + (isC2Latest ? 'fade-appear' : '') : 'invisible opacity-0 pointer-events-none'
  }`;
  renderKaTeX(cStep2.eq || '=', cEq2, false);
  combineGrid.appendChild(cEq2);

  const cRhs2 = document.createElement('div');
  cRhs2.className = `text-left flex items-center justify-start transition-opacity duration-200 ${
    isC2Visible ? 'text-emerald-600 dark:text-emerald-400 font-bold final-glow ' + (isC2Latest ? 'fade-appear' : '') : 'invisible opacity-0 pointer-events-none'
  }`;
  renderKaTeX('{\\displaystyle ' + cStep2.rhs + '}', cRhs2, false);
  combineGrid.appendChild(cRhs2);

  bottomWrap.appendChild(combineGrid);
  container.appendChild(bottomWrap);

  stage.appendChild(container);
}

// Render Stacked / Top-Header Layout (Soal 3, etc.)
function renderStackedSlide(question, stage) {
  const container = document.createElement('div');
  container.className = 'stacked-slide w-full max-w-4xl mx-auto flex flex-col items-center py-2';

  // 1. Question Header / Persistent Formula at top center
  const headerWrap = document.createElement('div');
  headerWrap.className = 'stacked-header text-center pb-3 mb-4 md:mb-5 border-b border-slate-200/80 dark:border-gray-800/80 w-full max-w-2xl';
  
  const formulaEl = document.createElement('div');
  formulaEl.className = 'text-slate-900 dark:text-gray-100 font-serif';
  renderKaTeX('{\\displaystyle ' + question.initialLHS + '}', formulaEl, true);
  headerWrap.appendChild(formulaEl);
  container.appendChild(headerWrap);

  // 2. Derivation Grid: 2 columns [min-content_auto]
  // In-place reveal with zero drift: all rows pre-rendered
  const grid = document.createElement('div');
  grid.className = 'stacked-grid grid grid-cols-[min-content_auto] items-center gap-y-3 md:gap-y-4 w-fit mx-auto';

  const maxSteps = question.totalSteps || (question.steps ? question.steps.length : 0);

  for (let s = 0; s < maxSteps; s++) {
    const stepData = question.steps[s];
    const stepNum = s + 1; // 1-indexed step number
    const isVisible = (state.currentStepIndex >= stepNum);
    const isLatest = (state.currentStepIndex === stepNum);
    const isFinal = stepData.isFinal;

    // Col 1: Aligned Equals sign
    const eq = document.createElement('div');
    eq.className = `pr-3 md:pr-4 flex items-center justify-end font-sans transition-opacity duration-200 ${
      isVisible
        ? (isFinal
            ? 'text-emerald-600 dark:text-emerald-400 ' + (isLatest ? 'fade-appear' : '')
            : (isLatest ? 'text-cyan-600 dark:text-cyan-400 fade-appear' : 'text-slate-400 dark:text-gray-400'))
        : 'invisible opacity-0 pointer-events-none'
    }`;
    renderKaTeX(stepData.eq || '=', eq, false);
    grid.appendChild(eq);

    // Col 2: Aligned RHS expression (Flush Left)
    const rhs = document.createElement('div');
    rhs.className = `text-left flex items-center justify-start transition-opacity duration-200 ${
      isVisible
        ? (isFinal
            ? 'text-emerald-600 dark:text-emerald-400 font-bold final-glow ' + (isLatest ? 'fade-appear' : '')
            : 'text-slate-900 dark:text-gray-100 ' + (isLatest ? 'font-medium fade-appear' : ''))
        : 'invisible opacity-0 pointer-events-none'
    }`;
    renderKaTeX('{\\displaystyle ' + stepData.rhs + '}', rhs, false);
    grid.appendChild(rhs);
  }

  container.appendChild(grid);
  stage.appendChild(container);
}

// Render Step Dots in Right Rail (Vertical Track)
function renderStepDots(totalSteps) {
  const container = document.getElementById('step-indicator-dots');
  if (!container) return;
  container.innerHTML = '';

  // Dot 0 = Question
  const qDot = document.createElement('div');
  qDot.className = `rounded-full transition-all cursor-pointer ${
    state.currentStepIndex === 0 
      ? 'h-5 w-2 bg-cyan-400 shadow-sm shadow-cyan-400/50 ring-2 ring-cyan-400/30' 
      : 'h-2 w-2 bg-slate-300 dark:bg-gray-700 hover:bg-slate-400'
  }`;
  qDot.title = 'Soal Awal';
  qDot.onclick = () => { state.currentStepIndex = 0; renderSlide(); };
  container.appendChild(qDot);

  for (let i = 1; i <= totalSteps; i++) {
    const dot = document.createElement('div');
    const isPast = state.currentStepIndex >= i;
    const isCurrent = state.currentStepIndex === i;
    const isFinal = (i === totalSteps);
    
    let dotClass = 'h-2 w-2 bg-slate-300 dark:bg-gray-700 hover:bg-slate-400';
    if (isCurrent) {
      dotClass = isFinal
        ? 'h-5 w-2 bg-emerald-400 shadow-sm shadow-emerald-400/60 ring-2 ring-emerald-400/30'
        : 'h-5 w-2 bg-cyan-400 shadow-sm shadow-cyan-400/60 ring-2 ring-cyan-400/30';
    } else if (isPast) {
      dotClass = isFinal
        ? 'h-2 w-2 bg-emerald-500'
        : 'h-2 w-2 bg-cyan-500';
    }

    dot.className = `rounded-full transition-all cursor-pointer ${dotClass}`;
    dot.title = isFinal ? 'Jawaban Akhir' : `Langkah ${i}`;
    dot.onclick = () => { state.currentStepIndex = i; renderSlide(); };
    container.appendChild(dot);
  }
}

// Navigation Functions
function nextStep() {
  const questions = SLIDES_DATA[state.currentSet];
  const question = questions[state.currentQuestionIndex];
  const maxSteps = question.totalSteps || (question.steps ? question.steps.length : 0);

  if (state.currentStepIndex < maxSteps) {
    state.currentStepIndex++;
    renderSlide();
  } else {
    // If finished all steps of this question, advance to next question
    if (state.currentQuestionIndex < questions.length - 1) {
      nextSlide();
    }
  }
}

function prevStep() {
  if (state.currentStepIndex > 0) {
    state.currentStepIndex--;
    renderSlide();
  }
}

function resetSteps() {
  state.currentStepIndex = 0;
  renderSlide();
}

function nextSlide() {
  const questions = SLIDES_DATA[state.currentSet];
  if (state.currentQuestionIndex < questions.length - 1) {
    state.currentQuestionIndex++;
    state.currentStepIndex = 0;
    renderSlide();
  }
}

function prevSlide() {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex--;
    state.currentStepIndex = 0;
    renderSlide();
  }
}

function goToQuestion(num) {
  const targetIndex = num - 1;
  const questions = SLIDES_DATA[state.currentSet];
  if (targetIndex >= 0 && targetIndex < questions.length) {
    state.currentQuestionIndex = targetIndex;
    state.currentStepIndex = 0;
    renderSlide();
  }
}

function switchSet(setName) {
  if (state.currentSet !== setName) {
    state.currentSet = setName;
    state.currentQuestionIndex = 0;
    state.currentStepIndex = 0;
    renderSlide();
  }
}

// Theme Handlers
function initTheme() {
  const params = new URLSearchParams(window.location.search);
  const themeParam = params.get('theme');
  const saved = themeParam || localStorage.getItem('log-theme');
  if (saved === 'light') {
    state.isDark = false;
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  } else {
    state.isDark = true;
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }
  updateThemeIcon();
}

function toggleTheme() {
  state.isDark = !state.isDark;
  if (state.isDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    localStorage.setItem('log-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    localStorage.setItem('log-theme', 'light');
  }
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById('btn-theme');
  if (!btn) return;
  if (state.isDark) {
    btn.innerHTML = '<i data-lucide="moon" class="w-4 h-4 text-cyan-400"></i>';
  } else {
    btn.innerHTML = '<i data-lucide="sun" class="w-4 h-4 text-amber-500"></i>';
  }
  lucide.createIcons();
}

// Fullscreen
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn('Fullscreen request failed:', err);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Keyboard shortcuts modal
function toggleHelpModal() {
  const modal = document.getElementById('help-modal');
  modal.classList.toggle('hidden');
}

// Keyboard listener
function setupKeyboardNavigation() {
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.code) {
      case 'Space':
      case 'ArrowRight':
      case 'Enter':
        e.preventDefault();
        nextStep();
        break;
      case 'ArrowLeft':
      case 'Backspace':
        e.preventDefault();
        prevStep();
        break;
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        prevSlide();
        break;
      case 'KeyR':
        e.preventDefault();
        resetSteps();
        break;
      case 'KeyF':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'KeyT':
        e.preventDefault();
        toggleTheme();
        break;
      case 'Slash':
        if (e.shiftKey) { // '?'
          e.preventDefault();
          toggleHelpModal();
        }
        break;
      case 'Digit1':
      case 'Digit2':
      case 'Digit3':
      case 'Digit4':
      case 'Digit5':
      case 'Digit6':
      case 'Digit7':
      case 'Digit8':
      case 'Digit9':
        goToQuestion(parseInt(e.key, 10));
        break;
      case 'Digit0':
        goToQuestion(10);
        break;
      case 'Escape':
        const modal = document.getElementById('help-modal');
        if (!modal.classList.contains('hidden')) {
          modal.classList.add('hidden');
        }
        break;
    }
  });
}
