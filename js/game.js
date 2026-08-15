/**
 * Tech Memory Hunt - Game Controller
 * Core logic, state management, timer loops, and events
 */

// Difficulty configurations
const DIFFICULTY_CONFIG = {
  easy: { memorize: 5, guess: 10 },
  normal: { memorize: 4, guess: 8 },
  hard: { memorize: 3, guess: 6 }
};
let chosenDifficulty = 'normal';

// Game state variables
let currentRound = 1;
let score = 0;
let bestScore = 0;
let currentStreak = 0;
let bestStreak = 0;
let currentSet = null;
let shuffledItems = [];
let targetItem = null;
let targetPosition = -1;
let gameState = 'HOME'; // HOME, INTRO, MEMORIZE, GUESS, FEEDBACK, RESULTS
let countdownValue = 5;
let guessCountdownValue = 8;

// Audio Context and Synth for Offline Sound Effects
let audioCtx = null;
let isMuted = false;

// Timer references
let countdownInterval = null;
let guessInterval = null;
let feedbackTimeout = null;
let introTimeout = null;
let isInteractionLocked = false;
let correctAnswersCount = 0;
let lastInsertedId = null; // To highlight player's score on leaderboard

// DOM Elements
const homeScreen = document.getElementById('home-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const roundIntroOverlay = document.getElementById('round-intro-overlay');

const homeBestScore = document.getElementById('home-best-score');
const gameScore = document.getElementById('game-score');
const gameBest = document.getElementById('game-best');
const gameStreak = document.getElementById('game-streak');
const streakBoxContainer = document.getElementById('streak-box-container');
const currentRoundText = document.getElementById('current-round-text');
const categoryTag = document.getElementById('category-tag');

const instructionTitle = document.getElementById('instruction-title');
const instructionPrompt = document.getElementById('instruction-prompt');
const guessTimerContainer = document.getElementById('guess-timer-container');
const guessTimerVal = document.getElementById('guess-timer-val');
const cardGrid = document.getElementById('card-grid');

const memorizeProgressBar = document.getElementById('memorize-progress-bar');
const guessProgressBar = document.getElementById('guess-progress-bar');
const homeCardPreview = document.getElementById('home-card-preview');

const feedbackOverlay = document.getElementById('feedback-overlay');
const feedbackStatus = document.getElementById('feedback-status');
const feedbackDetail = document.getElementById('feedback-detail');

const leaderboardInputContainer = document.getElementById('leaderboard-input-container');
const playerNameInput = document.getElementById('player-name-input');
const btnSubmitScore = document.getElementById('btn-submit-score');
const homeLeaderboardBody = document.getElementById('home-leaderboard-body');
const resultsLeaderboardBody = document.getElementById('results-leaderboard-body');

const highScoreBanner = document.getElementById('high-score-banner');
const resultScore = document.getElementById('result-score');
const resultAccuracy = document.getElementById('result-accuracy');
const resultCorrect = document.getElementById('result-correct');
const resultStreak = document.getElementById('result-streak');
const resultBest = document.getElementById('result-best');

const btnPlay = document.getElementById('btn-play');
const btnNext = document.getElementById('btn-next');
const btnPlayAgain = document.getElementById('btn-play-again');
const btnHome = document.getElementById('btn-home');
const btnMute = document.getElementById('btn-mute');
const muteIconUnmuted = document.getElementById('mute-icon-unmuted');
const muteIconMuted = document.getElementById('mute-icon-muted');

// Initialize Game
function init() {
  // Clear any persistent timers
  clearAllTimers();

  // Load best score
  bestScore = parseInt(localStorage.getItem('tech_memory_hunt_best') || '0', 10);
  homeBestScore.textContent = bestScore;
  gameBest.textContent = bestScore;
  resultBest.textContent = bestScore;

  // Load mute state
  isMuted = localStorage.getItem('tech_memory_hunt_muted') === 'true';
  updateMuteIcon();

  // Load Home Screen Previews
  loadHomeScreenPreviews();

  // Render Leaderboards
  renderLeaderboards();

  // Event Listeners for difficulty buttons
  const diffButtons = document.querySelectorAll('.btn-difficulty');
  diffButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      playSound('click');
      diffButtons.forEach(b => b.classList.remove('active'));
      const activeBtn = e.currentTarget;
      activeBtn.classList.add('active');
      chosenDifficulty = activeBtn.dataset.diff;
    });
  });

  // Buttons Bindings
  btnPlay.addEventListener('click', () => { playSound('click'); startGame(); });
  btnNext.addEventListener('click', () => { playSound('click'); skipFeedbackDelay(); });
  btnPlayAgain.addEventListener('click', () => { playSound('click'); startGame(); });
  btnHome.addEventListener('click', () => { playSound('click'); resetToHome(); });
  btnMute.addEventListener('click', toggleMute);
  btnSubmitScore.addEventListener('click', submitLeaderboardScore);

  // Audio initializer on interaction
  document.body.addEventListener('click', initAudioContext, { once: true });
}

