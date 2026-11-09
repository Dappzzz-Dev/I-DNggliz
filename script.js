const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const musicToggle = document.querySelector("#music-toggle");
const musicToggleLabel = document.querySelector("#music-toggle-label");
const musicPanel = document.querySelector("#music-panel");
const spotifyFrame = document.querySelector("#spotify-frame");

const spotifyTrack =
  "https://open.spotify.com/embed/track/4PwWESSlTwzvw9B7bmtTLS?utm_source=generator";

const photoJournalEntries = [
  ["journal-09.jpg", 825, 1100, "Sunset behind the shoreline", "Clouds by the shore"],
  ["journal-10.jpg", 733, 1100, "A mosque dome against the night sky", "A dome after dark"],
  ["journal-11.jpg", 733, 1100, "Arches inside a mosque", "Light beneath the arches"],
  ["journal-12.jpg", 733, 1100, "Sunlight through tree branches", "Sun through the trees"],
  ["journal-13.jpg", 733, 1100, "A lamp glowing among leaves", "A small light in the leaves"],
  ["journal-14.jpg", 733, 1100, "Grave markers beneath the trees", "A quiet place among the trees"],
  ["journal-15.jpg", 733, 1100, "The last light over the water", "The last light"],
  ["journal-16.jpg", 1100, 733, "Evening colors reflected on the sea", "Evening by the sea"],
  ["journal-17.jpg", 1100, 733, "Rooftops beside a mosque", "Rooftops in the afternoon"],
  ["journal-18.jpg", 733, 1100, "Houses beneath wispy clouds", "Houses under a wide sky"],
  ["journal-19.jpg", 732, 1100, "A lit mosque minaret beneath a crescent moon", "A minaret at night"],
  ["journal-20.jpg", 1100, 733, "A pool among palms and garden plants", "A garden by the pool"],
  ["journal-21.jpg", 1100, 733, "An evening road through the neighborhood", "The road at dusk"],
  ["journal-22.jpg", 1100, 733, "Road and fields under a grey sky", "A cloudy day on the road"],
  ["journal-23.jpg", 733, 1100, "Street lights at dusk", "The lights come on"],
  ["journal-24.jpg", 733, 1100, "A field beneath a bright sky", "A field in daylight"],
  ["journal-25.jpg", 733, 1100, "A painting on a gallery wall", "A painting at the gallery"],
  ["journal-26.jpg", 733, 1100, "A colorful sculpture in a gallery", "Color in the gallery"],
  ["journal-27.jpg", 733, 1100, "A white sculpture in an exhibition room", "An afternoon at the gallery"],
  ["journal-28.jpg", 733, 1100, "Green fields beside a narrow road", "A road through the fields"],
  ["journal-29.jpg", 1100, 733, "The last color in the sky", "The sky after sunset"],
  ["journal-30.jpg", 733, 1100, "A small garden path between trees", "A path through the garden"],
  ["journal-31.jpg", 1100, 733, "Distant hills at sunset", "Evening over the hills"],
  ["journal-32.jpg", 733, 1100, "A statue in a town square", "A statue in the square"],
  ["journal-33.jpg", 618, 1100, "Morning clouds over a field", "A morning in the fields"],
  ["journal-34.jpg", 619, 1100, "Sunlight across a planted field", "Light over the crops"],
  ["journal-35.jpg", 828, 1100, "The coast from a hillside path", "A path above the coast"],
  ["journal-36.jpg", 828, 1100, "A crescent moon in the evening sky", "A crescent after sunset"],
  ["journal-37.jpg", 828, 1100, "A night sky above the hills", "Under the night sky"],
  ["journal-38.jpg", 826, 1100, "A presentation at a small event", "An evening at the event"],
  ["journal-39.jpg", 740, 1100, "A bouquet beside printed photographs", "A gift to remember"],
  ["journal-40.jpg", 825, 1100, "A hillside garden", "A garden on the hillside"],
  ["journal-41.jpg", 825, 1100, "Morning light through a window", "Light through the window"],
  ["journal-42.jpg", 1100, 618, "Tree branches against a blue sky", "Looking up"],
  ["journal-43.jpg", 825, 1100, "Evening above the neighborhood", "Evening over the rooftops"],
  ["journal-44.jpg", 1100, 828, "Clouds over the rooftops", "A cloudy afternoon"],
  ["journal-45.jpg", 1100, 828, "Low clouds above a mountain village", "Clouds over the village"],
  ["journal-46.jpg", 828, 1100, "A lamp glowing among trees at night", "A light in the garden"],
  ["journal-47.jpg", 828, 1100, "A camera set up outdoors", "A camera in the garden"],
  ["journal-48.jpg", 1100, 828, "The moon behind a tree line", "Moonlight through the trees"],
  ["journal-49.jpg", 828, 1100, "A small fire after dark", "A fire after sunset"],
  ["journal-50.jpg", 1100, 828, "City lights seen from above", "The city after dark"],
  ["journal-51.jpg", 619, 1100, "Water beneath overhanging branches", "By the water"],
  ["journal-52.jpg", 1100, 828, "A violet sky over the fields", "The sky turns violet"],
  ["journal-53.jpg", 828, 1100, "A mountain view above the village", "A view from the hillside"],
  ["journal-54.jpg", 828, 1100, "Clouds over a small farm", "Clouds over the fields"],
  ["journal-55.jpg", 828, 1100, "Evening color over the neighborhood", "Color at the end of the day"],
  ["journal-56.jpg", 828, 1100, "A lake between the mountains", "A quiet lake"],
  ["journal-57.jpg", 1024, 768, "Sunlight passing through dense leaves", "Light through the leaves"],
  ["journal-58.jpg", 828, 1100, "A statue framed by stone", "A figure in stone"],
  ["journal-59.jpg", 828, 1100, "Green hills beneath the clouds", "A view across the hills"],
  ["journal-60.jpg", 618, 1100, "An offering beneath the trees", "A small offering"],
  ["journal-61.jpg", 618, 1100, "Looking up through the trees", "The view overhead"],
  ["journal-62.jpg", 1100, 733, "A tent in a wooded campsite", "A night at camp"],
  ["journal-63.jpg", 825, 1100, "A storefront beside the street", "A familiar street"],
  ["journal-64.jpg", 618, 1100, "An open park beneath the clouds", "An afternoon outdoors"],
  ["journal-65.jpg", 617, 1100, "Tall trees against the sky", "Among the trees"],
  ["journal-66.jpg", 1100, 828, "A tabby cat yawning on a stone path", "A yawn caught in the moment"],
];

