import Listanime from "/src/Components/ListAnime"
import Header from "@/Components/ListAnime/Header"
import { getTopAnime, getNestedData, randomizeData } from "@/libs/apiCall"

const Page = async() =>{

  const topAnime = await getTopAnime('top/anime', 'limit=8') 
  let recomended = await getNestedData(`recommendations/anime` , 'entry')
  recomended = randomizeData(recomended, 8) //data dan range


  return (
    <>
    {/* Top anime */}
    <section>
      <Header title={'TOP ANIME'} linkTitle={'More'} link={'/TopAnime'}/>
      <Listanime api={topAnime}/>
    </section>
    
    {/* New anime */}
    <section>
      <Header title={'Recommendations'} linkTitle={'More'} link={'/RecomendedAnime'}/>
      <Listanime api={recomended}/>
    </section>
    </>
  )
}

export default Page
