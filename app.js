// Demo tracks with bespoke SVG album covers & AI-style liner notes
const DEMO_TRACKS = [
  {
    title: "Velvet Rain",
    artist: "Kaito Morita Quartet",
    album: "Midnight Pressing · 2024",
    duration: 252,
    accent: "#c98a5b",
    linerNote:
      "Grabado en una sola toma nocturna en Tokio; el piano eléctrico Fender Rhodes captura el pulso tranquilo de la lluvia sobre el asfalto.",
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1b222c"/>
          <stop offset="100%" stop-color="#3a2c26"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#g1)"/>
      <circle cx="265" cy="145" r="78" fill="#c98a5b" opacity="0.88"/>
      <path d="M0 290 Q120 245 230 285 T400 265 L400 400 L0 400 Z" fill="#14171c"/>
      <line x1="70" y1="70" x2="70" y2="330" stroke="#efeae0" stroke-opacity="0.18" stroke-width="1.5"/>
      <line x1="95" y1="110" x2="95" y2="290" stroke="#c98a5b" stroke-opacity="0.45" stroke-width="1.5"/>
      <text x="36" y="362" fill="#efeae0" opacity="0.72" font-family="serif" font-size="18" letter-spacing="4">KAITO MORITA</text>
    </svg>`
  },
  {
    title: "Neon Horizon",
    artist: "Solstice Drive",
    album: "Cassette Dreams · 2023",
    duration: 218,
    accent: "#d95b7a",
    linerNote:
      "Sintetizadores analógicos Prophet-6 procesados en cinta magnética para evocar una autopista costera al atardecer.",
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1d1430"/>
          <stop offset="55%" stop-color="#6b2852"/>
          <stop offset="100%" stop-color="#d95b7a"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#g2)"/>
      <circle cx="200" cy="210" r="88" fill="#f4b183"/>
      <rect x="0" y="220" width="400" height="6" fill="#3a1c42"/>
      <rect x="0" y="236" width="400" height="9" fill="#3a1c42"/>
      <rect x="0" y="254" width="400" height="146" fill="#161124"/>
      <path d="M0 300 L400 300 M0 340 L400 340 M200 254 L40 400 M200 254 L360 400" stroke="#45d1c8" stroke-opacity="0.35" stroke-width="1.5"/>
    </svg>`
  },
  {
    title: "Kyoto Morning Tea",
    artist: "Hana & The Moss",
    album: "Botanical Tapes · 2025",
    duration: 196,
    accent: "#6d8c74",
    linerNote:
      "Guitarra acústica con cuerdas de nylon y grabaciones de campo de un jardín de bambú tras la primera brisa de primavera.",
    svg: `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#e8e2d5"/>
      <circle cx="200" cy="185" r="105" fill="#6d8c74" opacity="0.25"/>
      <path d="M120 340 Q180 210 280 110" stroke="#2c3e31" stroke-width="5" fill="none" stroke-linecap="round"/>
      <ellipse cx="220" cy="180" rx="34" ry="14" transform="rotate(-32 220 180)" fill="#4d6b53"/>
      <ellipse cx="170" cy="240" rx="28" ry="12" transform="rotate(24 170 240)" fill="#6d8c74"/>
      <circle cx="285" cy="105" r="18" fill="#c96f53" opacity="0.85"/>
    </svg>`
  }
];

// E-Ink Idle Art Scenes
const EINK_SCENES = [
  {
    label: "EDICIÓN AMBIENTAL · TARDE DESPEJADA",
    weather: "22°C · Despejado",
    poem: "“Luz cálida sobre el escritorio; el silencio también forma parte de la melodía.”",
    svg: `<svg viewBox="0 0 1200 750" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="750" fill="#ebe3d2"/>
      <circle cx="880" cy="210" r="120" fill="#d99b66" opacity="0.72"/>
      <path d="M0 540 Q320 430 620 510 T1200 470 L1200 750 L0 750 Z" fill="#cfc3ad"/>
      <path d="M0 620 Q420 530 780 610 T1200 580 L1200 750 L0 750 Z" fill="#b4a68e"/>
      <path d="M210 750 Q260 510 380 340" stroke="#3f4a3c" stroke-width="6" fill="none" stroke-linecap="round"/>
      <ellipse cx="325" cy="430" rx="52" ry="18" transform="rotate(-28 325 430)" fill="#5b6e56"/>
      <ellipse cx="265" cy="520" rx="46" ry="16" transform="rotate(20 265 520)" fill="#73876d"/>
    </svg>`
  },
  {
    label: "EDICIÓN AMBIENTAL · LLUVIA NOCTURNA",
    weather: "18°C · Lluvia ligera",
    poem: "“Gotas lentas en el cristal; una pausa analógica en medio del ruido digital.”",
    svg: `<svg viewBox="0 0 1200 750" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="750" fill="#1a212b"/>
      <circle cx="300" cy="210" r="95" fill="#e5d4b3" opacity="0.82"/>
      <path d="M0 500 L280 410 L560 520 L890 390 L1200 490 L1200 750 L0 750 Z" fill="#131820"/>
      <g stroke="#8da4bd" stroke-opacity="0.28" stroke-width="2">
        <line x1="180" y1="60" x2="150" y2="210"/>
        <line x1="480" y1="110" x2="450" y2="260"/>
        <line x1="760" y1="40" x2="730" y2="190"/>
        <line x1="990" y1="130" x2="960" y2="280"/>
      </g>
    </svg>`
  }
];

