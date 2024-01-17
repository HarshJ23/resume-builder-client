import { Button } from "@/components/ui/button"
import Navbar from "./components/shared/Navbar"
import Link from "next/link"





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>

      <h1 className="font-semibold text-black text-8xl mt-16">Resume Builder</h1>
      <h1 className="font-semibold text-black text-2xl ">Coming Soon</h1>
      <Link href="create-resume">
      <Button className="font-semibold transition-transform transform hover:scale-110">
      Create Your Resume
      <span className="transition-transform transform inline-block ml-1 hover:scale-105 hover:translate-x-2">➜</span>
    </Button>
      </Link>
   
</main>
  )
}
