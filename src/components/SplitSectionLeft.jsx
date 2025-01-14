import React from "react";
import design from "../assets/CurvedDesign.png";

const SplitSectionRight = () => {
  return (
    <>
      <div className="flex justify-between items-center h-[70vh] pt-10 gap-10 mb-5">
        <div className="w-1/2 h-full">
          <img src={design} alt="" className="w-full h-full object-scale-down" />
        </div>

        <div className="flex flex-col justify-center w-1/2 px-32">
          <h1 className=" text-primary text-4xl font-semibold mb-8 mt-4">
            Cupcake Perfection: Love Baked by Terrific Bites
          </h1>
          <p className=" text-gray mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            reiciendis corrupti quod incidunt eos odio, pariatur aut ex
            distinctio nisi aliquam doloremque accusamus adipisci.
          </p>
          <button className="bg-primary text-white p-3 rounded-lg hover:bg-primary-light w-36">
            Let's Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default SplitSectionRight;
