import { useState } from "react"
import { X } from "lucide-react"
import { useLanguage } from "../context/language-context"
import data from "../locales/data.json"
interface PortfolioItem
{
  id: number
  title: string
  category: string
  image: string
  description: string
  client: string
  year: string
  gridArea: string
}

export default function Portfolio ()
{
  const { t, language } = useLanguage()
  const [ selectedItem, setSelectedItem ] = useState<PortfolioItem | null>( null )



  const portfolioItems = data.portfolio.items.map( ( { title, category, description, client, year, image }, index: number ) => ( {
    id: index + 1,
    title: title[ language ],
    category: category[ language ],
    image: image || "/placeholder.svg",
    description: description[ language ],
    client: client,
    year: year,
    gridArea: [ "a", "b", "c", "d", "e", "f" ][ index ],
  } ) )

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl mb-2 text-gray-800 dark:text-white">{ t( "portfolio.title" ) }</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{ t( "portfolio.description" ) }</p>
        </div>

        {/* Grid creativo para la galería - Versión móvil */ }
        <div className="block md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto gap-y-6">
            { portfolioItems.map( ( item ) => (
              <div
                key={ item.id }
                className="group cursor-pointer overflow-hidden rounded-xl relative"
                onClick={ () => setSelectedItem( item ) }
              >
                <div className="relative w-full aspect-square">
                  <img
                    src={ item.image || "/placeholder.svg" }
                    alt={ item.title }

                    className="object-cover  !w-full !h-full  transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent  transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium">{ item.title }</h3>
                    <p className="text-pink-300">{ item.category }</p>
                  </div>
                </div>
              </div>
            ) ) }
          </div>
        </div>

        {/* Grid creativo para la galería - Versión desktop */ }
        <div className="hidden md:block max-w-6xl mx-auto">
          <div
            className="grid gap-4"
            style={ {
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "repeat(12, 5vw)",
              gridTemplateAreas: `
                "a a a a b b b b c c c c"
                "a a a a b b b b c c c c"
                "a a a a b b b b c c c c"
                "a a a a b b b b c c c c"
                "d d d d d d e e e e e e"
                "d d d d d d e e e e e e"
                "d d d d d d e e e e e e"
                "d d d d d d e e e e e e"
                "f f f f f f f f f f f f"
                "f f f f f f f f f f f f"
                "f f f f f f f f f f f f"
                "f f f f f f f f f f f f"
              `,
            } }
          >
            { portfolioItems.map( ( item ) => (
              <div
                key={ item.id }
                className="group cursor-pointer overflow-hidden rounded-xl relative"
                style={ { gridArea: item.gridArea } }
                onClick={ () => setSelectedItem( item ) }
              >
                <div className="relative  w-full h-full">
                  <img
                    className=" md:object-cover  !w-full !h-full transition-transform duration-500 group-hover:scale-110"
                    src={ item.image || "/placeholder.svg" }
                    alt={ item.title }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium">{ item.title }</h3>
                    <p className="text-pink-300">{ item.category }</p>
                  </div>
                </div>
              </div>
            ) ) }
          </div>
        </div>

        {/* Modal */ }
        { selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{ selectedItem.title }</h3>
                  <button
                    onClick={ () => setSelectedItem( null ) }
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-800 dark:text-white" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>

                <div className="mb-6 rounded-lg overflow-hidden">
                  <img
                    src={ selectedItem.image || "/placeholder.svg" }
                    alt={ selectedItem.title }
                    width={ 800 }
                    height={ 600 }
                    className="w-full h-auto"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      { t( "portfolio.modal.category" ) }
                    </h4>
                    <p className="font-medium text-gray-800 dark:text-white">{ selectedItem.category }</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      { t( "portfolio.modal.client" ) }
                    </h4>
                    <p className="font-medium text-gray-800 dark:text-white">{ selectedItem.client }</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      { t( "portfolio.modal.year" ) }
                    </h4>
                    <p className="font-medium text-gray-800 dark:text-white">{ selectedItem.year }</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    { t( "portfolio.modal.description" ) }
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">{ selectedItem.description }</p>
                </div>
              </div>
            </div>
          </div>
        ) }
      </div>
    </section>
  )
}
