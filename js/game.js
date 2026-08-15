/**
 * Restructured Memory Game - Game Controller
 * Supports 3 rounds: Emotions, Animals, and Modes of Transport
 */

// Legacy configurations to prevent index.html references from breaking
const DIFFICULTY_CONFIG = {
  easy: { memorize: 5, guess: 10 },
  normal: { memorize: 5, guess: 10 },
  hard: { memorize: 5, guess: 10 }
};
let chosenDifficulty = 'normal';

// Game state variables
let playerName = "PLAYER";
let playerRegistry = []; // Multi-user player registry
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
let guessCountdownValue = 10;

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
let lastInsertedId = null;

// Confetti State variables
let confettiActive = false;
const confettiColors = ['#06b6d4', '#8b5cf6', '#10b981', '#f43f5e', '#f59e0b'];
let confettiParticles = [];

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

const feedbackOverlay = document.getElementById('feedback-overlay');
const feedbackStatus = document.getElementById('feedback-status');
const feedbackDetail = document.getElementById('feedback-detail');

const resultScore = document.getElementById('result-score');
const resultAccuracy = document.getElementById('result-accuracy');
const resultCorrect = document.getElementById('result-correct');

const btnPlay = document.getElementById('btn-play');
const btnNext = document.getElementById('btn-next');
const btnPlayAgain = document.getElementById('btn-play-again');
const btnHome = document.getElementById('btn-home');
const btnMute = document.getElementById('btn-mute');
const muteIconUnmuted = document.getElementById('mute-icon-unmuted');
const muteIconMuted = document.getElementById('mute-icon-muted');

const roundControls = document.getElementById('round-controls');
const btnShuffleRound = document.getElementById('btn-shuffle-round');
const btnStartRound = document.getElementById('btn-start-round');

