import React from 'react'
import { useParams } from 'react-router'

export function Pokemon() {
  const {id} = useParams()
  return (
    <div>Pokemon {id}</div>
  )
}