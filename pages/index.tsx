import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/Header/Navbar'
import Cards from '@/Home/Cards'
import Smallcards from '@/Home/Smallcards'
import Table from '@/Home/Table'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div>
    <Navbar />
    <Cards/>
    <Smallcards/>
  <Table></Table>
          </div>
  )
}



