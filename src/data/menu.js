import spaghetti from "../assets/images/dish-spaghetti.jpg";
import gnocchi from "../assets/images/dish-gnocchi.jpg";
import ravioli from "../assets/images/dish-ravioli.jpg";
import penne from "../assets/images/dish-penne.jpg";
import risotto from "../assets/images/dish-risotto.jpg";
import pizza from "../assets/images/dish-pizza.jpg";

export const categories = ["All category", "Dinner", "Lunch", "Dessert", "Drink"];

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.";

const baseDishes = [
  { id: "spaghetti", name: "Spaghetti", image: spaghetti, tags: ["Dinner", "Lunch"] },
  { id: "gnocchi", name: "Gnocchi", image: gnocchi, tags: ["Dinner"] },
  { id: "ravioli", name: "Ravioli", image: ravioli, tags: ["Dinner", "Lunch"] },
  { id: "penne", name: "Penne Alla Vodka", image: penne, tags: ["Lunch"] },
  { id: "risotto", name: "Risotto", image: risotto, tags: ["Dinner"] },
  { id: "splitza", name: "Splitza Signature", image: pizza, tags: ["Dinner", "Lunch"] },
];

// three pages worth of dishes for the pagination
export const dishes = [0, 1, 2].flatMap((page) =>
  baseDishes.map((dish) => ({
    ...dish,
    id: page === 0 ? dish.id : `${dish.id}-${page + 1}`,
    price: 12.05,
    rating: 4,
    description,
  }))
);
