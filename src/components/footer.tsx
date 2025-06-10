import { Instagram, Twitter, Linkedin, Facebook, Github } from "lucide-react"
import { useLanguage } from "../context/language-context"
import data from "../locales/data.json"
export default function Footer ()
{
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="font-bold text-lg mb-4 text-center md:text-left">SHARON IBARRA</h3>
            <p className="text-gray-400 mb-4 max-w-xs mx-auto md:mx-0 text-center md:text-left">
              { t( "footer.description" ) }
            </p>
            <div className="flex space-x-2 justify-center md:justify-start">
              <a href="#" className="hover:text-pink-400 transition-colors p-2">
                <span className="sr-only">Instagram</span>
                <Instagram size={ 20 } />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors p-2">
                <span className="sr-only">Twitter</span>
                <Twitter size={ 20 } />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors p-2">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={ 20 } />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors p-2">
                <span className="sr-only">Facebook</span>
                <Facebook size={ 20 } />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors p-2">
                <span className="sr-only">Github</span>
                <Github size={ 20 } />
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-bold text-lg mb-4 text-center md:text-left">{ t( "footer.quickLinks" ) }</h3>
            <nav className="flex flex-col space-y-2 items-center md:items-start">
              <a href="#hero" className="text-gray-400 hover:text-pink-400 transition-colors">
                { t( "nav.home" ) }
              </a>
              <a href="#portfolio" className="text-gray-400 hover:text-pink-400 transition-colors">
                { t( "nav.portfolio" ) }
              </a>
              <a href="#skills" className="text-gray-400 hover:text-pink-400 transition-colors">
                { t( "nav.skills" ) }
              </a>
              <a href="#experience" className="text-gray-400 hover:text-pink-400 transition-colors">
                { t( "nav.experience" ) }
              </a>
              <a href="#contact" className="text-gray-400 hover:text-pink-400 transition-colors">
                { t( "nav.contact" ) }
              </a>
            </nav>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-bold text-lg mb-4 text-center md:text-left">{ t( "footer.services" ) }</h3>
            <nav className="flex flex-col space-y-2 items-center md:items-start">
              { data.footer.servicesList.map( ( service, index ) => (
                <a key={ index } href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  { service[ language ] }
                </a>
              ) ) }
            </nav>
          </div>
        </div>

        <div className="h-px bg-gray-700 my-8" />

        <p className="text-center text-gray-500">
          © { currentYear } Sharon Ibarra. { t( "footer.rights" ) }
        </p>
      </div>
    </footer>
  )
}
