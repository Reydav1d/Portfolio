"use client";
import React from "react";
import SocialCard from "@/components/socialCard/socialCard";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

export default function Contact() {
  const [state, handleSubmit] = useForm("xaygjkvk");
  if (state.succeeded) {
    return (
      <>
        <p>¡Correo enviado exitosamente! Espera una respuesta muy pronto.</p>
        <Link href="/">Volver al inicio</Link>
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
              prefix="Email"
              field="email"
              errors={state.errors}
            />
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
