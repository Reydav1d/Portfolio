"use client";
import React from "react";
import SocialCard from "@/components/socialCard/socialCard";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import { Button } from "flowbite-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xaygjkvk");
  if (state.succeeded) {
    return (
      <>
        <div className="h-screen flex flex-col justify-center items-center space-y-8">
          <h1 className="text-3xl font-extrabold dark:text-white">
            ¡Correo enviado exitosamente! Espera una respuesta muy pronto.
          </h1>
          <svg
            className="w-[48px] h-[48px] text-cyan-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4.008 8.714c1-.097 1.96-.45 2.792-1.028a25.112 25.112 0 0 0 4.454-5.72 1.8 1.8 0 0 1 .654-.706 1.742 1.742 0 0 1 1.65-.098 1.82 1.82 0 0 1 .97 1.128c.075.248.097.51.065.767l-1.562 4.629M4.008 8.714H1v9.257c0 .273.106.535.294.728a.99.99 0 0 0 .709.301h1.002a.99.99 0 0 0 .71-.301c.187-.193.293-.455.293-.728V8.714Zm8.02-1.028h4.968c.322 0 .64.08.925.232.286.153.531.374.716.645a2.108 2.108 0 0 1 .242 1.883l-2.36 7.2c-.288.813-.48 1.354-1.884 1.354-2.59 0-5.39-1.06-7.504-1.66"
            />
          </svg>
          <Link href="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <section className="h-screen flex flex-col lg:flex-row">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-cyan-600">
          ¡Ponte en contacto conmigo!
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-cyan-600 sm:text-xl">
          Puedes enviarme un correo o visitar mis redes
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-cyan-600"
            >
              Tu correo
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="shadow-sm bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="correo@ejemplo.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label
              htmlFor="asunto"
              className="block mb-2 text-sm font-medium text-cyan-600"
            >
              Asunto
            </label>
            <input
              id="asunto"
              type="asunto"
              name="asunto"
              className="shadow-sm bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Escribe el asunto de tu correo"
            />
            <ValidationError
              prefix="Asunto"
              field="asunto"
              errors={state.errors}
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-cyan-600"
            >
              Nombre
            </label>
            <input
              id="name"
              type="name"
              name="name"
              className="shadow-sm bg-gray-300 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="¿Cuál es tu nombre?"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-cyan-600"
            >
              Escribe tu mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="shadow-sm bg-gray-300 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-cyan-900 focus:outline-none bg-cyan-600 rounded-full border hover:bg-cyan-900 hover:text-cyan-700 focus:z-10"
          >
            Enviar
          </button>
        </form>
      </div>
      <SocialCard />
    </section>
  );
}
