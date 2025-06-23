import review1 from "../assets/review1.jpeg";
import review2 from "../assets/review2.jpeg";
import review3 from "../assets/review3.avif";
import review4 from "../assets/review4.jpeg";
import review5 from "../assets/review5.jpeg";

const reviews = [
  {
    id: 1,
    name: "Sanaullah.",
    avatar: review1,
    rating: 5,
    review: "The donuts are heavenly! Super fresh, and so many unique flavors."
  },
  {
    id: 2,
    name: "Ali R.",
    avatar: review2,
    rating: 4,
    review: "Loved the vegan options. Service was quick and friendly."
  },
  {
    id: 3,
    name: "Zain.",
    avatar: review3,
    rating: 5,
    review: "Best donut shop in town. The chocolate crunch is my favorite."
  },
  {
    id: 4,
    name: "Fatima.",
    avatar: review4,
    rating: 4,
    review: "Nice ambiance and amazing variety. Highly recommended."
  },
  {
    id: 5,
    name: "Hira S.",
    avatar: review5,
    rating: 5,
    review: "My kids love the colorful donuts! Will order again."
  },
  {
    id: 6,
    name: "Hamza M.",
    avatar: review1, // Reuse if you only have 5 avatars
    rating: 5,
    review: "Efficient delivery and gorgeous presentation. 10/10."
  }
];

export default reviews;