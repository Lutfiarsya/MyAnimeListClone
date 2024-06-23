import GenreAnime from "@/Components/GenreAnime"
import Header from "@/Components/ListAnime/Header"
import { getTopAnime } from "@/libs/apiCall"

const Page = async () => {
   const listGenreAnime = await getTopAnime('genres/anime')

    return(
        <section>
            <Header title={'Genre'} />
            <GenreAnime api={listGenreAnime}/>
        </section>
    )
}

export default Page