import spaghetti from "../assets/images/order-spaghetti.jpg";
import linguine from "../assets/images/order-linguine.jpg";
import capellini from "../assets/images/order-capellini.jpg";
import fettuccine from "../assets/images/order-fettuccine.jpg";
import bucatini from "../assets/images/order-bucatini.jpg";
import tortellini from "../assets/images/order-tortellini.jpg";
import fusilli from "../assets/images/order-fusilli.jpg";
import farfalle from "../assets/images/order-farfalle.jpg";
import penne from "../assets/images/order-penne.jpg";
import splitza from "../assets/images/order-splitza.jpg";
import superSupreme from "../assets/images/order-super-supreme.jpg";
import veggieGarden from "../assets/images/order-veggie-garden.jpg";
import doubleBeef from "../assets/images/order-double-beef.jpg";
import meatLovers from "../assets/images/order-meat-lovers.jpg";
import extravaganzza from "../assets/images/order-extravaganzza.jpg";
import meatAndMeat from "../assets/images/order-meat-and-meat.jpg";
import meatzza from "../assets/images/order-meatzza.jpg";
import tunaDelight from "../assets/images/order-tuna-delight.jpg";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat";

const make = (name, id, image) => ({ id, name, image, price: 12.05, rating: 4, description });

export const orderSections = [
  {
    id: "pasta",
    title: "PASTA",
    tags: ["All category", "Dinner", "Lunch"],
    items: [
      make("Spaghetti", "spaghetti", spaghetti),
      make("Linguine", "linguine", linguine),
      make("Capellini", "capellini", capellini),
      make("Fettuccine", "fettuccine", fettuccine),
      make("Bucatini", "bucatini", bucatini),
      make("Tortellini", "tortellini", tortellini),
      make("Fusilli", "fusilli", fusilli),
      make("Farfalle", "farfalle", farfalle),
      make("Penne Alla Vodka", "penne", penne),
    ],
  },
  {
    id: "pizza",
    title: "PIZZA",
    tags: ["All category", "Dinner"],
    items: [
      make("Splitza Signature", "splitza", splitza),
      make("Super Supreme", "super-supreme", superSupreme),
      make("Veggie Garden", "veggie-garden", veggieGarden),
      make("Double Beef Burger", "double-beef", doubleBeef),
      make("Meat Lovers", "meat-lovers", meatLovers),
      make("Extravaganzza", "extravaganzza", extravaganzza),
      make("Meat & Meat", "meat-and-meat", meatAndMeat),
      make("Meatzza", "meatzza", meatzza),
      make("Tuna Delight", "tuna-delight", tunaDelight),
    ],
  },
];

