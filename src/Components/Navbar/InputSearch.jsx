"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation";
import { useRef } from "react"

const InputSearch = () => {
 const SearchRef = useRef();
 const router = useRouter()


 const handleClick = event => {
    const keyword = SearchRef.current.value
   if(!keyword || keyword.trim() === " ") return 
   
    if(event.key === "Enter" || event.type === "click"){
    event.preventDefault()
    router.push(`/search/${keyword}`)
   }
}

 

    return(
        <div className="relative">
          <input 
            placeholder="Search Anime"
            className="w-50px py-1 pl-4 pr-6 rounded-lg"
            ref={SearchRef}
            onKeyDown={handleClick}
            />
            <button className="absolute top-1 end-3" onClick={handleClick}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}


export default InputSearch