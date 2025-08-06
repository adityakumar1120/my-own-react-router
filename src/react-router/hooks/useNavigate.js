import React from 'react'
import { usePath } from '../MyBrowserRouter'

export default function useNavigate() {
    const {setCurrentPath} = usePath()
  return (to , {replace = false , state = {} = {}})=>{
    if(replace){
        window.history.replaceState(state , '', to)
    }else{
        window.history.pushState(state, '', to)
    }
    setCurrentPath(to)
  }
}
