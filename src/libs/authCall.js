import { getServerSession } from "next-auth"
import { authenticationOptions } from "@/app/api/auth/[...nextauth]/route"

export const Authsession = async() => {
    const session = await getServerSession(authenticationOptions)
    return session?.user
}