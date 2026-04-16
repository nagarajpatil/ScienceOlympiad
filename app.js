/**
 * Dynamic Planet: Oceanography Quiz Application
 * Science Olympiad State-Level Practice
 */

// ===== State Management =====
const state = {
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: {},
    flaggedQuestions: new Set(),
    startTime: null,
    timeLimit: 3000, // seconds
    timerInterval: null,
    quizCompleted: false,
    settings: {
        questionCount: 40,
        difficulty: 'all',
        questionType: 'all',
        topics: [],
        timedMode: true
    }
};

// ===== Local Storage Keys =====
const STORAGE_KEYS = {
    SCORES: 'oceanography_quiz_scores',
    TOPIC_PERFORMANCE: 'oceanography_topic_performance',
    QUIZ_COUNT: 'oceanography_quiz_count'
};

// ===== DOM Elements =====
const elements = {
    // Screens
    welcomeScreen: document.getElementById('welcomeScreen'),
    quizScreen: document.getElementById('quizScreen'),
    resultsScreen: document.getElementById('resultsScreen'),
    reviewScreen: document.getElementById('reviewScreen'),
    
    // Stats
    bestScore: document.getElementById('bestScore'),
    quizzesTaken: document.getElementById('quizzesTaken'),
    avgScore: document.getElementById('avgScore'),
    
    // Settings
    questionCount: document.getElementById('questionCount'),
    difficulty: document.getElementById('difficulty'),
    questionType: document.getElementById('questionType'),
    timedMode: document.getElementById('timedMode'),
    timeLimit: document.getElementById('timeLimit'),
    timerSettings: document.getElementById('timerSettings'),
    
    // Quiz
    currentQ: document.getElementById('currentQ'),
    totalQ: document.getElementById('totalQ'),
    progressFill: document.getElementById('progressFill'),
    timerSection: document.getElementById('timerSection'),
    timerDisplay: document.getElementById('timerDisplay'),
    questionCard: document.getElementById('questionCard'),
    difficultyBadge: document.getElementById('difficultyBadge'),
    typeBadge: document.getElementById('typeBadge'),
    topicBadge: document.getElementById('topicBadge'),
    questionText: document.getElementById('questionText'),
    answerSection: document.getElementById('answerSection'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    flagBtn: document.getElementById('flagBtn'),
    questionNav: document.getElementById('questionNav'),
    submitQuizBtn: document.getElementById('submitQuizBtn'),
    
    // Results
    scoreCircle: document.getElementById('scoreCircle'),
    scoreNumber: document.getElementById('scoreNumber'),
    scoreLabel: document.getElementById('scoreLabel'),
    correctCount: document.getElementById('correctCount'),
    incorrectCount: document.getElementById('incorrectCount'),
    unansweredCount: document.getElementById('unansweredCount'),
    timeTaken: document.getElementById('timeTaken'),
    topicBreakdown: document.getElementById('topicBreakdown'),
    
    // Review
    reviewList: document.getElementById('reviewList'),
    
    // Weak Areas
    weakAreasCard: document.getElementById('weakAreasCard'),
    weakAreasList: document.getElementById('weakAreasList')
};

// ===== Utility Functions =====
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function getTopicDisplayName(topic) {
    const names = {
        'seawater': 'Seawater Properties',
        'surface-circulation': 'Surface Circulation',
        'large-scale-circulation': 'Large-Scale Circulation',
        'waves': 'Waves',
        'tides': 'Tides',
        'coastal': 'Coastal Features',
        'geological': 'Geological Oceanography',
        'climate': 'Climate Variability'
    };
    return names[topic] || topic;
}

function getDifficultyClass(difficulty) {
    return difficulty.toLowerCase().replace(' ', '-');
}

function getTypeDisplayName(type) {
    const names = {
        'mc': 'Multiple Choice',
        'short': 'Short Answer',
        'long': 'Long Answer',
        'data': 'Data/Diagram'
    };
    return names[type] || type;
}

// ===== Local Storage Functions =====
function loadStats() {
    const scores = JSON.parse(localStorage.getItem(STORAGE_KEYS.SCORES) || '[]');
    const quizCount = parseInt(localStorage.getItem(STORAGE_KEYS.QUIZ_COUNT) || '0');
    
    if (scores.length > 0) {
        const bestScore = Math.max(...scores);
        const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        
        elements.bestScore.textContent = `${bestScore}%`;
        elements.avgScore.textContent = `${avgScore}%`;
    }
    
    elements.quizzesTaken.textContent = quizCount;
    
    // Load weak areas
    loadWeakAreas();
}

function saveScore(score) {
    const scores = JSON.parse(localStorage.getItem(STORAGE_KEYS.SCORES) || '[]');
    scores.push(score);
    localStorage.setItem(STORAGE_KEYS.SCORES, JSON.stringify(scores));
    
    const quizCount = parseInt(localStorage.getItem(STORAGE_KEYS.QUIZ_COUNT) || '0') + 1;
    localStorage.setItem(STORAGE_KEYS.QUIZ_COUNT, quizCount.toString());
}

function saveTopicPerformance(topicStats) {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.TOPIC_PERFORMANCE) || '{}');
    
    for (const [topic, stats] of Object.entries(topicStats)) {
        if (!existing[topic]) {
            existing[topic] = { correct: 0, total: 0 };
        }
        existing[topic].correct += stats.correct;
        existing[topic].total += stats.total;
    }
    
    localStorage.setItem(STORAGE_KEYS.TOPIC_PERFORMANCE, JSON.stringify(existing));
}

