import Link from "next/link"
import Listanime from "/src/Components/ListAnime"
import Header from "@/Components/ListAnime/Header"
import { getTopAnime } from "@/libs/apiCall"


const Page = async({ params }) =>{

  const { keyword } = params
  const decodedKeyword = decodeURI(keyword) // untuk menghilangankan decode space

  //memfilter anime sesuai keyword dengan kata kunci ?q={keywordnya}

  const search = await getTopAnime('anime', `q=${decodedKeyword}`)

  return (
    <>
    {/* Top anime */}
    <section>
      <Header title={`hasil dari: ${decodedKeyword}`}/>
      <Listanime api={search}/>
    </section>
    </>
  )
}

export default Page
