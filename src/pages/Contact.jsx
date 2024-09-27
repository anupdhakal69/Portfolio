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
                    <input type="text" placeholder='Name' required className='w-full px-3 py-2 rounded-md  border-2 border-gray-200 outline-none focus:border-teal-600'/>
                    <input type="email" placeholder='Email' required className='w-full px-3 py-2 rounded-md  border-2 border-gray-200 outline-none focus:border-teal-600'/>
                  </div>

                <input type="tel" placeholder='Mobile no.' required className=' px-3 py-2 rounded-md border-2 border-gray-200 outline-none focus:border-teal-600'/>
                <textarea name="" id="" placeholder='Message' required rows={5} className='input px-3 py-1 rounded-md  border-2 border-gray-200 outline-none focus:border-teal-600'></textarea>
                <button className='btn text-lg tracking-wide font-medium bg-gradient-to-br from-teal-500 to-sky-600 text-white sm:w-1/3 py-2 flex items-center gap-1 justify-center rounded hover:shadow-md hover:shadow-gray-600 duration-200'>Submit <img src="sendbtn2.png" alt="" className='w-4'/></button>
            </form>

        </div>
    </div>
  )

}

export default Contact
