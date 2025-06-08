import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, LinkIcon } from "lucide-react"
import { useLanguage } from "../context/language-context"

export default function Contact ()
{
  const { translations } = useLanguage()
  const [ formData, setFormData ] = useState( {
    name: "",
    email: "",
    subject: "",
    message: "",
  } )
  const [ success, setSuccess ] = useState( false )

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) =>
  {
    const { name, value } = e.target
    setFormData( ( prev ) => ( { ...prev, [ name ]: value } ) )
  }

  const handleSubmit = ( e: React.FormEvent ) =>
  {
    e.preventDefault()
    console.log( "Form submitted:", formData )
    // Aquí iría la lógica para enviar el formulario
    setSuccess( true )
    setFormData( {
      name: "",
      email: "",
      subject: "",
      message: "",
    } )

    // Ocultar el mensaje después de 5 segundos
    setTimeout( () =>
    {
      setSuccess( false )
    }, 5000 )
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl mb-2 text-gray-800 dark:text-white">{ translations.contact.title }</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{ translations.contact.description }</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          <div className="md:col-span-5">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
              <h3 className="font-medium text-xl mb-6 text-gray-800 :text-white text-center md:text-left">
                { translations.contact.info.title }
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-pink-600 dark:text-pink-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      { translations.contact.info.email }
                    </h4>
                    <p className="text-gray-800 dark:text-white">sharon.desing24@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-pink-600 dark:text-pink-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      { translations.contact.info.phone }
                    </h4>
                    <p className="text-gray-800 dark:text-white">+58 4244020840</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-pink-600 dark:text-pink-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      { translations.contact.info.location }
                    </h4>
                    <p className="text-gray-800 dark:text-white">
                      Caracas - Aurora Corner, Delicias, Don Ricardo Building, 7th floor, apartment 74b, Altagracia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <LinkIcon className="text-pink-600 dark:text-pink-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      { translations.contact.info.portfolio }
                    </h4>
                    <a
                      href="https://linktr.ee/sharondesing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 underline"
                    >
                      linktr.ee/sharondesing
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-gray-600 dark:text-gray-400 text-center md:text-left">
                { translations.contact.info.social }
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-medium text-xl mb-6 text-gray-800 dark:text-white text-center md:text-left">
                { translations.contact.form.title }
              </h3>

              <form onSubmit={ handleSubmit } className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      { translations.contact.form.name }
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={ formData.name }
                      onChange={ handleChange }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      { translations.contact.form.email }
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={ formData.email }
                      onChange={ handleChange }
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    { translations.contact.form.subject }
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={ formData.subject }
                    onChange={ handleChange }
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    { translations.contact.form.message }
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={ formData.message }
                    onChange={ handleChange }
                    required
                    rows={ 4 }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="flex justify-center md:justify-start">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors flex items-center dark:bg-pink-500 dark:hover:bg-pink-600"
                  >
                    { translations.contact.form.send }
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>

                { success && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
                    { translations.contact.form.success }
                  </div>
                ) }
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
