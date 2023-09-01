import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Cards from '@/components/Cards'
import Smallcards from '@/components/Smallcards'
import Table from '@/components/Table'



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



