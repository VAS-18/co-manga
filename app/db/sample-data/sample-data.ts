const sampleData = {
  products: [
    {
      name: "One Piece, Vol. 1",
      slug: "one-piece-vol-1",
      category: "Manga",
      description:
        "Follow Monkey D. Luffy as he sets out to become the Pirate King!",
      images: [
        "/image/sample-products/one-piece-1.jpg",
        "/image/sample-products/one-piece-2.jpg",
      ],
      price: 999, // ₹999.00
      brand: "Shonen Jump",
      rating: 4.8,
      numReviews: 1200,
      stock: 0,
      isFeatured: true,
      banner: "banner-one-piece.jpg",
    },
    {
      name: "Naruto, Vol. 1",
      slug: "naruto-vol-1",
      category: "Manga",
      description:
        "The journey of Naruto Uzumaki, a young ninja seeking recognition.",
      images: [
        "/image/sample-products/naruto-1.jpg",
        "/image/sample-products/naruto-2.jpg",
      ],
      price: 999, // ₹999.00
      brand: "Shonen Jump",
      rating: 4.7,
      numReviews: 1100,
      stock: 20,
      isFeatured: true,
      banner: "banner-naruto.jpg",
    },
    {
      name: "Attack on Titan, Vol. 1",
      slug: "attack-on-titan-vol-1",
      category: "Manga",
      description: "Humanity fights for survival against terrifying giants.",
      images: [
        "/image/sample-products/aot-1.jpg",
        "/image/sample-products/aot-2.jpg",
      ],
      price: 1099, // ₹1,099.00
      brand: "Kodansha Comics",
      rating: 4.9,
      numReviews: 1400,
      stock: 10,
      isFeatured: true,
      banner: "banner-aot.jpg",
    },
    {
      name: "My Hero Academia, Vol. 1",
      slug: "my-hero-academia-vol-1",
      category: "Manga",
      description:
        "Izuku Midoriya dreams of becoming a hero in a world full of powers.",
      images: [
        "/image/sample-products/mha-1.jpg",
        "/image/sample-products/mha-2.jpg",
      ],
      price: 999, // ₹999.00
      brand: "Shonen Jump",
      rating: 4.6,
      numReviews: 900,
      stock: 18,
      isFeatured: false,
      banner: "banner-mha.jpg",
    },
    {
      name: "Demon Slayer, Vol. 1",
      slug: "demon-slayer-vol-1",
      category: "Manga",
      description: "A young boy fights demons to save his sister.",
      images: [
        "/image/sample-products/ds-1.jpg",
        "/image/sample-products/ds-2.jpg",
      ],
      price: 1099, // ₹1,099.00
      brand: "Shonen Jump",
      rating: 4.8,
      numReviews: 1000,
      stock: 12,
      isFeatured: false,
      banner: "banner-ds.jpg",
    },
    {
      name: "Dragon Ball, Vol. 1",
      slug: "dragon-ball-vol-1",
      category: "Manga",
      description:
        "Follow Goku’s adventures from childhood to becoming a martial arts legend.",
      images: [
        "/image/sample-products/db-1.jpg",
        "/image/sample-products/db-2.jpg",
      ],
      price: 999, // ₹999.00
      brand: "Shonen Jump",
      rating: 4.7,
      numReviews: 1300,
      stock: 14,
      isFeatured: false,
      banner: "banner-db.jpg",
    },
    {
      name: "Death Note, Vol. 1",
      slug: "death-note-vol-1",
      category: "Manga",
      description:
        "A high school student finds a notebook that lets him control life and death.",
      images: [
        "/image/sample-products/dn-1.jpg",
        "/image/sample-products/dn-2.jpg",
      ],
      price: 999, // ₹999.00
      brand: "Shonen Jump",
      rating: 4.9,
      numReviews: 1250,
      stock: 10,
      isFeatured: false,
      banner: "banner-dn.jpg",
    },
    {
      name: "Fullmetal Alchemist, Vol. 1",
      slug: "fullmetal-alchemist-vol-1",
      category: "Manga",
      description:
        "Two brothers search for the Philosopher’s Stone to restore their bodies.",
      images: [
        "/image/sample-products/fma-1.jpg",
        "/image/sample-products/fma-2.jpg",
      ],
      price: 1199, // ₹1,199.00
      brand: "Viz Media",
      rating: 4.8,
      numReviews: 1100,
      stock: 8,
      isFeatured: false,
      banner: "banner-fma.jpg",
    },
    {
      name: "Berserk, Vol. 1",
      slug: "berserk-vol-1",
      category: "Manga",
      description:
        "A dark fantasy following the mercenary Guts in his brutal quest for revenge.",
      images: [
        "/image/sample-products/berserk-1.jpg",
        "/image/sample-products/berserk-2.jpg",
      ],
      price: 1499, // ₹1,499.00
      brand: "Dark Horse Comics",
      rating: 4.9,
      numReviews: 1600,
      stock: 6,
      isFeatured: false,
      banner: "banner-berserk.jpg",
    },
    {
      name: "The Amazing Spider-Man, Vol. 1",
      slug: "amazing-spider-man-vol-1",
      category: "Comic Book",
      description:
        "Peter Parker gains spider-like abilities and fights crime as Spider-Man.",
      images: [
        "/image/sample-products/spiderman-1.jpg",
        "/image/sample-products/spiderman-2.jpg",
      ],
      price: 1299, // ₹1,299.00
      brand: "Marvel Comics",
      rating: 4.7,
      numReviews: 950,
      stock: 10,
      isFeatured: false,
      banner: "banner-spiderman.jpg",
    },
    {
      name: "Batman: Year One",
      slug: "batman-year-one",
      category: "Comic Book",
      description: "The origin of Batman as he begins his fight against crime in Gotham.",
      images: [
        "/image/sample-products/batman-1.jpg",
        "/image/sample-products/batman-2.jpg",
      ],
      price: 1399,
      brand: "DC Comics",
      rating: 4.8,
      numReviews: 1000,
      stock: 8,
      isFeatured: false,
      banner: null, 
    },

    {
      name: "X-Men: Days of Future Past",
      slug: "x-men-days-of-future-past",
      category: "Comic Book",
      description:
        "The X-Men fight to prevent a dystopian future where mutants are hunted.",
      images: [
        "/image/sample-products/xmen-1.jpg",
        "/image/sample-products/xmen-2.jpg",
      ],
      price: 1499,
      brand: "Marvel Comics",
      rating: 4.9,
      numReviews: 1100,
      stock: 7,
      isFeatured: false,
      banner: "banner-xmen.jpg",
    },
  ],
};

export default sampleData;
