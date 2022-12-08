import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Country } from './Country'

export const Countries = (props) => {
  return (
    <section>{props.countries.map((country) => {
      const NewCountry = {country,id: uuidv4()}
      return <Country {...NewCountry} key={NewCountry.id} onRemoveCountry={props.onRemoveCountry}/>
    })}</section>
  )
}
