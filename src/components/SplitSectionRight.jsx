import React from "react";
import cupcake from "../assets/cupcake-1.jpg";

const SplitSectionRight = () => {
  return (
    <>
      <div className="flex justify-between items-center h-[70vh] bg-secondary gap-10">
        <div className="flex flex-col justify-center items-center w-1/2 px-32">
          <h1 className="text-center text-primary text-4xl font-semibold mb-8 mt-4">
            Events Catering & Customized Gifting
          </h1>
          <p className="text-center text-gray mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            reiciendis corrupti quod incidunt eos odio, pariatur aut ex
            distinctio nisi aliquam doloremque accusamus adipisci.
          </p>
          <button className="bg-primary text-white p-3 rounded-lg hover:bg-primary-light">
            Let's Shop Now
          </button>
        </div>
        <div className="w-1/2 h-full">
          <img src={cupcake} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default SplitSectionRight;
