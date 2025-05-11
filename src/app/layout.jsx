import Navbar from '@/components/Navbar'
import './globals.css'
import { EB_Garamond, Inter, Cinzel } from 'next/font/google'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb-garamond',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cinzel',
})

export const metadata = {
  title: 'Web Builder Assignment',
  description: 'Web Builder Home Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${ebGaramond.variable} ${inter.variable} ${cinzel.variable} overflow-x-hidden`} content="width=device-width, initial-scale=1.0">
      <body className='bg-[#F4F3F2] w-full overflow-hidden'>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
