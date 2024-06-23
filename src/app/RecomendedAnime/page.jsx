"use client"
import Listanime from "@/Components/ListAnime"
import HeaderMenu from "@/Components/Utilities/HeaderMenu"
import Pagination from "@/Components/Utilities/Pagination"
import { RecomendedAnime, getNestedData } from "@/libs/apiCall"
import { useEffect, useState } from "react"


const Page = async() => {
const [page, setPage] = useState(1)
const [AnimeRecomended, setAnimeRecomended] = useState([])

const fetchData = async() => {
    let response = await getNestedData(`recommendations/anime?page=${page}`,`entry`)
    response = RecomendedAnime(response, 8)
    setAnimeRecomended(response)
}

useEffect(() => {
fetchData()
},[page])


return(
    <div>
        <HeaderMenu title={'Recommendations anime'}/>
        <Listanime api={AnimeRecomended}/>
        <Pagination page={page} totalPage={AnimeRecomended.pagination?.last_visible_page} setPage={setPage}/>
    </div>
)

}


export default Page