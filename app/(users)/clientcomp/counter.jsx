import { useState } from "react"

const Counter = () => {
    const [count,setcount]=useState(0)
  return (
    <div>
      <button className="bg-blue-500 px-4 py-4 rounded-full" onClick={()=>setcount((prev)=>prev+1)}>Increment - {count}</button>
    </div>
  )
}

export default Counter
