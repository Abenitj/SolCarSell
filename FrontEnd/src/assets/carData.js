import carimg1 from "./image/carimg1.jpg";
import carimg2 from "./image/carimg2.jpg";
import carimg3 from "./image/carimg3.jpg";
import carimg4 from "./image/carimg4.jpg";
import carimg5 from "./image/carimg5.jpg";
import carimg6 from "./image/carimg6.jpg";
import carimg7 from "./image/carimg7.jpg";
import carimg8 from "./image/carimg8.jpg";
import carimg9 from "./image/carimg9.jpg";

export default [
  {
    carDetails: {
      brand: "aa",
      model: "rolla 2004",
      price: safelyParsePrice("1"),
      color: "blue",
      description: "A reliable and fuel-efficient sedan with a manual transmission.",
      gear: "Manual",
      fuel: "Benzine",
    },
    images: [carimg1, carimg2, carimg3, carimg4, carimg5],
  },
  {
    carDetails: {
      brand: "ff",
      model: "lla 2004",
      price: safelyParsePrice("1,850,000"),
      color: "blue",
      description: "A reliable and fuel-efficient sedan with a manual transmission.",
      gear: "Manual",
      fuel: "Benzine",
    },
    images: [carimg6, carimg7, carimg8, carimg9, carimg1],
  },
  {
    carDetails: {
      brand: "bb",
      model: "Corolla 2004",
      price: safelyParsePrice(1850000),
      color: "blue",
      description: "A reliable and fuel-efficient sedan with a manual transmission.",
      gear: "Manual",
      fuel: "Benzine",
    },
    images: [carimg2, carimg3, carimg4, carimg5, carimg6],
  },
];

function safelyParsePrice(price) {
  try {
    if (typeof price === "string") {
      return Number(price.replace(/,/g, ""));
    }
    return Number(price);
  } catch (error) {
    console.error(`Error parsing price: ${price}`, error);
    return null;
  }
}