const photoGrid = document.querySelector("#photo-journal");

photoJournalEntries.forEach(([file, width, height, alt]) => {
  const figure = document.createElement("figure");
  figure.className = "photo-card media-frame";

  const image = document.createElement("img");
  image.src = `assets/photos/journal/${file}`;
  image.alt = alt;
  image.width = width;
  image.height = height;
  image.loading = "lazy";
  image.decoding = "async";

  const fallback = document.createElement("span");
  fallback.className = "media-fallback";
  fallback.setAttribute("aria-hidden", "true");
  fallback.textContent = "Photo unavailable";

  figure.append(image, fallback);
  photoGrid.append(figure);
});

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  siteNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  siteNav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeMenu();
  }
});

const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let scrollAnimationFrame = 0;
let scrollAnimationStartedAt = 0;

function cancelScrollAnimation() {
  if (!scrollAnimationFrame) {
    return;
  }

  window.cancelAnimationFrame(scrollAnimationFrame);
  scrollAnimationFrame = 0;
  scrollAnimationStartedAt = 0;
  document.documentElement.style.scrollBehavior = "";
}

function getDocumentTop(element) {
  let top = 0;
  let node = element;

  while (node) {
    top += node.offsetTop;
    node = node.offsetParent;
  }

  return top;
}

function focusScrollTarget(target) {
  if (!target.hasAttribute("tabindex")) {
    target.setAttribute("tabindex", "-1");
    target.addEventListener(
      "blur",
      () => target.removeAttribute("tabindex"),
      { once: true },
    );
  }

  target.focus({ preventScroll: true });
}

