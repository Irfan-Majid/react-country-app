import React from 'react'

export const Country = (props) => {
    const {country} = props;
    const {name,flags,capital,population,area} = country;
  return (
    <artical>
        <div>
            <img src={flags.png} alt={name.common} height="10px" width="10px"/>
            <span>{name.common}</span>
        </div>
        <button onClick={()=>{
            props.onRemoveCountry(name.common)
        }}>Remove</button>
    </artical>
  )
}