function loadWeakAreas() {
    const performance = JSON.parse(localStorage.getItem(STORAGE_KEYS.TOPIC_PERFORMANCE) || '{}');
    
    if (Object.keys(performance).length === 0) {
        elements.weakAreasCard.style.display = 'none';
        return;
    }
    
    const weakTopics = [];
    for (const [topic, stats] of Object.entries(performance)) {
        const percentage = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
        if (percentage < 70 && stats.total >= 3) {
            weakTopics.push({ topic, percentage: Math.round(percentage) });
        }
    }
    
    if (weakTopics.length === 0) {
        elements.weakAreasCard.style.display = 'none';
        return;
    }
    
    weakTopics.sort((a, b) => a.percentage - b.percentage);
    
    elements.weakAreasList.innerHTML = weakTopics.slice(0, 4).map(item => 
        `<li>${getTopicDisplayName(item.topic)} <span class="weak-percent">(${item.percentage}%)</span></li>`
    ).join('');
    
    elements.weakAreasCard.style.display = 'block';
}

// ===== Screen Navigation =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// ===== Quiz Setup =====
function getSelectedTopics() {
    const checkboxes = document.querySelectorAll('.topic-checkboxes input[type="checkbox"]');
    return Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
}

function filterQuestions() {
    let filtered = [...QUESTIONS];
    
    // Filter by difficulty
    if (state.settings.difficulty !== 'all') {
        if (state.settings.difficulty === 'hard-mix') {
            filtered = filtered.filter(q => q.difficulty === 'tough' || q.difficulty === 'extra-hard');
        } else {
            filtered = filtered.filter(q => q.difficulty === state.settings.difficulty);
        }
    }
    
    // Filter by question type
    if (state.settings.questionType !== 'all') {
        filtered = filtered.filter(q => q.type === state.settings.questionType);
    }
    
    // Filter by topics
    if (state.settings.topics.length > 0) {
        filtered = filtered.filter(q => state.settings.topics.includes(q.topic));
    }
    
    return filtered;
}

function selectQuestions() {
    const available = filterQuestions();
    const count = Math.min(state.settings.questionCount, available.length);
    
    // Try to balance difficulty if selecting all difficulties
    if (state.settings.difficulty === 'all' && count >= 10) {
        const byDifficulty = {
            easy: available.filter(q => q.difficulty === 'easy'),
            medium: available.filter(q => q.difficulty === 'medium'),
            tough: available.filter(q => q.difficulty === 'tough'),
            'extra-hard': available.filter(q => q.difficulty === 'extra-hard')
        };
        
        // Proportions based on user's requested distribution
        const proportions = {
            easy: Math.round(count * 0.25),
            medium: Math.round(count * 0.30),
            tough: Math.round(count * 0.25),
            'extra-hard': Math.round(count * 0.20)
        };
        
        let selected = [];
        for (const [diff, targetCount] of Object.entries(proportions)) {
            const shuffled = shuffleArray(byDifficulty[diff]);
            selected = selected.concat(shuffled.slice(0, targetCount));
        }
        
        // Fill remaining with random
        const remaining = count - selected.length;
        if (remaining > 0) {
            const usedIds = new Set(selected.map(q => q.id));
            const unused = available.filter(q => !usedIds.has(q.id));
            selected = selected.concat(shuffleArray(unused).slice(0, remaining));
        }
        
        return shuffleArray(selected).slice(0, count);
    }
    
    return shuffleArray(available).slice(0, count);
}

