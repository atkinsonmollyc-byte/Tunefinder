const mockMusic = [
  {
    artist: "The Midnight",
    title: "Sunset",
    type: "Track",
    genre: "Synthwave",
    tags: {
      genre: ["Electronic", "Pop"],
      mood: ["Nostalgic", "Happy"],
      decade: ["2010s"],
      energy: ["Dance"],
      vocals: ["Instrumental"],
      popularity: ["Underrated"],
    },
  },
  {
    artist: "Sade",
    title: "Smooth Operator",
    type: "Track",
    genre: "R&B",
    tags: {
      genre: ["R&B", "Pop"],
      mood: ["Chill", "Nostalgic"],
      decade: ["80s"],
      energy: ["Low Energy"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Daft Punk",
    title: "Discovery",
    type: "Album",
    genre: "Electronic",
    tags: {
      genre: ["Electronic", "Pop"],
      mood: ["Happy"],
      decade: ["2000s"],
      energy: ["Dance"],
      vocals: ["Mixed Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Phoebe Bridgers",
    title: "Kyoto",
    type: "Track",
    genre: "Indie Rock",
    tags: {
      genre: ["Indie", "Rock"],
      mood: ["Sad"],
      decade: ["New Music"],
      energy: ["Mid Energy"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "A Tribe Called Quest",
    title: "Electric Relaxation",
    type: "Track",
    genre: "Rap",
    tags: {
      genre: ["Rap"],
      mood: ["Chill", "Nostalgic"],
      decade: ["90s"],
      energy: ["Low Energy"],
      vocals: ["Male Vocals"],
      popularity: ["Underrated"],
    },
  },
  {
    artist: "Fleetwood Mac",
    title: "Dreams",
    type: "Track",
    genre: "Classic Rock",
    tags: {
      genre: ["Rock", "Pop"],
      mood: ["Chill", "Nostalgic"],
      decade: ["70s"],
      energy: ["Low Energy"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Bad Bunny",
    title: "Titi Me Pregunto",
    type: "Track",
    genre: "Latin Pop",
    tags: {
      genre: ["Pop", "Rap"],
      mood: ["Happy"],
      decade: ["New Music"],
      energy: ["Dance"],
      vocals: ["Male Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Nina Simone",
    title: "Feeling Good",
    type: "Track",
    genre: "Jazz Soul",
    tags: {
      genre: ["R&B"],
      mood: ["Happy", "Nostalgic"],
      decade: ["60s"],
      energy: ["Mid Energy"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Brian Eno",
    title: "Ambient 1: Music for Airports",
    type: "Album",
    genre: "Ambient",
    tags: {
      genre: ["Electronic"],
      mood: ["Chill"],
      decade: ["70s"],
      energy: ["Low Energy"],
      vocals: ["Instrumental"],
      popularity: ["Underrated"],
    },
  },
  {
    artist: "Olivia Rodrigo",
    title: "GUTS",
    type: "Album",
    genre: "Pop Rock",
    tags: {
      genre: ["Pop", "Rock"],
      mood: ["Angry", "Sad"],
      decade: ["New Music"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Nick Drake",
    title: "Pink Moon",
    type: "Album",
    genre: "Acoustic",
    tags: {
      genre: ["Acoustic", "Indie"],
      mood: ["Sad", "Chill"],
      decade: ["70s"],
      energy: ["Low Energy"],
      vocals: ["Male Vocals"],
      popularity: ["Underrated"],
    },
  },
  {
    artist: "Missy Elliott",
    title: "Get Ur Freak On",
    type: "Track",
    genre: "Rap",
    tags: {
      genre: ["Rap", "Electronic"],
      mood: ["Happy"],
      decade: ["2000s"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Yeah Yeah Yeahs",
    title: "Maps",
    type: "Track",
    genre: "Indie Rock",
    tags: {
      genre: ["Indie", "Rock"],
      mood: ["Sad", "Nostalgic"],
      decade: ["2000s"],
      energy: ["Mid Energy"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Charli XCX",
    title: "Von Dutch",
    type: "Track",
    genre: "Pop",
    tags: {
      genre: ["Pop", "Electronic"],
      mood: ["Happy", "Angry"],
      decade: ["New Music"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "The Strokes",
    title: "Is This It",
    type: "Album",
    genre: "Indie Rock",
    tags: {
      genre: ["Indie", "Rock"],
      mood: ["Nostalgic"],
      decade: ["2000s"],
      energy: ["Dance"],
      vocals: ["Male Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "FKA twigs",
    title: "Two Weeks",
    type: "Track",
    genre: "Alternative R&B",
    tags: {
      genre: ["R&B", "Electronic"],
      mood: ["Sad", "Chill"],
      decade: ["2010s"],
      energy: ["Low Energy"],
      vocals: ["Female Vocals"],
      popularity: ["Underrated"],
    },
  },
  {
    artist: "Outkast",
    title: "Ms. Jackson",
    type: "Track",
    genre: "Rap",
    tags: {
      genre: ["Rap", "R&B"],
      mood: ["Sad", "Nostalgic"],
      decade: ["2000s"],
      energy: ["Mid Energy"],
      vocals: ["Male Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Haim",
    title: "The Steps",
    type: "Track",
    genre: "Pop Rock",
    tags: {
      genre: ["Pop", "Rock"],
      mood: ["Happy"],
      decade: ["2020s"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Underrated"],
    },
  },
  {
    artist: "Aphex Twin",
    title: "Avril 14th",
    type: "Track",
    genre: "Electronic",
    tags: {
      genre: ["Electronic", "Acoustic"],
      mood: ["Sad", "Chill"],
      decade: ["2000s"],
      energy: ["Low Energy"],
      vocals: ["Instrumental"],
      popularity: ["Underrated"],
    },
  },
  {
    artist: "Paramore",
    title: "Misery Business",
    type: "Track",
    genre: "Rock",
    tags: {
      genre: ["Rock", "Pop"],
      mood: ["Angry", "Happy"],
      decade: ["2000s"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Beyonce",
    title: "CUFF IT",
    type: "Track",
    genre: "R&B Pop",
    tags: {
      genre: ["R&B", "Pop"],
      mood: ["Happy"],
      decade: ["New Music"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Eurythmics",
    title: "Sweet Dreams (Are Made of This)",
    type: "Track",
    genre: "Synth Pop",
    tags: {
      genre: ["Electronic", "Pop"],
      mood: ["Nostalgic"],
      decade: ["80s"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "New Order",
    title: "Blue Monday",
    type: "Track",
    genre: "Electronic",
    tags: {
      genre: ["Electronic"],
      mood: ["Nostalgic"],
      decade: ["80s"],
      energy: ["Dance"],
      vocals: ["Male Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Dua Lipa",
    title: "Levitating",
    type: "Track",
    genre: "Pop",
    tags: {
      genre: ["Pop"],
      mood: ["Happy"],
      decade: ["New Music"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Robyn",
    title: "Dancing On My Own",
    type: "Track",
    genre: "Pop",
    tags: {
      genre: ["Pop", "Electronic"],
      mood: ["Sad"],
      decade: ["2010s"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Lorde",
    title: "Green Light",
    type: "Track",
    genre: "Pop",
    tags: {
      genre: ["Pop"],
      mood: ["Sad", "Happy"],
      decade: ["2010s"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Mitski",
    title: "Nobody",
    type: "Track",
    genre: "Indie Pop",
    tags: {
      genre: ["Indie", "Pop"],
      mood: ["Sad"],
      decade: ["New Music"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Underrated"],
    },
  },
  {
    artist: "Kendrick Lamar",
    title: "DNA.",
    type: "Track",
    genre: "Rap",
    tags: {
      genre: ["Rap"],
      mood: ["Angry"],
      decade: ["New Music"],
      energy: ["High Energy"],
      vocals: ["Male Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Radiohead",
    title: "No Surprises",
    type: "Track",
    genre: "Rock",
    tags: {
      genre: ["Rock"],
      mood: ["Sad", "Chill"],
      decade: ["90s"],
      energy: ["Low Energy"],
      vocals: ["Male Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Arctic Monkeys",
    title: "505",
    type: "Track",
    genre: "Indie Rock",
    tags: {
      genre: ["Indie", "Rock"],
      mood: ["Sad"],
      decade: ["2000s"],
      energy: ["Mid Energy"],
      vocals: ["Male Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    artist: "Janelle Monae",
    title: "Make Me Feel",
    type: "Track",
    genre: "R&B Pop",
    tags: {
      genre: ["R&B", "Pop"],
      mood: ["Happy"],
      decade: ["New Music"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Underrated"],
    },
  },
  {
    artist: "LCD Soundsystem",
    title: "All My Friends",
    type: "Track",
    genre: "Electronic Rock",
    tags: {
      genre: ["Electronic", "Rock", "Indie"],
      mood: ["Nostalgic"],
      decade: ["2000s"],
      energy: ["Dance"],
      vocals: ["Male Vocals"],
      popularity: ["Underrated"],
    },
  },
];

const mockArtists = [
  {
    name: "Beyonce",
    type: "Artist",
    mainGenres: ["R&B", "Pop"],
    tags: {
      genre: ["R&B", "Pop"],
      mood: ["Happy"],
      decade: ["New Music"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    name: "Charli XCX",
    type: "Artist",
    mainGenres: ["Pop", "Electronic"],
    tags: {
      genre: ["Pop", "Electronic"],
      mood: ["Happy", "Angry"],
      decade: ["New Music"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    name: "Kendrick Lamar",
    type: "Artist",
    mainGenres: ["Rap"],
    tags: {
      genre: ["Rap"],
      mood: ["Angry"],
      decade: ["New Music"],
      energy: ["High Energy"],
      vocals: ["Male Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    name: "Radiohead",
    type: "Artist",
    mainGenres: ["Rock", "Indie"],
    tags: {
      genre: ["Rock", "Indie"],
      mood: ["Sad", "Chill"],
      decade: ["90s", "2000s"],
      energy: ["Low Energy"],
      vocals: ["Male Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    name: "Missy Elliott",
    type: "Artist",
    mainGenres: ["Rap", "Electronic"],
    tags: {
      genre: ["Rap", "Electronic"],
      mood: ["Happy"],
      decade: ["2000s"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    name: "Sade",
    type: "Artist",
    mainGenres: ["R&B", "Pop"],
    tags: {
      genre: ["R&B", "Pop"],
      mood: ["Chill", "Nostalgic"],
      decade: ["80s"],
      energy: ["Low Energy"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    name: "Daft Punk",
    type: "Artist",
    mainGenres: ["Electronic", "Pop"],
    tags: {
      genre: ["Electronic", "Pop"],
      mood: ["Happy", "Nostalgic"],
      decade: ["2000s"],
      energy: ["Dance"],
      vocals: ["Mixed Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    name: "Phoebe Bridgers",
    type: "Artist",
    mainGenres: ["Indie", "Rock"],
    tags: {
      genre: ["Indie", "Rock"],
      mood: ["Sad", "Chill"],
      decade: ["New Music"],
      energy: ["Mid Energy"],
      vocals: ["Female Vocals"],
      popularity: ["Popular"],
    },
  },
  {
    name: "A Tribe Called Quest",
    type: "Artist",
    mainGenres: ["Rap"],
    tags: {
      genre: ["Rap"],
      mood: ["Chill", "Nostalgic"],
      decade: ["90s"],
      energy: ["Low Energy"],
      vocals: ["Male Vocals"],
      popularity: ["Underrated"],
    },
  },
  {
    name: "FKA twigs",
    type: "Artist",
    mainGenres: ["R&B", "Electronic"],
    tags: {
      genre: ["R&B", "Electronic"],
      mood: ["Sad", "Chill"],
      decade: ["2010s"],
      energy: ["Low Energy"],
      vocals: ["Female Vocals"],
      popularity: ["Underrated"],
    },
  },
  {
    name: "LCD Soundsystem",
    type: "Artist",
    mainGenres: ["Electronic", "Rock", "Indie"],
    tags: {
      genre: ["Electronic", "Rock", "Indie"],
      mood: ["Nostalgic"],
      decade: ["2000s"],
      energy: ["Dance"],
      vocals: ["Male Vocals"],
      popularity: ["Underrated"],
    },
  },
  {
    name: "Mitski",
    type: "Artist",
    mainGenres: ["Indie", "Pop"],
    tags: {
      genre: ["Indie", "Pop"],
      mood: ["Sad"],
      decade: ["New Music"],
      energy: ["Dance"],
      vocals: ["Female Vocals"],
      popularity: ["Underrated"],
    },
  },
];

const preferenceChips = [
  "Pop",
  "Rock",
  "Indie",
  "R&B",
  "Rap",
  "Electronic",
  "Acoustic",
  "Sad",
  "Happy",
  "Chill",
  "Dance",
  "Angry",
  "Nostalgic",
  "80s",
  "90s",
  "2000s",
  "New Music",
  "Female Vocals",
  "Male Vocals",
  "Underrated",
];

const discoveryVibes = [
  ["Indie", "Chill", "Underrated"],
  ["Pop", "Dance", "Female Vocals", "New Music"],
  ["Rap", "Male Vocals", "Angry", "New Music"],
  ["Electronic", "80s", "Dance", "Nostalgic"],
  ["Rock", "Sad", "Male Vocals", "90s"],
  ["R&B", "Chill", "Female Vocals", "80s"],
  ["Acoustic", "Sad", "Chill", "Underrated"],
  ["Electronic", "Pop", "Happy", "Dance", "New Music"],
];

const listeningPersonas = [
  {
    label: "🌙 Night Owl",
    description: "You lean toward chill, sad, nostalgic, or acoustic sounds.",
    tags: ["Chill", "Sad", "Nostalgic", "Acoustic"],
  },
  {
    label: "⚡ Energy Seeker",
    description: "You lean toward dance, pop, electronic, or high-energy music.",
    tags: ["Dance", "Pop", "Electronic", "High Energy", "Happy"],
  },
  {
    label: "🎸 Indie Explorer",
    description: "You lean toward indie, underrated, acoustic, or alternative sounds.",
    tags: ["Indie", "Underrated", "Acoustic", "Rock"],
  },
  {
    label: "💿 Throwback Fan",
    description: "You lean toward 80s, 90s, or 2000s sounds.",
    tags: ["80s", "90s", "2000s", "Nostalgic"],
  },
  {
    label: "🎤 Vocal Lover",
    description: "You lean toward female vocals, male vocals, R&B, or pop.",
    tags: ["Female Vocals", "Male Vocals", "R&B", "Pop"],
  },
];

const form = document.querySelector("#preference-form");
const chipGrid = document.querySelector("#chip-grid");
const modeButtons = document.querySelectorAll(".mode-button");
const selectedChipsDisplay = document.querySelector("#selected-chips");
const message = document.querySelector("#message");
const recommendButton = document.querySelector("#recommend-button");
const discoverButton = document.querySelector("#discover-button");
const discoveryVibe = document.querySelector("#discovery-vibe");
const personaHeading = document.querySelector("#persona-heading");
const personaDescription = document.querySelector("#persona-description");
const results = document.querySelector("#results");
const resultsHeading = document.querySelector("#results-heading");
const resultsSummary = document.querySelector("#results-summary");
const selectedVibesSummary = document.querySelector("#selected-vibes-summary");
const viewButtons = document.querySelectorAll(".view-button");
const recommendationsSection = document.querySelector(".results-section");
const favouritesSection = document.querySelector("#favourites-section");
const favouritesList = document.querySelector("#favourites-list");
const favouritesSummary = document.querySelector("#favourites-summary");
const favouritesCount = document.querySelector("#favourites-count");
const selectedChips = new Set();
let recommendationMode = "songs";
let loadingTimer = null;
let isLoading = false;
let currentView = "recommendations";
let currentRecommendations = [];
let favourites = loadFavourites();

renderChips();
renderModeToggle();
renderViewTabs();
renderFavourites();
updateListeningPersona();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  runRecommendationSearch([...selectedChips]);
});

discoverButton.addEventListener("click", () => {
  const vibe = pickDiscoveryVibe();
  selectedChips.clear();
  vibe.forEach((chip) => selectedChips.add(chip));
  updateChipDisplay();
  showDiscoveryVibe(vibe);
  currentView = "recommendations";
  updateViewDisplay();
  runRecommendationSearch(vibe);
});

function runRecommendationSearch(preferences) {
  window.clearTimeout(loadingTimer);
  clearMessage();

  if (preferences.length === 0) {
    setLoading(false);
    showMessage("Please choose at least one chip.", "error");
    resultsSummary.textContent = "No recommendations yet.";
    results.innerHTML = "";
    return;
  }

  showLoadingState();

  loadingTimer = window.setTimeout(() => {
    const recommendations = recommendMusic(preferences, recommendationMode);
    setLoading(false);
    renderRecommendations(recommendations, preferences);
    scrollToResults();
  }, 650);
}

function renderChips() {
  chipGrid.innerHTML = preferenceChips
    .map(
      (chip) => `
        <button
          class="chip"
          type="button"
          aria-pressed="false"
          data-chip="${escapeHtml(chip)}"
        >
          ${escapeHtml(chip)}
        </button>
      `,
    )
    .join("");

  chipGrid.addEventListener("click", (event) => {
    const chipButton = event.target.closest(".chip");

    if (!chipButton) {
      return;
    }

    toggleChip(chipButton.dataset.chip);
  });
}

function renderModeToggle() {
  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      recommendationMode = button.dataset.mode;
      updateModeDisplay();
      resetResults();
    });
  });
}

function renderViewTabs() {
  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.view;
      updateViewDisplay();
    });
  });
}

function updateViewDisplay() {
  const showingFavourites = currentView === "favourites";

  viewButtons.forEach((button) => {
    const selected = button.dataset.view === currentView;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  recommendationsSection.classList.toggle("hidden", showingFavourites);
  favouritesSection.classList.toggle("hidden", !showingFavourites);

  if (showingFavourites) {
    renderFavourites();
  }
}

function updateModeDisplay() {
  modeButtons.forEach((button) => {
    const selected = button.dataset.mode === recommendationMode;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function resetResults() {
  window.clearTimeout(loadingTimer);
  setLoading(false);
  clearMessage();
  currentRecommendations = [];
  results.innerHTML = "";
  selectedVibesSummary.classList.add("hidden");
  selectedVibesSummary.innerHTML = "";
  resultsHeading.textContent = "Recommendations";
  resultsSummary.textContent =
    recommendationMode === "songs"
      ? "Song matches will appear here."
      : "Artist matches will appear here.";
}

function pickDiscoveryVibe() {
  const randomIndex = Math.floor(Math.random() * discoveryVibes.length);
  return discoveryVibes[randomIndex];
}

function showDiscoveryVibe(vibe) {
  discoveryVibe.textContent = `Today's discovery vibe: ${vibe.join(" • ")}`;
}

function showLoadingState() {
  setLoading(true);
  showMessage("Finding your matches...", "loading");
  results.innerHTML = "";
  selectedVibesSummary.classList.add("hidden");
  selectedVibesSummary.innerHTML = "";
  resultsHeading.textContent = "Recommendations";
  resultsSummary.textContent = "Finding your matches...";
}

function setLoading(loading) {
  isLoading = loading;
  recommendButton.disabled = loading;
  discoverButton.disabled = loading;
  recommendButton.textContent = loading
    ? "Finding your matches..."
    : "Get recommendations";

  if (!loading && message.classList.contains("loading")) {
    clearMessage();
  }
}

function toggleChip(chip) {
  discoveryVibe.textContent = "";

  if (selectedChips.has(chip)) {
    selectedChips.delete(chip);
  } else {
    selectedChips.add(chip);
  }

  updateChipDisplay();
}

function updateChipDisplay() {
  document.querySelectorAll(".chip").forEach((chipButton) => {
    const selected = selectedChips.has(chipButton.dataset.chip);
    chipButton.classList.toggle("selected", selected);
    chipButton.setAttribute("aria-pressed", String(selected));
  });

  selectedChipsDisplay.textContent =
    selectedChips.size > 0 ? [...selectedChips].join(", ") : "None yet";
  updateListeningPersona();
}

function updateListeningPersona() {
  const personaTags = getPersonaTags();

  if (personaTags.length === 0) {
    personaHeading.textContent = "Start tuning your vibe";
    personaDescription.textContent =
      "Choose some vibes or save favourites to discover your listening persona.";
    return;
  }

  const bestPersona = listeningPersonas
    .map((persona) => ({
      ...persona,
      score: persona.tags.filter((tag) => personaTags.includes(tag)).length,
    }))
    .sort((first, second) => second.score - first.score)[0];

  if (!bestPersona || bestPersona.score === 0) {
    personaHeading.textContent = "Start tuning your vibe";
    personaDescription.textContent =
      "Choose some vibes or save favourites to discover your listening persona.";
    return;
  }

  personaHeading.textContent = bestPersona.label;
  personaDescription.textContent = bestPersona.description;
}

function getPersonaTags() {
  const selectedTags = [...selectedChips];
  const favouriteTags = favourites.flatMap((favorite) => [
    ...(favorite.matchedTags || []),
    ...(favorite.mainGenres || []),
    favorite.genre,
    favorite.kind,
  ]);

  return [...new Set([...selectedTags, ...favouriteTags].filter(Boolean))];
}

function recommendMusic(preferences, mode = "songs") {
  const normalizedPreferences = preferences.map(normalize);
  const dataset = mode === "artists" ? mockArtists : mockMusic;

  const scoredMusic = dataset.map((item) => {
    const itemTags = getAllTags(item);
    const matchedTags = itemTags.filter((tag) =>
      normalizedPreferences.includes(normalize(tag)),
    );
    const score = matchedTags.length;

    return {
      ...item,
      score,
      matchedTags,
      resultType: mode === "artists" ? "Artist" : item.type,
    };
  });

  const matches = scoredMusic.filter((item) => item.score > 0);

  return matches
    .sort((first, second) => {
      if (second.score !== first.score) {
        return second.score - first.score;
      }

      return getSortName(first).localeCompare(getSortName(second));
    })
    .slice(0, 3)
    .map((item) => ({
      ...item,
      confidence: getConfidence(item.score),
      reason: buildReason(item, preferences),
    }));
}

function getSortName(item) {
  return item.artist || item.name || "";
}

function getAllTags(item) {
  return [...new Set(Object.values(item.tags).flat())];
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s&]/g, " ").trim();
}

function getConfidence(score) {
  if (score >= 3) {
    return "High";
  }

  if (score === 2) {
    return "Medium";
  }

  if (score === 1) {
    return "Low";
  }

  return "Low";
}

function buildReason(item, preferences) {
  if (item.score === 1) {
    return `Low-confidence match: it only shares ${formatList(item.matchedTags)} with your selected chips.`;
  }

  return `Strongest overlap with your selected chips: ${formatList(item.matchedTags)}.`;
}

function formatList(items) {
  if (items.length === 1) {
    return items[0];
  }

  return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
}

function renderRecommendations(recommendations, preferences) {
  const strongestScore = recommendations[0]?.score ?? 0;
  const weakMatches = strongestScore <= 1;
  const preferenceText = preferences.join(", ");

  if (recommendations.length === 0) {
    currentRecommendations = [];
    resultsSummary.textContent = `No direct mock ${recommendationMode} matches for: ${preferenceText}.`;
    renderSelectedVibes(preferences);
    showMessage(
      "TuneFinder does not have a good match for that selection in the mock dataset yet.",
      "warning",
    );
    results.innerHTML = "";
    return;
  }

  resultsSummary.textContent = weakMatches
    ? `Low-confidence ${recommendationMode} matches for: ${preferenceText}.`
    : `Showing ${recommendations.length} mock ${recommendationMode} matches for: ${preferenceText}.`;
  renderSelectedVibes(preferences);

  if (weakMatches) {
    showMessage(
      "These are loose matches because your selected vibe is unusual.",
      "warning",
    );
  }

  currentRecommendations = recommendations;
  results.innerHTML = recommendations.map(createRecommendationCard).join("");
  updateFavoriteButtons();
}

function renderSelectedVibes(preferences) {
  selectedVibesSummary.classList.remove("hidden");
  resultsHeading.textContent = "Your Recommendations";
  selectedVibesSummary.innerHTML = `
    <p class="selected-vibes-title">Your Recommendations</p>
    <p>Based on: ${preferences.map(escapeHtml).join(" &bull; ")}</p>
    <div class="selected-vibes-chips">
      ${preferences.map((chip) => `<span class="selected-vibe-chip">${escapeHtml(chip)}</span>`).join("")}
    </div>
  `;
}

function scrollToResults() {
  recommendationsSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function createRecommendationCard(item) {
  if (item.resultType === "Artist") {
    return createArtistCard(item);
  }

  return createSongCard(item);
}

function createSongCard(item) {
  return `
    <article class="recommendation-card">
      <div class="card-top">
        <div>
          <h3 class="track">${escapeHtml(item.title)}</h3>
          <p class="artist">${escapeHtml(item.artist)}</p>
        </div>
        <div class="card-actions">
          <button
            class="favorite-button ${isFavorite(item) ? "saved" : ""}"
            type="button"
            data-favorite-id="${escapeHtml(getFavoriteId(item))}"
            aria-pressed="${String(isFavorite(item))}"
          >
            ${isFavorite(item) ? "&#9829; Saved" : "&#9825; Save"}
          </button>
          <span class="confidence">${escapeHtml(item.confidence)} Match</span>
        </div>
      </div>
      <div class="card-meta-row">
        <span class="meta">${escapeHtml(item.genre)}</span>
        ${renderTypeBadge(item)}
      </div>
      <div class="matched-tags" aria-label="Matched tags">
        ${renderMatchedTags(item.matchedTags)}
      </div>
      <p class="why">${escapeHtml(item.reason)}</p>
    </article>
  `;
}

function createArtistCard(item) {
  return `
    <article class="recommendation-card artist-card">
      <div class="card-top">
        <div>
          <h3 class="artist-heading">${escapeHtml(item.name)}</h3>
        </div>
        <div class="card-actions">
          <button
            class="favorite-button ${isFavorite(item) ? "saved" : ""}"
            type="button"
            data-favorite-id="${escapeHtml(getFavoriteId(item))}"
            aria-pressed="${String(isFavorite(item))}"
          >
            ${isFavorite(item) ? "&#9829; Saved" : "&#9825; Save"}
          </button>
          <span class="confidence">${escapeHtml(item.confidence)} Match</span>
        </div>
      </div>
      <div class="card-meta-row">
        ${item.mainGenres.map((genre) => `<span class="meta">${escapeHtml(genre)}</span>`).join("")}
        ${renderTypeBadge(item)}
      </div>
      <div class="matched-tags" aria-label="Matched tags">
        ${renderMatchedTags(item.matchedTags)}
      </div>
      <p class="why">${escapeHtml(item.reason)}</p>
    </article>
  `;
}

function renderTypeBadge(item) {
  if (
    item.resultType === "Artist" ||
    item.resultType === "Track" ||
    item.type === "Track"
  ) {
    return "";
  }

  return `<span class="meta type-badge">${escapeHtml(item.resultType || item.type)}</span>`;
}

function renderMatchedTags(matchedTags) {
  if (matchedTags.length === 0) {
    return '<span class="tag muted-tag">No direct chip matches</span>';
  }

  return matchedTags
    .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
    .join("");
}

results.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest(".favorite-button");

  if (!favoriteButton) {
    return;
  }

  const item = currentRecommendations.find(
    (recommendation) => getFavoriteId(recommendation) === favoriteButton.dataset.favoriteId,
  );

  if (!item) {
    return;
  }

  saveFavorite(item);
});

favouritesList.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-favorite");

  if (!removeButton) {
    return;
  }

  removeFavorite(removeButton.dataset.favoriteId);
});

function getFavoriteId(item) {
  if (item.resultType === "Artist" || item.type === "Artist") {
    return `artist:${normalize(item.name)}`;
  }

  return `song:${normalize(item.artist)}:${normalize(item.title)}`;
}

function isFavorite(item) {
  const favoriteId = getFavoriteId(item);
  return favourites.some((favorite) => favorite.id === favoriteId);
}

function saveFavorite(item) {
  if (isFavorite(item)) {
    updateFavoriteButtons();
    return;
  }

  favourites = [...favourites, createFavoriteSnapshot(item)];
  saveFavourites();
  updateFavoriteButtons();
  renderFavourites();
  updateListeningPersona();
}

function removeFavorite(favoriteId) {
  favourites = favourites.filter((favorite) => favorite.id !== favoriteId);
  saveFavourites();
  updateFavoriteButtons();
  renderFavourites();
  updateListeningPersona();
}

function createFavoriteSnapshot(item) {
  if (item.resultType === "Artist" || item.type === "Artist") {
    return {
      id: getFavoriteId(item),
      kind: "Artist",
      name: item.name,
      mainGenres: item.mainGenres,
      matchedTags: item.matchedTags,
      confidence: item.confidence,
      reason: item.reason,
    };
  }

  return {
    id: getFavoriteId(item),
    kind: item.type === "Album" ? "Album" : "Song",
    title: item.title,
    artist: item.artist,
    genre: item.genre,
    matchedTags: item.matchedTags,
    confidence: item.confidence,
    reason: item.reason,
  };
}

function loadFavourites() {
  try {
    return JSON.parse(localStorage.getItem("tunefinder-favourites")) || [];
  } catch {
    return [];
  }
}

function saveFavourites() {
  localStorage.setItem("tunefinder-favourites", JSON.stringify(favourites));
}

function renderFavourites() {
  favouritesCount.textContent = String(favourites.length);

  if (favourites.length === 0) {
    favouritesSummary.textContent = "No favourites yet. Save a song or artist with the heart button.";
    favouritesList.innerHTML = "";
    return;
  }

  favouritesSummary.textContent = `${favourites.length} saved favourite${favourites.length === 1 ? "" : "s"}.`;
  favouritesList.innerHTML = favourites.map(createFavouriteCard).join("");
}

function createFavouriteCard(favorite) {
  if (favorite.kind === "Artist") {
    return `
      <article class="recommendation-card artist-card">
        <div class="card-top">
          <div>
            <h3 class="artist-heading">${escapeHtml(favorite.name)}</h3>
          </div>
          <button class="remove-favorite" type="button" data-favorite-id="${escapeHtml(favorite.id)}">
            Remove
          </button>
        </div>
        <div class="card-meta-row">
          ${favorite.mainGenres.map((genre) => `<span class="meta">${escapeHtml(genre)}</span>`).join("")}
        </div>
        <div class="matched-tags" aria-label="Matched tags">
          ${renderMatchedTags(favorite.matchedTags)}
        </div>
        <p class="why">${escapeHtml(favorite.reason)}</p>
      </article>
    `;
  }

  return `
    <article class="recommendation-card">
      <div class="card-top">
        <div>
          <h3 class="track">${escapeHtml(favorite.title)}</h3>
          <p class="artist">${escapeHtml(favorite.artist)}</p>
        </div>
        <button class="remove-favorite" type="button" data-favorite-id="${escapeHtml(favorite.id)}">
          Remove
        </button>
      </div>
      <div class="card-meta-row">
        <span class="meta">${escapeHtml(favorite.genre)}</span>
        ${favorite.kind === "Album" ? '<span class="meta type-badge">Album</span>' : ""}
      </div>
      <div class="matched-tags" aria-label="Matched tags">
        ${renderMatchedTags(favorite.matchedTags)}
      </div>
      <p class="why">${escapeHtml(favorite.reason)}</p>
    </article>
  `;
}

function updateFavoriteButtons() {
  document.querySelectorAll(".favorite-button").forEach((button) => {
    const saved = favourites.some((favorite) => favorite.id === button.dataset.favoriteId);
    button.classList.toggle("saved", saved);
    button.setAttribute("aria-pressed", String(saved));
    button.innerHTML = saved ? "&#9829; Saved" : "&#9825; Save";
  });
}

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message ${type}`;
}

function clearMessage() {
  message.textContent = "";
  message.className = "message";
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
