import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="border border-[#333]">
      <div className="flex justify-between items-center container mx-auto px-4 h-16">

        <h1><NavLink to='/'>Logo</NavLink></h1>

        <ul className="flex gap-x-6">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>

      </div>
    </div>
  )
}

export default Header