//Start Main Slider Section

let currentSlide = 0;

function changeSlider(direction) {
  const slidesContainer = document.getElementById("slidesContainer");
  const slides = slidesContainer.getElementsByTagName("img");

  currentSlide = (currentSlide + direction) % slides.length;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    const newIndex = (currentSlide + i) % slides.length;
    slides[i].style.order = newIndex + 1;
  }
}

//End Main Slider Section

// Start Booking Section

let clickableElements = document.querySelectorAll(".week-card");
let textElement = document.querySelector(".week-card-description");
let selectedElement = null;

clickableElements.forEach(function (element) {
  element.addEventListener("click", function () {
    if (!element.textContent.includes("Fully booked")) {
      if (selectedElement && selectedElement !== element) {
        selectedElement.classList.remove("clicked");
        selectedElement.style.backgroundColor = "white";
        textElement.textContent = "Choose a week to get a price";
        textElement.style.backgroundColor = "#D8D8D8";
        textElement.style.color = "#7D7D7D";
        textElement.style.borderRadius = "10px";
      }

      element.classList.toggle("clicked");

      if (element.classList.contains("clicked")) {
        element.style.backgroundColor = "rgba(72, 189, 248, 0.1)";
        textElement.textContent = "Book this venue";
        textElement.style.backgroundColor = "#1898D8";
        textElement.style.color = "white";
        textElement.style.borderRadius = "10px";
        selectedElement = element;
      } else {
        element.style.backgroundColor = "white";
        textElement.textContent = "Choose a week to get a price";
        textElement.style.backgroundColor = "#D8D8D8";
        textElement.style.color = "#7D7D7D";
        textElement.style.borderRadius = "10px";
        selectedElement = null;
      }
    }
  });
});

// End Booking Section

//Start Date & Year Section

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentMonthIndex = new Date().getMonth();
let currentYear = new Date().getFullYear();

function changeMonth(offset) {
  document.getElementById("prevMonthText").classList.remove("hidden");
  document.getElementById("nextMonthText").classList.remove("hidden");
  currentMonthIndex = (currentMonthIndex + offset + 12) % 12;
  let prevMonthIndex = (currentMonthIndex - 1 + 12) % 12;
  document.getElementById("prevMonthText").textContent = months[prevMonthIndex];
  let nextMonthIndex = (currentMonthIndex + 1) % 12;
  document.getElementById("nextMonthText").textContent = months[nextMonthIndex];

  updateDate();
}

function changeYear(offset) {
  document.getElementById("prevYearText").classList.remove("hidden");
  document.getElementById("nextYearText").classList.remove("hidden");
  currentYear += offset;
  let prevYear = currentYear - 1;
  let nextYear = currentYear + 1;
  document.getElementById("prevYearText").textContent = prevYear;
  document.getElementById("nextYearText").textContent = nextYear;

  updateDate();
}

function updateDate() {
  document.getElementById("currentMonth").textContent =
    months[currentMonthIndex];
  document.getElementById("currentYear").textContent = currentYear;
}

window.onload = function () {
  changeMonth(0);
  changeYear(0);
};

function updateDate() {
  const currentMonthElement = document.getElementById("currentMonth");
  const currentYearElement = document.getElementById("currentYear");

  currentMonthElement.textContent = months[currentMonthIndex];
  currentYearElement.textContent = currentYear;
}

updateDate();

//End Date & Year Section

//Start Anglers Also Viewed Section

function Slide(direction) {
  const slidesContainer = document.querySelector(".slide-container");
  const slides = slidesContainer.querySelectorAll(".slider");
  const gap = 10;

  const movementWidth = slides[0].offsetWidth + gap;

  if (direction === 1 && currentSlide < slides.length - 1) {
    currentSlide++;
  } else if (direction === -1 && currentSlide > 0) {
    currentSlide--;
  }

  const newTranslateX = -movementWidth * currentSlide;
  slidesContainer.style.transform = `translateX(${newTranslateX}px)`;

  updateArrowVisibility(slides.length, currentSlide);
}

