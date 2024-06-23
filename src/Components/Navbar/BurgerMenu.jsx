"use client"
import Link from "next/link";
import { List } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

const BurgerMenu = () => {
  const [clicked,setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
     
 return(
    <div className="flex justify-between items-center">
      <button onClick={handleClick} className="md:hidden block absolute top-2 right-2">
      <List size={20} />
      </button>
      <div className={`md:flex md:justify-center mx-auto text-white py-2 md:py-0 ${clicked ? 'block' : 'hidden'}`}>
        <div className="md:ml-20 ml-0 flex md:flex-row flex-col float-left md:justify-center justify-normal text-left md:text-center md:items-center items-start">
          <Link href={'/Genre'} className="md:mr-2 mr-0 cursor-pointer hover:text-color-secondary trainsiton-all duration-500 hover:scale-110 hover:rounded-lg hover:bg-color-third px-3">Genre list</Link>
          <Link href={'/AllAnime'} className=" md:ml-2 ml-0 cursor-pointer hover:text-color-secondary trainsiton-all duration-500 hover:scale-110 hover:rounded-lg hover:bg-color-third px-3">Anime list</Link>
        </div>
      </div>
    </div>
 )
}


export default BurgerMenu