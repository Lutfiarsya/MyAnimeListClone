"use client"
import Link from "next/link"
import { File } from "@phosphor-icons/react"

const NotFoundPage = () => {
    return(
        <div className="min-h-screen max-w-xl text-color-secondary flex flex-row justify-center items-center mx-auto">
            <div className="flex flex-col items-center gap-4">
            <h1 className="font-bold text-4xl">404</h1>
            <h1 className="font-bold text-4xl">PAGE NOT FOUND</h1>
            <Link href={'/'} className="hover:text-color-secondary hover:scale-105 text-white transition-all duration-500">Back to home</Link>
            </div>
        </div>
    )
}

export default NotFoundPage