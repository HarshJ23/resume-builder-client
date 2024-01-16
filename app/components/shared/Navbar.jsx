

export default function Navbar() {
  return (
    <div className="border-2 border-gray-600 p-2 w-1/2 rounded-full my-4 fixed top-0 overflow-hidden" >
      <ul className="flex flex-row gap-12 p-2 justify-center font-semibold">
        <li className="hover:bg-yellow-300 transition ease-in-out p-2 rounded-md hover:cursor-pointer">Home</li>
        <li className="hover:bg-yellow-300 transition ease-in-out p-2 rounded-md hover:cursor-pointer">Plans</li>
        <li className="hover:bg-yellow-300 transition ease-in-out p-2 rounded-md hover:cursor-pointer">Contact</li>
        <li className="hover:bg-yellow-300 transition ease-in-out p-2 rounded-md hover:cursor-pointer">Resume Tips</li>
      </ul>
    </div>

  )
}