// State
let trackIndex = 0;
let sceneIndex = 0;
let isPlaying = true;
let elapsed = 84;
let idleTimer = null;
let wakeLock = null;

// Elements
const stage = document.getElementById("stage");
const vinylZone = document.querySelector(".vinyl-zone");
const vinylDisc = document.getElementById("vinylDisc");
const vinylLabel = document.getElementById("vinylLabel");
const tonearm = document.getElementById("tonearm");
const albumArt = document.getElementById("albumArt");
const trackTitle = document.getElementById("trackTitle");
const trackArtist = document.getElementById("trackArtist");
const labelAlbum = document.getElementById("labelAlbum");
const labelYear = document.getElementById("labelYear");
const labelTrackNum = document.getElementById("labelTrackNum");
const labelArtBg = document.getElementById("labelArtBg");
const ambientAlbumBg = document.getElementById("ambientAlbumBg");
const progressFill = document.getElementById("progressFill");
const scaleNeedle = document.getElementById("scaleNeedle");
const progressTrack = document.getElementById("progressTrack");
const timeCurrent = document.getElementById("timeCurrent");
const timeTotal = document.getElementById("timeTotal");
const statusDot = document.getElementById("statusDot");
const deckStatusLabel = document.getElementById("deckStatusLabel");
const iconPause = document.getElementById("iconPause");
const iconPlay = document.getElementById("iconPlay");

const einkArtwork = document.getElementById("einkArtwork");
const artTitle = document.getElementById("artTitle");
const artMeta = document.getElementById("artMeta");
const einkTime = document.getElementById("einkTime");
const einkWeather = document.getElementById("einkWeather");
const einkWeatherIcon = document.getElementById("einkWeatherIcon");

const modeToggleBtn = document.getElementById("modeToggleBtn");
const sceneCycleBtn = document.getElementById("sceneCycleBtn");
const settingsDialog = document.getElementById("settingsDialog");
const autoIdleToggle = document.getElementById("autoIdleToggle");
const wakeLockToggle = document.getElementById("wakeLockToggle");

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function renderTrack() {
  const t = DEMO_TRACKS[trackIndex];
  document.documentElement.style.setProperty("--accent", t.accent);
  albumArt.innerHTML = t.svg;
  labelArtBg.style.backgroundImage = "none";
  trackTitle.textContent = t.title;
  trackArtist.textContent = t.artist;
  labelAlbum.textContent = t.album;
  timeTotal.textContent = formatTime(t.duration);
  updateProgressUI();
}

function getCurrentDuration() {
  return spotifyMode ? spotifyDuration : DEMO_TRACKS[trackIndex].duration;
}

function updateTonearm() {
  if (!isPlaying) {
    tonearm.style.setProperty("--arm-angle", "2deg");
    return;
  }
  const progress = Math.min(1, elapsed / getCurrentDuration());
  // Tracks smoothly from outer groove (20deg) to inner groove (36deg)
  const angle = 20 + progress * 16;
  tonearm.style.setProperty("--arm-angle", `${angle.toFixed(2)}deg`);
}

function updateProgressUI() {
  const dur = getCurrentDuration();
  const pct = Math.min(100, (elapsed / dur) * 100);
  progressFill.style.width = `${pct}%`;
  if (scaleNeedle) scaleNeedle.style.left = `${pct}%`;
  progressTrack.setAttribute("aria-valuenow", Math.round(pct));
  timeCurrent.textContent = formatTime(elapsed);
  updateTonearm();
}

function setPlaying(next) {
  isPlaying = next;
  vinylDisc.classList.toggle("paused", !isPlaying);
  if (vinylZone) vinylZone.classList.toggle("stowed", !isPlaying);
  statusDot.classList.toggle("paused", !isPlaying);
  if (deckStatusLabel) deckStatusLabel.textContent = isPlaying ? "PLAY" : "STBY";
  iconPause.hidden = !isPlaying;
  iconPlay.hidden = isPlaying;
  updateTonearm();

  clearTimeout(idleTimer);
  if (!isPlaying && autoIdleToggle.checked) {
    idleTimer = setTimeout(() => setMode("eink"), 10000);
  }
}

function setMode(mode) {
  stage.dataset.mode = mode;
  const isEink = mode === "eink";
  sceneCycleBtn.hidden = !isEink;
}

// Top-right system icons ALWAYS auto-hide after 5s; deck controls stay visible unless toggled in Settings
const autoHideToggle = document.getElementById("autoHideToggle");
let topHideTimer = null;
let uiHideTimer = null;

function wakeUI() {
  document.body.classList.remove("top-hidden", "ui-hidden");
  clearTimeout(topHideTimer);
  clearTimeout(uiHideTimer);

  if (!settingsDialog.open) {
    topHideTimer = setTimeout(() => {
      if (!settingsDialog.open) document.body.classList.add("top-hidden");
    }, 5000);

    if (autoHideToggle?.checked) {
      uiHideTimer = setTimeout(() => {
        if (autoHideToggle.checked && !settingsDialog.open) {
          document.body.classList.add("ui-hidden");
        }
      }, 6000);
    }
  }
}

