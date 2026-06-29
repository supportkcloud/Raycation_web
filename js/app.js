/**
 * Main application JavaScript
 * Handles page routing, rendering, filtering, and interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initPageRouting();
});

/* ----- HEADER SCROLL EFFECT ----- */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

/* ----- MOBILE NAV TOGGLE ----- */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  // Close nav on link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
}

/* ----- PAGE ROUTING ----- */
function initPageRouting() {
  const page = document.body.dataset.page;

  switch (page) {
    case 'home':
      renderLocationCards();
      renderFeaturedProperties();
      break;
    case 'listings':
      renderListingsPage();
      break;
    case 'property':
      renderPropertyDetail();
      break;
    case 'about':
      initContactForm();
      break;
  }
}

/* ============================================
   HOMEPAGE
   ============================================ */

function renderLocationCards() {
  const grid = document.querySelector('.locations-grid');
  if (!grid) return;

  const locationKeys = Object.keys(LOCATIONS);
  const counts = {
    goa: getPropertiesByLocation('goa').length + ' stays',
    neral: getPropertiesByLocation('neral').length + ' property',
    badlapur: getPropertiesByLocation('badlapur').length + ' stay'
  };

  grid.innerHTML = locationKeys.map(slug => {
    const loc = LOCATIONS[slug];
    return `
      <a href="listings.html?location=${slug}" class="location-card">
        <img src="${loc.image}" alt="${loc.name}" loading="lazy">
        <div class="location-overlay">
          <h3 class="location-name">${loc.name}</h3>
          <span class="location-count">${counts[slug]} · ${loc.description.slice(0, 40)}...</span>
        </div>
      </a>
    `;
  }).join('');
}

function renderFeaturedProperties() {
  const grid = document.querySelector('.featured-grid');
  if (!grid) return;

  const featured = getFeaturedProperties().slice(0, 6);
  grid.innerHTML = featured.map(p => buildPropertyCard(p)).join('');
}

function buildPropertyCard(p) {
  const stars = getStarsHtml(p.rating);
  const badge = p.featured ? '<span class="property-card-badge">Featured</span>' : '';

  return `
    <a href="property.html?id=${p.id}" class="property-card">
      <div class="property-card-image">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        ${badge}
      </div>
      <div class="property-card-body">
        <div class="property-card-area">${p.area}, ${LOCATIONS[p.location]?.name || p.location}</div>
        <h3 class="property-card-name">${p.name}</h3>
        <div class="property-card-rating">
          ${stars}
          <span class="rating-value">${p.rating}</span>
          <span class="review-count">(${p.reviews} reviews)</span>
        </div>
        <div class="property-card-meta">
          <span>🛏 ${p.bedrooms} bed</span>
          <span>🚿 ${p.bathrooms} bath</span>
          <span>👥 ${p.guests} guests</span>
        </div>
        <div class="property-card-footer">
          <span class="property-card-price">${p.price} <small>/${p.pricePer}</small></span>
        </div>
      </div>
    </a>
  `;
}

/* ============================================
   LISTINGS PAGE
   ============================================ */

let currentFilteredProperties = [];

function renderListingsPage() {
  const grid = document.querySelector('.listings-grid');
  const resultCount = document.querySelector('.filter-results');
  if (!grid || !resultCount) return;

  const urlParams = new URLSearchParams(window.location.search);
  const initialLocation = urlParams.get('location') || 'all';

  // Set filter defaults from URL
  const locFilter = document.getElementById('filter-location');
  if (locFilter && initialLocation !== 'all') {
    locFilter.value = initialLocation;
  }

  // Populate amenity checkboxes
  const amenityContainer = document.getElementById('filter-amenities');
  if (amenityContainer) {
    amenityContainer.innerHTML = AMENITIES_LIST.map(a =>
      `<label><input type="checkbox" value="${a}" class="amenity-checkbox"> ${a}</label>`
    ).join(' ');
  }

  // Initial render
  applyFilters();

  // Event listeners
  const searchInput = document.getElementById('filter-search');
  const locationSelect = document.getElementById('filter-location');

  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (locationSelect) locationSelect.addEventListener('change', applyFilters);
  if (amenityContainer) {
    amenityContainer.addEventListener('change', applyFilters);
  }
}

