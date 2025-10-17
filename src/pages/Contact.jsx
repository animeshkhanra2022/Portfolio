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

            <div className="text-center mt-10">
                <p className="text-gray-400">Get in Touch</p>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-8">Contact Me</h2>
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
