import React, {useState,useEffect} from 'react'
import API_KEY from './keys'
import { useStateValue } from './StateProvider'

const CONTEXT_KEY ="2a1f82b6b752f54a3"
const useGoogleSearch=()=> {
    const [{term}, dispatch] = useStateValue()
    const [data, setData]= useState(null)
    useEffect(()=>{
        const fetchData = async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result =>{
                setData(result)
            })
        }
        fetchData()
    }, [term])

    return {data}
}

export default useGoogleSearch
