
import React,{ Context, useContext, useState } from 'react'


const locales = {
		lang: "eng-us", curr: "$",
	    lang: "eng-gb", curr: "£",
		lang: "de-de", curr: "€"
	}

export const LocaleContext= React.createContext	()

export function LocaleContextProvider(props) {
const [locale, setLocale] =useState("de-de")
	return <LocaleContext.Provider value={[locale, setLocale]}>
	{props.children}
	</LocaleContext.Provider>
}
export const useLocaleContext = () => {
    return useContext(LocaleContext)}