function startQuiz() {
    // Gather settings
    state.settings.questionCount = parseInt(elements.questionCount.value);
    state.settings.difficulty = elements.difficulty.value;
    state.settings.questionType = elements.questionType.value;
    state.settings.topics = getSelectedTopics();
    state.settings.timedMode = elements.timedMode.checked;
    state.timeLimit = parseInt(elements.timeLimit.value);
    
    // Clear exam mode
    state.currentExam = null;
    const examBadge = document.getElementById('examBadge');
    if (examBadge) examBadge.style.display = 'none';
    
    // Select questions
    state.questions = selectQuestions();
    
    if (state.questions.length === 0) {
        alert('No questions match your criteria. Please adjust your filters.');
        return;
    }
    
    // Reset state
    state.currentQuestionIndex = 0;
    state.userAnswers = {};
    state.flaggedQuestions = new Set();
    state.quizCompleted = false;
    state.startTime = Date.now();
    
    // Update UI
    elements.totalQ.textContent = state.questions.length;
    
    // Build navigation bubbles
    buildQuestionNav();
    
    // Start timer if enabled
    if (state.settings.timedMode && state.timeLimit > 0) {
        startTimer();
        elements.timerSection.style.display = 'flex';
    } else {
        elements.timerSection.style.display = 'none';
    }
    
    // Show quiz screen and first question
    showScreen('quizScreen');
    displayQuestion();
}

