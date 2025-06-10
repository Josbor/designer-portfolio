import { Briefcase } from "lucide-react"
import { useLanguage } from "../context/language-context"
import data from "../locales/data.json"
export default function Experience ()
{
  const { t, language } = useLanguage()

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl mb-2 text-gray-800 dark:text-white">{ t( "experience.title" ) }</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{ t( "experience.description" ) }</p>
        </div>

        <div className="max-w-4xl mx-auto">
          { data.experience.items.map( ( exp, index ) => (
            <div
              key={ index }
              className={ `flex flex-col md:flex-row gap-4 mb-10 relative ${ index !== data.experience.items.length - 1 ? "pb-10" : ""
                }` }
            >
              {/* Timeline connector */ }
              { index !== data.experience.items.length - 1 && (
                <div className="absolute left-4 md:left-[7.5rem] top-16 bottom-0 w-0.5 bg-pink-600 dark:bg-pink-400"></div>
              ) }

              {/* Date */ }
              <div className="md:w-60 flex items-start">
                <div className="bg-pink-600 dark:bg-pink-500 text-white p-2 rounded-full mr-4 z-10">
                  <Briefcase size={ 20 } />
                </div>
                <span className="font-medium text-gray-500 dark:text-gray-400 pt-1">{ exp.period }</span>
              </div>

              {/* Content */ }
              <div className="flex-1 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-medium text-lg text-gray-800 dark:text-white">{ exp.title[ language ] }</h3>
                <p className="mb-2 text-pink-600 dark:text-pink-400">{ exp.company }</p>
                <p className="text-gray-600 dark:text-gray-300">{ exp.description[ language ] }</p>
              </div>
            </div>
          ) ) }
        </div>
      </div>
    </section>
  )
}
