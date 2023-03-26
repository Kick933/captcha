import { useState } from "react"
import Captcha from "./components/Captcha"
import Input from "./components/Input"
import randomString from "./utils/randomString"
import useGetString from "./utils/useGetString"

// 
function App() {
  const [user,setUser] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [verfied, setVerified] = useState(false)
  const [string1, renewString1] = useGetString()
  const [string2, renewString2] = useGetString()
  console.log(string1,string2)
  return (
    <form className="flex flex-col justify-center gap-4 mt-8 lg:mt-16 items-center">
      <Input type='text' required={true} name="user" value={user} onChange={setUser} labelName="User Name" placeholder="User Name" />
      <Input type='email' required={true} name="email" value={email} onChange={setEmail} labelName="Email Address" placeholder="Email Address" />
      <Input type='password' required={true} name="password" value={password} onChange={setPassword} labelName="Password" placeholder="Password" />
      <Captcha setVerified={setVerified} string={string1} string2={string2} refresh={renewString1} />
      <button onClick={renewString1} className="w-48 h-10 bg-indigo-300 disabled:bg-gray-600 disabled:text-white hover:bg-indigo-400 active:bg-indigo-500 rounded-xl">Refresh Captcha</button>
      <button disabled={!verfied} className="w-48 h-10 bg-indigo-300 disabled:bg-gray-600 disabled:text-white hover:bg-indigo-400 active:bg-indigo-500 rounded-xl">Sign Up</button>
    </form>
  )
}

export default App
