import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import cupcake1 from "../assets/cupcake-1.jpg";
import cupcake2 from "../assets/cupcake-2.jpg";
import cupcake3 from "../assets/cupcake-3.jpg";
import cupcake4 from "../assets/cupcake-4.jpg";
import SectionHeader from "./SectionHeader";

const CardsCarousel = () => {
  const slides = [
    { img: cupcake1, title: "Swiss Frosting" },
    { img: cupcake2, title: "Moose Cream" },
    { img: cupcake3, title: "Butter Frosting" },
    { img: cupcake4, title: "Light Sponge" },
    { img: cupcake1, title: "Swiss Frosting" },
    { img: cupcake2, title: "Moose Cream" },
    { img: cupcake3, title: "Butter Frosting" },
    { img: cupcake4, title: "Light Sponge" },
  ];

  return (
    <>
      <div className="bg-secondary py-2">
        <h1 className="text-center text-primary text-4xl font-semibold mb-4 mt-8">Divine Treats and Indulgent Desserts</h1>
        <p className="text-gray text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="px-20 mb-20">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              // "@0.00": {
              //   slidesPerView: 1,
              //   spaceBetween: 10,
              // },
              "@0.50": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@0.70": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper h-[50vh] mt-20"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="cursor-pointer flex flex-col ">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                  <h1 className="text-xl font-semibold mt-4 text-primary">
                    {slide.title}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CardsCarousel;