autoHideToggle?.addEventListener("change", () => {
  try { localStorage.setItem("auto_hide_ui", autoHideToggle.checked ? "1" : "0"); } catch {}
  wakeUI();
});

try {
  if (localStorage.getItem("auto_hide_ui") === "1" && autoHideToggle) {
    autoHideToggle.checked = true;
  }
} catch {}

["pointerdown", "pointermove", "keydown"].forEach((evt) => {
  window.addEventListener(evt, wakeUI, { passive: true });
});
wakeUI();

// ==================== PUBLIC DOMAIN MUSEUM ART + LIVE WEATHER ====================
let museumArtworks = [];
let museumIndex = 0;

// Curated Impressionist, Landscape & Ukiyo-e artists (horizontal masterpieces only)
function getArtQueries() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();

  if (month === 12 && day >= 15 && day <= 26) {
    return ["Monet snow", "winter landscape", "Hiroshige snow"];
  }
  if (month === 10 && day >= 24) {
    return ["autumn landscape", "Monet autumn", "Hiroshige autumn"];
  }
  if (hour >= 6 && hour < 12) {
    return ["Monet", "Pissarro", "Hokusai"];
  }
  if (hour >= 12 && hour < 18) {
    return ["Van Gogh", "Monet", "Hiroshige"];
  }
  if (hour >= 18 && hour < 21) {
    return ["Turner", "Monet sunset", "Friedrich"];
  }
  return ["nocturne", "moonlight", "Hiroshige night"];
}

async function loadMuseumArt() {
  const queries = getArtQueries();
  const q = queries[Math.floor(Math.random() * queries.length)];

  try {
    const url =
      `https://openaccess-api.clevelandart.org/api/artworks/?q=${encodeURIComponent(q)}` +
      `&has_image=1&cc0=1&limit=40`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("CMA error");
    const json = await res.json();
    // Filter strictly to horizontal (landscape) paintings & prints so they fill the tablet cleanly
    const valid = (json.data || []).filter((a) => {
      const img = a.images?.web;
      if (!img?.url) return false;
      const w = Number(img.width || 0);
      const h = Number(img.height || 0);
      return w > h * 1.05;
    });
    if (valid.length > 0) {
      museumArtworks = valid;
      museumIndex = Math.floor(Math.random() * valid.length);
      renderMuseumArtwork();
      return;
    }
  } catch {}

  const s = EINK_SCENES[sceneIndex % EINK_SCENES.length];
  einkArtwork.innerHTML = s.svg;
}

function renderMuseumArtwork() {
  if (!museumArtworks.length) return;
  const art = museumArtworks[museumIndex % museumArtworks.length];
  einkArtwork.innerHTML = `<img src="${art.images.web.url}" alt="${art.title || "Obra"}">`;
  if (artTitle) artTitle.textContent = art.title || "";
  if (artMeta) {
    const artist = art.creators?.[0]?.description?.split("(")[0]?.trim() || "";
    const date = art.creation_date || "";
    artMeta.textContent = [artist, date, "Cleveland Museum of Art"].filter(Boolean).join(" · ");
  }
}

function renderScene() {
  if (museumArtworks.length > 0) {
    museumIndex = (museumIndex + 1) % museumArtworks.length;
    renderMuseumArtwork();
  } else {
    loadMuseumArt();
  }
}

// Free live weather via Open-Meteo (icon + temperature only, zero text clutter)
function getWeatherIcon(code, isDay) {
  if (code === 0) return isDay ? "☀" : "☾";
  if (code <= 2) return isDay ? "⛅" : "☁";
  if (code === 3 || code === 45 || code === 48) return "☁";
  if (code >= 71 && code <= 77) return "❄";
  if (code >= 95) return "⚡";
  return "☂";
}

async function loadWeather() {
  const fetchByCoords = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      const data = await res.json();
      const cw = data.current_weather;
      if (cw) {
        einkWeatherIcon.textContent = getWeatherIcon(cw.weathercode, cw.is_day === 1);
        einkWeather.textContent = `${Math.round(cw.temperature)}°`;
      }
    } catch {
      einkWeather.textContent = "--°";
    }
  };

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => fetchByCoords(pos.coords.latitude, pos.coords.longitude),
      () => fetchByCoords(4.711, -74.0721),
      { timeout: 5000 }
    );
  } else {
    fetchByCoords(4.711, -74.0721);
  }
}

loadWeather();
setInterval(loadWeather, 1800000);
setInterval(loadMuseumArt, 3600000);

function updateClock() {
  const now = new Date();
  einkTime.textContent = now.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}

// Playback ticker
setInterval(() => {
  if (!isPlaying) return;
  const t = DEMO_TRACKS[trackIndex];
  elapsed += 1;
  if (elapsed >= t.duration) {
    trackIndex = (trackIndex + 1) % DEMO_TRACKS.length;
    elapsed = 0;
    renderTrack();
  } else {
    updateProgressUI();
  }
}, 1000);

setInterval(updateClock, 15000);

// ==================== SUBTLE MECHANICAL SOUND & HAPTIC FX (WEB AUDIO) ====================
const soundFxToggle = document.getElementById("soundFxToggle");
let audioCtx = null;

try {
  if (localStorage.getItem("sound_fx_enabled") === "0" && soundFxToggle) {
    soundFxToggle.checked = false;
  }
} catch {}

