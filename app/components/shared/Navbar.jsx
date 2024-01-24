

export default function Navbar() {
  return (
    <div className="border-2 border-gray-600  w-1/2 rounded-full my-4 fixed top-0 overflow-hidden" >
      <ul className="flex flex-row p-2 gap-12 justify-center font-semibold">
        <li className="hover:bg-yellow-300 transition ease-in-out p-2 px-4   rounded-full hover:cursor-pointer">Home</li>
        <li className="hover:bg-yellow-300 transition ease-in-out p-2 px-4 rounded-full hover:cursor-pointer">Career Blog</li>
        <li className="hover:bg-yellow-300 transition ease-in-out p-2 px-4 rounded-full hover:cursor-pointer">Resources</li>
        <li className="hover:bg-yellow-300 transition ease-in-out p-2 px-4 rounded-full hover:cursor-pointer">Resume Tips</li>
      </ul>
    </div>

  )
}
