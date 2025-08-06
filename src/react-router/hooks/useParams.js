import React from 'react'
import { usePath } from '../MyBrowserRouter'

export default function useParams () {
    const {params} = usePath()
  return params
}
