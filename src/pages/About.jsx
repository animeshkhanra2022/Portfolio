import React from 'react'
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export default function About() {

  return (
    // min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 dark:from-[#0B061A] dark:to-[#120C24] text-center md:text-left
    <section id='about' className='relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b dark:from-[#0B061A] dark:to-[#120C24] '>
      
        <div className='flex flex-col text-center mb-10'>
          <p className=' dark:text-white'>Get to Know more</p>
          <h1 className=' text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>About Me</h1>
        </div>
        <div className='p-6 sm:grid sm:grid-cols-3 gap-4'>
          <div className='flex justify-center '>
            <img
              src="../src/assets/profile2.jpg"
              alt="Image"
              className='w-[290px] md:w-[300px] rounded-2xl shadow-2xl object-cover'
            />
          </div>
          <div className='col-span-2 p-4'>
            <p className='max-w-screen pb-3 font-sans text-gray-700 dark:text-gray-300 leading-relaxed'>
              Hi!  I’m Animesh Khanra - a passionate learner and tech enthusiast who thrives on exploring the unknown. I love diving into new technologies and collaborating with diverse individuals to create innovative solutions. My goal is to develop impactful software, tools, and systems that contribute positively to society and enhance everyday life.
            </p>
            {/* sm:grid sm:grid-cols-2 gap-2 */}
            <div className='flex flex-col items-center gap-4 sm:items-stretch md:flex-row md:justify-around  '>
              {/* Education */}
              <div className="relative flex-1 bg-[#E8DAF0] dark:bg-black/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-[400px]">
                <h3 className=" flex flex-col text-xl font-semibold items-center gap-2 text-purple-700 dark:text-purple-300 mb-4">
                  <FaGraduationCap />
                  <p>Education</p>
                </h3>
                <ul className="text-gray-800 dark:text-gray-200 text-sm space-y-3">
                  <li>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      Sept 2024 - Present
                    </span>
                    <br />
                    Bachelor in Technology of Computer Science & Engineering (B.TECH)
                    <br />
                    Government College of Engineering & Textile Technology |
                    Berhampore, India
                  </li>
                  <li>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      Sept 2022 - July 2024
                    </span>
                    <br />
                    Diploma of Computer Science & Technology
                    <br />
                    Dr. Meghnad Saha Institute of Technology | Haldia, India
                  </li>
                  <li>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      Jun 2019 - July 2021
                    </span>
                    <br />
                    Higher Secondary Education (10+2)
                    <br />
                    Patna Vivekananda Sikshaniketan | WB, India
                  </li>
                </ul>
              </div>
              {/* Experience */}
              <div className="relative flex-1 bg-[#E8DAF0] dark:bg-black/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-[400px]">
                <h3 className="text-xl font-semibold flex flex-col items-center gap-2 text-purple-700 dark:text-purple-300 mb-4">
                  <FaLaptopCode />
                  <p>Experience</p>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 italic">Tech Fest</p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  Worked on multiple tech fests and college-level projects, gaining
                  hands-on experience in modern web development tools and frameworks.
                </p>
              </div>
            </div>
          </div>

        </div>

    </section>
  )
}

