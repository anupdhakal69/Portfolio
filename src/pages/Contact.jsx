import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-[90vw] mx-auto gap-14  flex flex-col sm:flex-row min-h-[calc(100vh-80px)] justify-center   items-center">
        
        <div className='left sm:max-w-[40%]  shadow-md shadow-slate-500'>
            <img src="work.jpg" alt="" loading='lazy'/>
        </div>

        <div className='right pr-2'>
            <form className='flex flex-col gap-3 '>
                <h1 className='formh1 text-3xl sm:text-4xl font-medium my-[-5px]'>Contact Me</h1>
                <p className='text-gray-600 text-base sm:text-lg font-medium'>Have a question or want to work together? Feel free to reach out!</p>

                  <div className='flex flex-col sm:flex-row gap-3 '>
                    <input type="text" placeholder='Name' className='w-full px-3 py-2 rounded-md  border-2 border-gray-200 outline-none focus:border-teal-600'/>
                    <input type="email" placeholder='Email' className='w-full px-3 py-2 rounded-md  border-2 border-gray-200 outline-none focus:border-teal-600'/>
                  </div>

                <input type="tel" placeholder='Mobile no.' className=' px-3 py-2 rounded-md border-2 border-gray-200 outline-none focus:border-teal-600'/>
                <textarea name="" id="" placeholder='Message' rows={5} className='input px-3 py-1 rounded-md  border-2 border-gray-200 outline-none focus:border-teal-600'></textarea>
                <button className='btn text-xl tracking-wide font-medium bg-gradient-to-br from-teal-500 to-sky-600 text-white  py-2 px-2'>Send</button>
            </form>

        </div>
    </div>
  )

}

export default Contact
