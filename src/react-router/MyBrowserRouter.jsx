import React, { createContext, useContext, useEffect, useState } from 'react'

//why using context api?
//cause i want to access currentPath, setCurrentPath to MyLink component
const pathContext = createContext()
export default function MyBrowserRouter({children}) {
    const [currentPath , setCurrentPath] = useState(window.location.pathname)
    const [params , setParams] = useState({})
  return (
    <pathContext.Provider value={{currentPath , setCurrentPath , params , setParams}}>
        {children}
    </pathContext.Provider>
  )
}

export const usePath = () => useContext(pathContext)
