import Link from "next/link"
import { Authsession } from "@/libs/authCall"

const UserLogin = async() => {
const user = await Authsession()
const actionLabel = user ? "Sign Out" : 'Sign In';
const actionUrl = user ? '/api/auth/signout' : 'api/auth/signin'

    return(
        <div className="flex gap-2 text-color-third">
            {user ? <Link href="users/Dashboard" className="bg-color-Background p-2 rounded hover:scale-110 transition-all duration-300">Dashboard</Link> : null}
             <Link href={actionUrl} className="bg-color-Background p-2 rounded hover:scale-110 transition-all duration-300">{actionLabel}</Link>  
        </div>
    )
}

export default UserLogin