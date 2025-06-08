import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Importamos los archivos de traducción directamente en el componente
import en from "../locales/en.json"
import es from "../locales/es.json"

const esTranslations = es
const enTranslations = en
type Translations = typeof esTranslations

interface LanguageContextType
{
  language: string
  translations: Translations
  setLanguage: ( lang: string ) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>( undefined )

export function LanguageProvider ( { children }: { children: ReactNode } )
{
  const [ language, setLanguage ] = useState( "es" )
  const [ translations, setTranslations ] = useState<Translations>( esTranslations )

  useEffect( () =>
  {
    // Verificar si hay un idioma guardado en localStorage
    try
    {
      const savedLanguage = localStorage.getItem( "language" )
      if ( savedLanguage )
      {
        setLanguage( savedLanguage )
      }
    } catch ( error )
    {
      console.error( "Error accessing localStorage:", error )
    }
  }, [] )

  useEffect( () =>
  {
    // Actualizar las traducciones cuando cambia el idioma
    if ( language === "en" )
    {
      setTranslations( enTranslations )
    } else
    {
      setTranslations( esTranslations )
    }

    // Guardar el idioma en localStorage
    try
    {
      localStorage.setItem( "language", language )
    } catch ( error )
    {
      console.error( "Error setting localStorage:", error )
    }
  }, [ language ] )

  return <LanguageContext.Provider value={ { language, translations, setLanguage } }>{ children }</LanguageContext.Provider>
}

export function useLanguage ()
{
  const context = useContext( LanguageContext )
  if ( context === undefined )
  {
    throw new Error( "useLanguage must be used within a LanguageProvider" )
  }
  return context
}
