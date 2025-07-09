// Study spots data
const studySpots = [
  {
    name: "Shapiro Undergraduate Library",
    location: [42.27565466333776, -83.73719333192601],
    openLate: true,
    quiet: true,
    nearFood: true,
    hasOutlets: true,
    description: 
    "Hours: \n" +
    "Saturday\t10 AM–6 PM\n" +
    "Sunday\t10 AM–12 AM\n" +
    "Monday\tOpen 24 hours\n" +
    "Tuesday\tOpen 24 hours\n" +
    "Wednesday\tOpen 24 hours\n" +
    "Thursday\tOpen 24 hours\n" +
    "Friday\t12 AM–6 PM\n\n" +
    "Features:\n" +
    "• Multiple floors with different noise levels\n" +
    "• Computer labs\n" +
    "• Group study rooms\n" +
    "• Printing services\n" +
    "• Cafe on first floor"
  },
  {
    name: "Hatcher Graduate Library",
    location: [42.27647706144644, -83.738013289598],
    openLate: true,
    quiet: true,
    nearFood: false,
    hasOutlets: true,
    description: 
    "Hours: \n" +
    "Monday-Thursday\t8 AM-9 PM\n" +
    "Friday\t8 AM-5 PM\n" +
    "Saturday-Sunday\tClosed\n\n" +
    "Features:\n" +
    "• Quiet study spaces\n" +
    "• Graduate study carrels\n" +
    "• Special collections\n" +
    "• Reading rooms"
  },
  {
    name: "Duderstadt Center",
    location: [42.29135374665564, -83.71567498774537],
    openLate: true,
    quiet: true,
    nearFood: true,
    hasOutlets: true,
    description: 
    "Hours: Open 24/7\n\n" +
    "Features:\n" +
    "• Computer labs\n" +
    "• 3D printing\n" +
    "• Video production studios\n" +
    "• Cafe on first floor\n" +
    "• Group study rooms"
  },
  {
    name: "Mason Hall Fish Bowl",
    location: [42.27736937895112, -83.73949286935995],
    openLate: false,
    quiet: true,
    nearFood: false,
    hasOutlets: true,
    description: 
    "Hours: \n" +
    "Monday-Friday\t7:30 AM - 11:30 PM\n" +
    "Saturday-Sunday\t10 AM - 11:30 PM\n\n" +
    "Features:\n" +
    "• Quiet study spaces\n" +
    "• Computer labs\n" +
    "• Near the Diag"
  },
  {
    name: "Kinesiology Building",
    location: [42.278591885244865, -83.73896096076197],
    openLate: false,
    quiet: true,
    nearFood: false,
    hasOutlets: true,
    description: 
    "Hours: \n" +
    "Monday-Friday\t8 AM-5 PM\n" +
    "Saturday-Sunday\tClosed\n\n" +
    "Features:\n" +
    "• Quiet study spaces\n" +
    "• Near IM Building\n" +
    "• Modern facilities"
  },
  {
    name: "Sweetwaters Coffee & Tea",
    location: [42.2753945026701, -83.74145128470403],
    openLate: true,
    quiet: false,
    nearFood: true,
    hasOutlets: true,
    description: 
    "Hours: \n" +
    "Daily\t7 AM-9 PM\n\n" +
    "Features:\n" +
    "• Local coffee chain\n" +
    "• Food options\n" +
    "• Casual study space"
  },
  {
    name: "Ross School of Business",
    location: [42.27329852985467, -83.73781462332819],
    openLate: true,
    quiet: false,
    nearFood: true,
    hasOutlets: true,
    description: 
    "Hours: \n" +
    "Monday-Friday\t7 AM - 10 AM (with MCard)\n" +
    "Saturday-Sunday\tLimited hours\n\n" +
    "Features:\n" +
    "• Modern study spaces\n" +
    "• Cafe\n" +
    "• Group study rooms\n" +
    "• Requires MCard after hours"
  },

  {
    name: "Michigan Union",
    location: [42.27526748012435, -83.7415951656561],
    openLate: true,
    quiet: false,
    nearFood: true,
    hasOutlets: true,
    description: 
    "Hours: \n" +
    "Monday-Saturday\t7 AM - 2 AM\n" +
    "Sunday\t9 AM-2 AM\n\n" +
    "Features:\n" +
    "• Multiple study spaces\n" +
    "• Food court\n" +
    "• Computer labs\n" +
    "• Printing services\n" +
    "• Quiet study rooms available\n" +
    "• Starbucks"
  },
  {
    name: "Palmer Commons",
    location: [42.28096287807619, -83.73380325890982],
    openLate: false,
    quiet: true,
    nearFood: true,
    hasOutlets: true,
    description: 
    "Hours: \n" +
    "Monday-Friday\t7 AM - 10 PM\n" +
    "Saturday-Sunday\tClosed\n" +
    "Features:\n" +
    "• Modern study spaces\n" +
    "• Cafe\n" +
    "• Quiet environment\n" +
    "• Group study rooms\n" +
    "• Beautiful views"
  },
  {
    name: "East Hall",
    location: [42.276007185205074, -83.73455178614864],
    openLate: false,
    quiet: true,
    nearFood: false,
    hasOutlets: true,
    description:
    "Hours: \n" +
    "24/7\n" +
    "Features:\n" +
    "• Quiet study spaces\n" +
    "• Math and Psychology departments\n" +
    "• Modern facilities\n" + 
    "• Ping Pong table\n"
  },
  {
    name: "Law Library",
    location: [42.273954437947296, -83.7390612739788],
    openLate: false,
    quiet: true,
    nearFood: false,
    hasOutlets: true,
    description:
    "Hours: \n" +
    "Monday-Friday\t8 AM - 6 PM \n" +
    "Saturday-Sunday\tClosed\n" +
    "Features:\n" +
    "• Silence study spaces\n" +
    "• Law department\n"
  },
  {
    name: "Central Campus Classroom Building",
    location: [42.27801912879595, -83.73438962703194],
    openLate: false,
    quiet: true,
    nearFood: true,
    hasOutlets: true,
    description:
    "Hours: \n" + 
    "Monday-Friday\t7 AM - 10 PM \n" + 
    "Saturday\t9 AM - 6PM\n\n" + 
    "Sunday\t9AM - 10PM\n" + 
    "Features:\n" + 
    "• Beautiful views on 3rd floor"
  }
];

