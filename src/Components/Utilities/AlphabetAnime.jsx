import Link from "next/link";
const Alphabet = () =>{
    const ListAnime = []

    for(let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++){
        let letter = String.fromCharCode(i);
        ListAnime.push(letter)
    }
    return(
        <div className="grid grid-cols-12 text-white text-center my-10">
            {ListAnime.map((letter, index) => {
                return(
                    <Link href={''} key={index} className="m-auto my-2 hover:scale-110 scale-100 rounded transition-all bg-color-primary h-7 text-center w-20">{letter}</Link>
                )
            })}
        </div>
    )
}

export default Alphabet