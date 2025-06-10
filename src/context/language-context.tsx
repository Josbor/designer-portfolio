import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import data from "../locales/data.json"

interface LanguageContextType
{
  language: "en" | "es";
  t: ( path: string ) => string;
  setLanguage: ( lang: "en" | "es" ) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>( undefined );

function getTranslation ( obj: any, path: string, language: string ): string
{
  const parts = path.split( '.' );
  let current = obj;

  for ( let i = 0; i < parts.length; i++ )
  {
    const part = parts[ i ];
    if ( !current || typeof current !== 'object' )
    {
      return path;
    }

    // If we find language keys at this level, return the translation
    if ( i === parts.length - 1 && current[ part ] && typeof current[ part ] === 'object' && 'en' in current[ part ] )
    {
      return current[ part ][ language ] || path;
    }

    // If we find a language object, get the translation from it
    if ( current[ part ] && current[ part ][ language ] )
    {
      if ( i === parts.length - 1 )
      {
        return current[ part ][ language ];
      }
      current = current[ part ][ language ];
    } else
    {
      current = current[ part ];
    }
  }

  if ( typeof current === 'string' )
  {
    return current;
  }

  if ( current && typeof current === 'object' && language in current )
  {
    return current[ language ];
  }

  return path;
}

export function LanguageProvider ( { children }: { children: ReactNode } )
{
  const [ language, setLanguage ] = useState<"en" | "es">( "es" );

  useEffect( () =>
  {
    try
    {
      const savedLanguage = localStorage.getItem( "language" ) as "en" | "es" | null;
      if ( savedLanguage && ( savedLanguage === "en" || savedLanguage === "es" ) )
      {
        setLanguage( savedLanguage );
      }
    } catch ( error )
    {
      console.error( "Error accessing localStorage:", error );
    }
  }, [] );

  useEffect( () =>
  {
    try
    {
      localStorage.setItem( "language", language );
    } catch ( error )
    {
      console.error( "Error setting localStorage:", error );
    }
  }, [ language ] );

  const t = ( path: string ): string =>
  {
    return getTranslation( data, path, language );
  };

  return (
    <LanguageContext.Provider value={ { language, setLanguage, t } }>
      { children }
    </LanguageContext.Provider>
  );
}

export function useLanguage ()
{
  const context = useContext( LanguageContext );
  if ( context === undefined )
  {
    throw new Error( "useLanguage must be used within a LanguageProvider" );
  }
  return context;
}
