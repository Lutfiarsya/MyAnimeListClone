import NextAuth from "next-auth"
import githubAuth from "next-auth/providers/github"
import googleAuth from "next-auth/providers/google"

export const authenticationOptions = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET
        }),
        googleAuth({
            
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}
const handler = NextAuth(authenticationOptions)
export {handler as GET, handler as POST}