// Initialize map
const map = L.map('map', {
  maxBounds: [
    [42.20, -83.85], // Southwest coordinates
    [42.35, -83.65]  // Northeast coordinates
  ],
  maxBoundsViscosity: 1.0, // Makes the bounds "solid" - prevents dragging outside
  minZoom: 12, // Prevents zooming out too far
  maxZoom: 18  // Prevents zooming in too close
}).setView([42.2734, -83.7324], 13);
let userMarker = null;
let studySpotMarkers = [];
let userLatLng = null;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Update button creation with UMich styling
function createUMichButton(text, onClick, isPrimary = false) {
  const button = document.createElement('button');
  button.textContent = text;
  button.className = isPrimary ? 'umich-button primary' : 'umich-button secondary';
  button.addEventListener('click', onClick);
  return button;
}

// Replace existing button creation with styled buttons
const locationButton = createUMichButton('Show My Location', getUserLocationAndUpdate, false);
const randomButton = createUMichButton('Find Random Study Spot', findRandomStudySpot, true);

// Create a button container for better layout
const buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';
buttonContainer.appendChild(locationButton);
buttonContainer.appendChild(randomButton);
document.getElementById('filters').appendChild(buttonContainer);

// --- FAVORITES SYSTEM ---
function getFavoriteSpots() {
  return JSON.parse(localStorage.getItem('favoriteSpots') || '[]');
}
function setFavoriteSpots(favs) {
  localStorage.setItem('favoriteSpots', JSON.stringify(favs));
}
function isFavoriteSpot(name) {
  return getFavoriteSpots().includes(name);
}
function toggleFavoriteSpot(name) {
  let favs = getFavoriteSpots();
  if (favs.includes(name)) {
    favs = favs.filter(n => n !== name);
  } else {
    favs.push(name);
  }
  setFavoriteSpots(favs);
}

// Get user location and update userLatLng
function getUserLocationAndUpdate() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLatLng = [position.coords.latitude, position.coords.longitude];
        getUserLocation(position); // existing marker logic
        addStudySpotMarkers();
      },
      (error) => {
        userLatLng = null;
        getUserLocation(); // fallback marker logic
        addStudySpotMarkers();
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  } else {
    userLatLng = null;
    getUserLocation();
    addStudySpotMarkers();
  }
}