// Initialize Game
function init() {
  clearAllTimers();

  // Load player registry from local storage
  playerRegistry = JSON.parse(localStorage.getItem('memory_hunt_players') || '[]');
  if (playerRegistry.length === 0) {
    playerRegistry.push({ name: "PLAYER", best: 0 });
    localStorage.setItem('memory_hunt_players', JSON.stringify(playerRegistry));
  }
  
  // Set default active player
  const defaultPlayer = playerRegistry[0];
  playerName = defaultPlayer.name;
  bestScore = defaultPlayer.best;

  // Initialize UI text values
  const nameInput = document.getElementById('player-name-input');
  if (nameInput) nameInput.value = playerName;
  if (homeBestScore) homeBestScore.textContent = bestScore;
  if (gameBest) gameBest.textContent = bestScore;

  // Load mute state
  isMuted = localStorage.getItem('tech_memory_hunt_muted') === 'true';
  updateMuteIcon();

  // Hide global mute icon on home screen
  if (btnMute) btnMute.classList.add('hidden');

  // Play Button Click
  btnPlay.addEventListener('click', () => {
    playSound('click');
    const nameInput = document.getElementById('player-name-input');
    const name = nameInput.value.trim().toUpperCase();
    if (!name) {
      nameInput.focus();
      const inputCard = document.querySelector('.pilot-input-card');
      if (inputCard) {
        inputCard.style.borderColor = 'var(--rose)';
        inputCard.classList.add('shake');
        setTimeout(() => { inputCard.classList.remove('shake'); }, 450);
      }
      return;
    }
    const inputCard = document.querySelector('.pilot-input-card');
    if (inputCard) inputCard.style.borderColor = 'rgba(255,255,255,0.06)';
    
    // Check if player name exists in registry, otherwise add
    let playerObj = playerRegistry.find(p => p.name === name);
    if (!playerObj) {
      playerObj = { name: name, best: 0 };
      playerRegistry.push(playerObj);
      localStorage.setItem('memory_hunt_players', JSON.stringify(playerRegistry));
    }
    
    playerName = playerObj.name;
    bestScore = playerObj.best;
    
    if (homeBestScore) homeBestScore.textContent = bestScore;
    if (gameBest) gameBest.textContent = bestScore;
    
    startGame();
  });

  btnNext.addEventListener('click', () => { playSound('click'); skipFeedbackDelay(); });
  btnPlayAgain.addEventListener('click', () => { playSound('click'); startGame(); });
  btnHome.addEventListener('click', () => { playSound('click'); resetToHome(); });
  btnMute.addEventListener('click', toggleMute);

  // Keypress validation inside main name input
  if (nameInput) {
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        btnPlay.click();
      }
    });
  }

  // Home Page sound toggle button
  const btnMuteHome = document.getElementById('btn-mute-home');
  if (btnMuteHome) {
    btnMuteHome.addEventListener('click', toggleMute);
  }

  // PLAYER REGISTRY MODAL CONTROLLERS & BINDINGS
  const registryModal = document.getElementById('registry-modal');
  const registryNameInput = document.getElementById('registry-name-input');
  const btnRegisterPlayer = document.getElementById('btn-register-player');
  const btnCloseRegistry = document.getElementById('btn-close-registry');
  const pilotAvatarBtn = document.querySelector('.pilot-input-icon');

  // Open registry
  if (pilotAvatarBtn && registryModal) {
    pilotAvatarBtn.addEventListener('click', () => {
      playSound('click');
      registryModal.classList.remove('hidden');
      renderPlayerRegistryList();
    });
  }

  // Close registry
  if (btnCloseRegistry && registryModal) {
    btnCloseRegistry.addEventListener('click', () => {
      playSound('click');
      registryModal.classList.add('hidden');
    });
  }

  // Close registry on outer click
  if (registryModal) {
    registryModal.addEventListener('click', (e) => {
      if (e.target === registryModal) {
        playSound('click');
        registryModal.classList.add('hidden');
      }
    });
  }

  // Register action
  if (btnRegisterPlayer && registryNameInput) {
    btnRegisterPlayer.addEventListener('click', () => {
      playSound('click');
      const newName = registryNameInput.value.trim().toUpperCase();
      if (!newName) {
        registryNameInput.focus();
        const registryCard = registryNameInput.closest('.pilot-input-card');
        if (registryCard) {
          registryCard.style.borderColor = 'var(--rose)';
          registryCard.classList.add('shake');
          setTimeout(() => { registryCard.classList.remove('shake'); }, 450);
        }
        return;
      }

      const registryCard = registryNameInput.closest('.pilot-input-card');
      if (registryCard) registryCard.style.borderColor = 'rgba(255,255,255,0.06)';

      let playerObj = playerRegistry.find(p => p.name === newName);
      if (!playerObj) {
        playerObj = { name: newName, best: 0 };
        playerRegistry.push(playerObj);
        localStorage.setItem('memory_hunt_players', JSON.stringify(playerRegistry));
      }

      playerName = playerObj.name;
      bestScore = playerObj.best;

      // Sync active player details
      const nameInput = document.getElementById('player-name-input');
      if (nameInput) nameInput.value = playerName;
      if (homeBestScore) homeBestScore.textContent = bestScore;
      if (gameBest) gameBest.textContent = bestScore;

      registryNameInput.value = '';
      renderPlayerRegistryList();

      setTimeout(() => {
        registryModal.classList.add('hidden');
      }, 250);
    });

    registryNameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        btnRegisterPlayer.click();
      }
    });
  }

  btnShuffleRound.addEventListener('click', () => {
    playSound('click');
    shuffledItems = fisherYatesShuffle(currentSet.items);
    const targetIndex = Math.floor(Math.random() * 8);
    targetItem = shuffledItems[targetIndex];
    targetPosition = targetIndex;
    renderGrid();
  });

  btnStartRound.addEventListener('click', () => {
    playSound('click');
    roundControls.classList.add('hidden');
    beginMemorizationPhase();
  });

  // Audio initializer on interaction
  document.body.addEventListener('click', initAudioContext, { once: true });

  // Keyboard accessibility binds
  window.addEventListener('keydown', handleKeyDown);
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
  const homeUnmuted = document.getElementById('mute-icon-home-unmuted');
  const homeMuted = document.getElementById('mute-icon-home-muted');

  if (isMuted) {
    muteIconUnmuted.classList.add('hidden');
    muteIconMuted.classList.remove('hidden');
    if (homeUnmuted) homeUnmuted.classList.add('hidden');
    if (homeMuted) homeMuted.classList.remove('hidden');
  } else {
    muteIconUnmuted.classList.remove('hidden');
    muteIconMuted.classList.add('hidden');
    if (homeUnmuted) homeUnmuted.classList.remove('hidden');
    if (homeMuted) homeMuted.classList.add('hidden');
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

// Canvas Confetti Celebration for High Scores
function startConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  confettiActive = true;
  confettiParticles = [];
  
  const resizeCanvas = () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  for (let i = 0; i < 80; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * canvas.height,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0,
      speed: Math.random() * 3 + 2
    });
  }
  
  function drawConfetti() {
    if (!confettiActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let remaining = false;
    confettiParticles.forEach(p => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += p.speed;
      p.tilt = Math.sin(p.tiltAngle - p.r / 2) * 5;
      
      if (p.y <= canvas.height) {
        remaining = true;
      }
      
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();
    });
    
    if (remaining) {
      requestAnimationFrame(drawConfetti);
    } else {
      confettiActive = false;
    }
  }
  
  drawConfetti();
}

