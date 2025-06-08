import { useEffect, useState } from "react"
import { Menu, Moon, Sun, Globe } from "lucide-react"
import { useLanguage } from "../context/language-context"


export default function Navbar ()
{
  const [ mobileOpen, setMobileOpen ] = useState( false )
  const [ isDark, setIsDark ] = useState( true )
  const { language, translations, setLanguage } = useLanguage()



  // Verificar el tema actual cuando el componente se monta
  useEffect( () =>
  {

    try
    {
      setIsDark( document.documentElement.classList.contains( "dark" ) )
    } catch ( e )
    {
      console.error( "Error checking theme:", e )
    }
  }, [] )

  // Función para cambiar el tema
  const toggleTheme = () =>
  {
    try
    {
      if ( document.documentElement.classList.contains( "dark" ) )
      {
        document.documentElement.classList.remove( "dark" )
        localStorage.setItem( "theme", "light" )
        setIsDark( false )
      } else
      {
        document.documentElement.classList.add( "dark" )
        localStorage.setItem( "theme", "dark" )
        setIsDark( true )
      }
    } catch ( e )
    {
      console.error( "Error toggling theme:", e )
    }
  }

  const menuItems = [
    { text: translations.nav.home, href: "#hero" },
    { text: translations.nav.portfolio, href: "#portfolio" },
    { text: translations.nav.skills, href: "#skills" },
    { text: translations.nav.experience, href: "#experience" },
    { text: translations.nav.contact, href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur dark:bg-gray-900/95 dark:border-gray-800">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="font-bold text-xl text-gray-800 dark:text-white">SHARON IBARRA</div>

        {/* Desktop Navigation */ }
        <nav className="hidden md:flex items-center gap-6">
          { menuItems.map( ( item ) => (
            <a
              key={ item.text }
              href={ item.href }
              className="text-sm font-medium text-gray-700 hover:text-pink-600 dark:text-gray-200 dark:hover:text-pink-400 transition-colors"
            >
              { item.text }
            </a>
          ) ) }
          <div className="flex items-center gap-2">
            {/* Theme Toggle */ }
            <button
              onClick={ toggleTheme }
              className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              aria-label={ isDark ? "Switch to light mode" : "Switch to dark mode" }
            >
              { isDark ? <Sun className="h-5 w-5 text-pink-400" /> : <Moon className="h-5 w-5 text-pink-600" /> }
            </button>

            {/* Language Toggle */ }
            <button
              onClick={ () => setLanguage( language === "es" ? "en" : "es" ) }
              className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              aria-label={ language === "es" ? translations.language.en : translations.language.es }
            >
              <Globe className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */ }
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle */ }
          <button
            onClick={ toggleTheme }
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label={ isDark ? "Switch to light mode" : "Switch to dark mode" }
          >
            { isDark ? <Sun className="h-5 w-5 text-pink-400" /> : <Moon className="h-5 w-5 text-pink-600" /> }
          </button>

          {/* Language Toggle */ }
          <button
            onClick={ () => setLanguage( language === "es" ? "en" : "es" ) }
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label={ language === "es" ? translations.language.en : translations.language.es }
          >
            <Globe className="h-5 w-5 text-pink-600 dark:text-pink-400" />
          </button>

          {/* Mobile Menu Button */ }
          <button
            onClick={ () => setMobileOpen( !mobileOpen ) }
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5 text-gray-800 dark:text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */ }
      { mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              { menuItems.map( ( item ) => (
                <li key={ item.text }>
                  <a
                    href={ item.href }
                    className="block py-2 text-center text-gray-700 hover:text-pink-600 dark:text-gray-200 dark:hover:text-pink-400 transition-colors"
                    onClick={ () => setMobileOpen( false ) }
                  >
                    { item.text }
                  </a>
                </li>
              ) ) }
            </ul>
          </nav>
        </div>
      ) }
    </header>
  )
}
