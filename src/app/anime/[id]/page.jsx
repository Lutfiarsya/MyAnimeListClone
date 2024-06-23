"use client"
import Header from "@/Components/ListAnime/Header"
import { getTopAnime } from "@/libs/apiCall"
import Image from "next/image"
import { Star } from "@phosphor-icons/react"
import VideoPlayer from "@/Components/Utilities/VideoPlaye"

const Page = async({params: {id}}) => {
const anime = await getTopAnime(`anime/${id}/full`)




return(
    <>
    <div  className="p-4">
        <h3 className="text-white text-2xl font-bold">{anime.data.title} - {anime.data.year}</h3>
    </div>
    <div className="flex sm:flex-nowrap w-full h-full flex-col gap-2 pt-4 px-4">
        <Image 
            src={anime.data.images.jpg.image_url}
            alt={anime.data.images.webp.image_url}
            width={250}
            height={550}
            className="rounded object-contain m-auto my-2"
        />
        <Header title={'Synopsis:'}/>
        <p className="text-white text-justify text-l w-11/12 my-2">{anime.data.synopsis}</p>
            <div className="my-2">
                <Header title={`Informasi seputar: ${anime.data.title}`}/>
                <ul className="my-4 text-white gap-4 flex flex-col">
                    <li>Judul alternatif : {anime.data.title_english}</li>
                    <li>Total episode    : {anime.data.episodes}</li>
                    <li>Studio           : {anime.data.studios[0].name}</li>
                    <li>Genre            : {anime.data.genres[0].name}</li>
                </ul>
            </div>
        <Header title={'Statistics'}/>
        <div className="md:flex md:text-base text-sm md:flex-row grid grid-cols-2 items-center justify-center md:gap-14 gap-2 my-5 text-center m-auto text-white">
            <div className="md:w-60 w-40 md:h-18 h-20 text-center bg-color-primary rounded p-2 justify-center items-center flex flex-col border-color-third border-2 hover:scale-110 transition-all duration-2 cursor-pointer">
                <h2 className="font-bold">Rating:</h2>
                <h2>{anime.data.rating}</h2>
            </div>
            <div className="md:w-60 w-40 md:h-18 h-20 text-center bg-color-primary rounded p-2 justify-center items-center flex flex-col border-color-third border-2 hover:scale-110 transition-all duration-2 cursor-pointer">
                <h2 className="font-bold">Rank:</h2>
                <h2>#{anime.data.rank}</h2>
            </div>            
            <div className="md:w-60 w-40 md:h-18 h-20 text-center bg-color-primary rounded p-2 justify-center items-center flex flex-col border-color-third border-2 hover:scale-110 transition-all duration-2 cursor-pointer">
                <h2 className="font-bold">Popularity:</h2>
                <h2>#{anime.data.popularity}</h2>
            </div>
            <div className="md:w-60 w-40 md:h-18 h-20 text-center bg-color-primary rounded p-2 justify-center items-center flex flex-col border-color-third border-2 hover:scale-110 transition-all duration-2 cursor-pointer">
                <h2 className="font-bold">Score:</h2>
                <div className="flex flex-row justify-center text-center">
                    <Star size={20}  className="text-yellow-500"/>
                    <h2 className="mx-2">{anime.data.score}</h2>
                </div>
            </div>
        </div>
     <div>
        <Header title={`Trailer ${anime.data.title}`}/>
        <VideoPlayer Trailer={anime.data.trailer.youtube_id}/>
     </div>
    </div>
    </>
)

}

export default Page