import { useState } from "react"

function App() {
  const [number, setNumber] = useState(0)

  function handleClick() {
    setNumber(Math.floor(Math.random()*100))
  }
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">

        <button onClick = {handleClick}
        className="px-4 py-2 bg-emerald-500 text-slate-900 font-semibold rounded"
        >
          Randomiser
        </button>
        <p className="text-slate-100 text-xl">The random number is: {number}</p>
      
    </div>
  )
}

export default App