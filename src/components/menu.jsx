import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";



const Navbar = ()=>{
    return(
        <div
className="w-[20vw] hidden lg:block pt-20 pl-10 border-r-2 h-full bg-gradient-to-t from-[#FECC48]
to-[#010080]"
>
<img
  src="/iconstest.jpg"
  className="h-20 w-20 mb-16 rounded-full"
  alt="logo"
/>
<div className="mt-4">
  <ul className="flex flex-col space-y-3 text-sm">
    <li>
      <Link to="/dashboard" className="flex text-white gap-2">
        <MdDashboard size={24} color="#fff" />
        <span>Dashboard</span>
      </Link>
    </li>
    <li>
      <Link to="/users" className="flex text-white gap-2">
        <FaUsers size={24} color="#fff" />
        <span>Users</span>
      </Link>
    </li>
    <li>
      <Link to="/mou" className="flex text-white gap-2">
        <FaDatabase size={24} color="#fff" />
        <span>MOU's</span>
      </Link>
    </li>
  </ul>
</div>
<div className="mt-32">
  <ul className="flex flex-col space-y-3 text-sm">
    <li>
      <Link className="flex text-white gap-2">
        <IoMdSettings size={24} color="#fff" />
        <span>Setting</span>
      </Link>
    </li>
    <li>
      <Link className="flex text-white gap-2">
        <FaSignOutAlt size={24} color="#fff" />
        <span>Sign out</span>
      </Link>
    </li>
  </ul>
</div>
</div>
    )
}


export default Navbar;