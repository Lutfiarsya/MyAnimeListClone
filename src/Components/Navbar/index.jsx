import InputSearch from "./InputSearch"
import BurgerMenu from "./BurgerMenu"
import Link from "next/link"
import UserLogin from "./UserLogin"

const Navbar = () => { 

    return(
        <nav className="flex md:flex-row flex-col justify-between bg-color-secondary p-4">
          <Link className="font-bold text-white text-2xl hover:pointer" href={"/"}>MyAnimeList</Link>
          <div className="flex">
            <BurgerMenu />
          </div>
          <div className="flex md:flex-row relative text-gray-400 focus-within:text-gray-600">
            <InputSearch />
          </div>
            <div>
              <UserLogin />
            </div>
        </nav>
    )
}

export default Navbar