function updateArrowVisibility(totalSlides, currentSlide) {
  const leftArrowButton = document.querySelector(".bg-rgradient");
  const rightArrowButton = document.querySelector(".bg-lgradient");

  leftArrowButton.style.display = currentSlide > 0 ? "block" : "none";
  rightArrowButton.style.display =
    currentSlide < totalSlides - 1 ? "block" : "none";
}

//End Anglers Also Viewed Section

//Start Slider Navigation Section

const SLIDES_CONTAINER_SELECTOR = ".div-flex";
const BUTTON_LEFT_SELECTOR = ".button-L";
const BUTTON_RIGHT_SELECTOR = ".button-R";
const SLIDE_GAP = 20;

let currentSlideIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.querySelector(SLIDES_CONTAINER_SELECTOR);
  const buttonL = document.querySelector(BUTTON_LEFT_SELECTOR);
  const buttonR = document.querySelector(BUTTON_RIGHT_SELECTOR);

  if (!slidesContainer || !buttonL || !buttonR) {
    console.error("One or more slider elements are not found.");
    return;
  }

  buttonL.addEventListener("click", () => changeSlide(-1));
  buttonR.addEventListener("click", () => changeSlide(1));
  window.addEventListener("resize", () => updateSliderVisibility());

  updateSliderVisibility();
});

function changeSlide(direction) {
  const slidesContainer = document.querySelector(SLIDES_CONTAINER_SELECTOR);
  const slides = slidesContainer ? slidesContainer.children : [];
  if (!slidesContainer || slides.length === 0) {
    console.error("The slides container is not found or has no slides.");
    return;
  }

  currentSlideIndex += direction;
  currentSlideIndex = Math.max(
    0,
    Math.min(currentSlideIndex, slides.length - 1)
  );

  const newScrollPosition = Array.from(slides)
    .slice(0, currentSlideIndex)
    .reduce((acc, slide) => {
      return acc + slide.clientWidth + SLIDE_GAP;
    }, 0);

  slidesContainer.scrollLeft = newScrollPosition;

  updateSliderVisibility();
}

function updateSliderVisibility() {
  const viewportWidth = window.innerWidth;
  const slidesContainer = document.querySelector(SLIDES_CONTAINER_SELECTOR);
  const buttonL = document.querySelector(BUTTON_LEFT_SELECTOR);
  const buttonR = document.querySelector(BUTTON_RIGHT_SELECTOR);
  const maxScrollLeft =
    slidesContainer.scrollWidth - slidesContainer.clientWidth;

  buttonL.style.display = currentSlideIndex > 0 ? "block" : "none";
  buttonR.style.display =
    currentSlideIndex < maxScrollLeft && viewportWidth <= 1030
      ? "block"
      : "none";
}

//End Slider Navigation Section

//Start Gallery section

function toggleDivs() {
  let grid = document.querySelector(".grid");
  let album = document.getElementById("secondDiv");

  if (grid && album) {
    if (grid.classList.contains("hidden")) {
      grid.classList.remove("hidden");
      album.classList.add("hidden");
    } else {
      grid.classList.add("hidden");
      album.classList.remove("hidden");
    }
  }
}

//End Gallery section

//Start Back Gallery Section

function toggleAlbumVisibility() {
  let grid = document.querySelector(".grid");
  let secondDiv = document.getElementById("secondDiv");

  // Make the grid visible and secondDiv hidden when the back arrow is clicked
  if (grid && secondDiv) {
    grid.classList.remove("hidden");
    secondDiv.classList.add("hidden");
  }
}

//End Back Gallery Section

//Start Filter Section

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("viewByOptions").style.display = "none";
  document.getElementById("perPageOptions").style.display = "none";
});

function toggleArrows() {
  const perPageOptions = document.getElementById("perPageOptions");
  const viewByOptions = document.getElementById("viewByOptions");

  if (viewByOptions.style.display === "block") {
    viewByOptions.style.display = "none";
  }

  perPageOptions.style.display =
    perPageOptions.style.display === "block" ? "none" : "block";
  setArrowState("perPageOptions", perPageOptions.style.display === "block");
}