// Haversine formula for distance in km
function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// --- MODIFIED addStudySpotMarkers ---
function addStudySpotMarkers() {
  // Clear existing markers
  studySpotMarkers.forEach(marker => map.removeLayer(marker));
  studySpotMarkers = [];

  // Get filter states
  const openLate = document.getElementById('openLate').checked;
  const quiet = document.getElementById('quiet').checked;
  const nearFood = document.getElementById('nearFood').checked;
  const hasOutlets = document.getElementById('hasOutlets').checked;
  const showFavorites = document.getElementById('showFavorites').checked;
  const walkingDistance = document.getElementById('walkingDistance').checked;
  const favoriteSpots = getFavoriteSpots();

  // Prepare spots with distance if user location is available
  let filteredSpots = studySpots
    .map(spot => {
      let distance = null;
      if (userLatLng) {
        distance = getDistanceKm(userLatLng[0], userLatLng[1], spot.location[0], spot.location[1]);
      }
      return { ...spot, distance };
    })
    .filter(spot =>
      (!openLate || spot.openLate) &&
      (!quiet || spot.quiet) &&
      (!nearFood || spot.nearFood) &&
      (!hasOutlets || spot.hasOutlets) &&
      (!showFavorites || favoriteSpots.includes(spot.name)) &&
      (!walkingDistance || (spot.distance !== null && spot.distance <= 1))
    );

  // Sort by distance if available
  if (userLatLng) {
    filteredSpots.sort((a, b) => (a.distance ?? 9999) - (b.distance ?? 9999));
  }

  // Add markers
  filteredSpots.forEach(spot => {
    const isFav = favoriteSpots.includes(spot.name);
    const distanceStr = spot.distance !== null ? `<span class='distance-info'>${spot.distance < 1 ? (spot.distance*1000).toFixed(0) + ' m' : spot.distance.toFixed(2) + ' km'}</span>` : '';
    const popupContent = `
      <div class="umich-popup">
        <h3>${spot.name} <button class="fav-btn" data-spot="${spot.name}" title="${isFav ? 'Unfavorite' : 'Favorite'}">${isFav ? '⭐' : '☆'}</button></h3>
        ${distanceStr}
        <div class="popup-features">
          ${spot.openLate ? '<span class="feature-tag open-late">Open Late</span>' : ''}
          ${spot.quiet ? '<span class="feature-tag quiet">Quiet</span>' : ''}
          ${spot.nearFood ? '<span class="feature-tag food">Near Food</span>' : ''}
          ${spot.hasOutlets ? '<span class="feature-tag outlets">Has Outlets</span>' : ''}
        </div>
        <div class="popup-description">${spot.description}</div>
      </div>
    `;
    const marker = L.marker(spot.location)
      .addTo(map)
      .bindPopup(popupContent);
    studySpotMarkers.push(marker);
  });
}

// Add event listeners to checkboxes
document.getElementById('openLate').addEventListener('change', addStudySpotMarkers);
document.getElementById('quiet').addEventListener('change', addStudySpotMarkers);
document.getElementById('nearFood').addEventListener('change', addStudySpotMarkers);
document.getElementById('hasOutlets').addEventListener('change', addStudySpotMarkers);
document.getElementById('showFavorites').addEventListener('change', addStudySpotMarkers);
document.getElementById('walkingDistance').addEventListener('change', addStudySpotMarkers);

// Get user location
function getUserLocation(position) {
  if (position) {
    const { latitude, longitude } = position.coords;
    
    // Check if user is within Ann Arbor bounds
    const isInBounds = latitude >= 42.20 && latitude <= 42.35 &&
                      longitude >= -83.85 && longitude <= -83.65;
    
    // Remove existing user marker if it exists
    if (userMarker) {
      map.removeLayer(userMarker);
    }

    // Add new user marker
    userMarker = L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(isInBounds ? "You are here" : "You are outside Ann Arbor")
      .openPopup();

    // Only center map if user is in bounds
    if (isInBounds) {
      map.setView([latitude, longitude], 15);
    } else {
      alert("You are currently outside the Ann Arbor area. The map is restricted to Ann Arbor.");
      map.setView([42.2734, -83.7324], 13); // Reset to center of Ann Arbor
    }
  } else {
    alert("Geolocation is not supported by your browser");
  }
}

// Add initial study spot markers
addStudySpotMarkers();

