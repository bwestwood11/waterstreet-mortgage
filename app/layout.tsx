import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {Toaster} from 'react-hot-toast' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Waterstreet Mortgage ',
  description: 'Mortgage brokerage in the Tampa Bay area that specializes in a variety of loan programs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster 
        position='top-center'
        />
        <Header />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
