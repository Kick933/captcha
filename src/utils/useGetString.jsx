import { useEffect, useState } from "react"
import randomString from "./randomString"

export default function useGetString() {
    const [string,setString] = useState(null)
    const [refresh, setRefresh] = useState(null)
    function renewString(){
        setRefresh(prev => !prev)
    }
    useEffect(() =>{
        setString(randomString())
    },[refresh])
  return [string,renewString]
}
