import { MenuItem, Testimonial } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // ==================== SAMOSAS & CHAAT ====================
  {
    id: 'chicken-samosa',
    name: 'Chicken Samosa',
    category: 'samosas',
    price: 40,
    serving: '6 per plate',
    description: 'Golden, super-crispy pastry pockets packed to the brim with tender, hand-shredded spiced chicken, fresh coriander, green chilies, and aromatic roasted cumin.',
    image: 'https://source.unsplash.com/800x600/?chicken%20samosa%20pakistani%20snack&sig=101',
    badge: 'Popular Favorite',
    popular: true,
    rating: 4.9,
    ingredients: ['Tender Chicken', 'Aromatic Spices', 'Green Coriander', 'Crisp Handcrafted Dough'],
    prepTime: 'Freshly fried in 8 mins'
  },
  {
    id: 'aloo-samosa',
    name: 'Aloo Samosa',
    category: 'samosas',
    price: 25,
    serving: '6 per plate',
    description: 'The authentic timeless classic. Flaky, blistering golden crust stuffed with a savory crushed potato filling spiked with crushed red pepper, pomegranate seeds, and fenugreek.',
    image: 'https://source.unsplash.com/800x600/?aloo%20samosa%20potato%20samosa&sig=102',
    badge: 'Classic Heritage',
    rating: 4.8,
    ingredients: ['Farm Fresh Potatoes', 'Roasted Cumin', 'Whole Coriander Seeds', 'Green Chilies'],
    prepTime: 'Hot & Ready'
  },
  {
    id: 'beef-keema-samosa',
    name: 'Beef Keema Samosa',
    category: 'samosas',
    price: 40,
    serving: '6 per plate',
    description: 'Deeply flavorful, slow-simmered minced beef infused with fragrant garam masala, mint leaves, and caramelized onions, encased in ultra-crisp golden pastry leaves.',
    image: 'https://source.unsplash.com/800x600/?keema%20samosa%20beef%20samosa&sig=103',
    badge: "Chef's Special",
    popular: true,
    rating: 5.0,
    ingredients: ['Prime Minced Beef', 'Fresh Mint', 'Toasted Garam Masala', 'Crispy Pastry Sheet'],
    prepTime: 'Fried to order'
  },
  {
    id: 'sweet-samosa',
    name: 'Sweet Samosa',
    category: 'samosas',
    price: 25,
    serving: '6 per plate',
    description: 'An indulgent dessert treat! Delicate crisp puff pastry brimming with rich sweetened khoya, roasted crushed almonds, pistachios, and aromatic green cardamom.',
    image: 'https://source.unsplash.com/800x600/?sweet%20samosa%20mawa&sig=104',
    badge: 'Sweet Tooth',
    rating: 4.7,
    ingredients: ['Pure Mawa / Khoya', 'Crushed Pistachios', 'Almonds', 'Cardamom Sugar Glaze'],
    prepTime: 'Served warm'
  },
  {
    id: 'chicken-cheese-samosa',
    name: 'Chicken Cheese Samosa',
    category: 'samosas',
    price: 50,
    serving: '6 per plate',
    description: 'Irresistible cheese pull! Succulent spiced chicken blended with molten mozzarella and creamy cheddar cheese, melting delightfully with every crunchy bite.',
    image: 'https://source.unsplash.com/800x600/?cheese%20samosa&sig=105',
    badge: 'Must Try',
    popular: true,
    rating: 4.9,
    ingredients: ['Mozzarella & Cheddar', 'Seasoned Chicken Breast', 'Fresh Herbs', 'Crispy Wonton Crust'],
    prepTime: 'Freshly fried'
  },
  {
    id: 'momos',
    name: 'Momos',
    category: 'samosas',
    price: 40,
    serving: '6 per plate',
    description: 'Handcrafted dumplings wrapped in paper-thin translucent dough, steamed to juicy perfection or crispy fried, served with our fiery signature red chili garlic chutney.',
    image: 'https://source.unsplash.com/800x600/?chicken%20momos%20dumplings&sig=106',
    badge: 'Street Style',
    rating: 4.8,
    ingredients: ['Juicy Savory Filling', 'Ginger & Scallions', 'Sesame Oil Dip', 'Fiery Garlic Sauce'],
    prepTime: 'Freshly steamed / fried'
  },
  {
    id: 'samosa-chaat',
    name: 'Samosa Chaat',
    category: 'samosas',
    price: 40,
    serving: 'serves for 1',
    description: 'Crispy samosa crushed into a bowl and smothered with warm spiced chickpea curry (cholay), chilled sweet yogurt, tangy tamarind chutney, mint sauce, diced red onions, and crunchy sev.',
    image: 'https://source.unsplash.com/800x600/?samosa%20chaat&sig=107',
    badge: 'Karachi Street Icon',
    popular: true,
    rating: 5.0,
    ingredients: ['Hot Samosa', 'Spiced Chickpeas', 'Imli Sauce', 'Mint Dahi', 'Crisp Sev'],
    prepTime: 'Assembled fresh'
  },

  // ==================== ROLLS & SHAWARMA ====================
  {
    id: 'classic-roll',
    name: 'Classic Roll',
    category: 'rolls',
    price: 30,
    serving: '1 large roll',
    description: 'Freshly pan-toasted flaky paratha rolled with seasoned savory vegetable stuffing, tangy onions, chaat masala, and a drizzle of homemade mint-coriander yogurt sauce.',
    image: 'https://source.unsplash.com/800x600/?kathi%20roll%20paratha%20roll&sig=108',
    badge: 'Budget Value',
    rating: 4.7,
    ingredients: ['Crisp Paratha', 'Spiced Veg Filling', 'Pickled Onions', 'Mint Chutney'],
    prepTime: 'Hot off the tawa'
  },
  {
    id: 'cheese-roll',
    name: 'Cheese Roll',
    category: 'rolls',
    price: 50,
    serving: '1 large roll',
    description: 'A decadent treat for cheese lovers! Luscious melted cheddar and mozzarella rolled tightly in hot buttery paratha with a splash of spiced garlic dressing.',
    image: 'https://source.unsplash.com/800x600/?cheese%20paratha%20roll&sig=109',
    badge: 'Cheesy Goodness',
    rating: 4.8,
    ingredients: ['Dual Blend Melted Cheese', 'Butter Crisp Paratha', 'House Herb Spices'],
    prepTime: '5-7 mins'
  },
  {
    id: 'zinger-roll',
    name: 'Zinger Roll',
    category: 'rolls',
    price: 150,
    serving: '1 jumbo roll',
    description: 'A colossal crispy whole chicken breast fillet coated in spicy crunchy batter, wrapped in warm tortilla with fresh shredded lettuce and secret garlic-pepper mayo.',
    image: 'https://source.unsplash.com/800x600/?crispy%20chicken%20zinger%20roll&sig=110',
    badge: 'Crowd Favorite',
    popular: true,
    rating: 4.9,
    ingredients: ['Crispy Zinger Chicken Strips', 'Garlic Mayo', 'Iceberg Lettuce', 'Toasted Wrap'],
    prepTime: '10 mins'
  },
  {
    id: 'zinger-cheese',
    name: 'Zinger Cheese Roll',
    category: 'rolls',
    price: 200,
    serving: '1 jumbo deluxe roll',
    description: 'Double the delight! Extra-crunchy fiery zinger fillet smothered in piping hot melted cheddar cheese sauce, jalapeño mayo, and crisp lettuce rolled to perfection.',
    image: 'https://source.unsplash.com/800x600/?zinger%20cheese%20roll%20wrap&sig=111',
    badge: 'Supreme Loaded',
    popular: true,
    rating: 5.0,
    ingredients: ['Spicy Zinger Fillet', 'Cheddar Cheese Sauce', 'Jalapeño Mayo', 'Flaky Wrap'],
    prepTime: '10 mins'
  },
  {
    id: 'shawarma',
    name: 'Shawarma',
    category: 'rolls',
    price: 220,
    serving: '1 authentic pita wrap',
    description: 'Authentic Middle-Eastern style marinated chicken ribbons roasted slowly on the rotisserie, tossed with crunchy cucumber pickles, french fries, and creamy Lebanese tahini garlic sauce.',
    image: 'https://source.unsplash.com/800x600/?chicken%20shawarma%20wrap&sig=112',
    badge: 'Authentic Roast',
    popular: true,
    rating: 4.9,
    ingredients: ['Rotisserie Roasted Chicken', 'Pickled Gherkins', 'Crisp Fries', 'Creamy Tahini Garlic'],
    prepTime: 'Freshly carved'
  },

  // ==================== COOKIES & BISCUITS ====================
  {
    id: 'chocolate-chip',
    name: 'Chocolate Chip Cookie',
    category: 'cookies',
    price: 80,
    serving: 'Freshly baked pack',
    description: 'Buttery, golden-edged artisanal cookies bursting with rich semisweet Belgian chocolate chips that stay luscious and soft right in the center.',
    image: 'https://source.unsplash.com/800x600/?chocolate%20chip%20cookies&sig=113',
    badge: 'Bestseller',
    popular: true,
    rating: 4.9,
    ingredients: ['Pure Dairy Butter', 'Belgian Chocolate Morsels', 'Brown Sugar', 'Vanilla Extract'],
    prepTime: 'Baked daily'
  },
  {
    id: 'vanilla-biscuit',
    name: 'Vanilla Biscuit',
    category: 'cookies',
    price: 65,
    serving: 'Artisan tea pack',
    description: 'Subtle, crisp, and melt-in-your-mouth shortbread biscuits infused with pure Madagascar vanilla beans. The perfect companion for evening milk chai.',
    image: 'https://source.unsplash.com/800x600/?vanilla%20biscuits&sig=114',
    badge: 'Tea Time Special',
    rating: 4.8,
    ingredients: ['Churned Butter', 'Madagascar Vanilla Bean', 'Flour', 'Fine Caster Sugar'],
    prepTime: 'Daily Fresh'
  },
  {
    id: 'strawberry-delight',
    name: 'Strawberry Delight',
    category: 'cookies',
    price: 70,
    serving: 'Artisan pack',
    description: 'Sweet, fragrant strawberry cream sandwiched between golden crumbly butter biscuits, finished with a delicate dusting of powdered confectioner sugar.',
    image: 'https://source.unsplash.com/800x600/?strawberry%20sandwich%20cookies&sig=115',
    badge: 'Fruity & Sweet',
    rating: 4.7,
    ingredients: ['Strawberry Essence Cream', 'Crisp Butter Wafer', 'Natural Fruit Glaze'],
    prepTime: 'Daily Fresh'
  },
  {
    id: 'fruita-colada',
    name: 'Fruita Colada',
    category: 'cookies',
    price: 70,
    serving: 'Artisan pack',
    description: 'A tropical fiesta! Handcrafted butter cookies studded with candied papaya, pineapple bits, and sweet desiccated coconut flakes for a delightfully crunchy bite.',
    image: 'https://source.unsplash.com/800x600/?tutti%20frutti%20cookies&sig=116',
    badge: 'Unique Flavor',
    rating: 4.8,
    ingredients: ['Candied Tutti-Frutti', 'Fine Coconut Shreds', 'Butter Shortbread'],
    prepTime: 'Daily Fresh'
  },
  {
    id: 'cake-rusk',
    name: 'Cake Rusk',
    category: 'cookies',
    price: 20,
    serving: 'Individual / Pack',
    description: 'The national pride of Pakistani tea tables! Double-baked golden sponge cake dried to crunchy, airy perfection with a touch of aromatic cardamom and butter.',
    image: 'https://source.unsplash.com/800x600/?cake%20rusk%20toast&sig=117',
    badge: 'Chai Lover Essential',
    popular: true,
    rating: 5.0,
    ingredients: ['Double-Baked Sponge', 'Farm Eggs', 'Cardamom', 'Creamery Butter'],
    prepTime: 'Always Available'
  },
  {
    id: 'classic-cookie',
    name: 'Classic Cookie',
    category: 'cookies',
    price: 30,
    serving: 'Freshly baked piece',
    description: 'Old-school bakery style sugar cookie with a crisp scalloped rim and a soft, fragrant crumb infused with gentle bakery vanilla and farm-churned ghee.',
    image: 'https://source.unsplash.com/800x600/?bakery%20sugar%20cookie&sig=118',
    badge: 'Nostalgic',
    rating: 4.7,
    ingredients: ['Fresh Butter', 'Golden Sugar', 'Vanilla Essence', 'Wheat Flour'],
    prepTime: 'Baked daily'
  },
  {
    id: 'brownie',
    name: 'Fudge Brownie',
    category: 'cookies',
    price: 50,
    serving: '1 generous square',
    description: 'Fudgy, dense, and deeply chocolatey square baked with Dutch processed cocoa, melted dark chocolate chips, and that coveted glossy crackly crust on top.',
    image: 'https://source.unsplash.com/800x600/?fudge%20brownie&sig=119',
    badge: 'Chocoholic Dream',
    popular: true,
    rating: 4.9,
    ingredients: ['Dutch Dark Cocoa', 'Melted Semi-Sweet Chocolate', 'Pure Butter', 'Brown Cane Sugar'],
    prepTime: 'Served warm upon request'
  },

  // ==================== CAKES ====================
  {
    id: 'chocolate-cake',
    name: 'Chocolate Fudge Cake',
    category: 'cakes',
    price: 850,
    serving: 'Approx. 1.5 - 2 Lbs',
    description: 'Decadent moist chocolate genoise sponge blanketed in silky smooth Belgian dark chocolate fudge ganache and finished with hand-shaved chocolate curls.',
    image: 'https://source.unsplash.com/800x600/?chocolate%20fudge%20cake&sig=120',
    badge: '#1 Bestseller',
    popular: true,
    rating: 5.0,
    ingredients: ['Dutch Cocoa Sponge', 'Belgian Chocolate Ganache', 'Whipped Cream', 'Chocolate Flakes'],
    prepTime: 'Ready for pickup / delivery'
  },
  {
    id: 'red-velvet-cake',
    name: 'Red Velvet Cake',
    category: 'cakes',
    price: 1100,
    serving: 'Approx. 2 Lbs',
    description: 'Striking crimson velvet cocoa-buttermilk sponge layered luxuriously with rich Philadelphia-style cream cheese frosting and fine red velvet crumbs.',
    image: 'https://source.unsplash.com/800x600/?red%20velvet%20cake&sig=121',
    badge: 'Celebration Premium',
    popular: true,
    rating: 4.9,
    ingredients: ['Buttermilk Crimson Sponge', 'Cream Cheese Frosting', 'Madagascar Vanilla'],
    prepTime: 'Available Daily'
  },
  {
    id: 'mousse-cake',
    name: 'Chocolate Mousse Cake',
    category: 'cakes',
    price: 850,
    serving: 'Approx. 1.5 - 2 Lbs',
    description: 'An airy, feather-light cloud of velvety French chocolate mousse resting upon a moist dark chocolate brownie foundation, crowned with a mirror glaze.',
    image: 'https://source.unsplash.com/800x600/?chocolate%20mousse%20cake&sig=122',
    badge: 'Silky Texture',
    rating: 4.8,
    ingredients: ['Whipped French Mousse', 'Dark Mirror Glaze', 'Dark Chocolate Sponge'],
    prepTime: 'Chilled & Fresh'
  },
  {
    id: 'oreo-cake',
    name: 'Oreo Cookies & Cream Cake',
    category: 'cakes',
    price: 900,
    serving: 'Approx. 2 Lbs',
    description: 'Alternating layers of fluffy vanilla and chocolate sponge loaded with crunchy crushed Oreo cookies, smothered in luscious cookies-and-cream frosting.',
    image: 'https://source.unsplash.com/800x600/?oreo%20cake&sig=123',
    badge: 'Kids & Teens Choice',
    popular: true,
    rating: 4.9,
    ingredients: ['Real Oreo Cookies', 'Vanilla Bean Buttercream', 'Cocoa Sponge', 'Chocolate Drip'],
    prepTime: 'Fresh in showcase'
  },
  {
    id: 'kitkat-cake',
    name: 'KitKat Celebration Cake',
    category: 'cakes',
    price: 1200,
    serving: 'Approx. 2.5 Lbs',
    description: 'A showstopper birthday centerpiece! Moist fudge cake encased completely in crunchy Nestle KitKat fingers, tied with a decorative ribbon and piled high with M&Ms.',
    image: 'https://source.unsplash.com/800x600/?kitkat%20cake&sig=124',
    badge: 'Party Showstopper',
    popular: true,
    rating: 5.0,
    ingredients: ['Nestle KitKat Wafers', 'Rich Chocolate Fudge', 'Party Candies', 'Satin Ribbon'],
    prepTime: 'Freshly assembled'
  },
  {
    id: 'choco-lava-cake',
    name: 'Choco Lava Cake',
    category: 'cakes',
    price: 900,
    serving: 'Party Size / Shared',
    description: 'Warm, gooey ecstasy! Slice into the tender chocolate cake crust to unleash a volcanic stream of molten, warm Belgian chocolate fudge that coats every spoonful.',
    image: 'https://source.unsplash.com/800x600/?chocolate%20lava%20cake&sig=125',
    badge: 'Molten Delight',
    rating: 4.9,
    ingredients: ['Molten Chocolate Core', 'Moist Cake Shell', 'Dark Cocoa Powder'],
    prepTime: 'Best enjoyed warm'
  },
  {
    id: 'coffee-cake',
    name: 'Mocha Coffee Cake',
    category: 'cakes',
    price: 1250,
    serving: 'Approx. 2 Lbs',
    description: 'Crafted for true coffee connoisseurs! Fresh espresso-infused sponge layered with whipped mocha cream, toasted chopped walnuts, and a glossy coffee caramel glaze.',
    image: 'https://source.unsplash.com/800x600/?coffee%20mocha%20cake&sig=126',
    badge: 'Signature Brew',
    rating: 4.8,
    ingredients: ['Roasted Arabica Espresso', 'Mocha Buttercream', 'Candied Walnuts', 'Caramel Drizzle'],
    prepTime: 'Made to order'
  },
  {
    id: 'vanilla-cake',
    name: 'Classic Vanilla Custard Cake',
    category: 'cakes',
    price: 800,
    serving: 'Approx. 1.5 - 2 Lbs',
    description: 'Timeless comfort. Delicate golden vanilla sponge soaked lightly in sweet syrup, layered with smooth Bavarian custard and real vanilla whipped cream rosettes.',
    image: 'https://source.unsplash.com/800x600/?vanilla%20cream%20cake&sig=127',
    badge: 'Classic Elegance',
    rating: 4.8,
    ingredients: ['Pure Bourbon Vanilla', 'Fresh Whipped Cream', 'Soft Golden Sponge', 'Glazed Cherries'],
    prepTime: 'Daily Fresh'
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Delights', count: 27 },
  { id: 'samosas', name: 'Samosas & Chaat', count: 7 },
  { id: 'rolls', name: 'Rolls & Shawarma', count: 5 },
  { id: 'cookies', name: 'Cookies & Biscuits', count: 7 },
  { id: 'cakes', name: 'Artisan Cakes', count: 8 }
];

