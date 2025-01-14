import { useState } from 'react'
import React from 'react'

const SectionHeader = (props) => {
  const [title, setTitle] = useState(props.value ||"");
  return (
    <>
    <div className='flex justify-between items-center h-[25vh] gap-10 px-20 mt-5'>
        <div>
          <h1 className='text-primary text-4xl font-semibold mb-4'>{title}</h1>
          <p className='text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio dolorem quidem esse quaerat.</p>
        </div>
        <button className='bg-primary text-white p-3 rounded-lg hover:bg-primary-light'>View More</button>
      </div>
      </>
  )
}

export default SectionHeader