function smoothScrollTo(target, hash) {
  cancelScrollAnimation();

  const header = document.querySelector(".site-header");
  const headerOffset = (header ? header.getBoundingClientRect().height : 0) + 14;
  const maxScroll = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  );
  const targetTop =
    hash === "#home" ? 0 : getDocumentTop(target) - headerOffset;
  const destination = Math.max(0, Math.min(targetTop, maxScroll));
  const start = window.scrollY;
  const distance = destination - start;
  const root = document.documentElement;

  if (Math.abs(distance) < 2) {
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, destination);
    root.style.scrollBehavior = "";
    focusScrollTarget(target);
    return;
  }

  // Reduced motion still gets a short, gentle glide instead of an instant jump.
  const duration = reduceMotionQuery.matches
    ? Math.min(900, Math.max(380, Math.abs(distance) * 0.3))
    : Math.min(1200, Math.max(560, Math.abs(distance) * 0.5));
  let startTime;

  root.style.scrollBehavior = "auto";
  scrollAnimationStartedAt = performance.now();

  function finishScroll() {
    scrollAnimationFrame = 0;
    scrollAnimationStartedAt = 0;
    root.style.scrollBehavior = "";
  }

  function step(timestamp) {
    if (startTime === undefined) {
      startTime = timestamp;
    }

    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + distance * eased);

    if (progress < 1) {
      scrollAnimationFrame = window.requestAnimationFrame(step);
      return;
    }

    window.scrollTo(0, destination);
    finishScroll();
    focusScrollTarget(target);
  }

  scrollAnimationFrame = window.requestAnimationFrame(step);
}

document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.button !== 0) {
    return;
  }

  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  const link = event.target.closest
    ? event.target.closest('a[href^="#"]')
    : null;

  if (!link || link.classList.contains("skip-link")) {
    return;
  }

  const hash = link.getAttribute("href");

  if (!hash || hash.length < 2) {
    return;
  }

  let target;

  try {
    target = document.querySelector(hash);
  } catch (error) {
    return;
  }

  if (!target) {
    return;
  }

  event.preventDefault();

  if (document.body.classList.contains("menu-open")) {
    closeMenu();
  }

  try {
    window.history.pushState(null, "", hash);
  } catch (error) {
    // Some file:// and sandboxed contexts block pushState; scrolling still works.
  }

  window.requestAnimationFrame(() => smoothScrollTo(target, hash));
});

/*
 * Only a deliberate scroll should interrupt a glide. Trackpads keep firing
 * "wheel" events for their inertia after the fingers lift, and Windows even
 * sends deltaY: 0 noise. Cancelling on those made a nav click look like it
 * did nothing, so the page stayed on the previous section (for example,
 * clicking "Home" from the bottom appeared to go to "Contact"). Ignore the
 * first moment of the animation and any tiny wheel tick.
 */
function handleUserScroll(event) {
  if (!scrollAnimationFrame) {
    return;
  }

  if (performance.now() - scrollAnimationStartedAt < 600) {
    return;
  }

  if (event.type === "wheel" && Math.abs(event.deltaY) < 20) {
    return;
  }

  cancelScrollAnimation();
}

["wheel", "touchmove"].forEach((eventName) => {
  window.addEventListener(eventName, handleUserScroll, { passive: true });
});

window.addEventListener("keydown", (event) => {
  if (
    ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(
      event.key,
    )
  ) {
    cancelScrollAnimation();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeMusicPlayer();
  }
});

function closeMusicPlayer() {
  musicToggle.setAttribute("aria-expanded", "false");
  musicToggle.setAttribute("aria-label", "Open Spotify player");
  musicToggleLabel.textContent = "Listen";
  musicPanel.hidden = true;
  spotifyFrame.removeAttribute("src");
}

musicToggle.addEventListener("click", () => {
  const isOpen = musicToggle.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMusicPlayer();
    return;
  }

  musicToggle.setAttribute("aria-expanded", "true");
  musicToggle.setAttribute("aria-label", "Close Spotify player");
  musicToggleLabel.textContent = "Close";
  musicPanel.hidden = false;
  spotifyFrame.src = spotifyTrack;
});

const snakeGame = document.querySelector("#snake-game");
const snakeBoard = document.querySelector("#snake-board");
const snakeContext = snakeBoard.getContext("2d");
const snakeStart = document.querySelector("#snake-start");
const snakeScore = document.querySelector("#snake-score");
const snakeStatus = document.querySelector("#snake-game-status");
const snakeDirectionButtons = document.querySelectorAll("[data-direction]");
const snakeColumns = snakeBoard.width / 16;
const snakeRows = snakeBoard.height / 16;
let snake = [];
let snakeFood;
let snakeDirection;
let nextSnakeDirection;
let snakePoints = 0;
let snakeTimer;
let snakeState = "idle";