// Populate Home Screen Preview Row with 4 representative SVGs
function loadHomeScreenPreviews() {
  if (!homeCardPreview) return;
  homeCardPreview.innerHTML = '';
  
  const previewItems = [
    { name: "Laptop", set: 1 },
    { name: "Smartphone", set: 2 },
    { name: "AI Robot", set: 5 },
    { name: "Padlock", set: 8 }
  ];
  
  previewItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'home-preview-card';
    card.innerHTML = getTechIconSvg(item.name, item.set);
    homeCardPreview.appendChild(card);
  });
}

// Web Audio API sound generator
function initAudioContext() {
  if (!audioCtx) {
    try {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        audioCtx = new AudioCtxClass();
      }
    } catch (e) {
      console.warn("Web Audio API is not supported or blocked in this browser:", e);
    }
  }
}

// Synthesize sound effects offline
function playSound(type) {
  if (isMuted) return;
  try {
    initAudioContext();
    if (!audioCtx) return;
    
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;
    
    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      gainNode.gain.setValueAtTime(0.06, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'tick') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      gainNode.gain.setValueAtTime(0.08, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'complete') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1000, now);
      osc.frequency.setValueAtTime(1200, now + 0.08);
      gainNode.gain.setValueAtTime(0.06, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc.start(now);
      osc.stop(now + 0.2);
    } else if (type === 'card_select') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.1);
      gainNode.gain.setValueAtTime(0.08, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'success') {
      osc.type = 'triangle';
      const frequencies = [523.25, 659.25, 783.99, 1046.50];
      frequencies.forEach((f, idx) => {
        osc.frequency.setValueAtTime(f, now + idx * 0.08);
      });
      gainNode.gain.setValueAtTime(0.12, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.start(now);
      osc.stop(now + 0.5);
    } else if (type === 'fail') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(90, now + 0.25);
      gainNode.gain.setValueAtTime(0.1, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.32);
    } else if (type === 'high_score') {
      osc.type = 'sine';
      const fanfare = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50, 1318.51];
      fanfare.forEach((f, idx) => {
        osc.frequency.setValueAtTime(f, now + idx * 0.07);
      });
      gainNode.gain.setValueAtTime(0.12, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.65);
    }
  } catch (e) {
    console.warn("AudioContext failed to initialize or play sound:", e);
  }
}

// Toggle mute state
function toggleMute() {
  isMuted = !isMuted;
  localStorage.setItem('tech_memory_hunt_muted', isMuted);
  updateMuteIcon();
  if (!isMuted) {
    playSound('click');
  }
}

// Update Mute Toggle SVGs
function updateMuteIcon() {
  if (isMuted) {
    muteIconUnmuted.classList.add('hidden');
    muteIconMuted.classList.remove('hidden');
  } else {
    muteIconUnmuted.classList.remove('hidden');
    muteIconMuted.classList.add('hidden');
  }
}

// Fisher-Yates Shuffle Algorithm (Unbiased, creates a copy to preserve config)
function fisherYatesShuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Start Game
function startGame() {
  clearAllTimers();
  
  score = 0;
  currentRound = 1;
  currentStreak = 0;
  bestStreak = 0;
  correctAnswersCount = 0;
  lastInsertedId = null;

  gameScore.textContent = '0';
  gameStreak.textContent = '🔥 0';
  
  // Hide screens
  homeScreen.classList.add('hidden');
  resultsScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  
  // Start Round 1
  startRound(1);
}

