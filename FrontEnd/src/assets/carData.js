export default [
  {
    carDetails: {
      brand: "aa",
      model: "rolla 2004",
      price: safelyParsePrice("1"), // Safely parsing price
      color: "blue",
      description: "A reliable and fuel-efficient sedan with a manual transmission.",
      gear: "Manual",
      fuel: "Benzine",
    },
    images: [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    ],
  },
  {
    carDetails: {
      brand: "ff",
      model: "lla 2004",
      price: safelyParsePrice("1,850,000"), // Safely parsing price
      color: "blue",
      description: "A reliable and fuel-efficient sedan with a manual transmission.",
      gear: "Manual",
      fuel: "Benzine",
    },
    images: [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    ],
  },
  {
    carDetails: {
      brand: "bb",
      model: "Corolla 2004",
      price: safelyParsePrice(1850000), // Price already numeric
      color: "blue",
      description: "A reliable and fuel-efficient sedan with a manual transmission.",
      gear: "Manual",
      fuel: "Benzine",
    },
    images: [
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    ],
  }
];

// Safely parse price function to handle both string and numeric inputs
function safelyParsePrice(price) {
  try {
    // Remove any commas and convert to a number
    if (typeof price === 'string') {
      return Number(price.replace(/,/g, ""));
    }
    return Number(price);
  } catch (error) {
    console.error(`Error parsing price: ${price}`, error);
    return null; // Return null or a default value if parsing fails
  }
}
