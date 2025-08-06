import React, { useState } from 'react'
import { usePath } from './MyBrowserRouter'

export default function MyLink({children , to ,state , style}) {
  const {currentPath , setCurrentPath} = usePath()


  const handleClick = (e)=>{
    e.preventDefault()
    window.history.pushState({state , pathname : currentPath} , '' ,to)
    setCurrentPath(to)
    }
  return (
    <a onClick={handleClick} style={style  ? typeof style === 'function'  ? style({isActive : currentPath === to ? true : false}) : style : undefined} className={currentPath === to ? 'active' : ''}>{children}</a>
  )
}
