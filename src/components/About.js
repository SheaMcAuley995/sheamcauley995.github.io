// src/components/About.js
import React from "react";

export default function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Shea McAuley
                        Game Developer | Software Engineer
                        <br className="hidden lg:inline-block" />I love to build amazing apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        As a Software Engineer II at Hashbang, Inc., I work on developing and maintaining innovative and engaging video games for various platforms and genres. With my passion for game creation and my skills in Unity, C#, and game programming, I contribute to the design, development, and testing of game features and systems, ensuring high-quality and user-friendly gameplay experiences.
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Work With Me</a>
                        <a href="#projects" className="ml-4 inline-flex text-gray-300 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">See My Past Work</a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="images\Shea_Mcauley_ProfilePicture.png" />
                </div>
            </div>
        </section>
    );

}

// repeat the same basic structure for all 6 components