soundFxToggle?.addEventListener("change", () => {
  try { localStorage.setItem("sound_fx_enabled", soundFxToggle.checked ? "1" : "0"); } catch {}
  if (soundFxToggle.checked) playMechanicalClick();
});

function getAudioCtx() {
  if (!soundFxToggle?.checked) return null;
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) audioCtx = new Ctx();
  }
  if (audioCtx?.state === "suspended") audioCtx.resume().catch(() => {});
  return audioCtx;
}

function playMechanicalClick() {
  navigator.vibrate?.(12);
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;

  // Warm tactile switch thump
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(210, now);
  osc.frequency.exponentialRampToValueAtTime(65, now + 0.028);
  gain.gain.setValueAtTime(0.16, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.032);
  osc.connect(gain).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.035);
}

function playNeedleDrop() {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;

  // Soft stylus touchdown + tiny warm vinyl pop
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(115, now);
  osc.frequency.exponentialRampToValueAtTime(42, now + 0.085);
  gain.gain.setValueAtTime(0.14, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
  osc.connect(gain).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.095);
}

// Controls
async function togglePlayback() {
  playMechanicalClick();
  const willPlay = !isPlaying;
  if (willPlay) setTimeout(playNeedleDrop, 260);
  if (spotifyMode) {
    await spotifyCommand(isPlaying ? "pause" : "play", "PUT");
  }
  setPlaying(willPlay);
}

document.getElementById("playPauseBtn").addEventListener("click", togglePlayback);
vinylDisc.addEventListener("click", togglePlayback);

// 3D Flip Album Sleeve -> Unified Editorial Back Cover (Tracklist + Artist Bio)
const albumSleeveEl = document.getElementById("albumSleeve");
const lpBackAlbum = document.getElementById("lpBackAlbum");
const sideOneList = document.getElementById("sideOneList");
const artistCardBg = document.getElementById("artistCardBg");
const artistCardName = document.getElementById("artistCardName");
const artistCardStats = document.getElementById("artistCardStats");
const artistCardBio = document.getElementById("artistCardBio");

let currentArtistId = null;
let currentArtistName = "Kaito Morita Quartet";
let currentAlbumId = null;
let currentAlbumName = "Midnight Pressing";
let currentTrackName = "Velvet Rain";
let loadedArtistKey = null;
let loadedAlbumId = null;

function renderTrackList(tracks) {
  lpBackAlbum.textContent = currentAlbumName;
  const limited = tracks.slice(0, 10);
  sideOneList.innerHTML = limited
    .map((name, i) => {
      const active = name.toLowerCase() === currentTrackName.toLowerCase();
      return `<li class="lp-track-item${active ? " is-current" : ""}"><span class="lp-track-num">${String(i + 1).padStart(2, "0")}.</span><span class="lp-track-name">${name}</span></li>`;
    })
    .join("");
}

async function fetchAlbumTracks() {
  if (!spotifyMode || !currentAlbumId) {
    renderTrackList(DEMO_TRACKS.map((t) => t.title));
    return;
  }
  if (loadedAlbumId === currentAlbumId) return;
  loadedAlbumId = currentAlbumId;
  try {
    const token = await getValidSpotifyToken();
    if (!token) return;
    const res = await fetch(`https://api.spotify.com/v1/albums/${currentAlbumId}/tracks?limit=12`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) {
      const data = await res.json();
      const names = (data.items || []).map((t) => t.name);
      if (names.length) renderTrackList(names);
    }
  } catch {}
}

async function fetchArtistInfo(artistName, artistId) {
  const key = artistId || artistName;
  if (loadedArtistKey === key) return;
  loadedArtistKey = key;

  artistCardName.textContent = artistName;
  artistCardStats.textContent = "";
  artistCardBio.textContent = "Cargando información del artista...";
  artistCardBg.style.backgroundImage = "";

  // 1. Fetch artist photo, followers & genres from Spotify Web API if connected
  if (spotifyMode && artistId) {
    try {
      const token = await getValidSpotifyToken();
      if (token) {
        const res = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          const photo = data.images?.[0]?.url;
          if (photo) artistCardBg.style.backgroundImage = `url("${photo}")`;
          const followers = data.followers?.total
            ? `${data.followers.total.toLocaleString("es-ES")} seguidores`
            : "";
          const genres = (data.genres || []).slice(0, 2).join(" · ");
          artistCardStats.textContent = [followers, genres].filter(Boolean).join("  •  ");
        }
      }
    } catch {}
  }

  // 2. Fetch concise bio from Wikipedia (strictly validated as a music artist/band)
  const MUSIC_RE = /\b(band|musician|singer|songwriter|duo|trio|quartet|rapper|dj|composer|producer|music|album|albums|rock|pop|indie|jazz|electronic|metal|hip hop|punk|folk|soul|r&b|banda|músic[oa]|cantante|cantautor|dúo|rapero|compositor|productor|música|álbum|disco|grupo musical)\b/i;

  const fetchSummary = async (lang, title) => {
    const res = await fetch(
      `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (data.type === "disambiguation" || !data.extract) return null;
    const text = `${data.description || ""} ${data.extract}`;
    if (!MUSIC_RE.test(text)) return null;
    return { ...data, _lang: lang };
  };

  const translateToEs = async (text) => {
    const snippet = text.length > 460 ? `${text.slice(0, 457).trim()}...` : text;
    try {
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(snippet)}&langpair=en|es`
      );
      if (!res.ok) return text;
      const json = await res.json();
      return json.responseData?.translatedText || text;
    } catch {
      return text;
    }
  };

  const searchAndFetch = async (lang, query) => {
    const res = await fetch(
      `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=5&format=json&origin=*`
    );
    if (!res.ok) return null;
    const json = await res.json();
    const hits = json.query?.search || [];
    const needle = artistName.toLowerCase();
    for (const hit of hits) {
      // Only accept matches whose title actually includes the artist name
      if (!hit.title.toLowerCase().includes(needle)) continue;
      const summary = await fetchSummary(lang, hit.title);
      if (summary) return summary;
    }
    return null;
  };

  try {
    // Try exact title in ES & EN first before fuzzy music search
    const wiki =
      (await fetchSummary("es", artistName)) ||
      (await fetchSummary("en", artistName)) ||
      (await searchAndFetch("es", `"${artistName}" banda OR cantante OR músico`)) ||
      (await searchAndFetch("en", `"${artistName}" band OR musician`));
    if (wiki) {
      artistCardBio.textContent =
        wiki._lang === "en" ? await translateToEs(wiki.extract) : wiki.extract;
      if (!artistCardBg.style.backgroundImage && wiki.thumbnail?.source) {
        artistCardBg.style.backgroundImage = `url("${wiki.thumbnail.source}")`;
      }
    } else {
      artistCardBio.textContent =
        "Sin biografía disponible en Wikipedia para este artista. Toca la portada para volver al álbum.";
    }
  } catch {
    artistCardBio.textContent = "Toca la portada para volver al álbum.";
  }
}