// ===== Timer =====
function startTimer() {
    let remainingTime = state.timeLimit;
    updateTimerDisplay(remainingTime);
    
    state.timerInterval = setInterval(() => {
        remainingTime--;
        updateTimerDisplay(remainingTime);
        
        // Warning states
        if (remainingTime <= 60) {
            elements.timerSection.classList.add('danger');
            elements.timerSection.classList.remove('warning');
        } else if (remainingTime <= 300) {
            elements.timerSection.classList.add('warning');
        }
        
        if (remainingTime <= 0) {
            clearInterval(state.timerInterval);
            submitQuiz(true);
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    elements.timerDisplay.textContent = formatTime(seconds);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

// ===== Question Display =====
function displayQuestion() {
    const question = state.questions[state.currentQuestionIndex];
    
    // Update progress
    elements.currentQ.textContent = state.currentQuestionIndex + 1;
    const progress = ((state.currentQuestionIndex + 1) / state.questions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    
    // Update badges
    elements.difficultyBadge.textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
    elements.difficultyBadge.className = `badge badge-difficulty ${getDifficultyClass(question.difficulty)}`;
    elements.typeBadge.textContent = getTypeDisplayName(question.type);
    elements.topicBadge.textContent = question.topicName;
    
    // Display question text
    elements.questionText.innerHTML = formatQuestionText(question.question);
    
    // Display answer options
    displayAnswerOptions(question);
    
    // Update navigation buttons
    elements.prevBtn.disabled = state.currentQuestionIndex === 0;
    
    if (state.currentQuestionIndex === state.questions.length - 1) {
        elements.nextBtn.textContent = 'Finish';
        elements.submitQuizBtn.style.display = 'block';
    } else {
        elements.nextBtn.textContent = 'Next →';
        elements.submitQuizBtn.style.display = 'none';
    }
    
    // Update flag button
    if (state.flaggedQuestions.has(state.currentQuestionIndex)) {
        elements.flagBtn.classList.add('flagged');
        elements.flagBtn.textContent = '🚩 Flagged';
    } else {
        elements.flagBtn.classList.remove('flagged');
        elements.flagBtn.textContent = '🚩 Flag';
    }
    
    // Update navigation bubbles
    updateQuestionNav();
}

function formatQuestionText(text) {
    // Convert markdown-like tables to HTML
    if (text.includes('|')) {
        const lines = text.split('\n');
        let html = '';
        let inTable = false;
        let tableHtml = '<table>';
        let isHeader = true;
        
        for (const line of lines) {
            if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
                if (line.includes('---')) {
                    continue; // Skip separator row
                }
                inTable = true;
                const cells = line.split('|').filter(cell => cell.trim() !== '');
                const tag = isHeader ? 'th' : 'td';
                tableHtml += '<tr>' + cells.map(cell => `<${tag}>${cell.trim()}</${tag}>`).join('') + '</tr>';
                isHeader = false;
            } else {
                if (inTable) {
                    tableHtml += '</table>';
                    html += tableHtml;
                    tableHtml = '<table>';
                    inTable = false;
                    isHeader = true;
                }
                html += `<p>${line}</p>`;
            }
        }
        
        if (inTable) {
            tableHtml += '</table>';
            html += tableHtml;
        }
        
        return html;
    }
    
    // Basic formatting
    return text.split('\n').map(line => {
        if (line.trim() === '') return '';
        return `<p>${line}</p>`;
    }).join('');
}

function displayAnswerOptions(question) {
    const savedAnswer = state.userAnswers[question.id];
    
    if (question.type === 'mc') {
        elements.answerSection.innerHTML = question.options.map(option => `
            <label class="answer-option ${savedAnswer === option.label ? 'selected' : ''}" data-value="${option.label}">
                <input type="radio" name="answer" value="${option.label}" ${savedAnswer === option.label ? 'checked' : ''}>
                <span class="answer-label">${option.label}.</span>
                <span class="answer-text">${option.text}</span>
            </label>
        `).join('');
        
        // Add click handlers
        document.querySelectorAll('.answer-option').forEach(option => {
            option.addEventListener('click', () => selectMCAnswer(option.dataset.value));
        });
    } else {
        // Text-based answer (short, long, data)
        const isLong = question.type === 'long' || question.type === 'data';
        elements.answerSection.innerHTML = `
            <textarea 
                class="text-answer ${isLong ? 'long-answer' : ''}" 
                placeholder="Type your answer here..."
                rows="${isLong ? 8 : 4}"
            >${savedAnswer || ''}</textarea>
        `;
        
        // Add change handler
        const textarea = elements.answerSection.querySelector('textarea');
        textarea.addEventListener('input', (e) => {
            state.userAnswers[question.id] = e.target.value;
            updateQuestionNav();
        });
    }
}

function selectMCAnswer(value) {
    const question = state.questions[state.currentQuestionIndex];
    state.userAnswers[question.id] = value;
    
    // Update UI
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.toggle('selected', option.dataset.value === value);
        option.querySelector('input').checked = option.dataset.value === value;
    });
    
    updateQuestionNav();
}

// ===== Question Navigation =====
function buildQuestionNav() {
    elements.questionNav.innerHTML = state.questions.map((_, index) => `
        <div class="nav-bubble" data-index="${index}">${index + 1}</div>
    `).join('');
    
    // Add click handlers
    document.querySelectorAll('.nav-bubble').forEach(bubble => {
        bubble.addEventListener('click', () => {
            state.currentQuestionIndex = parseInt(bubble.dataset.index);
            displayQuestion();
        });
    });
}

function updateQuestionNav() {
    document.querySelectorAll('.nav-bubble').forEach((bubble, index) => {
        const question = state.questions[index];
        const isAnswered = state.userAnswers[question.id] !== undefined && 
                          state.userAnswers[question.id] !== '';
        const isFlagged = state.flaggedQuestions.has(index);
        const isCurrent = index === state.currentQuestionIndex;
        
        bubble.className = 'nav-bubble';
        if (isCurrent) bubble.classList.add('current');
        if (isAnswered) bubble.classList.add('answered');
        if (isFlagged) bubble.classList.add('flagged');
    });
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
        displayQuestion();
    }
}

function prevQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        displayQuestion();
    }
}

