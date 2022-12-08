import React,{useState,useEffect} from 'react'

export const Search = (props) => {
    const [data,setData] = useState('');
    const handleChange = (e) => {
        setData(e.target.value)
    }
    useEffect(() => {
        props.onSearch(data)
    },[data])
  return (
    <div>
        <input type='text' placeholder='Search' value={data} onChange={handleChange}/>
    </div>
  )
}