let flipBackTimer = null;

albumSleeveEl.addEventListener("click", () => {
  const willFlip = !albumSleeveEl.classList.contains("flipped");
  albumSleeveEl.classList.toggle("flipped", willFlip);
  clearTimeout(flipBackTimer);
  if (willFlip) {
    fetchAlbumTracks();
    fetchArtistInfo(currentArtistName, currentArtistId);
    flipBackTimer = setTimeout(() => {
      albumSleeveEl.classList.remove("flipped");
    }, 20000);
  }
});

document.getElementById("nextBtn").addEventListener("click", async () => {
  playMechanicalClick();
  if (spotifyMode) {
    await spotifyCommand("next", "POST");
    return;
  }
  trackIndex = (trackIndex + 1) % DEMO_TRACKS.length;
  elapsed = 0;
  renderTrack();
  setPlaying(true);
});

document.getElementById("prevBtn").addEventListener("click", async () => {
  playMechanicalClick();
  if (spotifyMode) {
    await spotifyCommand("previous", "POST");
    return;
  }
  trackIndex = (trackIndex - 1 + DEMO_TRACKS.length) % DEMO_TRACKS.length;
  elapsed = 0;
  renderTrack();
  setPlaying(true);
});

progressTrack.addEventListener("click", (e) => {
  const rect = progressTrack.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  elapsed = Math.floor(ratio * DEMO_TRACKS[trackIndex].duration);
  updateProgressUI();
});

modeToggleBtn.addEventListener("click", () => {
  setMode(stage.dataset.mode === "vinyl" ? "eink" : "vinyl");
});

sceneCycleBtn.addEventListener("click", () => {
  sceneIndex = (sceneIndex + 1) % EINK_SCENES.length;
  renderScene();
});

document.getElementById("fullscreenBtn").addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.();
  }
});

// Settings dialog + light-dismiss fallback for Safari
document.getElementById("settingsBtn").addEventListener("click", () => {
  settingsDialog.showModal();
});

if (!("closedBy" in HTMLDialogElement.prototype)) {
  settingsDialog.addEventListener("click", (event) => {
    if (event.target !== settingsDialog) return;
    const rect = settingsDialog.getBoundingClientRect();
    const inside =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!inside) settingsDialog.close();
  });
}

// Four-state theme toggle (System / Light / Dark / Ambient Blur)
const schemeMeta = document.querySelector('meta[name="color-scheme"]');
const segBtns = document.querySelectorAll(".seg-btn");

function applyScheme(value, persist = true) {
  const isAmbient = value === "ambient";
  document.body.classList.toggle("theme-ambient", isAmbient);
  schemeMeta.content = isAmbient ? "dark" : value;

  if (persist) {
    try {
      if (isAmbient) {
        localStorage.setItem("theme_ambient", "1");
        localStorage.setItem("color-scheme", "dark");
      } else {
        localStorage.removeItem("theme_ambient");
        if (value === "light dark") localStorage.removeItem("color-scheme");
        else localStorage.setItem("color-scheme", value);
      }
    } catch {}
  }
  segBtns.forEach((b) => b.classList.toggle("active", b.dataset.scheme === value));
}

segBtns.forEach((btn) => {
  btn.addEventListener("click", () => applyScheme(btn.dataset.scheme, true));
});

window.addEventListener("storage", (e) => {
  if (e.key === "color-scheme") applyScheme(e.newValue ?? "light dark", false);
});