function toggleFlag() {
    if (state.flaggedQuestions.has(state.currentQuestionIndex)) {
        state.flaggedQuestions.delete(state.currentQuestionIndex);
    } else {
        state.flaggedQuestions.add(state.currentQuestionIndex);
    }
    displayQuestion();
}

// ===== Quiz Submission =====
function submitQuiz(timedOut = false) {
    if (!timedOut) {
        const unanswered = state.questions.filter(q => 
            state.userAnswers[q.id] === undefined || state.userAnswers[q.id] === ''
        ).length;
        
        if (unanswered > 0) {
            const confirm = window.confirm(
                `You have ${unanswered} unanswered question(s). Are you sure you want to submit?`
            );
            if (!confirm) return;
        }
    }
    
    stopTimer();
    state.quizCompleted = true;
    
    // Calculate results
    const results = calculateResults();
    
    // Save to local storage
    saveScore(results.percentage);
    saveTopicPerformance(results.topicStats);
    
    // Display results
    displayResults(results);
    
    showScreen('resultsScreen');
}

function calculateResults() {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    const topicStats = {};
    const questionResults = [];
    
    state.questions.forEach(question => {
        const userAnswer = state.userAnswers[question.id];
        
        // Initialize topic stats
        if (!topicStats[question.topic]) {
            topicStats[question.topic] = { correct: 0, total: 0 };
        }
        topicStats[question.topic].total++;
        
        let isCorrect = false;
        
        if (userAnswer === undefined || userAnswer === '') {
            unanswered++;
        } else if (question.type === 'mc') {
            isCorrect = userAnswer === question.correctAnswer;
            if (isCorrect) {
                correct++;
                topicStats[question.topic].correct++;
            } else {
                incorrect++;
            }
        } else {
            // For text answers, we'll mark them for review
            // Simple keyword matching for auto-grading
            const keywords = question.acceptableAnswers || [question.correctAnswer];
            const userLower = userAnswer.toLowerCase();
            isCorrect = keywords.some(keyword => 
                userLower.includes(keyword.toLowerCase())
            );
            if (isCorrect) {
                correct++;
                topicStats[question.topic].correct++;
            } else {
                incorrect++;
            }
        }
        
        questionResults.push({
            question,
            userAnswer,
            isCorrect,
            isUnanswered: userAnswer === undefined || userAnswer === ''
        });
    });
    
    const totalTime = Math.floor((Date.now() - state.startTime) / 1000);
    const percentage = Math.round((correct / state.questions.length) * 100);
    
    return {
        correct,
        incorrect,
        unanswered,
        percentage,
        totalTime,
        topicStats,
        questionResults
    };
}

function displayResults(results) {
    // Score circle
    elements.scoreNumber.textContent = results.percentage;
    
    // Score label
    let label = '';
    if (results.percentage >= 90) label = '🏆 Excellent! Competition ready!';
    else if (results.percentage >= 80) label = '🌟 Great job! Almost there!';
    else if (results.percentage >= 70) label = '👍 Good work! Keep practicing!';
    else if (results.percentage >= 60) label = '📚 Review needed. Focus on weak areas.';
    else label = '💪 Keep studying! You\'ve got this!';
    elements.scoreLabel.textContent = label;
    
    // Stats
    elements.correctCount.textContent = results.correct;
    elements.incorrectCount.textContent = results.incorrect;
    elements.unansweredCount.textContent = results.unanswered;
    elements.timeTaken.textContent = formatTime(results.totalTime);
    
    // Topic breakdown
    elements.topicBreakdown.innerHTML = Object.entries(results.topicStats)
        .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))
        .map(([topic, stats]) => {
            const percent = Math.round((stats.correct / stats.total) * 100);
            const color = percent >= 80 ? 'var(--success)' : 
                         percent >= 60 ? 'var(--warning)' : 'var(--danger)';
            return `
                <div class="topic-bar">
                    <div class="topic-bar-header">
                        <span>${getTopicDisplayName(topic)}</span>
                        <span>${stats.correct}/${stats.total} (${percent}%)</span>
                    </div>
                    <div class="topic-bar-fill">
                        <div class="topic-bar-progress" style="width: ${percent}%; background: ${color}"></div>
                    </div>
                </div>
            `;
        }).join('');
    
    // Store results for review
    state.lastResults = results;
    
    // Update global stats
    loadStats();
}