function applyFilters() {
  const grid = document.querySelector('.listings-grid');
  const resultCount = document.querySelector('.filter-results');
  if (!grid) return;

  const searchKeyword = document.getElementById('filter-search')?.value || '';
  const locationFilter = document.getElementById('filter-location')?.value || 'all';
  const selectedAmenities = Array.from(document.querySelectorAll('.amenity-checkbox:checked')).map(cb => cb.value);

  // Start with all properties
  let filtered = [...properties];

  // Filter by location
  if (locationFilter !== 'all') {
    filtered = filtered.filter(p => p.location === locationFilter);
  }

  // Filter by search keyword
  if (searchKeyword.trim()) {
    const kw = searchKeyword.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(kw) ||
      p.area.toLowerCase().includes(kw) ||
      p.tagline.toLowerCase().includes(kw) ||
      p.description.toLowerCase().includes(kw)
    );
  }

  // Filter by amenities
  if (selectedAmenities.length > 0) {
    filtered = filterByAmenities(filtered, selectedAmenities);
  }

  currentFilteredProperties = filtered;

  // Render
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 3rem; margin-bottom: 16px;">🔍</div>
        <h3 style="font-family: 'Playfair Display', serif; margin-bottom: 8px;">No properties found</h3>
        <p style="color: var(--color-gray-600);">Try adjusting your filters or search terms.</p>
      </div>
    `;
  } else {
    grid.innerHTML = filtered.map(p => buildPropertyCard(p)).join('');
  }

  // Update count
  if (resultCount) {
    resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'property' : 'properties'} found`;
  }
}

/* ============================================
   PROPERTY DETAIL PAGE
   ============================================ */

function renderPropertyDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get('id');
  const container = document.querySelector('.property-detail');
  if (!container) return;

  if (!propertyId) {
    container.innerHTML = '<div class="container" style="text-align:center;padding:100px 0"><h2>Property not found</h2><a href="listings.html" class="btn btn-primary" style="margin-top:20px">Browse all stays</a></div>';
    return;
  }

  const p = getPropertyById(propertyId);
  if (!p) {
    container.innerHTML = '<div class="container" style="text-align:center;padding:100px 0"><h2>Property not found</h2><a href="listings.html" class="btn btn-primary" style="margin-top:20px">Browse all stays</a></div>';
    return;
  }

  renderGallery(container, p);
  renderPropertyContent(container, p);
  renderSidebar(container, p);
  renderHostCard(container, p);
  renderRooms(container, p);
  renderMap(container, p);
}

let galleryIndex = 0;

function renderGallery(container, p) {
  const gallery = container.querySelector('.property-gallery');
  const thumbs = container.querySelector('.gallery-thumbs');
  if (!gallery || !thumbs) return;

  galleryIndex = 0;
  updateGalleryImage(gallery, p);
  renderThumbnails(thumbs, p);

  // Navigation
  const prev = gallery.querySelector('.gallery-prev');
  const next = gallery.querySelector('.gallery-next');

  if (prev) {
    prev.addEventListener('click', () => {
      galleryIndex = (galleryIndex - 1 + p.images.length) % p.images.length;
      updateGalleryImage(gallery, p);
      updateActiveThumb(thumbs, galleryIndex);
    });
  }

  if (next) {
    next.addEventListener('click', () => {
      galleryIndex = (galleryIndex + 1) % p.images.length;
      updateGalleryImage(gallery, p);
      updateActiveThumb(thumbs, galleryIndex);
    });
  }
}

function updateGalleryImage(gallery, p) {
  const img = gallery.querySelector('img');
  if (img) {
    img.src = p.images[galleryIndex];
    img.alt = p.name;
  }
}

function renderThumbnails(thumbs, p) {
  thumbs.innerHTML = p.images.map((img, i) => `
    <div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
      <img src="${img}" alt="${p.name} ${i + 1}" loading="lazy">
    </div>
  `).join('');

  thumbs.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.dataset.index);
      galleryIndex = idx;
      const gallery = document.querySelector('.property-gallery');
      if (gallery) updateGalleryImage(gallery, p);
      updateActiveThumb(thumbs, idx);
    });
  });
}

