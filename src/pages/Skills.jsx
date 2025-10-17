import {
    FaJs,
    FaJava,
    FaPython,
    FaGithub,
    FaReact,
    FaNodeJs,
    FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-[#0B061A] dark:to-[#120C24] px-6 py-20 transition-colors duration-300"
        >
            {/* Gradient background effect */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600 dark:bg-purple-900 opacity-40 rounded-full blur-[200px]"></div>

            {/* Title */}
            <div className="text-center my-10">
                <p className="text-gray-500 dark:text-gray-400 mb-1">Know My</p>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                    Skills
                </h2>
            </div>

            {/* Skill Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
                {/* Programming Languages */}
                <div className="bg-purple-100/50 dark:bg-gray-800/60 p-8 rounded-3xl shadow-md backdrop-blur-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-center text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                        Programming Languages
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center gap-3">
                            <FaJs className="text-yellow-500 text-2xl" />
                            <span>
                                JavaScript <br />
                                <small className="text-sm text-gray-500 dark:text-gray-400">
                                    Experienced
                                </small>
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaJava className="text-red-600 text-2xl" />
                            <span>
                                Java <br />
                                <small className="text-sm text-gray-500 dark:text-gray-400">
                                    Intermediate
                                </small>
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPython className="text-blue-500 text-2xl" />
                            <span>
                                Python <br />
                                <small className="text-sm text-gray-500 dark:text-gray-400">
                                    Basics
                                </small>
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Tools & Databases */}
                <div className="bg-purple-100/50 dark:bg-gray-800/60 p-8 rounded-3xl shadow-md backdrop-blur-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-center text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                        Tools & Databases
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center gap-3">
                            <FaGithub className="text-black dark:text-white text-2xl" />
                            <span>
                                GitHub <br />
                                <small className="text-sm text-gray-500 dark:text-gray-400">
                                    Intermediate
                                </small>
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaFigma className="text-pink-500 text-2xl" />
                            <span>
                                Figma <br />
                                <small className="text-sm text-gray-500 dark:text-gray-400">
                                    Basics
                                </small>
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <SiMongodb className="text-green-600 text-2xl" />
                            <span>
                                MongoDB <br />
                                <small className="text-sm text-gray-500 dark:text-gray-400">
                                    Basics
                                </small>
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Libraries & Frameworks */}
                <div className="bg-purple-100/50 dark:bg-gray-800/60 p-8 rounded-3xl shadow-md backdrop-blur-lg hover:shadow-xl transition-all duration-300">
                    <h3 className="text-center text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                        Libraries & Frameworks
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                        <li className="flex items-center gap-3">
                            <FaReact className="text-blue-500 text-2xl" />
                            <span>
                                React <br />
                                <small className="text-sm text-gray-500 dark:text-gray-400">
                                    Intermediate
                                </small>
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <SiExpress className="text-gray-700 dark:text-gray-300 text-2xl" />
                            <span>
                                ExpressJS <br />
                                <small className="text-sm text-gray-500 dark:text-gray-400">
                                    Basics
                                </small>
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaNodeJs className="text-green-600 text-2xl" />
                            <span>
                                NodeJS <br />
                                <small className="text-sm text-gray-500 dark:text-gray-400">
                                    Basics
                                </small>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