// ===== Review Screen =====
function showReview(filter = 'all') {
    const results = state.lastResults.questionResults;
    
    let filtered = results;
    if (filter === 'incorrect') {
        filtered = results.filter(r => !r.isCorrect && !r.isUnanswered);
    } else if (filter === 'flagged') {
        filtered = results.filter((r, i) => state.flaggedQuestions.has(i));
    }
    
    elements.reviewList.innerHTML = filtered.map((result, idx) => {
        const q = result.question;
        const originalIndex = results.indexOf(result);
        
        return `
            <div class="review-item ${result.isCorrect ? 'correct' : result.isUnanswered ? '' : 'incorrect'}">
                <div class="review-item-header">
                    <span class="review-q-num">Question ${originalIndex + 1}</span>
                    <div class="review-item-badges">
                        <span class="badge badge-difficulty ${getDifficultyClass(q.difficulty)}">${q.difficulty}</span>
                        <span class="badge badge-topic">${q.topicName}</span>
                    </div>
                </div>
                
                <div class="review-question">${formatQuestionText(q.question)}</div>
                
                <div class="review-answers">
                    <div class="review-answer-row">
                        <span class="review-answer-label">Your Answer:</span>
                        <span class="review-your-answer ${result.isCorrect ? 'correct' : ''}">${
                            result.isUnanswered ? '<em>Not answered</em>' : 
                            (q.type === 'mc' ? `${result.userAnswer}. ${q.options.find(o => o.label === result.userAnswer)?.text || ''}` : result.userAnswer)
                        }</span>
                    </div>
                    <div class="review-answer-row">
                        <span class="review-answer-label">Correct Answer:</span>
                        <span class="review-correct-answer">${
                            q.type === 'mc' ? `${q.correctAnswer}. ${q.options.find(o => o.label === q.correctAnswer)?.text || ''}` : q.correctAnswer
                        }</span>
                    </div>
                </div>
                
                <div class="explanation">
                    <div class="explanation-title">📚 Explanation</div>
                    <div class="explanation-text">${q.explanation}</div>
                </div>
            </div>
        `;
    }).join('');
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    
    showScreen('reviewScreen');
}

// ===== Practice Weak Areas =====
function practiceWeakAreas() {
    const performance = JSON.parse(localStorage.getItem(STORAGE_KEYS.TOPIC_PERFORMANCE) || '{}');
    
    const weakTopics = [];
    for (const [topic, stats] of Object.entries(performance)) {
        const percentage = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
        if (percentage < 70 && stats.total >= 3) {
            weakTopics.push(topic);
        }
    }
    
    if (weakTopics.length === 0) {
        alert('No weak areas identified yet. Take more quizzes to identify areas for improvement.');
        return;
    }
    
    // Set up weak areas practice
    document.querySelectorAll('.topic-checkboxes input[type="checkbox"]').forEach(cb => {
        cb.checked = weakTopics.includes(cb.value);
    });
    
    elements.difficulty.value = 'hard-mix';
    elements.questionCount.value = '20';
    
    startQuiz();
}

// ===== Event Listeners =====
document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
elements.prevBtn.addEventListener('click', prevQuestion);
elements.nextBtn.addEventListener('click', () => {
    if (state.currentQuestionIndex === state.questions.length - 1) {
        submitQuiz();
    } else {
        nextQuestion();
    }
});
elements.flagBtn.addEventListener('click', toggleFlag);
elements.submitQuizBtn.addEventListener('click', () => submitQuiz());

document.getElementById('reviewAnswersBtn').addEventListener('click', () => showReview('all'));
document.getElementById('newQuizBtn').addEventListener('click', () => {
    loadStats();
    showScreen('welcomeScreen');
});

document.getElementById('backToResultsBtn').addEventListener('click', () => showScreen('resultsScreen'));
document.getElementById('retakeQuizBtn').addEventListener('click', () => {
    // Reset with same questions
    state.currentQuestionIndex = 0;
    state.userAnswers = {};
    state.flaggedQuestions = new Set();
    state.quizCompleted = false;
    state.startTime = Date.now();
    
    buildQuestionNav();
    
    if (state.settings.timedMode && state.timeLimit > 0) {
        startTimer();
    }
    
    showScreen('quizScreen');
    displayQuestion();
});