// Stop Confetti
function stopConfetti() {
  confettiActive = false;
  const canvas = document.getElementById('confetti-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// Accessibility keyboard controls (Keys 1-8 mapped to cards)
function handleKeyDown(e) {
  if (gameState !== 'GUESS' || isInteractionLocked) return;
  const key = e.key;
  if (key >= '1' && key <= '8') {
    const cardIndex = parseInt(key, 10) - 1;
    handleCardClick(cardIndex);
  }
}

// Trigger floating points (+Points) popup on correct guess
function triggerFloatingPoints(text, targetElement) {
  const rect = targetElement.getBoundingClientRect();
  const parentRect = targetElement.offsetParent.getBoundingClientRect();
  
  const popup = document.createElement('div');
  popup.className = 'floating-points';
  popup.textContent = text;
  
  const left = rect.left - parentRect.left + rect.width / 2;
  const top = rect.top - parentRect.top + rect.height / 2;
  
  popup.style.left = `${left}px`;
  popup.style.top = `${top}px`;
  
  targetElement.offsetParent.appendChild(popup);
  
  setTimeout(() => {
    popup.remove();
  }, 950);
}

// Start Game
function startGame() {
  clearAllTimers();
  stopConfetti();
  
  score = 0;
  currentRound = 1;
  currentStreak = 0;
  bestStreak = 0;
  correctAnswersCount = 0;
  lastInsertedId = null;

  gameScore.textContent = '0';
  gameStreak.textContent = '🔥 0';
  
  // Show global mute button during play
  if (btnMute) btnMute.classList.remove('hidden');
  
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
  
  instructionTitle.textContent = 'READY?';
  instructionPrompt.textContent = 'Click START to begin memorizing.';
  instructionPrompt.classList.remove('hidden');
  
  // Hide progress bars initially
  memorizeProgressBar.classList.add('hidden');
  guessProgressBar.classList.add('hidden');
  
  // Prepare Grid Elements face-up
  renderGrid();

  // Show cinematic overlay
  roundIntroOverlay.classList.remove('hidden');
  playSound('tick'); 

  if (introTimeout) clearTimeout(introTimeout);
  
  introTimeout = setTimeout(() => {
    roundIntroOverlay.classList.add('hidden');
    
    // Set round info headers on HUD
    currentRoundText.textContent = `ROUND ${currentRound} / 5`;
    categoryTag.textContent = currentSet.category;
    
    // Show start and shuffle controls banner
    roundControls.classList.remove('hidden');
  }, 1200); // Snappy round intro overlay timing
}

// Begin Memorization Phase (Flips cards face-up to show images)
function beginMemorizationPhase() {
  gameState = 'MEMORIZE';
  isInteractionLocked = false;
  
  // Make sure controls are hidden
  roundControls.classList.add('hidden');
  
  // Flip cards face-up to reveal images
  const cardContainers = document.querySelectorAll('.card-container');
  cardContainers.forEach(card => card.classList.remove('flipped'));
  
  // Start countdown
  startMemorizeCountdown();
}

// Render Card Grid Elements (Flipped face-down by default)
function renderGrid() {
  cardGrid.innerHTML = '';
  // Lock click grid while memorizing
  cardGrid.classList.add('locked');
  
  shuffledItems.forEach((itemName, index) => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container flipped'; // Flipped face-down initially
    cardContainer.dataset.index = index;
    
    // Front face (Tech Image) and Back face (Number Card) with Keyboard key indicator
    cardContainer.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-front">
          ${getTechIconSvg(itemName, currentRound)}
        </div>
        <div class="card-face card-back" data-key="${index + 1}">
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
  countdownValue = 5; // Always 5 seconds memorization
  
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
  
  // Transition smoothly to 0% over 5 seconds
  memorizeProgressBar.style.transition = `width 5s linear`;
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
  guessTimerVal.textContent = 10; // 10 seconds to guess
  
  // Set question target (capitalize properly for visual appeal)
  const displayName = targetItem.toUpperCase();
  const guessTitle = document.createElement('span');
  guessTitle.id = 'guess-title-target';
  guessTitle.className = 'instruction-prompt text-glow target-highlight';
  guessTitle.textContent = `${displayName}?`;
  
  // Append target name safely
  const existingTarget = document.getElementById('guess-title-target');
  if (existingTarget) existingTarget.remove();
  guessTimerContainer.after(guessTitle);
  
  // Start Guessing Countdown
  startGuessCountdown();
}

// Guess Countdown Interval Loop with Visual Urgency Indicators
function startGuessCountdown() {
  guessCountdownValue = 10; // 10 seconds to guess
  
  // Setup Guess Progress Bar width
  memorizeProgressBar.classList.add('hidden');
  guessProgressBar.classList.remove('hidden');
  guessProgressBar.style.transition = 'none';
  guessProgressBar.style.width = '100%';
  
  // Clear any existing urgent warning styles
  guessProgressBar.classList.remove('urgent');
  guessTimerVal.classList.remove('urgent');
  
  void guessProgressBar.offsetWidth;
  
  // Sync width to 0% over 10 seconds
  guessProgressBar.style.transition = `width 10s linear`;
  guessProgressBar.style.width = '0%';
  
  if (guessInterval) clearInterval(guessInterval);
  
  guessInterval = setInterval(() => {
    guessCountdownValue--;
    if (guessCountdownValue > 0) {
      guessTimerVal.textContent = guessCountdownValue;
      
      // Warn when remaining time is 3s or less
      if (guessCountdownValue <= 3) {
        guessProgressBar.classList.add('urgent');
        guessTimerVal.classList.add('urgent');
        playSound('tick'); // faster alarm ticker
      }
    } else {
      guessTimerVal.textContent = "0";
      guessProgressBar.classList.remove('urgent');
      guessTimerVal.classList.remove('urgent');
      clearInterval(guessInterval);
      handleTimeout();
    }
  }, 1000);
}

// Handles Game Screen Timed Out
function handleTimeout() {
  if (gameState !== 'GUESS' || isInteractionLocked) return;
  
  // Stop guess countdown immediately and freeze progress bar
  if (guessInterval) clearInterval(guessInterval);
  const computedWidth = window.getComputedStyle(guessProgressBar).width;
  guessProgressBar.style.transition = 'none';
  guessProgressBar.style.width = computedWidth;
  
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
  
  // Auto advance after 1.5 seconds (Snappy round transition)
  if (feedbackTimeout) clearTimeout(feedbackTimeout);
  feedbackTimeout = setTimeout(advanceToNextStep, 1500);
}

// Handle Card Click Guesses
function handleCardClick(clickedIndex) {
  if (gameState !== 'GUESS' || isInteractionLocked) return;
  
  // Stop guess countdown immediately and freeze progress bar visually
  if (guessInterval) clearInterval(guessInterval);
  const computedWidth = window.getComputedStyle(guessProgressBar).width;
  guessProgressBar.style.transition = 'none';
  guessProgressBar.style.width = computedWidth;
  
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
    
    score += 100; // Correct = 100 points
    correctAnswersCount++;
    
    gameScore.textContent = score;
    gameStreak.textContent = `🔥 ${currentStreak}`;
    
    // Highlight correct choice
    clickedCard.classList.add('correct');
    
    // Pop up float points (+100) on correct card
    triggerFloatingPoints("+100", clickedCard);
    
    // Trigger streak badge scaling pop animation
    streakBoxContainer.classList.remove('streak-pop');
    void streakBoxContainer.offsetWidth; // force reflow
    streakBoxContainer.classList.add('streak-pop');
    
    // Save Best score in real-time
    if (score > bestScore) {
      bestScore = score;
      if (gameBest) gameBest.textContent = bestScore;
      localStorage.setItem('tech_memory_hunt_best', bestScore);
    }
    
    showFeedback(true, clickedIndex, 100);
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
    
    if (currentStreak >= 2) {
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
  
  // Auto transition to next round after 1.5s (Snappy feedback overlay flow)
  if (feedbackTimeout) clearTimeout(feedbackTimeout);
  feedbackTimeout = setTimeout(advanceToNextStep, 1500);
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
  
  if (currentRound < 5) { // 5 Rounds total
    startRound(currentRound + 1);
  } else {
    finishGame();
  }
}

// Game completed results screen
function finishGame() {
  gameState = 'RESULTS';
  clearAllTimers();
  stopConfetti();
  
  // Show global mute button during results
  if (btnMute) btnMute.classList.remove('hidden');
  
  gameScreen.classList.add('hidden');
  resultsScreen.classList.remove('hidden');
  
  // Update scores HUD on results screen
  document.getElementById('result-player-name').textContent = playerName.toUpperCase();
  resultScore.textContent = score;
  resultCorrect.textContent = `${correctAnswersCount} / 5`;
  
  const accuracy = Math.round((correctAnswersCount / 5) * 100);
  resultAccuracy.textContent = `${accuracy}%`;
  
  // Update player score in registry
  const playerObj = playerRegistry.find(p => p.name === playerName);
  if (playerObj) {
    if (score > playerObj.best) {
      playerObj.best = score;
      localStorage.setItem('memory_hunt_players', JSON.stringify(playerRegistry));
      bestScore = score;
      if (homeBestScore) homeBestScore.textContent = bestScore;
      if (gameBest) gameBest.textContent = bestScore;
    }
  }

  // Update global high score if needed
  let globalBest = parseInt(localStorage.getItem('tech_memory_hunt_best') || '0', 10);
  if (score > globalBest) {
    localStorage.setItem('tech_memory_hunt_best', score);
  }
  
  // Confetti celebration if they get a perfect score
  if (score === 500) {
    startConfetti();
    playSound('high_score');
  }
}

// Return to Start Screen
function resetToHome() {
  clearAllTimers();
  stopConfetti();
  gameState = 'HOME';
  
  // Hide top-right mute button on home screen
  if (btnMute) btnMute.classList.add('hidden');
  if (roundControls) roundControls.classList.add('hidden');
  
  // Remove temporary target header elements
  const targetHeader = document.getElementById('guess-title-target');
  if (targetHeader) targetHeader.remove();
  
  resultsScreen.classList.add('hidden');
  gameScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
}

// Safe Reset and clear all timers
function clearAllTimers() {
  if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
  if (guessInterval) { clearInterval(guessInterval); guessInterval = null; }
  if (feedbackTimeout) { clearTimeout(feedbackTimeout); feedbackTimeout = null; }
  if (introTimeout) { clearTimeout(introTimeout); introTimeout = null; }
  isInteractionLocked = false;
}

// Populate and render active players list dynamically inside modal
function renderPlayerRegistryList() {
  const activePlayersList = document.getElementById('active-players-list');
  if (!activePlayersList) return;
  activePlayersList.innerHTML = '';
  
  playerRegistry.forEach(player => {
    const item = document.createElement('div');
    item.className = `player-list-item ${player.name === playerName ? 'active' : ''}`;
    
    item.innerHTML = `
      <span class="player-name">${player.name}</span>
      <span class="player-best">BEST: ${player.best}</span>
    `;
    
    item.addEventListener('click', () => {
      playSound('click');
      playerName = player.name;
      bestScore = player.best;
      
      const nameInput = document.getElementById('player-name-input');
      if (nameInput) nameInput.value = playerName;
      if (homeBestScore) homeBestScore.textContent = bestScore;
      if (gameBest) gameBest.textContent = bestScore;
      
      // Close registry modal
      document.getElementById('registry-modal').classList.add('hidden');
    });
    
    activePlayersList.appendChild(item);
  });
}

// Register initializer on window load
window.addEventListener('DOMContentLoaded', init);