// Start Specific Round with Cinematic Intro Overlay
function startRound(roundNum) {
  gameState = 'INTRO';
  isInteractionLocked = true;
  currentRound = roundNum;
  currentSet = GAME_SETS[currentRound - 1];
  
  // Set UI theme based on current round
  const theme = CATEGORY_THEMES[currentRound] || CATEGORY_THEMES[1];
  document.documentElement.style.setProperty('--cyan', theme.primary);
  document.documentElement.style.setProperty('--cyan-glow', theme.bg);
  document.documentElement.style.setProperty('--border-active', theme.primary);

  // Set round banner content
  document.getElementById('intro-round-title').textContent = `ROUND ${currentRound}`;
  document.getElementById('intro-category-title').textContent = currentSet.category;
  
  // Shuffle cards and select target
  shuffledItems = fisherYatesShuffle(currentSet.items);
  const targetIndex = Math.floor(Math.random() * 8);
  targetItem = shuffledItems[targetIndex];
  targetPosition = targetIndex;
  
  // Hide feedback layers
  feedbackOverlay.classList.add('hidden');
  btnNext.classList.add('hidden');
  guessTimerContainer.classList.add('hidden');
  instructionPrompt.classList.remove('hidden');
  
  // Prepare Grid Elements
  renderGrid();

  // Show cinematic overlay
  roundIntroOverlay.classList.remove('hidden');
  playSound('tick'); 

  if (introTimeout) clearTimeout(introTimeout);
  
  introTimeout = setTimeout(() => {
    roundIntroOverlay.classList.add('hidden');
    beginMemorizationPhase();
  }, 1800);
}

// Begin Memorization Phase
function beginMemorizationPhase() {
  gameState = 'MEMORIZE';
  isInteractionLocked = false;
  
  // Set HUD Headers
  currentRoundText.textContent = `ROUND ${currentRound} / 20`;
  categoryTag.textContent = currentSet.category;
  
  // Start countdown
  startMemorizeCountdown();
}