function drawSnakeBoard() {
  const cellSize = 16;
  snakeContext.fillStyle = "#f7f7f5";
  snakeContext.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
  snakeContext.strokeStyle = "#e5e5e1";

  for (let x = cellSize; x < snakeBoard.width; x += cellSize) {
    snakeContext.beginPath();
    snakeContext.moveTo(x, 0);
    snakeContext.lineTo(x, snakeBoard.height);
    snakeContext.stroke();
  }

  for (let y = cellSize; y < snakeBoard.height; y += cellSize) {
    snakeContext.beginPath();
    snakeContext.moveTo(0, y);
    snakeContext.lineTo(snakeBoard.width, y);
    snakeContext.stroke();
  }

  snakeContext.fillStyle = "#171717";
  snake.forEach(({ x, y }) => {
    snakeContext.fillRect(x * cellSize + 1, y * cellSize + 1, cellSize - 2, cellSize - 2);
  });

  if (snakeFood) {
    snakeContext.beginPath();
    snakeContext.arc(
      snakeFood.x * cellSize + cellSize / 2,
      snakeFood.y * cellSize + cellSize / 2,
      5,
      0,
      Math.PI * 2,
    );
    snakeContext.fill();
  }
}

function placeSnakeFood() {
  const emptyCells = [];

  for (let y = 0; y < snakeRows; y += 1) {
    for (let x = 0; x < snakeColumns; x += 1) {
      if (!snake.some((segment) => segment.x === x && segment.y === y)) {
        emptyCells.push({ x, y });
      }
    }
  }

  if (emptyCells.length === 0) {
    finishSnakeGame(true);
    return;
  }

  snakeFood = emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

function startSnakeGame() {
  window.clearInterval(snakeTimer);
  snake = [
    { x: 10, y: 7 },
    { x: 9, y: 7 },
    { x: 8, y: 7 },
  ];
  snakeDirection = { x: 1, y: 0 };
  nextSnakeDirection = snakeDirection;
  snakePoints = 0;
  snakeScore.textContent = `Score: ${snakePoints}`;
  snakeState = "playing";
  snakeGame.dataset.state = snakeState;
  snakeStart.textContent = "Restart game";
  snakeStatus.textContent = "Use arrow keys, WASD, or the buttons to move.";
  placeSnakeFood();
  drawSnakeBoard();
  snakeTimer = window.setInterval(moveSnake, 140);
}

function finishSnakeGame(won = false) {
  window.clearInterval(snakeTimer);
  snakeTimer = undefined;
  snakeState = won ? "won" : "over";
  snakeGame.dataset.state = snakeState;
  snakeStart.textContent = "Play again";
  snakeStatus.textContent = won
    ? `You filled the board! Final score: ${snakePoints}.`
    : `Game over. Final score: ${snakePoints}.`;
}

function moveSnake() {
  snakeDirection = nextSnakeDirection;
  const head = {
    x: snake[0].x + snakeDirection.x,
    y: snake[0].y + snakeDirection.y,
  };
  const foundFood = head.x === snakeFood.x && head.y === snakeFood.y;
  const bodyToCheck = foundFood ? snake : snake.slice(0, -1);
  const hitWall =
    head.x < 0 ||
    head.y < 0 ||
    head.x >= snakeColumns ||
    head.y >= snakeRows;

  if (hitWall || bodyToCheck.some((segment) => segment.x === head.x && segment.y === head.y)) {
    finishSnakeGame();
    return;
  }

  snake.unshift(head);

  if (foundFood) {
    snakePoints += 1;
    snakeScore.textContent = `Score: ${snakePoints}`;
    placeSnakeFood();
    if (snakeState !== "playing") {
      drawSnakeBoard();
      return;
    }
  } else {
    snake.pop();
  }

  drawSnakeBoard();
}

function setSnakeDirection(directionName) {
  if (snakeState !== "playing") {
    return;
  }

  const directions = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
  };
  const direction = directions[directionName];

  if (direction.x + snakeDirection.x !== 0 || direction.y + snakeDirection.y !== 0) {
    nextSnakeDirection = direction;
  }
}

snakeStart.addEventListener("click", () => {
  startSnakeGame();
  snakeBoard.focus();
});

snakeBoard.addEventListener("keydown", (event) => {
  const keyDirections = {
    ArrowUp: "up",
    w: "up",
    W: "up",
    ArrowDown: "down",
    s: "down",
    S: "down",
    ArrowLeft: "left",
    a: "left",
    A: "left",
    ArrowRight: "right",
    d: "right",
    D: "right",
  };
  const direction = keyDirections[event.key];

  if (direction) {
    event.preventDefault();
    setSnakeDirection(direction);
  }
});

