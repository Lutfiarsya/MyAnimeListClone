import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Navbar from "/src/Components/Navbar"

const nunito = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'My Anime list Cloning',
  description: 'Made by Lutpay',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-color-Background ${nunito.className}`}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