export const CAKE_FLAVORS = [
  { name: 'Chocolate Fudge', basePrice: 850 },
  { name: 'Red Velvet Cream Cheese', basePrice: 1100 },
  { name: 'Belgian Choco Mousse', basePrice: 850 },
  { name: 'Oreo Cookies & Cream', basePrice: 900 },
  { name: 'KitKat Celebration', basePrice: 1200 },
  { name: 'Molten Choco Lava', basePrice: 900 },
  { name: 'Mocha Coffee Walnut', basePrice: 1250 },
  { name: 'Classic Vanilla Custard', basePrice: 800 },
  { name: 'Lotus Biscoff Crunch', basePrice: 1350 },
  { name: 'Fresh Strawberry / Seasonal', basePrice: 1150 }
];

export const CAKE_SIZES = [
  { label: '1.0 Lbs (4-6 Servings)', multiplier: 1.0, extra: 0 },
  { label: '2.0 Lbs (8-12 Servings)', multiplier: 1.85, extra: 0 },
  { label: '3.0 Lbs (15-18 Servings)', multiplier: 2.7, extra: 100 },
  { label: '4.0 Lbs (20-25 Servings)', multiplier: 3.5, extra: 200 },
  { label: '5.0 Lbs (2-Tier Party Cake)', multiplier: 4.4, extra: 400 }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Faiza Tariq',
    location: 'Gulshan-e-Iqbal, Karachi',
    review: 'SSP Bakers at Lucky One Mall is our family’s go-to spot! The Chicken Cheese Samosas are legendary—crisp shell and the cheesiest pull. Ordered a custom Red Velvet cake for my daughter’s birthday over WhatsApp and it arrived punctual and gorgeous!',
    rating: 5,
    favoriteItem: 'Red Velvet Cake & Samosas',
    date: '2 days ago',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    name: 'Omer Farooq',
    location: 'North Nazimabad, Karachi',
    review: 'Been loving SSP Bakers heritage since my grandfather used to buy from them. The Cake Rusks with evening chai are simply unbeatable, and their Beef Keema Samosa is authentic and bursting with flavor. 10/10 recommendation!',
    rating: 5,
    favoriteItem: 'Cake Rusk & Beef Keema Samosa',
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    name: 'Ayesha Siddiqui',
    location: 'Johar Block 13, Karachi',
    review: 'The WhatsApp ordering feature made planning our office celebration so effortless. We ordered 4 plates of Samosa Chaat and a 3-pound KitKat Cake. Everything was super fresh, warm, and everyone kept asking where we ordered it from.',
    rating: 5,
    favoriteItem: 'KitKat Celebration Cake',
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  }
];