function toggleViewBy(event) {
  if (event) event.stopPropagation();

  const viewByOptions = document.getElementById("viewByOptions");
  const perPageOptions = document.getElementById("perPageOptions");

  if (perPageOptions.style.display === "block") {
    perPageOptions.style.display = "none";
  }

  viewByOptions.style.display =
    viewByOptions.style.display === "block" ? "none" : "block";
  setArrowState("viewByOptions", viewByOptions.style.display === "block");
}

function setArrowState(dropdownId, isOptionsVisible) {
  let arrowDown, arrowUp;
  if (dropdownId === "perPageOptions") {
    arrowDown = document.querySelector(
      "div[onclick='toggleArrows()'] img[src='/image/arrowfilter.svg']"
    );
    arrowUp = document.querySelector(
      "div[onclick='toggleArrows()'] img[src='/image/venusemenuarrowup.svg']"
    );
  } else if (dropdownId === "viewByOptions") {
    arrowDown = document.querySelector(
      "div[onclick='toggleViewBy(event)'] img[src='/image/arrowfilter.svg']"
    );
    arrowUp = document.querySelector(
      "div[onclick='toggleViewBy(event)'] img[src='/image/venusemenuarrowup.svg']"
    );
  }

  if (arrowDown && arrowUp) {
    if (isOptionsVisible) {
      arrowDown.classList.add("hidden-cursor-point");
      arrowDown.classList.remove("cursor-pointer");
      arrowUp.classList.remove("hidden-cursor-point");
      arrowUp.classList.add("cursor-pointer");
    } else {
      arrowDown.classList.remove("hidden-cursor-point");
      arrowDown.classList.add("cursor-pointer");
      arrowUp.classList.add("hidden-cursor-point");
      arrowUp.classList.remove("cursor-pointer");
    }
  }
}

document.addEventListener("click", function (e) {
  const perPageOptions = document.getElementById("perPageOptions");
  const viewByOptions = document.getElementById("viewByOptions");
  const toggleButtonPerPage = document.querySelector(
    "div[onclick='toggleArrows()']"
  );
  const toggleButtonViewBy = document.querySelector(
    "div[onclick='toggleViewBy(event)']"
  );

  if (
    !toggleButtonPerPage.contains(e.target) &&
    !perPageOptions.contains(e.target) &&
    perPageOptions.style.display === "block"
  ) {
    perPageOptions.style.display = "none";
    setArrowState("perPageOptions", false);
  }

  if (
    !toggleButtonViewBy.contains(e.target) &&
    !viewByOptions.contains(e.target) &&
    viewByOptions.style.display === "block"
  ) {
    viewByOptions.style.display = "none";
    setArrowState("viewByOptions", false);
  }
});

function setPerPage(value) {
  const perPageDisplay = document.getElementById("perPageDisplay");
  perPageDisplay.textContent = value;

  const perPageOptions = document.getElementById("perPageOptions");
  perPageOptions.style.display = "none";
  setArrowState("perPageOptions", false);
}

function setViewBy(value) {
  const viewByValueElement = document.getElementById("viewByValue");
  viewByValueElement.textContent = value;

  const viewByOptions = document.getElementById("viewByOptions");
  viewByOptions.style.display = "none";
  setArrowState("viewByOptions", false);
}

//End Filter section

//Start Pagination Section

let currentPage = 1;
const totalPages = 6;

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
  }
}

function goToPage(page) {
  currentPage = page;
  updatePagination();
}

function updatePagination() {
  for (let i = 1; i <= totalPages; i++) {
    document.getElementById(`page${i}`).classList.remove("active-page");
  }

  document.getElementById(`page${currentPage}`).classList.add("active-page");
}

document.addEventListener("DOMContentLoaded", function () {
  updatePagination();
});

//End Pagination Section

// Start Venues Toggle Section

