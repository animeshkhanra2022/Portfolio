import React from 'react'
import Botton from '../conponents/button/Botton.jsx'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
    const navigate = useNavigate();

    const handleDownload = () => {
        // The path to your CV file in the public folder
        const fileUrl = './Animesh_Khanra_CV.pdf';

        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'My_CV.pdf'); // The name for the downloaded file
        document.body.appendChild(link);
        // link.click();
        document.body.removeChild(link);
    };

    const handleContact = () => {
        navigate('#contact');
    }

    return (

        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 px-8 md:px-16 bg-gradient-to-b from-white to-gray-100 dark:from-[#0B061A] dark:to-[#120C24] text-center md:text-left"
        >
            {/* Left Content */}
            <motion.div
                className="flex flex-col items-center max-w-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <p className="text-gray-600 dark:text-gray-300 mb-2">Hello I'm</p>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
                    Animesh Khanra
                </h1>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                    Front-End Developer
                </h2>

                <div className="flex space-x-6">

                    <Botton children='Download CV' onClick={handleDownload} />
                    <Botton children='Contact' onClick={handleContact} />
                </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="flex justify-center"
            >
                <img
                    src="../src/assets/profile.jpg" // Replace with your actual image path
                    alt="Animesh Khanra"
                    className="w-[320px] md:w-[400px] rounded-2xl shadow-2xl object-cover"
                />
            </motion.div>

            {/* Scroll Down Button */}
            <motion.a
                href="#about"
                className="absolute bottom-10 right-10 px-6 py-3 bg-[#E64A3C] text-white font-semibold rounded-xl hover:bg-[#c53e31] transition duration-300 shadow-md hidden md:block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                Scroll Down
            </motion.a>


        </section>


    )
}
