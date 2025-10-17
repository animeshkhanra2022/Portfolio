// import React from "react";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 px-6 py-20 transition-colors duration-300"
//     >
//       {/* Header */}
//       <div className="text-center mb-10">
//         <p className="text-gray-500 dark:text-gray-400 mb-1">Let's Connect</p>
//         <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
//           Contact
//         </h2>
//       </div>

//       {/* Contact Card */}
//       <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg w-full max-w-2xl transition-all duration-300 hover:shadow-xl">
//         <form
//           action="https://formspree.io/f/mnnqkqgz" // <-- replace with your Formspree form ID
//           method="POST"
//           className="flex flex-col gap-6"
//         >
//           {/* Name */}
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//             >
//               Your Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               required
//               className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//             >
//               Your Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               required
//               className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
//             >
//               Message
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               rows="5"
//               required
//               className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity duration-200"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Social Links */}
//       <div className="flex gap-6 mt-10 text-2xl text-gray-600 dark:text-gray-300">
//         <a
//           href="https://github.com/yourgithub"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-purple-600 transition-colors"
//         >
//           <FaGithub />
//         </a>
//         <a
//           href="https://linkedin.com/in/yourlinkedin"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-purple-600 transition-colors"
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           href="mailto:your@email.com"
//           className="hover:text-purple-600 transition-colors"
//         >
//           <FaEnvelope />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Contact;







import React from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram, Send } from 'lucide-react';

export default function Contact() {
    const contacts = [
        { name: 'Email', icon: <Mail className="text-blue-400" />, link: 'mailto:animesh.khanra@outlook.com' },
        { name: 'GitHub', icon: <Github className="text-white" />, link: 'https://github.com/animeshkhanra2022' },
        { name: 'LinkedIn', icon: <Linkedin className="text-[#0077B5]" />, link: 'https://linkedin.com/in/animesh-khanra-3041231b4' },
        { name: 'Twitter', icon: <Twitter className="text-white" />, link: 'https://twitter.com/yourprofile' },
        { name: 'Instagram', icon: <Instagram className="text-pink-500" />, link: 'https://instagram.com/yourprofile' },
        { name: 'Telegram', icon: <Send className="text-blue-400" />, link: 'https://t.me/yourusername' },
    ];

    return (
        <section id="contact" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b dark:from-[#0B061A] dark:to-[#120C24] ">
            {/* Gradient background effect */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600 opacity-40 rounded-full blur-[200px]"></div>

            <div className="z-10 text-center">
                <p className="text-gray-400">Get in Touch</p>
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-8">Contact Me</h2>
            </div>

            {/* Contact icons */}
            <div className="z-10 flex flex-wrap justify-center items-center gap-6 px-8 py-6 border border-gray-500 rounded-full bg-black/80 backdrop-blur-md shadow-lg">
                {contacts.map((contact) => (
                    <a
                        key={contact.name}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full hover:scale-110 transition-transform duration-300"
                    >
                        {contact.icon}
                        <span className="text-white font-medium">{contact.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
