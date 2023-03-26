
import { createContext, useEffect, useState } from "react"
import { fetchDataFromApi } from "../utils/Api";

export const Context = createContext();

export const AppContext =(props)=>{
    const[loading, setLoading]= useState(false)
    const[searchResult,setSearchResult]= useState(false)
    const[selectCategories,setSelectCategories]= useState("New")
    const[mobileMenu,setMobileMenu]= useState(false)

    useEffect(()=>{
        fetchSelectedCategoriesData(selectCategories)
    },[selectCategories])

    const fetchSelectedCategoriesData =(query)=>{
       setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
          console.log(contents);
          setSearchResult(contents)
          setLoading(false)
       });
    };

    return(
        <Context.Provider value={{
            loading, 
            setLoading,
            searchResult,
            setSearchResult,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )
}