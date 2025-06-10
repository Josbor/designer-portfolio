
import { Palette, Layers, Monitor, BookOpen, PenTool, Lightbulb } from "lucide-react"
import { useLanguage } from "../context/language-context"
import data from "../locales/data.json"
export default function Skills ()
{
  const { t, language } = useLanguage()

  const getIcon = ( index: number ) =>
  {
    const icons = [
      <Palette key={ 0 } size={ 32 } className="text-pink-600 dark:text-pink-400" />,
      <Monitor key={ 1 } size={ 32 } className="text-pink-600 dark:text-pink-400" />,
      <PenTool key={ 2 } size={ 32 } className="text-pink-600 dark:text-pink-400" />,
      <Layers key={ 3 } size={ 32 } className="text-pink-600 dark:text-pink-400" />,
      <BookOpen key={ 4 } size={ 32 } className="text-pink-600 dark:text-pink-400" />,
      <Lightbulb key={ 5 } size={ 32 } className="text-pink-600 dark:text-pink-400" />,
    ]
    return icons[ index % icons.length ]
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl mb-2 text-gray-800 dark:text-white">{ t( "skills.title" ) }</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{ t( "skills.description" ) }</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          { data.skills.categories.map( ( category, index ) => (
            <div
              key={ index }
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4 justify-center md:justify-start">
                { getIcon( index ) }
                <h3 className="ml-3 font-medium text-lg text-gray-800 dark:text-white">{ category.title[ language ] }</h3>
              </div>

              <div className="space-y-4">
                { category.skills.map( ( skill, skillIndex ) => (
                  <div key={ skillIndex }>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-300">{ skill.name }</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{ skill.level }%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                      <div
                        className="h-2 bg-pink-600 rounded-full dark:bg-pink-400"
                        style={ { width: `${ skill.level }%` } }
                      ></div>
                    </div>
                  </div>
                ) ) }
              </div>
            </div>
          ) ) }
        </div>
      </div>
    </section>
  )
}
