const products = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    category: "new-arrivals",
    images: ["/images/cart-1.png", "/images/cart-1.png", "/images/cart-1.png"],
    rating: 4.5,
    ratingCount: 112,
    price: 120,
    originalPrice: null,
    description:
      "A clean, everyday t-shirt with a taped shoulder seam for a sporty, structured look. Soft cotton jersey keeps it breathable.",
    breadcrumbs: ["Home", "New Arrivals", "T-shirt with Tape Details"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#111111" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Owen T.",
        rating: 5,
        text: "Great everyday tee, fits true to size.",
        date: "August 10, 2026",
      },
    ],
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    category: "new-arrivals",
    images: ["/images/cart-2.png", "/images/cart-2.png", "/images/cart-2.png"],
    rating: 3.5,
    ratingCount: 87,
    price: 240,
    originalPrice: 260,
    description:
      "Skinny fit jeans with a slight stretch for comfort and movement. A wardrobe staple that pairs with everything.",
    breadcrumbs: ["Home", "New Arrivals", "Skinny Fit Jeans"],
    colors: [
      { name: "Blue", hex: "#3B5998" },
      { name: "Black", hex: "#111111" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Jordan P.",
        rating: 4,
        text: "Comfortable stretch and holds shape well.",
        date: "August 1, 2026",
      },
    ],
  },
  {
    id: 3,
    name: "Checkered Shirt",
    category: "new-arrivals",
    images: ["/images/cart-3.png", "/images/cart-3.png", "/images/cart-3.png"],
    rating: 4.5,
    ratingCount: 143,
    price: 180,
    originalPrice: null,
    description:
      "A timeless checkered shirt made from soft flannel fabric, great for casual outings or layering.",
    breadcrumbs: ["Home", "New Arrivals", "Checkered Shirt"],
    colors: [
      { name: "Red", hex: "#B91C1C" },
      { name: "Navy", hex: "#1E3A8A" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Chris L.",
        rating: 4,
        text: "Warm and well-stitched, good buy.",
        date: "July 20, 2026",
      },
    ],
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    category: "new-arrivals",
    images: ["/images/cart-4.png", "/images/cart-4.png", "/images/cart-4.png"],
    rating: 4.5,
    ratingCount: 76,
    price: 130,
    originalPrice: 160,
    description:
      "A sporty striped-sleeve t-shirt with a contrast collar, made from breathable cotton jersey.",
    breadcrumbs: ["Home", "New Arrivals", "Sleeve Striped T-shirt"],
    colors: [
      { name: "Orange/Black", hex: "#F97316" },
      { name: "Grey/Black", hex: "#6B7280" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Riya M.",
        rating: 5,
        text: "Love the color combo, fits true to size.",
        date: "August 5, 2026",
      },
    ],
  },

  
  {
    id: 10,
    name: "Vertical Striped Shirt",
    category: "top-selling",
    images: ["/images/cart-5.png", "/images/cart-5.png", "/images/cart-5.png"],
    rating: 5.0,
    ratingCount: 189,
    price: 212,
    originalPrice: 232,
    description:
      "A relaxed-fit vertical striped shirt with a button-down front, perfect for smart-casual looks.",
    breadcrumbs: ["Home", "Top Selling", "Vertical Striped Shirt"],
    colors: [
      { name: "Green", hex: "#556B2F" },
      { name: "Beige", hex: "#D8CAB8" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Noah F.",
        rating: 5,
        text: "Excellent quality fabric, fits great.",
        date: "August 14, 2026",
      },
    ],
  },
  {
    id: 11,
    name: "Courage Graphic T-shirt",
    category: "top-selling",
    images: ["/images/cart-6.png", "/images/cart-6.png", "/images/cart-6.png"],
    rating: 4.0,
    ratingCount: 64,
    price: 145,
    originalPrice: null,
    description:
      "A bold graphic tee with a statement print, made from 100% combed cotton for a soft feel.",
    breadcrumbs: ["Home", "Top Selling", "Courage Graphic T-shirt"],
    colors: [
      { name: "Orange", hex: "#F97316" },
      { name: "White", hex: "#FFFFFF" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Zara H.",
        rating: 4,
        text: "Cool print, washes well without fading.",
        date: "July 22, 2026",
      },
    ],
  },
  {
    id: 12,
    name: "Loose Fit Bermuda Shorts",
    category: "top-selling",
    images: ["/images/cart-7.png", "/images/cart-7.png", "/images/cart-7.png"],
    rating: 4.5,
    ratingCount: 41,
    price: 80,
    originalPrice: null,
    description:
      "Loose fit bermuda shorts in durable denim, with a relaxed silhouette for warm-weather comfort.",
    breadcrumbs: ["Home", "Top Selling", "Loose Fit Bermuda Shorts"],
    colors: [
      { name: "Blue", hex: "#3B5998" },
      { name: "Black", hex: "#111111" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Leo B.",
        rating: 3,
        text: "Good for summer, sizing runs a bit big.",
        date: "August 2, 2026",
      },
    ],
  },
  {
    id: 13,
    name: "Faded Skinny Jeans",
    category: "top-selling",
    images: ["/images/cart-8.png", "/images/cart-8.png", "/images/cart-8.png"],
    rating: 4.5,
    ratingCount: 58,
    price: 210,
    originalPrice: null,
    description:
      "Faded-wash skinny jeans with a comfortable stretch fit, finished with a classic five-pocket cut.",
    breadcrumbs: ["Home", "Top Selling", "Faded Skinny Jeans"],
    colors: [
      { name: "Light Blue", hex: "#9CB4CC" },
      { name: "Black", hex: "#111111" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Mason G.",
        rating: 5,
        text: "Great fade, fits exactly as expected.",
        date: "August 6, 2026",
      },
    ],
  },

  
  {
    id: 20,
    name: "Gradient Graphic T-shirt",
    category: "casual",
    images: [
      "/images/cart-9.png",
      "/images/cart-9.png",
      "/images/cart-9.png",
    ],
    rating: 3.5,
    ratingCount: 128,
    price: 145,
    originalPrice: null,
    description:
      "This graphic t-shirt is perfect for any occasion. Crafted from a soft, breathable fabric, it features a vibrant gradient print that keeps it comfortable and stylish.",
    breadcrumbs: ["Home", "Casual", "Gradient Graphic T-shirt"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#111111" },
      { name: "Teal", hex: "#0D9488" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Alex R.",
        rating: 4,
        text: "Great fit and the print quality is excellent.",
        date: "August 12, 2026",
      },
      {
        id: 2,
        name: "Priya S.",
        rating: 3,
        text: "Nice shirt, runs slightly large.",
        date: "August 3, 2026",
      },
    ],
  },
  {
    id: 21,
    name: "Polo with Tipping Details",
    category: "casual",
    images: [
      "/images/cart-10.png",
      "/images/cart-10.png",
      "/images/cart-10.png",
    ],
    rating: 4.5,
    ratingCount: 96,
    price: 180,
    originalPrice: null,
    description:
      "A classic polo shirt with contrast tipping on the collar and sleeves. Made from breathable pique cotton for all-day comfort.",
    breadcrumbs: ["Home", "Casual", "Polo with Tipping Details"],
    colors: [
      { name: "Mauve", hex: "#B5717A" },
      { name: "Navy", hex: "#1E3A8A" },
      { name: "Olive", hex: "#556B2F" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Daniel K.",
        rating: 5,
        text: "Fits perfectly and the fabric feels premium.",
        date: "July 28, 2026",
      },
    ],
  },
  {
    id: 22,
    name: "Black Striped T-shirt",
    category: "casual",
    images: [
      "/images/cart-11.png",
      "/images/cart-11.png",
      "/images/cart-11.png",
    ],
    rating: 5.0,
    ratingCount: 210,
    price: 120,
    originalPrice: 160,
    description:
      "A raglan-sleeve striped t-shirt with a relaxed fit, perfect for layering or wearing on its own.",
    breadcrumbs: ["Home", "Casual", "Black Striped T-shirt"],
    colors: [
      { name: "Black/White", hex: "#111111" },
      { name: "Orange/Black", hex: "#F97316" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Mia T.",
        rating: 5,
        text: "Best t-shirt I've bought this year.",
        date: "August 9, 2026",
      },
      {
        id: 2,
        name: "Sam O.",
        rating: 5,
        text: "Great stripes, true to size.",
        date: "July 30, 2026",
      },
    ],
  },
  {
    id: 23,
    name: "Skinny Fit Jeans",
    category: "casual",
    images: [
      "/images/cart-2.png",
      "/images/cart-2.png",
      "/images/cart-2.png",
    ],
    rating: 3.5,
    ratingCount: 87,
    price: 240,
    originalPrice: 260,
    description:
      "Skinny fit jeans with a slight stretch for comfort and movement. A wardrobe staple that pairs with everything.",
    breadcrumbs: ["Home", "Casual", "Skinny Fit Jeans"],
    colors: [
      { name: "Blue", hex: "#3B5998" },
      { name: "Black", hex: "#111111" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Jordan P.",
        rating: 4,
        text: "Comfortable stretch and holds shape well.",
        date: "August 1, 2026",
      },
    ],
  },
  {
    id: 24,
    name: "Checkered Shirt",
    category: "casual",
    images: [
      "/images/cart-3.png",
      "/images/cart-3.png",
      "/images/cart-3.png",
    ],
    rating: 4.5,
    ratingCount: 143,
    price: 180,
    originalPrice: null,
    description:
      "A timeless checkered shirt made from soft flannel fabric, great for casual outings or layering.",
    breadcrumbs: ["Home", "Casual", "Checkered Shirt"],
    colors: [
      { name: "Red", hex: "#B91C1C" },
      { name: "Navy", hex: "#1E3A8A" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Chris L.",
        rating: 4,
        text: "Warm and well-stitched, good buy.",
        date: "July 20, 2026",
      },
    ],
  },
  {
    id: 25,
    name: "Sleeve Striped T-shirt",
    category: "casual",
    images: [
      "/images/cart-4.png",
      "/images/cart-4.png",
      "/images/cart-4.png",
    ],
    rating: 4.5,
    ratingCount: 76,
    price: 130,
    originalPrice: 160,
    description:
      "A sporty striped-sleeve t-shirt with a contrast collar, made from breathable cotton jersey.",
    breadcrumbs: ["Home", "Casual", "Sleeve Striped T-shirt"],
    colors: [
      { name: "Orange/Black", hex: "#F97316" },
      { name: "Grey/Black", hex: "#6B7280" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Riya M.",
        rating: 5,
        text: "Love the color combo, fits true to size.",
        date: "August 5, 2026",
      },
    ],
  },
  {
    id: 26,
    name: "Vertical Striped Shirt",
    category: "casual",
    images: [
      "/images/cart-5.png",
      "/images/cart-5.png",
      "/images/cart-5.png",
    ],
    rating: 5.0,
    ratingCount: 189,
    price: 212,
    originalPrice: 232,
    description:
      "A relaxed-fit vertical striped shirt with a button-down front, perfect for smart-casual looks.",
    breadcrumbs: ["Home", "Casual", "Vertical Striped Shirt"],
    colors: [
      { name: "Green", hex: "#556B2F" },
      { name: "Beige", hex: "#D8CAB8" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Noah F.",
        rating: 5,
        text: "Excellent quality fabric, fits great.",
        date: "August 14, 2026",
      },
    ],
  },
  {
    id: 27,
    name: "Courage Graphic T-shirt",
    category: "casual",
    images: [
      "/images/cart-6.png",
      "/images/cart-6.png",
      "/images/cart-6.png",
    ],
    rating: 4.0,
    ratingCount: 64,
    price: 145,
    originalPrice: null,
    description:
      "A bold graphic tee with a statement print, made from 100% combed cotton for a soft feel.",
    breadcrumbs: ["Home", "Casual", "Courage Graphic T-shirt"],
    colors: [
      { name: "Orange", hex: "#F97316" },
      { name: "White", hex: "#FFFFFF" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Zara H.",
        rating: 4,
        text: "Cool print, washes well without fading.",
        date: "July 22, 2026",
      },
    ],
  },
  {
    id: 28,
    name: "Loose Fit Bermuda Shorts",
    category: "casual",
    images: [
      "/images/cart-7.png",
      "/images/cart-7.png",
      "/images/cart-7.png",
    ],
    rating: 3.0,
    ratingCount: 41,
    price: 80,
    originalPrice: null,
    description:
      "Loose fit bermuda shorts in durable denim, with a relaxed silhouette for warm-weather comfort.",
    breadcrumbs: ["Home", "Casual", "Loose Fit Bermuda Shorts"],
    colors: [
      { name: "Blue", hex: "#3B5998" },
      { name: "Black", hex: "#111111" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        name: "Leo B.",
        rating: 3,
        text: "Good for summer, sizing runs a bit big.",
        date: "August 2, 2026",
      },
    ],
  },
];

export default products;