// Function to check if a spot is currently open
function isCurrentlyOpen(spot) {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 6 is Saturday
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hour + minutes / 60;

  console.log(`Checking if ${spot.name} is open at ${hour}:${minutes}`); // Debug log

  // Parse hours from description
  const hoursMatch = spot.description.match(/Hours:([\s\S]*?)(?=Features:|$)/);
  if (!hoursMatch) {
    console.log(`No hours found for ${spot.name}`); // Debug log
    return true; // For testing, assume open if no hours found
  }
  
  const hoursText = hoursMatch[1];
  
  // Check for 24/7 spots
  if (hoursText.includes("Open 24/7")) {
    console.log(`${spot.name} is 24/7`); // Debug log
    return true;
  }
  
  // Check for 24-hour spots (like Ross with MCard)
  if (hoursText.includes("24 hours")) {
    if (spot.name === "Ross School of Business") {
      const isOpen = day >= 1 && day <= 5; // Monday to Friday
      console.log(`${spot.name} 24-hour access: ${isOpen}`); // Debug log
      return isOpen;
    }
    console.log(`${spot.name} has 24-hour access`); // Debug log
    return true;
  }

  // For testing purposes, let's be more lenient with hours
  // This will help us verify the random spot finder is working
  const isWeekday = day >= 1 && day <= 5;
  const isWeekend = day === 0 || day === 6;
  
  if (isWeekday && currentTime >= 7 && currentTime < 22) {
    console.log(`${spot.name} is open during weekday hours`); // Debug log
    return true;
  }
  
  if (isWeekend && currentTime >= 8 && currentTime < 20) {
    console.log(`${spot.name} is open during weekend hours`); // Debug log
    return true;
  }

  console.log(`${spot.name} is closed at current time`); // Debug log
  return false;
}

// Add custom marker icon for the selected spot
const selectedIcon = L.divIcon({
  className: 'selected-spot-marker',
  html: '<div class="selected-spot-pulse"></div>',
  iconSize: [40, 40],
  iconAnchor: [20, 20]
});

let selectedMarker = null;
let lasrRandomSpot = null;
let lastRandomSpot = null;

// Function to find a random open study spot
function findRandomStudySpot() {
  console.log("Finding random study spot..."); // Debug log

  // Get filter states
  const openLate = document.getElementById('openLate').checked;
  const quiet = document.getElementById('quiet').checked;
  const nearFood = document.getElementById('nearFood').checked;
  const hasOutlets = document.getElementById('hasOutlets').checked;
  const showFavorites = document.getElementById('showFavorites').checked;
  const walkingDistance = document.getElementById('walkingDistance').checked;
  const favoriteSpots = getFavoriteSpots();

  console.log("Filter states:", { openLate, quiet, nearFood, hasOutlets, showFavorites }); // Debug log

  // Filter spots based on preferences and current time
  let availableSpots = studySpots.filter(spot => {
    const isOpen = isCurrentlyOpen(spot);
    const matchesFilters = (!openLate || spot.openLate) &&
                          (!quiet || spot.quiet) &&
                          (!nearFood || spot.nearFood) &&
                          (!hasOutlets || spot.hasOutlets);
    return isOpen && matchesFilters;
  });

  // Exclude last selected spot if possible
  if (lastRandomSpot && availableSpots.length > 1) {
    availableSpots = availableSpots.filter(spot => spot.name !== lastRandomSpot.name);
  }

  if (availableSpots.length === 0) {
    const alertBox = document.createElement('div');
    alertBox.className = 'spot-alert';
    alertBox.innerHTML = `
      <div class="spot-alert-content">
        <h2>No Study Spots Available</h2>
        <p>No study spots match your current preferences and are open right now.</p>
        <p>Try adjusting your filters or check back later!</p>
        <button class="umich-button primary close-alert">Got it!</button>
      </div>
    `;
    document.body.appendChild(alertBox);
    alertBox.querySelector('.close-alert').addEventListener('click', () => alertBox.remove());
    return;
  }

  // Remove previous selected marker if it exists
  if (selectedMarker) {
    map.removeLayer(selectedMarker);
  }

  // Select random spot
  const randomSpot = availableSpots[Math.floor(Math.random() * availableSpots.length)];
  lastRandomSpot = randomSpot;
  console.log("Selected spot:", randomSpot.name); // Debug log

  // Create a smooth zoom animation to the spot
  map.flyTo(randomSpot.location, 17, {
    duration: 1.5,
    easeLinearity: 0.25
  });

  // Add pulsing marker at the selected spot
  selectedMarker = L.marker(randomSpot.location, { 
    icon: L.divIcon({
      className: 'selected-spot-marker',
      html: '<div class="selected-spot-pulse"></div>',
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    })
  }).addTo(map);

  // Find and highlight the corresponding study spot marker
  let foundMarker = false;
  studySpotMarkers.forEach(marker => {
    if (marker.getLatLng().equals(randomSpot.location)) {
      foundMarker = true;
      // Open the popup with a slight delay after the zoom animation
      setTimeout(() => {
        marker.openPopup();
      }, 1500);
    }
  });

  if (!foundMarker) {
    console.log("Warning: Could not find marker for selected spot"); // Debug log
  }

  // Show a nice message in a custom styled alert
  const timeStr = new Date().toLocaleTimeString();
  const alertBox = document.createElement('div');
  alertBox.className = 'spot-alert';
  alertBox.innerHTML = `
    <div class="spot-alert-content">
      <h3>Your Study Spot for ${timeStr}</h3>
      <h2>${randomSpot.name}</h2>
      <div class="spot-features">
        ${randomSpot.openLate ? '<span class="feature-tag open-late">Open Late</span>' : ''}
        ${randomSpot.quiet ? '<span class="feature-tag quiet">Quiet</span>' : ''}
        ${randomSpot.nearFood ? '<span class="feature-tag food">Near Food</span>' : ''}
        ${randomSpot.hasOutlets ? '<span class="feature-tag outlets">Has Outlets</span>' : ''}
      </div>
      <div class="spot-description">${randomSpot.description}</div>
      <button class="umich-button primary close-alert">Got it!</button>
    </div>
  `;
  
  document.body.appendChild(alertBox);
  
  // Add click handler to close the alert
  alertBox.querySelector('.close-alert').addEventListener('click', () => {
    alertBox.remove();
  });

  // Auto-remove the alert after 10 seconds
  setTimeout(() => {
    if (document.body.contains(alertBox)) {
      alertBox.remove();
    }
  }, 10000);
}