document.addEventListener("DOMContentLoaded", function () {
  const venuesListItem = document.getElementById("venuesListItem");
  const submenu = document.getElementById("submenu");
  const arrowDown = document.querySelector("img[alt='arrow down']");
  const arrowUp = document.querySelector("img[alt='arrow up']");

  venuesListItem.addEventListener("click", function (event) {
    event.stopPropagation();
    submenu.classList.toggle("hidden");
    arrowDown.classList.toggle("hidden");
    arrowUp.classList.toggle("hidden");

    if (arrowDown.classList.contains("hidden")) {
      arrowDown.classList.remove("cursor-pointer");
      arrowUp.classList.add("cursor-pointer");
    } else {
      arrowDown.classList.add("cursor-pointer");
      arrowUp.classList.remove("cursor-pointer");
    }
  });

  document.addEventListener("click", function () {
    if (!submenu.classList.contains("hidden")) {
      submenu.classList.add("hidden");
      arrowDown.classList.remove("hidden");
      arrowUp.classList.add("hidden");
      arrowDown.classList.add("cursor-pointer");
      arrowUp.classList.remove("cursor-pointer");
    }
  });

  submenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

// End Venues Toggle Section

//Start Mobile Menu Section

function toggleMenu() {
  let overlayDiv = document.getElementById("overlayDiv");
  let closeArrowImage = document.getElementById("closeArrowImage");
  let submenus = document.getElementById("submenus");

  overlayDiv.classList.toggle("hidden_menus");
  closeArrowImage.classList.toggle("hiddenn");
  submenus.classList.toggle("hiddenn");
}

function toggleMenu() {
  const menuIcon = document.getElementById("menuIcon");
  const overlayDiv = document.getElementById("overlayDiv");

  menuIcon.classList.toggle("visible_menu");
  menuIcon.classList.toggle("hidden_menu");

  overlayDiv.classList.toggle("hidden_menu");
  overlayDiv.classList.toggle("visible_menu");

  const body = document.body;

  body.classList.toggle("menu-open");

  if (body.classList.contains("menu-open")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }

  overlayDiv.classList.toggle("menu-scroll");
}

document.addEventListener("DOMContentLoaded", function () {
  const overlayDiv = document.getElementById("overlayDiv");
  const closeButton = document.getElementById("closeButton");

  closeButton.addEventListener("click", function () {
    overlayDiv.classList.remove("visible");
    overlayDiv.classList.add("hidden_menu");
  });
});

//End Mobile Menu Section

//Start Mobile Menu Section

function toggleMenu() {
  let overlayDiv = document.getElementById("overlayDiv");
  let closeArrowImage = document.getElementById("closeArrowImage");
  let submenus = document.getElementById("submenus");

  overlayDiv.classList.toggle("hidden_menus");
  closeArrowImage.classList.toggle("hiddenn");
  submenus.classList.toggle("hiddenn");
}

function toggleMenu() {
  const menuIcon = document.getElementById("menuIcon");
  const overlayDiv = document.getElementById("overlayDiv");

  menuIcon.classList.toggle("visible_menu");
  menuIcon.classList.toggle("hidden_menu");

  overlayDiv.classList.toggle("hidden_menu");
  overlayDiv.classList.toggle("visible_menu");

  const body = document.body;

  body.classList.toggle("menu-open");

  if (body.classList.contains("menu-open")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }

  overlayDiv.classList.toggle("menu-scroll");
}

document.addEventListener("DOMContentLoaded", function () {
  const overlayDiv = document.getElementById("overlayDiv");
  const closeButton = document.getElementById("closeButton");

  closeButton.addEventListener("click", function () {
    overlayDiv.classList.remove("visible");
    overlayDiv.classList.add("hidden_menu");
  });
});

//End Mobile Menu Section

//Start Mobile Menu Venues Section

document.addEventListener("DOMContentLoaded", () => {
  const venuesLink = document.getElementById("venuesLink");
  const submenus = document.getElementById("submenus");
  const arrowImage = document.getElementById("arrowImage");
  const closeArrowImage = document.getElementById("closeArrowImage");

  venuesLink.addEventListener("click", (event) => {
    event.preventDefault();

    if (submenus.classList.contains("hiddenn")) {
      submenus.classList.replace("hiddenn", "block");
      arrowImage.style.display = "none";
      closeArrowImage.style.display = "block";
    } else {
      submenus.classList.replace("block", "hiddenn");
      arrowImage.style.display = "block";
      closeArrowImage.style.display = "none";
    }
  });
});

//End Mobile Menu Venues Section
