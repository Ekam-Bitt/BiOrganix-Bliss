import React from "react";
import product1 from "../assets/unnamed-2.jpg";
import product2 from "../assets/unnamed.jpg";

const ServiceItem = ({ image, description, price, ratings, purchaseLink }) => {
  return (
    <div id="product-card" className="bg-white p-4 w-[325px] m-auto">
      <img
        src={image}
        alt="Product"
        className=" w-[300px] h-[300px] rounded-2xl mb-4"
      />
      <div className="product-details">
        <p id="product-description" className=" text-2xl mb">
          {description}
        </p>
        <section className="flex w-full justify-between mb-4">
          <p className="product-price">₹{price}</p>
          <p className="product-ratings">{ratings} ⭐️</p>
        </section>

        <button
          id="purchase-button"
          onClick={() => (window.location.href = purchaseLink)}
          className="w-full px-4 py-2 text-xl text-white bg-[#104d11] rounded-3xl border-none shadow-lg hover:text-white hover:bg-blue-900 transition duration-200 ease-in-out"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const servicesData = [
    {
      image: product1,
      description: "Tooth Brush 1",
      price: 149,
      ratings: 4.6,
      purchaseLink: `https://buy.stripe.com/test_8wMaGMbQweiL5A4bIL`,
    },
    {
      image: product2,
      description: "Tooth Brush 2",
      price: 149,
      ratings: 4.9,
      purchaseLink: `https://buy.stripe.com/test_8wMaGMbQweiL5A4bIL`,
    },
    {
      image:
        "https://img.freepik.com/free-photo/natural-products-green-background_23-2149413924.jpg?w=740&t=st=1708127555~exp=1708128155~hmac=5d9d03408947141b7df7f4e7b679d47dececce532d73b42001d7b7bade43ee77",
      description: "Tooth Brush 3",
      price: 199,
      ratings: 3.4,
      purchaseLink: `https://buy.stripe.com/test_4gw6qwg6M5MfbYs9AE`,
    },
    {
      image:
        "https://img.freepik.com/free-photo/assortment-with-toothbrush-container_23-2148743101.jpg?w=740&t=st=1708127850~exp=1708128450~hmac=94ff1f5180ded1615ffcc5cfb60114aacff6493396441dca22e8d556ad393972",
      description: "Tooth Brush 4",
      price: 199,
      ratings: 4.5,
      purchaseLink: `https://buy.stripe.com/test_4gw6qwg6M5MfbYs9AE`,
    },
    {
      image:
        "https://img.freepik.com/free-photo/toothbrush-with-sugar-cubes-blue-background-flat-lay_169016-37031.jpg?w=1060&t=st=1708127523~exp=1708128123~hmac=1312e8854c6ded0ecc23c079eb3ba369569b5bf78621d7c9f03c8d63ad45b4a1",
      description: "Tooth Brush 5",
      price: 199,
      ratings: 2.7,
      purchaseLink: `https://buy.stripe.com/test_4gw6qwg6M5MfbYs9AE`,
    },
    {
      image:
        "https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Tooth Brush 6",
      price: `XX`,
      ratings: `X`,
      purchaseLink: `https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl text-center mt-6 font-bold">Products Gallery</h1>
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-x-4 gap-y-16 my-20">
        {servicesData.map((service, index) => (
          <ServiceItem
            key={index}
            image={service.image}
            description={service.description}
            price={service.price}
            ratings={service.ratings}
            purchaseLink={service.purchaseLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
