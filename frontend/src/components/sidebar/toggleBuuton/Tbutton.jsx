import { useState } from "react"

export default function Tbutton({setOpen}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick =()=>{
    setOpen(preve =>!preve)
    setIsOpen(preve => !preve)
  }
  return (
    <button onClick={handleClick}>

      {!isOpen ?   <img src="/me.png" alt="" /> : <img src="/cross.png" alt="" />}
     
      
    </button>
  )
}