// Timer and Streak System
class StudyTimer {
  constructor() {
    this.timeLeft = 25 * 60; // 25 minutes in seconds
    this.initialTime = this.timeLeft;
    this.timerId = null;
    this.isRunning = false;
    this.isCompleted = false;
    this.isStopwatch = false;
    this.elapsedTime = 0;

    // DOM elements
    this.display = document.querySelector('.timer-display');
    this.startBtn = document.getElementById('startTimer');
    this.pauseBtn = document.getElementById('pauseTimer');
    this.resetBtn = document.getElementById('resetTimer');
    this.status = document.querySelector('.timer-status');
    this.container = document.querySelector('.timer-container');
    this.timerModeBtn = document.getElementById('timerMode');
    this.stopwatchModeBtn = document.getElementById('stopwatchMode');
    this.minutesInput = document.getElementById('minutesInput');

    // Bind event listeners
    this.startBtn.addEventListener('click', () => this.start());
    this.pauseBtn.addEventListener('click', () => this.pause());
    this.resetBtn.addEventListener('click', () => this.reset());
    this.timerModeBtn.addEventListener('click', () => this.setMode('timer'));
    this.stopwatchModeBtn.addEventListener('click', () => this.setMode('stopwatch'));
    
    // Add input listener for custom duration
    this.minutesInput.addEventListener('change', () => {
      if (!this.isRunning && !this.isStopwatch) {
        const minutes = Math.min(Math.max(parseInt(this.minutesInput.value) || 25, 1), 180);
        this.minutesInput.value = minutes; // Ensure value is within bounds
        this.setDuration(minutes);
      }
    });

    // Initialize display
    this.updateDisplay();
  }

  setMode(mode) {
    if (this.isRunning) {
      this.pause();
    }
    
    this.isStopwatch = mode === 'stopwatch';
    this.container.classList.toggle('stopwatch-mode', this.isStopwatch);
    this.timerModeBtn.classList.toggle('active', !this.isStopwatch);
    this.stopwatchModeBtn.classList.toggle('active', this.isStopwatch);
    
    // Show/hide duration controls based on mode
    document.querySelector('.timer-duration-controls').style.display = 
      this.isStopwatch ? 'none' : 'flex';
    
    if (this.isStopwatch) {
      this.timeLeft = 0;
      this.elapsedTime = 0;
    } else {
      const minutes = Math.min(Math.max(parseInt(this.minutesInput.value) || 25, 1), 180);
      this.timeLeft = minutes * 60;
      this.initialTime = this.timeLeft;
    }
    
    this.isCompleted = false;
    this.updateDisplay();
    this.reset();
  }

  setDuration(minutes) {
    this.initialTime = minutes * 60;
    this.timeLeft = this.initialTime;
    this.updateDisplay();
  }

