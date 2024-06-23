"use client"
import Listanime from "@/Components/ListAnime"
import HeaderMenu from "@/Components/Utilities/HeaderMenu"
import Pagination from "@/Components/Utilities/Pagination"
import { getTopAnime } from "@/libs/apiCall"
import { useEffect, useState } from "react"


const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])
    
    const fetchData = async() => {
        const data = await getTopAnime(`top/anime`,`page=${page}`)
        setTopAnime(data);
    }

    useEffect(() => {
    fetchData()
    }, [page])


    return(
        <>
            <HeaderMenu Title={'Top anime'}/>
            <Listanime api={topAnime} />
            <Pagination page={page} totalPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </>
    )
}

export default Page