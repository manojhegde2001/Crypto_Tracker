import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Header/Navbar";
import Cards from "@/components/Home/Cards";
import Smallcards from "@/components/Home/Smallcards";
import Table from "@/components/Home/Table";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <Cards />
      <Smallcards />
      <Table/>
    </div>
  );
}