// Render Card Grid Elements
function renderGrid() {
  cardGrid.innerHTML = '';
  // Lock click grid while memorizing
  cardGrid.classList.add('locked');
  
  shuffledItems.forEach((itemName, index) => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';
    cardContainer.dataset.index = index;
    
    // Front face (Tech Image) and Back face (Number Card)
    cardContainer.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-front">
          ${getTechIconSvg(itemName, currentRound)}
        </div>
        <div class="card-face card-back">
          ${index + 1}
        </div>
      </div>
    `;
    
    cardContainer.addEventListener('click', () => handleCardClick(index));
    cardGrid.appendChild(cardContainer);
  });
}

// Memorization Countdown with Progress Bar matching Difficulty settings
function startMemorizeCountdown() {
  const config = DIFFICULTY_CONFIG[chosenDifficulty];
  countdownValue = config.memorize;
  
  instructionTitle.textContent = 'MEMORIZE THE PLACES';
  instructionPrompt.textContent = countdownValue;
  instructionPrompt.className = 'instruction-prompt'; // reset textglow
  
  // Setup Progress Bar width
  memorizeProgressBar.classList.remove('hidden');
  guessProgressBar.classList.add('hidden');
  memorizeProgressBar.style.transition = 'none';
  memorizeProgressBar.style.width = '100%';
  
  // Force browser reflow to load styles
  void memorizeProgressBar.offsetWidth;
  
  // Transition smoothly to 0% over configured seconds
  memorizeProgressBar.style.transition = `width ${config.memorize}s linear`;
  memorizeProgressBar.style.width = '0%';
  
  triggerTickAnimation();
  
  if (countdownInterval) clearInterval(countdownInterval);
  
  countdownInterval = setInterval(() => {
    countdownValue--;
    if (countdownValue > 0) {
      instructionPrompt.textContent = countdownValue;
      triggerTickAnimation();
      playSound('tick');
    } else {
      clearInterval(countdownInterval);
      playSound('complete');
      transitionToGuessPhase();
    }
  }, 1000);
}

function triggerTickAnimation() {
  instructionPrompt.classList.remove('tick-anim');
  void instructionPrompt.offsetWidth;
  instructionPrompt.classList.add('tick-anim');
}

// Flip Cards to numbers and ask question, starts Guessing Timer
function transitionToGuessPhase() {
  gameState = 'GUESS';
  
  // Flip card elements
  const cardContainers = document.querySelectorAll('.card-container');
  cardContainers.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('flipped');
    }, index * 40);
  });
  
  // Unlock grid clicks
  cardGrid.classList.remove('locked');
  
  // Hide memorization text/timers, show guess timers
  instructionPrompt.classList.add('hidden');
  guessTimerContainer.classList.remove('hidden');
  
  instructionTitle.textContent = 'WHERE IS';
  guessTimerVal.textContent = DIFFICULTY_CONFIG[chosenDifficulty].guess;
  
  // Set question target
  const guessTitle = document.createElement('span');
  guessTitle.id = 'guess-title-target';
  guessTitle.className = 'instruction-prompt text-glow target-highlight';
  guessTitle.textContent = `${targetItem.toUpperCase()}?`;
  
  // Append target name safely
  const existingTarget = document.getElementById('guess-title-target');
  if (existingTarget) existingTarget.remove();
  guessTimerContainer.after(guessTitle);
  
  // Start Guessing Countdown
  startGuessCountdown();
}

// Guess Countdown Interval Loop
function startGuessCountdown() {
  const config = DIFFICULTY_CONFIG[chosenDifficulty];
  guessCountdownValue = config.guess;
  
  // Setup Guess Progress Bar width
  memorizeProgressBar.classList.add('hidden');
  guessProgressBar.classList.remove('hidden');
  guessProgressBar.style.transition = 'none';
  guessProgressBar.style.width = '100%';
  
  void guessProgressBar.offsetWidth;
  
  // Sync width to 0% over configured guessing duration
  guessProgressBar.style.transition = `width ${config.guess}s linear`;
  guessProgressBar.style.width = '0%';
  
  if (guessInterval) clearInterval(guessInterval);
  
  guessInterval = setInterval(() => {
    guessCountdownValue--;
    if (guessCountdownValue > 0) {
      guessTimerVal.textContent = guessCountdownValue;
      if (guessCountdownValue <= 2) {
        playSound('tick'); // faster alarm ticker
      }
    } else {
      clearInterval(guessInterval);
      handleTimeout();
    }
  }, 1000);
}

// Handles Game Screen Timed Out
function handleTimeout() {
  if (gameState !== 'GUESS' || isInteractionLocked) return;
  
  isInteractionLocked = true;
  gameState = 'FEEDBACK';
  
  // Lock grid clicks
  cardGrid.classList.add('locked');
  
  // Reset streak
  currentStreak = 0;
  gameStreak.textContent = '🔥 0';
  
  // Reveal the correct target card in green
  const correctCard = cardGrid.children[targetPosition];
  correctCard.classList.remove('flipped');
  correctCard.classList.add('revealed', 'correct');
  
  // Play buzzer sound
  playSound('fail');
  
  // Set feedback description
  feedbackOverlay.className = 'feedback-overlay wrong-theme';
  feedbackStatus.textContent = "✗ TIME'S UP!";
  feedbackDetail.innerHTML = `You ran out of time!<br>The <strong>${targetItem}</strong> was at Position ${targetPosition + 1}.`;
  
  feedbackOverlay.classList.remove('hidden');
  btnNext.classList.remove('hidden');
  
  // Auto advance after 2.6 seconds
  if (feedbackTimeout) clearTimeout(feedbackTimeout);
  feedbackTimeout = setTimeout(advanceToNextStep, 2600);
}

// Handle Card Click Guesses
function handleCardClick(clickedIndex) {
  if (gameState !== 'GUESS' || isInteractionLocked) return;
  
  // Stop guess countdown immediately
  if (guessInterval) clearInterval(guessInterval);
  guessProgressBar.style.transition = 'none'; // pause animation
  
  isInteractionLocked = true;
  gameState = 'FEEDBACK';
  
  // Lock grid clicks
  cardGrid.classList.add('locked');
  playSound('card_select');
  
  const isCorrect = (clickedIndex === targetPosition);
  const clickedCard = cardGrid.children[clickedIndex];
  const correctCard = cardGrid.children[targetPosition];
  
  // Reveal clicked card
  clickedCard.classList.remove('flipped');
  clickedCard.classList.add('revealed');
  
  if (isCorrect) {
    // Increment Streak
    currentStreak++;
    bestStreak = Math.max(bestStreak, currentStreak);
    
    // Streak Modifier Score Bump
    let scoreAddition = 100;
    if (currentStreak === 2) scoreAddition = 120;
    else if (currentStreak === 3) scoreAddition = 150;
    else if (currentStreak >= 4) scoreAddition = 180;
    
    score += scoreAddition;
    correctAnswersCount++;
    
    gameScore.textContent = score;
    gameStreak.textContent = `🔥 ${currentStreak}`;
    
    // Highlight correct choice
    clickedCard.classList.add('correct');
    
    // Trigger streak badge scaling pop animation
    streakBoxContainer.classList.remove('streak-pop');
    void streakBoxContainer.offsetWidth; // force reflow
    streakBoxContainer.classList.add('streak-pop');
    
    // Save Best score in real-time
    if (score > bestScore) {
      bestScore = score;
      gameBest.textContent = bestScore;
      localStorage.setItem('tech_memory_hunt_best', bestScore);
    }
    
    showFeedback(true, clickedIndex, scoreAddition);
  } else {
    // Reset Streak
    currentStreak = 0;
    gameStreak.textContent = '🔥 0';
    
    // Shake incorrect card
    clickedCard.classList.add('wrong', 'shake');
    setTimeout(() => {
      clickedCard.classList.remove('shake');
    }, 450);
    
    // Highlight correct card green
    setTimeout(() => {
      correctCard.classList.remove('flipped');
      correctCard.classList.add('revealed', 'correct');
    }, 150);
    
    showFeedback(false, clickedIndex, 0);
  }
}

// Display Feedback Screen Overlay
function showFeedback(isCorrect, clickedIndex, pointsAwarded) {
  feedbackOverlay.className = 'feedback-overlay';
  
  if (isCorrect) {
    feedbackOverlay.classList.add('correct-theme');
    
    // Perfect / great memory badges
    if (currentStreak >= 3) {
      feedbackStatus.textContent = '🔥 GREAT MEMORY!';
    } else {
      feedbackStatus.textContent = '✓ CORRECT!';
    }
    
    feedbackDetail.innerHTML = `You found the <strong>${targetItem}</strong>. <br>+${pointsAwarded} Points`;
    playSound('success');
  } else {
    feedbackOverlay.classList.add('wrong-theme');
    feedbackStatus.textContent = '✗ WRONG!';
    feedbackDetail.innerHTML = `You clicked Card ${clickedIndex + 1} instead of Card ${targetPosition + 1}.<br>The <strong>${targetItem}</strong> was at Position ${targetPosition + 1}.`;
    playSound('fail');
  }
  
  feedbackOverlay.classList.remove('hidden');
  btnNext.classList.remove('hidden');
  
  // Auto transition to next round after 2.6s
  if (feedbackTimeout) clearTimeout(feedbackTimeout);
  feedbackTimeout = setTimeout(advanceToNextStep, 2600);
}

// Skip Feedback Delay on manual click
function skipFeedbackDelay() {
  if (feedbackTimeout) clearTimeout(feedbackTimeout);
  advanceToNextStep();
}

// Proceed to next round or complete game
function advanceToNextStep() {
  feedbackOverlay.classList.add('hidden');
  
  // Remove temporary target header element
  const targetHeader = document.getElementById('guess-title-target');
  if (targetHeader) targetHeader.remove();
  
  if (currentRound < 20) {
    startRound(currentRound + 1);
  } else {
    finishGame();
  }
}

// Game completed results screen
function finishGame() {
  gameState = 'RESULTS';
  clearAllTimers();
  
  gameScreen.classList.add('hidden');
  resultsScreen.classList.remove('hidden');
  
  // Update scores HUD on results screen
  resultScore.textContent = score;
  resultCorrect.textContent = `${correctAnswersCount} / 20`;
  resultStreak.textContent = bestStreak;
  
  const accuracy = Math.round((correctAnswersCount / 20) * 100);
  resultAccuracy.textContent = `${accuracy}%`;
  
  // Save global stats
  const previousBest = parseInt(localStorage.getItem('tech_memory_hunt_best') || '0', 10);
  let isNewRecord = false;
  if (score > previousBest) {
    localStorage.setItem('tech_memory_hunt_best', score);
    bestScore = score;
    isNewRecord = true;
    highScoreBanner.classList.remove('hidden');
    playSound('high_score');
  } else {
    highScoreBanner.classList.add('hidden');
  }
  
  // Save best streak/accuracy records in localStorage
  const prevBestStreak = parseInt(localStorage.getItem('tech_memory_hunt_best_streak') || '0', 10);
  if (bestStreak > prevBestStreak) {
    localStorage.setItem('tech_memory_hunt_best_streak', bestStreak);
  }
  const prevBestAcc = parseInt(localStorage.getItem('tech_memory_hunt_best_accuracy') || '0', 10);
  if (accuracy > prevBestAcc) {
    localStorage.setItem('tech_memory_hunt_best_accuracy', accuracy);
  }
  
  resultBest.textContent = bestScore;
  homeBestScore.textContent = bestScore;
  
  // Check if qualifies for offline leaderboard
  if (qualifiesForLeaderboard(score)) {
    leaderboardInputContainer.classList.remove('hidden');
    playerNameInput.value = '';
    playerNameInput.focus();
  } else {
    leaderboardInputContainer.classList.add('hidden');
  }
  
  // Render Leaderboard Tables
  renderLeaderboards();
}

// Local Leaderboard logic
function getLeaderboard() {
  try {
    const board = localStorage.getItem('tech_memory_hunt_leaderboard');
    if (!board) {
      // Seed default scores for orientation stall competitiveness
      const defaultBoard = [
        { id: 1, name: "RAHUL", score: 3800, difficulty: "hard", date: new Date().toLocaleDateString() },
        { id: 2, name: "ANANYA", score: 3500, difficulty: "normal", date: new Date().toLocaleDateString() },
        { id: 3, name: "ARJUN", score: 3200, difficulty: "normal", date: new Date().toLocaleDateString() },
        { id: 4, name: "SAI", score: 2900, difficulty: "easy", date: new Date().toLocaleDateString() },
        { id: 5, name: "PRIYA", score: 2700, difficulty: "easy", date: new Date().toLocaleDateString() }
      ];
      localStorage.setItem('tech_memory_hunt_leaderboard', JSON.stringify(defaultBoard));
      return defaultBoard;
    }
    return JSON.parse(board);
  } catch (e) {
    return [];
  }
}

function qualifiesForLeaderboard(score) {
  if (score <= 0) return false;
  const board = getLeaderboard();
  if (board.length < 5) return true;
  // Qualifies if higher than the lowest score in top 5
  return score > board[board.length - 1].score;
}

function submitLeaderboardScore() {
  let name = playerNameInput.value.trim().toUpperCase();
  if (!name) {
    name = "PLAYER";
  }
  
  // Cap name length at 10 chars
  if (name.length > 10) {
    name = name.substring(0, 10);
  }
  
  const board = getLeaderboard();
  const timestampId = Date.now(); // unique ID to highlight row
  lastInsertedId = timestampId;
  
  const entry = {
    id: timestampId,
    name: name,
    score: score,
    difficulty: chosenDifficulty,
    date: new Date().toLocaleDateString()
  };
  
  board.push(entry);
  // Sort descending by score
  board.sort((a, b) => b.score - a.score);
  // Keep top 5
  const topFive = board.slice(0, 5);
  
  localStorage.setItem('tech_memory_hunt_leaderboard', JSON.stringify(topFive));
  
  // Hide input panel, update leaderboards
  leaderboardInputContainer.classList.add('hidden');
  renderLeaderboards();
  playSound('complete');
}

// Render Top 5 Leaderboard Tables on Home and Results Screen
function renderLeaderboards() {
  const board = getLeaderboard();
  
  // Render helper
  const generateRowsHtml = (entries) => {
    if (entries.length === 0) {
      return `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">No scores recorded yet</td></tr>`;
    }
    return entries.map((entry, idx) => {
      const isNew = (entry.id === lastInsertedId);
      return `
        <tr class="${isNew ? 'highlight-row' : ''}">
          <td class="rank-col">${idx + 1}</td>
          <td>${entry.name}</td>
          <td><strong>${entry.score}</strong></td>
          <td><span class="diff-tag ${entry.difficulty}">${entry.difficulty}</span></td>
        </tr>
      `;
    }).join('');
  };
  
  const rowsHtml = generateRowsHtml(board);
  if (homeLeaderboardBody) homeLeaderboardBody.innerHTML = rowsHtml;
  if (resultsLeaderboardBody) resultsLeaderboardBody.innerHTML = rowsHtml;
}

// Safe Reset and clear all timers
function clearAllTimers() {
  if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
  if (guessInterval) { clearInterval(guessInterval); guessInterval = null; }
  if (feedbackTimeout) { clearTimeout(feedbackTimeout); feedbackTimeout = null; }
  if (introTimeout) { clearTimeout(introTimeout); introTimeout = null; }
  isInteractionLocked = false;
}

// Return to Start Screen
function resetToHome() {
  clearAllTimers();
  gameState = 'HOME';
  
  // Remove temporary target header elements
  const targetHeader = document.getElementById('guess-title-target');
  if (targetHeader) targetHeader.remove();
  
  resultsScreen.classList.add('hidden');
  gameScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
  
  loadHomeScreenPreviews();
  renderLeaderboards();
}

// Register initializer on window load
window.addEventListener('DOMContentLoaded', init);