snakeDirectionButtons.forEach((button) => {
  button.addEventListener("click", () => setSnakeDirection(button.dataset.direction));
});

drawSnakeBoard();

const pictureGrid = document.querySelector(".about-photo-grid");
const galleryMemory = document.querySelector(".gallery-memory");
const mobileLayout = window.matchMedia("(max-width: 760px)");

function positionGalleryMemory() {
  galleryMemory.style.position = "";
  galleryMemory.style.left = "";
  galleryMemory.style.top = "";
  galleryMemory.style.width = "";
  galleryMemory.style.height = "";
  galleryMemory.style.gridColumn = "";

  if (!mobileLayout.matches) {
    return;
  }

  const gridRect = pictureGrid.getBoundingClientRect();
  const photos = [...pictureGrid.querySelectorAll(".about-photo img")].map((image) => ({
    image,
    rect: image.getBoundingClientRect(),
  }));
  const rowGap = 14;
  let largestGap;

  photos.forEach(({ image, rect }) => {
    if (!image.complete || image.naturalWidth === 0) {
      return;
    }

    const nextRowTop = photos
      .map((photo) => photo.rect.top)
      .filter((top) => top > rect.top + 2)
      .sort((a, b) => a - b)[0];

    if (nextRowTop === undefined) {
      return;
    }

    const imageRect = image.getBoundingClientRect();
    const availableHeight = nextRowTop - imageRect.bottom - rowGap;

    if (availableHeight > (largestGap ? largestGap.availableHeight : 48)) {
      largestGap = { image, rect, availableHeight };
    }
  });

  if (!largestGap) {
    galleryMemory.style.position = "relative";
    galleryMemory.style.gridColumn = "1 / -1";
    return;
  }

  const { image, rect, availableHeight } = largestGap;
  const imageRect = image.getBoundingClientRect();
  galleryMemory.style.position = "absolute";
  galleryMemory.style.left = `${rect.left - gridRect.left}px`;
  galleryMemory.style.top = `${imageRect.bottom - gridRect.top + 6}px`;
  galleryMemory.style.width = `${rect.width}px`;
  galleryMemory.style.height = `${availableHeight - 8}px`;
}

window.addEventListener("resize", positionGalleryMemory);
pictureGrid.querySelectorAll(".about-photo img").forEach((image) => {
  image.addEventListener("load", positionGalleryMemory);
  image.addEventListener("error", positionGalleryMemory);
});
positionGalleryMemory();

document.querySelectorAll(".media-frame img").forEach((image) => {
  image.addEventListener("error", () => {
    image.closest(".media-frame").classList.add("is-fallback");
  });
});

if ("IntersectionObserver" in window) {
  /*
   * Keep observing instead of unobserving. A section that leaves the viewport
   * re-arms, so the page keeps animating on every pass instead of playing
   * only once per page load. Without this, the motion is invisible after the
   * first scroll and the page feels static.
   */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0 },
  );

  document.querySelectorAll("main > section:not(.hero), .about-gallery").forEach((section) => {
    section.classList.add("reveal");
    revealObserver.observe(section);
  });

  document.body.classList.add("motion-ready");
}

/*
 * Mark the nav link for the section sitting under the header. Besides being a
 * useful cue, it makes it obvious that a jump really did land on the section
 * that was requested.
 */
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
let navUpdateFrame = 0;

function updateActiveNav() {
  navUpdateFrame = 0;

  const header = document.querySelector(".site-header");
  const offset = (header ? header.getBoundingClientRect().height : 0) + 24;
  const scrollTop = window.scrollY;
  let activeId = "";

  navSections.forEach((section) => {
    /*
     * Measure from layout (offsetTop) instead of getBoundingClientRect, so the
     * reveal transform (translateY) does not make a freshly landed section
     * look like it is still below the header.
     */
    const top = getDocumentTop(section) - scrollTop;
    const bottom = top + section.offsetHeight;

    if (top <= offset && bottom > offset) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;

    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function requestNavUpdate() {
  if (navUpdateFrame) {
    return;
  }

  navUpdateFrame = window.requestAnimationFrame(updateActiveNav);
}

window.addEventListener("scroll", requestNavUpdate, { passive: true });
window.addEventListener("resize", requestNavUpdate);
updateActiveNav();

document.querySelector("#current-year").textContent = new Date().getFullYear();
