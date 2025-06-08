

import { useEffect, useState } from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "../context/language-context"


export function LanguageToggle ()
{
  const { language, setLanguage, translations } = useLanguage()
  const [ mounted, setMounted ] = useState( false )

  // Evitar hidratación incorrecta
  useEffect( () =>
  {
    setMounted( true )
  }, [] )

  if ( !mounted )
  {
    return (
      <button className="h-9 w-9 rounded-full" aria-label="Toggle language">
        <span className="sr-only">Toggle language</span>
      </button>
    )
  }

  return (
    <button


      className="h-9 w-9 rounded-full"
      onClick={ () => setLanguage( language === "es" ? "en" : "es" ) }
      aria-label={ language === "es" ? translations.language.en : translations.language.es }
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">{ language === "es" ? translations.language.en : translations.language.es }</span>
    </button>
  )
}
