import Link from "next/link"

export default function page() {
  return (
    <div>
        <h1 className="m-4">

      <Link href="/"  className="font-semibold hover:bg-yellow-400 p-1 rounded-md transition ease-in-out">Home</Link> / <Link href="/create-resume" className="font-semibold hover:bg-yellow-400 p-1 rounded-md transition ease-in-out">Create-Resume</Link>
        </h1>
    </div>
  )
}