function updateActiveThumb(thumbs, idx) {
  thumbs.querySelectorAll('.gallery-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });
}

function renderPropertyContent(container, p) {
  const main = container.querySelector('.property-detail-main');
  if (!main) return;

  const stars = getStarsHtml(p.rating);
  const locationName = LOCATIONS[p.location]?.name || p.location;

  main.innerHTML = `
    <h1>${p.name}</h1>
    <div class="property-detail-area">📍 ${p.area}, ${locationName}</div>
    <div class="property-detail-rating">
      ${stars}
      <span class="rating-value">${p.rating}</span>
      <span class="review-count">(${p.reviews} reviews)</span>
      <span style="color:var(--color-gray-400);margin:0 8px;">·</span>
      <span>🛏 ${p.bedrooms} bed · 🚿 ${p.bathrooms} bath · 👥 ${p.guests} guests</span>
    </div>
    <div class="property-detail-amenities">
      ${p.amenities.map(a => `<span class="amenity-tag">${a}</span>`).join('')}
    </div>
    <div class="property-detail-desc">
      <p>${p.description}</p>
    </div>
  `;
}

function renderSidebar(container, p) {
  const sidebar = container.querySelector('.property-detail-sidebar');
  if (!sidebar) return;

  const stars = getStarsHtml(p.rating);

  sidebar.innerHTML = `
    <div class="booking-card">
      <div class="booking-card-price">${p.price} <small>/${p.pricePer}</small></div>
      <div class="booking-card-rating">
        ${stars} <span class="rating-value">${p.rating}</span> <span class="review-count">(${p.reviews} reviews)</span>
      </div>
      <form class="booking-form" onsubmit="return handleBookingSubmit(event)">
        <div>
          <label for="checkin">Check-in</label>
          <input type="date" id="checkin" required>
        </div>
        <div>
          <label for="checkout">Check-out</label>
          <input type="date" id="checkout" required>
        </div>
        <div>
          <label for="guests">Guests</label>
          <select id="guests">
            ${Array.from({length: p.guests}, (_, i) => `<option value="${i + 1}">${i + 1} ${i === 0 ? 'Guest' : 'Guests'}</option>`).join('')}
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Book Now</button>
        <p style="text-align:center;font-size:0.85rem;color:var(--color-gray-500);margin-top:4px;">You won't be charged yet</p>
      </form>
    </div>
  `;
}

function renderHostCard(container, p) {
  const sidebar = container.querySelector('.property-detail-sidebar');
  if (!sidebar) return;

  const hostDiv = document.createElement('div');
  hostDiv.className = 'host-card';
  hostDiv.innerHTML = `
    <div class="host-card-header">
      <img src="${p.hostAvatar}" alt="${p.host}" class="host-avatar">
      <div>
        <div class="host-name">Hosted by ${p.host}</div>
        <div style="font-size:0.85rem;color:var(--color-gray-500);">Superhost · 5 years hosting</div>
      </div>
    </div>
    <div class="host-bio">${p.hostBio}</div>
  `;
  sidebar.appendChild(hostDiv);
}

function renderRooms(container, p) {
  if (!p.rooms || p.rooms.length === 0) return;

  const section = container.querySelector('.rooms-section');
  if (!section) return;

  section.innerHTML = `
    <h2>Rooms & Suites</h2>
    <div class="rooms-grid">
      ${p.rooms.map(r => `
        <div class="room-card">
          <h3>${r.name}</h3>
          <p>${r.description}</p>
          <p>👥 Up to ${r.capacity} guests</p>
          <p class="room-card-price">${r.price}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function renderMap(container, p) {
  const mapContainer = container.querySelector('.map-container');
  if (!mapContainer) return;

  const [lat, lng] = p.mapCoords ? p.mapCoords.split(',') : ['15.5', '73.8'];

  mapContainer.innerHTML = `
    <div class="map-placeholder">
      <span>🗺️</span>
      <div style="font-weight:600;">${p.area}, ${LOCATIONS[p.location]?.name || ''}</div>
      <div style="font-size:0.85rem;">${lat}, ${lng}</div>
      <div style="font-size:0.85rem;color:var(--color-gray-500);margin-top:4px;">Map will be embedded here</div>
    </div>
  `;
}

/* ============================================
   BOOKING FORM SUBMIT
   ============================================ */

function handleBookingSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const checkin = form.querySelector('#checkin')?.value;
  const checkout = form.querySelector('#checkout')?.value;
  const guests = form.querySelector('#guests')?.value;

  if (!checkin || !checkout) {
    alert('Please select check-in and check-out dates.');
    return false;
  }

  if (new Date(checkin) >= new Date(checkout)) {
    alert('Check-out must be after check-in.');
    return false;
  }

  alert(`Booking inquiry submitted!\n\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}\n\nWe'll get back to you shortly.`);
  return false;
}

/* ============================================
   CONTACT FORM (About Page)
   ============================================ */

function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('contact-success');
  if (!form || !successMsg) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name')?.value;
    const email = document.getElementById('contact-email')?.value;
    const phone = document.getElementById('contact-phone')?.value;
    const location = document.getElementById('contact-location')?.value;
    const message = document.getElementById('contact-message')?.value;

    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    form.style.display = 'none';
    successMsg.classList.add('show');
  });
}