// Screen Wake Lock (persisted + auto re-acquired on visibility/charging events)
async function acquireWakeLock() {
  if (!wakeLockToggle.checked || !("wakeLock" in navigator)) return;
  if (document.visibilityState !== "visible") return;
  try {
    if (wakeLock && !wakeLock.released) return;
    wakeLock = await navigator.wakeLock.request("screen");
    wakeLock.addEventListener("release", () => {
      wakeLock = null;
      // Re-acquire shortly after OS/charging interruptions if still visible & enabled
      if (wakeLockToggle.checked && document.visibilityState === "visible") {
        setTimeout(acquireWakeLock, 1200);
      }
    });
  } catch {}
}

async function releaseWakeLock() {
  if (wakeLock) {
    try { await wakeLock.release(); } catch {}
    wakeLock = null;
  }
}

wakeLockToggle.addEventListener("change", async () => {
  try { localStorage.setItem("wake_lock_enabled", wakeLockToggle.checked ? "1" : "0"); } catch {}
  if (wakeLockToggle.checked) {
    await acquireWakeLock();
  } else {
    await releaseWakeLock();
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && wakeLockToggle.checked) {
    acquireWakeLock();
  }
});

window.addEventListener("focus", () => {
  if (wakeLockToggle.checked) acquireWakeLock();
});

// Restore saved Wake Lock preference on load
try {
  if (localStorage.getItem("wake_lock_enabled") === "1") {
    wakeLockToggle.checked = true;
    acquireWakeLock();
  }
} catch {}

// ==================== SPOTIFY OAUTH PKCE + LIVE SYNC ====================
const SPOTIFY_SCOPES = "user-read-currently-playing user-read-playback-state user-modify-playback-state";
const spotifyClientInput = document.getElementById("spotifyClientId");
const connectSpotifyBtn = document.getElementById("connectSpotifyBtn");
const disconnectSpotifyBtn = document.getElementById("disconnectSpotifyBtn");
const spotifyHint = document.getElementById("spotifyHint");

let spotifyMode = false;
let spotifyDuration = 200;
let lastTrackId = null;

function getRedirectUri() {
  return `${window.location.origin}${window.location.pathname}`;
}

function randomString(len) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const arr = new Uint8Array(len);
  crypto.getRandomValues(arr);
  return Array.from(arr, (x) => chars[x % chars.length]).join("");
}

async function sha256Base64Url(str) {
  const data = new TextEncoder().encode(str);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function startSpotifyAuth(clientId) {
  const verifier = randomString(64);
  const challenge = await sha256Base64Url(verifier);
  localStorage.setItem("spotify_client_id", clientId);
  localStorage.setItem("spotify_code_verifier", verifier);

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: getRedirectUri(),
    scope: SPOTIFY_SCOPES,
    code_challenge_method: "S256",
    code_challenge: challenge
  });
  window.location.href = `https://accounts.spotify.com/authorize?${params}`;
}

async function handleSpotifyCallback() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  if (!code) return;

  const clientId = localStorage.getItem("spotify_client_id");
  const verifier = localStorage.getItem("spotify_code_verifier");
  if (!clientId || !verifier) return;

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: "authorization_code",
      code,
      redirect_uri: getRedirectUri(),
      code_verifier: verifier
    })
  });

  if (res.ok) {
    const data = await res.json();
    saveSpotifyTokens(data);
    window.history.replaceState({}, document.title, getRedirectUri());
  }
}

function saveSpotifyTokens(data) {
  localStorage.setItem("spotify_access_token", data.access_token);
  if (data.refresh_token) localStorage.setItem("spotify_refresh_token", data.refresh_token);
  localStorage.setItem("spotify_expires_at", String(Date.now() + (data.expires_in - 60) * 1000));
  spotifyMode = true;
  updateSpotifyUI();
}

async function getValidSpotifyToken() {
  const token = localStorage.getItem("spotify_access_token");
  const expiresAt = Number(localStorage.getItem("spotify_expires_at") || 0);
  if (token && Date.now() < expiresAt) return token;

  const refreshToken = localStorage.getItem("spotify_refresh_token");
  const clientId = localStorage.getItem("spotify_client_id");
  if (!refreshToken || !clientId) return null;

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: "refresh_token",
      refresh_token: refreshToken
    })
  });
  if (!res.ok) return null;
  const data = await res.json();
  saveSpotifyTokens(data);
  return data.access_token;
}

