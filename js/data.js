/**
 * Property data for the vacation rental website
 * Contains all 13+ properties across Goa, Neral, and Badlapur
 */

const LOCATIONS = {
  goa: { name: 'Goa', slug: 'goa', description: 'Sun-kissed beaches, vibrant culture, and stunning villas along the Arabian Sea.', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800' },
  neral: { name: 'Neral', slug: 'neral', description: 'Misty hills, lush greenery, and serene farm stays near Matheran.', image: 'https://images.unsplash.com/photo-1621870938287-f223c7b4e7c8?w=800' },
  badlapur: { name: 'Badlapur', slug: 'badlapur', description: 'Scenic getaways nestled in the foothills of the Western Ghats.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800' }
};

const AMENITIES_LIST = [
  'WiFi', 'AC', 'Pool', 'Kitchen', 'Parking', 'Garden',
  'TV', 'Washer', 'Pet Friendly', 'Breakfast', 'Beach Access',
  'Room Service', 'Bonfire', 'Trekking', 'Spa', 'Balcony'
];

const properties = [
  // ===== GOA (11 properties) =====
  {
    id: 'goa-1',
    name: 'Casa Alba',
    location: 'goa',
    area: 'Candolim',
    tagline: 'A pristine white villa steps from the sand',
    description: 'Casa Alba is a stunning whitewashed villa nestled in the heart of Candolim. Featuring four spacious bedrooms, a private infinity pool, and lush tropical gardens, this property offers the perfect blend of luxury and comfort. Wake up to the sound of waves and spend your days lounging by the pool or exploring the nearby beaches and shacks.',
    price: '₹12,000',
    pricePer: 'night',
    rating: 4.9,
    reviews: 34,
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
    ],
    amenities: ['WiFi', 'AC', 'Pool', 'Kitchen', 'Parking', 'Garden', 'TV'],
    host: 'Priya & Raj',
    hostAvatar: 'https://i.pravatar.cc/150?img=47',
    hostBio: 'We live in Goa year-round and love sharing our coastal paradise with guests. We personally welcome every visitor.',
    bestFor: ['Family', 'Group'],
    featured: true,
    mapCoords: '15.5053,73.8077'
  },
  {
    id: 'goa-2',
    name: 'Sea Breeze Villa',
    location: 'goa',
    area: 'Anjuna',
    tagline: 'Oceanfront luxury with sunset views',
    description: 'Perched on the cliffs of Anjuna, Sea Breeze Villa offers uninterrupted views of the Arabian Sea. This three-bedroom property features floor-to-ceiling windows, a private deck overlooking the water, and direct access to a secluded beach cove.',
    price: '₹18,500',
    pricePer: 'night',
    rating: 4.8,
    reviews: 27,
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1600566753086-00f18d8f0444?w=800',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'
    ],
    amenities: ['WiFi', 'AC', 'Pool', 'Kitchen', 'Parking', 'TV', 'Beach Access'],
    host: 'Anil M.',
    hostAvatar: 'https://i.pravatar.cc/150?img=12',
    hostBio: 'Former chef turned host. I know all the best restaurants and hidden beaches in North Goa.',
    bestFor: ['Couples', 'Group'],
    featured: true,
    mapCoords: '15.5847,73.7479'
  },
  {
    id: 'goa-3',
    name: 'Palm Grove Cottage',
    location: 'goa',
    area: 'Palolem',
    tagline: 'Charming cottage surrounded by coconut palms',
    description: 'Experience true Goan village life at Palm Grove Cottage. This lovingly restored traditional Goan home sits amidst a coconut grove just a 3-minute walk from Palolem Beach. With its red tiled roof, antique furniture, and modern amenities, it offers an authentic yet comfortable stay.',
    price: '₹7,500',
    pricePer: 'night',
    rating: 4.7,
    reviews: 41,
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7a75b5?w=800',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    amenities: ['WiFi', 'AC', 'Kitchen', 'Parking', 'Garden', 'Bonfire'],
    host: 'Maria & Carlos',
    hostAvatar: 'https://i.pravatar.cc/150?img=45',
    hostBio: 'We are a Goan-Portuguese family who have lived in Palolem for 30 years.',
    bestFor: ['Couples', 'Family'],
    featured: false,
    mapCoords: '15.0093,74.0235'
  },
  {
    id: 'goa-4',
    name: 'Sunset Retreat',
    location: 'goa',
    area: 'Vagator',
    tagline: 'Where every evening paints a masterpiece',
    description: 'Sunset Retreat is a luxurious five-bedroom villa perched on the headlands of Vagator, offering panoramic views of the Chapora River meeting the Arabian Sea. Featuring a stunning infinity pool, outdoor cabana, and a professional-grade kitchen.',
    price: '₹25,000',
    pricePer: 'night',
    rating: 5.0,
    reviews: 19,
    bedrooms: 5,
    bathrooms: 4,
    guests: 12,
    images: [
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800'
    ],
    amenities: ['WiFi', 'AC', 'Pool', 'Kitchen', 'Parking', 'Garden', 'TV', 'Room Service', 'Bonfire'],
    host: 'Vikram S.',
    hostAvatar: 'https://i.pravatar.cc/150?img=68',
    hostBio: 'Architect and design enthusiast. I designed Sunset Retreat myself and personally oversee every guest experience.',
    bestFor: ['Group', 'Family'],
    featured: true,
    mapCoords: '15.5974,73.7422'
  },
  {
    id: 'goa-5',
    name: 'The Beach House',
    location: 'goa',
    area: 'Calangute',
    tagline: 'Fall asleep to the sound of waves',
    description: 'The Beach House is a beautiful home directly on Calangute Beach. With an open-plan living area that opens onto a sandy terrace, this 3-bedroom property brings the outdoors in.',
    price: '₹14,000',
    pricePer: 'night',
    rating: 4.6,
    reviews: 53,
    bedrooms: 3,
    bathrooms: 2,
    guests: 7,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'
    ],
    amenities: ['WiFi', 'AC', 'Kitchen', 'Parking', 'TV', 'Washer', 'Beach Access'],
    host: 'Shanti H.',
    hostAvatar: 'https://i.pravatar.cc/150?img=23',
    hostBio: 'I moved to Goa 15 years ago and never left. I know Calangute like the back of my hand.',
    bestFor: ['Family', 'Couples'],
    featured: false,
    mapCoords: '15.5438,73.7546'
  },
  {
    id: 'goa-6',
    name: 'Serenity Cove',
    location: 'goa',
    area: 'Benaulim',
    tagline: 'Peaceful retreat away from the crowds',
    description: 'Tucked away in the quiet fishing village of Benaulim, Serenity Cove is a two-bedroom villa surrounded by paddy fields and palm trees. Features a private pool, outdoor shower, and rooftop terrace perfect for yoga.',
    price: '₹8,500',
    pricePer: 'night',
    rating: 4.8,
    reviews: 22,
    bedrooms: 2,
    bathrooms: 2,
    guests: 5,
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18d8f0444?w=800',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
    ],
    amenities: ['WiFi', 'AC', 'Pool', 'Kitchen', 'Parking', 'Garden', 'TV'],
    host: 'Leela D.',
    hostAvatar: 'https://i.pravatar.cc/150?img=36',
    hostBio: 'I grew up in Benaulim and can show you the real Goa beyond the tourist trail.',
    bestFor: ['Couples', 'Solo'],
    featured: false,
    mapCoords: '15.2592,73.9256'
  },
  {
    id: 'goa-7',
    name: 'Mango Grove Villa',
    location: 'goa',
    area: 'Assagao',
    tagline: 'Tropical living in Goa\'s chicest village',
    description: 'Mango Grove Villa is a contemporary three-bedroom home set in a lush mango orchard in bohemian Assagao. Blends indoor-outdoor living with a stunning lap pool and alfresco dining pavilion.',
    price: '₹16,000',
    pricePer: 'night',
    rating: 4.9,
    reviews: 31,
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    images: [
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'
    ],
    amenities: ['WiFi', 'AC', 'Pool', 'Kitchen', 'Parking', 'Garden', 'TV', 'Bonfire'],
    host: 'Rohan & Neha',
    hostAvatar: 'https://i.pravatar.cc/150?img=60',
    hostBio: 'We left corporate Mumbai to restore this mango farm. Every corner reflects our love for design and nature.',
    bestFor: ['Couples', 'Family', 'Group'],
    featured: true,
    mapCoords: '15.6333,73.8000'
  },
  {
    id: 'goa-8',
    name: 'Blue Waves Apartment',
    location: 'goa',
    area: 'Panjim',
    tagline: 'Modern city living with river views',
    description: 'A sleek, modern two-bedroom apartment in the heart of Panjim with stunning views of the Mandovi River. Walking distance to Latin Quarter, spice markets, and the best restaurants.',
    price: '₹6,500',
    pricePer: 'night',
    rating: 4.5,
    reviews: 48,
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    images: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7a75b5?w=800',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'
    ],
    amenities: ['WiFi', 'AC', 'Kitchen', 'Parking', 'TV', 'Washer'],
    host: 'Althea B.',
    hostAvatar: 'https://i.pravatar.cc/150?img=9',
    hostBio: 'Born and raised in Panjim. I love sharing Goa\'s capital culture with guests.',
    bestFor: ['Couples', 'Family'],
    featured: false,
    mapCoords: '15.4909,73.8278'
  },
  {
    id: 'goa-9',
    name: 'Salt Water Villa',
    location: 'goa',
    area: 'Morjim',
    tagline: 'Rustic luxury by the turtle nesting beach',
    description: 'A beautifully restored Goan-Portuguese home in sleepy Morjim. Traditional architecture, saltwater pool, and lush gardens in a 4-bedroom villa offering old-world Goa with modern comforts.',
    price: '₹20,000',
    pricePer: 'night',
    rating: 4.7,
    reviews: 16,
    bedrooms: 4,
    bathrooms: 3,
    guests: 10,
    images: [
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
    ],
    amenities: ['WiFi', 'AC', 'Pool', 'Kitchen', 'Parking', 'Garden', 'Bonfire', 'Beach Access'],
    host: 'Fernando & Lisa',
    hostAvatar: 'https://i.pravatar.cc/150?img=33',
    hostBio: 'We restored this 150-year-old family home. Every tile tells a story of Goa\'s heritage.',
    bestFor: ['Family', 'Group'],
    featured: false,
    mapCoords: '15.6189,73.7347'
  },
  {
    id: 'goa-10',
    name: 'The Treehouse',
    location: 'goa',
    area: 'Arambol',
    tagline: 'Sleep among the treetops',
    description: 'An enchanting bamboo treehouse set in a private forest near Arambol Beach. Circular king bed, open-sky bathroom, and hammock deck overlooking the canopy. Glamping at its finest.',
    price: '₹5,500',
    pricePer: 'night',
    rating: 4.9,
    reviews: 44,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7a75b5?w=800'
    ],
    amenities: ['WiFi', 'Parking', 'Garden', 'Bonfire', 'Breakfast'],
    host: 'Sunil K.',
    hostAvatar: 'https://i.pravatar.cc/150?img=52',
    hostBio: 'I built this treehouse with my own hands. It started as a dream and became my favourite place on earth.',
    bestFor: ['Couples', 'Solo'],
    featured: true,
    mapCoords: '15.6800,73.7100'
  },
  {
    id: 'goa-11',
    name: 'Bay View Studio',
    location: 'goa',
    area: 'Miramar',
    tagline: 'Charming studio overlooking the bay',
    description: 'A cozy, artfully decorated studio apartment overlooking Miramar Bay. Curated library, French balcony, and rooftop shared with spectacular sunsets over the bay.',
    price: '₹3,500',
    pricePer: 'night',
    rating: 4.6,
    reviews: 61,
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    images: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'
    ],
    amenities: ['WiFi', 'AC', 'Kitchen', 'TV', 'Washer'],
    host: 'Meera P.',
    hostAvatar: 'https://i.pravatar.cc/150?img=16',
    hostBio: 'An artist and writer who turned her spare studio into a home for travelers. I leave fresh flowers for every guest.',
    bestFor: ['Couples', 'Solo'],
    featured: false,
    mapCoords: '15.4936,73.8143'
  },

  // ===== NERAL (1 Farm with 7 rooms) =====
  {
    id: 'neral-1',
    name: 'The Farmstead at Neral',
    location: 'neral',
    area: 'Matheran Foothills',
    tagline: 'A working farm with 7 uniquely themed rooms',
    description: 'The Farmstead at Neral is a sprawling 5-acre working farm nestled in the foothills of Matheran. With 7 individually designed rooms, each named after the elements of nature, this is the perfect escape from city life. Wake up to bird songs, pick fresh vegetables from our garden, and spend evenings around a crackling bonfire under a canopy of stars.',
    price: '₹4,500',
    pricePer: 'night per room',
    rating: 4.8,
    reviews: 87,
    bedrooms: 7,
    bathrooms: 7,
    guests: 18,
    images: [
      'https://images.unsplash.com/photo-1621870938287-f223c7b4e7c8?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1587061949409-02df41af2c1e?w=800',
      'https://images.unsplash.com/photo-1534008897995-27a23e4e5e16?w=800'
    ],
    amenities: ['WiFi', 'Parking', 'Garden', 'Bonfire', 'Kitchen', 'Breakfast', 'Trekking', 'Pet Friendly'],
    host: 'Arjun & Kavya',
    hostAvatar: 'https://i.pravatar.cc/150?img=65',
    hostBio: 'We left our city jobs to build this farm from scratch. Everything we serve comes from our land.',
    bestFor: ['Family', 'Group', 'Couples', 'Pet Owner'],
    featured: true,
    mapCoords: '19.0333,73.3167',
    rooms: [
      { name: 'Mango Suite', capacity: 3, price: '₹5,500/night', description: 'Spacious room with orchard views and a private sit-out.' },
      { name: 'Jackfruit Room', capacity: 2, price: '₹4,500/night', description: 'Cozy room with garden access and outdoor shower.' },
      { name: 'Spice Garden Room', capacity: 2, price: '₹4,000/night', description: 'Fragrant room overlooking the spice garden.' },
      { name: 'Sunflower Studio', capacity: 4, price: '₹6,500/night', description: 'Family room with a kitchenette and terrace.' },
      { name: 'Bamboo Hut', capacity: 2, price: '₹3,500/night', description: 'Rustic eco-hut with bamboo walls and open-sky bathroom.' },
      { name: 'Heritage Room', capacity: 2, price: '₹4,500/night', description: 'Traditional room with antique furniture and canopy bed.' },
      { name: 'Hill View Room', capacity: 3, price: '₹5,000/night', description: 'Top-floor room with panoramic mountain views.' }
    ]
  },

  // ===== BADLAPUR (1 BHK) =====
  {
    id: 'badlapur-1',
    name: 'Hillview Retreat',
    location: 'badlapur',
    area: 'Badlapur East',
    tagline: 'A cozy 1BHK with sweeping valley views',
    description: 'Hillview Retreat is a lovingly appointed 1-bedroom apartment perched on the hills of Badlapur East. Wake up to misty valley views, enjoy your morning chai on the private balcony, and explore the nearby waterfalls and trekking trails.',
    price: '₹3,000',
    pricePer: 'night',
    rating: 4.7,
    reviews: 36,
    bedrooms: 1,
    bathrooms: 1,
    guests: 3,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1587061949409-02df41af2c1e?w=800',
      'https://images.unsplash.com/photo-1534008897995-27a23e4e5e16?w=800',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800'
    ],
    amenities: ['WiFi', 'AC', 'Kitchen', 'Parking', 'TV', 'Washer'],
    host: 'Sneha & Akash',
    hostAvatar: 'https://i.pravatar.cc/150?img=41',
    hostBio: 'We renovated this old family home into a cozy retreat. We live nearby and are always available to help plan your trek.',
    bestFor: ['Couples', 'Solo'],
    featured: false,
    mapCoords: '19.1500,73.2667'
  }
];

function getPropertiesByLocation(slug) {
  return properties.filter(p => p.location === slug);
}

function getPropertyById(id) {
  return properties.find(p => p.id === id);
}

function getFeaturedProperties() {
  return properties.filter(p => p.featured);
}

function searchProperties(keyword) {
  const kw = keyword.toLowerCase();
  return properties.filter(p =>
    p.name.toLowerCase().includes(kw) ||
    p.description.toLowerCase().includes(kw) ||
    p.area.toLowerCase().includes(kw) ||
    p.tagline.toLowerCase().includes(kw)
  );
}

function filterByAmenities(list, amenities) {
  if (!amenities || amenities.length === 0) return list;
  return list.filter(p => amenities.every(a => p.amenities.includes(a)));
}

function getStarsHtml(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let stars = '';
  for (let i = 0; i < full; i++) stars += '<span class="star full">★</span>';
  if (half) stars += '<span class="star half">★</span>';
  const empty = 5 - Math.ceil(rating);
  for (let i = 0; i < empty; i++) stars += '<span class="star empty">★</span>';
  return stars;
}
