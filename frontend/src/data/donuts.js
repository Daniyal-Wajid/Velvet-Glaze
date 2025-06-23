// Import all 45 images from assets folder
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";
import img17 from "../assets/17.jpg";
import img18 from "../assets/18.jpg";
import img19 from "../assets/19.jpg";
import img20 from "../assets/20.jpg";
import img21 from "../assets/21.jpg";
import img22 from "../assets/22.jpg";
import img23 from "../assets/23.jpg";
import img24 from "../assets/24.jpg";
import img25 from "../assets/25.webp";
import img26 from "../assets/26.webp";
import img27 from "../assets/27.webp";
import img28 from "../assets/28.webp";
import img29 from "../assets/29.webp";
import img30 from "../assets/30.webp";
import img31 from "../assets/31.webp";
import img32 from "../assets/32.webp";
import img33 from "../assets/33.webp";
import img34 from "../assets/34.webp";
import img35 from "../assets/35.webp";
import img36 from "../assets/36.webp";
import img37 from "../assets/37.webp";
import img38 from "../assets/38.webp";
import img39 from "../assets/39.webp";
import img40 from "../assets/40.webp";
import img41 from "../assets/41.webp";
import img42 from "../assets/42.webp";
import img43 from "../assets/43.webp";
import img44 from "../assets/44.webp";
import img45 from "../assets/45.webp";
const donuts = [
  // CLASSIC
  {
    id: 1,
    name: "Classic Glazed",
    description: "Soft, fluffy, and perfectly glazed.",
    price: 2.5,
    category: "Classic",
    image: img1,
    isFeatured: true,
    ingredients: "Wheat, sugar, milk, egg, butter",
    allergens: "Gluten, dairy, egg",
    nutrition: "220 kcal"
  },
  {
    id: 2,
    name: "Old Fashioned",
    description: "A classic treat with a crispy edge.",
    price: 2.0,
    category: "Classic",
    image: img2,
    isFeatured: false,
    ingredients: "Wheat, sugar, egg, butter",
    allergens: "Gluten, egg, dairy",
    nutrition: "210 kcal"
  },
  {
    id: 3,
    name: "Sugar Ring",
    description: "Coated in fine sweet sugar.",
    price: 2.2,
    category: "Classic",
    image: img3,
    isFeatured: false,
    ingredients: "Wheat, sugar, milk, butter",
    allergens: "Gluten, dairy",
    nutrition: "200 kcal"
  },
  {
    id: 4,
    name: "Chocolate Iced",
    description: "Topped with chocolate glaze.",
    price: 2.7,
    category: "Classic",
    image: img4,
    isFeatured: true,
    ingredients: "Wheat, cocoa, sugar, milk",
    allergens: "Gluten, dairy",
    nutrition: "230 kcal"
  },
  {
    id: 5,
    name: "Vanilla Sprinkles",
    description: "With colorful sprinkles and vanilla glaze.",
    price: 2.8,
    category: "Classic",
    image: img5,
    isFeatured: false,
    ingredients: "Wheat, sugar, milk, butter, vanilla",
    allergens: "Gluten, dairy",
    nutrition: "225 kcal"
  },
  {
    id: 6,
    name: "Powdered Sugar",
    description: "Fluffy donut dusted with powdered sugar.",
    price: 2.0,
    category: "Classic",
    image: img6,
    isFeatured: false,
    ingredients: "Wheat, sugar, milk",
    allergens: "Gluten, dairy",
    nutrition: "210 kcal"
  },
  {
    id: 7,
    name: "Cinnamon Twist",
    description: "Twisted donut with cinnamon sugar.",
    price: 2.3,
    category: "Classic",
    image: img7,
    isFeatured: false,
    ingredients: "Wheat, cinnamon, sugar, butter",
    allergens: "Gluten, dairy",
    nutrition: "230 kcal"
  },
  {
    id: 8,
    name: "Honey Dip",
    description: "Sweet honey-glazed donut.",
    price: 2.6,
    category: "Classic",
    image: img8,
    isFeatured: false,
    ingredients: "Wheat, honey, sugar, butter",
    allergens: "Gluten, dairy",
    nutrition: "215 kcal"
  },
  {
    id: 9,
    name: "Maple Ring",
    description: "Classic donut with maple glaze.",
    price: 2.7,
    category: "Classic",
    image: img9,
    isFeatured: false,
    ingredients: "Wheat, sugar, milk, maple syrup",
    allergens: "Gluten, dairy",
    nutrition: "230 kcal"
  },

  // PREMIUM
  {
    id: 10,
    name: "Premium Chocolate Crunch",
    description: "Rich chocolate donut topped with crunchy bits.",
    price: 3.2,
    category: "Premium",
    image: img10,
    isFeatured: true,
    ingredients: "Wheat, cocoa, sugar, milk, butter",
    allergens: "Gluten, dairy",
    nutrition: "280 kcal"
  },
  {
    id: 11,
    name: "Salted Caramel Deluxe",
    description: "Salted caramel glaze with caramel pieces.",
    price: 3.5,
    category: "Premium",
    image: img11,
    isFeatured: false,
    ingredients: "Wheat, caramel, sugar, milk, salt",
    allergens: "Gluten, dairy",
    nutrition: "290 kcal"
  },
  {
    id: 12,
    name: "White Chocolate Dream",
    description: "White chocolate glaze with flakes.",
    price: 3.3,
    category: "Premium",
    image: img12,
    isFeatured: true,
    ingredients: "Wheat, white chocolate, sugar, milk",
    allergens: "Gluten, dairy",
    nutrition: "275 kcal"
  },
  {
    id: 13,
    name: "Mocha Bliss",
    description: "Coffee-flavored donut with mocha glaze.",
    price: 3.4,
    category: "Premium",
    image: img13,
    isFeatured: false,
    ingredients: "Wheat, coffee, cocoa, sugar",
    allergens: "Gluten",
    nutrition: "260 kcal"
  },
  {
    id: 14,
    name: "Nutty Surprise",
    description: "Loaded with roasted nuts.",
    price: 3.6,
    category: "Premium",
    image: img14,
    isFeatured: false,
    ingredients: "Wheat, nuts, sugar, milk",
    allergens: "Gluten, nuts, dairy",
    nutrition: "295 kcal"
  },
  {
    id: 15,
    name: "Red Velvet",
    description: "Classic red velvet with cream cheese icing.",
    price: 3.8,
    category: "Premium",
    image: img15,
    isFeatured: true,
    ingredients: "Wheat, egg, cocoa, sugar, cream cheese",
    allergens: "Gluten, egg, dairy",
    nutrition: "310 kcal"
  },
  {
    id: 16,
    name: "Tiramisu",
    description: "Inspired by the famous dessert.",
    price: 3.7,
    category: "Premium",
    image: img16,
    isFeatured: false,
    ingredients: "Wheat, cocoa, coffee, mascarpone, sugar",
    allergens: "Gluten, dairy",
    nutrition: "305 kcal"
  },
  {
    id: 17,
    name: "Strawberry Cheesecake",
    description: "Strawberry glaze and cream cheese filling.",
    price: 3.9,
    category: "Premium",
    image: img17,
    isFeatured: false,
    ingredients: "Wheat, strawberry, cream cheese, sugar",
    allergens: "Gluten, dairy",
    nutrition: "315 kcal"
  },
  {
    id: 18,
    name: "Cookies & Cream",
    description: "Chocolate donut with cookie crumble.",
    price: 3.5,
    category: "Premium",
    image: img18,
    isFeatured: false,
    ingredients: "Wheat, cocoa, cookie crumbs, sugar",
    allergens: "Gluten",
    nutrition: "285 kcal"
  },

  // VEGAN
  {
    id: 19,
    name: "Vegan Raspberry Bliss",
    description: "Vegan donut with raspberry glaze.",
    price: 3.0,
    category: "Vegan",
    image: img19,
    isFeatured: false,
    ingredients: "Wheat, raspberry, coconut oil, almond milk",
    allergens: "Gluten, nuts",
    nutrition: "210 kcal"
  },
  {
    id: 20,
    name: "Vegan Choco Fudge",
    description: "Rich vegan chocolate fudge donut.",
    price: 3.2,
    category: "Vegan",
    image: img20,
    isFeatured: false,
    ingredients: "Wheat, cocoa, coconut oil, almond milk",
    allergens: "Gluten, nuts",
    nutrition: "220 kcal"
  },
  {
    id: 21,
    name: "Vegan Lemon Zest",
    description: "Tangy vegan lemon glazed donut.",
    price: 3.0,
    category: "Vegan",
    image: img21,
    isFeatured: false,
    ingredients: "Wheat, lemon, coconut oil, almond milk",
    allergens: "Gluten, nuts",
    nutrition: "200 kcal"
  },
  {
    id: 22,
    name: "Vegan Peanut Butter",
    description: "Peanut butter glaze and filling.",
    price: 3.2,
    category: "Vegan",
    image: img22,
    isFeatured: false,
    ingredients: "Wheat, peanut butter, almond milk",
    allergens: "Gluten, nuts",
    nutrition: "230 kcal"
  },
  {
    id: 23,
    name: "Vegan Maple",
    description: "Vegan maple glazed donut.",
    price: 3.1,
    category: "Vegan",
    image: img23,
    isFeatured: false,
    ingredients: "Wheat, maple syrup, coconut oil",
    allergens: "Gluten",
    nutrition: "210 kcal"
  },
  {
    id: 24,
    name: "Vegan Vanilla Sprinkle",
    description: "Vegan donut with sprinkles.",
    price: 3.1,
    category: "Vegan",
    image: img24,
    isFeatured: false,
    ingredients: "Wheat, coconut oil, almond milk, sprinkles",
    allergens: "Gluten, nuts",
    nutrition: "220 kcal"
  },
  {
    id: 25,
    name: "Vegan Blueberry",
    description: "Blueberry glaze and bits.",
    price: 3.2,
    category: "Vegan",
    image: img25,
    isFeatured: false,
    ingredients: "Wheat, blueberry, coconut oil",
    allergens: "Gluten",
    nutrition: "215 kcal"
  },
  {
    id: 26,
    name: "Vegan Apple Cinnamon",
    description: "Apple and cinnamon vegan donut.",
    price: 3.1,
    category: "Vegan",
    image: img26,
    isFeatured: false,
    ingredients: "Wheat, apple, cinnamon, coconut oil",
    allergens: "Gluten",
    nutrition: "215 kcal"
  },
  {
    id: 27,
    name: "Vegan Chocolate Coconut",
    description: "Chocolate donut with coconut.",
    price: 3.3,
    category: "Vegan",
    image: img27,
    isFeatured: false,
    ingredients: "Wheat, cocoa, coconut, coconut oil",
    allergens: "Gluten",
    nutrition: "225 kcal"
  },

  // GLAZED
  {
    id: 28,
    name: "Glazed Lemon Zest",
    description: "Tangy lemon glaze on a soft donut.",
    price: 2.9,
    category: "Glazed",
    image: img28,
    isFeatured: true,
    ingredients: "Wheat, sugar, lemon, milk, butter",
    allergens: "Gluten, dairy",
    nutrition: "225 kcal"
  },
  {
    id: 29,
    name: "Glazed Chocolate",
    description: "Sweet chocolate glazed donut.",
    price: 2.8,
    category: "Glazed",
    image: img29,
    isFeatured: false,
    ingredients: "Wheat, cocoa, sugar, milk",
    allergens: "Gluten, dairy",
    nutrition: "230 kcal"
  },
  {
    id: 30,
    name: "Glazed Strawberry",
    description: "Strawberry glaze and drizzle.",
    price: 2.9,
    category: "Glazed",
    image: img30,
    isFeatured: false,
    ingredients: "Wheat, strawberry, sugar, milk",
    allergens: "Gluten, dairy",
    nutrition: "220 kcal"
  },
  {
    id: 31,
    name: "Glazed Coconut",
    description: "Coconut glaze and shreds.",
    price: 3.0,
    category: "Glazed",
    image: img31,
    isFeatured: false,
    ingredients: "Wheat, coconut, sugar, milk",
    allergens: "Gluten, dairy",
    nutrition: "225 kcal"
  },
  {
    id: 32,
    name: "Glazed Pistachio",
    description: "Pistachio glaze and bits.",
    price: 3.1,
    category: "Glazed",
    image: img32,
    isFeatured: false,
    ingredients: "Wheat, pistachio, sugar, milk",
    allergens: "Gluten, dairy, nuts",
    nutrition: "235 kcal"
  },
  {
    id: 33,
    name: "Glazed Blueberry",
    description: "Blueberry glaze and drizzle.",
    price: 3.0,
    category: "Glazed",
    image: img33,
    isFeatured: false,
    ingredients: "Wheat, blueberry, sugar, milk",
    allergens: "Gluten, dairy",
    nutrition: "220 kcal"
  },
  {
    id: 34,
    name: "Glazed Caramel",
    description: "Caramel glaze on soft donut.",
    price: 3.1,
    category: "Glazed",
    image: img34,
    isFeatured: false,
    ingredients: "Wheat, caramel, sugar, milk",
    allergens: "Gluten, dairy",
    nutrition: "230 kcal"
  },
  {
    id: 35,
    name: "Glazed Almond",
    description: "Almond glaze and slices.",
    price: 3.2,
    category: "Glazed",
    image: img35,
    isFeatured: false,
    ingredients: "Wheat, almond, sugar, milk",
    allergens: "Gluten, dairy, nuts",
    nutrition: "240 kcal"
  },
  {
    id: 36,
    name: "Glazed Funfetti",
    description: "Funfetti glaze and sprinkles.",
    price: 2.9,
    category: "Glazed",
    image: img36,
    isFeatured: false,
    ingredients: "Wheat, sugar, milk, sprinkles",
    allergens: "Gluten, dairy",
    nutrition: "225 kcal"
  },

  // FILLED
  {
    id: 37,
    name: "Filled Custard Delight",
    description: "Donut filled with creamy custard.",
    price: 3.0,
    category: "Filled",
    image: img37,
    isFeatured: true,
    ingredients: "Wheat, milk, egg, sugar, vanilla",
    allergens: "Gluten, dairy, egg",
    nutrition: "260 kcal"
  },
  {
    id: 38,
    name: "Filled Strawberry Jam",
    description: "Jam-filled donut dusted with sugar.",
    price: 3.0,
    category: "Filled",
    image: img38,
    isFeatured: false,
    ingredients: "Wheat, strawberry, sugar, milk",
    allergens: "Gluten, dairy",
    nutrition: "245 kcal"
  },
  {
    id: 39,
    name: "Filled Chocolate Cream",
    description: "Chocolate cream filled donut.",
    price: 3.2,
    category: "Filled",
    image: img39,
    isFeatured: false,
    ingredients: "Wheat, cocoa, milk, sugar",
    allergens: "Gluten, dairy",
    nutrition: "255 kcal"
  },
  {
    id: 40,
    name: "Filled Lemon Curd",
    description: "Lemon curd filling and glaze.",
    price: 3.1,
    category: "Filled",
    image: img40,
    isFeatured: false,
    ingredients: "Wheat, lemon, egg, sugar",
    allergens: "Gluten, egg",
    nutrition: "240 kcal"
  },
  {
    id: 41,
    name: "Filled Apple Pie",
    description: "Apple pie filling and cinnamon dust.",
    price: 3.3,
    category: "Filled",
    image: img41,
    isFeatured: false,
    ingredients: "Wheat, apple, cinnamon, sugar",
    allergens: "Gluten",
    nutrition: "255 kcal"
  },
  {
    id: 42,
    name: "Filled Nutella",
    description: "Hazelnut chocolate spread filling.",
    price: 3.5,
    category: "Filled",
    image: img42,
    isFeatured: true,
    ingredients: "Wheat, hazelnut, cocoa, sugar",
    allergens: "Gluten, nuts",
    nutrition: "270 kcal"
  },
  {
    id: 43,
    name: "Filled Raspberry",
    description: "Raspberry jam filling.",
    price: 3.2,
    category: "Filled",
    image: img43,
    isFeatured: false,
    ingredients: "Wheat, raspberry, sugar, milk",
    allergens: "Gluten, dairy",
    nutrition: "245 kcal"
  },
  {
    id: 44,
    name: "Filled Peanut Butter",
    description: "Creamy peanut butter filling.",
    price: 3.4,
    category: "Filled",
    image: img44,
    isFeatured: false,
    ingredients: "Wheat, peanut butter, sugar",
    allergens: "Gluten, nuts",
    nutrition: "265 kcal"
  },
  {
    id: 45,
    name: "Filled Boston Cream",
    description: "Vanilla custard and chocolate glaze.",
    price: 3.6,
    category: "Filled",
    image: img45,
    isFeatured: true,
    ingredients: "Wheat, milk, egg, cocoa, sugar",
    allergens: "Gluten, dairy, egg",
    nutrition: "285 kcal"
  }
];

export default donuts;