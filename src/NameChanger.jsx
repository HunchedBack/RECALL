import { useState } from "react"; 

const names = ["Fahmy", "Kimi", "Jody"];

export default function NameChanger() {

    const [nameIndex, setNameIndex] = useState(0);

    function handleClick() {
        setNameIndex((prev) => (prev + 1) % names.length);
    
    }

    return (
        <div className="flex items-center gap-4">
            <p className="text-slate-100 text-xl"> Hello {names[nameIndex]}</p>
            <button className="px-4 py-2 bg-emerald-500 text-slate-900 font-semibold rounded" onClick={handleClick}>
                Next Name
            </button>
        </div>  
    );    

}