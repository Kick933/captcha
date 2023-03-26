import { useState } from "react"
import randomString from "../utils/randomString"

// Use image
// Put text on it
// Put another div with random text and very low visibility on it.
export default function Captcha({setVerified, string, string2}) {
    const [value,setValue] = useState("")
    function handleChange(e){
        const val = e.target.value
        setValue(val)
        if(val == string) setVerified(true)
        else setVerified(false)
    }
    return (
        <div className="flex justify-center items-center gap-4 flex-col text-center">
            <div className="w-56 h-10 text-center relative">
                <img className="w-56 h-10 z-10 absolute " src="./captcha.png"></img>
                <p className="text-black absolute w-56 h-10 z-20 text-2xl">{string}</p>
                <div className="z-30 bg-blue-100 absolute opacity-20 w-56 h-10">{string2}{string2}</div>
            </div>
            <input className="rounded-xl px-2 border-2 h-10 w-56 hover:shadow-xl shadow-md border-indigo-300" type="text" value={value} name="value" onChange={handleChange} placeholder="Enter Captcha"></input>
        </div>
    )
}
