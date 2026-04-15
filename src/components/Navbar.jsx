const Navbar = () => {
 return(
    <nav className="w-full flex justify-between items-center px-6 py-4 shadow-md">
      
      <h1 className="text-xl font-bold">
        Zharah SD
      </h1>

      <ul className="flex gap-6 text-gray-700">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Projects</li>
      </ul>
      </nav>
 )   
}

export default Navbar