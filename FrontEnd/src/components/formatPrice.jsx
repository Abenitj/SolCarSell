import React from "react";

// Function to format price with commas and three decimal places
const  formatPrice=(price)=>{
  if (price !== null) {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  }
  return ""; // Return empty string if the price is invalid
}

// FormattedPrice Component
const FormattedPrice = ({ price }) => {
  return <span>{formatPrice(price)}</span>;
};

export default FormattedPrice;
