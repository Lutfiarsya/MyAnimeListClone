export const getTopAnime = async(response, query) => {
    const responseApi = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/${response}?${query}`)
    const topAnimedata = await responseApi.json();
    return topAnimedata
}

export const getNestedData = async (response, Object)  => {
    const responseApi = await getTopAnime(response)
    return responseApi.data.flatMap(dataAnime => dataAnime[Object]) 
    //parameter object bertujuan untuk mencakupi semua data yang terdapat di api
}

export const randomizeData = (data, range) => {
    const firstData = ~~(Math.random() * (data.length - range) + 1)
    const lastData = firstData + range
    const response = {data: data.slice(firstData, lastData)}
    return response
}

export const RecomendedAnime = (data, range) => {
    for(let firstData = 0; firstData < data.length; firstData++){
        
    }
}
                                                         