// ==================== RARE SPECIAL VINYL PRESSING ENGINE ====================
const CURATED_PRESSINGS = [
  {
    match: (album, artist) => album.includes("from zero") && artist.includes("linkin park"),
    type: "splatter",
    base: "#c2ecff",
    c1: "#c82378",
    c2: "#5a189a"
  },
  {
    match: (album, artist) => album.includes("meteora") && artist.includes("linkin park"),
    type: "marble",
    base: "#24292e",
    c1: "#8a9aa8",
    c2: "#c25b3f"
  },
  {
    match: (album, artist) => album.includes("currents") && artist.includes("tame impala"),
    type: "splatter",
    base: "#2b1d3d",
    c1: "#d95b7a",
    c2: "#f4b183"
  }
];

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateVinylTexture(type, seed, base, c1, c2) {
  const size = 512;
  const cx = size / 2;
  const cy = size / 2;
  const rand = mulberry32(seed);
  const c = document.createElement("canvas");
  c.width = size;
  c.height = size;
  const ctx = c.getContext("2d");

  // Translucent base PVC with subtle radial depth
  const bg = ctx.createRadialGradient(cx, cy, size * 0.14, cx, cy, size * 0.5);
  bg.addColorStop(0, base);
  bg.addColorStop(0.82, base);
  bg.addColorStop(1, "rgba(0,0,0,0.18)");
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);

  if (type === "splatter") {
    // Soft melted under-bleed + organic irregular splatter streaks & beads
    const layers = [
      { count: 48, blur: 6, alpha: 0.42, minW: 4, maxW: 14 },
      { count: 75, blur: 2, alpha: 0.78, minW: 2, maxW: 9 }
    ];
    for (const layer of layers) {
      ctx.save();
      ctx.filter = `blur(${layer.blur}px)`;
      for (let i = 0; i < layer.count; i++) {
        const angle = rand() * Math.PI * 2;
        const startR = size * (0.14 + rand() * 0.24);
        const len = size * (0.06 + rand() * 0.24);
        const endR = Math.min(size * 0.51, startR + len);
        const width = layer.minW + rand() * (layer.maxW - layer.minW);
        const color = rand() > 0.42 ? c1 : c2;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        ctx.globalAlpha = layer.alpha * (0.55 + rand() * 0.45);
        ctx.fillStyle = color;

        // Tapered organic streak
        ctx.beginPath();
        ctx.moveTo(startR, -width * 0.25);
        ctx.quadraticCurveTo(
          (startR + endR) * 0.5,
          -width * (0.6 + rand() * 0.6),
          endR,
          0
        );
        ctx.quadraticCurveTo(
          (startR + endR) * 0.5,
          width * (0.6 + rand() * 0.6),
          startR,
          width * 0.25
        );
        ctx.closePath();
        ctx.fill();

        // Occasional melted PVC droplet bead along the streak
        if (rand() > 0.45) {
          const br = startR + rand() * (endR - startR);
          ctx.beginPath();
          ctx.ellipse(br, (rand() - 0.5) * width, width * (0.7 + rand() * 0.9), width * (0.4 + rand() * 0.5), 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      ctx.restore();
    }
  } else if (type === "marble") {
    ctx.save();
    ctx.filter = "blur(18px)";
    for (let i = 0; i < 28; i++) {
      const x = rand() * size;
      const y = rand() * size;
      const rx = size * (0.08 + rand() * 0.22);
      const ry = size * (0.04 + rand() * 0.14);
      ctx.globalAlpha = 0.28 + rand() * 0.35;
      ctx.fillStyle = rand() > 0.5 ? c1 : c2;
      ctx.beginPath();
      ctx.ellipse(x, y, rx, ry, rand() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  return c.toDataURL("image/png");
}

function applyVinylPressing({ id = "", album = "", artist = "", palette = null, forceType = null }) {
  const a = album.toLowerCase();
  const ar = artist.toLowerCase();
  const h = hashString(id || `${a}:${ar}`);

  // 1. Check curated real-world special editions first
  const curated = CURATED_PRESSINGS.find((p) => p.match(a, ar));
  if (curated) {
    vinylDisc.dataset.pressing = curated.type;
    vinylDisc.style.backgroundImage = `url("${generateVinylTexture(curated.type, h, curated.base, curated.c1, curated.c2)}")`;
    vinylDisc.style.backgroundSize = "cover";
    return;
  }

  // 2. Deterministic rarity (~12% special, ~88% classic black)
  const roll = h % 100;
  const type = forceType || (roll >= 88 ? ["splatter", "marble", "colored"][h % 3] : "classic");

  vinylDisc.dataset.pressing = type;
  if (type === "splatter" || type === "marble") {
    const p = palette || { base: "#d8f1ff", c1: "#c82378", c2: "#5a189a" };
    vinylDisc.style.backgroundImage = `url("${generateVinylTexture(type, h, p.base, p.c1, p.c2)}")`;
    vinylDisc.style.backgroundSize = "cover";
  } else {
    vinylDisc.style.backgroundImage = "";
    if (type === "colored" && palette) {
      vinylDisc.style.setProperty("--vinyl-c1", palette.c1);
    }
  }
}

function extractPaletteAndApply(imgUrl, meta) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    try {
      const c = document.createElement("canvas");
      c.width = 24;
      c.height = 24;
      const ctx = c.getContext("2d");
      ctx.drawImage(img, 0, 0, 24, 24);
      const data = ctx.getImageData(0, 0, 24, 24).data;
      let r = 0, g = 0, b = 0, count = 0;
      let bright = [220, 228, 236], maxLum = -1;
      let vivid = [190, 90, 120], maxSat = -1;

      for (let i = 0; i < data.length; i += 4) {
        const cr = data[i], cg = data[i + 1], cb = data[i + 2];
        const lum = 0.299 * cr + 0.587 * cg + 0.114 * cb;
        const sat = Math.max(cr, cg, cb) - Math.min(cr, cg, cb);
        if (lum > 30 && lum < 230) {
          r += cr; g += cg; b += cb; count++;
        }
        if (lum > maxLum) { maxLum = lum; bright = [cr, cg, cb]; }
        if (sat > maxSat && lum > 40) { maxSat = sat; vivid = [cr, cg, cb]; }
      }
      const avg = count > 0 ? [Math.round(r / count), Math.round(g / count), Math.round(b / count)] : vivid;
      const accentRgb = `rgb(${avg[0]}, ${avg[1]}, ${avg[2]})`;
      document.documentElement.style.setProperty("--accent", accentRgb);

      applyVinylPressing({
        ...meta,
        palette: {
          base: `rgb(${Math.min(245, bright[0] + 25)}, ${Math.min(245, bright[1] + 25)}, ${Math.min(245, bright[2] + 25)})`,
          c1: `rgb(${vivid[0]}, ${vivid[1]}, ${vivid[2]})`,
          c2: accentRgb
        }
      });
    } catch {
      applyVinylPressing(meta);
    }
  };
  img.onerror = () => applyVinylPressing(meta);
  img.src = imgUrl;
}

async function pollSpotify() {
  if (!spotifyMode) return;
  const token = await getValidSpotifyToken();
  if (!token) return;

  try {
    const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.status === 204) {
      if (isPlaying) setPlaying(false);
      return;
    }
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !data.item) return;

    const item = data.item;
    spotifyDuration = Math.max(1, Math.floor(item.duration_ms / 1000));
    elapsed = Math.floor((data.progress_ms || 0) / 1000);

    if (item.id !== lastTrackId) {
      lastTrackId = item.id;
      const imgUrl = item.album?.images?.[0]?.url || "";
      const artistStr = item.artists.map((a) => a.name).join(", ");
      const albumName = item.album?.name || "";
      if (imgUrl) {
        albumArt.innerHTML = `<img src="${imgUrl}" alt="${albumName}">`;
        labelArtBg.style.backgroundImage = `url("${imgUrl}")`;
        if (ambientAlbumBg) ambientAlbumBg.style.backgroundImage = `url("${imgUrl}")`;
        extractPaletteAndApply(imgUrl, { id: item.album?.id || item.id, album: albumName, artist: artistStr });
      } else {
        applyVinylPressing({ id: item.album?.id || item.id, album: albumName, artist: artistStr });
      }
      trackTitle.textContent = item.name;
      trackArtist.textContent = artistStr;
      currentTrackName = item.name;
      currentAlbumName = albumName;
      currentAlbumId = item.album?.id || null;
      currentArtistName = item.artists?.[0]?.name || artistStr;
      currentArtistId = item.artists?.[0]?.id || null;
      albumSleeveEl.classList.remove("flipped");
      labelAlbum.textContent = albumName;
      const year = item.album?.release_date ? item.album.release_date.slice(0, 4) : "";
      if (labelYear) labelYear.textContent = year ? `℗ ${year}` : "SIDE A";
      if (labelTrackNum) {
        const num = item.track_number ? `#${String(item.track_number).padStart(2, "0")}` : "";
        labelTrackNum.textContent = num ? `33⅓ · ${num}` : "33⅓ RPM";
      }
      timeTotal.textContent = formatTime(spotifyDuration);
    }

    if (data.is_playing && stage.dataset.mode === "eink") {
      setMode("vinyl");
    }
    setPlaying(Boolean(data.is_playing));
    updateProgressUI();
  } catch {}
}

async function spotifyCommand(endpoint, method = "POST") {
  if (!spotifyMode) return false;
  const token = await getValidSpotifyToken();
  if (!token) return false;
  await fetch(`https://api.spotify.com/v1/me/player/${endpoint}`, {
    method,
    headers: { Authorization: `Bearer ${token}` }
  }).catch(() => {});
  setTimeout(pollSpotify, 400);
  return true;
}

function updateSpotifyUI() {
  const savedId = localStorage.getItem("spotify_client_id") || "";
  if (savedId) spotifyClientInput.value = savedId;
  disconnectSpotifyBtn.hidden = !spotifyMode;
  connectSpotifyBtn.textContent = spotifyMode ? "Reconectar" : "Conectar";
  if (spotifyMode) {
    spotifyHint.textContent = "Conectado a Spotify en vivo. Reproduce cualquier canción en tu teléfono o PC.";
  } else {
    const preview = document.getElementById("redirectUriPreview");
    if (preview) preview.textContent = getRedirectUri();
  }
}

connectSpotifyBtn.addEventListener("click", () => {
  const clientId = spotifyClientInput.value.trim();
  if (!clientId) {
    alert("Ingresa tu Spotify Client ID primero (desde developer.spotify.com).");
    return;
  }
  startSpotifyAuth(clientId);
});

disconnectSpotifyBtn.addEventListener("click", () => {
  localStorage.removeItem("spotify_access_token");
  localStorage.removeItem("spotify_refresh_token");
  localStorage.removeItem("spotify_expires_at");
  spotifyMode = false;
  lastTrackId = null;
  updateSpotifyUI();
  renderTrack();
  setPlaying(true);
});

// Init
let initialTheme = schemeMeta.content || "light dark";
try {
  if (localStorage.getItem("theme_ambient") === "1") initialTheme = "ambient";
} catch {}
applyScheme(initialTheme, false);
renderTrack();
renderScene();
updateClock();

handleSpotifyCallback().then(() => {
  if (localStorage.getItem("spotify_access_token")) {
    spotifyMode = true;
    updateSpotifyUI();
    pollSpotify();
  } else {
    updateSpotifyUI();
  }
});

setInterval(pollSpotify, 3000);
