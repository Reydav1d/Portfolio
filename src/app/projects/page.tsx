import React from "react";
import Image from "next/image";
import TechNexus from "../../../public/smartmockups_lmjfs9zm.png";

export default function Projects() {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          TechNexus
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        Durante mi participación en el bootcamp de Desarrollo Web de SoyHenry, 
        tuve la oportunidad de trabajar (en estancia del proyecto final) en un proyecto de 
        ecommerce altamente funcional y centrado en la tecnología. El objetivo principal de 
        esta aplicación fue crear una plataforma que permitiera a los usuarios explorar y 
        adquirir una variedad de productos tecnológicos.
        </p>
        <a
          href="https://technexus.vercel.app/"
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
          target="_blank"
        >
          Demo
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="https://github.com/Reydav1d/PF-Frontend"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-400 focus:ring-4 focus:ring-gray-100 dark:text-white"
          target="_blank"
        >
          Github Repository
        </a>
      </div>
      <div className=" lg:mt-0 lg:col-span-5 lg:flex">
        <Image src={TechNexus}
        width={400} height={400}/>
      </div>
    </div>
  );
}
