
export default function Input({type,placeholder="",value,onChange,name,labelName,required=false}) {
    const id = name
  return (
    <>
    <label htmlFor={id}>{labelName}</label>
    <input required={required} className='w-56 h-10 rounded-xl border-indigo-300 border-2 px-2 shadow-lg hover:shadow-xl' name={name} id={id} type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </>
  )
}
