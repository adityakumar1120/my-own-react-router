import React from 'react'
import useLocation from '../react-router/hooks/useLocation'
export default function About({data}) {
  const info = useLocation()
  return (
    <div>{data ? data : 'About'}</div>
  )
}
