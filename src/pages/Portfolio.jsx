import React from 'react'


const Portfolio = () => {
  return (
    <div className="max-w-[90vw] mx-auto grid grid-cols-3 place-items-center min-h-[calc(100vh-80px)] ">

      <div className='h-[55vh] w-72'>
        <h1 className='text-3xl font-semibold skillsh1'>Bulb</h1>
        <a href="http://anupkobulb.netlify.app" target='main' className='flex text-blue-500'>Live preview <img src="linkarrow.png" className='w-5'/></a>
        <p className='font-medium  text-gray-700'>This was my first ever project hosted on internet. It's simple but yet one of my favorites.</p>
      </div>

      <div className='h-[55vh] w-72'>
        <h1 className='text-3xl font-semibold skillsh1'>Expense tracker</h1>
        <a href="http://anupkoexpensetracker.netlify.app" target='main' className='flex text-blue-500'>Live preview <img src="linkarrow.png" className='w-5'/></a>
        <p className='font-medium text-gray-700'>Expense tracker is the useful tool to get a idea of what and how much are you spending on your day to day expenses.</p>
      </div>

      <div className='h-[55vh] w-72 '>
        <h1 className='text-3xl font-semibold skillsh1'>Todo app</h1>
        <a href="http://owntodoapp.netlify.app" target='main' className='flex text-blue-500'>Live preview <img src="linkarrow.png" className='w-5'/></a>
        <p className='font-medium text-gray-700'>Expense tracker is the useful tool to get a idea of what and how much are you spending on your day to day expenses.</p>
      </div>

        <p classname='text-5xl text-blue-700 font-semibold'>This page is not completed</p>
    </div>
  )
}

export default Portfolio
