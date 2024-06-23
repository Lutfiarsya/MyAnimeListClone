import Link from "next/link"
const Header = ({title, link, linkTitle}) =>{
    return(
        <div className="p-4  flex flex-row justify-between bg-color-third">
            <h1 className="font-bold text-xl">{title}</h1>
            {link && linkTitle ?
            <Link href={link} className="underline hover:text-color-secondary transition-all">
                {linkTitle}
            </Link> :
            null
            }
        </div>
    )
}


export default Header