import { ArrowDownCircle } from "lucide-react"
import { useLanguage } from "../context/language-context"

export default function Hero ()
{
  const { translations } = useLanguage()

  return (
    <section id="hero" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="font-bold text-4xl md:text-5xl text-gray-800 dark:text-white">
              { translations.hero.title }{ " " }
              <span className="text-pink-600 dark:text-pink-400">{ translations.hero.titleHighlight }</span>{ " " }
              { translations.hero.titleEnd }
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0 text-center md:text-left">
              { translations.hero.description }
            </p>

            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <a
                href="#portfolio"
                className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors dark:bg-pink-500 dark:hover:bg-pink-600"
              >
                { translations.hero.portfolioButton }
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-pink-600 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors dark:border-pink-400 dark:text-pink-400 dark:hover:bg-gray-800"
              >
                { translations.hero.contactButton }
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="w-72 h-72 md:w-96 md:h-96 relative mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-xl">
                <img
                  src="/profile-photo.png"
                  alt="Sharon Ibarra - Diseñadora Gráfica"
                  width={ 400 }
                  height={ 400 }
                  className="w-full h-full object-cover object-center"
                  style={ { objectPosition: "50% 30%" } }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a href="#portfolio" className="animate-bounce">
            <ArrowDownCircle size={ 40 } className="text-pink-600 dark:text-pink-400" />
          </a>
        </div>
      </div>
    </section>
  )
}