  start() {
    if (!this.isRunning && !this.isCompleted) {
      this.isRunning = true;
      this.startBtn.disabled = true;
      this.pauseBtn.disabled = false;
      this.resetBtn.disabled = false;
      this.container.classList.add('active');
      this.status.textContent = this.isStopwatch ? 
        'Stopwatch running...' : 'Study session in progress...';
      
      this.timerId = setInterval(() => {
        if (this.isStopwatch) {
          this.elapsedTime++;
          this.timeLeft = this.elapsedTime;
        } else {
          this.timeLeft--;
        }
        this.updateDisplay();
        
        if (!this.isStopwatch && this.timeLeft <= 0) {
          this.complete();
        }
      }, 1000);
    }
  }

  pause() {
    if (this.isRunning) {
      this.isRunning = false;
      this.startBtn.disabled = false;
      this.pauseBtn.disabled = true;
      this.container.classList.remove('active');
      this.status.textContent = this.isStopwatch ? 
        'Stopwatch paused' : 'Study session paused';
      clearInterval(this.timerId);
    }
  }

  reset() {
    this.pause();
    if (this.isStopwatch) {
      this.timeLeft = 0;
      this.elapsedTime = 0;
    } else {
      this.timeLeft = this.initialTime;
    }
    this.isCompleted = false;
    this.container.classList.remove('active', 'completed');
    this.startBtn.disabled = false;
    this.pauseBtn.disabled = true;
    this.resetBtn.disabled = true;
    this.status.textContent = this.isStopwatch ? 
      'Ready to start stopwatch' : 'Complete a study session to log your streak!';
    this.updateDisplay();
  }

  complete() {
    this.pause();
    this.isCompleted = true;
    this.container.classList.add('completed');
    this.container.classList.remove('active');
    this.status.textContent = 'Study session completed! Click to log your streak.';
    this.startBtn.disabled = true;
    this.pauseBtn.disabled = true;
    this.resetBtn.disabled = false;
    
    if (!this.isStopwatch) {
      // Add click handler to log streak only in timer mode
      this.container.addEventListener('click', () => this.logStreak(), { once: true });
    }
  }

  updateDisplay() {
    const hours = Math.floor(this.timeLeft / 3600);
    const minutes = Math.floor((this.timeLeft % 3600) / 60);
    const seconds = this.timeLeft % 60;
    
    if (hours > 0) {
      this.display.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      this.display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }

  logStreak() {
    if (!this.isStopwatch) {
      updateStreak();
      this.reset();
    }
  }
}

// Streak System
class StreakSystem {
  constructor() {
    this.streakCount = document.querySelector('.streak-count');
    this.loadStreak();
  }

  loadStreak() {
    const streakData = JSON.parse(localStorage.getItem('studyStreak')) || { count: 0, lastStudyDate: null };
    this.streakCount.textContent = streakData.count;
    return streakData;
  }

  saveStreak(data) {
    localStorage.setItem('studyStreak', JSON.stringify(data));
    this.streakCount.textContent = data.count;
  }

  updateStreak() {
    const now = new Date();
    const today = now.toDateString();
    const streakData = this.loadStreak();
    
    // If already studied today, don't update
    if (streakData.lastStudyDate === today) {
      return;
    }

    const lastStudy = streakData.lastStudyDate ? new Date(streakData.lastStudyDate) : null;
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (!lastStudy || lastStudy.toDateString() === yesterday.toDateString()) {
      // Studied yesterday or first time studying
      streakData.count++;
    } else if (lastStudy.toDateString() !== today) {
      // Missed a day
      streakData.count = 1;
    }
    
    streakData.lastStudyDate = today;
    this.saveStreak(streakData);
  }
}

// Initialize timer and streak systems
const studyTimer = new StudyTimer();
const streakSystem = new StreakSystem();

// Function to update streak (called by timer)
function updateStreak() {
  streakSystem.updateStreak();
}

// --- FAVORITE BUTTON HANDLING ---
map.on('popupopen', function(e) {
  const btn = e.popup._contentNode.querySelector('.fav-btn');
  if (btn) {
    btn.onclick = function(ev) {
      ev.stopPropagation();
      const spotName = btn.getAttribute('data-spot');
      toggleFavoriteSpot(spotName);
      addStudySpotMarkers();
      // Reopen popup for the same marker
      setTimeout(() => {
        studySpotMarkers.forEach(marker => {
          if (marker.getLatLng().equals(e.popup._latlng)) {
            marker.openPopup();
          }
        });
      }, 100);
    };
  }
});