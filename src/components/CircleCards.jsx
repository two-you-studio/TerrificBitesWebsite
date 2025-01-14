import React from 'react';
import cupcake1 from '../assets/cupcake-1.jpg';
import cupcake2 from '../assets/cupcake-2.jpg';
import cupcake3 from '../assets/cupcake-3.jpg';
import cupcake4 from '../assets/cupcake-4.jpg';
import SectionHeader from './SectionHeader';

const SquareCards = () => {
  const products = [
    { img: cupcake1, title: 'Swiss Frosting' },
    { img: cupcake2, title: 'Moose Cream' },
    { img: cupcake3, title: 'Butter Frosting' },
    { img: cupcake4, title: 'Light Sponge' },
  ];

  const title = "Gift for every occasion";

  return (
    <>
      <SectionHeader value={title}/>
      <div className='flex justify-center gap-4 px-20 mb-28'>
        {products.map((product, index) => (
          <div key={index} className='w-1/4 h-80 flex flex-col cursor-pointer'>
            <img src={product.img} alt={product.title} className='w-full h-full object-cover rounded-full' />
            <h1 className='text-center text-xl font-semibold mt-4 text-primary'>{product.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default SquareCards;