// Filter buttons in review
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => showReview(btn.dataset.filter));
});

// Timer toggle
elements.timedMode.addEventListener('change', () => {
    elements.timerSettings.style.display = elements.timedMode.checked ? 'block' : 'none';
});

// Practice weak areas button
document.getElementById('practiceWeakBtn')?.addEventListener('click', practiceWeakAreas);

// ===== Exam Mode Functionality =====
let selectedExam = null;

// Mode selector buttons
document.getElementById('practiceMode').addEventListener('click', () => {
    switchMode('practice');
});

document.getElementById('examMode').addEventListener('click', () => {
    switchMode('exam');
});

function switchMode(mode) {
    // Update button states
    document.getElementById('practiceMode').classList.toggle('active', mode === 'practice');
    document.getElementById('examMode').classList.toggle('active', mode === 'exam');
    
    // Show/hide sections
    document.getElementById('practiceSettings').style.display = mode === 'practice' ? 'block' : 'none';
    document.getElementById('startQuizBtn').style.display = mode === 'practice' ? 'block' : 'none';
    document.getElementById('examSelection').style.display = mode === 'exam' ? 'block' : 'none';
    
    // Reset exam selection when switching to practice
    if (mode === 'practice') {
        selectedExam = null;
        document.querySelectorAll('.exam-card').forEach(card => card.classList.remove('selected'));
        document.getElementById('startExamBtn').disabled = true;
    }
}

// Exam card selection
document.querySelectorAll('.exam-card').forEach(card => {
    card.addEventListener('click', () => {
        // Deselect all
        document.querySelectorAll('.exam-card').forEach(c => c.classList.remove('selected'));
        
        // Select clicked card
        card.classList.add('selected');
        selectedExam = card.dataset.exam;
        
        // Enable start button
        document.getElementById('startExamBtn').disabled = false;
    });
});

// Start Exam button
document.getElementById('startExamBtn').addEventListener('click', startExam);

function startExam() {
    if (!selectedExam) {
        alert('Please select an exam first.');
        return;
    }
    
    // Get exam definition
    const examDef = EXAM_DEFINITIONS[selectedExam];
    if (!examDef) {
        alert('Exam not found. Please try again.');
        return;
    }
    
    // Get actual question objects
    const questions = examDef.questionIds
        .map(id => QUESTIONS.find(q => q.id === id))
        .filter(q => q !== undefined);
    
    if (questions.length === 0) {
        alert('Could not load exam questions. Please try again.');
        return;
    }
    
    // Store current exam info in state
    state.currentExam = {
        id: selectedExam,
        name: examDef.name
    };
    
    // Set up state for exam
    state.questions = questions; // Don't shuffle - keep exam order
    state.settings.questionCount = questions.length;
    state.settings.timedMode = document.getElementById('examTimedMode').checked;
    state.timeLimit = 3000; // 50 minutes for all exams
    
    // Reset quiz state
    state.currentQuestionIndex = 0;
    state.userAnswers = {};
    state.flaggedQuestions = new Set();
    state.quizCompleted = false;
    state.startTime = Date.now();
    
    // Update UI
    elements.totalQ.textContent = state.questions.length;
    
    // Show exam badge
    const examBadge = document.getElementById('examBadge');
    if (examBadge) {
        examBadge.textContent = examDef.name;
        examBadge.style.display = 'inline-block';
    }
    
    // Build navigation
    buildQuestionNav();
    
    // Start timer if enabled
    if (state.settings.timedMode && state.timeLimit > 0) {
        startTimer();
        elements.timerSection.style.display = 'flex';
    } else {
        elements.timerSection.style.display = 'none';
    }
    
    // Show quiz screen
    showScreen('quizScreen');
    displayQuestion();
    
    console.log(`Started ${examDef.name} with ${questions.length} questions`);
}

// ===== Initialization =====
function init() {
    loadStats();
    showScreen('welcomeScreen');
    
    // Initialize exam mode state
    state.currentExam = null;
}

// Start the app
init();
