"use client"
import Link from "next/link"


const GenreAnime = ({ api }) => {
  
const handleClick = () => {
  
}
  return(  
    <div className="grid md:grid-cols-4 grid-cols-2 mx-0 md:gap-2 md:p-4 p-2">
        {api.data.map((anime, index) => {
            return(
                 <div key={index} className="md:w-56 w-40 h-10 bg-violet-500 text-center my-2 md:my-0 flex items-center justify-center m-auto">
                  <Link href={`/Genre/${anime.mal_id}`}>
                    <button>
                        <h2 className="text-white" value={anime.name}>{anime.name}</h2>
                    </button>
                  </Link>
                 </div>
            )
        })}
    </div>
  )
}

export default GenreAnime