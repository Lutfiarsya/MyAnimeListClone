import Alphabet from "@/Components/Utilities/AlphabetAnime"
import { getTopAnime } from "@/libs/apiCall"

const Page = async({params :{id}}) => {
    const DataAnime = await getTopAnime(`anime/${id}/full`)
    console.log(DataAnime.data)
    return(
        <div>
            <div className="grid gap-2">
                <Alphabet />
            </div>
        </div>
    )
}

export default Page