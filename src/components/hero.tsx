import { ArrowDownCircle } from "lucide-react"
import { useLanguage } from "../context/language-context"
import ProfilePicture from "./profile"

export default function Hero ()
{
  const { t } = useLanguage()

  const ColunmTittle = () => (
    <div className="md:w-full space-y-6 text-center md:text-left">
      <h1 className="font-bold text-3xl md:text-5xl text-gray-800 dark:text-white">
        { t( "hero.title" ) }{ " " }
        <span className="text-cyan-500 dark:text-cyan-300">{ t( "hero.titleHighlight" ) }</span>{ " " }
        { t( "hero.titleEnd" ) }
      </h1>

      <p className="text-sm text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0 text-center md:text-left">
        { t( "hero.description" ) }
      </p>

      <div className="flex gap-4 pt-4 justify-center md:justify-start">
        <a
          href="#portfolio"
          className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors dark:bg-pink-500 dark:hover:bg-pink-600"
        >
          { t( "hero.portfolioButton" ) }
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-pink-600 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors dark:border-pink-400 dark:text-pink-400 dark:hover:bg-gray-800"
        >
          { t( "hero.contactButton" ) }
        </a>
      </div>
    </div>
  )

  return (
    <section id="hero" className="w-full lg:h-screen pt-4 lg:pt-16 flex justify-center items-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className=" md:w-10/12 lg:w-8/12 mx-auto px-4">
        <div className="flex  flex-col-reverse md:grid md:grid-cols-2 items-center justify-between gap-5 lg:gap-10">
          <ColunmTittle />
          <ProfilePicture fill1={ document.documentElement.classList.contains( "dark" ) ? "#00e5e5" : "#06b6d4" } fill2={ document.documentElement.classList.contains( "dark" ) ? "#ec4899" : "#db2777" }
            className=" w-9/12 lg:w-full "

          />

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
