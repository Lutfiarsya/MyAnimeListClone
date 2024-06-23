import Image from "next/image"
import Link from "next/link"
const Listanime = ({ api }) => {
    return(
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:gap-6 gap-2 p-4">
            {api.data?.map((anime, index) => {
                return(
                    <div key={index} className="bg-color-primary shadow-lg shadow-black shadow-sm hover:shadow-md hover:shadow-black duration-200 p-6 md:my-8 my-2 md:hover:scale-110 transition-all rounded-md hover:scale-105">
                    <Link href = {`/anime/${anime.mal_id}`}  className="cursor-pointer hover:text-color-secondary text-white trainsiton-all duration-100">
                    <Image 
                        src={anime.images?.webp.image_url}
                        alt='Service'
                        width={200}
                        height={300}
                    />
                    <h3 className="font-bold text-md h-16 mt-4">{anime.title}</h3>
                    </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Listanime