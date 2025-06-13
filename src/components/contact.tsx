import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, LinkIcon } from "lucide-react"
import { useLanguage } from "../context/language-context"


// Props para ContactForm
interface ContactFormLabels
{
  title: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  send: string;
  success?: string;
}

interface ContactFormProps
{
  labels: ContactFormLabels;
  onSubmit: ( data: { name: string; email: string; subject: string; message: string } ) => void;
  showSuccess?: boolean;
}

const ContactForm = ( {
  labels,
  onSubmit,
  showSuccess
}: ContactFormProps ) =>
{
  const [ name, setName ] = useState( "" );
  const [ email, setEmail ] = useState( "" );
  const [ subject, setSubject ] = useState( "" );
  const [ message, setMessage ] = useState( "" );

  const handleSubmit = ( e: React.FormEvent ) =>
  {
    e.preventDefault();
    onSubmit( { name, email, subject, message } );
    setName( "" );
    setEmail( "" );
    setSubject( "" );
    setMessage( "" );
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="font-medium text-xl mb-6 text-gray-800 dark:text-white text-center md:text-left">
        { labels.title }
      </h3>
      <form onSubmit={ handleSubmit } className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              { labels.name }
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={ name }
              onChange={ e => setName( e.target.value ) }
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              { labels.email }
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={ email }
              onChange={ e => setEmail( e.target.value ) }
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            { labels.subject }
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={ subject }
            onChange={ e => setSubject( e.target.value ) }
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            { labels.message }
          </label>
          <textarea
            id="message"
            name="message"
            value={ message }
            onChange={ e => setMessage( e.target.value ) }
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
            { labels.send }
            <Send className="ml-2 h-4 w-4" />
          </button>
        </div>
        { showSuccess && labels.success && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
            { labels.success }
          </div>
        ) }
      </form>
    </div>
  );
};

interface ContactCardLabels
{
  title: string;
  email: string;
  phone: string;
  location: string;
  portfolio: string;
  social: string;
}

interface ContactCardProps
{
  labels: ContactCardLabels;
}

const ContactCard = ( { labels }: ContactCardProps ) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
    <h3 className="font-medium text-xl mb-6 text-gray-800 dark:text-white text-center md:text-left">
      { labels.title }
    </h3>
    <div className="space-y-6">
      <div className="flex items-start">
        <Mail className="text-pink-600 dark:text-pink-400 mr-4 mt-1" />
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            { labels.email }
          </h4>
          <p className="text-gray-800 dark:text-white">sharon.desing24@gmail.com</p>
        </div>
      </div>
      <div className="flex items-start">
        <Phone className="text-pink-600 dark:text-pink-400 mr-4 mt-1" />
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            { labels.phone }
          </h4>
          <a
            href="https://wa.me/584129079930"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 underline"
          >
            +58 412-9079930
          </a>
        </div>
      </div>
      <div className="flex items-start">
        <MapPin className="text-pink-600 dark:text-pink-400 mr-4 mt-1" />
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            { labels.location }
          </h4>
          <p className="text-gray-800 dark:text-white">
            Venezuela
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <LinkIcon className="text-pink-600 dark:text-pink-400 mr-4 mt-1" />
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            { labels.portfolio }
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
      { labels.social }
    </p>
  </div>
);

export default function Contact ()
{
  const { t } = useLanguage();
  const [ success, setSuccess ] = useState( false );

  const handleSubmit = ( data: { name: string; email: string; subject: string; message: string } ) =>
  {
    console.log( "Form submitted:", data );
    // Aquí iría la lógica para enviar el formulario
    setSuccess( true );
    // Ocultar el mensaje después de 5 segundos
    setTimeout( () =>
    {
      setSuccess( false );
    }, 5000 );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl mb-2 text-gray-800 dark:text-white">{ t( "contact.title" ) }</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{ t( "contact.description" ) }</p>
        </div>
        <div className="flex justify-center">
          <ContactCard
            labels={ {
              title: t( "contact.info.title" ),
              email: t( "contact.info.email" ),
              phone: t( "contact.info.phone" ),
              location: t( "contact.info.location" ),
              portfolio: t( "contact.info.portfolio" ),
              social: t( "contact.info.social" )
            } }
          />
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          <div className="md:col-span-5">
            <ContactCard
              labels={ {
                title: t( "contact.info.title" ),
                email: t( "contact.info.email" ),
                phone: t( "contact.info.phone" ),
                location: t( "contact.info.location" ),
                portfolio: t( "contact.info.portfolio" ),
                social: t( "contact.info.social" )
              } }
            />
          </div>

          <div className="md:col-span-7">
            <ContactForm
              labels={ {
                title: t( "contact.form.title" ),
                name: t( "contact.form.name" ),
                email: t( "contact.form.email" ),
                subject: t( "contact.form.subject" ),
                message: t( "contact.form.message" ),
                send: t( "contact.form.send" ),
                success: t( "contact.form.success" )
              } }
              onSubmit={ handleSubmit }
              showSuccess={ success }
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}


