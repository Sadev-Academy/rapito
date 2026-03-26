export const menuData = {
  Starters: [
    { name: 'Carpaccio di Manzo', description: 'Thinly sliced Wagyu beef, truffle oil, aged parmesan shavings, caper berries.', price: '£22' },
    { name: 'Burrata e Pomodorini', description: 'Fresh Puglian burrata, heritage tomatoes, basil oil, balsamic pearls.', price: '£18' },
    { name: 'Fritto Misto di Mare', description: 'Crispy calamari, red mullet, courgette, Amalfi lemon aioli.', price: '£24' }
  ],
  "Main Courses": [
    { name: 'Agnolotti al Tartufo', description: 'Handmade pasta parcels stuffed with veal, served in a rich brown butter and black truffle sauce.', price: '£36' },
    { name: 'Ossobuco alla Milanese', description: 'Slow-braised veal shank, saffron risotto, traditional gremolata.', price: '£42' },
    { name: 'Branzino in Padella', description: 'Pan-seared Mediterranean sea bass, sautéed samphire, cherry tomato confit.', price: '£38' },
    { name: 'Risotto ai Frutti di Mare', description: 'Carnaroli rice, Scottish langoustines, mussels, clams, and a hint of chili.', price: '£34' }
  ],
  Desserts: [
    { name: 'Tiramisù Tradizionale', description: 'Espresso-soaked savoiardi, mascarpone cream, dark cocoa dust.', price: '£12' },
    { name: 'Panna Cotta al Limoncello', description: 'Silky lemon cream, wild berry compote, almond tuile.', price: '£14' },
    { name: 'Cannoli Siciliani', description: 'Crisp pastry shells filled with sweet ricotta, pistachio, and candied orange.', price: '£12' }
  ],
  Drinks: [
    { name: 'Negroni Sbagliato', description: 'Campari, sweet vermouth, Prosecco, orange twist.', price: '£16' },
    { name: 'Barolo Riserva, DOCG', description: 'Deep, rich, and full-bodied red wine from Piedmont (Glass).', price: '£24' },
    { name: 'Franciacorta Superiore', description: 'Elegant Italian sparkling wine, crisp and refreshing (Glass).', price: '£18' }
  ]
};

export const signatureDishes = [
  {
    title: 'Bistecca alla Fiorentina',
    description: 'Our crown jewel: a 35-day dry-aged, thick-cut T-bone steak, grilled to absolute perfection over an open wood fire. Accompanied by roasted rosemary potatoes and a robust Chianti reduction. A true Tuscan masterpiece.',
    image: '/images/signature/bistecca-fiorentina.png'
  },
  {
    title: 'Linguine all\'Astice',
    description: 'Fresh bronze-die linguine tossed with native blue lobster, sweet Datterini tomatoes, garlic, finished with a splash of premium extra virgin olive oil and fresh parsley.',
    image: '/images/signature/linguine-astice.png'
  }
];

export const galleryImages = [
  '/images/gallery/handmade-pasta.png',
  '/images/gallery/restaurant-interior.png',
  '/images/gallery/fresh-ingredients.png',
  '/images/gallery/tiramisu-dessert.png',
  '/images/gallery/wine-bar.png',
  '/images/gallery/table-setting.png'
];

export const testimonialsData = [
  {
    text: "An absolute masterpiece. The flavors transported me straight to Florence. The attention to detail in every dish is simply staggering, and the service is impeccable.",
    author: "Eleanor Vance",
    publication: "The Culinary Review London"
  },
  {
    text: "Rapito redefines modern Italian luxury. From the passionate service to the breathtaking ambiance, it is a dining experience unlike any other in the city.",
    author: "James Montgomery",
    publication: "British Lifestyle Magazine"
  },
  {
    text: "The Bistecca is without peer. A triumphant celebration of rustic Italian traditions elevated to the absolute highest tier of gastronomy.",
    author: "Sophia Laurent",
    publication: "Gastronomy Weekly UK"
  }
];

export const restaurantDetails = {
  address: ['14 Berkeley Square', 'Mayfair, London W1J 6BD'],
  email: 'reservations@rapitolondon.com',
  phone: '+44 (0) 20 7499 9000',
  hours: [
    { days: 'Mon - Thu', time: '17:00 - 22:30' },
    { days: 'Fri - Sat', time: '17:00 - 23:30' },
    { days: 'Sunday', time: '16:00 - 21:00' }
  ]
};
